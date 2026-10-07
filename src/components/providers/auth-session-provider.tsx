"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { getLoginRedirectPath } from "@/lib/auth/auth-guard";
import { UNAUTHORIZED_EVENT } from "@/lib/auth/unauthorized";

export function AuthSessionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const handleUnauthorized = () => {
      router.replace(getLoginRedirectPath(window.location.pathname));
    };

    window.addEventListener(UNAUTHORIZED_EVENT, handleUnauthorized);
    return () => {
      window.removeEventListener(UNAUTHORIZED_EVENT, handleUnauthorized);
    };
  }, [router]);

  return <>{children}</>;
}
