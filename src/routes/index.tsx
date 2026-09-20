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

    "@id": `${SITE.url}/#organization`,

    name: SITE.name,
    alternateName: "ROYCE",
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phoneInternational,

    areaServed: {
      "@type": "Country",
      name: SITE.serviceArea,
    },

    knowsAbout: [
      "Advertising",
      "Digital marketing",
      "Social media marketing",
      "Social media advertising",
      "Product advertising",
      "Brand promotion",
      "Content creation",
      "UGC-style promotional videos",
      "Marketing copywriting",
      "AI advertising creative",
      "AI product photography",
      "Social media branding",
      "WhatsApp marketing",
      "Instagram marketing",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ROYCE Marketing Services",
      itemListElement: SITE.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: {
            "@id": `${SITE.url}/#organization`,
          },
        },
      })),
    },

    sameAs: [
      SITE.instagramUrl,
      SITE.tiktokUrl,
      SITE.whatsappUrl,
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

      {/* TikTok Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;
              var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
              ttq.setAndDefer=function(t,e){
                t[e]=function(){
                  t.push([e].concat(Array.prototype.slice.call(arguments,0)))
                }
              };
              for(var i=0;i<ttq.methods.length;i++){
                ttq.setAndDefer(ttq,ttq.methods[i])
              }
              ttq.instance=function(t){
                for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++){
                  ttq.setAndDefer(e,ttq.methods[n])
                }
                return e
              };
              ttq.load=function(e,n){
                var r="https://analytics.tiktok.com/i18n/pixel/events.js",
                    o=n&&n.partner;
                ttq._i=ttq._i||{};
                ttq._i[e]=[];
                ttq._i[e]._u=r;
                ttq._t=ttq._t||{};
                ttq._t[e]=+new Date;
                ttq._o=ttq._o||{};
                ttq._o[e]=n||{};
                n=document.createElement("script");
                n.type="text/javascript";
                n.async=!0;
                n.src=r+"?sdkid="+e+"&lib="+t;
                e=document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(n,e)
              };

              ttq.load('DANPK5JC77UCMIGVONK0');
              ttq.page();
            }(window, document, 'ttq');
          `,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}