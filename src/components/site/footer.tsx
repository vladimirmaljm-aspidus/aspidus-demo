"use client";

import { useState } from "react";
import {
  ArrowUp,
  ExternalLink,
  Languages,
  Leaf,
  Lock,
  ScrollText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSiteT } from "@/components/site/i18n-provider";
import { VelosLogo, VelosWordmark } from "@/components/site/velos-logo";

const DEMO_URL = "https://velos-platform.vercel.app";
const REGISTER_URL = "https://velos-platform.vercel.app/register";
const API_DOCS_URL = "https://velos-platform.vercel.app/api-docs";

export function Footer() {
  const { t } = useSiteT();
  const [legal, setLegal] = useState<"privacy" | "terms" | null>(null);
  const isMobile = useIsMobile();

  const productLinks = [
    { label: t("nav.modules"), href: "#modules" },
    { label: t("nav.showcase"), href: "#showcase" },
    { label: t("nav.calculator"), href: "#calculator" },
    { label: t("nav.marketplace"), href: "#marketplace" },
    { label: t("nav.pricing"), href: "#pricing" },
  ];

  const companyLinks = [
    { label: t("footer.contact"), href: "mailto:vladimir.maljm@gmail.com" },
    { label: t("footer.faq"), href: "#faq" },
  ];

  const resourceLinks = [
    { label: t("footer.demo"), href: DEMO_URL, external: true },
    { label: t("footer.trial"), href: REGISTER_URL, external: true },
    { label: t("footer.api"), href: API_DOCS_URL, external: true },
  ];

  const legalLinks = [
    { label: t("footer.privacy"), action: () => setLegal("privacy") },
    { label: t("footer.terms"), action: () => setLegal("terms") },
  ];

  return (
    <>
      <footer className="mt-auto border-t border-border bg-secondary/30">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2.5">
                <VelosLogo size={28} />
                <div className="flex flex-col">
                  <VelosWordmark />
                  <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {t("brand.tagline")}
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
                {t("footer.tagline")}
              </p>
              <div className="mt-4 flex flex-col gap-2 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Languages className="h-3.5 w-3.5 text-primary" aria-hidden />
                  {t("footer.languages")}
                </span>
                <span className="flex items-center gap-1.5">
                  <Leaf className="h-3.5 w-3.5 text-primary" aria-hidden />
                  {t("footer.made")}
                </span>
              </div>
            </div>

            {/* Link columns */}
            <FooterColumn title={t("footer.product")}>
              {productLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title={t("footer.company")}>
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title={t("footer.resources")}>
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                  >
                    {l.label}
                    {l.external && <ExternalLink className="h-3 w-3 opacity-50" aria-hidden />}
                  </a>
                </li>
              ))}
            </FooterColumn>

            <FooterColumn title={t("footer.legal")}>
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={l.action}
                    className="text-left transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </FooterColumn>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/70 pt-6 text-[11px] text-muted-foreground sm:flex-row">
            <span>
              © {new Date().getFullYear()} VELOS · {t("footer.rights")}
            </span>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 rounded-lg text-[11px]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="h-3.5 w-3.5" aria-hidden />
              {t("misc.backToTop")}
            </Button>
          </div>
        </div>
      </footer>

      {/* Legal dialogs (privacy / terms) */}
      {!isMobile ? (
        <Dialog open={legal !== null} onOpenChange={(o) => !o && setLegal(null)}>
          <DialogContent className="max-h-[80vh] max-w-lg overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                {legal === "privacy" ? (
                  <>
                    <Lock className="h-4.5 w-4.5 text-primary" aria-hidden /> {t("footer.privacy")}
                  </>
                ) : (
                  <>
                    <ScrollText className="h-4.5 w-4.5 text-primary" aria-hidden /> {t("footer.terms")}
                  </>
                )}
              </DialogTitle>
              <DialogDescription asChild>
                <div className="space-y-3 pt-2 text-sm leading-relaxed text-muted-foreground">
                  {legal === "privacy" ? <PrivacyBody /> : <TermsBody />}
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={legal !== null} onOpenChange={(o) => !o && setLegal(null)}>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle className="flex items-center gap-2">
                {legal === "privacy" ? (
                  <>
                    <Lock className="h-4.5 w-4.5 text-primary" aria-hidden /> {t("footer.privacy")}
                  </>
                ) : (
                  <>
                    <ScrollText className="h-4.5 w-4.5 text-primary" aria-hidden /> {t("footer.terms")}
                  </>
                )}
              </DrawerTitle>
              <DrawerDescription asChild>
                <div className="space-y-3 pt-2 text-sm leading-relaxed text-muted-foreground">
                  {legal === "privacy" ? <PrivacyBody /> : <TermsBody />}
                </div>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}

function PrivacyBody() {
  return (
    <>
      <p>
        This marketing website is static — it does not use cookies, analytics trackers or
        sign-up forms. All data you enter into the live platform (demo or trial) is processed
        under the platform&apos;s tenant agreement.
      </p>
      <p>
        The VELOS platform isolates every tenant&apos;s records at the database level
        (PostgreSQL row-level security), encrypts traffic end-to-end, and records every write
        in an immutable audit log. API keys are tenant-scoped and revocable at any time.
      </p>
      <p>
        Questions about data handling? Contact <span className="font-medium text-foreground">vladimir.maljm@gmail.com</span>.
      </p>
    </>
  );
}

function TermsBody() {
  return (
    <>
      <p>
        The 10-day free trial grants full access to the features of your selected plan. No
        credit card is required. At the end of the trial you may upgrade or simply stop using
        the platform.
      </p>
      <p>
        Fair use applies: automated scraping, load testing without consent, or sharing tenant
        credentials outside your organisation is not permitted. Offer, invoice and proforma
        documents generated on the platform carry QR verification signatures — tampering with
        them is prohibited and detectable.
      </p>
      <p>
        Plan prices are billed monthly per tenant. Custom deployments (on-premise or
        white-label) are governed by an individual agreement.
      </p>
    </>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/70">
        {title}
      </h3>
      <ul className="mt-3 space-y-2 text-[13px] text-muted-foreground">{children}</ul>
    </div>
  );
}
