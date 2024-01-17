import Link from "next/link";

import { signOut } from "next-auth/react";
import { siteConfig } from "./config/site";
import { AdminDashIcons, DashIcons, Icons } from "./icons";
import { cn } from "./lib/utils";
import { NavItem } from "./types/nav";
import { Separator } from "./ui/separator";

export interface DashNavProps {
  items?: NavItem[];
  pathname: string;
}

export function DashNav({ items, pathname }: DashNavProps) {
  const getMenuIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "overview":
        return <DashIcons.overview className="mr-2" />;
      case "deposit":
        return <DashIcons.deposit className="mr-2" />;
      case "redeem":
        return <DashIcons.redeem className="mr-2" />;
      case "withdraw":
        return <DashIcons.withdraw className="mr-2" />;
      case "transactions":
        return <DashIcons.history className="mr-2" />;
      case "settings":
        return <DashIcons.settings className="mr-2" />;
      case "logout":
        return <DashIcons.logout className="mr-2" />;
      default:
        return <Icons.logo className="mr-2 h-6 w-6" />;
    }
  };

  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <Link
        href="/"
        className="mt-4 ml-2 hidden items-center space-x-2 md:flex"
      >
        <DashIcons.newLogoMark fill="#FFFFFF" className="h-8 w-8 hidden" />
        <DashIcons.newDashIcon className="hidden font-bold sm:inline-block h-10" />
      </Link>
      {items?.length ? (
        <nav className="hidden flex-col gap-3 md:flex">
          <span className="px-3 text-sm text-gray-200">Main menu</span>
          {items
            ?.filter(
              (val) => val.href !== "/settings",
            )
            .map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-lg  px-3 py-2 text-lg font-semibold text-slate-600 hover:bg-slate-500/40 hover:text-slate-900 dark:text-slate-100 sm:text-sm",
                      item.disabled && "cursor-not-allowed opacity-80",
                      {
                        "border-l-4 border-blue-600 bg-slate-500/40 pl-2 text-white":
                          pathname.includes(item.title.toLowerCase()),
                      },
                    )}
                  >
                    {getMenuIcon(item.title)}
                    {item.title}
                  </Link>
                ),
            )}
          <Separator className="my-2" />
          <span className="px-3 text-sm text-gray-200">Preferences</span>
          {items
            .filter((val) => val.href === "/settings" || typeof val.href === 'undefined')
            .map(
              (item, idx) =>
                typeof item.href !== 'undefined' ? (
                  <Link
                    key={idx}
                    href={item.href}
                    className={cn(
                      "flex items-center rounded-lg  px-3 py-2 text-lg font-semibold text-slate-600 hover:bg-slate-500/40 hover:text-slate-900 dark:text-slate-100 sm:text-sm",
                      item.disabled && "cursor-not-allowed opacity-80",
                      {
                        "border-l-4 border-blue-600 bg-slate-500/40 pl-2 text-white":
                          pathname.includes(item.title.toLowerCase()),
                      },
                    )}
                  >
                    {getMenuIcon(item.title)}
                    {item.title}
                  </Link>
                ) : (<span onClick={() => signOut()} key={idx} className={cn(
                  "flex items-center rounded-lg  px-3 py-2 text-lg font-semibold text-slate-600 hover:bg-slate-500/40 hover:text-slate-900 hover:cursor-pointer dark:text-slate-100 sm:text-sm",
                  item.disabled && "cursor-not-allowed opacity-80",
                  {
                    "border-l-4 border-blue-600 bg-slate-500/40 pl-2 text-white":
                      pathname.includes(item.title.toLowerCase()),
                  },
                )} >
                  {getMenuIcon(item.title)}
                  {item.title}
                </span>),
            )}
        </nav>
      ) : null}
    </div>
  );
}
export function AdminDashNav({ items, pathname }: DashNavProps) {
  const getMenuIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "/overview":
        return <DashIcons.overview className="mr-2" />;
      case "/users":
        return <AdminDashIcons.users className="mr-2" />;
      case "/settings":
        return <DashIcons.settings className="mr-2" />;
      case "/logout":
        return <DashIcons.logout className="mr-2" />;
      case "/history":
        return <DashIcons.history className="mr-2" />;
      default:
        return <Icons.logo className="mr-2 h-6 w-6" />;
    }
  };

  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <Link
        href="/"
        className="mt-4 ml-2 hidden items-center space-x-2 md:flex"
      >
        <Icons.logo className="h-8 w-8" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden flex-col gap-3 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-lg font-semibold text-slate-600 hover:bg-slate-500/40 hover:text-slate-900 dark:text-slate-100 sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80",
                    {
                      "border-l-4 border-blue-600 bg-slate-500/40 pl-2 text-slate-900":
                        pathname.includes(item.title.toLowerCase()),
                    },
                  )}
                >
                  {getMenuIcon(item.href)}
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
