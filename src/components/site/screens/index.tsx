"use client";

/**
 * VELOS app screen mockups — pure JSX/CSS recreations of the real
 * workspace views, used inside the showcase browser frame.
 */

import {
  ArrowUpRight,
  BadgeCheck,
  Bell,
  Check,
  CircleDot,
  Download,
  FileText,
  Handshake,
  Laptop,
  Lock,
  MapPin,
  MessageSquare,
  Monitor,
  Plus,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Upload,
  Users,
  Ship,
  Globe2,
  Smartphone,
} from "lucide-react";
import { GlobeCanvas } from "@/components/site/globe-canvas";
import { cn } from "@/lib/utils";

/* ── Shared bits ────────────────────────────────────────────────────── */

function StatusBadge({
  label,
  tone,
}: {
  label: string;
  tone: "ok" | "pending" | "bad" | "info";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold",
        tone === "ok" && "bg-emerald-500/12 text-emerald-700 dark:text-emerald-400",
        tone === "pending" && "bg-amber-500/15 text-amber-700 dark:text-amber-400",
        tone === "bad" && "bg-red-500/12 text-red-600 dark:text-red-400",
        tone === "info" && "bg-primary/12 text-primary"
      )}
    >
      <span className="h-1 w-1 rounded-full bg-current" aria-hidden />
      {label}
    </span>
  );
}

function KpiCard({
  label,
  value,
  delta,
  positive = true,
}: {
  label: string;
  value: string;
  delta: string;
  positive?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border/80 bg-card p-3 shadow-sm sm:p-4">
      <div className="text-[11px] font-medium text-muted-foreground">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="font-display text-lg font-bold tabular-nums sm:text-2xl">{value}</span>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 text-[11px] font-semibold",
            positive ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"
          )}
        >
          <ArrowUpRight className={cn("h-3 w-3", !positive && "rotate-90")} aria-hidden />
          {delta}
        </span>
      </div>
    </div>
  );
}

function ScreenTitle({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h3 className="font-display text-base font-semibold sm:text-lg">{title}</h3>
      {action}
    </div>
  );
}

/* ── 1. Dashboard ───────────────────────────────────────────────────── */

