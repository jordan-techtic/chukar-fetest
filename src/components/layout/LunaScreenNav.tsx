"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/cn";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/my-profile", label: "My Profile" },
  { href: "/annual-calendar-default", label: "Calendar" },
  { href: "/week-calendar-historical-view", label: "Historical" },
  { href: "/manage-activity", label: "Activities" },
  { href: "/create-activity-type", label: "Activity Types" },
  { href: "/manage-category", label: "Categories" },
  { href: "/manage-holiday", label: "Holidays" },
  { href: "/manage-users", label: "Users" },
];

export function LunaScreenNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Marketing screens"
      className="border-b border-[#e2d9d0] bg-[#fff9f3] px-[16px] py-[8px]"
    >
      <ul className="mx-auto flex max-w-[1440px] flex-wrap gap-[8px]">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "inline-flex rounded-[6px] px-[12px] py-[6px] font-onest text-[13px] font-[600] leading-[17px] text-[#231f20] hover:bg-[#f2f1dd] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f80ed]",
                  active && "bg-[#f2f1dd]",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
