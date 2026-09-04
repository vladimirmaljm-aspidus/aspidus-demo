"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";

export function FaqSection() {
  const { t } = useSiteT();

  return (
    <Section id="faq" ariaLabel={t("faq.title")}>
      <SectionHeading
        kicker={t("faq.kicker")}
        title={t("faq.title")}
        subtitle={t("faq.subtitle")}
      />

      <Reveal className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <AccordionItem
              key={n}
              value={`q${n}`}
              className="rounded-xl border border-border bg-card px-5 shadow-sm data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="gap-4 py-4 text-left font-display text-[15px] font-semibold hover:no-underline sm:text-base [&>svg]:shrink-0">
                {t(`faq.q${n}`)}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                {t(`faq.a${n}`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </Section>
  );
}
