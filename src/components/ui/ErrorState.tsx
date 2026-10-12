"use client";

import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
}

/**
 * Shared error panel used by both the client render ErrorBoundary and the
 * App Router error.tsx boundary so the two boundaries look identical.
 */
export function ErrorState({
  message,
  onRetry,
  retryLabel = "Try Again",
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="mx-auto flex max-w-lg flex-col gap-4 rounded-[var(--radius-12)] border border-[var(--color-error)] bg-card p-6 shadow-[var(--shadow-drop-shadow)]"
    >
      <h1 className="text-heading-md-21">Something went wrong</h1>
      <p className="text-body-sm-5 text-muted-foreground">{message}</p>
      {onRetry ? (
        <Button type="button" variant="outline" onClick={onRetry}>
          {retryLabel}
        </Button>
      ) : null}
    </div>
  );
}
