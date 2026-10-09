import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--color-background)] p-[var(--spacing-padding-24)]">
      <div className="max-w-lg rounded-[var(--radius-12)] border border-border bg-card p-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow)]">
        <h1 className="text-heading-md-21">Page Not Found</h1>
        <p className="mt-[var(--spacing-gap-12)] text-body-sm-5 text-muted-foreground">
          The page you requested does not exist.
        </p>
        <Button asChild className="mt-[var(--spacing-gap-16)]" size="sm">
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
