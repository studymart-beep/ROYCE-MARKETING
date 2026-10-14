import { ArrowRight, BarChart3, Megaphone, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-paper">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_85%_0%,#dbeafe_0%,transparent_55%),radial-gradient(50%_40%_at_10%_100%,#eff6ff_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="stagger-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            Meta Ads &amp; TikTok Ads
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]">
            Your brand deserves
            <span className="block bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
              to be seen.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Royce Marketing helps businesses attract the right audience and generate
            opportunities with Meta Ads (Facebook &amp; Instagram) and TikTok Ads —
            from strategy and account setup to tracking, launch, and clear reporting.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="shadow-md shadow-primary/20">
              <Link to="/free-audit">
                Get a Free Ad Audit
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/book-call">Book a Free Strategy Call</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted">
            Honest process. No invented results. Built around your goals and budget.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-ink/5">
            <img
              src="/images/hero-campaign.jpg"
              alt="Advertising analytics and campaign workspace"
              className="aspect-[4/3] w-full object-cover"
              width={1600}
              height={1200}
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-3 left-3 right-3 grid grid-cols-3 gap-2 sm:-bottom-4 sm:left-5 sm:right-auto sm:w-52 sm:grid-cols-1 sm:gap-2.5">
            {[
              { icon: Target, label: "Audience targeting" },
              { icon: BarChart3, label: "Performance tracking" },
              { icon: TrendingUp, label: "Ongoing optimization" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-xl border border-border/80 bg-paper/95 px-3 py-2.5 shadow-float backdrop-blur-md"
              >
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
                  <item.icon className="size-4" strokeWidth={1.75} />
                </span>
                <span className="text-xs font-medium text-ink">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="animate-float absolute -right-1 top-6 hidden rounded-xl border border-border/80 bg-paper/95 px-3 py-2.5 shadow-float backdrop-blur-md sm:flex sm:items-center sm:gap-2 md:-right-3">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
              <Megaphone className="size-4" strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-xs font-semibold text-ink">Campaign ready</p>
              <p className="text-[11px] text-muted">Meta · TikTok · Tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
