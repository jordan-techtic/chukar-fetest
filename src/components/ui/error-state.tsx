"use client";

import { Button } from "@/components/ui/button";

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
}

export function ErrorState({
  message,
  onRetry,
  retryLabel = "Try again",
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="mx-auto flex max-w-lg flex-col gap-4 rounded-[var(--radius-12)] border border-destructive/30 bg-card p-6 shadow-[var(--shadow-drop-shadow)]"
    >
      <h2 className="text-heading-md-19">Something went wrong</h2>
      <p className="text-body-sm-5 text-muted-foreground">{message}</p>
      {onRetry ? (
        <Button type="button" variant="outline" onClick={onRetry}>
          {retryLabel}
        </Button>
      ) : null}
    </div>
  );
}
