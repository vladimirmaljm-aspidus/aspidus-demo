"use client";
import { SiteChrome } from "@/components/site-chrome";
import { useT } from "@/components/i18n-provider";

export default function PrivacyPage() {
  const t = useT();
  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">{t("privacy.title") || "Privacy Policy"}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2025</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-base font-semibold text-foreground">1. Data Collection</h2>
            <p className="mt-2">VELOS collects company name, contact email, phone number, and trade-related data (partners, products, offers, invoices) that you voluntarily enter into the platform.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">2. Data Storage</h2>
            <p className="mt-2">All data is stored in encrypted PostgreSQL databases with row-level security (RLS). Vault secrets are encrypted with AES-256-GCM. Backups are encrypted at rest.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">3. Data Sharing</h2>
            <p className="mt-2">We do not share your data with third parties. Your trade data is tenant-isolated — no other tenant can access it. Portal clients only see documents you explicitly share.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">4. Data Retention</h2>
            <p className="mt-2">Your data is retained for as long as your account is active. Upon cancellation, you can export all data. After 90 days of inactivity, data is permanently deleted.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">5. Contact</h2>
            <p className="mt-2">For privacy questions, contact: desk@velos.co</p>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
