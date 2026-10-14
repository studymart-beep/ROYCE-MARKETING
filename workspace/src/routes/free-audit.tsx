import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/landing/footer";
import { LeadForm } from "@/components/landing/lead-form";
import { Navbar } from "@/components/landing/navbar";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/free-audit")({
  component: FreeAuditPage,
  head: () => ({
    meta: [
      { title: `Free Ad Audit — ${SITE.name}` },
      {
        name: "description",
        content:
          "Request a free Meta Ads and TikTok Ads audit from Royce Marketing. Share your setup and receive practical next-step recommendations.",
      },
    ],
  }),
});

function FreeAuditPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                Free Ad Audit
              </p>
              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
                Get a clear look at your paid social setup.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Tell us about your business and current advertising. We will review
                what you share and respond with observations and suggested next steps.
                No guaranteed results — a structured, honest assessment.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-ink">
                {[
                  "Meta (Facebook & Instagram) and/or TikTok focus",
                  "Tracking and conversion event check",
                  "Practical recommendations you can act on",
                  "Usually responds within a few business days",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted">
                Prefer a conversation?{" "}
                <Link to="/book-call" className="font-medium text-primary hover:underline">
                  Book a free strategy call
                </Link>
                .
              </p>
            </div>
            <div className="rounded-xl bg-ivory p-6 shadow-card md:p-8">
              <h2 className="text-lg font-semibold tracking-tight text-ink">
                Qualification form
              </h2>
              <p className="mt-1 text-sm text-muted">
                Required fields are marked with *. We only use this to respond to your request.
              </p>
              <div className="mt-6">
                <LeadForm sourcePath="/free-audit" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
