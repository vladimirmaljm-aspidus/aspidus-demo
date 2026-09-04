"use client";

import { useSiteT } from "@/components/site/i18n-provider";

/**
 * Quiet fact strip. All numbers are real, pulled from the platform itself
 * (endpoint count, module count, supported currencies, UI languages).
 * No counters, no icons — just verifiable numbers.
 */
const FACTS: { value: string; key: string }[] = [
  { value: "216", key: "stats.endpoints" },
  { value: "60+", key: "stats.modules" },
  { value: "50+", key: "stats.currencies" },
  { value: "5", key: "stats.languages" },
];

export function StatsBar() {
  const { t } = useSiteT();
  return (
    <div className="border-y border-border/70 bg-secondary/30">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
        {FACTS.map((f) => (
          <div
            key={f.key}
            className="flex flex-col items-center gap-0.5 border-border/50 py-5 text-center odd:border-r sm:border-r sm:[&:nth-child(4)]:border-r-0 sm:py-6"
          >
            <span className="font-display text-2xl font-bold tabular-nums tracking-tight">
              {f.value}
            </span>
            <span className="text-xs text-muted-foreground">{t(f.key)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
