"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome } from "react-icons/hi";

import { cn } from "@/lib/utils/cn";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/annual-calendar-default", label: "Calendar" },
  { href: "/my-profile", label: "My Profile" },
  { href: "/week-calendar-historical-view", label: "Historical" },
  { href: "/manage-activity", label: "Activities" },
  { href: "/create-activity-type", label: "Activity Types" },
  { href: "/manage-category", label: "Categories" },
  { href: "/manage-holiday", label: "Holidays" },
  { href: "/manage-users", label: "Users" },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onNavigate?: () => void;
}

export function Sidebar({ mobileOpen = false, onNavigate }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "w-60 shrink-0 border-r border-[#e5e7eb] bg-[#a21d35] font-['Onest',sans-serif] text-[#fff9f3] transition-transform md:translate-x-0",
        mobileOpen
          ? "fixed inset-y-0 left-0 z-40 translate-x-0 shadow-[var(--shadow-drop-shadow-6)]"
          : "fixed -translate-x-full md:static md:block",
      )}
      aria-label="Primary"
    >
      <nav className="flex flex-col gap-[4px] p-[16px]">
        <Link
          href="/annual-calendar-default"
          onClick={onNavigate}
          className={cn(
            "flex items-center gap-[8px] rounded-[10px] px-[12px] py-[10px] text-[14px] font-semibold leading-[17.850000381469727px] transition-colors hover:bg-[#a01028] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f80ed]",
            pathname === "/annual-calendar-default" && "bg-[#a01028]",
          )}
          style={{ fontFamily: "'Onest', sans-serif" }}
          aria-current={pathname === "/annual-calendar-default" ? "page" : undefined}
        >
          <HiOutlineHome className="h-4 w-4" aria-hidden />
          Home
        </Link>
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "rounded-[10px] px-[12px] py-[10px] text-[14px] font-semibold leading-[17.850000381469727px] transition-colors hover:bg-[#a01028] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f80ed]",
                active && "bg-[#a01028]",
              )}
              style={{ fontFamily: "'Onest', sans-serif" }}
              aria-current={active ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
