import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: `Privacy Policy — ${SITE.name}` },
      { name: "description", content: `Privacy policy for ${SITE.name}.` },
    ],
  }),
});

function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
          <h1 className="text-3xl font-semibold tracking-tight text-ink">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted">Last updated: October 2026</p>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted">
            <p>
              {SITE.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy describes how we collect,
              use, and protect information submitted through our website, including the free ad audit form.
            </p>
            <h2 className="text-lg font-semibold text-ink">Information we collect</h2>
            <p>
              When you submit a form, we may collect: full name, email address, business name,
              website or social links, service interest, marketing goals, approximate budget range,
              optional message, and technical metadata such as page URL and referrer.
            </p>
            <h2 className="text-lg font-semibold text-ink">How we use information</h2>
            <p>
              We use submitted information to respond to your inquiry, qualify potential clients,
              improve our services, and keep records of business communications. We do not sell your
              personal information.
            </p>
            <h2 className="text-lg font-semibold text-ink">Storage and security</h2>
            <p>
              Lead data is stored in a database controlled by us (or our hosting provider). Access
              is limited to authorized personnel. No method of transmission or storage is 100% secure.
            </p>
            <h2 className="text-lg font-semibold text-ink">Third parties</h2>
            <p>
              We may use infrastructure providers (hosting, email, analytics) that process data on
              our behalf under appropriate agreements. Social links on this site may connect to
              third-party platforms governed by their own policies.
            </p>
            <h2 className="text-lg font-semibold text-ink">Your choices</h2>
            <p>
              You may contact us via WhatsApp ({SITE.phoneDisplay}) to request access, correction,
              or deletion of personal data we hold about you, subject to applicable law.
            </p>
            <h2 className="text-lg font-semibold text-ink">Contact</h2>
            <p>
              Questions about this policy: message us on{" "}
              <a href={SITE.whatsappUrl} className="text-primary hover:underline">WhatsApp</a> or
              through the contact channels listed on this site.
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
