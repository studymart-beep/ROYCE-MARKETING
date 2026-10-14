create table if not exists leads (
  id serial primary key,
  full_name text not null,
  email text not null,
  business_name text not null,
  website_or_social text,
  service_required text not null,
  marketing_goal text not null,
  budget_range text not null,
  message text,
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost')),
  landing_page_url text,
  referrer text,
  user_agent text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists leads_status_idx on leads (status);
create index if not exists leads_service_idx on leads (service_required);
create index if not exists leads_created_at_idx on leads (created_at desc);
create index if not exists leads_email_idx on leads (email);
