import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Loader2, RefreshCw } from "lucide-react";
import { SignedIn, SignedOut, RedirectToSignIn, UserButton } from "@/lib/auth/gates";
import { BrandLockup } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  exportLeadsCsv,
  listLeads,
  updateLead,
  type LeadRow,
} from "@/lib/leads";
import { LEAD_STATUSES, SERVICE_OPTIONS, SITE } from "@/lib/site";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
  head: () => ({
    meta: [
      { title: `Leads Admin — ${SITE.name}` },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function AdminPage() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn to="/login" />
      </SignedOut>
      <SignedIn>
        <AdminDashboard />
      </SignedIn>
    </>
  );
}

function AdminDashboard() {
  const [leads, setLeads] = useState<LeadRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState("all");
  const [service, setService] = useState("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<LeadRow | null>(null);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const rows = await listLeads({
        data: {
          status: status === "all" ? undefined : status,
          service: service === "all" ? undefined : service,
          search: search.trim() || undefined,
        },
      });
      setLeads(rows);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load leads");
    } finally {
      setLoading(false);
    }
  }, [status, service, search]);

  useEffect(() => {
    void load();
  }, [load]);

  async function onStatusChange(id: number, newStatus: string) {
    setSaving(true);
    try {
      const st = newStatus as
        | "new"
        | "contacted"
        | "qualified"
        | "proposal_sent"
        | "won"
        | "lost";
      await updateLead({ data: { id, status: st } });
      await load();
      if (selected?.id === id) {
        setSelected((s) => (s ? { ...s, status: newStatus } : s));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Update failed");
    } finally {
      setSaving(false);
    }
  }

  async function onSaveNotes() {
    if (!selected) return;
    setSaving(true);
    try {
      await updateLead({ data: { id: selected.id, notes } });
      await load();
      setSelected((s) => (s ? { ...s, notes } : s));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Save failed");
    } finally {
      setSaving(false);
    }
  }

  async function onExport() {
    try {
      const csv = await exportLeadsCsv();
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `royce-leads-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Export failed");
    }
  }

  return (
    <div className="min-h-screen bg-ivory">
      <header className="border-b border-border bg-paper">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <BrandLockup compact />
            <span className="text-sm font-medium text-muted">Leads</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-muted hover:text-ink">
              View site
            </Link>
            <UserButton />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-wrap items-end gap-3">
          <div className="space-y-1">
            <Label htmlFor="filter-status">Status</Label>
            <select
              id="filter-status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-10 rounded-full border border-border bg-paper px-3 text-sm"
            >
              <option value="all">All</option>
              {LEAD_STATUSES.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <Label htmlFor="filter-service">Service</Label>
            <select
              id="filter-service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="h-10 rounded-full border border-border bg-paper px-3 text-sm"
            >
              <option value="all">All</option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>
          <div className="min-w-[180px] flex-1 space-y-1">
            <Label htmlFor="filter-search">Search</Label>
            <Input
              id="filter-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Name, email, business…"
            />
          </div>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => void load()}
            disabled={loading}
          >
            <RefreshCw className={`size-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
          <Button type="button" variant="outline" size="sm" onClick={() => void onExport()}>
            <Download className="size-4" />
            Export CSV
          </Button>
        </div>

        {error ? (
          <p role="alert" className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        ) : null}

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_320px]">
          <div className="overflow-x-auto rounded-xl bg-paper shadow-card">
            {loading && leads.length === 0 ? (
              <div className="flex items-center justify-center gap-2 py-16 text-sm text-muted">
                <Loader2 className="size-4 animate-spin" /> Loading leads…
              </div>
            ) : leads.length === 0 ? (
              <p className="py-16 text-center text-sm text-muted">No leads match these filters.</p>
            ) : (
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="border-b border-border bg-ivory text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Business</th>
                    <th className="px-4 py-3 font-semibold">Service</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className={`cursor-pointer hover:bg-ivory/80 ${selected?.id === lead.id ? "bg-primary-soft/40" : ""}`}
                      onClick={() => {
                        setSelected(lead);
                        setNotes(lead.notes ?? "");
                      }}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-ink">{lead.full_name}</div>
                        <div className="text-xs text-muted">{lead.email}</div>
                      </td>
                      <td className="px-4 py-3 text-ink">{lead.business_name}</td>
                      <td className="px-4 py-3 text-muted">{lead.service_required}</td>
                      <td className="px-4 py-3">
                        <select
                          value={lead.status}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => void onStatusChange(lead.id, e.target.value)}
                          disabled={saving}
                          className="rounded-full border border-border bg-paper px-2 py-1 text-xs"
                        >
                          {LEAD_STATUSES.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3 text-xs text-muted">
                        {lead.created_at?.slice(0, 16).replace("T", " ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <aside className="rounded-xl bg-paper p-5 shadow-card">
            {selected ? (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-ink">{selected.full_name}</h2>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="text-xs text-muted">Email</dt>
                    <dd className="text-ink">{selected.email}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Business</dt>
                    <dd className="text-ink">{selected.business_name}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Website / social</dt>
                    <dd className="text-ink">{selected.website_or_social || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Service</dt>
                    <dd className="text-ink">{selected.service_required}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Goal</dt>
                    <dd className="text-ink">{selected.marketing_goal}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Budget</dt>
                    <dd className="text-ink">{selected.budget_range}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Message</dt>
                    <dd className="whitespace-pre-wrap text-ink">{selected.message || "—"}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-muted">Landing page</dt>
                    <dd className="break-all text-xs text-muted">
                      {selected.landing_page_url || "—"}
                    </dd>
                  </div>
                </dl>
                <div className="space-y-1.5">
                  <Label htmlFor="notes">Internal notes</Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => void onSaveNotes()}
                    disabled={saving}
                  >
                    {saving ? "Saving…" : "Save notes"}
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted">Select a lead to view details and notes.</p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
