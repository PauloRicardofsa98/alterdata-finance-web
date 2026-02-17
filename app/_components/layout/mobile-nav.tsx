"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Receipt, FileText } from "lucide-react";
import { cn } from "@/app/_lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/transactions", label: "Transações", icon: Receipt },
  { href: "/reports", label: "Relatórios", icon: FileText },
];

const MobileNav = () => {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-slate-200">
      <div className="flex items-center justify-evenly h-16 px-2">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "flex flex-col items-center justify-center gap-0.5 py-2 px-3 rounded-lg transition-colors",
              isActive(href)
                ? "text-primary"
                : "text-slate-500 active:bg-slate-100"
            )}
          >
            <Icon
              className={cn("size-5", isActive(href) && "stroke-[2.5]")}
            />
            <span className="text-[10px] font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
