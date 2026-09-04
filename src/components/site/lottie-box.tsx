"use client";

/**
 * LottieBox — thin lazy wrapper around lottie-web (light build).
 *
 * - Loads the player only in the browser, only when a box is actually mounted.
 * - Plays the intro once, then loops from `idleFrom` (for the logo), or loops
 *   the whole animation (for backgrounds).
 * - `replayOnHover` restarts the intro when the pointer touches the box.
 * - Honors prefers-reduced-motion: "static" freezes the final frame,
 *   "hide" renders nothing at all.
 * - Pauses while scrolled off screen or while the tab is hidden.
 */

import { useEffect, useRef, type CSSProperties } from "react";
import type { AnimationItem } from "lottie-web";
import { cn } from "@/lib/utils";

export type LottieBoxProps = {
  src: string;
  className?: string;
  style?: CSSProperties;
  /** Loop the whole animation (backgrounds). */
  loop?: boolean;
  /** Play 0 → end once, then keep looping from this frame (logos). */
  idleFrom?: number;
  /** Restart the intro on pointer hover. */
  replayOnHover?: boolean;
  /** Pause when scrolled out of view. Default true. */
  pauseOffscreen?: boolean;
  /** Behavior when the user prefers reduced motion. Default "static". */
  reduced?: "static" | "hide";
  /** How the animation fits the box: "meet" letterboxes, "slice" fills. Default "meet". */
  aspect?: "meet" | "slice";
  /** Accessible label; omit for decorative animations. */
  label?: string;
};

export function LottieBox({
  src,
  className,
  style,
  loop = false,
  idleFrom,
  replayOnHover = false,
  pauseOffscreen = true,
  reduced = "static",
  aspect = "meet",
  label,
}: LottieBoxProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let anim: AnimationItem | null = null;
    let destroyed = false;
    let inView = true;
    let io: IntersectionObserver | null = null;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced && reduced === "hide") return;

    const sync = () => {
      if (!anim || destroyed) return;
      if (inView && !anim.isPaused) return;
      if (!inView && !anim.isPaused) anim.pause();
      else if (inView && anim.isPaused) anim.play();
    };

    const onVisibility = () => {
      // a hidden tab pauses the timeline, a visible one resumes it
      if (document.visibilityState === "visible") {
        inView = true;
        sync();
      } else {
        anim?.pause();
      }
    };

    const onPointerEnter = () => anim?.goToAndPlay(0, true);

    (async () => {
      const lottie = (await import("lottie-web/build/player/lottie_light")).default;
      if (destroyed || !host) return;

      anim = lottie.loadAnimation({
        container: host,
        renderer: "svg",
        loop,
        autoplay: !prefersReduced,
        path: src,
        rendererSettings: {
          preserveAspectRatio: aspect === "slice" ? "xMidYMid slice" : "xMidYMid meet",
          progressiveLoad: false,
        },
      });

      if (prefersReduced) {
        // freeze on the settled, final frame
        anim.goToAndStop(anim.totalFrames - 1, true);
        return;
      }

      if (idleFrom != null) {
        // intro plays once, then the idle part loops forever
        anim.addEventListener("complete", () => {
          anim?.goToAndPlay(idleFrom, true);
        });
      }

      if (replayOnHover) host.addEventListener("pointerenter", onPointerEnter);

      if (pauseOffscreen) {
        io = new IntersectionObserver(
          (entries) => {
            inView = entries[entries.length - 1]?.isIntersecting ?? true;
            if (!inView) anim?.pause();
            else sync();
          },
          { rootMargin: "80px" }
        );
        io.observe(host);
      }

      document.addEventListener("visibilitychange", onVisibility);
    })();

    return () => {
      destroyed = true;
      io?.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      host.removeEventListener("pointerenter", onPointerEnter);
      anim?.destroy();
      anim = null;
    };
  }, [src, loop, idleFrom, replayOnHover, pauseOffscreen, reduced, aspect]);

  return (
    <div
      ref={hostRef}
      className={cn(replayOnHover ? "" : "pointer-events-none", className)}
      style={style}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    />
  );
}
