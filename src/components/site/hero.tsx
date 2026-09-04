"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileCheck2, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSiteT } from "@/components/site/i18n-provider";
import { GlobeCanvas } from "@/components/site/globe-canvas";

const DEMO_URL = "https://velos-platform.vercel.app";
const REGISTER_URL = "https://velos-platform.vercel.app/register";

export function Hero() {
  const { t } = useSiteT();
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40" aria-label="VELOS">
      {/* Ambient background */}
      <div className="bg-hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 -z-10" aria-hidden />

      {/* Globe — behind everything on the right (desktop) / faint center (mobile) */}
      <div
        className="pointer-events-none absolute inset-y-0 right-[-30%] -z-[5] w-[130%] opacity-50 sm:right-[-15%] sm:w-[90%] lg:right-[-5%] lg:w-[62%] lg:opacity-100"
        aria-hidden
      >
        <GlobeCanvas />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:px-8">
        {/* Copy */}
        <div className="max-w-2xl">
          <motion.div {...fadeUp(0)}>
            <Badge
              variant="outline"
              className="gap-2 rounded-full border-primary/30 bg-primary/5 px-3.5 py-1.5 text-xs font-medium text-primary"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {t("hero.badge")}
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t("hero.title.a")}{" "}
            <span className="text-primary">{t("hero.title.b")}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="h-12 rounded-xl px-6 text-base shadow-lg shadow-primary/25">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                {t("hero.cta.trial")}
                <ArrowRight className="ml-1 h-4.5 w-4.5" aria-hidden />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl px-6 text-base"
            >
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                {t("hero.cta.demo")}
              </a>
            </Button>
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="mt-4 text-xs text-muted-foreground sm:text-sm">
            {t("hero.cta.note")}
          </motion.p>
        </div>

        {/* Two quiet moments from the platform (desktop + tablet) */}
        <div className="relative hidden h-[460px] select-none sm:block lg:h-[520px]" aria-hidden>
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[14%] left-[2%] w-64"
          >
            <div className="glass rounded-2xl p-4 shadow-xl shadow-black/5">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <FileCheck2 className="h-4.5 w-4.5" />
                </span>
                <div className="min-w-0">
                  <div className="truncate text-[13px] font-semibold">{t("hero.doc.title")}</div>
                  <div className="mt-0.5 text-[11px] text-muted-foreground">{t("hero.doc.meta")}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-[6%] top-[8%] w-60"
          >
            <div className="glass rounded-2xl px-4 py-3 shadow-xl shadow-black/5">
              <div className="flex items-center gap-2.5">
                <QrCode className="h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <div className="truncate text-[12px] font-semibold">{t("hero.ver.title")}</div>
                  <div className="text-[11px] text-muted-foreground">{t("hero.ver.meta")}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
