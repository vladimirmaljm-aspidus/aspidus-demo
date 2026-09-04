"use client";

import {
  Database,
  KeyRound,
  ScanFace,
  ScrollText,
  Gauge,
  MapPin,
  MonitorSmartphone,
  Bug,
} from "lucide-react";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";

const ITEMS = [
  { key: "rls", icon: Database },
  { key: "rbac", icon: KeyRound },
  { key: "2fa", icon: ScanFace },
  { key: "audit", icon: ScrollText },
  { key: "rate", icon: Gauge },
  { key: "gps", icon: MapPin },
  { key: "session", icon: MonitorSmartphone },
  { key: "errors", icon: Bug },
];

export function SecuritySection() {
  const { t } = useSiteT();

  return (
    <Section id="security" ariaLabel={t("sec.title")}>
      {/* Ambient glow */}
      <div className="bg-hero-glow pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden />

      <SectionHeading
        kicker={t("sec.kicker")}
        title={t("sec.title")}
        subtitle={t("sec.subtitle")}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.key} delay={0.05 * i}>
              <div className="lift h-full rounded-2xl border border-border bg-card p-5 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display mt-3 text-[15px] font-semibold">{t(`sec.${item.key}.title`)}</h3>
                <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">
                  {t(`sec.${item.key}.desc`)}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
