"use client";

import { Bell, Menu, Search, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { LanguageSelector } from "@/components/language-selector";
import { ThemeToggle } from "@/components/theme-toggle";
import { useT } from "@/components/i18n-provider";

export function DemoTopbar({ onMenu }: { onMenu?: () => void }) {
  const t = useT();
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-2 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/70 sm:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        aria-label="Open menu"
        onClick={onMenu}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="relative flex max-w-md flex-1 items-center">
        <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder={t("demo.search")}
          className="h-9 pl-9"
          aria-label="Search"
        />
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <Badge variant="warning" className="hidden items-center gap-1 px-2.5 py-1 sm:inline-flex">
          <ShieldCheck className="h-3.5 w-3.5" />
          {t("demo.badge")}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="relative"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </Button>
        <LanguageSelector compact />
        <ThemeToggle />
        <div className="ml-1 hidden items-center gap-2 rounded-full border bg-card py-1 pl-1 pr-3 sm:flex">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
            DU
          </span>
          <div className="text-xs leading-tight">
            <div className="font-semibold">Demo User</div>
            <div className="text-muted-foreground">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
