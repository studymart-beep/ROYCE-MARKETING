/**
 * Meta (Facebook) Pixel — client-only helpers.
 * Pixel ID comes from VITE_META_PIXEL_ID (public by design; not a secret).
 * Never send PII (name, email, phone) as event parameters.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    __royceMetaPixelInitialized?: boolean;
  }
}

// The Pixel ID is public browser configuration. Prefer the deployment environment
// variable, but keep the supplied Royce Marketing ID as a fallback so tracking
// is not silently disabled when Vercel has not yet been configured.
const PIXEL_ID =
  (import.meta.env.VITE_META_PIXEL_ID as string | undefined)?.trim() ||
  "1448403773516840";

export function getMetaPixelId(): string {
  return PIXEL_ID;
}

export function isMetaPixelConfigured(): boolean {
  return PIXEL_ID.length > 0;
}

/** Load fbevents.js and init once. Safe to call multiple times. */
export function initMetaPixel(): void {
  if (typeof window === "undefined") return;
  if (!PIXEL_ID) return;
  if (window.__royceMetaPixelInitialized) return;

  // Official Meta base code pattern
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const w = window as any;
  if (!w.fbq) {
    const n: any = (w.fbq = function (...args: unknown[]) {
      if (n.callMethod) {
        n.callMethod(...args);
      } else {
        n.queue.push(args);
      }
    });
    if (!w._fbq) w._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [] as unknown[];
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    const first = document.getElementsByTagName("script")[0];
    first?.parentNode?.insertBefore(script, first);
  }

  window.fbq?.("init", PIXEL_ID);
  window.__royceMetaPixelInitialized = true;
}

export function trackPageView(): void {
  if (typeof window === "undefined" || !PIXEL_ID) return;
  initMetaPixel();
  window.fbq?.("track", "PageView");
}

/**
 * Fire Lead only after a successful server-side lead save.
 * Dedupes per leadId in sessionStorage to reduce refresh duplicates.
 */
export function trackLead(leadId?: string | number): void {
  if (typeof window === "undefined" || !PIXEL_ID) return;
  initMetaPixel();

  if (leadId != null) {
    const key = `royce_meta_lead_${leadId}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      // sessionStorage may be blocked; still fire once this session in memory
    }
  }

  // No PII parameters
  window.fbq?.("track", "Lead");
}

/**
 * Fire Schedule only after a confirmed booking (e.g. Cal.com postMessage / success URL).
 * Do not call on mere visits to /thank-you or /book-call.
 */
export function trackSchedule(bookingId?: string): void {
  if (typeof window === "undefined" || !PIXEL_ID) return;
  initMetaPixel();

  if (bookingId) {
    const key = `royce_meta_schedule_${bookingId}`;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch {
      // ignore
    }
  }

  window.fbq?.("track", "Schedule");
}
