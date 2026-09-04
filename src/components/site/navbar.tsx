"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Check,
  ChevronDown,
  Globe,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSiteT, LOCALES, LOCALE_META, type Locale } from "@/components/site/i18n-provider";
import { VelosLogo, VelosWordmark } from "@/components/site/velos-logo";
import { cn } from "@/lib/utils";

const NAV_LINKS: { href: string; key: string }[] = [
  { href: "#modules", key: "nav.modules" },
  { href: "#showcase", key: "nav.showcase" },
  { href: "#calculator", key: "nav.calculator" },
  { href: "#marketplace", key: "nav.marketplace" },
  { href: "#security", key: "nav.security" },
  { href: "#pricing", key: "nav.pricing" },
  { href: "#faq", key: "nav.faq" },
];

const DEMO_URL = "https://velos-platform.vercel.app";
const REGISTER_URL = "https://velos-platform.vercel.app/register";

export function Navbar() {
  const { t, locale, setLocale } = useSiteT();
  const { setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const toggleTheme = () => {
    // CSS-driven icons below — no mount guard needed.
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-3 sm:py-4"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between gap-2 rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4",
            scrolled
              ? "glass-strong shadow-lg shadow-black/5"
              : "bg-transparent"
          )}
        >
          {/* Brand */}
          <Link
            href="#top"
            className="flex items-center gap-2.5 rounded-lg px-1 py-0.5"
            aria-label="VELOS — home"
          >
            <VelosLogo size={30} />
            <span className="hidden flex-col leading-none sm:flex">
              <VelosWordmark />
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {t("brand.tagline")}
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-0.5 xl:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <LanguageSelector locale={locale} setLocale={setLocale} t={t} />

            <Button
              variant="ghost"
              size="icon"
              aria-label={t("nav.theme.toggle")}
              onClick={toggleTheme}
              className="h-9 w-9"
            >
              <Sun className="hidden h-4.5 w-4.5 dark:block" />
              <Moon className="block h-4.5 w-4.5 dark:hidden" />
            </Button>

            <Button asChild variant="outline" size="sm" className="hidden rounded-xl sm:inline-flex">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                {t("nav.demo")}
              </a>
            </Button>

            <Button asChild size="sm" className="hidden rounded-xl sm:inline-flex">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                {t("nav.trial")}
              </a>
            </Button>

            {/* Mobile menu trigger */}
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 xl:hidden"
              aria-label={t("nav.menu")}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile menu scrim (dims page content behind the panel) */}
      {mobileOpen && (
        <button
          className="fixed inset-0 z-40 cursor-default bg-background/70 backdrop-blur-sm xl:hidden"
          aria-label={t("nav.menu")}
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 xl:hidden">
        <div
          className={cn(
            "glass-strong relative z-50 mt-2 overflow-hidden rounded-2xl shadow-xl transition-all duration-300",
            mobileOpen ? "max-h-[32rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          )}
        >
          <ul className="flex flex-col p-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-accent"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2 border-t border-border p-3">
            <Button asChild variant="outline" className="flex-1 rounded-xl">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                {t("nav.demo")}
              </a>
            </Button>
            <Button asChild className="flex-1 rounded-xl">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                {t("nav.trial")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function LanguageSelector({
  locale,
  setLocale,
  t,
}: {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (k: string) => string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={t("misc.lang")}
          className="h-9 gap-1.5 rounded-xl px-2.5"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden text-xs font-semibold uppercase tracking-wide sm:inline">
            {locale}
          </span>
          <ChevronDown className="h-3.5 w-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44 rounded-xl">
        <DropdownMenuLabel className="text-xs uppercase tracking-wider text-muted-foreground">
          {t("misc.lang")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {LOCALES.map((l) => (
          <DropdownMenuItem
            key={l}
            onClick={() => setLocale(l)}
            className="gap-2.5 rounded-lg py-2.5"
            aria-current={locale === l}
          >
            <span className="flex-1">{LOCALE_META[l].native}</span>
            {locale === l && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
