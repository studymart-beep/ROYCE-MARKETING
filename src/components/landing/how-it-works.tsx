import { Section, SectionIntro } from "@/components/landing/section";

const STEPS = [
  {
    number: "01",
    title: "Tell Us Your Goal",
    text: "Share your business, product, service, or campaign objective.",
  },
  {
    number: "02",
    title: "We Create Your Campaign",
    text: "Our team develops the advertising strategy and creative direction.",
  },
  {
    number: "03",
    title: "Reach More People",
    text: "Launch your campaign and connect with your target audience.",
  },
];

export function HowItWorks() {
  return (
    <Section tone="ivory">
      <SectionIntro eyebrow="Process" title="From Idea to Impact." />
      <ol className="relative mt-14 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div
          className="pointer-events-none absolute top-7 right-16 left-16 hidden h-px bg-border lg:block"
          aria-hidden="true"
        />
        {STEPS.map((step) => (
          <li key={step.number} className="relative">
            <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
              <span className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-full bg-paper text-sm font-semibold tracking-wide text-primary shadow-card">
                {step.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted lg:mx-auto">
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
