import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Future Trends Research",
  description:
    "シードステージに特化した、未来技術リサーチと事業戦略コンサルティング",
  url: "https://futuretrendsresearch.com",
  lang: "ja",
  locale: "ja_JP",
  author: "Future Trends Research",
  twitter: "@FutureTrendsResearch",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Consulting", href: "/consulting" },
    { text: "Price", href: "/price" },
    { text: "Tools", href: "/tools" },
    { text: "Contact", href: "/contact" },
    { text: "Information", href: "/information" },
  ],
};
