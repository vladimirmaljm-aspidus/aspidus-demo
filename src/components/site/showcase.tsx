"use client";

/**
 * Showcase — browser-frame mockups of the VELOS workspace.
 * 8 tabs, each recreating a real app screen in pure JSX/CSS.
 */

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LayoutDashboard,
  ClipboardList,
  Calculator,
  Globe2,
  FileText,
  Store,
  Users,
  ShieldCheck,
  Lock,
} from "lucide-react";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { VelosLogo } from "@/components/site/velos-logo";
import {
  DashboardScreen,
  OffersScreen,
  CalcScreen,
  GlobeScreen,
  DocsScreen,
  MarketScreen,
  PortalScreen,
  SecurityScreen,
} from "@/components/site/screens";
import { cn } from "@/lib/utils";

const TABS = [
  { id: "dashboard", icon: LayoutDashboard, labelKey: "showcase.tab.dashboard", descKey: "showcase.tab.dashboard.desc" },
  { id: "offers", icon: ClipboardList, labelKey: "showcase.tab.offers", descKey: "showcase.tab.offers.desc" },
  { id: "calc", icon: Calculator, labelKey: "showcase.tab.calc", descKey: "showcase.tab.calc.desc" },
  { id: "globe", icon: Globe2, labelKey: "showcase.tab.globe", descKey: "showcase.tab.globe.desc" },
  { id: "docs", icon: FileText, labelKey: "showcase.tab.docs", descKey: "showcase.tab.docs.desc" },
  { id: "market", icon: Store, labelKey: "showcase.tab.market", descKey: "showcase.tab.market.desc" },
  { id: "portal", icon: Users, labelKey: "showcase.tab.portal", descKey: "showcase.tab.portal.desc" },
  { id: "security", icon: ShieldCheck, labelKey: "showcase.tab.security", descKey: "showcase.tab.security.desc" },
] as const;

export function Showcase() {
  const { t } = useSiteT();

  return (
    <Section id="showcase" ariaLabel={t("showcase.title")} className="max-w-[90rem]">
      <SectionHeading
        kicker={t("showcase.kicker")}
        title={t("showcase.title")}
        subtitle={t("showcase.subtitle")}
      />

      <Reveal>
        <Tabs defaultValue="dashboard" className="w-full">
          <TabsList className="mx-auto mb-4 flex h-auto w-full max-w-full flex-wrap justify-center gap-1 rounded-2xl bg-secondary/60 p-1.5 sm:mb-6">
            {TABS.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex flex-1 flex-col items-center gap-1 rounded-xl px-2.5 py-2.5 text-xs font-medium data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm sm:flex-none sm:flex-row sm:gap-2 sm:px-3.5 sm:text-sm"
              >
                <tab.icon className="h-4 w-4 shrink-0" aria-hidden />
                <span className="whitespace-nowrap">{t(tab.labelKey)}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="mb-4 flex items-center justify-center gap-2 text-center">
                <p className="max-w-xl text-sm text-muted-foreground">{t(tab.descKey)}</p>
              </div>
              <BrowserFrame activeTab={tab.id}>
                {tab.id === "dashboard" && <DashboardScreen />}
                {tab.id === "offers" && <OffersScreen />}
                {tab.id === "calc" && <CalcScreen />}
                {tab.id === "globe" && <GlobeScreen />}
                {tab.id === "docs" && <DocsScreen />}
                {tab.id === "market" && <MarketScreen />}
                {tab.id === "portal" && <PortalScreen />}
                {tab.id === "security" && <SecurityScreen />}
              </BrowserFrame>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </Section>
  );
}

/* ── Browser chrome + app shell ─────────────────────────────────────── */

function BrowserFrame({
  children,
  activeTab,
}: {
  children: React.ReactNode;
  activeTab: string;
}) {
  const { t } = useSiteT();
  return (
    <div className="ring-brand overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
      {/* Browser top bar */}
      <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1 text-[11px] text-muted-foreground shadow-sm">
          <Lock className="h-3 w-3 text-emerald-500" aria-hidden />
          <span className="font-mono">velos-platform.vercel.app</span>
        </div>
        <span className="hidden items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary sm:flex">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary" aria-hidden />
          {t("showcase.badge")}
        </span>
      </div>

      {/* App shell */}
      <div className="flex min-h-[540px] sm:min-h-[560px]">
        {/* Sidebar (desktop) */}
        <aside className="hidden w-52 shrink-0 flex-col border-r border-border bg-secondary/30 p-3 md:flex" aria-label="App navigation">
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-card px-2.5 py-2 shadow-sm">
            <VelosLogo size={22} />
            <span className="font-display text-sm font-bold tracking-widest">VELOS</span>
          </div>
          <nav className="space-y-0.5 text-[13px]">
            {[
              { label: "Dashboard", active: activeTab === "dashboard", icon: LayoutDashboard },
              { label: "Offers", active: activeTab === "offers", icon: ClipboardList },
              { label: "Trade Calculator", active: activeTab === "calc", icon: Calculator },
              { label: "Trade Globe", active: activeTab === "globe", icon: Globe2 },
              { label: "Documents", active: activeTab === "docs", icon: FileText },
              { label: "Marketplace", active: activeTab === "market", icon: Store },
              { label: "Partner Portal", active: activeTab === "portal", icon: Users },
              { label: "Security", active: activeTab === "security", icon: ShieldCheck },
            ].map((item) => (
              <span
                key={item.label}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-2.5 py-2 font-medium",
                  item.active
                    ? "bg-primary/12 text-primary"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" aria-hidden />
                {item.label}
              </span>
            ))}
            <span className="mt-3 block px-2.5 pt-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              More modules
            </span>
            {["Partners", "Deals", "Invoices", "KYC", "Logistics", "ERP", "Reports"].map((m) => (
              <span
                key={m}
                className="flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-muted-foreground/80 hover:text-foreground"
              >
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" aria-hidden />
                {m}
              </span>
            ))}
          </nav>
          <div className="mt-auto rounded-xl border border-border/70 bg-card p-2.5 text-[11px] shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-[10px] font-bold text-primary-foreground">
                VM
              </span>
              <div className="min-w-0">
                <div className="truncate font-semibold">Trading House d.o.o.</div>
                <div className="truncate text-muted-foreground">Enterprise · 25 users</div>
              </div>
            </div>
          </div>
        </aside>

        {/* Screen content */}
        <div className="min-w-0 flex-1 bg-background">
          <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
            <div className="flex h-8 flex-1 items-center gap-2 rounded-lg border border-border bg-secondary/40 px-3 text-xs text-muted-foreground">
              <span className="h-3.5 w-3.5 rounded-full border border-muted-foreground/50" aria-hidden />
              Search partners, offers, documents…
              <kbd className="ml-auto hidden rounded border border-border bg-card px-1.5 py-0.5 font-mono text-[10px] sm:block">
                ⌘K
              </kbd>
            </div>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              EN
            </span>
            <span className="relative flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-card text-[13px]" aria-hidden>
              🔔
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary" />
            </span>
          </div>
          <div className="p-4 sm:p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
