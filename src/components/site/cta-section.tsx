"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal } from "@/components/site/primitives";
import { VelosLogoAnimated } from "@/components/site/velos-logo";
import { LottieBox } from "@/components/site/lottie-box";

const DEMO_URL = "https://velos-platform.vercel.app";
const REGISTER_URL = "https://velos-platform.vercel.app/register";

export function CtaSection() {
  const { t } = useSiteT();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Reveal>
        <div className="ring-brand relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-brand px-6 py-12 text-center shadow-2xl sm:px-12 sm:py-16">
          {/* Decorative glows + grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 20% 0%, rgba(255,255,255,0.25), transparent 60%), radial-gradient(ellipse 50% 60% at 90% 100%, rgba(0,0,0,0.18), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />

          {/* Trade lanes: packets travel along faint copper routes */}
          <LottieBox
            src="/lottie/cta-network.json"
            loop
            reduced="hide"
            aspect="slice"
            className="absolute inset-0 h-full w-full opacity-40"
          />

          <div className="relative">
            <div className="mx-auto mb-5 flex items-center justify-center">
              <VelosLogoAnimated size={44} className="drop-shadow-lg" />
            </div>
            <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold tracking-tight text-balance text-primary-foreground sm:text-4xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              {t("cta.subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-white px-6 text-base font-semibold text-[oklch(0.45_0.11_50)] shadow-xl hover:bg-white/90"
              >
                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                  {t("cta.trial")}
                  <ArrowRight className="ml-1 h-4.5 w-4.5" aria-hidden />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/40 bg-white/10 px-6 text-base font-semibold text-primary-foreground backdrop-blur hover:bg-white/20 hover:text-primary-foreground"
              >
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                  {t("cta.demo")}
                  <ExternalLink className="ml-1 h-4 w-4" aria-hidden />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
