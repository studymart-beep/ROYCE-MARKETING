import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="border-t border-border bg-ivory px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl lg:text-4xl">
          Ready to put your brand in front of more of the right people?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
          Start with a free ad audit or a short strategy call. We will be clear about
          fit, process, and next steps — with no invented results.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="shadow-md shadow-primary/15">
            <Link to="/book-call">
              Book a Free Strategy Call
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link to="/free-audit">Get a Free Ad Audit</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
