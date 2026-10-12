"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  CalendarDays,
  CalendarRange,
  History,
  House,
  ScrollText,
  Tags,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils/cn";

interface SidebarProps {
  mobileOpen?: boolean;
  onNavigate?: () => void;
}

interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  /** Match "/" exactly; other routes match by prefix. */
  exact?: boolean;
}

/**
 * One entry per Luna-emitted screen route (src/app/**\/page.tsx). Labels and
 * icons follow the Figma design vocabulary (My Profile, Manage Activity,
 * Manage Holiday, Manage Category, Manage Users, Audit Logs, calendars).
 */
const NAV_ITEMS: readonly NavItem[] = [
  { href: "/", label: "Home", icon: House, exact: true },
  { href: "/my-profile", label: "My Profile", icon: User },
  { href: "/manage-activity", label: "Manage Activity", icon: Briefcase },
  { href: "/manage-holiday", label: "Manage Holiday", icon: CalendarDays },
  { href: "/manage-category", label: "Manage Category", icon: Tags },
  { href: "/manage-users", label: "Manage Users", icon: Users },
  { href: "/audit-logs", label: "Audit Logs", icon: ScrollText },
  { href: "/annual-calendar-default", label: "Annual Calendar", icon: CalendarRange },
  { href: "/week-calendar-historical-view", label: "Week Calendar (Historical)", icon: History },
  { href: "/monthly-calendar-historical-view", label: "Monthly Calendar (Historical)", icon: History },
];

export function Sidebar({ mobileOpen = false, onNavigate }: SidebarProps) {
  const pathname = usePathname();

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
        {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => {
          const isActive = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex items-center gap-[var(--spacing-gap-8)] rounded-[var(--radius-10)] px-[var(--spacing-padding-12)] py-[var(--spacing-padding-10)] text-body-sm-11 transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              <Icon className="h-4 w-4" aria-hidden />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}