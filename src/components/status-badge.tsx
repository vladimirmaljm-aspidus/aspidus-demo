"use client";

import { Badge } from "@/components/ui/badge";

type Common = "draft" | "sent" | "active" | "inactive";
type OfferStatus = Common | "accepted" | "rejected";
type InvoiceStatus = Common | "paid" | "overdue";
type Status = OfferStatus | InvoiceStatus;

const MAP: Record<Status, { variant: "default" | "secondary" | "success" | "warning" | "destructive" | "info" | "muted"; key: string }> = {
  draft: { variant: "muted", key: "common.status.draft" },
  sent: { variant: "info", key: "common.status.sent" },
  accepted: { variant: "success", key: "common.status.accepted" },
  rejected: { variant: "destructive", key: "common.status.rejected" },
  paid: { variant: "success", key: "common.status.paid" },
  overdue: { variant: "destructive", key: "common.status.overdue" },
  active: { variant: "success", key: "common.status.active" },
  inactive: { variant: "muted", key: "common.status.inactive" },
};

export function StatusBadge({ status, t }: { status: Status; t: (key: string) => string }) {
  const cfg = MAP[status];
  return (
    <Badge variant={cfg.variant} className="capitalize">
      {t(cfg.key)}
    </Badge>
  );
}
