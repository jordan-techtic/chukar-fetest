"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
  menuExpanded: boolean;
  menuControlsId: string;
}

export function Header({ onMenuClick, menuExpanded, menuControlsId }: HeaderProps) {
  return (
    <header className="flex flex-row items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--spacing-padding-24)] py-[var(--spacing-padding-16)] shadow-[var(--shadow-drop-shadow)]">
      <div className="flex min-w-0 items-center gap-[var(--spacing-gap-12)]">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={menuExpanded ? "Close navigation" : "Open navigation"}
          aria-expanded={menuExpanded}
          aria-controls={menuControlsId}
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" aria-hidden />
        </Button>
        <p className="font-[family-name:var(--font-onest)] text-body-sm-11 text-[var(--color-text-primary)]">
          Marketing Content Calendar
        </p>
      </div>
    </header>
  );
}
