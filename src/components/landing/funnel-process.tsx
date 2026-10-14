import { Filter, MessageSquare, MousePointerClick, RefreshCw, UserPlus } from "lucide-react";
import { Section, SectionIntro } from "@/components/landing/section";

const STEPS = [
  {
    icon: MousePointerClick,
    title: "Attract the right audience",
    body: "Ads on Meta and TikTok put your offer in front of people who match your ideal customer profile.",
  },
  {
    icon: UserPlus,
    title: "Capture leads",
    body: "Landing pages and forms collect contact details from people who take the next step.",
  },
  {
    icon: MessageSquare,
    title: "Nurture prospects",
    body: "Follow-up via WhatsApp, email, or calls turns interest into a real conversation.",
  },
  {
    icon: Filter,
    title: "Convert customers",
    body: "Clear offers and a simple path from inquiry to purchase or booked call.",
  },
  {
    icon: RefreshCw,
    title: "Measure & optimize",
    body: "Pixel data and campaign reports guide what to improve next — creatives, audiences, or landing pages.",
  },
];

export function FunnelProcess() {
  return (
    <Section id="funnel" className="bg-ivory">
      <SectionIntro
        eyebrow="Marketing funnel"
        title="How ads, pages, and follow-up work together"
        description="Advertising is one part of a simple system: attract, capture, nurture, convert, and improve. We help you connect those pieces."
      />
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="relative flex flex-col rounded-2xl border border-border bg-paper p-5 shadow-sm"
          >
            <span className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-paper">
              {i + 1}
            </span>
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <step.icon className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-3 text-sm font-semibold text-ink">{step.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
