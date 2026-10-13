import { ClipboardList, LineChart, MessageSquare, Shield } from "lucide-react";
import { Section, SectionIntro } from "@/components/landing/section";

const POINTS = [
  {
    icon: MessageSquare,
    title: "Clear communication",
    text: "You know what is running, why it is running, and what we are changing — without waiting for a mystery monthly PDF.",
  },
  {
    icon: LineChart,
    title: "Honest reporting",
    text: "We report what the platforms actually show. No inflated claims or guaranteed outcomes.",
  },
  {
    icon: ClipboardList,
    title: "Documented process",
    text: "Strategy, launch checklists, and optimization notes so work does not live only in one person's head.",
  },
  {
    icon: Shield,
    title: "Transparent access",
    text: "Where possible, you retain ownership of ad accounts and assets. We work as a partner, not a gatekeeper.",
  },
];

export function Trust() {
  return (
    <Section id="trust" tone="ivory">
      <SectionIntro
        eyebrow="Working with us"
        title="Process, communication, and transparency."
        description="We do not invent case studies or ratings. What you can expect is a professional process and open reporting."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {POINTS.map((point) => (
          <div
            key={point.title}
            className="flex gap-4 rounded-xl bg-paper p-6 shadow-card"
          >
            <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <point.icon className="size-5" strokeWidth={1.75} />
            </span>
            <div>
              <h3 className="text-base font-semibold tracking-tight text-ink">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {point.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 rounded-xl border border-dashed border-border bg-paper/60 px-5 py-4 text-sm text-muted">
        <strong className="font-semibold text-ink">Client results:</strong>{" "}
        When we have permission to share specific campaign outcomes, they will
        appear here. Until then, we focus on process and measurable work rather
        than unverified claims.
      </p>
    </Section>
  );
}
