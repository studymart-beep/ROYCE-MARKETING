import { Section, SectionIntro } from "@/components/landing/section";

const STEPS = [
  {
    number: "01",
    title: "Discover your goals",
    text: "We clarify what success looks like — leads, sales, awareness — and the constraints of your market and offer.",
  },
  {
    number: "02",
    title: "Audit the current setup",
    text: "We review existing ad accounts, creatives, tracking, and landing experience to find gaps and opportunities.",
  },
  {
    number: "03",
    title: "Develop the strategy",
    text: "Audience, offer, creative direction, budget allocation, and measurement plan tailored to your business.",
  },
  {
    number: "04",
    title: "Launch & optimize",
    text: "Campaigns go live with disciplined testing. We adjust targeting, creatives, and bids based on real data.",
  },
  {
    number: "05",
    title: "Measure & report",
    text: "You receive clear performance summaries and next-step recommendations — no jargon, no black boxes.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="paper">
      <SectionIntro
        eyebrow="Process"
        title="How we work with you."
        description="A clear path from first conversation to live campaigns and ongoing improvement."
      />
      <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {STEPS.map((step) => (
          <li key={step.number} className="relative">
            <div className="flex items-start gap-4 lg:flex-col lg:items-start">
              <span className="relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold tracking-wide text-primary">
                {step.number}
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
