import { BrandLockup } from "@/components/landing/logo";
import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/landing/social-icons";
import { NAV_LINKS, SITE } from "@/lib/site";

const SOCIALS = [
  { href: SITE.whatsappUrl, label: "WhatsApp", icon: WhatsAppIcon },
  { href: SITE.instagramUrl, label: "Instagram", icon: InstagramIcon },
  { href: SITE.tiktokUrl, label: "TikTok", icon: TikTokIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <BrandLockup />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Royce Marketing is a premium advertising and digital marketing agency
            helping businesses, brands, and organizations reach more people
            through campaigns that get noticed.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink">
            Connect
          </p>
          <ul className="mt-4 space-y-2">
            {SOCIALS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
                >
                  <item.icon className="size-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted md:px-6">
          © 2026 {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
