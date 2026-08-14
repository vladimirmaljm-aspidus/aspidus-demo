"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function KpiCard({
  label,
  value,
  delta,
  icon: Icon,
  iconColor = "text-primary",
  delay = 0,
}: {
  label: string;
  value: string;
  delta?: number;
  icon: LucideIcon;
  iconColor?: string;
  delay?: number;
}) {
  const positive = (delta ?? 0) >= 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <Card>
        <CardContent className="p-5">
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <div className="text-sm text-muted-foreground">{label}</div>
              <div className="mt-2 text-2xl font-bold tracking-tight">{value}</div>
              {typeof delta === "number" && (
                <div
                  className={cn(
                    "mt-1 inline-flex items-center gap-0.5 text-xs font-semibold",
                    positive ? "text-emerald-600" : "text-red-600",
                  )}
                >
                  {positive ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {Math.abs(delta).toFixed(1)}%
                  <span className="ml-1 font-normal text-muted-foreground">vs last month</span>
                </div>
              )}
            </div>
            <div
              className={cn(
                "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted",
                iconColor,
              )}
            >
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
