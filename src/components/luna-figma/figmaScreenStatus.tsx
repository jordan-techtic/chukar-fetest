"use client";

/**
 * Off-canvas status region for Luna screens (loading/error/empty states).
 * Rendered inside FigmaScreenDataProvider as screen-reader-only text so the
 * Figma page flow is never altered. Kept in its own .tsx module because
 * useFigmaScreenData.ts must stay a plain .ts file.
 */
import { useSyncExternalStore } from "react";

import { getFieldError, getFieldErrorSnapshot, subscribeFieldErrors } from "./figmaFieldStore";
import { getScreenStatusSnapshot, subscribeScreenStatus } from "./figmaStatusStore";

export function FigmaScreenStatusRegion() {
  const status = useSyncExternalStore(
    subscribeScreenStatus,
    getScreenStatusSnapshot,
    getScreenStatusSnapshot,
  );
  return (
    <p aria-live="polite" role="status" className="sr-only">
      {status.message}
    </p>
  );
}

/** Server validation message for one data-figma-field control, rendered beside it. */
export function FigmaFieldError({ field }: { field: string }) {
  useSyncExternalStore(subscribeFieldErrors, getFieldErrorSnapshot, getFieldErrorSnapshot);
  const error = getFieldError(field);
  if (!error) {
    return null;
  }
  return (
    <p role="alert" className="w-full min-w-0 font-onest text-[12px] font-[400] leading-[15px] text-left text-brand-primary-a21d35">
      {error}
    </p>
  );
}