"use client";

import Link from "next/link";
import { Check, Mail, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const REGISTER_URL = "https://velos-platform.vercel.app/register";
const CONTACT_EMAIL = "vladimir.maljm@gmail.com";

const PLANS = [
  { id: "starter", name: "Starter", price: 49, highlight: false, cta: "trial" },
  { id: "business", name: "Business", price: 149, highlight: true, cta: "trial" },
  { id: "enterprise", name: "Enterprise", price: 399, highlight: false, cta: "trial" },
  { id: "custom", name: "Custom", price: null, highlight: false, cta: "contact" },
] as const;

const FEATURE_KEYS = [
  "users",
  "partners",
  "offers",
  "currencies",
  "calc",
  "portal",
  "market",
  "erp",
  "api",
  "support",
] as const;

export function PricingSection() {
  const { t } = useSiteT();

  return (
    <Section id="pricing" ariaLabel={t("pricing.title")}>
      <SectionHeading
        kicker={t("pricing.kicker")}
        title={t("pricing.title")}
        subtitle={t("pricing.subtitle")}
      />

      {/* Plan cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {PLANS.map((plan, i) => {
          const isBool = (k: string) => t(`pricing.${plan.id}.f.${k}`) === "true";
          const isNo = (k: string) => t(`pricing.${plan.id}.f.${k}`) === "false";
          return (
            <Reveal key={plan.id} delay={0.07 * i} className={cn("h-full", plan.highlight && "lg:-mt-3 lg:mb-3")}>
              <div
                className={cn(
                  "lift relative flex h-full flex-col rounded-2xl border bg-card p-5 shadow-sm sm:p-6",
                  plan.highlight && "ring-brand border-primary/40"
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-brand px-3 py-1 text-[11px] font-bold text-primary-foreground shadow">
                      {t("pricing.popular")}
                    </Badge>
                  </div>
                )}
                <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                <p className="mt-1 min-h-[2.4em] text-xs leading-snug text-muted-foreground">
                  {t(`pricing.${plan.id}.tagline`)}
                </p>
                <div className="mt-4 flex items-baseline gap-1">
                  {plan.price === null ? (
                    <span className="font-display text-2xl font-extrabold tracking-tight">
                      {t("pricing.custom")}
                    </span>
                  ) : (
                    <>
                      <span className="font-display text-4xl font-extrabold tabular-nums tracking-tight">
                        ${plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground">{t("pricing.month")}</span>
                    </>
                  )}
                </div>

                <ul className="mt-5 flex-1 space-y-2.5 text-[13px]">
                  {FEATURE_KEYS.map((f) => {
                    const val = t(`pricing.${plan.id}.f.${f}`);
                    return (
                      <li key={f} className="flex items-center justify-between gap-2">
                        <span className="text-muted-foreground">{t(`pricing.f.${f}`)}</span>
                        {isNo(f) ? (
                          <Minus className="h-4 w-4 shrink-0 text-muted-foreground/40" aria-label={t("misc.no")} />
                        ) : isBool(f) ? (
                          <Check className="h-4 w-4 shrink-0 text-emerald-500" aria-label={t("misc.yes")} />
                        ) : (
                          <span className="shrink-0 font-semibold tabular-nums">{val}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-6">
                  {plan.cta === "trial" ? (
                    <Button asChild className="w-full rounded-xl" variant={plan.highlight ? "default" : "outline"}>
                      <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                        {t("pricing.choose")}
                      </a>
                    </Button>
                  ) : (
                    <Button asChild variant="outline" className="w-full rounded-xl">
                      <a href={`mailto:${CONTACT_EMAIL}?subject=VELOS Custom plan`}>
                        <Mail className="h-4 w-4" aria-hidden />
                        {t("pricing.contact")}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-6 text-center text-xs text-muted-foreground">{t("pricing.trialNote")}</p>
      </Reveal>

      {/* Comparison table */}
      <Reveal delay={0.1}>
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="border-b border-border bg-secondary/40 px-4 py-3 text-sm font-semibold sm:px-6">
            {t("pricing.compare")}
          </div>
          <div className="overflow-x-auto scrollbar-slim">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-4 py-3 font-semibold sm:px-6">&nbsp;</th>
                  {PLANS.map((p) => (
                    <th key={p.id} className="px-4 py-3 text-center font-semibold sm:px-6">
                      {p.name}
                      {p.price !== null && (
                        <span className="block text-[10px] font-normal normal-case text-muted-foreground">
                          ${p.price}
                          {t("pricing.month")}
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {FEATURE_KEYS.map((f) => (
                  <tr key={f} className="hover:bg-secondary/30">
                    <td className="px-4 py-2.5 font-medium sm:px-6">{t(`pricing.f.${f}`)}</td>
                    {PLANS.map((p) => {
                      const val = t(`pricing.${p.id}.f.${f}`);
                      const isNo = val === "false";
                      const isYes = val === "true";
                      return (
                        <td key={p.id} className="px-4 py-2.5 text-center sm:px-6">
                          {isNo ? (
                            <Minus className="mx-auto h-4 w-4 text-muted-foreground/40" aria-hidden />
                          ) : isYes ? (
                            <Check className="mx-auto h-4 w-4 text-emerald-500" aria-label={t("misc.yes")} />
                          ) : (
                            <span className="text-[13px] font-medium">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

void Link;
