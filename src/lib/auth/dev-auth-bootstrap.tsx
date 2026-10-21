"use client";

import { useLayoutEffect, useState, type ReactNode } from "react";

import { applyDevAuthTokensFromServer } from "@/lib/auth/dev-auth-tokens";

/**
 * Mount once in the root layout. Waits for dev JWTs before rendering children
 * so AuthGuard does not redirect to `/` before tokens land.
 *
 * Uses the same loading shell on server + first client paint to avoid hydration
 * mismatches, then swaps in the app after `/dev-auth/session` responds.
 */
export function DevAuthBootstrap({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(process.env.NODE_ENV === "production");

  useLayoutEffect(() => {
    if (process.env.NODE_ENV === "production") {
      setReady(true);
      return;
    }
    let cancelled = false;
    void (async () => {
      await applyDevAuthTokensFromServer({ force: true });
      if (!cancelled) {
        setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] text-sm text-[var(--color-text-primary)]">
        Loading session…
      </div>
    );
  }

  return children;
}
