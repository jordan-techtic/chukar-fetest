"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HeaderProps {
  onMenuClick: () => void;
  menuExpanded: boolean;
  menuControlsId: string;
}

export function Header({ onMenuClick, menuExpanded, menuControlsId }: HeaderProps) {
  const menuLabel = menuExpanded ? "Close navigation" : "Open navigation";

  return (
    <header className="flex flex-row items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] px-[var(--spacing-padding-24)] py-[var(--spacing-padding-16)] shadow-[var(--shadow-drop-shadow)]">
      <div className="flex min-w-0 items-center gap-[var(--spacing-gap-12)]">
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label={menuLabel}
                aria-expanded={menuExpanded}
                aria-controls={menuControlsId}
                onClick={onMenuClick}
              >
                <Menu className="h-5 w-5" aria-hidden />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{menuLabel}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <p className="font-[family-name:var(--font-onest)] text-body-sm-11 text-[var(--color-text-primary)]">
          Marketing Content Calendar
        </p>
      </div>
    </header>
  );
}
