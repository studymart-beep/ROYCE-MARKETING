import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { BrandLockup } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({
    meta: [
      { title: "Sign in — Royce Marketing Admin" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function Login() {
  return (
    <main className="grid min-h-screen place-items-center bg-ivory p-6">
      <div className="w-full max-w-sm space-y-6 rounded-xl bg-paper p-8 shadow-card">
        <div className="flex justify-center">
          <BrandLockup />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-semibold tracking-tight text-ink">Admin sign in</h1>
          <p className="mt-1 text-sm text-muted">Access lead management for Royce Marketing.</p>
        </div>
        {authEnabled ? (
          <div className="space-y-3">
            {GROK_PROVIDERS.map((p) => (
              <Button
                key={p.providerId}
                type="button"
                variant="secondary"
                className="w-full"
                onClick={() => signIn(p.providerId, { callbackURL: "/admin" })}
              >
                Continue with {p.label}
              </Button>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled in this environment.</p>
        )}
        <p className="text-center text-xs text-muted">
          <Link to="/" className="text-primary hover:underline">
            ← Back to site
          </Link>
        </p>
      </div>
    </main>
  );
}
