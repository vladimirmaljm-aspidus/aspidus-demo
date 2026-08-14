"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useT } from "@/components/i18n-provider";
import { cn } from "@/lib/utils";

type TourStep = {
  /** Translation key for the title */
  titleKey: string;
  /** Translation key for the body */
  bodyKey: string;
  /** Optional target route — the tour will navigate to it before showing the step. */
  href?: string;
  /** Optional target element selector — we highlight it with a glowing ring. */
  selector?: string;
  /** Optional emoji rendered as the step icon. */
  emoji: string;
};

const STEPS: TourStep[] = [
  { titleKey: "tour.step1.title", bodyKey: "tour.step1.body", emoji: "👋" },
  { titleKey: "tour.step2.title", bodyKey: "tour.step2.body", href: "/demo", emoji: "📊" },
  { titleKey: "tour.step3.title", bodyKey: "tour.step3.body", href: "/demo/partners", emoji: "🤝" },
  { titleKey: "tour.step4.title", bodyKey: "tour.step4.body", href: "/demo/products", emoji: "📦" },
  { titleKey: "tour.step5.title", bodyKey: "tour.step5.body", href: "/demo/offers", emoji: "💱" },
  { titleKey: "tour.step6.title", bodyKey: "tour.step6.body", href: "/demo/invoices", emoji: "🧾" },
  { titleKey: "tour.step7.title", bodyKey: "tour.step7.body", href: "/demo/trade-calculator", emoji: "🧮" },
  { titleKey: "tour.step8.title", bodyKey: "tour.step8.body", href: "/trial", emoji: "🚀" },
];

const STORAGE_KEY = "aspidus-demo-tour-done";

export function GuidedTour() {
  const t = useT();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [showLauncher, setShowLauncher] = useState(true);

  // Open on first visit (only on /demo* routes)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!pathname?.startsWith("/demo")) return;
    try {
      const done = window.localStorage.getItem(STORAGE_KEY);
      if (!done) {
        const id = setTimeout(() => setOpen(true), 700);
        return () => clearTimeout(id);
      }
    } catch {
      /* ignore */
    }
  }, [pathname]);

  // Highlight the target element of the current step
  useEffect(() => {
    if (!open) return;
    const cur = STEPS[step];
    if (!cur?.selector) return;
    const el = document.querySelector(cur.selector) as HTMLElement | null;
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("tour-highlight");
    return () => el.classList.remove("tour-highlight");
  }, [open, step]);

  const close = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  const next = () => {
    if (step < STEPS.length - 1) setStep((s) => s + 1);
    else close();
  };
  const back = () => step > 0 && setStep((s) => s - 1);

  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;
  const progressPct = ((step + 1) / STEPS.length) * 100;

  return (
    <>
      <style>{`
        .tour-highlight {
          outline: 2px solid hsl(var(--primary));
          outline-offset: 3px;
          border-radius: 0.5rem;
          transition: outline 0.2s ease;
        }
      `}</style>

      {/* Floating launcher (always visible on /demo) */}
      {pathname?.startsWith("/demo") && showLauncher && !open && (
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setStep(0);
            setOpen(true);
          }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg shadow-primary/30"
          aria-label="Start guided tour"
        >
          <Sparkles className="h-5 w-5" />
          <span className="text-sm font-semibold">{t("tour.restart")}</span>
        </motion.button>
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-5 z-50 w-[360px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border bg-card shadow-2xl"
            role="dialog"
            aria-label="Guided tour"
          >
            <div className="relative bg-gradient-to-br from-primary to-blue-700 p-5 text-primary-foreground">
              <button
                onClick={close}
                aria-label="Close tour"
                className="absolute right-3 top-3 rounded-md p-1 text-primary-foreground/80 hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="mb-2 text-3xl">{current.emoji}</div>
              <h3 className="text-lg font-bold leading-tight">{t(current.titleKey)}</h3>
              <p className="mt-1 text-sm text-primary-foreground/90">{t(current.bodyKey)}</p>
              <div className="mt-3 text-[11px] uppercase tracking-wider text-primary-foreground/80">
                Step {step + 1} {t("tour.of")} {STEPS.length}
              </div>
            </div>

            <div className="space-y-4 p-4">
              <Progress value={progressPct} className="h-1.5" />

              {current.href && (
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                  {current.href === "/trial" ? "Redirecting to trial sign-up" : `Navigated to ${current.href}`}
                </p>
              )}

              <div className="flex items-center justify-between gap-2">
                <Button variant="ghost" size="sm" onClick={close} className="text-muted-foreground">
                  {t("tour.skip")}
                </Button>
                <div className="flex items-center gap-2">
                  {step > 0 && (
                    <Button variant="outline" size="sm" onClick={back}>
                      <ChevronLeft className="h-4 w-4" />
                      {t("tour.back")}
                    </Button>
                  )}
                  {isLast ? (
                    <Button asChild variant="emerald" size="sm">
                      <Link href="/trial" onClick={close}>
                        {t("tour.finish")}
                      </Link>
                    </Button>
                  ) : current.href === "/trial" ? (
                    <Button asChild variant="default" size="sm">
                      <Link href="/trial" onClick={close}>
                        {t("tour.next")}
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button
                      variant="default"
                      size="sm"
                      onClick={next}
                      className={cn(current.href && "ring-2 ring-primary/30")}
                    >
                      {t("tour.next")}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
