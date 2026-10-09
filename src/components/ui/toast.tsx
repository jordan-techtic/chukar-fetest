"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils/cn";

type ToastKind = "success" | "error";

interface ToastRecord {
  id: string;
  kind: ToastKind;
  message: string;
  open: boolean;
}

let nextToastId = 0;

export const toast = {
  success(message: string): void {
    if (typeof window === "undefined") {
      return;
    }
    window.dispatchEvent(
      new CustomEvent("app-toast", { detail: { kind: "success" as const, message } }),
    );
  },
  error(message: string): void {
    if (typeof window === "undefined") {
      return;
    }
    window.dispatchEvent(
      new CustomEvent("app-toast", { detail: { kind: "error" as const, message } }),
    );
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
  const [toasts, setToasts] = useState<ToastRecord[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((current) =>
      current.map((item) => (item.id === id ? { ...item, open: false } : item)),
    );
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 200);
  }, []);

  useEffect(() => {
    const handleToast = (event: Event) => {
      const custom = event as CustomEvent<{ kind: ToastKind; message: string }>;
      const id = String(++nextToastId);
      setToasts((current) => [
        ...current,
        { id, kind: custom.detail.kind, message: custom.detail.message, open: true },
      ]);
    };
    window.addEventListener("app-toast", handleToast);
    return () => window.removeEventListener("app-toast", handleToast);
  }, []);

  return (
    <ToastPrimitive.Provider swipeDirection="right" duration={5000}>
      {toasts.map((item) => {
        const isError = item.kind === "error";
        return (
          <ToastPrimitive.Root
            key={item.id}
            open={item.open}
            onOpenChange={(open) => {
              if (!open) {
                dismiss(item.id);
              }
            }}
            className={cn(
              "pointer-events-auto flex items-start gap-[var(--spacing-gap-8)] rounded-[var(--radius-8)] border border-border bg-card px-[var(--spacing-padding-16)] py-[var(--spacing-gap-12)] text-body-sm-5 shadow-[var(--shadow-drop-shadow-2)]",
              isError
                ? "text-[var(--color-color-28)]"
                : "text-[var(--color-text-secondary)]",
            )}
          >
            <ToastPrimitive.Title className="min-w-0 flex-1 font-normal">
              {item.message}
            </ToastPrimitive.Title>
            <ToastPrimitive.Close
              className="shrink-0 rounded-[var(--radius-6)] px-[var(--spacing-gap-4)] text-[var(--color-text-secondary)] hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              aria-label="Dismiss notification"
            >
              ×
            </ToastPrimitive.Close>
          </ToastPrimitive.Root>
        );
      })}
      <ToastPrimitive.Viewport
        className={cn(
          "pointer-events-none fixed z-50 flex max-w-sm flex-col gap-[var(--spacing-gap-8)] outline-none",
          positionClasses[position],
        )}
      />
    </ToastPrimitive.Provider>
  );
}

export const Toast = ToastPrimitive.Root;
export const ToastTitle = ToastPrimitive.Title;
export const ToastDescription = ToastPrimitive.Description;
export const ToastClose = ToastPrimitive.Close;
export const ToastViewport = ToastPrimitive.Viewport;
export const ToastProvider = ToastPrimitive.Provider;
