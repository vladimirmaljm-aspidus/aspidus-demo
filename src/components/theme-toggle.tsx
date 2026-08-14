"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useT } from "@/components/i18n-provider";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useT();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t("theme.toggle")}
      title={t("theme.toggle")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (
        isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
      ) : (
        <div className="h-5 w-5" />
      )}
    </Button>
  );
}
