"use client";

import { useEffect, useState, type ReactNode } from "react";

import { Header } from "./Header";
import { MainContentSlot } from "./MainContentSlot";
import { Sidebar } from "./Sidebar";

interface AppShellProps {
  children: ReactNode;
}

const NAV_ID = "primary-navigation";

function getNavFocusables(): HTMLElement[] {
  const nav = document.getElementById(NAV_ID);
  if (!nav) {
    return [];
  }
  return Array.from(
    nav.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  );
}

export function AppShell({ children }: AppShellProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (!mobileNavOpen) {
      return;
    }

    const focusables = getNavFocusables();
    focusables[0]?.focus();

    const handleNavKeyDown = (event: KeyboardEvent): void => {
      if (event.key !== "Tab" || focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setMobileNavOpen(false);
      }
    };

    const nav = document.getElementById(NAV_ID);
    nav?.addEventListener("keydown", handleNavKeyDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      nav?.removeEventListener("keydown", handleNavKeyDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileNavOpen]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-background)] font-[family-name:var(--font-onest)]">
      <Header
        onMenuClick={() => setMobileNavOpen((open) => !open)}
        menuExpanded={mobileNavOpen}
        menuControlsId={NAV_ID}
      />
      <div className="relative flex min-h-0 flex-1">
        {mobileNavOpen ? (
          <button
            type="button"
            className="fixed inset-0 z-30 bg-[color-mix(in_srgb,var(--color-color-25)_40%,transparent)] md:hidden"
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
