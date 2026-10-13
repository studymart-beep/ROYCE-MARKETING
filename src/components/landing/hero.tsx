import { ArrowRight, BarChart3, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const PLATFORMS = ["Meta Ads", "Instagram Ads", "TikTok Ads", "Funnel Optimization", "Conversion Tracking"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-glow bg-paper">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="stagger-in">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Meta Ads &amp; TikTok Ads Agency
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
            Attract Qualified Leads
            <span className="block text-primary">Through Paid Ads</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Royce Marketing helps businesses generate opportunities with Meta Ads
            (Facebook &amp; Instagram) and TikTok Ads — from strategy and tracking
            to launch, optimization, and clear reporting.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link to="/book-call">
                Book a Free Strategy Call
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link to="/free-audit">Get a Free Ad Audit</Link>
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted">
            {PLATFORMS.map((name, index) => (
              <li key={name} className="inline-flex items-center gap-4">
                {index > 0 ? (
                  <span className="hidden size-1 rounded-full bg-border sm:inline-block" aria-hidden="true" />
                ) : null}
                {name}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="relative overflow-hidden rounded-xl shadow-card">
            <img
              src="/images/hero-campaign.jpg"
              alt="Advertising campaign analytics dashboard showing funnel performance and audience insights"
              className="aspect-4/3 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
              width={1600}
              height={1200}
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-4 left-4 right-4 grid grid-cols-3 gap-2 sm:left-6 sm:right-auto sm:w-48 sm:grid-cols-1 sm:gap-3">
            {[
              { icon: Target, label: "Audience targeting" },
              { icon: BarChart3, label: "Performance tracking" },
              { icon: TrendingUp, label: "Ongoing optimization" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 rounded-lg bg-paper/95 px-3 py-2.5 shadow-float backdrop-blur-sm">
                <item.icon className="size-4 shrink-0 text-primary" strokeWidth={1.75} />
                <span className="text-xs font-medium text-ink">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
