"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick?: () => void;
  menuExpanded?: boolean;
  menuControlsId?: string;
}

export function Header({ onMenuClick, menuExpanded, menuControlsId }: HeaderProps) {
  return (
    <header className="flex flex-row items-center justify-between border-b border-border bg-card px-[var(--spacing-padding-16)] py-[var(--spacing-gap-12)]">
      <div className="flex items-center gap-[var(--spacing-gap-12)]">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation"
          title="Open navigation"
          aria-expanded={menuExpanded}
          aria-controls={menuControlsId}
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" aria-hidden />
        </Button>
        <span className="text-heading-md-21 text-foreground">
          Marketing Content Calendar
        </span>
      </div>
    </header>
  );
}
