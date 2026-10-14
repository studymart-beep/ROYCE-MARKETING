import { ArrowRight, SearchCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function AuditOffer() {
  return (
    <section id="audit" className="bg-paper px-4 py-16 md:px-6 md:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-deep px-6 py-12 text-paper shadow-lg shadow-primary/25 md:px-12 md:py-14">
        <div
          className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-1/3 size-72 rounded-full bg-white/5"
          aria-hidden
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-paper">
              <SearchCheck className="size-3.5" />
              Free Ad Audit
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
              Request a free look at your ads and tracking
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/85 md:text-base">
              Tell us about your business and goals. We will review what we can see and
              share practical next steps — whether you work with us or not.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-paper text-primary hover:bg-ivory shadow-md"
          >
            <Link to="/free-audit">
              Get Your Free Audit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
