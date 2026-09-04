"use client";

import { ThemeProvider } from "next-themes";
import { SiteI18nProvider } from "@/components/site/i18n-provider";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { StatsBar } from "@/components/site/stats-bar";
import { Lifecycle } from "@/components/site/lifecycle";
import { ModulesBento } from "@/components/site/modules-bento";
import { Showcase } from "@/components/site/showcase";
import { CalculatorDemo } from "@/components/site/calculator-demo";
import { MarketplaceSection } from "@/components/site/marketplace-section";
import { SecuritySection } from "@/components/site/security-section";
import { ApiSection } from "@/components/site/api-section";
import { PricingSection } from "@/components/site/pricing-section";
import { FaqSection } from "@/components/site/faq-section";
import { CtaSection } from "@/components/site/cta-section";
import { Footer } from "@/components/site/footer";
import { LottieBox } from "@/components/site/lottie-box";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <SiteI18nProvider>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          {/* Warm specks drifting up behind the whole page */}
          <LottieBox
            src="/lottie/ambient-drift.json"
            loop
            reduced="hide"
            pauseOffscreen={false}
            aspect="slice"
            className="fixed inset-0 z-0 opacity-70"
          />
          <Navbar />
          <main className="flex-1">
            <Hero />
            <StatsBar />
            <Lifecycle />
            <ModulesBento />
            <Showcase />
            <CalculatorDemo />
            <MarketplaceSection />
            <SecuritySection />
            <ApiSection />
            <PricingSection />
            <FaqSection />
            <CtaSection />
          </main>
          <Footer />
        </div>
      </SiteI18nProvider>
    </ThemeProvider>
  );
}
