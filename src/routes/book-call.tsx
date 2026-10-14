import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { SITE, whatsappInquiryUrl } from "@/lib/site";

export const Route = createFileRoute("/book-call")({
  component: BookCallPage,
  head: () => ({
    meta: [
      { title: "Book a Strategy Call — Royce Marketing" },
      {
        name: "description",
        content:
          "Book a free strategy call with Royce Marketing about Meta Ads and TikTok Ads.",
      },
    ],
  }),
});

const DEFAULT_MSG =
  "Hi Royce Marketing — I'd like to book a free strategy call about Meta/TikTok Ads.";

function BookCallPage() {
  const calUrl = SITE.calComUrl;

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:px-6 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Strategy call
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
            Book a free strategy call
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            A short conversation about your goals, current setup, and whether Meta Ads
            or TikTok Ads are a fit. No obligation and no guaranteed-result promises.
          </p>

          {calUrl ? (
            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-ivory shadow-card">
              <iframe
                title="Schedule a strategy call"
                src={calUrl}
                className="min-h-[640px] w-full border-0"
                loading="lazy"
              />
              <p className="px-4 py-3 text-left text-xs text-muted">
                After you confirm a booking in the calendar, Meta Schedule events can be
                wired via Cal.com success redirects or embed callbacks. Contact the
                developer if you need that hook enabled for your Cal.com workspace.
              </p>
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-dashed border-primary/30 bg-primary-soft/40 px-5 py-6 text-left">
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-ink">Calendar embed ready</p>
                  <p className="mt-1 text-sm text-muted">
                    Add your Cal.com link with the environment variable{" "}
                    <code className="rounded bg-paper px-1.5 py-0.5 text-xs text-ink">
                      VITE_CAL_COM_URL
                    </code>{" "}
                    (for example <code className="text-xs">https://cal.com/you/strategy</code>).
                    Until then, use WhatsApp or the audit form below. Schedule conversion
                    events will only fire after a real confirmed booking — not on page view.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-10 grid gap-6 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-ivory p-6 shadow-sm">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <MessageCircle className="size-5" strokeWidth={1.75} />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">WhatsApp (fastest)</h2>
              <p className="mt-2 text-sm text-muted">
                Message us to pick a time. We typically reply within one business day.
              </p>
              <Button asChild className="mt-5" size="lg">
                <a href={whatsappInquiryUrl(DEFAULT_MSG)} target="_blank" rel="noopener noreferrer">
                  Message on WhatsApp
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-ivory p-6 shadow-sm">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <Calendar className="size-5" strokeWidth={1.75} />
              </span>
              <h2 className="mt-4 text-lg font-semibold text-ink">Prefer a form first?</h2>
              <p className="mt-2 text-sm text-muted">
                Request a free ad audit. We will follow up with next steps, including a
                call if it makes sense.
              </p>
              <Button asChild variant="secondary" className="mt-5" size="lg">
                <Link to="/free-audit">Request Free Ad Audit</Link>
              </Button>
            </div>
          </div>

          <p className="mt-10 text-sm text-muted">
            Phone: {SITE.phoneDisplay} · Instagram: {SITE.instagramHandle} · TikTok:{" "}
            {SITE.tiktokHandle}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
