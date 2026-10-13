import { CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "@/components/landing/section";
import { Button } from "@/components/ui/button";

const INCLUDES = [
  "Review of current Meta and/or TikTok ad setup (if you have one)",
  "High-level assessment of tracking and conversion events",
  "Notes on creative and audience alignment with your offer",
  "Practical next-step recommendations — not a hard sell",
];

export function AuditOffer() {
  return (
    <Section id="audit" tone="paper">
      <div className="grid items-center gap-10 rounded-xl bg-primary px-6 py-12 text-paper shadow-card md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-14">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary-soft">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Free Ad Audit
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
            See where your ads stand before you spend more.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-primary-soft">
            Request a free advertising audit. We will review what you share and
            respond with observations and suggested next steps. This is not a
            guarantee of results — it is a structured look at your current setup.
          </p>
          <ul className="mt-6 space-y-3">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-paper">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start gap-4 rounded-xl bg-paper/10 p-6 ring-1 ring-paper/20">
          <p className="text-sm text-primary-soft">
            Takes about 2 minutes. We only ask for what we need to qualify the
            request.
          </p>
          <Button asChild variant="inverse" size="lg">
            <Link to="/free-audit">Request Free Ad Audit</Link>
          </Button>
          <Button asChild variant="onPrimary" size="lg">
            <Link to="/book-call">Or book a strategy call</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
