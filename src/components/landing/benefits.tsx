import { Eye, HeartHandshake, LineChart, Users } from "lucide-react";
import { Section, SectionIntro } from "@/components/landing/section";

const ITEMS = [
  {
    icon: Eye,
    title: "Targeted advertising",
    body: "Reach people based on interests, behaviour, and intent — not random reach for the sake of numbers.",
  },
  {
    icon: Users,
    title: "More of the right customers",
    body: "Campaigns structured around who you want to attract, so spend goes toward relevant audiences.",
  },
  {
    icon: HeartHandshake,
    title: "Higher engagement potential",
    body: "Creative and placement choices aligned with how Meta and TikTok users actually interact.",
  },
  {
    icon: LineChart,
    title: "Measurable results",
    body: "Tracking and reporting so you can see what is working — without inflated or invented claims.",
  },
];

export function Benefits() {
  return (
    <Section id="benefits" className="bg-paper">
      <SectionIntro
        eyebrow="Why paid ads"
        title="Clear benefits when advertising is done properly"
        description="Paid social works best when targeting, creative, tracking, and follow-up are connected — not when budgets are spent without a plan."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-ivory/80 p-6 shadow-sm transition hover:border-primary/20 hover:shadow-card"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <item.icon className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-base font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
