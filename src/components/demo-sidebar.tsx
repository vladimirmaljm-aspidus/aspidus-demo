"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Package,
  FileText,
  Receipt,
  Calculator,
  FolderArchive,
  Truck,
  Warehouse,
  Globe2,
  Building2,
  BarChart3,
  Settings,
  ChevronLeft,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/components/i18n-provider";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type NavItem = {
  href: string;
  labelKey: string;
  icon: React.ComponentType<{ className?: string }>;
};

type NavGroup = {
  titleKey: string;
  items: NavItem[];
};

const groups: NavGroup[] = [
  {
    titleKey: "nav.group.main",
    items: [
      { href: "/demo", labelKey: "nav.dashboard", icon: LayoutDashboard },
      { href: "/demo/partners", labelKey: "nav.partners", icon: Users },
      { href: "/demo/products", labelKey: "nav.products", icon: Package },
    ],
  },
  {
    titleKey: "nav.group.trade",
    items: [
      { href: "/demo/offers", labelKey: "nav.offers", icon: FileText },
      { href: "/demo/invoices", labelKey: "nav.invoices", icon: Receipt },
      { href: "/demo/trade-calculator", labelKey: "nav.tradeCalculator", icon: Calculator },
    ],
  },
  {
    titleKey: "nav.group.back",
    items: [
      { href: "#", labelKey: "nav.documents", icon: FolderArchive },
      { href: "#", labelKey: "nav.logistics", icon: Truck },
      { href: "#", labelKey: "nav.inventory", icon: Warehouse },
      { href: "#", labelKey: "nav.portal", icon: Globe2 },
      { href: "#", labelKey: "nav.erp", icon: Building2 },
      { href: "#", labelKey: "nav.reports", icon: BarChart3 },
      { href: "#", labelKey: "nav.settings", icon: Settings },
    ],
  },
];

export function DemoSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const t = useT();

  return (
    <aside className="flex h-full flex-col bg-card">
      {/* Brand */}
      <div className="flex h-16 items-center gap-2 border-b px-4">
        <Link href="/" className="flex items-center gap-2" onClick={onNavigate}>
          <Image
            src="/logo.svg"
            alt={t("brand.name")}
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-lg shadow-sm"
          />
          <span className="text-lg font-bold tracking-tight">{t("brand.name")}</span>
        </Link>
        <Badge variant="warning" className="ml-auto hidden items-center gap-1 px-2 py-0.5 text-[10px] lg:inline-flex">
          <Sparkles className="h-3 w-3" />
          {t("demo.modeIndicator")}
        </Badge>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Sidebar">
        {groups.map((g) => (
          <div key={g.titleKey} className="mb-5">
            <div className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {t(g.titleKey)}
            </div>
            <ul className="list-clean space-y-0.5">
              {g.items.map((item) => {
                const Icon = item.icon;
                const active =
                  item.href !== "#" &&
                  (item.href === "/demo" ? pathname === "/demo" : pathname?.startsWith(item.href));
                const isLink = item.href !== "#";
                const content = (
                  <>
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="truncate">{t(item.labelKey)}</span>
                  </>
                );
                return (
                  <li key={item.labelKey}>
                    {isLink ? (
                      <Link
                        href={item.href}
                        onClick={onNavigate}
                        className={cn(
                          "lift flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                          active
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-accent hover:text-foreground",
                        )}
                      >
                        {content}
                      </Link>
                    ) : (
                      <span
                        className={cn(
                          "flex cursor-not-allowed items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground/60",
                        )}
                        title="Demo locked"
                      >
                        {content}
                        <Badge variant="muted" className="ml-auto px-1.5 py-0 text-[9px] uppercase tracking-wider">
                          Soon
                        </Badge>
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Exit demo */}
      <div className="border-t p-3">
        <Button asChild variant="outline" size="sm" className="w-full">
          <Link href="/" onClick={onNavigate}>
            <ChevronLeft className="h-4 w-4" />
            {t("demo.exit")}
          </Link>
        </Button>
      </div>
    </aside>
  );
}
