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
    <div className="flex min-h-screen flex-col bg-[#fde8ed] font-['Onest',sans-serif]">
      <Header onMenuClick={() => setMobileNavOpen((open) => !open)} />
      <div className="relative flex min-h-0 flex-1">
        {mobileNavOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-[var(--color-color-25)] md:hidden"
            aria-label="Close navigation overlay"
            onClick={() => setMobileNavOpen(false)}
          />
        ) : null}
        <Sidebar
          mobileOpen={mobileNavOpen}
          onNavigate={() => setMobileNavOpen(false)}
        />
        <MainContentSlot>{children}</MainContentSlot>
      </div>
    </div>
  );
}
