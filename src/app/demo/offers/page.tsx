"use client";

import { useMemo, useState } from "react";
import { Search, Plus, FileText } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/status-badge";
import { useT } from "@/components/i18n-provider";
import { offers, type OfferStatus } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";

const STATUSES: ("all" | OfferStatus)[] = ["all", "draft", "sent", "accepted", "rejected"];

export default function OffersPage() {
  const t = useT();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | OfferStatus>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return offers.filter((o) => {
      if (status !== "all" && o.status !== status) return false;
      if (!q) return true;
      return (
        o.number.toLowerCase().includes(q) ||
        o.partnerName.toLowerCase().includes(q)
      );
    });
  }, [query, status]);

  const totalValue = filtered.reduce((sum, o) => sum + (o.status === "accepted" ? o.amount : 0), 0);

  return (
    <div className="space-y-5" data-tour="offers">
      <PageHeader
        title={t("offers.title")}
        subtitle={t("offers.subtitle")}
        action={
          <Button>
            <Plus className="h-4 w-4" />
            {t("offers.new")}
          </Button>
        }
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <SummaryCard label="Total offers" value={String(filtered.length)} />
        <SummaryCard label="Accepted value" value={formatCurrency(totalValue, "USD")} accent="text-emerald-600" />
        <SummaryCard label="Pending" value={String(offers.filter((o) => o.status === "sent").length)} accent="text-blue-600" />
        <SummaryCard label="Rejected" value={String(offers.filter((o) => o.status === "rejected").length)} accent="text-red-600" />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("offers.search")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {STATUSES.map((s) => (
            <Button
              key={s}
              variant={status === s ? "default" : "outline"}
              size="sm"
              onClick={() => setStatus(s)}
              className="capitalize"
            >
              {s === "all" ? "All" : t(`common.status.${s}`)}
            </Button>
          ))}
        </div>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 font-medium">{t("offers.col.number")}</th>
                  <th className="px-6 py-3 font-medium">{t("offers.col.partner")}</th>
                  <th className="px-6 py-3 font-medium">{t("offers.col.date")}</th>
                  <th className="px-6 py-3 font-medium">{t("offers.col.currency")}</th>
                  <th className="px-6 py-3 text-right font-medium">{t("offers.col.amount")}</th>
                  <th className="px-6 py-3 font-medium">{t("offers.col.status")}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((o) => (
                  <tr key={o.id} className="hover:bg-muted/30">
                    <td className="px-6 py-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-mono font-medium">{o.number}</span>
                      </div>
                      <div className="ml-6 text-xs text-muted-foreground">{o.items} item{o.items > 1 ? "s" : ""}</div>
                    </td>
                    <td className="px-6 py-3">{o.partnerName}</td>
                    <td className="px-6 py-3 text-muted-foreground">{formatDate(o.date)}</td>
                    <td className="px-6 py-3 font-mono text-xs">{o.currency}</td>
                    <td className="px-6 py-3 text-right font-semibold">
                      {formatCurrency(o.amount, o.currency)}
                    </td>
                    <td className="px-6 py-3">
                      <StatusBadge status={o.status} t={t} />
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-center text-muted-foreground">
                      No offers match your filters.
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

function SummaryCard({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className={`mt-1 text-xl font-bold ${accent ?? ""}`}>{value}</div>
      </CardContent>
    </Card>
  );
}
