"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { Spinner } from "@/components/ui/spinner";
import { hasRouteAccess, isSessionRejected } from "@/lib/auth/token-storage";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (isSessionRejected() || !hasRouteAccess()) {
      setAllowed(false);
      setChecking(false);
      router.replace("/");
      return;
    }
    setAllowed(true);
    setChecking(false);
  }, [pathname, router]);

  if (checking) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Spinner label="Checking access" />
      </div>
    );
  }

  if (!allowed) {
    return null;
  }

  return children;
}
