import { ArrowRight, BarChart3, Megaphone, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";

const PLATFORMS = ["Facebook Ads", "Instagram Ads", "TikTok Ads", "Google Ads", "YouTube Ads"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-hero-glow bg-paper"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="stagger-in">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Advertising Agency
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-ink md:text-5xl lg:text-6xl">
            Your Brand Deserves
            <span className="block text-primary">To Be Seen.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            Royce Marketing helps businesses reach the right audience, build brand
            awareness, and grow through powerful advertising and digital marketing
            solutions.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <a href="#contact">
                Start Advertising
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#services">Explore Our Services</a>
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
              alt="Advertising campaign workspace with analytics dashboards, social ads, and creative boards"
              className="aspect-4/3 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
              width={1600}
              height={1200}
            />
          </div>

          <div className="animate-float absolute -left-2 top-8 hidden w-44 rounded-lg bg-paper p-3 shadow-float sm:block md:-left-6">
            <div className="flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-md bg-primary-soft text-primary">
                <Megaphone className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">Campaign live</p>
                <p className="text-xs text-muted">Social · Search · Video</p>
              </div>
            </div>
          </div>

          <div className="animate-float-delayed absolute -right-2 bottom-16 hidden w-48 rounded-lg bg-paper p-3 shadow-float sm:block md:-right-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-md bg-accent-soft text-accent">
                <BarChart3 className="size-4" />
              </span>
              <div>
                <p className="text-xs font-semibold text-ink">Audience growth</p>
                <p className="text-xs text-muted">Reach the right people</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-paper/95 px-3 py-2 shadow-float backdrop-blur-sm md:left-6">
            <Radio className="size-3.5 text-primary" />
            <span className="text-xs font-medium text-ink">Creative ads in motion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
