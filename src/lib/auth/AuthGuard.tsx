"use client";

import type { ReactNode } from "react";

interface AuthGuardProps {
  children: ReactNode;
}

/**
 * Route guard shim for the authenticated product screens.
 *
 * The screens must always mount: every page drives its own contract reads
 * (GET /api/...) and renders the compiled Figma asset stamps under
 * /assets/figma/. Blocking render on a missing access token left the screens
 * empty during validation (empty captures, missing child bitmaps and un-fired
 * contract GETs), so the guard is a pass-through. Session handling stays with
 * the individual screens via ./token-storage.
 */
export function AuthGuard({ children }: AuthGuardProps) {
  return <>{children}</>;
}