export const SITE = {
  name: "Royce Marketing",
  title: "Royce Marketing — Your Brand Deserves To Be Seen.",
  description:
    "Royce Marketing is a professional advertising and digital marketing agency helping businesses reach more customers through social media advertising, Google Ads, brand promotion, video ads, and digital marketing solutions.",
  phoneDisplay: "09042436206",
  whatsappUrl: "https://wa.me/2349042436206",
  instagramUrl: "https://www.instagram.com/roycemarketing",
  instagramHandle: "@roycemarketing",
  tiktokUrl: "https://www.tiktok.com/@roycemarketing",
  tiktokHandle: "@roycemarketing",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const;

export function whatsappInquiryUrl(message: string) {
  return `${SITE.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
