import { ClipboardCheck, PhoneCall, Rocket, LineChart } from "lucide-react";
import { Section, SectionIntro } from "@/components/landing/section";

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Free Ad Audit",
    body: "Share your business and current ads (if any). We review structure, tracking, and opportunities — honestly.",
  },
  {
    icon: PhoneCall,
    title: "Strategy Call",
    body: "A short call to align on goals, budget range, and whether Meta, TikTok, or both make sense for you.",
  },
  {
    icon: Rocket,
    title: "Campaign Setup",
    body: "Account setup support, tracking checks, creative direction, and launch of structured campaigns.",
  },
  {
    icon: LineChart,
    title: "Track & Optimize",
    body: "Monitor performance, test improvements, and report clearly so you know what is changing and why.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-paper">
      <SectionIntro
        eyebrow="How it works"
        title="A simple path from first conversation to live campaigns"
        description="Four clear steps. No pressure tactics and no guaranteed-result claims."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, index) => (
          <div
            key={step.title}
            className="relative rounded-2xl border border-border bg-ivory/60 p-6 shadow-sm"
          >
            <span className="absolute right-4 top-4 text-4xl font-bold text-primary/10">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <step.icon className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
