import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal `Slot` implementation (subset of @radix-ui/react-slot) so we can use
 * `asChild` on Button without adding the dependency.
 *
 * Merges the props passed to this component onto its single child element.
 */
type SlotProps = React.HTMLAttributes<HTMLElement> & {
  children?: React.ReactNode;
};

function mergeProps(
  parentProps: Record<string, unknown>,
  childProps: Record<string, unknown>,
): Record<string, unknown> {
  const merged: Record<string, unknown> = { ...parentProps, ...childProps };

  if (parentProps.className || childProps.className) {
    merged.className = cn(
      parentProps.className as string | undefined,
      childProps.className as string | undefined,
    );
  }

  for (const key in childProps) {
    if (/^on[A-Z]/.test(key)) {
      const parent = parentProps[key] as ((...args: unknown[]) => void) | undefined;
      const child = childProps[key] as ((...args: unknown[]) => void) | undefined;
      if (parent && child) {
        merged[key] = (...args: unknown[]) => {
          child(...args);
          parent(...args);
        };
      }
    }
  }

  return merged;
}

export const Slot = React.forwardRef<HTMLElement, SlotProps>(
  ({ children, ...props }, ref) => {
    if (!React.isValidElement(children)) return null;
    // `ref` is a regular prop in React 19; we read it via cast to avoid TS limitations.
    const child = children as React.ReactElement<Record<string, unknown>> & {
      ref?: React.Ref<HTMLElement>;
    };
    const merged = mergeProps(props as Record<string, unknown>, child.props);
    // If the child has no explicit ref, forward ours so Button.asChild works.
    if (typeof child.ref === "undefined") {
      (merged as Record<string, unknown> & { ref?: React.Ref<HTMLElement> }).ref = ref;
    }
    return React.cloneElement(child, merged as Record<string, unknown>);
  },
);
Slot.displayName = "Slot";
