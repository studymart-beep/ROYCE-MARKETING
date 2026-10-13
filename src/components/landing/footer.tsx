import { Link } from "@tanstack/react-router";
import { BrandLockup } from "@/components/landing/logo";
import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/landing/social-icons";
import { SITE } from "@/lib/site";

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
            Royce Marketing helps businesses attract qualified leads through Meta
            Ads and TikTok Ads — with clear process, tracking, and reporting.
          </p>
          <p className="mt-3 text-sm text-muted">
            WhatsApp:{" "}
            <a
              href={SITE.whatsappUrl}
              className="font-medium text-ink hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE.phoneDisplay}
            </a>
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink">Services</p>
          <ul className="mt-4 space-y-2">
            <li><a href="/#services" className="text-sm text-muted transition-colors hover:text-ink">Meta Ads</a></li>
            <li><a href="/#services" className="text-sm text-muted transition-colors hover:text-ink">TikTok Ads</a></li>
            <li><Link to="/free-audit" className="text-sm text-muted transition-colors hover:text-ink">Free Ad Audit</Link></li>
            <li><Link to="/book-call" className="text-sm text-muted transition-colors hover:text-ink">Strategy Call</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-ink">Connect</p>
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
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-ink">Legal</p>
          <ul className="mt-3 space-y-2">
            <li><Link to="/privacy" className="text-sm text-muted transition-colors hover:text-ink">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-sm text-muted transition-colors hover:text-ink">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted md:px-6">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
