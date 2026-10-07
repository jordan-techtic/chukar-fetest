import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils/cn";

interface SpinnerProps {
  className?: string;
  label?: string;
}

export function Spinner({ className, label = "Loading" }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn("inline-flex items-center gap-2", className)}
    >
      <Loader2
        className="h-4 w-4 animate-spin text-primary motion-reduce:animate-none"
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}
