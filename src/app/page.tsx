"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  Calculator,
  FileText,
  Globe2,
  Building2,
  Wallet,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Clock,
  Languages,
  Plug,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SiteChrome } from "@/components/site-chrome";
import { useT } from "@/components/i18n-provider";

const featureIcons = [
  { key: "feature.crm.title", descKey: "feature.crm.desc", icon: Users, color: "text-blue-500" },
  { key: "feature.calc.title", descKey: "feature.calc.desc", icon: Calculator, color: "text-emerald-500" },
  { key: "feature.docs.title", descKey: "feature.docs.desc", icon: FileText, color: "text-amber-500" },
  { key: "feature.portal.title", descKey: "feature.portal.desc", icon: Globe2, color: "text-purple-500" },
  { key: "feature.erp.title", descKey: "feature.erp.desc", icon: Building2, color: "text-rose-500" },
  { key: "feature.fx.title", descKey: "feature.fx.desc", icon: Wallet, color: "text-cyan-500" },
];

const stats = [
  { value: "50+", labelKey: "stats.currencies", icon: Wallet },
  { value: "5", labelKey: "stats.languages", icon: Languages },
  { value: "216", labelKey: "stats.endpoints", icon: Plug },
  { value: "99.9%", labelKey: "stats.uptime", icon: Clock },
];

export default function LandingPage() {
  const t = useT();

  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="bg-hero-mesh" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/60 to-background" />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="info" className="mb-5 inline-flex items-center gap-1.5 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" />
              {t("hero.badge")}
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              <span className="text-gradient">{t("hero.title")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              {t("hero.subtitle")}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/demo">
                  {t("hero.cta.demo")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/trial">{t("hero.cta.trial")}</Link>
              </Button>
            </div>
          </motion.div>

          {/* Product preview mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-16 max-w-5xl"
          >
            <HeroMockup />
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.labelKey} className="text-center">
                <div className="mx-auto mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{t(s.labelKey)}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features grid */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("features.title")}</h2>
            <p className="mt-4 text-muted-foreground">{t("features.subtitle")}</p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featureIcons.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.key}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Card className="lift h-full hover:border-primary/40 hover:shadow-lg">
                    <CardHeader>
                      <div className={`mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-muted ${f.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">{t(f.key)}</CardTitle>
                      <CardDescription>{t(f.descKey)}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-brand py-20 text-white">
        <div className="absolute inset-0 -z-0 opacity-30 bg-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto mb-4 h-10 w-10" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">{t("cta.subtitle")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="emerald" className="w-full sm:w-auto">
              <Link href="/trial">
                {t("cta.button")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link href="/demo">{t("cta.secondary")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}

function HeroMockup() {
  const t = useT();
  return (
    <Card className="overflow-hidden shadow-2xl">
      <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <span className="mx-auto text-xs text-muted-foreground">demo.aspidus.app / dashboard</span>
      </div>
      <div className="grid grid-cols-12">
        <div className="hidden border-r bg-muted/20 p-3 md:col-span-2 md:block">
          <div className="space-y-2">
            {[
              { l: t("nav.dashboard"), active: true },
              { l: t("nav.partners") },
              { l: t("nav.offers") },
              { l: t("nav.invoices") },
              { l: t("nav.tradeCalculator") },
              { l: t("nav.erp") },
            ].map((s) => (
              <div
                key={s.l}
                className={`truncate rounded-md px-2 py-1.5 text-xs ${
                  s.active ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-current opacity-70" />
                {s.l}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 p-4 md:col-span-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { l: t("kpi.revenue"), v: "$1.28M", c: "text-emerald-600", up: "+5.8%" },
              { l: t("kpi.offers"), v: "18", c: "text-blue-600", up: "+12.5%" },
              { l: t("kpi.invoices"), v: "$939K", c: "text-amber-600", up: "-3.2%" },
              { l: t("kpi.partners"), v: "7", c: "text-purple-600", up: "+0%" },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border bg-card p-3">
                <div className="truncate text-xs text-muted-foreground">{k.l}</div>
                <div className={`mt-1 text-lg font-bold ${k.c}`}>{k.v}</div>
                <div className="mt-0.5 flex items-center gap-0.5 text-[10px] text-muted-foreground">
                  <TrendingUp className="h-2.5 w-2.5" />
                  {k.up} {t("common.vsLastMonth")}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 lg:col-span-2">
              <div className="mb-3 text-xs font-semibold text-muted-foreground">
                {t("dash.tradeVolume")}
              </div>
              <div className="flex h-32 items-end gap-3">
                {[58, 32, 8, 2].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className="w-full rounded-t bg-gradient-to-t from-primary/60 to-primary"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[10px] text-muted-foreground">
                      {["USD", "EUR", "AED", "RUB"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-3 text-xs font-semibold text-muted-foreground">
                {t("dash.recentOffers")}
              </div>
              <div className="space-y-2">
                {["OFR-2025-0142", "OFR-2025-0141", "OFR-2025-0140"].map((o) => (
                  <div key={o} className="flex items-center justify-between text-xs">
                    <span className="font-mono">{o}</span>
                    <Badge variant="success" className="px-1.5 py-0 text-[10px]">
                      {t("common.status.accepted")}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
