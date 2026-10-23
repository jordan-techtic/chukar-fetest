"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Home, LayoutDashboard, Users } from "lucide-react";

import { mondayIsoWeekStart } from "@/lib/api/marketing-team-member/week-range";
import { cn } from "@/lib/utils/cn";

interface SidebarProps {
  mobileOpen: boolean;
  onNavigate: () => void;
}

const weekHistoricalHref = `/marketing-team-member/week-calendar-historical/${mondayIsoWeekStart()}`;

const NAV_ITEMS = [
  { href: "/", label: "Home", icon: Home },
  { href: "/workspace", label: "Workspace", icon: LayoutDashboard },
  { href: "/week-calendar-default", label: "Week calendar", icon: CalendarDays },
  { href: weekHistoricalHref, label: "Week historical", icon: CalendarDays },
  { href: "/marketing-calendar/annual", label: "Annual calendar", icon: CalendarDays },
  { href: "/manage-users", label: "Manage users", icon: Users },
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
          const isActive =
            href === "/"
              ? pathname === "/"
              : href.startsWith("/marketing-team-member/week-calendar-historical")
                ? pathname.startsWith("/marketing-team-member/week-calendar-historical")
                : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                onClick={onNavigate}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "flex items-center gap-[var(--spacing-gap-12)] rounded-[var(--radius-10)] px-[var(--spacing-padding-12)] py-[var(--spacing-padding-10)] text-body-sm-11 transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
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
