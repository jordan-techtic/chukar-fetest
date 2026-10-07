import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-[var(--gap-16)] bg-background px-[var(--padding-16)] text-center">
      <div className="space-y-[var(--gap-8)]">
        <h1 className="font-[family-name:var(--font-inter)] text-[22px] font-extrabold leading-[26.625px]">
          404
        </h1>
        <p className="text-sm leading-[17.85px] text-muted-foreground">
          The page you are looking for does not exist.
        </p>
      </div>
      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
