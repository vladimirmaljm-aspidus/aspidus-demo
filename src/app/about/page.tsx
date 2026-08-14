"use client";
import { SiteChrome } from "@/components/site-chrome";
import { useT } from "@/components/i18n-provider";
import { ShieldCheck, Target, Users, Globe2, TrendingUp } from "lucide-react";

export default function AboutPage() {
  const t = useT();
  return (
    <SiteChrome>
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">{t("about.title") || "About Aspidus"}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("about.subtitle") || "Built by traders, for traders. Aspidus is the all-in-one platform that powers international commodity trading."}
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border p-6">
            <Target className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-semibold text-lg">{t("about.missionTitle") || "Our Mission"}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("about.mission") || "To digitize and streamline every aspect of international trade — from first contact to final payment — so trading houses can focus on deals, not paperwork."}
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <Globe2 className="h-8 w-8 text-emerald-500 mb-3" />
            <h3 className="font-semibold text-lg">{t("about.globalTitle") || "Global by Design"}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("about.global") || "Multi-currency, multi-language, multi-tenant. Built for trading houses operating across borders, time zones, and currencies."}
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <ShieldCheck className="h-8 w-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-lg">{t("about.securityTitle") || "Enterprise Security"}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("about.security") || "Row-level security, AES-256 encrypted vault, GPS-gated document verification, and comprehensive audit logging."}
            </p>
          </div>
          <div className="rounded-xl border p-6">
            <TrendingUp className="h-8 w-8 text-amber-500 mb-3" />
            <h3 className="font-semibold text-lg">{t("about.statsTitle") || "By the Numbers"}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("about.stats") || "216 API endpoints, 50+ currencies, 5 languages, 70+ database tables, 99.9% uptime. Built to scale."}
            </p>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
