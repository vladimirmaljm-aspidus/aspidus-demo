"use client";

import {
  CircleDot,
  Sparkles,
  Leaf,
  Newspaper,
  FileSearch,
  MessageSquare,
  Tags,
} from "lucide-react";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";

const ITEMS = [
  { key: "rfq", icon: CircleDot },
  { key: "pricing", icon: Tags, highlight: true },
  { key: "ai", icon: Sparkles, highlight: true },
  { key: "esg", icon: Leaf },
  { key: "intel", icon: Newspaper },
  { key: "parse", icon: FileSearch },
];

export function MarketplaceSection() {
  const { t } = useSiteT();

  return (
    <Section id="marketplace" ariaLabel={t("market.title")} className="max-w-[90rem]">
      <SectionHeading
        kicker={t("market.kicker")}
        title={t("market.title")}
        subtitle={t("market.subtitle")}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Feature card (span 2) — negotiation flow visual */}
        <Reveal className="sm:col-span-2">
          <div className="lift flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <FeatureHeader icon={MessageSquare} title={t("market.nego.title")} />
            <p className="mt-2 text-[13px] leading-snug text-muted-foreground">{t("market.nego.desc")}</p>
            <div className="mt-4 space-y-2">
              <div className="max-w-[85%] rounded-xl rounded-tl-sm bg-secondary px-3.5 py-2 text-xs shadow-sm">
                <b>Buyer:</b> Target price $392/t — 8,000 t sugar, CIF Jeddah.
              </div>
              <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-primary/12 px-3.5 py-2 text-xs shadow-sm">
                <b>You:</b> $398/t with DLC 60 days.
              </div>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-400">
                  round 4/6
                </span>
                smart-suggest: split difference → $395/t
              </div>
            </div>
          </div>
        </Reveal>

        {ITEMS.map((item, i) => {
          const Icon = item.icon;
          const highlight = "highlight" in item && item.highlight;
          return (
            <Reveal key={item.key} delay={0.06 * (i + 1)}>
              <div
                className={
                  "lift h-full rounded-2xl border p-5 shadow-sm " +
                  (highlight
                    ? "border-primary/35 bg-gradient-brand-soft"
                    : "border-border bg-card")
                }
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="font-display mt-3 text-[15px] font-semibold">{t(`market.${item.key}.title`)}</h3>
                <p className="mt-1.5 text-[13px] leading-snug text-muted-foreground">
                  {t(`market.${item.key}.desc`)}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function FeatureHeader({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/12 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <h3 className="font-display text-[15px] font-semibold">{title}</h3>
    </div>
  );
}
