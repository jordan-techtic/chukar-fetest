"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-[var(--gap-16)] bg-background px-[var(--padding-16)] text-center">
      <div
        role="alert"
        className="max-w-md space-y-[var(--gap-8)] rounded-[var(--radius-8)] border border-[var(--color-81)] bg-[var(--color-68)] p-[var(--padding-16)]"
      >
        <h1 className="text-lg font-bold">Something went wrong</h1>
        <p className="text-sm text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>
      </div>
      <Button type="button" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
