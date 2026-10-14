import * as React from "react";

import { cn } from "@/lib/utils/cn";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-9 w-full min-w-0 rounded-[var(--radius-8)] border border-[var(--color-border)] bg-card px-[var(--spacing-padding-12)] py-[var(--spacing-padding-10)] text-body-sm-5 text-[var(--color-text-primary)] transition-colors placeholder:text-[var(--color-color-10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-1 disabled:cursor-not-allowed aria-invalid:border-[var(--color-error)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
