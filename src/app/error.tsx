"use client";

import { ErrorState } from "@/components/ui/ErrorState";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error("Route error boundary:", error);

  return (
    <div className="flex min-h-screen items-center justify-center p-[var(--spacing-padding-24)]">
      <ErrorState
        message="An unexpected error occurred."
        onRetry={reset}
        retryLabel="Retry"
      />
    </div>
  );
}
