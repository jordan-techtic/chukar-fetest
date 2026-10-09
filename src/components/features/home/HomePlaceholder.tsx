"use client";

import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "@/components/ui/sonner";
import { fetchHealth } from "@/lib/api/health";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";

type HealthState = "idle" | "loading" | "success" | "error";

export function HomePlaceholder() {
  const [healthState, setHealthState] = useState<HealthState>("idle");
  const [healthMessage, setHealthMessage] = useState<string>("");

  const checkHealth = useCallback(async () => {
    setHealthState("loading");
    setHealthMessage("");
    try {
      const result = await fetchHealth();
      setHealthState("success");
      setHealthMessage(result.data.status);
      toast.success("API health check succeeded.");
    } catch (error) {
      setHealthState("error");
      const message = getApiErrorMessage(error);
      setHealthMessage(message);
      toast.error(message);
    }
  }, []);

  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{ backgroundImage: "var(--gradient)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[8%] h-[240px] w-[240px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, var(--color-color-27) 0%, var(--color-background) 45%, transparent 72%)",
        }}
      />

      <div className="relative grid w-full grid-cols-1 gap-[var(--spacing-gap-24)] px-[var(--spacing-padding-24)] py-[var(--spacing-padding-16)] lg:grid-cols-[minmax(0,1fr)_284px]">
        <div className="flex min-w-0 flex-col gap-[var(--spacing-gap-24)]">
          <section className="rounded-[var(--radius-12)] border border-border bg-card p-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow)]">
            <h1 className="text-heading-md-21 text-[var(--color-text-secondary)]">
              Marketing Content Calendar
            </h1>
            <p className="mt-[var(--spacing-gap-12)] text-body-sm-5 text-muted-foreground">
              Foundation setup for the marketing team calendar application. Use
              this workspace to build authenticated calendar flows in upcoming
              tickets.
            </p>
          </section>

          <section className="rounded-[var(--radius-12)] border border-[var(--color-accent)] bg-card p-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow)]">
            <h2 className="text-heading-md-19 text-[var(--color-color-100)]">API connectivity</h2>
            <p className="mt-[var(--spacing-gap-8)] text-body-sm-5 text-[var(--color-color-15)] font-[family-name:var(--font-noto-sans)]">
              Optional smoke test against the public health endpoint.
            </p>
            <div className="mt-[var(--spacing-gap-16)] flex flex-wrap items-center gap-[var(--spacing-gap-12)]">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="rounded-[var(--radius-10)] border-border bg-[var(--color-color-27)] text-[var(--color-color-100)] hover:bg-[var(--color-color-27)] hover:opacity-90 focus-visible:ring-[var(--color-color-38)]"
                onClick={() => void checkHealth()}
                disabled={healthState === "loading"}
                aria-busy={healthState === "loading"}
              >
                {healthState === "loading" ? "Checking…" : "Check API health"}
              </Button>
              {healthState === "loading" ? (
                <Spinner label="Checking API health" />
              ) : null}
            </div>
            {healthState === "success" ? (
              <p
                className="mt-[var(--spacing-gap-12)] text-body-sm-5 text-muted-foreground"
                role="status"
              >
                Service status: {healthMessage}
              </p>
            ) : null}
            {healthState === "error" ? (
              <p
                className="mt-[var(--spacing-gap-12)] text-body-sm-5 text-[var(--color-color-28)]"
                role="alert"
              >
                {healthMessage}
              </p>
            ) : null}
            {healthState === "idle" ? (
              <div className="mt-[var(--spacing-gap-16)] flex flex-col gap-[var(--spacing-gap-8)]" aria-hidden>
                <Skeleton className="h-[14px] w-3/4" />
                <Skeleton className="h-[14px] w-1/2" />
              </div>
            ) : null}
          </section>
        </div>

        <aside className="w-full max-w-[284px] justify-self-end lg:w-[284px]">
          <div className="rounded-[var(--radius-12)] border border-border bg-[var(--color-background)] p-[var(--spacing-padding-20)] shadow-[var(--shadow-drop-shadow-2)]">
            <h2 className="text-heading-md-19 text-[var(--color-color-100)]">Environment</h2>
            <p className="mt-[var(--spacing-gap-10)] text-body-sm-5 text-[var(--color-color-24)]">
              Set <code className="text-[var(--color-text-secondary)]">NEXT_PUBLIC_API_URL</code>{" "}
              in a local <code className="text-[var(--color-text-secondary)]">.env</code> file only
              when you need a direct API host. Leave it empty to use the same-origin{" "}
              <code className="text-[var(--color-text-secondary)]">/api/v1</code> proxy (see{" "}
              <code className="text-[var(--color-text-secondary)]">.env.example</code>).
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
