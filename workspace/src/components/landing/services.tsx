import { ArrowRight, Check, Facebook, Music2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section, SectionIntro } from "@/components/landing/section";

const META_POINTS = [
  "Facebook & Instagram campaign strategy",
  "Meta Business Manager & ad account setup",
  "Pixel / CAPI tracking guidance",
  "Creative testing and audience structure",
  "Ongoing optimization and clear reporting",
];

const TIKTOK_POINTS = [
  "TikTok Ads account & pixel setup support",
  "Creative-first campaign structure",
  "Spark Ads and in-feed formats guidance",
  "Audience and placement strategy",
  "Performance review and iteration",
];

export function Services() {
  return (
    <Section id="services" className="bg-ivory">
      <SectionIntro
        eyebrow="Services"
        title="Advertising that puts your brand in front of the right people"
        description="Focused Meta and TikTok advertising — setup, management, and measurement — without noise or empty promises."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-paper p-7 shadow-card transition hover:shadow-card-hover md:p-8">
          <div className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/5 transition group-hover:bg-primary/10" aria-hidden />
          <div className="relative flex items-center gap-3">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary text-paper shadow-md shadow-primary/25">
              <Facebook className="size-6" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-ink">Meta Ads Management</h3>
              <p className="text-sm text-muted">Facebook · Instagram · Account setup</p>
            </div>
          </div>
          <p className="relative mt-5 text-sm leading-relaxed text-muted">
            Strategy, account structure, and campaign management so your brand reaches
            people who are more likely to care — with tracking set up the right way.
          </p>
          <ul className="relative mt-6 flex-1 space-y-2.5">
            {META_POINTS.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm text-ink">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.25} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="relative mt-8 w-full sm:w-auto" size="lg">
            <Link to="/free-audit">
              Get a Free Meta Ad Audit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </article>

        <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-paper p-7 shadow-card transition hover:shadow-card-hover md:p-8">
          <div className="absolute -right-8 -top-8 size-32 rounded-full bg-primary/5 transition group-hover:bg-primary/10" aria-hidden />
          <div className="relative flex items-center gap-3">
            <span className="inline-flex size-12 items-center justify-center rounded-xl bg-ink text-paper shadow-md">
              <Music2 className="size-6" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-xl font-semibold text-ink">TikTok Ad Management</h3>
              <p className="text-sm text-muted">TikTok Ads · Account setup</p>
            </div>
          </div>
          <p className="relative mt-5 text-sm leading-relaxed text-muted">
            Creative-led campaigns built for how people actually watch and discover on
            TikTok — with clear structure, tracking, and steady optimization.
          </p>
          <ul className="relative mt-6 flex-1 space-y-2.5">
            {TIKTOK_POINTS.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm text-ink">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={2.25} />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="relative mt-8 w-full sm:w-auto" size="lg">
            <Link to="/free-audit">
              Get a Free TikTok Ad Audit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </article>
      </div>
    </Section>
  );
}
