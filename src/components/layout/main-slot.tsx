import { cn } from "@/lib/utils/cn";

interface MainSlotProps {
  children: React.ReactNode;
  className?: string;
}

export function MainSlot({ children, className }: MainSlotProps) {
  return (
    <main
      className={cn(
        "app-scroll min-w-0 flex-1 overflow-auto p-[var(--padding-16)] md:p-[var(--padding-24)]",
        className,
      )}
    >
      {children}
    </main>
  );
}
