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
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";
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
  { value: "50+", labelKey: "stats.currencies" },
  { value: "5", labelKey: "stats.languages" },
  { value: "216", labelKey: "stats.endpoints" },
  { value: "99.9%", labelKey: "stats.uptime" },
];

export default function LandingPage() {
  const t = useT();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-bold tracking-tight">{t("brand.name")}</span>
            <span className="ml-1 hidden text-xs text-muted-foreground sm:inline">| {t("brand.tagline")}</span>
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.features")}
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.pricing")}
            </Link>
            <Link href="/demo" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.demo")}
            </Link>
          </nav>
          <div className="flex items-center gap-1">
            <LanguageSelector compact />
            <ThemeToggle />
            <Button asChild variant="ghost" className="hidden sm:inline-flex">
              <Link href="/demo">{t("nav.demo")}</Link>
            </Button>
            <Button asChild>
              <Link href="/trial">{t("nav.trial")}</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="bg-grid absolute inset-0 -z-10" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/30 via-background/80 to-background" />
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-3xl text-center"
            >
              <Badge variant="info" className="mb-4 inline-flex items-center gap-1.5 px-3 py-1">
                <Sparkles className="h-3.5 w-3.5" />
                {t("hero.badge")}
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {t("hero.title")}
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
            {stats.map((s) => (
              <div key={s.labelKey} className="text-center">
                <div className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{t(s.labelKey)}</div>
              </div>
            ))}
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
                    <Card className="h-full transition-shadow hover:shadow-md">
                      <CardHeader>
                        <div className={`mb-2 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-muted ${f.color}`}>
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
        <section className="bg-gradient-to-br from-primary to-blue-700 py-20 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <ShieldCheck className="mx-auto mb-4 h-10 w-10" />
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("cta.title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">{t("cta.subtitle")}</p>
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
      </main>

      <Footer />
    </div>
  );
}

function Logo() {
  return (
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2 4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

function HeroMockup() {
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
            {["Dashboard", "Partners", "Offers", "Invoices", "Trade Calc", "ERP"].map((s, i) => (
              <div
                key={s}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-xs ${
                  i === 0 ? "bg-primary/10 text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-current opacity-70" />
                {s}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-12 p-4 md:col-span-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { l: "Revenue", v: "$1.28M", c: "text-emerald-600" },
              { l: "Open Offers", v: "18", c: "text-blue-600" },
              { l: "Unpaid", v: "$939K", c: "text-amber-600" },
              { l: "Partners", v: "7", c: "text-purple-600" },
            ].map((k) => (
              <div key={k.l} className="rounded-lg border bg-card p-3">
                <div className="text-xs text-muted-foreground">{k.l}</div>
                <div className={`mt-1 text-lg font-bold ${k.c}`}>{k.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
            <div className="rounded-lg border bg-card p-4 lg:col-span-2">
              <div className="mb-3 text-xs font-semibold text-muted-foreground">Trade Volume by Currency</div>
              <div className="flex h-32 items-end gap-3">
                {[58, 32, 8, 2].map((h, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-1">
                    <div className="w-full rounded-t bg-primary/80" style={{ height: `${h}%` }} />
                    <span className="text-[10px] text-muted-foreground">
                      {["USD", "EUR", "AED", "RUB"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-3 text-xs font-semibold text-muted-foreground">Recent Offers</div>
              <div className="space-y-2">
                {["OFR-2025-0142", "OFR-2025-0141", "OFR-2025-0140"].map((o) => (
                  <div key={o} className="flex items-center justify-between text-xs">
                    <span className="font-mono">{o}</span>
                    <span className="inline-flex items-center gap-1 text-emerald-600">
                      <CheckCircle2 className="h-3 w-3" /> accepted
                    </span>
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

function Footer() {
  const t = useT();
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-bold">{t("brand.name")}</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t("brand.tagline")}</p>
          </div>
          <FooterCol
            title={t("footer.product")}
            items={[
              { label: t("nav.features"), href: "/#features" },
              { label: t("nav.pricing"), href: "/pricing" },
              { label: t("nav.demo"), href: "/demo" },
              { label: t("nav.trial"), href: "/trial" },
            ]}
          />
          <FooterCol
            title={t("footer.company")}
            items={[
              { label: t("footer.about"), href: "#" },
              { label: t("footer.contact"), href: "#" },
            ]}
          />
          <FooterCol
            title={t("footer.resources")}
            items={[
              { label: t("footer.docs"), href: "#" },
              { label: t("footer.api"), href: "#" },
              { label: t("footer.privacy"), href: "#" },
              { label: t("footer.terms"), href: "#" },
            ]}
          />
        </div>
        <div className="mt-10 border-t pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="mt-3 list-clean space-y-2 text-sm">
        {items.map((it) => (
          <li key={it.label}>
            <Link
              href={it.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <ChevronRight className="mr-1 inline h-3 w-3 align-middle" />
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
