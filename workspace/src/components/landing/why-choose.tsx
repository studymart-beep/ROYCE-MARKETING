import {
  Compass,
  Layers,
  ShieldCheck,
  Target,
  TrendingUp,
  WandSparkles,
} from "lucide-react";
import { Section } from "@/components/landing/section";

const FEATURES = [
  {
    title: "Creative advertising solutions",
    text: "Campaigns designed to stop the scroll and stay memorable.",
    icon: WandSparkles,
  },
  {
    title: "Multi-platform advertising",
    text: "Social, search, video, and display — coordinated as one plan.",
    icon: Layers,
  },
  {
    title: "Audience-focused campaigns",
    text: "We put your message in front of people who actually need it.",
    icon: Target,
  },
  {
    title: "Professional service",
    text: "Clear communication, careful execution, and accountable delivery.",
    icon: ShieldCheck,
  },
  {
    title: "Business growth mindset",
    text: "Every campaign is built around visibility, reach, and results.",
    icon: TrendingUp,
  },
  {
    title: "Modern digital strategies",
    text: "Current platforms, current formats, current audience behavior.",
    icon: Compass,
  },
];

export function WhyChoose() {
  return (
    <Section id="about" tone="paper">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-xl shadow-card">
            <img
              src="/images/studio.jpg"
              alt="Bright advertising studio with campaign moodboards and creative work in progress"
              className="aspect-4/3 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
              width={1600}
              height={1200}
            />
          </div>
          <div className="absolute -bottom-5 -right-2 hidden max-w-xs rounded-lg bg-paper p-4 shadow-float sm:block lg:-right-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Your message
            </p>
            <p className="mt-1 text-sm font-medium text-ink">Our job is to make it travel.</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Why Royce Marketing
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
            Your Message. Our Reach.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            We combine creative advertising, digital strategy, and audience-focused
            campaigns to help businesses connect with more people and create
            meaningful growth opportunities.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="flex gap-3 rounded-lg bg-ivory p-4">
                <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-primary-soft text-primary">
                  <feature.icon className="size-4" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{feature.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
