import * as React from "react";

import { cn } from "@/lib/utils/cn";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-[var(--radius-8)] border border-[var(--color-border)] bg-[var(--color-secondary)] px-[var(--padding-12)] py-[var(--padding-10)] type-body-sm-5 text-[var(--color-text-secondary)] ring-offset-[var(--color-background)] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-13)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-38)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
