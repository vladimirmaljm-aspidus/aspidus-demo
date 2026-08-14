"use client";
import { SiteChrome } from "@/components/site-chrome";
import { useT } from "@/components/i18n-provider";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "What is Aspidus?", a: "Aspidus is a multi-tenant trade CRM/ERP platform designed for international commodity trading houses. It handles everything from partner management and offers to invoices, trade calculations, document verification, and ERP/accounting." },
  { q: "How does the 10-day trial work?", a: "Sign up with your company details and email. We'll send you payment instructions. Once activated, you get full access to all features for 10 days. No credit card required to start." },
  { q: "Can I use my own currency?", a: "Yes. Aspidus supports 50+ currencies with live exchange rates. Each cost line in a trade calculation can be in a different currency, and the system automatically converts to your base currency." },
  { q: "Is my data secure?", a: "Absolutely. We use row-level security (RLS) for tenant isolation, AES-256-GCM encryption for vault secrets, GPS-gated document verification, comprehensive audit logging, and force HTTPS with HSTS." },
  { q: "What languages are supported?", a: "The platform is available in 5 languages: English, Serbian, Turkish, German, and Russian. Each portal client can choose their own language preference." },
  { q: "Can my clients access a portal?", a: "Yes. The Partner Portal allows your clients to view offers, invoices, proformas, documents, browse your product catalog, submit RFQs, and communicate with you — all in their preferred language." },
  { q: "Do you offer API access?", a: "Yes. Business and Enterprise plans include full API access with 216 REST endpoints. You can integrate Aspidus with your existing systems, create custom workflows, and automate trade processes." },
  { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan at any time. Changes take effect immediately, and we prorate the difference. No long-term contracts required." },
];

export default function FAQPage() {
  const t = useT();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SiteChrome>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">{t("faq.title") || "Frequently Asked Questions"}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("faq.subtitle") || "Everything you need to know about Aspidus."}
        </p>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left hover:bg-accent/50 transition-colors"
              >
                <span className="font-medium text-sm sm:text-base">{faq.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-muted-foreground">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SiteChrome>
  );
}
