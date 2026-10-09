import type { ReactNode } from "react";

interface MainContentSlotProps {
  children: ReactNode;
}

export function MainContentSlot({ children }: MainContentSlotProps) {
  return (
    <main
      id="main-content"
      className="min-w-0 flex-1 overflow-auto bg-[#fde8ed] px-[24px] py-[16px] font-['Onest',sans-serif]"
    >
      {children}
    </main>
  );
}
