#!/usr/bin/env bun
/**
 * VELOS marketing site — custom Lottie animation generator.
 *
 * Hand-built Lottie JSON, matched to the brand (copper/amber palette,
 * ivory strokes), so the motion and colors stay exactly on-brand.
 *
 *   velos-mark.json     256x256   logo: tile pops in, the Veles mark draws
 *                                  itself, a sheen sweeps the tile (idle loop
 *                                  restarts at frame 60)
 *   ambient-drift.json  1440x900  fixed page background: warm specks slowly
 *                                  rising, seamless 10s loop
 *   cta-network.json    1200x540  CTA card background: trade lanes with
 *                                  traveling packet dashes, seamless 8s loop
 *
 * Deterministic: seeded RNG, same output on every run.
 * Run: bun scripts/make-lottie.ts
 */

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = join(import.meta.dir, "../public/lottie");
mkdirSync(OUT, { recursive: true });

/* ---------------------------------------------------------------- helpers */

type Val = number[];
/** Static or keyframed Lottie property. */
type Prop =
  | { a: 0; k: Val | Record<string, unknown> }
  | { a: 1; k: Record<string, unknown>[] };

const S = (k: Val | Record<string, unknown>): Prop => ({ a: 0, k });

const fill = (v: number, d: number) => Array.from({ length: d }, () => v);

/** Bezier easing presets applied per keyframe (both i and o live on the
 *  keyframe that starts the segment). "lin" omits easing entirely. */
type Ez = "out" | "in" | "io" | "lin";
const EZ: Record<Exclude<Ez, "lin">, (d: number) => { i: unknown; o: unknown }> = {
  out: (d) => ({ o: { x: fill(0, d), y: fill(0, d) }, i: { x: fill(0.58, d), y: fill(1, d) } }),
  in: (d) => ({ o: { x: fill(0.42, d), y: fill(0, d) }, i: { x: fill(1, d), y: fill(1, d) } }),
  io: (d) => ({ o: { x: fill(0.42, d), y: fill(0, d) }, i: { x: fill(0.58, d), y: fill(1, d) } }),
};

type KF = { t: number; s: Val; ez?: Ez; h?: boolean };

/** Keyframed property. `d` = value dimensions (for easing arrays). */
function A(keys: KF[], d?: number): Prop {
  const dims = d ?? keys[0].s.length;
  return {
    a: 1,
    k: keys.map((kf, idx) => {
      const out: Record<string, unknown> = { t: kf.t, s: kf.s };
      if (kf.h) {
        out.h = 1; // hold: value stays until the next keyframe
      } else if (idx < keys.length - 1 && (kf.ez ?? "io") !== "lin") {
        const e = EZ[(kf.ez ?? "io") as Exclude<Ez, "lin">](dims);
        out.i = e.i;
        out.o = e.o;
      }
      return out;
    }),
  };
}

/* ------------------------------------------------------------ shape items */

type PathData = { i: Val[]; o: Val[]; v: Val[]; c: boolean };

const sh = (d: PathData): Record<string, unknown> => ({ ty: "sh", ks: S(d as unknown as Val), nm: "Path" });
const el = (cx: number, cy: number, d: number): Record<string, unknown> => ({ ty: "el", p: S([cx, cy]), s: S([d, d]), nm: "Ellipse" });
const rc = (cx: number, cy: number, w: number, h: number, r: number): Record<string, unknown> => ({ ty: "rc", p: S([cx, cy]), s: S([w, h]), r: S([r]), nm: "Rect" });
const stroke = (c: Val, w: number, o = 100): Record<string, unknown> => ({ ty: "st", c: S(c), o: S([o]), w: S([w]), lc: 2, lj: 2, bm: 0, nm: "Stroke" });
const paint = (c: Val, o = 100): Record<string, unknown> => ({ ty: "fl", c: S(c), o: S([o]), bm: 0, nm: "Fill" });
const trim = (s: Prop, e: Prop, o: number | Prop): Record<string, unknown> => ({
  ty: "tm", s, e, o: typeof o === "number" ? S([o]) : o, m: 1, nm: "Trim",
});
const grad = (s: Val, e: Val, stops: [number, Val, number][], t = 1): Record<string, unknown> => ({
  ty: "gf", s: S(s), e: S(e), t,
  g: { p: stops.length, k: S(stops.flatMap(([p, c, a]) => [p, c[0], c[1], c[2], a])) },
  o: S([100]), nm: "Gradient",
});
const tr = (o: { p?: Prop | Val; a?: Val; s?: Prop | Val; r?: number | Prop; op?: number } = {}): Record<string, unknown> => ({
  ty: "tr",
  p: Array.isArray(o.p) ? S(o.p) : (o.p ?? S([0, 0])),
  a: S(o.a ?? [0, 0]),
  s: Array.isArray(o.s) ? S(o.s) : (o.s ?? S([100, 100])),
  r: typeof o.r === "number" ? S([o.r]) : (o.r ?? S([0])),
  o: S([o.op ?? 100]),
  sk: S([0]), sa: S([0]), nm: "Transform",
});
const grp = (items: unknown[]): Record<string, unknown> => ({ ty: "gr", it: items, np: items.length, cix: 2, bm: 0, ix: 1, nm: "Group" });

