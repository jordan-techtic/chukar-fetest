import type { Metadata } from "next";

import { LoginForm } from "@/components/features/auth/LoginForm";

export const metadata: Metadata = { title: "Log in" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;
  return (
    <main
      id="main-content"
      className="flex min-h-screen items-center justify-center bg-[var(--color-background)] p-[var(--spacing-padding-24)]"
    >
      <section className="w-full max-w-[420px] rounded-[var(--radius-12)] border border-border bg-card px-[var(--spacing-padding-24)] py-[var(--spacing-padding-32)] shadow-[var(--shadow-drop-shadow-4)]">
        <h1 className="text-center text-heading-md-21 text-foreground">
          Marketing Content Calendar
        </h1>
        <p className="mb-[var(--spacing-gap-24)] mt-[var(--spacing-gap-8)] text-center text-body-sm-5 text-muted-foreground">
          Sign in to continue
        </p>
        <LoginForm nextPath={next} />
      </section>
    </main>
  );
}
