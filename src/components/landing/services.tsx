import {
  BarChart3,
  Crosshair,
  LayoutTemplate,
  Megaphone,
  Radio,
} from "lucide-react";
import { Section, SectionIntro } from "@/components/landing/section";

const SERVICES = [
  {
    title: "Meta Ads Management",
    description:
      "Facebook and Instagram campaigns built to reach the right people and drive qualified actions — not just vanity metrics.",
    items: [
      "Campaign structure & audience strategy",
      "Creative testing and iteration",
      "Budget pacing and bid management",
      "Ongoing optimization",
    ],
    icon: Megaphone,
  },
  {
    title: "TikTok Ads Management",
    description:
      "Native TikTok campaigns that match how people discover and engage on the platform.",
    items: [
      "In-feed and spark ads setup",
      "Creative direction for short-form video",
      "Audience and interest targeting",
      "Performance monitoring",
    ],
    icon: Radio,
  },
  {
    title: "Landing Page & Funnel Optimization",
    description:
      "Align your ads with pages and funnels that convert interest into leads or sales.",
    items: [
      "Offer and message clarity",
      "Page structure recommendations",
      "Friction reduction on key steps",
      "Post-click experience review",
    ],
    icon: LayoutTemplate,
  },
  {
    title: "Pixel & Conversion Tracking",
    description:
      "Reliable tracking so you can measure what matters and optimize toward real outcomes.",
    items: [
      "Meta Pixel / CAPI setup guidance",
      "TikTok Pixel setup",
      "Event mapping for key actions",
      "Basic QA of tracking health",
    ],
    icon: Crosshair,
  },
  {
    title: "Campaign Reporting & Optimization",
    description:
      "Clear reporting and disciplined optimization so you always know what is working.",
    items: [
      "Regular performance summaries",
      "Insight-driven recommendations",
      "Budget and creative adjustments",
      "Transparent communication",
    ],
    icon: BarChart3,
  },
];

export function Services() {
  return (
    <Section id="services" tone="ivory">
      <SectionIntro
        eyebrow="Services"
        title="Paid advertising built around qualified demand."
        description="Focused Meta Ads and TikTok Ads management, plus the tracking and funnel work that makes campaigns measurable."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="flex flex-col rounded-xl bg-paper p-6 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <service.icon className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <ul className="mt-5 space-y-2">
              {service.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
