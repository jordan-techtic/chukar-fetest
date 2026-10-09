"use client";

import { useCallback, useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils/cn";

type ToastKind = "success" | "error";

interface ToastRecord {
  id: string;
  kind: ToastKind;
  message: string;
}

const TOAST_EVENT = "app-toast";

let nextToastId = 0;

function publishToast(kind: ToastKind, message: string): void {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(
    new CustomEvent<ToastRecord>(TOAST_EVENT, {
      detail: { id: String(++nextToastId), kind, message },
    }),
  );
}

export const toast = {
  success(message: string): void {
    publishToast("success", message);
  },
  error(message: string): void {
    publishToast("error", message);
  },
};

interface ToasterProps {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

const positionClasses: Record<NonNullable<ToasterProps["position"]>, string> = {
  "top-right":
    "top-[var(--spacing-padding-16)] right-[var(--spacing-padding-16)]",
  "top-left": "top-[var(--spacing-padding-16)] left-[var(--spacing-padding-16)]",
  "bottom-right":
    "bottom-[var(--spacing-padding-16)] right-[var(--spacing-padding-16)]",
  "bottom-left":
    "bottom-[var(--spacing-padding-16)] left-[var(--spacing-padding-16)]",
};

export function Toaster({ position = "top-right" }: ToasterProps) {
  const regionId = useId();
  const [toasts, setToasts] = useState<ToastRecord[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((item) => item.id !== id));
  }, []);

  useEffect(() => {
    const handleToast = (event: Event) => {
      const custom = event as CustomEvent<ToastRecord>;
      const record = custom.detail;
      setToasts((current) => [...current, record]);
      window.setTimeout(() => dismiss(record.id), 5000);
    };

    window.addEventListener(TOAST_EVENT, handleToast);
    return () => window.removeEventListener(TOAST_EVENT, handleToast);
  }, [dismiss]);

  return (
    <div
      id={regionId}
      aria-relevant="additions"
      className={cn(
        "pointer-events-none fixed z-50 flex max-w-sm flex-col gap-[var(--spacing-gap-8)]",
        positionClasses[position],
      )}
    >
      {toasts.map((item) => {
        const isError = item.kind === "error";
        return (
          <div
            key={item.id}
            role={isError ? "alert" : "status"}
            aria-live={isError ? "assertive" : "polite"}
            className={cn(
              "pointer-events-auto flex items-start gap-[var(--spacing-gap-8)] rounded-[var(--radius-8)] border border-border bg-card px-[var(--spacing-padding-16)] py-[var(--spacing-gap-12)] text-body-sm-5 shadow-[var(--shadow-drop-shadow-2)]",
              isError
                ? "text-[var(--color-color-28)]"
                : "text-[var(--color-text-secondary)]",
            )}
          >
            <span className="min-w-0 flex-1">{item.message}</span>
            <button
              type="button"
              className="shrink-0 rounded-[var(--radius-6)] px-[var(--spacing-gap-4)] text-[var(--color-text-secondary)] hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              aria-label="Dismiss notification"
              onClick={() => dismiss(item.id)}
            >
              ×
            </button>
          </div>
        );
      })}
    </div>
  );
}
