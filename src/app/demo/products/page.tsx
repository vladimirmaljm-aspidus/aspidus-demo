"use client";

import { useMemo, useState } from "react";
import { Search, Plus, Package } from "lucide-react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useT } from "@/components/i18n-provider";
import { products, type ProductCategory } from "@/lib/mock-data";
import { formatCurrency, formatNumber } from "@/lib/utils";

const CATEGORIES: ("All" | ProductCategory)[] = [
  "All",
  "Fertilizers",
  "Metals",
  "Grains",
  "Coffee",
  "Spices",
  "Chemicals",
];

const CATEGORY_COLORS: Record<ProductCategory, string> = {
  Fertilizers: "info",
  Metals: "secondary",
  Grains: "warning",
  Coffee: "destructive",
  Spices: "success",
  Chemicals: "muted",
};

export default function ProductsPage() {
  const t = useT();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q)
      );
    });
  }, [query, cat]);

  return (
    <div className="space-y-5" data-tour="products">
      <PageHeader
        title={t("products.title")}
        subtitle={t("products.subtitle")}
        action={
          <Button>
            <Plus className="h-4 w-4" />
            {t("offers.new")}
          </Button>
        }
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-sm flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t("products.search")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {CATEGORIES.map((c) => (
            <Button
              key={c}
              variant={cat === c ? "default" : "outline"}
              size="sm"
              onClick={() => setCat(c)}
            >
              {c}
            </Button>
          ))}
        </div>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: Math.min(i * 0.03, 0.3) }}
          >
            <Card className="h-full transition-shadow hover:shadow-md">
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                      <Package className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold leading-tight">{p.name}</div>
                      <div className="mt-0.5 font-mono text-xs text-muted-foreground">{p.sku}</div>
                    </div>
                  </div>
                  <Badge variant={(CATEGORY_COLORS[p.category] as "info" | "secondary" | "warning" | "destructive" | "success" | "muted") ?? "secondary"}>
                    {p.category}
                  </Badge>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t("products.col.price")}
                    </div>
                    <div className="font-semibold">
                      {formatCurrency(p.price, p.currency)}
                      <span className="ml-1 text-xs font-normal text-muted-foreground">/ {p.unit}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t("products.col.stock")}
                    </div>
                    <div className="font-semibold">
                      {p.stock > 0 ? (
                        <>
                          {formatNumber(p.stock)} <span className="text-xs font-normal text-muted-foreground">{p.unit}</span>
                        </>
                      ) : (
                        <span className="text-red-600">Out of stock</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t pt-3 text-xs text-muted-foreground">
                  <span>Origin: <span className="font-medium text-foreground">{p.origin}</span></span>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {filtered.length === 0 && (
        <Card>
          <CardContent className="p-10 text-center text-muted-foreground">
            No products match “{query}”.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
