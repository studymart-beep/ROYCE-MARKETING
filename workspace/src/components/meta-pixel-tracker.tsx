import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import { initMetaPixel, isMetaPixelConfigured, trackPageView } from "@/lib/meta-pixel";

/**
 * Initializes Meta Pixel once and tracks PageView on route changes
 * without double-firing on the same path in quick succession.
 */
export function MetaPixelTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.searchStr });
  const lastKey = useRef<string>("");

  useEffect(() => {
    if (!isMetaPixelConfigured()) return;
    initMetaPixel();
  }, []);

  useEffect(() => {
    if (!isMetaPixelConfigured()) return;
    const key = `${pathname}${search}`;
    if (lastKey.current === key) return;
    lastKey.current = key;
    trackPageView();
  }, [pathname, search]);

  if (!isMetaPixelConfigured()) return null;

  // Noscript fallback image for non-JS environments (static ID from env at build time)
  const id = import.meta.env.VITE_META_PIXEL_ID as string;
  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${encodeURIComponent(id)}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  );
}
