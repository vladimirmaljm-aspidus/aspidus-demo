"use client";

import { useMemo, useState } from "react";
import { Calculator, RotateCcw, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const COMMODITIES = [
  { id: "wheat", name: "Wheat HRW", price: 820 },
  { id: "sunoil", name: "Sunflower oil", price: 1185 },
  { id: "sugar", name: "Sugar ICUMSA 45", price: 470 },
  { id: "corn", name: "Corn feed", price: 285 },
  { id: "soy", name: "Soybeans", price: 520 },
  { id: "barley", name: "Barley", price: 240 },
];

const DEFAULTS = {
  commodity: "wheat",
  quantity: 5000,
  unitPrice: 820,
  freight: 685000,
  insurancePct: 0.8,
  dutyPct: 5.1,
  bank: 74500,
  marginPct: 18.5,
};

const fmt = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export function CalculatorDemo() {
  const { t } = useSiteT();
  const [s, setS] = useState(DEFAULTS);

  const calc = useMemo(() => {
    const goods = s.quantity * s.unitPrice;
    const insurance = goods * (s.insurancePct / 100);
    const duty = goods * (s.dutyPct / 100);
    const landed = goods + s.freight + insurance + duty + s.bank;
    const costPerTon = s.quantity > 0 ? landed / s.quantity : 0;
    const sellPerTon = costPerTon / (1 - s.marginPct / 100);
    const revenue = sellPerTon * s.quantity;
    const profit = revenue - landed;
    return { goods, insurance, duty, landed, costPerTon, sellPerTon, revenue, profit };
  }, [s]);

  const bars = [
    { label: t("calc.goods"), value: calc.goods, pct: 0 },
    { label: t("calc.freight"), value: s.freight, pct: 0 },
    { label: t("calc.insurance.amount"), value: calc.insurance, pct: 0 },
    { label: t("calc.duty.amount"), value: calc.duty, pct: 0 },
    { label: t("calc.bank"), value: s.bank, pct: 0 },
  ];
  const max = Math.max(...bars.map((b) => b.value), 1);
  bars.forEach((b) => (b.pct = (b.value / max) * 100));

  function pickCommodity(id: string) {
    const c = COMMODITIES.find((x) => x.id === id);
    setS((p) => ({ ...p, commodity: id, unitPrice: c ? c.price : p.unitPrice }));
  }

  return (
    <Section id="calculator" ariaLabel={t("calc.title")}>
      <SectionHeading
        kicker={t("calc.kicker")}
        title={t("calc.title")}
        subtitle={t("calc.subtitle")}
      />

      <Reveal>
        <div className="ring-brand mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          {/* Window header */}
          <div className="flex items-center justify-between gap-2 border-b border-border bg-secondary/40 px-4 py-2.5 sm:px-5">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/12 text-primary">
                <Calculator className="h-4 w-4" aria-hidden />
              </span>
              Trade Calculator
              <span className="flex items-center gap-1 rounded-full bg-emerald-500/12 px-2 py-0.5 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                <Zap className="h-3 w-3" aria-hidden /> {t("calc.live")}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setS(DEFAULTS)}
              className="h-8 gap-1.5 rounded-lg text-xs"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden />
              <span className="hidden sm:inline">{t("calc.reset")}</span>
            </Button>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1fr_1fr]">
            {/* Inputs */}
            <div className="space-y-4 border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <Field label={t("calc.product")} className="col-span-2">
                  <Select value={s.commodity} onValueChange={pickCommodity}>
                    <SelectTrigger className="w-full rounded-lg" aria-label={t("calc.product")}>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {COMMODITIES.map((c) => (
                        <SelectItem key={c.id} value={c.id}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Field label={t("calc.quantity")}>
                  <NumberInput
                    value={s.quantity}
                    min={100}
                    max={50000}
                    step={100}
                    onChange={(v) => setS((p) => ({ ...p, quantity: v }))}
                  />
                </Field>
                <Field label={t("calc.unitPrice")}>
                  <NumberInput
                    value={s.unitPrice}
                    min={10}
                    max={5000}
                    step={5}
                    onChange={(v) => setS((p) => ({ ...p, unitPrice: v }))}
                  />
                </Field>
                <Field label={t("calc.freight")}>
                  <NumberInput
                    value={s.freight}
                    min={0}
                    max={3000000}
                    step={5000}
                    onChange={(v) => setS((p) => ({ ...p, freight: v }))}
                  />
                </Field>
                <Field label={t("calc.bank")}>
                  <NumberInput
                    value={s.bank}
                    min={0}
                    max={500000}
                    step={500}
                    onChange={(v) => setS((p) => ({ ...p, bank: v }))}
                  />
                </Field>
                <Field label={`${t("calc.insurance")} (%)`}>
                  <SliderInput
                    value={s.insurancePct}
                    min={0}
                    max={3}
                    step={0.05}
                    onChange={(v) => setS((p) => ({ ...p, insurancePct: v }))}
                  />
                </Field>
                <Field label={`${t("calc.duty")} (%)`}>
                  <SliderInput
                    value={s.dutyPct}
                    min={0}
                    max={25}
                    step={0.1}
                    onChange={(v) => setS((p) => ({ ...p, dutyPct: v }))}
                  />
                </Field>
                <Field label={`${t("calc.margin")} (%)`} className="col-span-2">
                  <SliderInput
                    value={s.marginPct}
                    min={2}
                    max={40}
                    step={0.5}
                    accent
                    onChange={(v) => setS((p) => ({ ...p, marginPct: v }))}
                  />
                </Field>
              </div>
              <p className="text-[11px] leading-snug text-muted-foreground">{t("calc.hint")}</p>
            </div>

            {/* Results */}
            <div className="bg-secondary/25 p-4 sm:p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {t("calc.results")}
              </div>
              <ul className="mt-3 space-y-3">
                {bars.map((b) => (
                  <li key={b.label} className="space-y-1">
                    <div className="flex items-baseline justify-between text-xs">
                      <span className="font-medium text-muted-foreground">{b.label}</span>
                      <span className="font-semibold tabular-nums">${fmt.format(Math.round(b.value))}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-primary/45 transition-all duration-500"
                        style={{ width: `${b.pct}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 space-y-2.5">
                <div className="flex items-baseline justify-between rounded-xl border border-primary/30 bg-primary/8 px-4 py-3">
                  <span className="text-xs font-semibold text-primary">{t("calc.landed")}</span>
                  <span className="font-display text-xl font-bold tabular-nums text-primary">
                    ${fmt.format(Math.round(calc.landed))}
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    [t("calc.unit"), `$${fmt.format(Math.round(calc.costPerTon))}`],
                    [t("calc.selling"), `$${fmt.format(Math.round(calc.sellPerTon))}/t`],
                    [t("calc.profit"), `$${(calc.profit / 1000).toFixed(0)}K`],
                  ].map(([l, v], i) => (
                    <div
                      key={l}
                      className={cn(
                        "rounded-xl border border-border bg-card px-3 py-2.5 text-center shadow-sm",
                        i === 2 && "border-emerald-500/30 bg-emerald-500/5"
                      )}
                    >
                      <div className="text-[10px] font-medium text-muted-foreground">{l}</div>
                      <div
                        className={cn(
                          "mt-0.5 font-display text-sm font-bold tabular-nums sm:text-base",
                          i === 2 && "text-emerald-600 dark:text-emerald-400"
                        )}
                      >
                        {v}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-1.5 pt-1 text-[11px] text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                  Revenue at target margin: ${fmt.format(Math.round(calc.revenue))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block space-y-1.5", className)}>
      <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}

function NumberInput({
  value,
  min,
  max,
  step,
  onChange,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <input
      type="number"
      value={value}
      min={min}
      max={max}
      step={step}
      onChange={(e) => {
        const v = Number(e.target.value);
        if (!Number.isNaN(v)) onChange(Math.min(max, Math.max(min, v)));
      }}
      className="h-9 w-full rounded-lg border border-border bg-card px-3 font-mono text-sm shadow-sm outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
    />
  );
}

function SliderInput({
  value,
  min,
  max,
  step,
  onChange,
  accent,
}: {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  accent?: boolean;
}) {
  return (
    <div className="flex h-9 items-center gap-3 rounded-lg border border-border bg-card px-3 shadow-sm">
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label="value"
        className={cn("h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary", accent && "accent-primary")}
        style={{
          background: `linear-gradient(to right, var(--primary) ${((value - min) / (max - min)) * 100}%, var(--border) ${((value - min) / (max - min)) * 100}%)`,
        }}
      />
      <span className="w-12 shrink-0 text-right font-mono text-xs font-semibold tabular-nums">
        {value}
      </span>
    </div>
  );
}
