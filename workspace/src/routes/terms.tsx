import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: `Terms of Service — ${SITE.name}` },
      { name: "description", content: `Terms of service for ${SITE.name}.` },
    ],
  }),
});

function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-3xl font-semibold tracking-tight text-ink">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted">Last updated: October 2026</p>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
            <p>
              By using the {SITE.name} website and submitting forms, you agree to these terms.
              Professional services are governed by a separate agreement when engagement begins.
            </p>
            <h2 className="text-lg font-semibold text-ink">Services description</h2>
            <p>
              We provide digital advertising services focused on Meta Ads and TikTok Ads, including
              strategy, setup support, optimization, and reporting. Website content is informational
              and does not constitute a binding offer or guarantee of results.
            </p>
            <h2 className="text-lg font-semibold text-ink">No guaranteed results</h2>
            <p>
              Paid advertising performance depends on many factors outside our sole control, including
              offer quality, creative, competition, budget, and platform changes. We do not guarantee
              specific lead volume, cost per result, or return on ad spend.
            </p>
            <h2 className="text-lg font-semibold text-ink">User responsibilities</h2>
            <p>
              You agree to provide accurate information on forms and not to misuse the site
              (spam, automated abuse, unauthorized access attempts).
            </p>
            <h2 className="text-lg font-semibold text-ink">Intellectual property</h2>
            <p>
              Site design, branding, and original content belong to {SITE.name} unless otherwise noted.
              Client materials remain the client&apos;s property subject to agreed usage rights.
            </p>
            <h2 className="text-lg font-semibold text-ink">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {SITE.name} is not liable for indirect,
              incidental, or consequential damages arising from use of this website or free audit
              guidance. Paid engagements are subject to the terms of the signed service agreement.
            </p>
            <h2 className="text-lg font-semibold text-ink">Contact</h2>
            <p>
              Questions:{" "}
              <a href={SITE.whatsappUrl} className="text-primary hover:underline">WhatsApp {SITE.phoneDisplay}</a>.
            </p>
            <p>
              <Link to="/" className="text-primary hover:underline">← Back to home</Link>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
