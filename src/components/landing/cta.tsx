import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-paper px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-primary px-6 py-14 text-center text-paper shadow-card md:px-16 md:py-20">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-soft">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          Next step
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Ready to attract more qualified leads?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-primary-soft md:text-lg">
          Book a free strategy call or request a free ad audit. We will review
          your situation and outline practical next steps — no pressure, no
          guaranteed-result claims.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="inverse" size="lg">
            <Link to="/book-call">
              Book a Free Strategy Call
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="onPrimary" size="lg">
            <Link to="/free-audit">Get a Free Ad Audit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
