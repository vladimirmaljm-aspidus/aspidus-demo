"use client";

import { useMemo, useState } from "react";
import { Search, Plus, Mail, Phone, MapPin } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/status-badge";
import { useT } from "@/components/i18n-provider";
import { partners } from "@/lib/mock-data";
import { formatCurrency, initials } from "@/lib/utils";

const TYPE_COLORS: Record<string, string> = {
  Buyer: "info",
  Supplier: "warning",
  Agent: "secondary",
  "Buyer & Supplier": "success",
};

export default function PartnersPage() {
  const t = useT();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return partners;
    return partners.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.city.toLowerCase().includes(q) ||
        p.country.toLowerCase().includes(q) ||
        p.contact.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="space-y-5" data-tour="partners">
      <PageHeader
        title={t("partners.title")}
        subtitle={t("partners.subtitle")}
        action={
          <Button>
            <Plus className="h-4 w-4" />
            {t("partners.add")}
          </Button>
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("partners.search")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? t("common.item") : t("common.items")}
        </div>
      </div>

      {/* Cards on mobile, table on desktop */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
        {filtered.map((p) => (
          <Card key={p.id}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {initials(p.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate font-semibold leading-tight">{p.name}</div>
                    <div className="mt-0.5 truncate text-xs text-muted-foreground">
                      {p.city}, {p.country} · {p.countryCode}
                    </div>
                  </div>
                </div>
                <StatusBadge status={p.status} t={t} />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs">
                <Badge variant="outline">{p.type}</Badge>
                <span className="text-muted-foreground">{p.currency}</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <Stat label={t("partners.col.deals")} value={String(p.deals)} />
                <Stat label={t("partners.col.balance")} value={formatCurrency(p.balance, p.currency)} />
                <Stat label={t("partners.col.currency")} value={p.currency} />
              </div>
              <div className="mt-3 space-y-1 border-t pt-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2 truncate"><Mail className="h-3 w-3 shrink-0" /> {p.email}</div>
                <div className="flex items-center gap-2 truncate"><Phone className="h-3 w-3 shrink-0" /> {p.phone}</div>
              </div>
            </CardContent>
          </Card>
        ))}
        {filtered.length === 0 && (
          <Card className="sm:col-span-2">
            <CardContent className="p-10 text-center text-muted-foreground">
              {t("common.empty.partners")}
            </CardContent>
          </Card>
        )}
      </div>

      <Card className="hidden lg:block">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 font-medium">{t("partners.col.name")}</th>
                  <th className="px-6 py-3 font-medium">{t("partners.col.type")}</th>
                  <th className="px-6 py-3 font-medium">{t("partners.col.country")}</th>
                  <th className="px-6 py-3 font-medium">{t("partners.col.currency")}</th>
                  <th className="px-6 py-3 text-right font-medium">{t("partners.col.deals")}</th>
                  <th className="px-6 py-3 text-right font-medium">{t("partners.col.balance")}</th>
                  <th className="px-6 py-3 font-medium">{t("partners.col.status")}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((p) => (
                  <tr key={p.id} className="hover:bg-muted/30">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {initials(p.name)}
                        </div>
                        <div>
                          <div className="font-medium">{p.name}</div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" /> {p.city}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3">
                      <Badge variant={(TYPE_COLORS[p.type] as "info" | "warning" | "secondary" | "success") ?? "secondary"}>
                        {p.type}
                      </Badge>
                    </td>
                    <td className="px-6 py-3">
                      <span className="text-base">{flag(p.countryCode)}</span>{" "}
                      <span className="text-muted-foreground">{p.country}</span>
                    </td>
                    <td className="px-6 py-3 font-mono text-xs">{p.currency}</td>
                    <td className="px-6 py-3 text-right">{p.deals}</td>
                    <td className="px-6 py-3 text-right font-semibold">
                      {formatCurrency(p.balance, p.currency)}
                    </td>
                    <td className="px-6 py-3">
                      <StatusBadge status={p.status} t={t} />
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-muted-foreground">
                      {t("common.empty.partners")}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border bg-muted/30 p-2">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
      <div className="mt-0.5 truncate font-semibold">{value}</div>
    </div>
  );
}

function flag(code: string): string {
  // Convert ISO-2 country code to flag emoji using regional indicator symbols.
  if (!code || code.length !== 2) return "🏳️";
  const base = 0x1f1e6;
  const chars = code
    .toUpperCase()
    .split("")
    .map((c) => base + (c.charCodeAt(0) - 65));
  return String.fromCodePoint(...chars);
}
