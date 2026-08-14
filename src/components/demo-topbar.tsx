"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bell, Menu, Search, ShieldCheck, Users, FileText, Receipt, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { useT } from "@/components/i18n-provider";
import { partners, offers, invoices, products } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type SearchHit = {
  label: string;
  sub: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export function DemoTopbar({ onMenu }: { onMenu?: () => void }) {
  const t = useT();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setFocused(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const hits = useMemo<SearchHit[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const out: SearchHit[] = [];
    for (const p of partners) {
      if (
        p.name.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q)
      ) {
        out.push({
          label: p.name,
          sub: `${t("partners.col.country")}: ${p.country}`,
          href: "/demo/partners",
          icon: Users,
        });
      }
      if (out.length > 8) break;
    }
    for (const o of offers) {
      if (o.number.toLowerCase().includes(q) || o.partnerName.toLowerCase().includes(q)) {
        out.push({
          label: o.number,
          sub: `${t("offers.title")} · ${o.partnerName}`,
          href: "/demo/offers",
          icon: FileText,
        });
      }
      if (out.length > 8) break;
    }
    for (const inv of invoices) {
      if (inv.number.toLowerCase().includes(q) || inv.partnerName.toLowerCase().includes(q)) {
        out.push({
          label: inv.number,
          sub: `${t("invoices.title")} · ${inv.partnerName}`,
          href: "/demo/invoices",
          icon: Receipt,
        });
      }
      if (out.length > 8) break;
    }
    for (const prod of products) {
      if (prod.name.toLowerCase().includes(q) || prod.sku.toLowerCase().includes(q)) {
        out.push({
          label: prod.name,
          sub: `${t("products.title")} · ${prod.sku}`,
          href: "/demo/products",
          icon: Package,
        });
      }
      if (out.length > 8) break;
    }
    return out.slice(0, 8);
  }, [query, t]);

  const onPick = (href: string) => {
    setQuery("");
    setFocused(false);
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-2 border-b bg-background/95 px-3 backdrop-blur supports-[backdrop-filter]:bg-background/70 sm:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label={t("nav.menu")}
        onClick={onMenu}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div ref={ref} className="relative flex max-w-md flex-1 items-center">
        <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={t("demo.search")}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          className="h-9 pl-9"
          aria-label={t("demo.search")}
        />
        {focused && query.trim() && (
          <div className="absolute left-0 right-0 top-11 z-50 max-h-80 overflow-y-auto rounded-md border bg-card shadow-xl">
            <div className="border-b px-3 py-1.5 text-[11px] uppercase tracking-wider text-muted-foreground">
              {hits.length > 0 ? t("demo.searchResults") : t("demo.noResults")}
            </div>
            {hits.length === 0 ? (
              <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                {t("demo.noResults")}
              </div>
            ) : (
              <ul className="list-clean">
                {hits.map((h) => {
                  const Icon = h.icon;
                  return (
                    <li key={`${h.href}-${h.label}`}>
                      <button
                        onClick={() => onPick(h.href)}
                        className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm hover:bg-accent"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <div className="min-w-0 flex-1">
                          <div className="truncate font-medium">{h.label}</div>
                          <div className="truncate text-xs text-muted-foreground">{h.sub}</div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <Badge
          variant="warning"
          className={cn(
            "inline-flex items-center gap-1 px-2 py-0.5 text-[10px] sm:text-xs",
          )}
          title={t("demo.modeIndicator")}
        >
          <ShieldCheck className="h-3 w-3" />
          <span className="hidden sm:inline">{t("demo.modeIndicator")}</span>
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="relative hidden sm:inline-flex"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </Button>
        <LanguageSelector compact />
        <ThemeToggle />
        <Link
          href="/demo"
          className="ml-1 hidden items-center gap-2 rounded-full border bg-card py-1 pl-1 pr-3 sm:flex"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            DU
          </span>
          <div className="text-xs leading-tight">
            <div className="font-semibold">{t("demo.user")}</div>
            <div className="text-muted-foreground">{t("demo.role")}</div>
          </div>
        </Link>
      </div>
    </header>
  );
}
