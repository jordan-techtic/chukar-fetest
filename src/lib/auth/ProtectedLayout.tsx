"use client";

import type { ReactNode } from "react";

import { AuthGuard } from "./AuthGuard";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return <AuthGuard>{children}</AuthGuard>;
}
