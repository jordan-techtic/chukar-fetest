"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Home, LayoutDashboard, Users, Palmtree } from "lucide-react";

import { cn } from "@/lib/utils/cn";

interface SidebarProps {
  mobileOpen: boolean;
  onNavigate: () => void;
}

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/workspace", label: "Workspace", icon: LayoutDashboard },
  { href: "/week-calendar-default", label: "Week Calendar", icon: CalendarDays },
  {
    href: "/marketing-team-member/week-calendar-historical/current",
    label: "Historical View",
    icon: CalendarDays,
  },
  { href: "/manage-holiday", label: "Manage Holiday", icon: Palmtree },
  { href: "/manage-users", label: "Manage Users", icon: Users },
] as const;

export function Sidebar({ mobileOpen, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <nav
      id="primary-navigation"
      aria-label="Primary"
      className={cn(
        "fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--spacing-padding-16)] py-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow-6)] transition-transform md:static md:translate-x-0",
        mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
      )}
    >
      <ul className="flex flex-col gap-[var(--spacing-gap-8)]">
        {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
          const active =
            pathname === href ||
            (href.includes("week-calendar-historical") &&
              pathname.startsWith("/marketing-team-member/week-calendar-historical"));
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onNavigate}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex items-center gap-[var(--spacing-gap-12)] rounded-[var(--radius-10)] px-[var(--spacing-padding-12)] py-[var(--spacing-padding-10)] text-body-sm-11 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  active && "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
