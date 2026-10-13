import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BUDGET_OPTIONS,
  GOAL_OPTIONS,
  SERVICE_OPTIONS,
} from "@/lib/site";
import { submitLead } from "@/lib/leads";

type FormState = "idle" | "loading" | "error";

export function LeadForm({
  sourcePath = "/free-audit",
}: {
  sourcePath?: string;
}) {
  const navigate = useNavigate();
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "loading") return;

    setState("loading");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("fullName") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      businessName: String(data.get("businessName") ?? "").trim(),
      websiteOrSocial: String(data.get("websiteOrSocial") ?? "").trim(),
      serviceRequired: String(data.get("serviceRequired") ?? "").trim(),
      marketingGoal: String(data.get("marketingGoal") ?? "").trim(),
      budgetRange: String(data.get("budgetRange") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      landingPageUrl:
        typeof window !== "undefined" ? window.location.href : sourcePath,
      referrer:
        typeof document !== "undefined" ? document.referrer || "" : "",
      consent: data.get("consent") === "on",
    };

    try {
      if (!payload.consent) {
        throw new Error("Please agree to the privacy notice to continue.");
      }

      const result = await submitLead({
        data: {
          ...payload,
          consent: true as const,
        },
      });

      if (result.ok) {
        void navigate({
          to: "/thank-you",
          search: { ref: String(result.leadId) },
        });
        return;
      }
      throw new Error("Unexpected response. Please try again.");
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      setError(message);
      setState("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="fullName">Full name *</Label>
          <Input
            id="fullName"
            name="fullName"
            required
            autoComplete="name"
            placeholder="Ada Okonkwo"
            disabled={state === "loading"}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@business.com"
            disabled={state === "loading"}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="businessName">Business name *</Label>
          <Input
            id="businessName"
            name="businessName"
            required
            placeholder="Your company"
            disabled={state === "loading"}
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="websiteOrSocial">Website or social page</Label>
          <Input
            id="websiteOrSocial"
            name="websiteOrSocial"
            placeholder="https://… or @handle"
            disabled={state === "loading"}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="serviceRequired">Service required *</Label>
          <select
            id="serviceRequired"
            name="serviceRequired"
            required
            disabled={state === "loading"}
            className="flex h-11 w-full rounded-full border border-border bg-paper px-4 text-sm text-ink shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50"
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="marketingGoal">Main marketing goal *</Label>
          <select
            id="marketingGoal"
            name="marketingGoal"
            required
            disabled={state === "loading"}
            className="flex h-11 w-full rounded-full border border-border bg-paper px-4 text-sm text-ink shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50"
            defaultValue=""
          >
            <option value="" disabled>
              Select a goal
            </option>
            {GOAL_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="budgetRange">Approximate monthly ad budget *</Label>
        <select
          id="budgetRange"
          name="budgetRange"
          required
          disabled={state === "loading"}
          className="flex h-11 w-full rounded-full border border-border bg-paper px-4 text-sm text-ink shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-50"
          defaultValue=""
        >
          <option value="" disabled>
            Select a range
          </option>
          {BUDGET_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Anything else? (optional)</Label>
        <Textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Current challenges, platforms you already use, timeline…"
          disabled={state === "loading"}
        />
      </div>

      <label className="flex items-start gap-3 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          disabled={state === "loading"}
          className="mt-1 size-4 shrink-0 rounded border-border text-primary focus:ring-primary/40"
        />
        <span>
          I agree that Royce Marketing may store and use this information to
          contact me about advertising services. See our{" "}
          <a
            href="/privacy"
            className="font-medium text-primary underline-offset-2 hover:underline"
          >
            Privacy Policy
          </a>
          .
        </span>
      </label>

      {error ? (
        <p
          role="alert"
          className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200"
        >
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="w-full sm:w-auto"
        disabled={state === "loading"}
      >
        {state === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Submitting…
          </>
        ) : (
          "Request Free Ad Audit"
        )}
      </Button>
    </form>
  );
}
