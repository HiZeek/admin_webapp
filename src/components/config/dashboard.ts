import { NavItem } from "../types/nav";

interface DashboardConfig {
  sideBarItems: NavItem[];
}
// This is the dashboard navigation config
export const dashConfig = {
  sideBarItems: [
    {
      title: "Overview",
      href: "/overview",
    },
    {
      title: "Deposit",
      href: "/deposit",
    },
    {
      title: "Redeem",
      href: "/redeem",
    },
    {
      title: "Withdraw",
      href: "/withdraw",
    },
    {
      title: "Transactions",
      href: "/transactions",
    },
    {
      title: "Settings",
      href: "/settings",
    },
    {
      title: "Logout",
      href: undefined,
    },
  ],
} satisfies DashboardConfig;
