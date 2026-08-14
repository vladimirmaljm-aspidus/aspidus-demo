"use client";

import { useMemo, useState } from "react";
import { Search, Plus, Receipt, Download } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/status-badge";
import { useT } from "@/components/i18n-provider";
import { invoices, type InvoiceStatus } from "@/lib/mock-data";
import { formatCurrency, formatDate } from "@/lib/utils";

const STATUSES: ("all" | InvoiceStatus)[] = ["all", "draft", "sent", "paid", "overdue"];

export default function InvoicesPage() {
  const t = useT();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | InvoiceStatus>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return invoices.filter((o) => {
      if (status !== "all" && o.status !== status) return false;
      if (!q) return true;
      return (
        o.number.toLowerCase().includes(q) ||
        o.partnerName.toLowerCase().includes(q)
      );
    });
  }, [query, status]);

  const totals = useMemo(() => {
    const overdue = invoices.filter((i) => i.status === "overdue");
    const paid = invoices.filter((i) => i.status === "paid");
    return {
      total: filtered.reduce((s, i) => s + i.amount, 0),
      overdue: overdue.reduce((s, i) => s + i.amount, 0),
      paid: paid.reduce((s, i) => s + i.amount, 0),
    };
  }, [filtered]);

  return (
    <div className="space-y-5" data-tour="invoices">
      <PageHeader
        title={t("invoices.title")}
        subtitle={t("invoices.subtitle")}
        action={
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="h-4 w-4" />
              {t("common.export")}
            </Button>
            <Button>
              <Plus className="h-4 w-4" />
              {t("invoices.new")}
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("common.totalOutstanding")}</div>
            <div className="mt-1 text-xl font-bold">{formatCurrency(totals.total, "USD")}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("common.overdue")}</div>
            <div className="mt-1 text-xl font-bold text-red-600">{formatCurrency(totals.overdue, "USD")}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("common.paidPeriod")}</div>
            <div className="mt-1 text-xl font-bold text-emerald-600">{formatCurrency(totals.paid, "USD")}</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("invoices.search")}
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
              {s === "all" ? t("common.all") : t(`common.status.${s}`)}
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
                  <th className="px-6 py-3 font-medium">{t("invoices.col.number")}</th>
                  <th className="px-6 py-3 font-medium">{t("invoices.col.partner")}</th>
                  <th className="px-6 py-3 font-medium">{t("invoices.col.issued")}</th>
                  <th className="px-6 py-3 font-medium">{t("invoices.col.due")}</th>
                  <th className="px-6 py-3 text-right font-medium">{t("invoices.col.amount")}</th>
                  <th className="px-6 py-3 font-medium">{t("invoices.col.status")}</th>
                  <th className="px-6 py-3 text-right font-medium">{t("common.actions")}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filtered.map((inv) => {
                  const overdue = new Date(inv.due) < new Date() && inv.status !== "paid";
                  return (
                    <tr key={inv.id} className="hover:bg-muted/30">
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-2">
                          <Receipt className="h-4 w-4 text-muted-foreground" />
                          <span className="font-mono font-medium">{inv.number}</span>
                        </div>
                      </td>
                      <td className="px-6 py-3">{inv.partnerName}</td>
                      <td className="px-6 py-3 text-muted-foreground">{formatDate(inv.issued)}</td>
                      <td className="px-6 py-3">
                        <span className={overdue ? "font-semibold text-red-600" : "text-muted-foreground"}>
                          {formatDate(inv.due)}
                        </span>
                      </td>
                      <td className="px-6 py-3 text-right font-semibold">
                        {formatCurrency(inv.amount, inv.currency)}
                      </td>
                      <td className="px-6 py-3">
                        <StatusBadge status={inv.status} t={t} />
                      </td>
                      <td className="px-6 py-3 text-right">
                        <Button variant="ghost" size="sm">{t("common.view")}</Button>
                      </td>
                    </tr>
                  );
                })}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-10 text-center text-muted-foreground">
                      {t("common.empty.invoices")}
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
