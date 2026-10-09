"use client";

import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { getAccessToken } from "./token-storage";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const location = useLocation();
  const token = getAccessToken();

  if (!token) {
    return <Navigate to="/" replace state={{ from: location.pathname, authRequired: true }} />;
  }

  return <>{children}</>;
}
