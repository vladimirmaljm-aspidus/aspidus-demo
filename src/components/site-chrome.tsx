"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShieldCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { useT } from "@/components/i18n-provider";
import { cn } from "@/lib/utils";

/** Shield + wordmark — shared by every marketing page header & footer. */
export function Logo({ withWordmark = true }: { withWordmark?: boolean }) {
  const t = useT();
  return (
    <Link href="/" className="flex items-center gap-2" aria-label={t("brand.name")}>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-brand text-primary-foreground shadow-sm">
        <ShieldCheck className="h-5 w-5" />
      </span>
      {withWordmark && (
        <span className="text-lg font-bold tracking-tight">{t("brand.name")}</span>
      )}
    </Link>
  );
}

const NAV_LINKS: { href: string; key: string }[] = [
  { href: "/#features", key: "nav.features" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/about", key: "nav.about" },
  { href: "/faq", key: "nav.faq" },
  { href: "/contact", key: "nav.contact" },
  { href: "/demo", key: "nav.demo" },
];

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {t(l.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          <LanguageSelector compact />
          <ThemeToggle />
          <Button asChild variant="ghost" size="sm">
            <Link href="/demo">{t("nav.demo")}</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/trial">{t("nav.trial")}</Link>
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 md:hidden">
          <LanguageSelector compact />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={t("nav.menu")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
              >
                {t(l.key)}
                <ChevronRight className="h-4 w-4 opacity-50" />
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button asChild variant="outline" onClick={() => setOpen(false)}>
                <Link href="/demo">{t("nav.demo")}</Link>
              </Button>
              <Button asChild onClick={() => setOpen(false)}>
                <Link href="/trial">{t("nav.trial")}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">{t("brand.tagline")}</p>
            <p className="mt-4 text-xs text-muted-foreground">
              © {new Date().getFullYear()} {t("brand.name")}. {t("footer.rights")}
            </p>
          </div>
          <FooterCol
            title={t("footer.product")}
            items={[
              { label: t("nav.features"), href: "/features" },
              { label: t("nav.pricing"), href: "/pricing" },
              { label: t("nav.demo"), href: "/demo" },
              { label: t("nav.trial"), href: "/trial" },
            ]}
          />
          <FooterCol
            title={t("footer.company")}
            items={[
              { label: t("footer.about"), href: "/about" },
              { label: t("footer.contact"), href: "/contact" },
              { label: t("nav.faq"), href: "/faq" },
            ]}
          />
          <FooterCol
            title={t("footer.legal")}
            items={[
              { label: t("footer.privacy"), href: "/privacy" },
              { label: t("footer.terms"), href: "/terms" },
            ]}
          />
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>
      <ul className="list-clean mt-3 space-y-2 text-sm">
        {items.map((it) => (
          <li key={it.label}>
            <Link
              href={it.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Standard marketing page shell: header + main + footer. */
export function SiteChrome({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className={cn("flex-1", className)}>{children}</main>
      <SiteFooter />
    </div>
  );
}
