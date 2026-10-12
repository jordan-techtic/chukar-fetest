"use client";

import { House } from "lucide-react";
import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils/cn";

interface SidebarProps {
  mobileOpen?: boolean;
  onNavigate?: () => void;
}

const NAV_ITEMS = [{ to: "/", label: "Home", icon: House, end: true }] as const;

export function Sidebar({ mobileOpen = false, onNavigate }: SidebarProps) {
  return (
    <aside
      id="primary-navigation"
      className={cn(
        "w-60 shrink-0 border-r border-border bg-card font-onest text-foreground transition-transform md:translate-x-0",
        mobileOpen
          ? "fixed inset-y-0 left-0 z-40 translate-x-0 shadow-[var(--shadow-drop-shadow-6)]"
          : "fixed -translate-x-full md:static md:block",
      )}
      aria-label="Primary"
    >
      <nav className="flex flex-col gap-[var(--spacing-gap-4)] p-[var(--spacing-padding-16)]">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-[var(--spacing-gap-8)] rounded-[var(--radius-10)] px-[var(--spacing-padding-12)] py-[var(--spacing-padding-10)] text-body-sm-11 transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
              )
            }
          >
            <Icon className="h-4 w-4" aria-hidden />
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
