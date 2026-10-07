"use client";

import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const toasterStyle = {
  "--normal-bg": "var(--color-secondary)",
  "--normal-text": "var(--color-text-secondary)",
  "--normal-border": "var(--color-border)",
  "--success-bg": "var(--color-55)",
  "--success-text": "var(--color-text-secondary)",
  "--success-border": "var(--color-70)",
  "--error-bg": "var(--color-68)",
  "--error-text": "var(--color-text-secondary)",
  "--error-border": "var(--color-81)",
  "--warning-bg": "var(--color-27)",
  "--warning-text": "var(--color-text-secondary)",
  "--warning-border": "var(--color-29)",
  "--border-radius": "var(--radius-8)",
} as React.CSSProperties;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      closeButton
      richColors
      expand
      visibleToasts={4}
      gap={12}
      offset={16}
      style={toasterStyle}
      toastOptions={{
        unstyled: false,
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--color-secondary)] group-[.toaster]:text-[var(--color-text-secondary)] group-[.toaster]:border-[var(--color-border)] group-[.toaster]:shadow-[var(--drop-shadow-2)] group-[.toaster]:rounded-[var(--radius-8)]",
          title: "type-body-sm-11 group-[.toast]:text-[var(--color-15)]",
          description: "type-body-sm-5 group-[.toast]:text-[var(--color-61)]",
          actionButton:
            "group-[.toast]:rounded-[var(--radius-6)] group-[.toast]:bg-[var(--color-surface)] group-[.toast]:px-[var(--padding-12)] group-[.toast]:py-[var(--padding-6)] group-[.toast]:type-body-sm-11 group-[.toast]:text-[var(--color-text-primary)]",
          cancelButton:
            "group-[.toast]:rounded-[var(--radius-6)] group-[.toast]:bg-[var(--color-accent)] group-[.toast]:px-[var(--padding-12)] group-[.toast]:py-[var(--padding-6)] group-[.toast]:type-body-sm-5 group-[.toast]:text-[var(--color-text-secondary)]",
          closeButton:
            "group-[.toast]:border-[var(--color-border)] group-[.toast]:bg-[var(--color-secondary)] group-[.toast]:text-[var(--color-15)]",
          icon: "group-[.toast]:text-[var(--color-surface)]",
          loader: "group-[.toast]:text-[var(--color-surface)]",
          error:
            "group-[.toast]:border-[var(--color-81)] group-[.toast]:bg-[var(--color-68)]",
          success:
            "group-[.toast]:border-[var(--color-70)] group-[.toast]:bg-[var(--color-55)]",
          warning:
            "group-[.toast]:border-[var(--color-29)] group-[.toast]:bg-[var(--color-27)]",
          info: "group-[.toast]:border-[var(--color-38)] group-[.toast]:bg-[var(--color-65)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
