import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-10)] text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed aria-disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:opacity-90 active:opacity-95",
        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-90 active:opacity-95",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:opacity-90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-[var(--radius-8)] px-3 text-xs",
        lg: "h-10 rounded-[var(--radius-10)] px-6",
        icon: "h-8 w-8 rounded-[var(--radius-8)] p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, type, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if (asChild && React.isValidElement<{ className?: string }>(children)) {
      return React.cloneElement(children, {
        ...props,
        className: cn(classes, children.props.className),
      });
    }

    return (
      <button className={classes} ref={ref} type={type ?? "button"} {...props}>
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
