import { createFileRoute } from "@tanstack/react-router";
import { AuditOffer } from "@/components/landing/audit-offer";
import { Benefits } from "@/components/landing/benefits";
import { Cta } from "@/components/landing/cta";
import { Faq } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { FunnelProcess } from "@/components/landing/funnel-process";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Navbar } from "@/components/landing/navbar";
import { Services } from "@/components/landing/services";
import { StickyCta } from "@/components/landing/sticky-cta";
import { Trust } from "@/components/landing/trust";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneInternational,
    sameAs: [SITE.instagramUrl, SITE.tiktokUrl, SITE.whatsappUrl],
    areaServed: "NG",
    knowsAbout: [
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "TikTok Ads",
      "Conversion tracking",
      "Landing page optimization",
    ],
  };

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <FunnelProcess />
        <HowItWorks />
        <AuditOffer />
        <Trust />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <StickyCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