const line = (x1: number, y1: number, x2: number, y2: number): PathData => ({
  i: [[0, 0], [0, 0]], o: [[0, 0], [0, 0]], v: [[x1, y1], [x2, y2]], c: false,
});

/** Rounded-rect bezier path (for masks). */
function rrect(x: number, y: number, w: number, h: number, r: number): PathData {
  const k = 0.5523 * r;
  return {
    v: [[x + r, y], [x + w - r, y], [x + w, y + r], [x + w, y + h - r],
        [x + w - r, y + h], [x + r, y + h], [x, y + h - r], [x, y + r]],
    i: [[-k, 0], [0, 0], [0, -k], [0, 0], [k, 0], [0, 0], [0, k], [0, 0]],
    o: [[0, 0], [k, 0], [0, 0], [0, k], [0, 0], [-k, 0], [0, 0], [0, -k]],
    c: true,
  };
}

/** Route path from vertices [x, y, inX, inY, outX, outY]. */
type RtV = [number, number, number, number, number, number];
const routePath = (vs: RtV[]): PathData => ({
  v: vs.map((r) => [r[0], r[1]]),
  i: vs.map((r) => [r[2], r[3]]),
  o: vs.map((r) => [r[4], r[5]]),
  c: false,
});

/* ------------------------------------------------------------ layer / file */

let IND = 0;
function layer(o: {
  nm: string; shapes: unknown[];
  op?: Prop; r?: Prop; p?: Prop; s?: Prop; a?: Val;
  masks?: unknown[]; out?: number; ip?: number; total: number;
}): Record<string, unknown> {
  IND += 1;
  const L: Record<string, unknown> = {
    ddd: 0, ind: IND, ty: 4, nm: o.nm, sr: 1,
    ks: {
      o: o.op ?? S([100]),
      r: o.r ?? S([0]),
      p: o.p ?? S([0, 0, 0]),
      a: S(o.a ?? [0, 0, 0]),
      s: o.s ?? S([100, 100, 100]),
    },
    ao: 0,
    shapes: o.shapes,
    ip: o.ip ?? 0, op: o.out ?? o.total, st: 0, bm: 0,
  };
  if (o.masks) L.masksProperties = o.masks;
  return L;
}

function animFile(name: string, w: number, h: number, op: number, layers: unknown[]) {
  const json = { v: "5.7.4", fr: 30, ip: 0, op, w, h, nm: name, ddd: 0, assets: [], layers };
  const text = JSON.stringify(json);
  writeFileSync(join(OUT, `${name}.json`), text);
  console.log(`  ${name}.json  ${layers.length} layers  ${(text.length / 1024).toFixed(1)} KB  ${op}f @30fps`);
}

/** Deterministic RNG. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ------------------------------------------------------------------ colors */

const C = {
  tileTop: [0.851, 0.4667, 0.0235],  // #D97706
  copper: [0.7059, 0.3255, 0.0353],  // #B45309
  copperDark: [0.5725, 0.251, 0.0549], // #92400E
  border: [0.4706, 0.2078, 0.0588],  // #78350F
  ivory: [1, 0.9843, 0.9608],        // #FFFBF5
  amber: [0.9608, 0.6196, 0.0431],   // #F59E0B
};

/* ============================== 1. velos-mark ============================= */
/* 256x256, 240 frames. Intro 0-60 (tile pops in, the three strokes of the
 * Veles mark draw themselves), idle 60-240 (sheen sweeps the tile at ~f100).
 * The wrapper plays 0->240 once, then loops from frame 60.                   */

