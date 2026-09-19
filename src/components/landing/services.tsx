import {
  Clapperboard,
  LineChart,
  Megaphone,
  Search,
  Share2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionIntro } from "@/components/landing/section";

const SERVICES: {
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}[] = [
  {
    title: "Social Media Advertising",
    description: "Run engaging advertising campaigns across social media platforms.",
    items: ["Facebook Ads", "Instagram Ads", "TikTok Ads", "Social media promotions"],
    icon: Share2,
  },
  {
    title: "Google Advertising",
    description: "Help businesses reach customers actively searching online.",
    items: ["Google Search Ads", "Display Ads", "YouTube Ads", "Online promotional campaigns"],
    icon: Search,
  },
  {
    title: "Brand Promotion",
    description: "Make your business visible and memorable.",
    items: [
      "Brand awareness campaigns",
      "Product promotion",
      "Business promotion",
      "Creative advertising content",
    ],
    icon: Sparkles,
  },
  {
    title: "Digital Marketing",
    description: "Build a stronger online presence through modern digital strategies.",
    items: [
      "Online campaigns",
      "Audience targeting",
      "Content promotion",
      "Digital growth strategy",
    ],
    icon: LineChart,
  },
  {
    title: "Video & Creative Ads",
    description: "Create advertising content that captures attention.",
    items: [
      "Video advertisements",
      "Promotional graphics",
      "Creative campaign designs",
      "Social media content",
    ],
    icon: Clapperboard,
  },
  {
    title: "Campaign Management",
    description: "Plan, launch, and manage advertising campaigns.",
    items: ["Campaign setup", "Ad optimization", "Audience research", "Performance monitoring"],
    icon: Megaphone,
  },
];

export function Services() {
  return (
    <Section id="services" tone="ivory">
      <SectionIntro
        eyebrow="Services"
        title="We Advertise. You Grow."
        description="From social media campaigns to digital advertising, Royce Marketing helps businesses put their message in front of the right audience."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="group rounded-xl bg-paper p-6 shadow-card transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-card-hover"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <service.icon className="size-5" strokeWidth={1.75} />
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
              {service.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
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
