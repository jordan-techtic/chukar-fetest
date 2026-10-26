"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";

import { Spinner } from "@/components/ui/spinner";
import { isPublicPath, loginPathWithNext } from "@/lib/auth/public-paths";
import { hasRouteAccess, isSessionRejected } from "@/lib/auth/token-storage";

interface AuthGuardProps {
  children: ReactNode;
}

function isSignedIn(): boolean {
  return !isSessionRejected() && hasRouteAccess();
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const signedIn = isSignedIn();
    if (isPublicPath(pathname)) {
      if (signedIn) {
        setAllowed(false);
        setChecking(false);
        router.replace("/");
        return;
      }
      setAllowed(true);
      setChecking(false);
      return;
    }
    if (!signedIn) {
      setAllowed(false);
      setChecking(false);
      router.replace(loginPathWithNext(pathname));
      return;
    }
    setAllowed(true);
    setChecking(false);
  }, [pathname, router]);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner label="Checking access" />
      </div>
    );
  }

  if (!allowed) {
    return null;
  }

  return children;
}
