"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { AppShell } from "@/components/layout/app-shell";
import { Spinner } from "@/components/ui/spinner";
import { canAccessProtectedRoute, getLoginRedirectPath } from "@/lib/auth/auth-guard";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

type AuthCheckState = "pending" | "allowed" | "denied";

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [authState, setAuthState] = useState<AuthCheckState>("pending");

  useEffect(() => {
    let cancelled = false;

    queueMicrotask(() => {
      if (cancelled) return;

      const hasAccess = canAccessProtectedRoute();
      setAuthState(hasAccess ? "allowed" : "denied");

      if (!hasAccess) {
        router.replace(getLoginRedirectPath(pathname));
      }
    });

    return () => {
      cancelled = true;
    };
  }, [pathname, router]);

  if (authState === "pending" || authState === "denied") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Spinner label="Checking authentication" />
      </div>
    );
  }

  return <AppShell>{children}</AppShell>;
}