function velosMark() {
  IND = 0;
  const OP = 240;
  const tilePath = rrect(12, 12, 232, 232, 58);

  // --- sheen: soft light bar sweeping across the tile, masked to the tile ---
  const sheen = layer({
    nm: "Sheen", total: OP,
    op: S([30]),
    masks: [{
      inv: false, mode: "a",
      pt: S(tilePath as unknown as Val),
      o: S([100]), x: S([0]), nm: "Tile",
    }],
    shapes: [grp([
      rc(128, 128, 70, 420, 32),
      grad([93, 128], [163, 128], [
        [0, C.ivory, 0], [0.5, C.ivory, 0.85], [1, C.ivory, 0],
      ]),
      tr({
        p: A([{ t: 96, s: [-82, 128], ez: "io" }, { t: 150, s: [338, 128] }], 2),
        a: [128, 128], r: 18,
      }),
    ])],
  });

  // --- the Veles mark: three strokes, each drawing itself via trim ---
  const draw = (t0: number, t1: number, ez: Ez): Prop =>
    A([{ t: t0, s: [0], ez }, { t: t1, s: [100] }], 1);

  const mark = layer({
    nm: "Mark", total: OP,
    shapes: [
      grp([sh(line(60, 64, 128, 212)), trim(S([0]), draw(10, 34, "io"), 0), stroke(C.ivory, 19.2), tr()]),
      grp([sh(line(196, 64, 128, 212)), trim(S([0]), draw(18, 42, "io"), 0), stroke(C.ivory, 19.2), tr()]),
      grp([sh(line(82.4, 116, 173.6, 116)), trim(S([0]), draw(30, 48, "out"), 0), stroke(C.ivory, 19.2), tr()]),
    ],
  });

  // --- tile: copper gradient square that pops in ---
  const tile = layer({
    nm: "Tile", total: OP,
    op: A([{ t: 0, s: [0], ez: "out" }, { t: 10, s: [100] }], 1),
    s: A([{ t: 0, s: [88, 88, 100], ez: "out" }, { t: 14, s: [100, 100, 100] }], 3),
    shapes: [grp([
      rc(128, 128, 232, 232, 58),
      grad([12, 12], [244, 244], [
        [0, C.tileTop, 1], [0.55, C.copper, 1], [1, C.copperDark, 1],
      ]),
      stroke(C.border, 4),
      tr(),
    ])],
  });

  animFile("velos-mark", 256, 256, OP, [sheen, mark, tile]);
}

/* ============================= 2. ambient-drift =========================== */
/* 1440x900, 300 frames (10s seamless loop). Warm specks slowly rising with a
 * sideways sway, fading in and out so the loop point is invisible. Rendered
 * fixed behind the whole page at very low opacity.                            */

function ambientDrift() {
  IND = 0;
  const OP = 300;
  const W = 1440, H = 900;
  const rng = mulberry32(20250207);
  const layers: unknown[] = [];

  const pick = <T,>(items: [T, number][]): T => {
    const total = items.reduce((s, [, w]) => s + w, 0);
    let r = rng() * total;
    for (const [v, w] of items) { r -= w; if (r <= 0) return v; }
    return items[items.length - 1][0];
  };

  const speck = (opts: { d: number; peak: number; drift: number; bokeh?: boolean }) => {
    const x = 20 + rng() * (W - 40);
    const y = 70 + rng() * (H - 140);
    const sway = (rng() * 2 - 1) * (opts.bokeh ? 14 : 26);
    const p = Math.floor(rng() * 182); // rise phase; +118 keeps fade-out inside the loop
    const life = 118;
    const col = pick<Val>([
      [C.amber, 5], [C.ivory, 3], [C.copper, 2],
    ]);
    layers.push(layer({
      nm: `Speck ${layers.length + 1}`, total: OP,
      p: A([
        { t: 0, s: [x, y, 0], ez: "io" },
        { t: OP / 2, s: [x + sway, y - opts.drift / 2, 0], ez: "io" },
        { t: OP, s: [x, y - opts.drift, 0] },
      ], 3),
      op: A([
        { t: p, s: [0], ez: "out" },
        { t: p + 36, s: [opts.peak] },
        { t: p + 72, s: [opts.peak], ez: "in" },
        { t: p + life, s: [0] },
      ], 1),
      s: A([
        { t: p, s: [55, 55, 100], ez: "out" },
        { t: p + 60, s: [100, 100, 100], ez: "in" },
        { t: p + life, s: [60, 60, 100] },
      ], 3),
      shapes: [grp([el(0, 0, opts.d), paint(col), tr()])],
    }));
  };

  for (let i = 0; i < 30; i++) {
    speck({ d: 2 + rng() * 2.6, peak: 22 + rng() * 22, drift: 160 });
  }
  for (let i = 0; i < 6; i++) {
    speck({ d: 9 + rng() * 4, peak: 8 + rng() * 5, drift: 90, bokeh: true });
  }

  animFile("ambient-drift", W, H, OP, layers);
}

