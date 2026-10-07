import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-[var(--gap-16)] bg-background px-[var(--padding-16)] text-center">
      <div className="space-y-[var(--gap-8)]">
        <h1 className="type-heading-md-19 text-[var(--color-15)]">404</h1>
        <p className="type-body-sm-5 text-[var(--color-61)]">
          The page you are looking for does not exist.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
