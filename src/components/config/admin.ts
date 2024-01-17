import { NavItem } from "../types/nav";

interface AdminConfig {
  sideBarItems: NavItem[];
}
// This is the dashboard navigation config
export const adminConfig = {
  sideBarItems: [
    {
      title: "Overview",
      href: "/overview",
    },
    {
      title: "User Management",
      href: "/users",
    },
    {
      title: "Mint Token",
      href: "/mint",
    },
    {
      title: "Transaction History",
      href: "/history",
    },
    {
      title: "Settings",
      href: "/settings",
    },
    {
      title: "Logout",
      href: "/logout",
    },
  ],
} satisfies AdminConfig;
