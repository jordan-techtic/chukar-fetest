"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Calendar, Home } from "lucide-react";

import { cn } from "@/lib/utils/cn";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/calendar", label: "Calendar", icon: Calendar },
];

interface SidebarProps {
  open?: boolean;
  onNavigate?: () => void;
  className?: string;
}

export function Sidebar({ open = false, onNavigate, className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        aria-label="Close navigation overlay"
        className={cn(
          "fixed inset-0 z-20 bg-[var(--color-25)] md:hidden",
          open ? "block" : "hidden",
        )}
        onClick={onNavigate}
      />
      <nav
        aria-label="Main"
        className={cn(
          "fixed inset-y-0 left-0 z-30 flex w-60 flex-col border-r border-[var(--color-border)] bg-[var(--color-secondary)] p-[var(--padding-16)] transition-transform duration-200 md:static md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        <div className="type-body-sm-11 mb-[var(--gap-16)] text-[var(--color-15)]">
          MCC
        </div>
        <ul className="flex flex-col gap-[var(--gap-4)]">
          {navItems.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  className={cn(
                    "flex h-9 items-center gap-[var(--gap-8)] rounded-[var(--radius-100)] px-[var(--padding-12)] type-body-sm-11 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-38)]",
                    active
                      ? "bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:opacity-90"
                      : "text-[var(--color-text-secondary)] hover:bg-[var(--color-accent)]",
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
