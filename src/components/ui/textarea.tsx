import * as React from "react";

import { cn } from "@/lib/utils/cn";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[60px] w-full min-w-0 rounded-[var(--radius-8)] border border-[var(--color-border)] bg-card px-[var(--spacing-padding-12)] py-[var(--spacing-padding-10)] text-body-sm-5 text-[var(--color-text-primary)] transition-colors placeholder:text-[var(--color-color-10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-1 disabled:cursor-not-allowed aria-invalid:border-[var(--color-error)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
