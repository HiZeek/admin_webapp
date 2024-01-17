import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/dropdown-menu";

import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { Button } from "./components/button";
import { siteConfig } from "./config/site";
import { DashNavProps } from "./dash-nav";
import { AdminDashIcons, DashIcons, Icons } from "./icons";
import { cn } from "./lib/utils";
import { ThemeToggle } from "./theme-toggle";

export function DashboardHeader({ items }: DashNavProps) {
  const { pathname, push } = useRouter();
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
    <header className="sticky top-0 z-40 w-full border-b-8 border-b-slate-200 bg-white dark:border-b-slate-900 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Icons.menu className="h-5 w-5 hover:bg-transparent focus:ring-0 md:hidden" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={24}
            className="w-[300px] overflow-scroll"
          >
            <DropdownMenuLabel>
              <Link href="/overview" className="flex items-center">
                <DashIcons.newLogoMark fill="#FFFFFF" className="mr-1 h-5 w-5" /> {siteConfig.name}
              </Link>
            </DropdownMenuLabel>
            <DropdownMenuLabel className="mt-4">Main menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {items &&
              items
                ?.filter(
                  (val) => val.href !== "/settings" && val.href !== "/logout",
                )
                .map(
                  (item, index) =>
                    item.href && (
                      <DropdownMenuItem key={index} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center rounded-lg p-3 text-lg font-semibold text-slate-600 hover:bg-slate-500/40 hover:text-slate-900 dark:text-slate-100 sm:text-sm",
                            item.disabled && "cursor-not-allowed opacity-80",
                            {
                              "border-l-4 border-blue-600 bg-slate-500/40 text-slate-900":
                                pathname.includes(item.title.toLowerCase()),
                            },
                          )}
                        >
                          {getMenuIcon(item.title)}
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    ),
                )}
            <DropdownMenuSeparator className="my-4" />
            <DropdownMenuLabel className="mt-4">Preference</DropdownMenuLabel>
            {items &&
              items
                .filter(
                  (val) => val.href === "/settings" || val.href === "/logout",
                )
                .map(
                  (item, idx) =>
                    item.href && (
                      <DropdownMenuItem key={idx} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "flex items-center rounded-lg p-3 text-lg font-semibold text-slate-600 hover:bg-slate-500/40 hover:text-slate-900 dark:text-slate-100 sm:text-sm",
                            item.disabled && "cursor-not-allowed opacity-80",
                            {
                              "border-l-4 border-blue-600 bg-slate-500/40 text-slate-900":
                                pathname.includes(item.title.toLowerCase()),
                            },
                          )}
                        >
                          {getMenuIcon(item.title)}
                          {item.title}
                        </Link>
                      </DropdownMenuItem>
                    ),
                )}
          </DropdownMenuContent>
        </DropdownMenu>
        <h1 className="flex items-center justify-center text-base font-semibold">
          <Link
            href="/overview"
            className="mr-2 flex items-center space-x-2 md:hidden"
          >
            <DashIcons.newLogoMark fill="#FFFFFF" className="h-5 w-5" />
            <span className="font-thin">/</span>
          </Link>
          {items
            ? items.find((item) =>
                item.title
                  .toLowerCase()
                  .includes(pathname.substring(1).toLowerCase()),
              )?.title
            : "Dashboard"}
        </h1>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            <DashIcons.notification className="mr-3" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="mr-2">
                  <DashIcons.globe className="h-3 w-3" />
                  <Avatar className="mr-0 flex h-8 w-8 scale-100 items-center justify-center">
                    <AvatarFallback>EN</AvatarFallback>
                  </Avatar>
                  <DashIcons.arrowDown className="h-3 w-3" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" forceMount>
                <DropdownMenuItem>
                  {/* <Icons.user className="mr-2 h-4 w-4" /> */}
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                // onClick={() => signOut()}
                >
                  {/* <Icons.laptop className="mr-2 h-4 w-4" /> */}
                  <span>Spanish</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="mr-4 h-[40px] border border-gray-400/60"></span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="mr-2">
                  <Avatar className="mr-1 flex h-9 w-9 scale-100 items-center justify-center rounded-full border border-primary-50">
                    {/* <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="rounded-full"
                    /> */}
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <DashIcons.arrowDown className="h-3 w-3" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" forceMount>
                <DropdownMenuItem
                  onClick={() => push("/settings")}
                  className="hover:cursor-pointer"
                >
                  <Icons.user className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="bg-red-500 text-red-100 hover:cursor-pointer hover:text-red-500"
                >
                  <Icons.laptop className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
