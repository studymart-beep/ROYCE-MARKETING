import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionIntro } from "@/components/landing/section";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "What platforms do you manage?",
    a: "We focus on Meta Ads (Facebook and Instagram) and TikTok Ads — including account setup support, campaign structure, tracking guidance, and ongoing optimization.",
  },
  {
    q: "What is the free ad audit?",
    a: "A short review of your business goals, current advertising (if any), and tracking setup. You get practical observations and suggested next steps. It is not a full managed campaign.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. Paid advertising outcomes depend on your offer, creative, budget, competition, and market conditions. We commit to a clear process and honest reporting — not guaranteed ROI claims.",
  },
  {
    q: "How do budgets work?",
    a: "Ad spend is paid to Meta or TikTok. Our service fee is separate and discussed on a strategy call based on scope. We will not invent numbers on the website.",
  },
  {
    q: "Do I need a website?",
    a: "A website or landing page helps, but some businesses start with social profiles and simple lead forms. We will recommend what fits your situation during the audit or call.",
  },
  {
    q: "How do I get started?",
    a: "Request a free ad audit or book a strategy call. We will follow up with next steps if there is a good fit.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-paper">
      <SectionIntro
        eyebrow="FAQ"
        title="Common questions"
        description="Straight answers about how we work."
      />
      <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-ivory/50 shadow-sm">
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-ink md:px-6 md:text-base"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                {item.q}
                <ChevronDown
                  className={cn(
                    "size-5 shrink-0 text-muted transition-transform",
                    isOpen && "rotate-180 text-primary",
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-200",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-muted md:px-6">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
