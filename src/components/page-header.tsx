"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useT } from "@/components/i18n-provider";

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  const t = useT();
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <nav className="mb-1 flex items-center gap-1 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/demo" className="hover:text-foreground">{t("nav.dashboard")}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="truncate text-foreground">{title}</span>
        </nav>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
