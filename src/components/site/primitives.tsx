"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Scroll-reveal wrapper (staggered fade+rise). Respects reduced motion. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Kicker + title + subtitle block used to open every section. */
export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  className,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex max-w-3xl flex-col gap-3 sm:mb-14",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className
      )}
    >
      {kicker && (
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            {kicker}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="text-pretty text-base text-muted-foreground sm:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

/** Section shell with consistent spacing + optional id anchor. */
export function Section({
  id,
  children,
  className,
  ariaLabel,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn("relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8", className)}
    >
      {children}
    </section>
  );
}
