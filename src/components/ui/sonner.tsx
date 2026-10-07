"use client";

import { Toaster as Sonner, toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-[var(--color-secondary)] group-[.toaster]:text-[var(--color-text-secondary)] group-[.toaster]:border-[var(--color-border)] group-[.toaster]:shadow-[var(--drop-shadow-2)]",
          title: "type-body-sm-11 group-[.toast]:text-[var(--color-15)]",
          description: "type-body-sm-5 group-[.toast]:text-[var(--color-61)]",
          actionButton:
            "group-[.toast]:bg-[var(--color-surface)] group-[.toast]:text-[var(--color-text-primary)]",
          cancelButton:
            "group-[.toast]:bg-[var(--color-accent)] group-[.toast]:text-[var(--color-text-secondary)]",
          closeButton:
            "group-[.toast]:border-[var(--color-border)] group-[.toast]:bg-[var(--color-secondary)] group-[.toast]:text-[var(--color-15)]",
          error:
            "group-[.toast]:border-[var(--color-81)] group-[.toast]:bg-[var(--color-68)]",
          success:
            "group-[.toast]:border-[var(--color-70)] group-[.toast]:bg-[var(--color-55)]",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
