import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, MessageCircle } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { Button } from "@/components/ui/button";
import { SITE, whatsappInquiryUrl } from "@/lib/site";

export const Route = createFileRoute("/book-call")({
  component: BookCallPage,
  head: () => ({
    meta: [
      { title: `Book a Free Strategy Call — ${SITE.name}` },
      {
        name: "description",
        content:
          "Book a free strategy call with Royce Marketing to discuss Meta Ads, TikTok Ads, and how paid social can support your lead generation goals.",
      },
    ],
  }),
});

const DEFAULT_MSG =
  "Hello Royce Marketing — I would like to book a free strategy call about Meta/TikTok Ads for my business.";

function BookCallPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-12 text-center md:px-6 md:py-20">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Strategy call
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
            Book a free strategy call
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            A short conversation to understand your goals, current setup, and whether
            Meta Ads or TikTok Ads are a fit. No obligation and no guaranteed-result promises.
          </p>

          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2">
            <div className="rounded-xl bg-ivory p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <MessageCircle className="size-5" strokeWidth={1.75} />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">WhatsApp (fastest)</h2>
              <p className="mt-2 text-sm text-muted">
                Message us on WhatsApp to pick a time that works. We typically reply within one business day.
              </p>
              <Button asChild className="mt-5" size="lg">
                <a href={whatsappInquiryUrl(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer">
                  Message on WhatsApp
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
            <div className="rounded-xl bg-ivory p-6 shadow-card">
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-primary-soft text-primary">
                <Calendar className="size-5" strokeWidth={1.75} />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">Prefer a form first?</h2>
              <p className="mt-2 text-sm text-muted">
                Request a free ad audit with a short form. We will follow up with next steps, including a call if it makes sense.
              </p>
              <Button asChild variant="secondary" className="mt-5" size="lg">
                <Link to="/free-audit">Request Free Ad Audit</Link>
              </Button>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted">
            Phone: {SITE.phoneDisplay} · Instagram: {SITE.instagramHandle} · TikTok: {SITE.tiktokHandle}
          </p>
          <p className="mt-2 text-xs text-muted">
            Calendar embed placeholder: connect Calendly, Cal.com, or your preferred scheduler here when ready.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
