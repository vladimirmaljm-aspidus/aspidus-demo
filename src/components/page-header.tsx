"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <nav className="mb-1 flex items-center gap-1 text-xs text-muted-foreground">
          <Link href="/demo" className="hover:text-foreground">Dashboard</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{title}</span>
        </nav>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
