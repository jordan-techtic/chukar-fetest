import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils/cn";

interface SpinnerProps {
  className?: string;
  label?: string;
}

export function Spinner({ className, label = "Loading" }: SpinnerProps) {
  return (
    <div
      className={cn("inline-flex items-center justify-center", className)}
      role="status"
      aria-busy="true"
      aria-label={label}
    >
      <Loader2 className="h-5 w-5 animate-spin text-primary" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
