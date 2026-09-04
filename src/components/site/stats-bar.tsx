"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Code2,
  LayoutGrid,
  Coins,
  Languages,
  Activity,
} from "lucide-react";
import { useSiteT } from "@/components/site/i18n-provider";
import { cn } from "@/lib/utils";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const r = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(r);
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return value;
}

function Stat({
  icon: Icon,
  value,
  decimals = 0,
  suffix = "",
  label,
  active,
  delay,
}: {
  icon: React.ElementType;
  value: number;
  decimals?: number;
  suffix?: string;
  label: string;
  active: boolean;
  delay: number;
}) {
  const n = useCountUp(Math.round(value * Math.pow(10, decimals)), active);
  const display = (n / Math.pow(10, decimals)).toFixed(decimals);
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1.5 rounded-2xl px-3 py-5 text-center transition-opacity duration-700 sm:py-6",
        active ? "opacity-100" : "opacity-0"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="font-display text-3xl font-bold tabular-nums tracking-tight sm:text-4xl">
        {display}
        {suffix}
      </span>
      <span className="text-xs font-medium text-muted-foreground sm:text-sm">{label}</span>
    </div>
  );
}

export function StatsBar() {
  const { t } = useSiteT();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="border-y border-border/70 bg-secondary/40">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 divide-x divide-border/60 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
        <Stat icon={Code2} value={216} label={t("stats.endpoints")} active={inView} delay={0} />
        <Stat icon={LayoutGrid} value={60} suffix="+" label={t("stats.modules")} active={inView} delay={80} />
        <Stat icon={Coins} value={50} suffix="+" label={t("stats.currencies")} active={inView} delay={160} />
        <Stat icon={Languages} value={5} label={t("stats.languages")} active={inView} delay={240} />
        <Stat icon={Activity} value={99.9} decimals={1} suffix="%" label={t("stats.uptime")} active={inView} delay={320} />
      </div>
    </div>
  );
}
