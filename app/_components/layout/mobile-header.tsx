"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DollarSign,
  LayoutDashboard,
  Receipt,
  FileText,
  Menu,
} from "lucide-react";
import { cn } from "@/app/_lib/utils";
import { Button } from "@/app/_components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/transactions", label: "Transações", icon: Receipt },
  { href: "/reports", label: "Relatórios", icon: FileText },
];

const MobileHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const currentPage =
    NAV_ITEMS.find((item) => isActive(item.href))?.label ?? "Dashboard";

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 lg:hidden">
      <div className="flex items-center justify-between h-14 px-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <SheetHeader className="p-6 border-b border-slate-200">
              <SheetTitle className="flex items-center gap-2">
                <DollarSign className="size-5 text-primary" />
                Alterdata Finance
              </SheetTitle>
            </SheetHeader>
            <nav className="p-4 space-y-1">
              {NAV_ITEMS.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
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
          </SheetContent>
        </Sheet>

        <span className="text-lg font-semibold text-slate-900">
          {currentPage}
        </span>

        <div className="w-10" />
      </div>
    </header>
  );
};

export default MobileHeader;
