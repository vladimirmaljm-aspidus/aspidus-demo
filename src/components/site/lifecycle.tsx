"use client";

import {
  Banknote,
  FileSignature,
  Handshake,
  MessageSquareQuote,
  Ship,
  ClipboardList,
} from "lucide-react";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";

const STEPS = [
  { key: 1, icon: MessageSquareQuote, label: "lifecycle.step1" },
  { key: 2, icon: ClipboardList, label: "lifecycle.step2" },
  { key: 3, icon: Handshake, label: "lifecycle.step3" },
  { key: 4, icon: Ship, label: "lifecycle.step4" },
  { key: 5, icon: FileSignature, label: "lifecycle.step5" },
  { key: 6, icon: Banknote, label: "lifecycle.step6" },
];

export function Lifecycle() {
  const { t } = useSiteT();

  return (
    <Section id="lifecycle" ariaLabel={t("lifecycle.title")}>
      <SectionHeading
        kicker={t("lifecycle.kicker")}
        title={t("lifecycle.title")}
        subtitle={t("lifecycle.subtitle")}
      />

      <ol className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
        {/* Connecting line (desktop) */}
        <div
          className="pointer-events-none absolute left-[8.3%] right-[8.3%] top-[2.4rem] hidden h-px lg:block"
          aria-hidden
        >
          <div className="h-full w-full bg-gradient-to-r from-primary/10 via-primary/45 to-primary/10" />
        </div>

        {STEPS.map((step, i) => (
          <Reveal key={step.key} delay={i * 0.08} className="relative h-full">
            <li className="group relative flex h-full flex-col items-center gap-3 px-1 text-center lg:px-2">
              <span className="relative z-10 flex h-[4.8rem] w-[4.8rem] items-center justify-center rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/15">
                <step.icon className="h-7 w-7 text-primary" aria-hidden />
                <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground shadow">
                  {step.key}
                </span>
              </span>
              <div className="space-y-1.5">
                <h3 className="font-display text-base font-semibold">{t(`${step.label}.title`)}</h3>
                <p className="mx-auto max-w-[15rem] text-[13px] leading-snug text-muted-foreground">
                  {t(`${step.label}.desc`)}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
