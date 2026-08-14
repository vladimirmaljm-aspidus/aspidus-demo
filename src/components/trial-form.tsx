"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/components/i18n-provider";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { countries, pricingPlans } from "@/lib/mock-data";

type FormState = {
  company: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  plan: string;
};

const EMPTY: FormState = {
  company: "",
  name: "",
  email: "",
  phone: "",
  country: "",
  plan: "business",
};

export function TrialForm() {
  const t = useT();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend — just simulate success
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-900/50">
          <CardContent className="flex flex-col items-center p-10 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="mt-4 text-2xl font-bold">{t("trial.success.title")}</h2>
            <p className="mt-2 max-w-md text-muted-foreground">{t("trial.success.body")}</p>
            <div className="mt-4 flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm shadow-sm">
              <Mail className="h-4 w-4 text-primary" />
              <span className="font-medium">{form.email || "your inbox"}</span>
            </div>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <Button variant="outline" onClick={() => setForm(EMPTY)}>
                {t("trial.success.again")}
              </Button>
              <Button asChild variant="ghost">
                <Link href="/demo">
                  <ArrowLeft className="h-4 w-4" />
                  Back to demo
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("trial.title")}</CardTitle>
        <CardDescription>{t("trial.subtitle")}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label={t("trial.company")}>
            <Input
              required
              placeholder={t("trial.placeholder.company")}
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
            />
          </Field>
          <Field label={t("trial.yourName")}>
            <Input
              required
              placeholder={t("trial.placeholder.name")}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </Field>
          <Field label={t("trial.email")}>
            <Input
              required
              type="email"
              placeholder={t("trial.placeholder.email")}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </Field>
          <Field label={t("trial.phone")}>
            <Input
              required
              type="tel"
              placeholder={t("trial.placeholder.phone")}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </Field>
          <Field label={t("trial.country")}>
            <Select
              required
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
            >
              <option value="" disabled>
                {t("trial.placeholder.country")}
              </option>
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </Field>
          <Field label={t("trial.plan")}>
            <Select
              value={form.plan}
              onChange={(e) => update("plan", e.target.value)}
            >
              {pricingPlans.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} {p.priceMonthly ? `— $${p.priceMonthly}/mo` : "— contact us"}
                </option>
              ))}
            </Select>
          </Field>
          <div className="sm:col-span-2">
            <Button type="submit" size="lg" variant="emerald" className="w-full">
              {t("trial.submit")}
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              By submitting you agree to our Terms and Privacy Policy. No credit card required.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
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

/** Re-export for use as a page entry — wraps the form with marketing chrome. */
export function TrialPage() {
  const t = useT();
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-muted/30 to-background">
      <header className="border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M12 2 4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="text-lg font-bold">{t("brand.name")}</span>
          </Link>
          <div className="flex items-center gap-1">
            <LanguageSelector compact />
            <ThemeToggle />
            <Button asChild variant="ghost">
              <Link href="/pricing">{t("nav.pricing")}</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-3xl flex-1 items-start px-4 py-10 sm:px-6 sm:py-16">
        <div className="w-full">
          <Badge variant="info" className="mb-4">10-day free trial</Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("trial.title")}</h1>
          <p className="mt-2 text-muted-foreground">{t("trial.subtitle")}</p>
          <div className="mt-8">
            <TrialForm />
          </div>
        </div>
      </main>
    </div>
  );
}
