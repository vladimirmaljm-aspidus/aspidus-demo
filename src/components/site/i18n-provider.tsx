"use client";

/**
 * VELOS marketing site — i18n provider.
 * 5 locales with per-key English fallback, persisted to localStorage.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { BASE_DICTS, LOCALES, LOCALE_META, type Locale } from "@/lib/site/i18n";
import { tr, de, ru } from "@/lib/site/locales-extra";

type Dict = Record<string, string>;

const ALL_DICTS: Record<Locale, Dict> = {
  en: BASE_DICTS.en,
  sr: BASE_DICTS.sr,
  tr,
  de,
  ru,
};

const STORAGE_KEY = "velos-site-locale";

function isLocale(v: unknown): v is Locale {
  return typeof v === "string" && (LOCALES as string[]).includes(v);
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function SiteI18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Hydrate saved locale (client only — SSR always renders "en", avoiding
  // hydration mismatches; the switch happens in an effect afterwards).
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      try {
        const saved = window.localStorage.getItem(STORAGE_KEY);
        if (isLocale(saved) && saved !== "en") setLocaleState(saved);
      } catch {
        /* private mode / disabled storage */
      }
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Keep <html lang> in sync for accessibility.
  useEffect(() => {
    document.documentElement.lang = locale === "en" ? "en" : locale;
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return (
        ALL_DICTS[locale]?.[key] ??
        BASE_DICTS.en[key] ??
        ALL_DICTS.en[key] ??
        key
      );
    },
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useSiteT() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useSiteT must be used within SiteI18nProvider");
  return ctx;
}

export { LOCALES, LOCALE_META, type Locale };
