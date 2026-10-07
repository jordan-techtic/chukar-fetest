import { cn } from "@/lib/utils/cn";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export function Skeleton({ className, width, height, style, ...props }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "animate-pulse rounded-[var(--radius-8)] bg-[var(--color-accent)] motion-reduce:animate-none",
        className,
      )}
      style={{ width, height, ...style }}
      {...props}
    />
  );
}
