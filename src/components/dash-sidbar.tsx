import { adminConfig } from "./config/admin";
import { dashConfig } from "./config/dashboard";
import { AdminDashNav, DashNav } from "./dash-nav";

export function DashboardSidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="sticky top-0 bottom-0 left-0 z-40 hidden w-64 bg-white dark:border-b-slate-900 dark:bg-slate-800 md:inline-flex">
      <div className="container h-full w-full flex-col items-center space-y-4 sm:justify-between sm:space-y-0">
        <DashNav items={dashConfig.sideBarItems} pathname={pathname} />
      </div>
    </aside>
  );
}

export function AdminDashboardSidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="sticky top-0 bottom-0 left-0 z-40 hidden h-auto w-64 border-b-8 border-b-slate-200 bg-white dark:border-b-slate-900 dark:bg-slate-800 md:inline-flex">
      <div className="container h-full w-full flex-col items-center space-y-4 overflow-y-scroll sm:justify-between sm:space-y-0">
        <AdminDashNav items={adminConfig.sideBarItems} pathname={pathname} />
      </div>
    </aside>
  );
}
