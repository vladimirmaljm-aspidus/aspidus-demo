"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DemoSidebar } from "@/components/demo-sidebar";
import { DemoTopbar } from "@/components/demo-topbar";
import { GuidedTour } from "@/components/guided-tour";

export function DemoShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Desktop sidebar */}
      <div className="hidden w-64 shrink-0 border-r md:block">
        <div className="sticky top-0 h-screen">
          <DemoSidebar />
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute left-0 top-0 h-full w-72 border-r bg-card shadow-xl">
            <button
              className="absolute right-2 top-2 z-10 rounded-md p-2 text-muted-foreground hover:bg-accent"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <DemoSidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <DemoTopbar onMenu={() => setMobileOpen(true)} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>

      <GuidedTour />
    </div>
  );
}
