import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/landing/contact";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Navbar } from "@/components/landing/navbar";
import { Services } from "@/components/landing/services";
import { WhyChoose } from "@/components/landing/why-choose";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    name: SITE.name,
    description: SITE.description,
    url: "/",
    telephone: "+2349042436206",
    sameAs: [SITE.instagramUrl, SITE.tiktokUrl, SITE.whatsappUrl],
    areaServed: "NG",
    knowsAbout: [
      "Social media advertising",
      "Google Ads",
      "Brand promotion",
      "Video advertising",
      "Digital marketing",
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
        <WhyChoose />
        <HowItWorks />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
