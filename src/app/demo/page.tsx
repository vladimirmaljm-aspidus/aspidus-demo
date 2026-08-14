"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  DollarSign,
  FileText,
  Receipt,
  Users,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { KpiCard } from "@/components/kpi-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "@/components/status-badge";
import { useT } from "@/components/i18n-provider";
import { dashboardKpis, monthlyRevenue, offers, invoices, tradeVolumeByCurrency, upcomingPayments } from "@/lib/mock-data";
import { formatCurrency, formatDate, formatNumber } from "@/lib/utils";

export default function DashboardPage() {
  const t = useT();

  return (
    <div className="space-y-6" data-tour="dashboard">
      <div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{t("dash.title")}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{t("dash.subtitle")}</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard
          label={t("kpi.revenue")}
          value={formatCurrency(dashboardKpis.revenue, dashboardKpis.revenueCurrency)}
          delta={dashboardKpis.revenueDelta}
          icon={DollarSign}
          iconColor="text-emerald-600"
          delay={0}
        />
        <KpiCard
          label={t("kpi.offers")}
          value={formatNumber(dashboardKpis.openOffers)}
          delta={dashboardKpis.openOffersDelta}
          icon={FileText}
          iconColor="text-blue-600"
          delay={0.05}
        />
        <KpiCard
          label={t("kpi.invoices")}
          value={formatCurrency(dashboardKpis.unpaidInvoices, dashboardKpis.unpaidInvoicesCurrency)}
          delta={dashboardKpis.unpaidInvoicesDelta}
          icon={Receipt}
          iconColor="text-amber-600"
          delay={0.1}
        />
        <KpiCard
          label={t("kpi.partners")}
          value={formatNumber(dashboardKpis.activePartners)}
          delta={dashboardKpis.activePartnersDelta}
          icon={Users}
          iconColor="text-purple-600"
          delay={0.15}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Revenue chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                {t("kpi.revenue")}
              </CardTitle>
              <CardDescription>
                {t("common.last6Months")} · {dashboardKpis.revenueCurrency}
              </CardDescription>
            </div>
            <Badge variant="success" className="gap-1">
              <ArrowUpRight className="h-3 w-3" /> +{dashboardKpis.revenueDelta}%
            </Badge>
          </CardHeader>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>

        {/* Trade volume by currency */}
        <Card>
          <CardHeader>
            <CardTitle>{t("dash.tradeVolume")}</CardTitle>
            <CardDescription>{t("common.currentMonth")}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {tradeVolumeByCurrency.map((row) => (
              <div key={row.currency}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-medium">{row.currency}</span>
                  <span className="text-muted-foreground">{formatCurrency(row.volume, row.currency)}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${row.share}%` }}
                    transition={{ duration: 0.6 }}
                    className="h-full rounded-full bg-gradient-brand"
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent offers */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{t("dash.recentOffers")}</CardTitle>
              <CardDescription>{t("common.latest4Offers")}</CardDescription>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link href="/demo/offers">{t("common.viewAll")}</Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="list-clean divide-y">
              {offers.slice(0, 4).map((o) => (
                <li key={o.id} className="flex items-center justify-between gap-3 px-6 py-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-medium">{o.number}</span>
                      <StatusBadge status={o.status} t={t} />
                    </div>
                    <div className="mt-0.5 truncate text-xs text-muted-foreground">
                      {o.partnerName} · {formatDate(o.date)}
                    </div>
                  </div>
                  <div className="text-right text-sm font-semibold">
                    {formatCurrency(o.amount, o.currency)}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Upcoming payments */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>{t("dash.upcoming")}</CardTitle>
              <CardDescription>{t("common.nextDueInvoices")}</CardDescription>
            </div>
            <Button asChild variant="ghost" size="sm">
              <Link href="/demo/invoices">{t("common.viewAll")}</Link>
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="list-clean divide-y">
              {upcomingPayments.map((inv) => (
                <li key={inv.id} className="flex items-center justify-between gap-3 px-6 py-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-medium">{inv.number}</span>
                      <StatusBadge status={inv.status} t={t} />
                    </div>
                    <div className="mt-0.5 truncate text-xs text-muted-foreground">
                      {inv.partnerName} · {formatDate(inv.due)}
                    </div>
                  </div>
                  <div className="text-right text-sm font-semibold">
                    {formatCurrency(inv.amount, inv.currency)}
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Recent invoices table (snapshot) */}
      <Card>
        <CardHeader>
          <CardTitle>{t("dash.recentInvoices")}</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-2.5 font-medium">#</th>
                  <th className="px-6 py-2.5 font-medium">{t("invoices.col.partner")}</th>
                  <th className="px-6 py-2.5 font-medium">{t("invoices.col.issued")}</th>
                  <th className="px-6 py-2.5 font-medium">{t("invoices.col.due")}</th>
                  <th className="px-6 py-2.5 text-right font-medium">{t("invoices.col.amount")}</th>
                  <th className="px-6 py-2.5 font-medium">{t("invoices.col.status")}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-muted/30">
                    <td className="px-6 py-3 font-mono">{inv.number}</td>
                    <td className="px-6 py-3">{inv.partnerName}</td>
                    <td className="px-6 py-3 text-muted-foreground">{formatDate(inv.issued)}</td>
                    <td className="px-6 py-3 text-muted-foreground">{formatDate(inv.due)}</td>
                    <td className="px-6 py-3 text-right font-semibold">
                      {formatCurrency(inv.amount, inv.currency)}
                    </td>
                    <td className="px-6 py-3">
                      <StatusBadge status={inv.status} t={t} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function RevenueChart() {
  const max = Math.max(...monthlyRevenue.map((m) => m.value));
  return (
    <div className="flex h-56 items-end gap-3 sm:gap-5">
      {monthlyRevenue.map((m, i) => {
        const h = (m.value / max) * 100;
        return (
          <div key={m.label} className="flex flex-1 flex-col items-center gap-2">
            <div className="text-xs font-semibold text-muted-foreground">
              ${(m.value / 1000).toFixed(0)}k
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="w-full rounded-t-md bg-gradient-to-t from-primary/60 to-primary"
            />
            <span className="text-xs text-muted-foreground">{m.label}</span>
          </div>
        );
      })}
    </div>
  );
}
