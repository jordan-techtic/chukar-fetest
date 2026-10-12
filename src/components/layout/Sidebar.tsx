"use client";

import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";

import { cn } from "@/lib/utils/cn";

interface SidebarProps {
  mobileOpen?: boolean;
  onNavigate?: () => void;
}

export function Sidebar({ mobileOpen = false, onNavigate }: SidebarProps) {
  return (
    <aside
      className={cn(
        "w-60 shrink-0 border-[var(--color-border)] bg-[var(--color-surface)] font-onest text-[var(--color-text-primary)] transition-transform md:translate-x-0",
        mobileOpen
          ? "fixed inset-y-0 left-0 z-40 translate-x-0 shadow-[var(--shadow-drop-shadow-6)]"
          : "fixed -translate-x-full md:static md:block",
      )}
      aria-label="Primary"
    >
      <nav className="flex flex-col gap-[var(--spacing-gap-4)] p-[var(--spacing-padding-16)]">
        <NavLink
          to="/"
          end
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-[var(--spacing-gap-8)] rounded-[var(--radius-10)] px-[var(--spacing-padding-12)] py-[var(--spacing-padding-10)] text-body-sm-11 transition-colors hover:bg-[var(--color-color-59)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-color-38)]",
              isActive && "bg-[var(--color-color-59)]",
            )
          }
        >
          <HiOutlineHome className="h-4 w-4" aria-hidden />
          Home
        </NavLink>
      </nav>
    </aside>
  );
}
