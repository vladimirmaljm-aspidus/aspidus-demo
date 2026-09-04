# VELOS — Marketing Site

Single-page marketing site for the **VELOS Trade Platform** (multi-tenant trade CRM/ERP for international commodity trading).

Live at: **https://aspidus-demo.vercel.app** · Platform app: **https://velos-platform.vercel.app**

## What's on the site

- **Hero** with animated 3D trade-globe canvas (ports, live trade routes)
- **Stats bar** — 216 REST endpoints, 60+ modules, 50+ currencies, 5 languages
- **Trade lifecycle** — inquiry → offer → deal → logistics → documents → payment
- **Modules bento** — every module of the platform, organized in 6 categories
- **Product tour** — 8 recreated app screens in browser frames (dashboard, offers, calculator, globe, documents & QR, marketplace, partner portal, security & audit)
- **Interactive trade calculator** — working landed-cost demo (goods, freight, insurance, duty, bank charges, margin)
- **Marketplace, Security, API** sections
- **Pricing** — Starter / Business / Enterprise / Custom + comparison table
- **FAQ** accordion, CTA and footer with privacy/terms dialogs
- **5 languages** (EN, SR, TR, DE, RU) with per-key English fallback, light/dark theme, fully responsive

## Stack

Next.js 16 (App Router) · TypeScript 5 · Tailwind CSS 4 · shadcn/ui · Framer Motion · next-themes · Lucide icons

## Develop

```bash
bun install
bun run dev   # http://localhost:3001
```

## Deploy

Push to `main` and deploy on Vercel (project: `aspidus-demo`), or:

```bash
vercel deploy --prod
```
