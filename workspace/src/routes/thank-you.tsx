import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
  validateSearch: z.object({
    ref: z.string().optional(),
  }),
  head: () => ({
    meta: [
      { title: `Thank You — ${SITE.name}` },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function ThankYouPage() {
  const { ref } = Route.useSearch();

  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <div className="mx-auto max-w-lg px-4 py-16 text-center md:py-24">
          <span className="inline-flex size-16 items-center justify-center rounded-full bg-primary-soft text-primary">
            <CheckCircle2 className="size-8" strokeWidth={1.75} />
          </span>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Request received
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Thank you. We have your details and will review them shortly. Expect a response
            within a few business days — usually sooner.
          </p>
          {ref ? (
            <p className="mt-2 text-xs text-muted">Reference: {ref}</p>
          ) : null}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <Link to="/">Back to home</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/book-call">Book a strategy call</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
