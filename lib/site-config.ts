// Central, non-secret site configuration. Replace placeholders before going public.
// Leave a value empty ("") to hide it. Never put secrets here.
export const siteConfig = {
  name: "DreamNest",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "DreamNest helps people discover spaces that inspire their lifestyle, reflect their aspirations, and feel like home.",
  contact: {
    email: "", // TODO: real enquiry email, e.g. hello@yourdomain
    phone: "", // TODO
    address: "", // TODO
  },
  social: [
    // TODO: add real accounts, e.g. { label: "Instagram", href: "https://instagram.com/..." }
  ] as { label: string; href: string }[],
  privacyPolicyHref: "", // TODO: link to privacy policy page
  // Future Flask API base URL, e.g. https://api.dreamnest.example
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Properties", href: "#properties" },
  { label: "Our Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];
