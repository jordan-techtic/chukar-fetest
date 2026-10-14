"use client";

import { useState, type ReactNode } from "react";

import { Header } from "./Header";
import { MainContentSlot } from "./MainContentSlot";
import { Sidebar } from "./Sidebar";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)] font-[family-name:var(--font-onest)]">
      <Header
        onMenuClick={() => setMobileNavOpen((open) => !open)}
        menuExpanded={mobileNavOpen}
        menuControlsId="primary-navigation"
      />
      <div className="relative flex min-h-0 flex-1">
        {mobileNavOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-[#72516a]/40 md:hidden"
            aria-label="Close navigation overlay"
            onClick={() => setMobileNavOpen(false)}
          />
        ) : null}
        <Sidebar mobileOpen={mobileNavOpen} onNavigate={() => setMobileNavOpen(false)} />
        <MainContentSlot>{children}</MainContentSlot>
      </div>
    </div>
  );
}
