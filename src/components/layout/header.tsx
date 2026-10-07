"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

interface HeaderProps {
  title?: string;
  onMenuClick?: () => void;
  sidebarOpen?: boolean;
  className?: string;
}

export function Header({
  title = "Marketing Content Calendar",
  onMenuClick,
  sidebarOpen = false,
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "flex h-16 shrink-0 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-secondary)] px-[var(--padding-16)] shadow-[var(--drop-shadow-2)]",
        className,
      )}
    >
      <div className="flex items-center gap-[var(--gap-8)]">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation"
          aria-expanded={sidebarOpen}
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
        <h1 className="type-body-26 text-[var(--color-15)]">
          {title}
        </h1>
      </div>
    </header>
  );
}
