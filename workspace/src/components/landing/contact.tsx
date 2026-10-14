import { type FormEvent, type ReactNode, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/landing/social-icons";
import { Section } from "@/components/landing/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE, whatsappInquiryUrl } from "@/lib/site";

const CHANNELS = [
  {
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    href: SITE.whatsappUrl,
    icon: WhatsAppIcon,
  },
  {
    label: "Instagram",
    value: SITE.instagramHandle,
    href: SITE.instagramUrl,
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    value: SITE.tiktokHandle,
    href: SITE.tiktokUrl,
    icon: TikTokIcon,
  },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("fullName") ?? "").trim();
    const business = String(data.get("businessName") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const advertise = String(data.get("advertise") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const body = [
      "Hello Royce Marketing — I'd like to start an advertising campaign.",
      "",
      `Full name: ${name}`,
      `Business: ${business || "—"}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `What I want to advertise: ${advertise}`,
      "",
      message,
    ].join("\n");

    window.open(whatsappInquiryUrl(body), "_blank", "noopener,noreferrer");
    setStatus("ready");
  }

  return (
    <Section id="contact" tone="paper">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink md:text-4xl lg:text-5xl">
            Let's Grow Your Brand Together.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Have a business, product, service, or brand you want to promote?
            Contact Royce Marketing today.
          </p>

          <ul className="mt-8 space-y-3">
            {CHANNELS.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-ivory p-4 shadow-card transition-[transform,box-shadow] duration-150 hover:-translate-y-0.5 hover:shadow-card-hover"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-lg bg-paper text-primary shadow-card">
                    <channel.icon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-widest text-muted">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block text-base font-semibold text-ink">
                      {channel.value}
                    </span>
                  </span>
                  <ArrowUpRight className="ml-auto size-4 text-muted" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 hidden overflow-hidden rounded-xl shadow-card lg:block">
            <img
              src="/images/creative-ads.jpg"
              alt="Creative advertising boards, social content, and campaign materials"
              className="aspect-3/2 w-full object-cover outline outline-1 -outline-offset-1 outline-ink/10"
              width={1728}
              height={1152}
            />
          </div>
        </div>

        <div className="rounded-xl bg-ivory p-6 shadow-card md:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-ink">Send an inquiry</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Submit the form to open WhatsApp with your details. Our team replies
            directly there — nothing is stored on this page yet.
          </p>
          <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="fullName">
                <Input id="fullName" name="fullName" autoComplete="name" required />
              </Field>
              <Field label="Business Name" htmlFor="businessName">
                <Input id="businessName" name="businessName" autoComplete="organization" />
              </Field>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email Address" htmlFor="email">
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </Field>
              <Field label="Phone Number" htmlFor="phone">
                <Input id="phone" name="phone" type="tel" autoComplete="tel" />
              </Field>
            </div>
            <Field label="What do you want to advertise?" htmlFor="advertise">
              <Input
                id="advertise"
                name="advertise"
                placeholder="Product, service, brand, or campaign"
                required
              />
            </Field>
            <Field label="Message" htmlFor="message">
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your goal, timeline, and audience."
                required
              />
            </Field>
            <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
              Send Inquiry
              <ArrowUpRight className="size-4" />
            </Button>
            {status === "ready" ? (
              <p className="text-sm text-muted" role="status">
                WhatsApp should open with your inquiry. If it didn't, use the
                WhatsApp link on the left.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
