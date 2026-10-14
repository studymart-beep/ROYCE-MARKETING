import { Handshake, Lock, ListChecks } from "lucide-react";
import { Section, SectionIntro } from "@/components/landing/section";

const POINTS = [
  {
    icon: ListChecks,
    title: "Clear process",
    body: "You always know the next step — audit, call, setup, or optimization — with plain language, not jargon.",
  },
  {
    icon: Lock,
    title: "Transparent communication",
    body: "We explain what we are doing with your budget and accounts. No hidden markups presented as “magic”.",
  },
  {
    icon: Handshake,
    title: "Honest expectations",
    body: "We do not invent testimonials, ratings, or performance stats. Results depend on offer, creative, budget, and market.",
  },
];

export function Trust() {
  return (
    <Section id="about" className="bg-ivory">
      <SectionIntro
        eyebrow="How we work"
        title="Built on process and transparency"
        description="Trust comes from how we work with you — not from fabricated case studies or fake logos."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {POINTS.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border bg-paper p-6 shadow-sm">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <p.icon className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
