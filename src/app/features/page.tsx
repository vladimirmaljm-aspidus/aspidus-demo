"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Calculator,
  FileText,
  Globe2,
  Building2,
  Wallet,
  ArrowRight,
  Sparkles,
  ShieldCheck,
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

export default function FeaturesPage() {
  const t = useT();
  return (
    <SiteChrome>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="bg-hero-mesh" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge variant="info" className="mb-4 inline-flex items-center gap-1.5 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5" />
              {t("features.pageBadge")}
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              <span className="text-gradient">{t("features.title")}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              {t("features.pageSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="bg-gradient-brand py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto mb-4 h-10 w-10" />
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("features.cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">{t("features.cta.body")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" variant="emerald" className="w-full sm:w-auto">
              <Link href="/demo">
                {t("features.cta.demo")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <Link href="/trial">{t("features.cta.trial")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
