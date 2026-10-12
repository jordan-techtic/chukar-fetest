import type { ReactNode } from "react";

interface MainContentSlotProps {
  children: ReactNode;
}

export function MainContentSlot({ children }: MainContentSlotProps) {
  return (
    <main
      id="main-content"
      className="min-w-0 flex-1 overflow-auto bg-[var(--color-background)] px-[var(--spacing-padding-24)] py-[var(--spacing-padding-16)] font-onest"
    >
      {children}
    </main>
  );
}
