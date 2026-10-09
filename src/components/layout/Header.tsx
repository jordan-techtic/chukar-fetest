"use client";

import { HiOutlineMenuAlt2 } from "react-icons/hi";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="flex flex-row items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--spacing-padding-16)] py-[var(--spacing-gap-12)] text-[var(--color-text-primary)]">
      <div className="flex items-center gap-[var(--spacing-gap-12)]">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-[var(--color-text-primary)] hover:bg-[var(--color-color-59)] hover:text-[var(--color-text-primary)] md:hidden"
          aria-label="Open navigation"
          title="Open navigation"
          onClick={onMenuClick}
        >
          <HiOutlineMenuAlt2 className="h-5 w-5" aria-hidden />
        </Button>
        <span className="text-heading-md-21">Marketing Content Calendar</span>
      </div>
    </header>
  );
}
