"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { Activity } from "lucide-react";
import { toast } from "sonner";

import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ErrorState } from "@/components/ui/error-state";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { fetchHealth } from "@/lib/api/health";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import { grantDevRouteAccess } from "@/lib/auth/dev-route-access";
import { resolveApiBaseUrl } from "@/lib/api/client";
import type { HealthData } from "@/lib/api/types";

type HealthState = "idle" | "loading" | "success" | "error";

const HEALTH_PATH = "/api/v1/health";

/** Page-only control styles — do not change global Button/Input primitives. */
const homeTanCtaClass =
  "rounded-[var(--radius-10)] border-[var(--color-border)] bg-[var(--color-color-16)] font-[family-name:var(--font-onest)] text-[var(--color-color-12)] hover:bg-[var(--color-color-16)] hover:opacity-90 focus-visible:ring-[var(--color-color-27)]";

const homeOutlineBtnClass =
  "rounded-[var(--radius-10)] border-[var(--color-border)] bg-[var(--color-color-19)] font-[family-name:var(--font-onest)] text-[var(--color-color-12)] hover:bg-[var(--color-color-19)] hover:opacity-90";

const homeDarkInputClass =
  "h-[40px] rounded-[var(--radius-8)] border-[var(--color-color-18)] bg-[var(--color-color-18)] font-[family-name:var(--font-noto-sans)] text-[var(--color-color-15)] placeholder:text-[var(--color-color-22)] focus-visible:ring-[var(--color-color-27)]";

