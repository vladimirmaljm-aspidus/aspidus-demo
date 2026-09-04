"use client";

import {
  BookOpenText,
  KeySquare,
  Webhook,
  Plug,
  Check,
} from "lucide-react";
import { useSiteT } from "@/components/site/i18n-provider";
import { Reveal, Section, SectionHeading } from "@/components/site/primitives";

export function ApiSection() {
  const { t } = useSiteT();

  const features = [
    { icon: BookOpenText, label: t("api.openapi") },
    { icon: KeySquare, label: t("api.keys") },
    { icon: Webhook, label: t("api.webhooks") },
    { icon: Plug, label: t("api.relay") },
  ];

  return (
    <Section id="api" ariaLabel={t("api.title")}>
      <SectionHeading
        kicker={t("api.kicker")}
        title={t("api.title")}
        subtitle={t("api.subtitle")}
      />

      <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
        {/* Feature list */}
        <div>
          <ul className="space-y-3">
            {features.map((f, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <li className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/12 text-primary">
                    <f.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-sm font-medium">{f.label}</span>
                  <Check className="ml-auto h-4.5 w-4.5 shrink-0 text-emerald-500" aria-hidden />
                </li>
              </Reveal>
            ))}
          </ul>

          {/* API surface stats */}
          <Reveal delay={0.3}>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                ["216", "REST endpoints"],
                ["20+", "Modules exposed"],
                ["100%", "Tenant-scoped"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-xl border border-border bg-secondary/40 px-3 py-4">
                  <div className="font-display text-2xl font-bold tabular-nums text-primary">{v}</div>
                  <div className="mt-1 text-[11px] font-medium text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Code sample */}
        <Reveal delay={0.12}>
          <div className="ring-brand overflow-hidden rounded-2xl border border-border bg-[oklch(0.17_0.012_55)] shadow-2xl">
            {/* Fake window bar */}
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" aria-hidden />
              <span className="h-3 w-3 rounded-full bg-emerald-400/70" aria-hidden />
              <span className="ml-2 text-[11px] font-medium text-white/60">{t("api.caption")}</span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-[12px] leading-relaxed text-[oklch(0.93_0.01_85)] sm:p-5 sm:text-[13px]">
              <code>
                <span className="text-amber-400">const</span> res = <span className="text-amber-400">await</span> <span className="text-emerald-400">fetch</span>(
                {"\n  "}<span className="text-emerald-300">&quot;https://velos-platform.vercel.app/api/offers?status=sent&quot;</span>,
                {"\n  {"}{"\n    "}headers: {"{"} <span className="text-sky-300">&quot;X-API-Key&quot;</span>: <span className="text-emerald-300">&quot;velos_live_••••&quot;</span> {"},"}
                {"\n  "}{"\n  "}{"}"}
                {"\n);"}
                {"\n\n"}<span className="text-amber-400">const</span> {"{"} data {"}"} = <span className="text-amber-400">await</span> res.<span className="text-emerald-400">json</span>();
                {"\n"}<span className="text-amber-400">console</span>.<span className="text-emerald-400">log</span>(data.offers.length); <span className="text-white/40">{"// 190"}</span>
              </code>
            </pre>
            <div className="border-t border-white/10 bg-white/5 px-4 py-3 text-[11px] text-white/50">
              <span className="mr-2 inline-block rounded bg-primary/25 px-1.5 py-0.5 font-semibold text-amber-300">GET</span>
              /api/offers · /api/deals · /api/invoices · /api/partners · /api/marketplace · …
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
