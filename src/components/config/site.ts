import { NavItem } from "../types/nav";

interface SiteConfig {
  name: string;
  description: string;
  siteNav: NavItem[];
  links: {
    twitter: string;
    telegram: string;
    docs: string;
  };
}

export const siteConfig = {
  name: "ASC",
  description: "Bringing Africa's CBDC to a blockchain near you",
  siteNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    twitter: "https://twitter.com/wrapcbdc",
    telegram: "https://telegram.org/wrapcbdc",
    docs: "https://wrapcbdc.com/docs",
  },
} satisfies SiteConfig;
