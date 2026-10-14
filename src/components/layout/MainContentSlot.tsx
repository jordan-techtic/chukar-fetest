import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

interface MainContentSlotProps {
  children: ReactNode;
  className?: string;
}

export function MainContentSlot({ children, className }: MainContentSlotProps) {
  return (
    <main
      id="main-content"
      className={cn(
        "min-h-0 flex-1 overflow-y-auto px-[var(--spacing-padding-24)] py-[var(--spacing-padding-16)]",
        className,
      )}
    >
      {children}
    </main>
  );
}