export function DashboardScreen() {
  return (
    <div className="space-y-4">
      <ScreenTitle
        title="Dashboard — Q3 2026"
        action={
          <span className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm">
            <Plus className="h-3.5 w-3.5" aria-hidden /> New offer
          </span>
        }
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <KpiCard label="Active deals" value="128" delta="+12%" />
        <KpiCard label="Pipeline value" value="$24.6M" delta="+8.4%" />
        <KpiCard label="Offers sent (mo)" value="312" delta="+21%" />
        <KpiCard label="Conversion" value="31%" delta="-2%" positive={false} />
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.5fr_1fr]">
        {/* Area chart */}
        <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-semibold">Deal flow — 12 months</span>
            <div className="flex gap-3 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden /> Offers
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden /> Deals
              </span>
            </div>
          </div>
          <svg viewBox="0 0 320 110" className="h-28 w-full sm:h-32" role="img" aria-label="Deal flow chart">
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.28" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path
              d="M0,88 C25,80 40,60 65,64 C90,68 105,42 130,48 C155,54 170,30 195,36 C220,42 235,22 260,28 C285,34 300,14 320,18 L320,110 L0,110 Z"
              fill="url(#g1)"
            />
            <path
              d="M0,88 C25,80 40,60 65,64 C90,68 105,42 130,48 C155,54 170,30 195,36 C220,42 235,22 260,28 C285,34 300,14 320,18"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M0,100 C25,96 45,86 70,88 C95,90 115,72 140,76 C165,80 185,60 210,64 C235,68 260,50 285,54 C300,56 310,50 320,48"
              fill="none"
              stroke="var(--chart-3)"
              strokeWidth="2"
              strokeDasharray="5 4"
            />
          </svg>
        </div>

        {/* Activity feed */}
        <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          <span className="text-xs font-semibold">Recent activity</span>
          <ul className="mt-3 space-y-2.5 text-xs">
            {[
              { icon: Send, text: "Offer PRO-0207 sent to Panonija Grain d.o.o.", time: "2m" },
              { icon: Handshake, text: "Deal #D-118 accepted — 5,000 t wheat", time: "18m" },
              { icon: BadgeCheck, text: "KYC approved: Al Bahr Trading", time: "1h" },
              { icon: Ship, text: "Shipment ROT→BEG departed port", time: "3h" },
              { icon: FileText, text: "Invoice INV-0141 QR-verified", time: "5h" },
            ].map((a, i) => (
              <li key={i} className="flex items-center gap-2.5">
                <span className="flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <a.icon className="h-3.5 w-3.5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1 truncate text-foreground/85">{a.text}</span>
                <span className="shrink-0 text-[10px] text-muted-foreground">{a.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Deals table */}
      <div className="overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm">
        <div className="border-b border-border/70 px-4 py-2.5 text-xs font-semibold">
          Latest deals
        </div>
        <div className="overflow-x-auto scrollbar-slim">
          <table className="w-full min-w-[540px] text-xs">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-2 font-semibold">Deal</th>
                <th className="px-4 py-2 font-semibold">Partner</th>
                <th className="px-4 py-2 font-semibold">Product</th>
                <th className="px-4 py-2 text-right font-semibold">Value</th>
                <th className="px-4 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {[
                ["D-118", "Panonija Grain · RS", "Wheat · 5,000 t", "$1.42M", "accepted"],
                ["D-117", "Nordhandel · DE", "Sunflower oil · 2,000 t", "$2.10M", "in transit"],
                ["D-116", "Al Bahr · SA", "Sugar · 8,000 t", "$3.24M", "negotiation"],
                ["D-115", "Marmara Agri · TR", "Corn · 6,500 t", "$1.08M", "draft"],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-secondary/30">
                  <td className="px-4 py-2.5 font-mono font-medium">{row[0]}</td>
                  <td className="px-4 py-2.5">{row[1]}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{row[2]}</td>
                  <td className="px-4 py-2.5 text-right font-semibold tabular-nums">{row[3]}</td>
                  <td className="px-4 py-2.5">
                    <StatusBadge
                      label={row[4]}
                      tone={row[4] === "accepted" ? "ok" : row[4] === "draft" ? "bad" : "pending"}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ── 2. Offers ──────────────────────────────────────────────────────── */

export function OffersScreen() {
  return (
    <div className="space-y-4">
      <ScreenTitle
        title="Offers"
        action={
          <div className="flex items-center gap-2">
            <span className="hidden h-8 w-44 items-center gap-2 rounded-lg border border-border bg-card px-3 text-xs text-muted-foreground shadow-sm sm:flex sm:w-56">
              <Search className="h-3.5 w-3.5" aria-hidden /> Search offers…
            </span>
            <span className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground shadow-sm">
              <Plus className="h-3.5 w-3.5" aria-hidden /> New
            </span>
          </div>
        }
      />

      <div className="flex flex-wrap gap-1.5">
        {["All 312", "Draft 48", "Sent 190", "Accepted 58", "Rejected 16"].map((f, i) => (
          <span
            key={f}
            className={cn(
              "rounded-full border px-3 py-1 text-[11px] font-medium",
              i === 0
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground"
            )}
          >
            {f}
          </span>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm">
        <div className="overflow-x-auto scrollbar-slim">
          <table className="w-full min-w-[680px] text-xs">
            <thead>
              <tr className="text-left text-[10px] uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-2.5 font-semibold">Number</th>
                <th className="px-4 py-2.5 font-semibold">Partner</th>
                <th className="px-4 py-2.5 font-semibold">Product</th>
                <th className="px-4 py-2.5 text-right font-semibold">Qty</th>
                <th className="px-4 py-2.5 text-right font-semibold">Amount</th>
                <th className="px-4 py-2.5 font-semibold">Status</th>
                <th className="px-4 py-2.5 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {[
                ["PRO-2026-0207", "Panonija Grain · RS", "Wheat", "5,000 t", "$1.42M", "sent", "Sep 03"],
                ["PRO-2026-0206", "Nordhandel · DE", "Sunflower oil", "2,000 t", "€1.91M", "accepted", "Sep 02"],
                ["PRO-2026-0205", "Al Bahr Trading · SA", "Sugar ICUMSA 45", "8,000 t", "$3.24M", "sent", "Sep 01"],
                ["PRO-2026-0204", "Marmara Agri · TR", "Corn feed", "6,500 t", "$1.08M", "draft", "Sep 01"],
                ["PRO-2026-0203", "Delta Grains · GR", "Barley", "4,200 t", "£0.86M", "accepted", "Aug 30"],
                ["PRO-2026-0202", "Andes Foods · BR", "Soybeans", "12,000 t", "R$ 28.4M", "rejected", "Aug 29"],
              ].map((row) => (
                <tr key={row[0]} className="hover:bg-secondary/30">
                  <td className="px-4 py-2.5 font-mono font-medium">{row[0]}</td>
                  <td className="px-4 py-2.5">{row[1]}</td>
                  <td className="px-4 py-2.5 text-muted-foreground">{row[2]}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums text-muted-foreground">{row[3]}</td>
                  <td className="px-4 py-2.5 text-right font-semibold tabular-nums">{row[4]}</td>
                  <td className="px-4 py-2.5">
                    <StatusBadge
                      label={row[5]}
                      tone={row[5] === "accepted" ? "ok" : row[5] === "sent" ? "info" : row[5] === "rejected" ? "bad" : "pending"}
                    />
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground">{row[6]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between border-t border-border/70 px-4 py-2.5 text-[11px] text-muted-foreground">
          <span>6 of 312 offers</span>
          <span className="flex gap-1">
            {["‹", "1", "2", "3", "…", "52", "›"].map((p, i) => (
              <span
                key={i}
                className={cn(
                  "rounded border border-border px-1.5 py-0.5",
                  p === "1" && "border-primary/40 bg-primary/10 font-semibold text-primary"
                )}
              >
                {p}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── 3. Trade Calculator ────────────────────────────────────────────── */

export function CalcScreen() {
  const rows: { label: string; value: string; pct: number; strong?: boolean }[] = [
    { label: "Goods value", value: "$4,100,000", pct: 77.4 },
    { label: "Freight (ROT → BEG)", value: "$685,000", pct: 12.9 },
    { label: "Insurance 0.8%", value: "$32,800", pct: 0.6 },
    { label: "Customs duty 5.1%", value: "$209,100", pct: 4.0 },
    { label: "Bank charges", value: "$74,500", pct: 1.4 },
    { label: "Total landed cost", value: "$5,101,400", pct: 100, strong: true },
  ];
  return (
    <div className="space-y-4">
      <ScreenTitle
        title="Trade Calculator"
        action={
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
            <TrendingUp className="h-3 w-3" aria-hidden /> Margin 18.5%
          </span>
        }
      />

      <div className="grid gap-3 lg:grid-cols-2">
        {/* Inputs */}
        <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          <span className="text-xs font-semibold">Shipment inputs</span>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3">
            {[
              ["Commodity", "Wheat HRW"],
              ["Quantity", "5,000 t"],
              ["Unit price", "$820 / t"],
              ["Incoterm", "CIF Beograd"],
              ["Freight", "$685,000"],
              ["Insurance", "0.8 %"],
              ["Customs duty", "5.1 %"],
              ["Bank charges", "$74,500"],
              ["Target margin", "18.5 %"],
              ["Currency", "USD"],
            ].map(([label, value]) => (
              <div key={label} className="space-y-1">
                <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
                <div className="rounded-lg border border-border bg-secondary/30 px-2.5 py-2 font-mono font-medium">
                  {value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/8 px-3 py-2 text-[11px] text-primary">
            <RefreshCw className="h-3.5 w-3.5 shrink-0" aria-hidden />
            Live exchange rates applied (ECB)
          </div>
        </div>

        {/* Breakdown */}
        <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          <span className="text-xs font-semibold">Cost breakdown</span>
          <ul className="mt-3 space-y-3">
            {rows.map((r) => (
              <li key={r.label} className="space-y-1">
                <div className="flex items-baseline justify-between text-xs">
                  <span className={cn("font-medium", r.strong && "font-bold text-primary")}>
                    {r.label}
                  </span>
                  <span className={cn("tabular-nums", r.strong ? "font-bold text-primary" : "font-semibold")}>
                    {r.value}
                  </span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-border">
                  <div
                    className={cn("h-full rounded-full", r.strong ? "bg-gradient-brand" : "bg-primary/45")}
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[
              ["Cost / ton", "$1,020"],
              ["Sell / ton", "$1,209"],
              ["Profit", "$943K"],
            ].map(([l, v]) => (
              <div key={l} className="rounded-lg border border-border/70 bg-secondary/30 px-2 py-2">
                <div className="text-[10px] text-muted-foreground">{l}</div>
                <div className="mt-0.5 font-display text-sm font-bold tabular-nums">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 4. Trade Globe ─────────────────────────────────────────────────── */

export function GlobeScreen() {
  const routes = [
    { from: "Rotterdam, NL", to: "Beograd, RS", days: "18 d", dist: "7,240 km" },
    { from: "Houston, US", to: "Rotterdam, NL", days: "14 d", dist: "7,930 km" },
    { from: "Santos, BR", to: "Lagos, NG", days: "17 d", dist: "6,410 km" },
    { from: "Singapore, SG", to: "Shanghai, CN", days: "6 d", dist: "3,760 km" },
  ];
  return (
    <div className="space-y-4">
      <ScreenTitle
        title="3D Trade Globe"
        action={
          <span className="flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-medium text-muted-foreground shadow-sm">
            <Globe2 className="h-3 w-3 text-primary" aria-hidden /> Maritime router · no land crossings
          </span>
        }
      />
      <div className="grid gap-3 lg:grid-cols-[1.25fr_1fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-xl border border-border/80 bg-secondary/30 shadow-inner sm:min-h-[360px]">
          <div className="absolute inset-0">
            <GlobeCanvas />
          </div>
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {["15 ports", "12 live routes", "Dijkstra maritime"].map((chip) => (
              <span
                key={chip}
                className="glass rounded-full px-2.5 py-1 text-[10px] font-medium text-foreground/80"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          <span className="text-xs font-semibold">Active shipments</span>
          <ul className="mt-3 space-y-2.5">
            {routes.map((r, i) => (
              <li
                key={i}
                className="rounded-lg border border-border/70 bg-secondary/25 p-3 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-2 text-xs font-medium">
                  <Ship className="h-3.5 w-3.5 text-primary" aria-hidden />
                  {r.from} <span className="text-muted-foreground">→</span> {r.to}
                </div>
                <div className="mt-1.5 flex items-center gap-2 text-[10px] text-muted-foreground">
                  <span className="tabular-nums">{r.dist}</span>
                  <span>·</span>
                  <span className="tabular-nums">{r.days}</span>
                  <div className="ml-auto h-1 w-20 overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full bg-gradient-brand"
                      style={{ width: `${[68, 42, 81, 25][i]}%` }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/8 px-3 py-2 text-[11px] text-primary">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
            GPS positions refresh every 6 hours
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 5. Documents & QR ──────────────────────────────────────────────── */

export function DocsScreen() {
  return (
    <div className="space-y-4">
      <ScreenTitle
        title="Documents"
        action={
          <span className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm">
            <Plus className="h-3.5 w-3.5" aria-hidden /> From template
          </span>
        }
      />
      <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr]">
        {/* Doc list */}
        <div className="space-y-2">
          {[
            { id: "INV-2026-0141", type: "Invoice", partner: "Panonija Grain · RS", amount: "$1.42M", status: "QR verified", tone: "ok" as const },
            { id: "PRO-2026-0207", type: "Proforma", partner: "Nordhandel · DE", amount: "€1.91M", status: "sent", tone: "info" as const },
            { id: "LOI-2026-0089", type: "Letter of Intent", partner: "Al Bahr · SA", amount: "$3.24M", status: "signed", tone: "ok" as const },
            { id: "INV-2026-0139", type: "Invoice", partner: "Marmara Agri · TR", amount: "$1.08M", status: "awaiting QR scan", tone: "pending" as const },
          ].map((doc) => (
            <div
              key={doc.id}
              className="flex items-center gap-3 rounded-xl border border-border/80 bg-card p-3 shadow-sm transition-colors hover:border-primary/40"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-4.5 w-4.5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <span className="font-mono">{doc.id}</span>
                  <span className="rounded bg-secondary px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide text-muted-foreground">
                    {doc.type}
                  </span>
                </div>
                <div className="mt-0.5 text-[11px] text-muted-foreground">{doc.partner}</div>
              </div>
              <span className="shrink-0 text-xs font-semibold tabular-nums">{doc.amount}</span>
              <StatusBadge label={doc.status} tone={doc.tone} />
              <Download className="hidden h-3.5 w-3.5 shrink-0 text-muted-foreground sm:block" aria-hidden />
            </div>
          ))}
          <div className="flex items-center justify-between rounded-xl border border-dashed border-border bg-secondary/25 px-4 py-3 text-[11px] text-muted-foreground">
            <span>Revisions · letterheads · templates · register</span>
            <span className="font-medium text-primary">4 modules →</span>
          </div>
        </div>

        {/* Verification card */}
        <div className="space-y-3">
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-4.5 w-4.5" aria-hidden />
              </span>
              <div>
                <div className="text-xs font-bold">Public verification — /verify</div>
                <div className="text-[10px] text-muted-foreground">GPS-gated · no login required</div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-4">
              {/* QR-ish glyph */}
              <div
                className="grid h-20 w-20 shrink-0 grid-cols-7 grid-rows-7 gap-[2px] rounded-lg border border-emerald-500/25 bg-card p-2"
                aria-hidden
              >
                {Array.from({ length: 49 }).map((_, i) => {
                  const on =
                    [0, 1, 2, 5, 6, 7, 8, 10, 14, 16, 18, 20, 22, 24, 27, 29, 31, 33, 35, 38, 40, 42, 44, 46, 48, 17, 26, 30, 34, 41].includes(
                      i
                    ) || (i > 20 && i < 28 && i % 3 === 0);
                  return <span key={i} className={cn("rounded-[1px]", on ? "bg-foreground/80" : "bg-transparent")} />;
                })}
              </div>
              <div className="min-w-0 space-y-1.5 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-emerald-700 dark:text-emerald-400">
                  <BadgeCheck className="h-4 w-4" aria-hidden /> Document is valid
                </div>
                <div className="text-muted-foreground">INV-2026-0141 · Panonija Grain</div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
                  Verified in Novi Sad, RS · 45.25°N 19.84°E
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
            <span className="text-xs font-semibold">Anti-fraud checks</span>
            <ul className="mt-2.5 space-y-2 text-[11px]">
              {[
                "QR code signature per document",
                "GPS location of the verifier",
                "Revocation list & expiry",
                "Immutable audit trail",
              ].map((c) => (
                <li key={c} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-3.5 w-3.5 text-emerald-500" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 6. Marketplace ─────────────────────────────────────────────────── */

export function MarketScreen() {
  return (
    <div className="space-y-4">
      <ScreenTitle
        title="B2B Marketplace"
        action={
          <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold text-primary">
            <Sparkles className="h-3 w-3" aria-hidden /> 3 AI suggestions waiting
          </span>
        }
      />
      <div className="grid gap-3 md:grid-cols-2">
        {/* RFQ card */}
        <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-primary">
            <CircleDot className="h-3.5 w-3.5" aria-hidden /> RFQ · Supply
          </div>
          <div className="mt-2 text-sm font-semibold">Wheat HRW — 5,000 t</div>
          <div className="mt-1 text-[11px] text-muted-foreground">
            Loading: Constanta, RO · CIF Beograd, RS · Payment: DLC 30 days
          </div>
          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="flex gap-1.5">
              <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium">$810–830 / t</span>
              <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-medium">7 responses</span>
            </div>
            <StatusBadge label="closes in 2d 14h" tone="pending" />
          </div>
        </div>

        {/* Smart pricing */}
        <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 shadow-sm">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden /> Smart pricing
          </div>
          <div className="mt-2 text-sm font-semibold">Sunflower oil — benchmark</div>
          <div className="mt-3 space-y-2">
            {[
              ["Market median", "$1,185 / t", 55],
              ["Your last offer", "$1,164 / t", 42],
              ["Suggested", "$1,192 / t", 65],
            ].map(([l, v, w], i) => (
              <div key={l as string} className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-muted-foreground">{l}</span>
                  <span className={cn("font-semibold tabular-nums", i === 2 && "text-primary")}>{v}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-border">
                  <div
                    className={cn("h-full rounded-full", i === 2 ? "bg-gradient-brand" : "bg-primary/40")}
                    style={{ width: `${w}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Negotiation */}
        <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <MessageSquare className="h-3.5 w-3.5" aria-hidden /> Negotiation · D-116
          </div>
          <div className="mt-3 space-y-2">
            <div className="max-w-[85%] rounded-lg rounded-tl-none bg-secondary px-3 py-2 text-[11px]">
              <b>Al Bahr:</b> Can you improve to $395/t for 8,000 t?
            </div>
            <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-none bg-primary/12 px-3 py-2 text-[11px]">
              <b>You:</b> $398/t with DLC 60 days — final.
            </div>
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
              <StatusBadge label="their turn" tone="pending" />
              <span>round 4 of 6</span>
            </div>
          </div>
        </div>

        {/* ESG + intelligence */}
        <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            <Globe2 className="h-3.5 w-3.5" aria-hidden /> Counterparty intelligence
          </div>
          <div className="mt-3 flex items-center gap-3">
            <div className="relative h-14 w-14 shrink-0">
              <svg viewBox="0 0 36 36" className="h-14 w-14 -rotate-90">
                <circle cx="18" cy="18" r="15.5" fill="none" stroke="var(--border)" strokeWidth="4" />
                <circle
                  cx="18" cy="18" r="15.5" fill="none" stroke="var(--primary)" strokeWidth="4"
                  strokeDasharray="97.4" strokeDashoffset="19.5" strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">80</span>
            </div>
            <div className="min-w-0 text-[11px]">
              <div className="font-semibold">Nordhandel GmbH — ESG B</div>
              <div className="mt-0.5 text-muted-foreground">
                Reviews 4.6 ★ · 142 deals · member since 2024
              </div>
              <div className="mt-1 flex flex-wrap gap-1.5">
                <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700 dark:text-emerald-400">
                  Verified
                </span>
                <span className="rounded bg-secondary px-1.5 py-0.5 text-[9px] font-medium text-muted-foreground">
                  ISO 22000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 7. Partner Portal ──────────────────────────────────────────────── */

export function PortalScreen() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/25 bg-gradient-brand-soft px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow">
            <Users className="h-4.5 w-4.5" aria-hidden />
          </span>
          <div>
            <div className="text-sm font-bold">Partner Portal — Nordhandel GmbH</div>
            <div className="text-[11px] text-muted-foreground">
              Separate secure login · scoped to shared data only
            </div>
          </div>
        </div>
        <StatusBadge label="session expires in 30 min" tone="info" />
      </div>

      <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-border/80 bg-card shadow-sm">
          <div className="border-b border-border/70 px-4 py-2.5 text-xs font-semibold">
            Offers shared with you
          </div>
          <div className="divide-y divide-border/60">
            {[
              ["PRO-2026-0206", "Sunflower oil · 2,000 t", "€1.91M", "accepted"],
              ["PRO-2026-0184", "Rapeseed · 3,500 t", "€1.63M", "sent"],
              ["PRO-2026-0171", "Wheat feed · 7,000 t", "€1.12M", "expired"],
            ].map((row) => (
              <div key={row[0]} className="flex items-center gap-3 px-4 py-3 text-xs hover:bg-secondary/30">
                <span className="font-mono font-medium">{row[0]}</span>
                <span className="min-w-0 flex-1 truncate text-muted-foreground">{row[1]}</span>
                <span className="font-semibold tabular-nums">{row[2]}</span>
                <StatusBadge
                  label={row[3]}
                  tone={row[3] === "accepted" ? "ok" : row[3] === "sent" ? "info" : "bad"}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
            <span className="text-xs font-semibold">KYC documents</span>
            <div className="mt-2.5 space-y-2 text-[11px]">
              {[
                ["Trade register extract", 100],
                ["VAT certificate", 100],
                ["Bank reference letter", 60],
              ].map(([l, p]) => (
                <div key={l as string} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{l}</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Upload className="h-3 w-3 text-primary" aria-hidden />
                      {p === 100 ? "approved" : "in review"}
                    </span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${p}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
            <span className="text-xs font-semibold">RFQ response — Wheat HRW 5,000 t</span>
            <div className="mt-2.5 space-y-2 text-[11px]">
              <div className="rounded-lg border border-border bg-secondary/25 px-3 py-2 font-mono">
                $822 / t · CIF Beograd · DLC 30d
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Submitted 2 days ago</span>
                <span className="flex items-center gap-1 font-medium text-primary">
                  <Bell className="h-3 w-3" aria-hidden /> under review
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 8. Security & Audit ────────────────────────────────────────────── */

export function SecurityScreen() {
  return (
    <div className="space-y-4">
      <ScreenTitle
        title="Security & Audit"
        action={
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
            <ShieldCheck className="h-3 w-3" aria-hidden /> RLS active · 0 incidents
          </span>
        }
      />
      <div className="grid gap-3 lg:grid-cols-[1.25fr_1fr]">
        {/* Audit log */}
        <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
          <span className="text-xs font-semibold">Audit log — last 24h</span>
          <ul className="mt-3 space-y-3">
            {[
              { user: "m.petrovic", action: "offer.send", target: "PRO-2026-0207", time: "14:32", icon: Send },
              { user: "admin", action: "rbac.update", target: "role:trader +deals.export", time: "13:58", icon: ShieldCheck },
              { user: "j.markovic", action: "invoice.create", target: "INV-2026-0141", time: "13:21", icon: FileText },
              { user: "system", action: "2fa.enroll", target: "user:a.horvat", time: "11:40", icon: Lock },
              { user: "m.petrovic", action: "document.verify", target: "LOI-2026-0089", time: "10:05", icon: BadgeCheck },
              { user: "system", action: "ratelimit.block", target: "91.67.x.x · 40 req/min", time: "08:17", icon: ShieldCheck },
            ].map((e, i) => (
              <li key={i} className="flex items-center gap-3 text-xs">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <e.icon className="h-3.5 w-3.5" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate">
                    <span className="font-mono font-semibold text-primary">{e.user}</span>{" "}
                    <span className="font-mono">{e.action}</span>
                  </div>
                  <div className="truncate text-[10px] text-muted-foreground">{e.target}</div>
                </div>
                <span className="shrink-0 tabular-nums text-muted-foreground">{e.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          {/* RBAC matrix */}
          <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
            <span className="text-xs font-semibold">RBAC — permission matrix</span>
            <div className="mt-2.5 overflow-x-auto scrollbar-slim">
              <table className="w-full min-w-[260px] text-[10px]">
                <thead>
                  <tr className="text-left text-muted-foreground">
                    <th className="py-1.5 pr-2 font-semibold">Module</th>
                    <th className="py-1.5 px-1 text-center font-semibold">Viewer</th>
                    <th className="py-1.5 px-1 text-center font-semibold">Trader</th>
                    <th className="py-1.5 px-1 text-center font-semibold">Admin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    ["Offers", 1, 2, 3],
                    ["Invoices", 0, 2, 3],
                    ["KYC", 0, 1, 3],
                    ["Marketplace", 1, 2, 3],
                    ["Audit log", 0, 0, 3],
                  ].map((row) => (
                    <tr key={row[0] as string}>
                      <td className="py-1.5 pr-2 font-medium">{row[0]}</td>
                      {[1, 2, 3].map((c) => (
                        <td key={c} className="py-1.5 px-1 text-center">
                          <span
                            className={cn(
                              "inline-block h-2 w-2 rounded-full",
                              (row[c] as number) === 0 && "bg-border",
                              (row[c] as number) === 1 && "bg-amber-500",
                              (row[c] as number) === 2 && "bg-primary",
                              (row[c] as number) === 3 && "bg-emerald-500"
                            )}
                            title={["no access", "read", "write", "manage"][(row[c] as number)]}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-2 flex flex-wrap gap-2 text-[9px] text-muted-foreground">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-border" /> none</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" /> read</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-primary" /> write</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> manage</span>
            </div>
          </div>

          {/* Sessions */}
          <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
            <span className="text-xs font-semibold">Active sessions</span>
            <div className="mt-2.5 space-y-2 text-[11px]">
              {[
                { icon: Laptop, device: "MacBook · Chrome", loc: "Belgrade, RS", status: "current" },
                { icon: Smartphone, device: "iPhone 15 · Safari", loc: "Novi Sad, RS", status: "3h ago" },
                { icon: Monitor, device: "Windows · Edge", loc: "Istanbul, TR", status: "yesterday" },
              ].map((s) => (
                <div
                  key={s.device}
                  className="flex items-center justify-between gap-2 rounded-lg border border-border/70 bg-secondary/25 px-3 py-2"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <s.icon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden />
                    <span className="min-w-0">
                      <span className="block truncate font-medium">{s.device}</span>
                      <span className="text-muted-foreground">{s.loc}</span>
                    </span>
                  </span>
                  {s.status === "current" ? (
                    <StatusBadge label="current" tone="ok" />
                  ) : (
                    <span className="shrink-0 rounded-md border border-border px-2 py-0.5 text-[9px] font-semibold text-muted-foreground hover:border-red-400/50 hover:text-red-500">
                      Revoke
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
