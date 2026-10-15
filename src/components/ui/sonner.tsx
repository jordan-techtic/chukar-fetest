"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { cn } from "@/lib/utils/cn";

export function Toaster({ position = "top-right", className, ...props }: ToasterProps) {
  return (
    <Sonner
      theme="light"
      position={position}
      richColors
      closeButton
      expand
      visibleToasts={4}
      toastOptions={{
        classNames: {
          toast: cn(
            "group toast group-[.toaster]:rounded-[var(--radius-8)] group-[.toaster]:border group-[.toaster]:border-border group-[.toaster]:bg-card group-[.toaster]:text-foreground group-[.toaster]:shadow-[var(--shadow-drop-shadow-2)] group-[.toaster]:font-[family-name:var(--font-inter)]",
          ),
          title: "group-[.toast]:text-body-sm-11 group-[.toast]:text-foreground",
          description: "group-[.toast]:text-body-sm-5 group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:rounded-[var(--radius-8)] group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:rounded-[var(--radius-8)] group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          closeButton:
            "group-[.toast]:rounded-[var(--radius-8)] group-[.toast]:border group-[.toast]:border-border group-[.toast]:bg-card group-[.toast]:text-foreground",
          error:
            "group-[.toast]:border-destructive/30 group-[.toast]:bg-card group-[.toast]:text-foreground",
          success: "group-[.toast]:border-[var(--color-accent-brand)]/30",
        },
      }}
      className={cn("toaster group", className)}
      icons={{
        success: <CircleCheckIcon className="h-4 w-4 shrink-0" aria-hidden />,
        info: <InfoIcon className="h-4 w-4 shrink-0" aria-hidden />,
        warning: <TriangleAlertIcon className="h-4 w-4 shrink-0" aria-hidden />,
        error: <OctagonXIcon className="h-4 w-4 shrink-0" aria-hidden />,
        loading: <Loader2Icon className="h-4 w-4 shrink-0 animate-spin" aria-hidden />,
      }}
      {...props}
    />
  );
}
