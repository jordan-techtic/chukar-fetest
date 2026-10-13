"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { getAccessToken } from "./token-storage";

interface AuthGuardProps {
  children: ReactNode;
}

/**
 * Route guard for the authenticated product screens: when no access token is
 * present the visitor is redirected to the landing route ("/"), which is what
 * the deleted root-router.tsx did via <ProtectedLayout>.
 */
export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const token = getAccessToken();

  useEffect(() => {
    if (!token) {
      router.replace("/");
    }
  }, [router, token]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
}