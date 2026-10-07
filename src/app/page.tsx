"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { useHealthCheck } from "@/hooks/useHealthCheck";

function HealthStatusCard() {
  const { state, refetch } = useHealthCheck();

  return (
    <Card className="max-w-md border-[var(--color-border)] bg-[var(--color-secondary)]">
      <CardHeader className="gap-[var(--gap-8)]">
        <CardTitle className="type-body-sm-11 text-[var(--color-15)]">API Health</CardTitle>
        <CardDescription className="type-body-sm-27 text-[var(--color-14)]">
          Example GET request to verify the API client configuration.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {state.status === "loading" && <Spinner label="Checking API health" />}
        {state.status === "success" && (
          <div className="flex flex-col gap-[var(--gap-8)] type-body-sm-5 text-[var(--color-text-secondary)]">
            <p>
              <span className="type-body-sm-4">Status:</span> {state.data.status}
            </p>
            <p>
              <span className="type-body-sm-4">Organization:</span>{" "}
              {state.data.organization}
            </p>
          </div>
        )}
        {state.status === "error" && (
          <div
            role="alert"
            className="rounded-[var(--radius-8)] border border-[var(--color-81)] bg-[var(--color-68)] p-[var(--padding-12)] type-body-sm-5"
          >
            <p>{state.message}</p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-[var(--gap-12)] border-[var(--color-border)] bg-[var(--color-accent)] text-[var(--color-100)]"
              onClick={() => void refetch()}
            >
              Retry
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1280px] flex-col gap-[var(--gap-24)] bg-[var(--color-background)] px-[var(--padding-16)] py-[var(--padding-24)] md:px-[var(--padding-24)]">
      <section className="flex flex-col gap-[var(--gap-8)]">
        <h1 className="type-heading-lg-31 text-[var(--color-15)]">
          Marketing Content Calendar
        </h1>
        <p className="max-w-2xl type-body-sm-5 text-[var(--color-text-secondary)]">
          Plan, schedule, and track marketing activities across your annual calendar.
        </p>
      </section>

      <HealthStatusCard />

      <div>
        <Link
          href="/calendar"
          className="type-body-sm-5 text-[var(--color-surface)] underline-offset-4 hover:underline"
        >
          Go to Calendar
        </Link>
      </div>
    </div>
  );
}
