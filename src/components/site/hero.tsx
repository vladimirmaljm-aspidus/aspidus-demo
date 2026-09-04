"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  FileCheck2,
  Route,
  TrendingUp,
  Ship,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSiteT } from "@/components/site/i18n-provider";
import { GlobeCanvas } from "@/components/site/globe-canvas";
import { cn } from "@/lib/utils";

const DEMO_URL = "https://velos-platform.vercel.app";
const REGISTER_URL = "https://velos-platform.vercel.app/register";

export function Hero() {
  const { t } = useSiteT();
  const reduce = useReducedMotion();

  const fadeUp = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40"
      aria-label="VELOS — hero"
    >
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
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {t("hero.badge")}
            </Badge>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[4.2rem]"
          >
            {t("hero.title.a")}
            <br />
            <span className="text-gradient-brand">{t("hero.title.b")}</span>
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

        {/* Floating app cards (desktop + tablet) */}
        <div className="relative hidden h-[460px] select-none sm:block lg:h-[520px]" aria-hidden>
          <FloatCard
            className="left-[2%] top-[6%] w-56"
            delay={0}
            floatSlow
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <TrendingUp className="h-4.5 w-4.5" />
              </span>
              <div>
                <div className="text-xl font-bold tabular-nums leading-none">128</div>
                <div className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                  {t("hero.card.deals")}
                </div>
              </div>
            </div>
            {/* Mini bar chart */}
            <div className="mt-3 flex h-10 items-end gap-1">
              {[35, 55, 40, 70, 52, 85, 64, 96, 78].map((h, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-full rounded-sm",
                    i === 7 ? "bg-primary" : "bg-primary/25"
                  )}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </FloatCard>

          <FloatCard className="right-[4%] top-[0%] w-48" delay={0.15}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <BadgeCheck className="h-4.5 w-4.5" />
              </span>
              <div>
                <div className="text-xl font-bold tabular-nums leading-none">1,240</div>
                <div className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                  {t("hero.card.verified")}
                </div>
              </div>
            </div>
          </FloatCard>

          <FloatCard className="left-[6%] bottom-[8%] w-72" delay={0.3} floatSlow>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <Ship className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <div className="whitespace-nowrap text-[13px] font-semibold">
                  {t("hero.card.route")}
                </div>
                <div className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                  18 {t("hero.card.days")}
                </div>
              </div>
            </div>
            {/* Route line */}
            <div className="mt-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="h-px flex-1 bg-gradient-to-r from-primary/70 to-primary/20" />
              <Ship className="h-3.5 w-3.5 text-primary animate-pulse-soft" />
              <span className="h-px flex-1 bg-gradient-to-r from-primary/20 to-primary/70" />
              <span className="h-2 w-2 rounded-full bg-primary" />
            </div>
          </FloatCard>

          <FloatCard className="right-[8%] bottom-[14%] w-52" delay={0.45}>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <FileCheck2 className="h-4.5 w-4.5" />
              </span>
              <div>
                <div className="text-xl font-bold tabular-nums leading-none">312</div>
                <div className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                  {t("hero.card.offers")}
                </div>
              </div>
            </div>
          </FloatCard>

          <FloatCard className="left-[45%] top-[38%] w-44" delay={0.6} floatSlow>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <Route className="h-4.5 w-4.5" />
              </span>
              <div>
                <div className="text-xl font-bold tabular-nums leading-none">$812<span className="text-sm">/t</span></div>
                <div className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                  {t("hero.card.landed")}
                </div>
              </div>
            </div>
          </FloatCard>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mx-auto mt-10 hidden w-full max-w-7xl items-center justify-center gap-2 text-xs text-muted-foreground lg:flex"
      >
        <span className="flex flex-col items-center gap-1">
          {t("hero.scroll")}
          <ChevronDown className="h-4 w-4 animate-bounce" aria-hidden />
        </span>
      </motion.div>
    </section>
  );
}

function FloatCard({
  children,
  className,
  delay = 0,
  floatSlow = false,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatSlow?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.5 + delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("absolute", className)}
    >
      <div
        className={cn(
          "glass rounded-2xl p-4 shadow-xl shadow-black/5",
          floatSlow ? "animate-float-slow" : "animate-float"
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}
