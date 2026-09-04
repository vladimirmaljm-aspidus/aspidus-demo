"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { LottieBox } from "@/components/site/lottie-box";

/** VELOS logo — Veles symbol on copper tile. Matches /logo.svg exactly. */
export function VelosLogo({
  className,
  size = 32,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="VELOS"
    >
      <defs>
        <linearGradient id="velos-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="55%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="velos-sheen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0.5" y="0.5" width="31" height="31" rx="8" ry="8" fill="url(#velos-grad)" stroke="#78350F" strokeWidth="0.5" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="8" ry="8" fill="url(#velos-sheen)" />
      <g fill="none" stroke="#FFFBF5" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 8 L16 26.5" />
        <path d="M24.5 8 L16 26.5" />
        <path d="M10.3 14.5 L21.7 14.5" />
      </g>
    </svg>
  );
}

/** Wordmark next to the logo. */
export function VelosWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display text-lg font-bold tracking-[0.18em] leading-none",
        className
      )}
    >
      VELOS
    </span>
  );
}

/**
 * VELOS logo as a Lottie animation: the copper tile pops in, the Veles mark
 * draws itself stroke by stroke, then a soft sheen sweeps across the tile
 * every few seconds. Pointer-hover replays the draw-in.
 */
export function VelosLogoAnimated({
  className,
  size = 30,
  replayOnHover = true,
  style,
}: {
  className?: string;
  size?: number;
  replayOnHover?: boolean;
  style?: CSSProperties;
}) {
  return (
    <LottieBox
      src="/lottie/velos-mark.json"
      idleFrom={60}
      replayOnHover={replayOnHover}
      pauseOffscreen
      label="VELOS"
      className={cn("block shrink-0", className)}
      style={{ width: size, height: size, ...style }}
    />
  );
}
