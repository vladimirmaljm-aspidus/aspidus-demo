"use client";

import { Globe, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Compact language selector showing flag + code; opens a small dropdown. */
export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, locales, meta } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const current = meta(locale);

  return (
    <div className="relative" ref={ref}>
      <Button
        variant="ghost"
        size={compact ? "icon" : "sm"}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        onClick={() => setOpen((v) => !v)}
        className={cn(compact && "px-0")}
      >
        <Globe className="h-4 w-4" />
        {!compact && (
          <span className="ml-1 text-base leading-none">{current.flag}</span>
        )}
        {!compact && (
          <span className="hidden sm:inline uppercase text-xs font-semibold">{locale}</span>
        )}
      </Button>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-md border bg-card shadow-lg"
        >
          {locales.map((l) => {
            const m = meta(l);
            const active = l === locale;
            return (
              <button
                key={l}
                role="option"
                aria-selected={active}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-2 px-3 py-2 text-sm hover:bg-accent",
                  active && "bg-accent/60",
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="text-base leading-none">{m.flag}</span>
                  <span>{m.native}</span>
                </span>
                {active && <Check className="h-4 w-4 text-primary" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