/* ============================== 3. cta-network ============================= */
/* 1200x540, 240 frames (8s seamless loop). Trade lanes (faint copper curves)
 * with amber packets traveling along them, nodes breathing gently. Sits
 * inside the CTA card at low opacity.
 *
 * Packets are drawn as small dots whose position keyframes follow an
 * arc-length resampling of each lane's bezier chain. There are no trim-path
 * offsets here: lottie-web deadlocks on nonzero trim offsets, so traveling
 * dashes had to become traveling dots.                                          */

/** Cubic point. */
function bez(p0: Val, c1: Val, c2: Val, p3: Val, t: number): [number, number] {
  const mt = 1 - t;
  const x = mt * mt * mt * p0[0] + 3 * mt * mt * t * c1[0] + 3 * mt * t * t * c2[0] + t * t * t * p3[0];
  const y = mt * mt * mt * p0[1] + 3 * mt * mt * t * c1[1] + 3 * mt * t * t * c2[1] + t * t * t * p3[1];
  return [x, y];
}

/** Sample a bezier chain uniformly by arc length. */
function sampleRoute(path: PathData, n: number): [number, number][] {
  const dense: [number, number][] = [];
  const segs = path.v.length - 1;
  const PER = 16;
  for (let s = 0; s < segs; s++) {
    const p0 = path.v[s] as [number, number];
    const p3 = path.v[s + 1] as [number, number];
    const c1: [number, number] = [p0[0] + path.o[s][0], p0[1] + path.o[s][1]];
    const c2: [number, number] = [p3[0] + path.i[s + 1][0], p3[1] + path.i[s + 1][1]];
    for (let k = s === 0 ? 0 : 1; k <= PER; k++) {
      dense.push(bez(p0, c1, c2, p3, k / PER));
    }
  }
  // cumulative arc length
  const d: number[] = [0];
  for (let i = 1; i < dense.length; i++) {
    d.push(d[i - 1] + Math.hypot(dense[i][0] - dense[i - 1][0], dense[i][1] - dense[i - 1][1]));
  }
  const total = d[d.length - 1] || 1;
  const out: [number, number][] = [];
  let j = 0;
  for (let m = 0; m < n; m++) {
    const target = (m / (n - 1)) * total;
    while (j < d.length - 2 && d[j + 1] < target) j++;
    const seg = d[j + 1] - d[j] || 1;
    const f = (target - d[j]) / seg;
    out.push([
      dense[j][0] + (dense[j + 1][0] - dense[j][0]) * f,
      dense[j][1] + (dense[j + 1][1] - dense[j][1]) * f,
    ]);
  }
  return out;
}

