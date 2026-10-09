"use client";

import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex flex-row items-center justify-between border-b border-[#e5e7eb] bg-[#a21d35] px-[16px] py-[12px] text-[#fff9f3] font-['Onest',sans-serif]">
      <div className="flex items-center gap-[var(--spacing-gap-12)]">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-[var(--color-text-primary)] hover:bg-[var(--color-color-59)] hover:text-[var(--color-text-primary)] md:hidden"
          aria-label="Open navigation"
          onClick={onMenuClick}
        >
          <HiOutlineMenuAlt2 className="h-5 w-5" aria-hidden />
        </Button>
        <span
          className="text-[22px] font-bold leading-[28.049999237060547px]"
          style={{ fontFamily: "'Onest', sans-serif" }}
        >
          Marketing Content Calendar
        </span>
      </div>
    </header>
  );
}
