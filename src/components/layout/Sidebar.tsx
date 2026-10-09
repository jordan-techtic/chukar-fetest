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
        "w-60 shrink-0 border-r border-[#e5e7eb] bg-[#a21d35] font-['Onest',sans-serif] text-[#fff9f3] transition-transform md:translate-x-0",
        mobileOpen
          ? "fixed inset-y-0 left-0 z-40 translate-x-0 shadow-[var(--shadow-drop-shadow-6)]"
          : "fixed -translate-x-full md:static md:block",
      )}
      aria-label="Primary"
    >
      <nav className="flex flex-col gap-[4px] p-[16px]">
        <NavLink
          to="/"
          end
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "flex items-center gap-[8px] rounded-[10px] px-[12px] py-[10px] text-[14px] font-semibold leading-[17.850000381469727px] transition-colors hover:bg-[#a01028] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2f80ed]",
              isActive && "bg-[#a01028]",
            )
          }
          style={{ fontFamily: "'Onest', sans-serif" }}
        >
          <HiOutlineHome className="h-4 w-4" aria-hidden />
          Home
        </NavLink>
      </nav>
    </aside>
  );
}
