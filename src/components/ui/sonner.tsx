"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

/**
 * Sonner-backed toaster styled with the design-system CSS variables, so
 * toasts match the shadcn/ui primitives used across the app.
 */
export function Toaster({ position = "top-right", ...props }: ToasterProps) {
  return (
    <Sonner
      position={position}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:rounded-[var(--radius-8)] group-[.toaster]:border-border group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:shadow-[var(--shadow-drop-shadow-2)]",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}
