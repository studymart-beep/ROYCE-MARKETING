export const SITE = {
  name: "ROYCE Marketing",
  title: "ROYCE Marketing — Your Brand Deserves To Be Seen.",
  description:
    "ROYCE Marketing is a professional digital marketing and advertising agency helping businesses attract attention, promote their products, build stronger brands, and reach more customers through creative marketing.",
  url: "https://royce-marketing.vercel.app",
  phoneDisplay: "09042436206",
  phoneInternational: "+2349042436206",
  whatsappUrl: "https://wa.me/2349042436206",
  instagramUrl: "https://www.instagram.com/roycemarketing",
  instagramHandle: "@roycemarketing",
  tiktokUrl: "https://www.tiktok.com/@roycemarketing",
  tiktokHandle: "@roycemarketing",

  serviceCategories: [
    "Advertising & Ad Creative",
    "Social Media Content & Branding",
    "Product Marketing & Promotion",
    "Marketing Strategy & Copywriting",
  ],

  services: [
    "AI Ad Creative Design",
    "Social Media Content Design",
    "Product Advertising",
    "UGC-Style Promotional Videos",
    "AI Product Photography",
    "Social Media Branding",
    "Instagram Content Creation",
    "Business Flyers & Posters",
    "Marketing Copywriting",
    "Brand Promotion Campaigns",
    "WhatsApp Marketing Content",
    "Logo & Brand Visuals",
  ],

  audience:
    "Businesses, brands, entrepreneurs, product sellers, and organizations that want to improve their digital presence and marketing",

  serviceArea: "Nigeria",
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