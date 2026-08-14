"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { DICTIONARIES, LOCALES, LOCALE_META, translate, type Locale } from "@/lib/i18n";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  /** Translate a key, returning a string. */
  t: (key: string) => string;
  /** List of supported locales (for selector). */
  locales: Locale[];
  /** Metadata (flag, label, native) for a locale. */
  meta: (l: Locale) => { label: string; flag: string; native: string };
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "aspidus-demo-locale";

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && LOCALES.includes(stored)) return stored;
  } catch {
    /* ignore */
  }
  const nav = window.navigator.language?.slice(0, 2).toLowerCase() as Locale;
  if (nav && LOCALES.includes(nav)) return nav;
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // hydrate from localStorage / browser after mount
  useEffect(() => {
    setLocaleState(detectInitialLocale());
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const t = useCallback((key: string) => translate(locale, key), [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t,
      locales: LOCALES,
      meta: (l: Locale) => LOCALE_META[l],
    }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
  return ctx;
}

/** Convenience hook returning just the translate function. */
export function useT(): (key: string) => string {
  return useI18n().t;
}

// Keep the dictionaries reachable for completeness tooling
export { DICTIONARIES };
