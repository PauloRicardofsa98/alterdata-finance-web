"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DollarSign,
  LayoutDashboard,
  Receipt,
  FileText,
} from "lucide-react";
import { cn } from "@/app/_lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/transactions", label: "Transações", icon: Receipt },
  { href: "/reports", label: "Relatórios", icon: FileText },
];

const Sidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-60 bg-white border-r border-slate-200 h-screen sticky top-0">
      <div className="p-6 border-b border-slate-200">
        <Link href="/" className="flex items-center gap-2">
          <DollarSign className="size-5 text-primary" />
          <span className="font-semibold text-slate-900">
            Alterdata Finance
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              isActive(href)
                ? "bg-primary/10 text-primary"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            )}
          >
            <Icon className="size-5" />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
