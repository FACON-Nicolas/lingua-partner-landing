import { SidebarNavItem, SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "Next Starter",
  description:
    "Get your project off to an explosive start with Auth & User Roles! Harness the power of Next.js 14, Prisma, Neon, Auth.js v5, Resend, React Email, Shadcn/ui to build your next big thing.",
  url: "",
  ogImage: `''/_static/og.jpg`,
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/mickasmt/next-auth-roles-template",
  },
  mailSupport: "support@next-starter.fake",
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [{ title: "Privacy", href: "/privacy" }],
  },
];
