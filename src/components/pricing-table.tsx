"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/components/i18n-provider";
import { pricingPlans, type PricingPlan } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";

export function PricingTable() {
  const t = useT();

  const rows: { labelKey: string; render: (p: PricingPlan) => React.ReactNode }[] = [
    { labelKey: "pricing.feature.users", render: (p) => p.features.users },
    { labelKey: "pricing.feature.partners", render: (p) => p.features.partners },
    { labelKey: "pricing.feature.offers", render: (p) => p.features.offersPerMonth },
    { labelKey: "pricing.feature.currencies", render: (p) => p.features.currencies },
    {
      labelKey: "pricing.feature.tradeCalc",
      render: (p) => <YesNo value={p.features.tradeCalc} />,
    },
    {
      labelKey: "pricing.feature.portal",
      render: (p) => <YesNo value={p.features.portal} />,
    },
    { labelKey: "pricing.feature.erp", render: (p) => <YesNo value={p.features.erp} /> },
    { labelKey: "pricing.feature.api", render: (p) => <YesNo value={p.features.api} /> },
    { labelKey: "pricing.feature.support", render: (p) => p.features.support },
  ];

  return (
    <div className="space-y-12">
      {/* Plan cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pricingPlans.map((plan, idx) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.06 }}
            className="h-full"
          >
            <Card
              className={cn(
                "lift relative flex h-full flex-col",
                plan.highlight
                  ? "border-primary shadow-lg ring-2 ring-primary/30 lg:scale-[1.03]"
                  : "",
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-brand px-3 py-1 text-primary-foreground shadow">
                    {t("pricing.mostPopular")}
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.tagline}</CardDescription>
                <div className="mt-3 flex items-baseline gap-1">
                  {plan.priceMonthly === null ? (
                    <span className="text-3xl font-extrabold tracking-tight">
                      {t("pricing.custom")}
                    </span>
                  ) : (
                    <>
                      <span className="text-3xl font-extrabold tracking-tight">
                        ${plan.priceMonthly}
                      </span>
                      <span className="text-sm text-muted-foreground">{t("pricing.month")}</span>
                    </>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <ul className="list-clean space-y-2 text-sm">
                  <Row label={t("pricing.feature.users")} value={plan.features.users} />
                  <Row label={t("pricing.feature.partners")} value={plan.features.partners} />
                  <Row label={t("pricing.feature.offers")} value={plan.features.offersPerMonth} />
                  <Row label={t("pricing.feature.currencies")} value={plan.features.currencies} />
                  <FeatureRow label={t("pricing.feature.tradeCalc")} value={plan.features.tradeCalc} />
                  <FeatureRow label={t("pricing.feature.portal")} value={plan.features.portal} />
                  <FeatureRow label={t("pricing.feature.erp")} value={plan.features.erp} />
                  <FeatureRow label={t("pricing.feature.api")} value={plan.features.api} />
                  <Row label={t("pricing.feature.support")} value={plan.features.support} />
                </ul>

                <div className="mt-6 pt-2">
                  <Button
                    asChild
                    className="w-full"
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <Link
                      href={
                        plan.ctaKey === "trial"
                          ? `/trial?plan=${plan.id}`
                          : `/contact?subject=${encodeURIComponent(`Interested in ${plan.name} plan`)}`
                      }
                    >
                      {plan.ctaKey === "trial" ? t("pricing.choose") : t("pricing.contact")}
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Comparison table */}
      <Card>
        <CardHeader>
          <CardTitle>{t("pricing.compareTitle")}</CardTitle>
          <CardDescription>{t("pricing.compareSubtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 font-medium">{t("pricing.compareTitle")}</th>
                  {pricingPlans.map((p) => (
                    <th key={p.id} className="px-6 py-3 text-center font-medium">
                      <span className={cn(p.highlight && "text-primary")}>{p.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {rows.map((row) => (
                  <tr key={row.labelKey} className="hover:bg-muted/30">
                    <td className="px-6 py-3 font-medium">{t(row.labelKey)}</td>
                    {pricingPlans.map((p) => (
                      <td key={p.id} className="px-6 py-3 text-center">
                        {row.render(p)}
                      </td>
                    ))}
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

function Row({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between gap-2">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-right font-medium">{value}</span>
    </li>
  );
}

function FeatureRow({ label, value }: { label: string; value: boolean }) {
  return (
    <li className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <YesNo value={value} />
    </li>
  );
}

function YesNo({ value }: { value: boolean }) {
  return value ? (
    <span className="inline-flex items-center gap-1 text-emerald-600">
      <Check className="h-4 w-4" />
    </span>
  ) : (
    <span className="inline-flex items-center text-muted-foreground/50">
      <X className="h-4 w-4" />
    </span>
  );
}

/** Standalone marketing page wrapping the pricing table. */
export function PricingPage() {
  const t = useT();
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M12 2 4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-lg font-bold">{t("brand.name")}</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {t("nav.features")}
            </Link>
            <Link href="/demo" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {t("nav.demo")}
            </Link>
            <Link href="/trial" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              {t("nav.trial")}
            </Link>
          </nav>
          <div className="flex items-center gap-1">
            <PricingLangToggle />
            <Button asChild>
              <Link href="/trial">{t("nav.trial")}</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {t("pricing.title")}
              </h1>
              <p className="mt-4 text-muted-foreground">{t("pricing.subtitle")}</p>
            </div>
            <div className="mt-12">
              <PricingTable />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
        </div>
      </footer>
    </div>
  );
}

/** Inline language + theme toggle for the standalone pricing page header. */
function PricingLangToggle() {
  return (
    <div className="flex items-center gap-1">
      <LanguageSelector compact />
      <ThemeToggle />
    </div>
  );
}
