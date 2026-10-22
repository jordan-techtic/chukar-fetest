"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils/cn";

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-[16px] w-[28px] shrink-0 cursor-pointer items-center rounded-[var(--radius-20)] border border-transparent bg-[color-mix(in_srgb,var(--color-color-13)_25%,transparent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block h-[12px] w-[12px] rounded-[var(--radius-16)] bg-[var(--color-surface)] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] transition-transform data-[state=checked]:translate-x-[14px] data-[state=unchecked]:translate-x-[2px]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
