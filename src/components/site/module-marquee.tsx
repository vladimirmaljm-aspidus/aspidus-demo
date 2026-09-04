"use client";

import { useSiteT } from "@/components/site/i18n-provider";

const MODULES = [
  "Offers", "Demands", "Deals", "Partners 360°", "Products", "Product Catalog",
  "Supplier Offers", "Trade Calculator", "3D Trade Globe", "Maritime Router",
  "Proformas", "Invoices", "LOIs", "Document Register", "Document Templates",
  "Letterheads", "QR Verification", "GPS Verify", "KYC", "Customs",
  "Logistics", "Inventory", "ERP", "Banking", "Exchange Rates", "Market News",
  "Commissions", "Marketplace", "RFQs", "Negotiations", "Smart Pricing",
  "AI Smart-Suggest", "ESG", "Reviews", "Partner Portal", "Portal RFQs",
  "KYC Uploads", "Calendar", "Tasks", "Notifications", "Email Templates",
  "Quick Notes", "Global Search", "Custom Dashboards", "Audit Log", "RBAC",
  "2FA", "API Keys", "Webhooks", "Vault", "Feature Flags", "Multi-Tenant",
];

export function ModuleMarquee() {
  const { t } = useSiteT();
  const items = [...MODULES, ...MODULES];
  return (
    <div
      className="relative overflow-hidden border-y border-border/70 bg-background py-3"
      aria-label={t("modules.title")}
    >
      {/* Edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
        aria-hidden
      />
      <div className="animate-marquee flex w-max items-center gap-2.5">
        {items.map((m, i) => (
          <span
            key={`${m}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border/70 bg-secondary/40 px-3 py-1 text-[11px] font-medium text-muted-foreground"
          >
            <span className="h-1 w-1 rounded-full bg-primary/70" aria-hidden />
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}