export function AdminDashboardHeader({ items }: DashNavProps) {
  const { pathname } = useRouter();
  const getMenuIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "/overview":
        return <DashIcons.overview className="mr-2 h-4 w-4" />;
      case "/users":
        return <AdminDashIcons.users className="mr-2 h-4 w-4" />;
      case "/settings":
        return <DashIcons.settings className="mr-2 h-4 w-4" />;
      case "logout":
        return <DashIcons.logout className="mr-2 h-4 w-4" />;
      case "history":
        return <DashIcons.history className="mr-2 h-4 w-4" />;
      default:
        return <Icons.logo className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b-8 border-b-slate-200 bg-white dark:border-b-slate-900 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Icons.menu className="h-5 w-5 hover:bg-transparent focus:ring-0 md:hidden" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            sideOffset={24}
            className="w-[300px] overflow-scroll"
          >
            <DropdownMenuLabel>
              <Link href="/overview" className="flex items-center">
                <Icons.logo className="mr-2 h-4 w-4" /> {siteConfig.name}
              </Link>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {items?.map(
              (item, index) =>
                item.href && (
                  <DropdownMenuItem key={index} asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center rounded-lg p-3 text-lg font-semibold text-slate-600 hover:bg-slate-500/40 hover:text-slate-900 dark:text-slate-100 sm:text-sm",
                        item.disabled && "cursor-not-allowed opacity-80",
                        {
                          "border-l-4 border-blue-600 bg-slate-500/40 text-slate-900":
                            pathname.includes(item.title.toLowerCase()),
                        },
                      )}
                    >
                      {getMenuIcon(item.href)}
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                ),
            )}
          </DropdownMenuContent>
        </DropdownMenu>
        <h1 className="flex items-center justify-center text-base font-semibold">
          <Link
            href="/overview"
            className="mr-2 flex items-center space-x-2 md:hidden"
          >
            <Icons.logo className="h-4 w-4" />
            <span className="font-thin">/</span>
          </Link>
          {items
            ? items.find((item) =>
                item.title
                  .toLowerCase()
                  .includes(pathname.substring(1).toLowerCase()),
              )?.title
            : "Dashboard"}
        </h1>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center">
            <DashIcons.notification className="mr-3" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="mr-2">
                  <DashIcons.globe className="h-3 w-3" />
                  <Avatar className="mr-0 flex h-8 w-8 scale-100 items-center justify-center">
                    <AvatarFallback>EN</AvatarFallback>
                  </Avatar>
                  <DashIcons.arrowDown className="h-3 w-3" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" forceMount>
                <DropdownMenuItem>
                  {/* <Icons.user className="mr-2 h-4 w-4" /> */}
                  <span>English</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                // onClick={() => signOut()}
                >
                  {/* <Icons.laptop className="mr-2 h-4 w-4" /> */}
                  <span>Spanish</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="mr-4 h-[40px] border border-gray-400/60"></span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="mr-2">
                  <Avatar className="mr-1 flex h-9 w-9 scale-100 items-center justify-center rounded-full border border-primary-50">
                    {/* <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                      className="rounded-full"
                    /> */}
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <DashIcons.arrowDown className="h-3 w-3" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" forceMount>
                <DropdownMenuItem>
                  <Icons.user className="mr-2 h-4 w-4" />
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => signOut()}
                  className="bg-red-500 text-red-100 hover:cursor-pointer hover:text-red-500"
                >
                  <Icons.laptop className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