export function HomePlaceholder() {
  const [healthState, setHealthState] = useState<HealthState>("idle");
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [resetOpen, setResetOpen] = useState(false);

  const endpointPreview = `${resolveApiBaseUrl()}${HEALTH_PATH}`;

  const checkHealth = useCallback(async () => {
    setHealthState("loading");
    setErrorMessage("");
    try {
      const result = await fetchHealth();
      setHealthState("success");
      setHealthData(result.data);
      toast.success("API health check succeeded.");
    } catch (error) {
      setHealthState("error");
      const message = getApiErrorMessage(error);
      setErrorMessage(message);
      toast.error(message);
    }
  }, []);

  const handleReset = () => {
    setHealthState("idle");
    setHealthData(null);
    setErrorMessage("");
    setResetOpen(false);
    toast.success("Health check state reset.");
  };

  const handleDevAccess = () => {
    grantDevRouteAccess();
    toast.success("Dev workspace access granted for route guard verification.");
  };

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
          <section className="rounded-[var(--radius-12)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow)]">
            <h1 className="font-[family-name:var(--font-inter)] text-heading-md-21 text-[var(--color-text-secondary)]">
              Marketing Content Calendar
            </h1>
            <p className="mt-[var(--spacing-gap-12)] font-[family-name:var(--font-onest)] text-body-sm-5 text-[var(--color-color-11)]">
              Foundation setup for the marketing team calendar application. Verify API
              connectivity and authentication routing from this home workspace.
            </p>
          </section>

          <section className="rounded-[var(--radius-12)] border border-[var(--color-accent)] bg-[var(--color-surface)] p-[var(--spacing-padding-24)] shadow-[var(--shadow-drop-shadow)]">
            <h2 className="font-[family-name:var(--font-inter)] text-heading-md-19 text-[var(--color-color-100)]">
              API Connectivity
            </h2>
            <p className="mt-[var(--spacing-gap-8)] font-[family-name:var(--font-noto-sans)] text-body-sm-27 text-[var(--color-color-15)]">
              Optional smoke test against the public health endpoint.
            </p>

            <label
              htmlFor="home-health-endpoint"
              className="mt-[var(--spacing-gap-16)] block font-[family-name:var(--font-onest)] text-caption text-[var(--color-color-14)]"
            >
              Request URL
            </label>
            <Input
              id="home-health-endpoint"
              readOnly
              value={endpointPreview}
              className={`mt-[var(--spacing-gap-8)] ${homeDarkInputClass}`}
              aria-readonly="true"
            />

            <div className="mt-[var(--spacing-gap-16)] flex flex-wrap items-center gap-[var(--spacing-gap-12)]">
              <Button
                type="button"
                size="sm"
                variant="outline"
                className={homeTanCtaClass}
                onClick={() => void checkHealth()}
                disabled={healthState === "loading"}
                aria-busy={healthState === "loading"}
              >
                {healthState === "loading" ? "Checking…" : "Check API Health"}
              </Button>
              <Button
                type="button"
                size="sm"
                variant="outline"
                className={homeOutlineBtnClass}
                onClick={() => setResetOpen(true)}
                disabled={healthState === "loading"}
              >
                Reset
              </Button>
              {process.env.NODE_ENV !== "production" ? (
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className={homeOutlineBtnClass}
                  onClick={handleDevAccess}
                >
                  Grant Workspace Access (Dev)
                </Button>
              ) : null}
            </div>

            {healthState === "loading" ? (
              <div
                className="mt-[var(--spacing-gap-16)] flex items-center gap-[var(--spacing-gap-12)]"
                aria-live="polite"
              >
                <Spinner label="Checking API health" />
                <div className="flex flex-1 flex-col gap-[var(--spacing-gap-8)]">
                  <Skeleton className="h-[14px] w-3/4 bg-[var(--color-color-19)]" />
                  <Skeleton className="h-[14px] w-1/2 bg-[var(--color-color-19)]" />
                </div>
              </div>
            ) : null}

            {healthState === "success" && healthData ? (
              <div
                className="mt-[var(--spacing-gap-16)] rounded-[var(--radius-8)] border border-[var(--color-border)] bg-[var(--color-color-23)] p-[var(--spacing-padding-16)]"
                aria-live="polite"
              >
                <p className="font-[family-name:var(--font-onest)] text-body-sm-5 text-[var(--color-color-12)]">
                  <span className="text-body-sm-11">Status:</span> {healthData.status}
                </p>
                <p className="mt-[var(--spacing-gap-8)] font-[family-name:var(--font-onest)] text-body-sm-5 text-[var(--color-color-12)]">
                  <span className="text-body-sm-11">Organization:</span>{" "}
                  {healthData.organization}
                </p>
                <p className="mt-[var(--spacing-gap-8)] font-[family-name:var(--font-onest)] text-body-sm-5 text-[var(--color-color-12)]">
                  <span className="text-body-sm-11">Role:</span> {healthData.role || "—"}
                </p>
              </div>
            ) : null}

            {healthState === "error" ? (
              <div className="mt-[var(--spacing-gap-16)]">
                <ErrorState message={errorMessage} onRetry={() => void checkHealth()} />
              </div>
            ) : null}
          </section>

          <p className="font-[family-name:var(--font-onest)] text-caption-10 text-[var(--color-color-14)]">
            Protected route verification:{" "}
            <Link
              href="/workspace"
              className="font-[family-name:var(--font-inter)] text-body-sm-29 text-[var(--color-color-24)] underline-offset-2 hover:underline"
            >
              /workspace
            </Link>{" "}
            requires a session token (use dev grant above during setup).
          </p>
        </div>

        <aside className="flex w-full max-w-[284px] flex-col gap-[var(--spacing-gap-16)] lg:max-w-none">
          <div className="rounded-[var(--radius-12)] border border-[var(--color-border)] bg-[var(--color-color-29)] p-[var(--spacing-padding-20)] shadow-[var(--shadow-drop-shadow)]">
            <Activity
              className="h-[var(--spacing-gap-24)] w-[var(--spacing-gap-24)] text-[var(--color-accent)]"
              aria-hidden
            />
            <p className="mt-[var(--spacing-gap-12)] font-[family-name:var(--font-inter)] text-body-sm-29 text-[var(--color-color-12)]">
              Setup status
            </p>
            <p className="mt-[var(--spacing-gap-8)] font-[family-name:var(--font-noto-sans)] text-body-sm-27 text-[var(--color-color-21)]">
              Tokens, shell layout, and API client are active on this environment.
            </p>
          </div>
          <div
            aria-hidden
            className="hidden min-h-[120px] rounded-[var(--radius-12)] opacity-40 lg:block"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, var(--color-color-17) 0%, var(--color-background) 55%, transparent 100%)",
            }}
          />
        </aside>
      </div>

      <ConfirmDialog
        open={resetOpen}
        onOpenChange={setResetOpen}
        title="Reset health check?"
        description="This clears the health check results on this page. It does not affect the API."
        confirmLabel="Reset"
        onConfirm={handleReset}
        variant="destructive"
      />
    </div>
  );
}
