"use client";

import { useMemo, useState } from "react";
import { Calculator, Plus, History } from "lucide-react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useT } from "@/components/i18n-provider";
import { products, tradeCalculations } from "@/lib/mock-data";
import { formatCurrency, formatNumber } from "@/lib/utils";

const CURRENCIES = ["USD", "EUR", "AED", "RUB", "TRY", "GBP"];

type CalcResult = {
  goods: number;
  freight: number;
  insurance: number;
  duty: number;
  bank: number;
  total: number;
  perUnit: number;
};

export default function TradeCalculatorPage() {
  const t = useT();
  const [productId, setProductId] = useState(products[0].id);
  const [quantity, setQuantity] = useState<number>(1000);
  const [unitPrice, setUnitPrice] = useState<number>(products[0].price);
  const [priceCurrency, setPriceCurrency] = useState<string>(products[0].currency);
  const [settlement, setSettlement] = useState<string>("USD");
  const [exchangeRate, setExchangeRate] = useState<number>(1);
  const [freight, setFreight] = useState<number>(25_000);
  const [insurance, setInsurance] = useState<number>(3_500);
  const [dutyPercent, setDutyPercent] = useState<number>(5);
  const [bankCharges, setBankCharges] = useState<number>(1_000);

  const product = products.find((p) => p.id === productId)!;

  const result: CalcResult = useMemo(() => {
    const goodsBase = quantity * unitPrice;
    const goods = goodsBase * exchangeRate;
    const freightConv = freight * exchangeRate;
    const insuranceConv = insurance * exchangeRate;
    const duty = (goods + freightConv + insuranceConv) * (dutyPercent / 100);
    const bank = bankCharges * exchangeRate;
    const total = goods + freightConv + insuranceConv + duty + bank;
    const perUnit = quantity > 0 ? total / quantity : 0;
    return {
      goods,
      freight: freightConv,
      insurance: insuranceConv,
      duty,
      bank,
      total,
      perUnit,
    };
  }, [quantity, unitPrice, exchangeRate, freight, insurance, dutyPercent, bankCharges]);

  const onProductChange = (id: string) => {
    const p = products.find((x) => x.id === id);
    if (!p) return;
    setProductId(id);
    setUnitPrice(p.price);
    setPriceCurrency(p.currency);
  };

  const rows: { label: string; value: number; strong?: boolean; tone?: "default" | "positive" }[] = [
    { label: t("calc.results.goods"), value: result.goods },
    { label: t("calc.results.freight"), value: result.freight },
    { label: t("calc.results.insurance"), value: result.insurance },
    { label: t("calc.results.duty"), value: result.duty },
    { label: t("calc.results.bank"), value: result.bank },
  ];

  return (
    <div className="space-y-5" data-tour="trade-calculator">
      <PageHeader title={t("calc.title")} subtitle={t("calc.subtitle")} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        {/* Inputs */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-4 w-4 text-primary" />
              {t("calc.title")}
            </CardTitle>
            <CardDescription>{product.name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label={t("calc.product")}>
                <Select value={productId} onChange={(e) => onProductChange(e.target.value)}>
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.sku} — {p.name} ({p.currency} {p.price}/{p.unit})
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label={`${t("calc.quantity")} (${product.unit})`}>
                <Input
                  type="number"
                  min={0}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(0, Number(e.target.value) || 0))}
                />
              </Field>
              <Field label={t("calc.unitPrice")}>
                <Input
                  type="number"
                  min={0}
                  value={unitPrice}
                  onChange={(e) => setUnitPrice(Math.max(0, Number(e.target.value) || 0))}
                />
              </Field>
              <Field label={t("calc.priceCurrency")}>
                <Select value={priceCurrency} onChange={(e) => setPriceCurrency(e.target.value)}>
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </Select>
              </Field>
              <Field label={t("calc.settlement")}>
                <Select value={settlement} onChange={(e) => setSettlement(e.target.value)}>
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </Select>
              </Field>
              <Field label={`${t("calc.exchangeRate")} (${priceCurrency} → ${settlement})`}>
                <Input
                  type="number"
                  step="0.0001"
                  min={0}
                  value={exchangeRate}
                  onChange={(e) => setExchangeRate(Math.max(0, Number(e.target.value) || 0))}
                />
              </Field>
              <Field label={`${t("calc.freight")} (${priceCurrency})`}>
                <Input
                  type="number"
                  min={0}
                  value={freight}
                  onChange={(e) => setFreight(Math.max(0, Number(e.target.value) || 0))}
                />
              </Field>
              <Field label={`${t("calc.insurance")} (${priceCurrency})`}>
                <Input
                  type="number"
                  min={0}
                  value={insurance}
                  onChange={(e) => setInsurance(Math.max(0, Number(e.target.value) || 0))}
                />
              </Field>
              <Field label={t("calc.duty")}>
                <Input
                  type="number"
                  min={0}
                  max={100}
                  step="0.1"
                  value={dutyPercent}
                  onChange={(e) => setDutyPercent(Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                />
              </Field>
              <Field label={`${t("calc.bank")} (${priceCurrency})`}>
                <Input
                  type="number"
                  min={0}
                  value={bankCharges}
                  onChange={(e) => setBankCharges(Math.max(0, Number(e.target.value) || 0))}
                />
              </Field>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>{t("calc.results.total")}</CardTitle>
            <CardDescription>
              {formatNumber(quantity)} {product.unit} · {priceCurrency} → {settlement}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.div
              key={result.total.toFixed(0)}
              initial={{ opacity: 0.5, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="rounded-lg bg-primary/5 p-4 text-center"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {t("calc.results.total")}
              </div>
              <div className="mt-1 text-3xl font-extrabold tracking-tight text-primary">
                {formatCurrency(result.total, settlement)}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {t("calc.results.unit")}: <span className="font-semibold text-foreground">
                  {formatCurrency(result.perUnit, settlement)}
                </span>{" "}
                / {product.unit}
              </div>
            </motion.div>

            <Separator className="my-4" />

            <ul className="list-clean space-y-2 text-sm">
              {rows.map((r) => (
                <li key={r.label} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{r.label}</span>
                  <span className="font-medium tabular-nums">
                    {formatCurrency(r.value, settlement)}
                  </span>
                </li>
              ))}
              <li className="flex items-center justify-between border-t pt-2">
                <span className="font-semibold">{t("calc.results.total")}</span>
                <span className="font-bold tabular-nums text-primary">
                  {formatCurrency(result.total, settlement)}
                </span>
              </li>
            </ul>

            <Button className="mt-4 w-full" variant="emerald">
              <Plus className="h-4 w-4" />
              {t("offers.new")}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Saved calculations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-4 w-4" />
            Saved calculations
          </CardTitle>
          <CardDescription>Recent trade calculations from your team.</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">{t("calc.product")}</th>
                  <th className="px-6 py-3 text-right font-medium">{t("calc.quantity")}</th>
                  <th className="px-6 py-3 text-right font-medium">{t("calc.unitPrice")}</th>
                  <th className="px-6 py-3 font-medium">Settlement</th>
                  <th className="px-6 py-3 text-right font-medium">{t("calc.results.total")}</th>
                  <th className="px-6 py-3 text-right font-medium">{t("calc.results.unit")}</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {tradeCalculations.map((c) => (
                  <tr key={c.id} className="hover:bg-muted/30">
                    <td className="px-6 py-3 font-medium">{c.name}</td>
                    <td className="px-6 py-3 text-muted-foreground">{c.product}</td>
                    <td className="px-6 py-3 text-right">{formatNumber(c.quantity)} {c.unit}</td>
                    <td className="px-6 py-3 text-right">
                      {formatCurrency(c.unitPrice, c.priceCurrency)}
                    </td>
                    <td className="px-6 py-3">
                      <Badge variant="info">{c.settlementCurrency}</Badge>
                    </td>
                    <td className="px-6 py-3 text-right font-semibold">
                      {formatCurrency(c.total, c.settlementCurrency)}
                    </td>
                    <td className="px-6 py-3 text-right text-muted-foreground">
                      {formatCurrency(c.perUnit, c.settlementCurrency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}
