"use client";

/**
 * Animated 3D trade globe — pure canvas, no map library.
 * Fibonacci-dotted sphere + real port hubs + animated trade arcs.
 * Palette follows the light/dark theme (MutationObserver on <html>).
 */

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Hub {
  name: string;
  lat: number;
  lon: number;
}

const HUBS: Hub[] = [
  { name: "Rotterdam", lat: 51.95, lon: 4.14 },
  { name: "Hamburg", lat: 53.55, lon: 9.99 },
  { name: "Beograd", lat: 44.68, lon: 20.44 },
  { name: "Novorossiysk", lat: 44.72, lon: 37.77 },
  { name: "Istanbul", lat: 41.01, lon: 28.98 },
  { name: "Piraeus", lat: 37.94, lon: 23.63 },
  { name: "Alexandria", lat: 31.2, lon: 29.9 },
  { name: "Jeddah", lat: 21.5, lon: 39.2 },
  { name: "Mumbai", lat: 19.0, lon: 72.8 },
  { name: "Singapore", lat: 1.29, lon: 103.85 },
  { name: "Shanghai", lat: 31.23, lon: 121.47 },
  { name: "Santos", lat: -23.96, lon: -46.33 },
  { name: "Houston", lat: 29.7, lon: -95.0 },
  { name: "Lagos", lat: 6.45, lon: 3.4 },
  { name: "Durban", lat: -29.87, lon: 31.02 },
];

const ROUTES: [string, string][] = [
  ["Rotterdam", "Istanbul"],
  ["Istanbul", "Novorossiysk"],
  ["Rotterdam", "Santos"],
  ["Houston", "Rotterdam"],
  ["Santos", "Lagos"],
  ["Singapore", "Shanghai"],
  ["Mumbai", "Singapore"],
  ["Alexandria", "Istanbul"],
  ["Singapore", "Rotterdam"],
  ["Durban", "Alexandria"],
  ["Beograd", "Istanbul"],
  ["Hamburg", "Houston"],
];

function latLonToVec(lat: number, lon: number, r = 1): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return [
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta),
  ];
}

function rotateY([x, y, z]: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [x * c + z * s, y, -x * s + z * c];
}

function rotateX([x, y, z]: [number, number, number], a: number): [number, number, number] {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return [x, y * c - z * s, y * s + z * c];
}

interface Palette {
  dot: string;
  dotBack: string;
  hub: string;
  hubGlow: string;
  arc: string;
  pulse: string;
  rim: string;
}

const DARK: Palette = {
  dot: "rgba(255,236,200,0.55)",
  dotBack: "rgba(255,236,200,0.10)",
  hub: "#FBBF24",
  hubGlow: "rgba(245,158,11,0.5)",
  arc: "rgba(245,158,11,0.7)",
  pulse: "#FDE68A",
  rim: "rgba(245,158,11,0.45)",
};

const LIGHT: Palette = {
  dot: "rgba(146,64,14,0.5)",
  dotBack: "rgba(146,64,14,0.14)",
  hub: "#B45309",
  hubGlow: "rgba(180,83,9,0.45)",
  arc: "rgba(180,83,9,0.65)",
  pulse: "#D97706",
  rim: "rgba(180,83,9,0.4)",
};

export function GlobeCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let palette: Palette =
      document.documentElement.classList.contains("dark") ? DARK : LIGHT;

    // Follow theme changes (next-themes toggles the .dark class on <html>).
    const themeObserver = new MutationObserver(() => {
      palette = document.documentElement.classList.contains("dark") ? DARK : LIGHT;
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Sphere dot cloud (Fibonacci distribution).
    const DOTS = 620;
    const dots: [number, number, number][] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < DOTS; i++) {
      const y = 1 - (i / (DOTS - 1)) * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      dots.push([Math.cos(theta) * rad, y, Math.sin(theta) * rad]);
    }

    // Precompute hub vectors.
    const hubVecs = HUBS.map((h) => ({
      name: h.name,
      v: latLonToVec(h.lat, h.lon, 1.0),
    }));
    const hubByName = new Map(hubVecs.map((h) => [h.name, h]));
    const routes = ROUTES.map(([a, b]) => ({
      a: hubByName.get(a)!,
      b: hubByName.get(b)!,
      offset: Math.random(),
    })).filter((r) => r.a && r.b);

    let raf = 0;
    let last = performance.now();
    let angle = 0.6;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.round(rect.width * dpr));
      canvas.height = Math.max(1, Math.round(rect.height * dpr));
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const draw = (now: number) => {
      const dt = Math.min(50, now - last);
      last = now;
      if (!reduce) angle += dt * 0.000075;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.42;

      const tilt = -0.32;
      const project = (v: [number, number, number]): [number, number, number] => {
        let p = rotateY(v, angle);
        p = rotateX(p, tilt);
        return [cx + p[0] * R, cy - p[1] * R, p[2]];
      };

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // Sphere rim.
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = palette.rim;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Dots (back first, then front).
      for (const d of dots) {
        const p = project(d);
        const front = p[2] > 0;
        ctx.beginPath();
        ctx.arc(p[0], p[1], front ? 2.1 : 1.6, 0, Math.PI * 2);
        ctx.fillStyle = front ? palette.dot : palette.dotBack;
        ctx.fill();
      }

      // Trade arcs.
      const t = now * 0.00012;
      for (const r of routes) {
        const pa = project(r.a.v);
        const pb = project(r.b.v);
        // Skip fully hidden arcs (both endpoints on the back).
        if (pa[2] < -0.25 && pb[2] < -0.25) continue;

        // Control point: midpoint pushed outward from the sphere center.
        const mx = (pa[0] + pb[0]) / 2;
        const my = (pa[1] + pb[1]) / 2;
        const dx = mx - cx;
        const dy = my - cy;
        const dLen = Math.hypot(dx, dy) || 1;
        const lift = 0.32;
        const qx = mx + (dx / dLen) * R * lift;
        const qy = my + (dy / dLen) * R * lift;

        const depthAlpha = Math.max(0.25, Math.min(1, (pa[2] + pb[2] + 1.2) / 1.8));
        const grad = ctx.createLinearGradient(pa[0], pa[1], pb[0], pb[1]);
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.25, palette.arc);
        grad.addColorStop(0.75, palette.arc);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.globalAlpha = depthAlpha;
        ctx.beginPath();
        ctx.moveTo(pa[0], pa[1]);
        ctx.quadraticCurveTo(qx, qy, pb[0], pb[1]);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Traveling shipment pulse.
        const tp = reduce ? 0.5 : (t + r.offset) % 1;
        const u = 1 - tp;
        const px = u * u * pa[0] + 2 * u * tp * qx + tp * tp * pb[0];
        const py = u * u * pa[1] + 2 * u * tp * qy + tp * tp * pb[1];
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = palette.pulse;
        ctx.shadowColor = palette.pulse;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      }

      // Hubs on top with glow.
      const hubPulse = reduce ? 0 : Math.sin(now * 0.002) * 0.5 + 0.5;
      for (const hub of hubVecs) {
        const p = project(hub.v);
        if (p[2] < -0.15) continue;
        const glowR = 5.5 + hubPulse * 3;
        ctx.beginPath();
        ctx.arc(p[0], p[1], glowR, 0, Math.PI * 2);
        ctx.fillStyle = palette.hubGlow;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p[0], p[1], 2.8, 0, Math.PI * 2);
        ctx.fillStyle = palette.hub;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("h-full w-full", className)}
    />
  );
}
