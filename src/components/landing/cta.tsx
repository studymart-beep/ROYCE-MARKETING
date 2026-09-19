import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function Cta() {
  return (
    <section className="bg-paper px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-primary px-6 py-14 text-center text-paper shadow-card md:px-16 md:py-20">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-soft">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Start a campaign
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Ready to Put Your Brand in Front of More People?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-soft md:text-lg">
          Let Royce Marketing help you create advertising campaigns that get your
          business noticed.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="inverse" size="lg">
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Your Campaign
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="onPrimary" size="lg">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
