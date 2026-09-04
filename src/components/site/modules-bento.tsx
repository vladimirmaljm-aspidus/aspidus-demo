"use client";

import {
  Building2,
  Calculator,
  FileText,
  Globe2,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const CRM_CHIPS = [
  "Partners 360°", "Products", "Product Catalog", "Offers", "Demands",
  "Deals", "Supplier Offers", "Calendar", "Tasks", "Quick Notes",
];
const DOCS_CHIPS = [
  "Proformas", "Invoices", "LOIs", "Document Register", "Templates",
  "Letterheads", "ERP", "Banking", "Exchange Rates", "Commissions", "Inventory",
];
const CALC_CHIPS = [
  "Landed Cost", "Cost Breakdown", "Maritime Router", "Ports & Borders", "Customs", "3D Trade Globe",
];
const MARKET_CHIPS = [
  "RFQs", "Negotiations", "Smart Pricing", "AI Smart-Suggest", "ESG",
  "Reviews", "Partner Portal", "KYC Uploads", "Portal RFQs",
];
const AI_CHIPS = [
  "AI Smart-Suggest", "Document Parsing", "Market News", "Custom Dashboards",
  "Global Search", "Notifications", "Email Templates", "Webhooks",
];
const ADMIN_CHIPS = [
  "Multi-Tenant", "RBAC", "2FA", "Audit Log", "Rate Limits",
  "API Keys", "Vault", "Feature Flags", "Plans", "Platform Health",
];

export function ModulesBento() {
  const { t } = useSiteT();

  return (
    <Section id="modules" ariaLabel={t("modules.title")}>
      <SectionHeading
        kicker={t("modules.kicker")}
        title={t("modules.title")}
        subtitle={t("modules.subtitle")}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {/* CRM — large card with mini partner list */}
        <Reveal className="sm:col-span-2">
          <Card className="h-full">
            <CardHeader
              icon={Building2}
              title={t("modules.cat.crm.title")}
              desc={t("modules.cat.crm.desc")}
            />
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1fr]">
              <ChipList chips={CRM_CHIPS} />
              {/* Mini partner list visual */}
              <div className="space-y-2 rounded-xl border border-border/70 bg-secondary/40 p-3">
                {[
                  { name: "Nordhandel GmbH", country: "DE", status: "ok", value: "$1.2M" },
                  { name: "Panonija Grain d.o.o.", country: "RS", status: "ok", value: "$840K" },
                  { name: "Al Bahr Trading", country: "SA", status: "pending", value: "$2.1M" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-2.5 rounded-lg bg-card px-2.5 py-2 text-xs shadow-sm"
                  >
                    <span
                      className="shrink-0 rounded bg-muted px-1.5 py-0.5 text-[9px] font-semibold tracking-wide text-muted-foreground"
                      aria-hidden
                    >
                      {p.country}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-medium">{p.name}</span>
                    <span
                      className={cn(
                        "h-1.5 w-1.5 shrink-0 rounded-full",
                        p.status === "ok" ? "bg-emerald-500" : "bg-amber-500"
                      )}
                      aria-hidden
                    />
                    <span className="shrink-0 font-semibold tabular-nums text-muted-foreground">{p.value}</span>
                  </div>
                ))}
                <div className="flex items-center gap-1.5 px-1 pt-0.5 text-[11px] text-muted-foreground">
                  <Check className="h-3 w-3 text-emerald-500" aria-hidden /> KYC · history · contacts
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Documents & Finance */}
        <Reveal delay={0.08} className="sm:col-span-2">
          <Card className="h-full">
            <CardHeader
              icon={FileText}
              title={t("modules.cat.docs.title")}
              desc={t("modules.cat.docs.desc")}
            />
            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]">
              <ChipList chips={DOCS_CHIPS} />
              {/* Mini document rows with QR */}
              <div className="space-y-2 rounded-xl border border-border/70 bg-secondary/40 p-3">
                {["INV-2026-0141", "PRO-2026-0207", "LOI-2026-0089"].map((doc, i) => (
                  <div
                    key={doc}
                    className="flex items-center gap-2.5 rounded-lg bg-card px-2.5 py-2 text-xs shadow-sm"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary">
                      <FileText className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <span className="flex-1 font-mono font-medium">{doc}</span>
                    {/* QR-like glyph */}
                    <span className="grid h-6 w-6 shrink-0 grid-cols-3 grid-rows-3 gap-px opacity-70" aria-hidden>
                      {Array.from({ length: 9 }).map((_, j) => (
                        <span key={j} className={cn("rounded-[1px]", [0,1,2,3,5,6,8].includes(j) ? "bg-foreground/70" : "bg-transparent")} />
                      ))}
                    </span>
                    <span className="shrink-0 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                      {i === 2 ? "GPS" : "QR ✓"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Trade Calculator & Globe */}
        <Reveal delay={0.05} className="sm:col-span-2">
          <Card className="h-full">
            <CardHeader
              icon={Calculator}
              title={t("modules.cat.calc.title")}
              desc={t("modules.cat.calc.desc")}
            />
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
              <ChipList chips={CALC_CHIPS} />
              {/* Mini cost bars visual */}
              <div className="space-y-2.5 rounded-xl border border-border/70 bg-secondary/40 p-3">
                {[
                  { label: "Goods", pct: 62 },
                  { label: "Freight", pct: 18 },
                  { label: "Duty", pct: 12 },
                  { label: "Insurance+Bank", pct: 8 },
                ].map((row) => (
                  <div key={row.label} className="space-y-1">
                    <div className="flex justify-between text-[11px] font-medium text-muted-foreground">
                      <span>{row.label}</span>
                      <span className="tabular-nums">{row.pct}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-border">
                      <div
                        className="h-full rounded-full bg-gradient-brand"
                        style={{ width: `${row.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>

        {/* Marketplace & Portal */}
        <Reveal delay={0.12}>
          <Card className="h-full">
            <CardHeader
              icon={Globe2}
              title={t("modules.cat.market.title")}
              desc={t("modules.cat.market.desc")}
            />
            <div className="mt-4">
              <ChipList chips={MARKET_CHIPS} />
            </div>
          </Card>
        </Reveal>

        {/* Intelligence & Automation */}
        <Reveal delay={0.16}>
          <Card className="h-full">
            <CardHeader
              icon={Sparkles}
              title={t("modules.cat.ai.title")}
              desc={t("modules.cat.ai.desc")}
            />
            <div className="mt-4">
              <ChipList chips={AI_CHIPS} />
            </div>
          </Card>
        </Reveal>

        {/* Security & Administration — wide */}
        <Reveal delay={0.2} className="sm:col-span-2">
          <Card className="h-full ring-brand">
            <CardHeader
              icon={ShieldCheck}
              title={t("modules.cat.admin.title")}
              desc={t("modules.cat.admin.desc")}
            />
            <div className="mt-4">
              <ChipList chips={ADMIN_CHIPS} />
            </div>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}

function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "lift h-full rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}

function CardHeader({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-start gap-3.5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft text-primary shadow-inner">
        <Icon className="h-5.5 w-5.5" aria-hidden />
      </span>
      <div className="space-y-1">
        <h3 className="font-display text-lg font-semibold leading-tight">{title}</h3>
        <p className="text-[13px] leading-snug text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function ChipList({ chips }: { chips: string[] }) {
  const { t } = useSiteT();
  return (
    <ul className="flex flex-wrap content-start gap-1.5" aria-label={t("modules.title")}>
      {chips.map((chip) => (
        <li key={chip}>
          <Badge
            variant="secondary"
            className="rounded-md border border-border/60 bg-secondary/60 px-2 py-0.5 text-[11px] font-medium text-secondary-foreground"
          >
            {chip}
          </Badge>
        </li>
      ))}
      <li>
        <Badge
          variant="outline"
          className="rounded-md border-primary/30 bg-primary/5 px-2 py-0.5 text-[11px] font-semibold text-primary"
        >
          {t("modules.more")}
        </Badge>
      </li>
    </ul>
  );
}
