export const SITE = {
  name: "Royce Marketing",
  title: "Royce Marketing — Attract Qualified Leads with Meta & TikTok Ads",
  description:
    "Royce Marketing helps businesses attract qualified leads and generate opportunities through Meta Ads (Facebook & Instagram) and TikTok Ads management, funnel optimization, and conversion tracking.",
  phoneDisplay: "09042436206",
  whatsappUrl: "https://wa.me/2349042436206",
  instagramUrl: "https://www.instagram.com/roycemarketing",
  instagramHandle: "@roycemarketing",
  tiktokUrl: "https://www.tiktok.com/@roycemarketing",
  tiktokHandle: "@roycemarketing",
  emailPlaceholder: "hello@roycemarketing.com",
} as const;

export const NAV_LINKS = [
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#audit", label: "Free Audit" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const SERVICE_OPTIONS = [
  { value: "meta-ads", label: "Meta Ads (Facebook & Instagram)" },
  { value: "tiktok-ads", label: "TikTok Ads" },
  { value: "both-platforms", label: "Meta + TikTok Ads" },
  { value: "funnel-optimization", label: "Landing Page & Funnel Optimization" },
  { value: "tracking-setup", label: "Pixel & Conversion Tracking" },
  { value: "not-sure", label: "Not sure yet — need advice" },
] as const;

export const BUDGET_OPTIONS = [
  { value: "under-100k", label: "Under ₦100,000 / month" },
  { value: "100k-300k", label: "₦100,000 - ₦300,000 / month" },
  { value: "300k-500k", label: "₦300,000 - ₦500,000 / month" },
  { value: "500k-1m", label: "₦500,000 - ₦1,000,000 / month" },
  { value: "over-1m", label: "Over ₦1,000,000 / month" },
  { value: "not-decided", label: "Not decided yet" },
] as const;

export const GOAL_OPTIONS = [
  { value: "leads", label: "Generate qualified leads" },
  { value: "sales", label: "Drive sales / conversions" },
  { value: "awareness", label: "Brand awareness & reach" },
  { value: "traffic", label: "Website / page traffic" },
  { value: "app-installs", label: "App installs" },
  { value: "other", label: "Other / multiple goals" },
] as const;

export const LEAD_STATUSES = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "qualified", label: "Qualified" },
  { value: "proposal_sent", label: "Proposal Sent" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
] as const;

export function whatsappInquiryUrl(message: string) {
  return SITE.whatsappUrl + "?text=" + encodeURIComponent(message);
}
