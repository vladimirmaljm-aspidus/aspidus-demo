import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind-aware className combiner */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number as a currency string with thousands separators */
export function formatCurrency(amount: number, currency: string = "USD"): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${amount.toFixed(2)} ${currency}`;
  }
}

/** Format a plain number with thousands separators */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}

/** Format an ISO date string as a localized date */
export function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

/** Initials helper for avatars */
export function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}
