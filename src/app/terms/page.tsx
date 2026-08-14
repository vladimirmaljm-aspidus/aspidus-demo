"use client";
import { SiteChrome } from "@/components/site-chrome";
import { useT } from "@/components/i18n-provider";

export default function TermsPage() {
  const t = useT();
  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">{t("terms.title") || "Terms of Service"}</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: August 2025</p>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-base font-semibold text-foreground">1. Acceptance</h2>
            <p className="mt-2">By using VELOS, you agree to these terms. If you do not agree, do not use the service.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">2. Subscription</h2>
            <p className="mt-2">Subscriptions are billed monthly or annually. You can cancel at any time. Refunds are prorated for unused time.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">3. Acceptable Use</h2>
            <p className="mt-2">You agree not to use VELOS for illegal activities, spam, or to store data that violates applicable laws. Each tenant is responsible for the accuracy of their trade data.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">4. Limitation of Liability</h2>
            <p className="mt-2">VELOS is provided "as is". We are not liable for indirect, incidental, or consequential damages arising from the use of the platform.</p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-foreground">5. Contact</h2>
            <p className="mt-2">For legal questions, contact: desk@velos.co</p>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