function ctaNetwork() {
  IND = 0;
  const OP = 240;

  // routes: [x, y, inX, inY, outX, outY] per vertex
  const routes: { path: PathData; dots: [number, number][] }[] = [
    {
      path: routePath([
        [-40, 110, 0, 0, 90, -30],
        [350, 85, -70, -20, 85, 25],
        [740, 185, -75, 30, 60, -35],
        [1240, 100, -95, -15, 0, 0],
      ]),
      dots: [[0, 240], [95, 240]],
    },
    {
      path: routePath([
        [-40, 250, 0, 0, 100, 35],
        [320, 310, -80, -10, 70, -45],
        [700, 205, -65, 35, 80, -30],
        [1240, 270, -90, 25, 0, 0],
      ]),
      dots: [[30, 240], [150, 240]],
    },
    {
      path: routePath([
        [-40, 345, 0, 0, 95, -30],
        [420, 285, -85, 20, 75, 30],
        [830, 395, -70, -25, 65, -20],
        [1240, 315, -95, -20, 0, 0],
      ]),
      dots: [[0, 240]],
    },
    {
      path: routePath([
        [-40, 455, 0, 0, 90, 25],
        [340, 505, -70, -15, 75, -40],
        [770, 420, -70, 30, 70, -25],
        [1240, 490, -90, 20, 0, 0],
      ]),
      dots: [[60, 240], [170, 240]],
    },
    {
      path: routePath([
        [150, -40, 0, 0, 40, 90],
        [330, 230, -45, -60, 45, 75],
        [620, 430, -50, -70, 55, 65],
        [1050, 580, -80, -60, 0, 0],
      ]),
      dots: [[20, 240], [130, 240]],
    },
  ];

  const layers: unknown[] = [];

  // nodes (top)
  const nodes: [number, number, number, boolean][] = [
    [350, 85, 5, false], [740, 185, 4.5, true], [320, 310, 5.5, false],
    [700, 205, 4, false], [420, 285, 6, true], [830, 395, 4.5, false],
    [340, 505, 5, false], [770, 420, 4, true], [330, 230, 4.5, false],
  ];
  const rng = mulberry32(71401);
  nodes.forEach(([x, y, r, amber], i) => {
    const base = amber ? 55 : 60;
    const amp = 12 + rng() * 6;
    const phase = (i / nodes.length) * 240;
    const kfs: KF[] = [];
    for (let t = 0; t <= OP; t += 40) {
      const v = base + amp * Math.sin((2 * Math.PI * (t + phase)) / OP);
      kfs.push({ t, s: [Math.round(v * 10) / 10], ez: "io" });
    }
    layers.push(layer({
      nm: `Node ${i + 1}`, total: OP,
      p: S([x, y, 0]),
      op: A(kfs, 1),
      shapes: [grp([el(0, 0, r * 2), paint(amber ? C.amber : C.copper), tr()])],
    }));
  });

  // traveling packets: dots riding the lanes, fading in at departure and out
  // at arrival so the loop seam never shows a jump
  routes.forEach((r, ri) => {
    const samples = sampleRoute(r.path, 14);
    r.dots.forEach(([t0, t1], di) => {
      const d = 5.4 + rng() * 1.4; // dot diameter
      const peak = 62 + rng() * 18;
      const posKfs: KF[] = samples.map((s, m) => ({
        t: t0 + ((t1 - t0) * m) / (samples.length - 1),
        s: [s[0], s[1], 0],
        ez: "lin" as Ez,
      }));
      const fade = Math.max(14, Math.round((t1 - t0) * 0.09));
      layers.push(layer({
        nm: `Packet ${ri + 1}.${di + 1}`, total: OP,
        p: A(posKfs, 3),
        op: A([
          { t: t0, s: [0], ez: "out" },
          { t: t0 + fade, s: [peak] },
          { t: t1 - fade, s: [peak], ez: "in" },
          { t: t1, s: [0] },
        ], 1),
        shapes: [grp([el(0, 0, d), paint(C.amber), tr()])],
      }));
    });
  });

  // faint lanes (bottom)
  routes.forEach((r, i) => {
    layers.push(layer({
      nm: `Lane ${i + 1}`, total: OP,
      shapes: [grp([sh(r.path), stroke(C.copper, 2, 16), tr()])],
    }));
  });

  animFile("cta-network", 1200, 540, OP, layers);
}

/* ------------------------------------------------------------------- run */

console.log("Building Lottie animations…");
velosMark();
ambientDrift();
ctaNetwork();

// structural sanity check: keyframe times strictly increasing per property
const check = (file: string) => {
  const data = JSON.parse(readFileSync(join(OUT, file), "utf8"));
  let issues = 0;
  for (const L of data.layers as Record<string, any>[]) {
    for (const key of ["o", "r", "p", "s"] as const) {
      const prop = L.ks?.[key];
      if (prop?.a === 1) {
        let prev = -1;
        for (const kf of prop.k) {
          if (kf.t <= prev) { console.error(`  ✗ ${file} ${L.nm}.${key}: keyframe time ${kf.t} not after ${prev}`); issues++; }
          prev = kf.t;
        }
      }
    }
    for (const shp of L.shapes as any[]) {
      const tm = shp.it?.find((x: any) => x.ty === "tm");
      for (const key of ["s", "e", "o"] as const) {
        const prop = tm?.[key];
        if (prop?.a === 1) {
          let prev = -1;
          for (const kf of prop.k) {
            if (kf.t <= prev) { console.error(`  ✗ ${file} ${L.nm} trim.${key}: keyframe time ${kf.t} not after ${prev}`); issues++; }
            prev = kf.t;
          }
        }
      }
      const gtr = shp.it?.find((x: any) => x.ty === "tr");
      for (const key of ["p", "r", "s", "o"] as const) {
        const prop = gtr?.[key];
        if (prop?.a === 1) {
          let prev = -1;
          for (const kf of prop.k) {
            if (kf.t <= prev) { console.error(`  ✗ ${file} ${L.nm} group-tr.${key}: keyframe time ${kf.t} not after ${prev}`); issues++; }
            prev = kf.t;
          }
        }
      }
    }
  }
  if (!issues) console.log(`  ✓ ${file}: keyframes valid`);
};

check("velos-mark.json");
check("ambient-drift.json");
check("cta-network.json");
console.log("Done.");
