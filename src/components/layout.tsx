import { adminConfig } from "./config/admin";
import { dashConfig } from "./config/dashboard";
import { AdminDashboardHeader, DashboardHeader } from "./dash-header";
import { AdminDashboardSidebar, DashboardSidebar } from "./dash-sidbar";
import { cn } from "./lib/utils";
import { SiteHeader } from "./site-header";

interface LayoutProps {
  children: React.ReactNode;
  pathname: string;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
    </>
  );
}

export function DashboardLayout({ children, pathname }: LayoutProps) {
  return (
    <>
      <div className={cn("flex h-screen w-screen")}>
        <DashboardSidebar pathname={pathname} />
        <div className="w-full overflow-x-hidden">
          <DashboardHeader items={dashConfig.sideBarItems} pathname={pathname} />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
export function AdminDashboardLayout({ children, pathname }: LayoutProps) {
  return (
    <>
      <div className={cn("flex h-screen w-screen")}>
        <AdminDashboardSidebar pathname={pathname} />
        <div className="w-full overflow-x-hidden">
          <AdminDashboardHeader items={adminConfig.sideBarItems} pathname={pathname}/>
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
