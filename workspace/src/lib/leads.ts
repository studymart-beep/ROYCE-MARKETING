import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";
import { authMiddleware } from "@/lib/auth/middleware";

const leadInputSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(120),
  email: z.string().trim().email("Valid email is required").max(200),
  businessName: z.string().trim().min(1, "Business name is required").max(160),
  websiteOrSocial: z.string().trim().max(300).optional().or(z.literal("")),
  serviceRequired: z.string().trim().min(1, "Please select a service"),
  marketingGoal: z.string().trim().min(1, "Please select a goal"),
  budgetRange: z.string().trim().min(1, "Please select a budget range"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  landingPageUrl: z.string().trim().max(500).optional().or(z.literal("")),
  referrer: z.string().trim().max(500).optional().or(z.literal("")),
  consent: z.literal(true, {
    error: "You must agree to the privacy notice to continue",
  }),
});

export type LeadInput = z.infer<typeof leadInputSchema>;

export type LeadRow = {
  id: number;
  full_name: string;
  email: string;
  business_name: string;
  website_or_social: string | null;
  service_required: string;
  marketing_goal: string;
  budget_range: string;
  message: string | null;
  status: string;
  landing_page_url: string | null;
  referrer: string | null;
  user_agent: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
};

export const submitLead = createServerFn({ method: "POST" })
  .validator(leadInputSchema)
  .handler(async ({ data }) => {
    const sql = await getSql();

    const recent = await sql<{ id: number }>`
      select id from leads
      where lower(email) = lower(${data.email})
        and created_at > now() - interval '10 minutes'
      limit 1
    `;
    if (recent.length > 0) {
      return {
        ok: true as const,
        leadId: recent[0].id,
        duplicate: true as const,
        message: "We already received your request. We will be in touch shortly.",
      };
    }

    const rows = await sql<{ id: number }>`
      insert into leads (
        full_name, email, business_name, website_or_social,
        service_required, marketing_goal, budget_range, message,
        landing_page_url, referrer, status
      ) values (
        ${data.fullName},
        ${data.email},
        ${data.businessName},
        ${data.websiteOrSocial || null},
        ${data.serviceRequired},
        ${data.marketingGoal},
        ${data.budgetRange},
        ${data.message || null},
        ${data.landingPageUrl || null},
        ${data.referrer || null},
        'new'
      )
      returning id
    `;

    const leadId = rows[0]?.id;
    if (!leadId) {
      throw new Error("Failed to save lead. Please try again.");
    }

    return {
      ok: true as const,
      leadId,
      duplicate: false as const,
      message: "Thank you. Your request has been received.",
    };
  });

export const listLeads = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .validator(
    z.object({
      status: z.string().optional(),
      service: z.string().optional(),
      search: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    const sql = await getSql();
    const status = data.status?.trim() || null;
    const service = data.service?.trim() || null;
    const search = data.search?.trim() || null;

    let query = `
      select id, full_name, email, business_name, website_or_social,
             service_required, marketing_goal, budget_range, message,
             status, landing_page_url, referrer, user_agent, notes,
             created_at::text as created_at, updated_at::text as updated_at
      from leads
      where 1=1
    `;
    const params: unknown[] = [];
    let i = 1;

    if (status && status !== "all") {
      query += ` and status = $${i++}`;
      params.push(status);
    }
    if (service && service !== "all") {
      query += ` and service_required = $${i++}`;
      params.push(service);
    }
    if (search) {
      query += ` and (
        full_name ilike $${i} or email ilike $${i} or business_name ilike $${i}
      )`;
      params.push(`%${search}%`);
      i++;
    }
    query += ` order by created_at desc limit 500`;

    const rows = await sql.query<LeadRow>(query, params);
    return rows;
  });

export const updateLead = createServerFn({ method: "POST" })
  .middleware([authMiddleware])
  .validator(
    z.object({
      id: z.number().int().positive(),
      status: z
        .enum(["new", "contacted", "qualified", "proposal_sent", "won", "lost"])
        .optional(),
      notes: z.string().max(5000).optional(),
    }),
  )
  .handler(async ({ data }) => {
    const sql = await getSql();
    if (data.status !== undefined && data.notes !== undefined) {
      await sql`
        update leads
        set status = ${data.status}, notes = ${data.notes}, updated_at = now()
        where id = ${data.id}
      `;
    } else if (data.status !== undefined) {
      await sql`
        update leads set status = ${data.status}, updated_at = now()
        where id = ${data.id}
      `;
    } else if (data.notes !== undefined) {
      await sql`
        update leads set notes = ${data.notes}, updated_at = now()
        where id = ${data.id}
      `;
    }
    return { ok: true as const };
  });

export const exportLeadsCsv = createServerFn({ method: "GET" })
  .middleware([authMiddleware])
  .handler(async () => {
    const sql = await getSql();
    const rows = await sql<LeadRow>`
      select id, full_name, email, business_name, website_or_social,
             service_required, marketing_goal, budget_range, message,
             status, landing_page_url, referrer, notes,
             created_at::text as created_at, updated_at::text as updated_at
      from leads
      order by created_at desc
    `;

    const headers = [
      "id",
      "full_name",
      "email",
      "business_name",
      "website_or_social",
      "service_required",
      "marketing_goal",
      "budget_range",
      "message",
      "status",
      "landing_page_url",
      "referrer",
      "notes",
      "created_at",
      "updated_at",
    ];

    const escape = (v: unknown) => {
      const s = v == null ? "" : String(v);
      if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
      return s;
    };

    const lines = [headers.join(",")];
    for (const row of rows) {
      lines.push(
        headers
          .map((h) => escape((row as Record<string, unknown>)[h]))
          .join(","),
      );
    }
    return lines.join("\n");
  });
