import { Section, SectionIntro } from "@/components/landing/section";

const FAQS = [
  {
    q: "How does the service work?",
    a: "We start with a discovery call or audit request, then propose a strategy for Meta Ads and/or TikTok Ads. After agreement, we set up or take over campaigns, implement tracking where needed, launch, and optimize. You receive regular updates on performance and recommended changes.",
  },
  {
    q: "Who is this for?",
    a: "Businesses and brands that want to attract qualified leads or drive measurable demand through paid social — especially on Facebook, Instagram, and TikTok. It is a fit if you have a clear offer, a way to follow up on leads, and a realistic budget for ads plus management.",
  },
  {
    q: "What affects pricing?",
    a: "Pricing depends on platforms managed, campaign complexity, number of offers or markets, and the level of creative and landing-page support required. Ad spend is separate and paid directly to the platforms. We discuss scope before any engagement.",
  },
  {
    q: "How do advertising budgets work?",
    a: "You fund the ad platforms (Meta, TikTok) directly from your own ad accounts whenever possible. Management fees are separate. We help set a starting budget range based on your goals and market, then adjust based on performance data — we do not promise a fixed cost-per-result.",
  },
  {
    q: "What do I need before campaigns launch?",
    a: "Typically: access to (or creation of) ad accounts, business assets (logo, product info, creatives or brief), a landing page or lead form destination, and clarity on the conversion action you care about (form fill, call, purchase, etc.). Tracking setup is part of the process when it is not already in place.",
  },
  {
    q: "Do you guarantee results?",
    a: "No. Paid advertising outcomes depend on offer, creative, audience, competition, tracking quality, and budget. We commit to a professional process, transparent reporting, and continuous optimization — not guaranteed ROAS or lead volume.",
  },
];

export function Faq() {
  return (
    <Section id="faq" tone="ivory">
      <SectionIntro eyebrow="FAQ" title="Common questions before you start." />
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-border rounded-xl bg-paper shadow-card">
        {FAQS.map((item) => (
          <details key={item.q} className="group px-6 py-5">
            <summary className="cursor-pointer list-none text-base font-semibold tracking-tight text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {item.q}
                <span className="text-muted transition-transform group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
