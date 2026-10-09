"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils/cn";

type ToastKind = "success" | "error";

interface ToastRecord {
  id: string;
  kind: ToastKind;
  message: string;
}

type PublishToast = (kind: ToastKind, message: string) => void;

const ToastDispatchContext = createContext<PublishToast | null>(null);

let nextToastId = 0;

function publishToast(kind: ToastKind, message: string): void {
  if (typeof window === "undefined") {
    return;
  }
  window.dispatchEvent(
    new CustomEvent("app-toast", {
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

    window.addEventListener("app-toast", handleToast);
    return () => window.removeEventListener("app-toast", handleToast);
  }, [dismiss]);

  const positionClass =
    position === "top-left"
      ? "left-4 top-4"
      : position === "bottom-right"
        ? "bottom-4 right-4"
        : position === "bottom-left"
          ? "bottom-4 left-4"
          : "right-4 top-4";

  return (
    <div
      id={regionId}
      aria-live="polite"
      aria-relevant="additions"
      className={cn("pointer-events-none fixed z-50 flex max-w-sm flex-col gap-2", positionClass)}
    >
      {toasts.map((item) => (
        <div
          key={item.id}
          role="status"
          className={cn(
            "pointer-events-auto rounded-[var(--radius-8)] border border-border bg-card px-[var(--spacing-padding-16)] py-[var(--spacing-gap-12)] text-body-sm-5 shadow-[var(--shadow-drop-shadow-2)]",
            item.kind === "error"
              ? "text-[var(--color-color-28)]"
              : "text-[var(--color-text-secondary)]",
          )}
        >
          {item.message}
        </div>
      ))}
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const publish = useCallback<PublishToast>((kind, message) => {
    publishToast(kind, message);
  }, []);

  return (
    <ToastDispatchContext.Provider value={publish}>{children}</ToastDispatchContext.Provider>
  );
}

export function useToastPublisher(): PublishToast {
  const publish = useContext(ToastDispatchContext);
  if (!publish) {
    throw new Error("useToastPublisher must be used within ToastProvider");
  }
  return publish;
}
