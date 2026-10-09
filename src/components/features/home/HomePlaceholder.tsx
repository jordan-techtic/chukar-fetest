"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Spinner } from "@/components/ui/spinner";
import { fetchHealth } from "@/lib/api/health";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";

type HealthState = "idle" | "loading" | "success" | "error";

const homeInputClassName =
  "h-[40px] rounded-[10px] border-[#231f20] bg-[#221c1d] px-[12px] py-[10px] text-[14px] font-normal leading-[20px] text-[#f2f1dd] shadow-none placeholder:text-[#9ca3af] focus-visible:border-[#231f20] focus-visible:ring-[#2f80ed]";

const homeCtaClassName =
  "rounded-[10px] border border-[#231f20] bg-[#fef3c7] px-[16px] py-[10px] text-[14px] font-semibold leading-[17.850000381469727px] text-[#221c1d] hover:bg-[#fef3c7] hover:opacity-90 focus-visible:ring-[#2f80ed] disabled:bg-[#fef3c7] disabled:text-[#221c1d]";

export function HomePlaceholder() {
  const [healthState, setHealthState] = useState<HealthState>("idle");
  const [healthMessage, setHealthMessage] = useState<string>("");
  const [apiHint, setApiHint] = useState("");

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
    <div
      className="relative w-full font-['Onest',sans-serif]"
      style={{ fontFamily: "'Onest', sans-serif" }}
    >
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
            "radial-gradient(circle, #fef3c7 0%, #fde8ed 45%, transparent 72%)",
        }}
      />

      <div className="relative grid w-full grid-cols-1 gap-[24px] px-[24px] py-[16px] lg:grid-cols-[minmax(0,1fr)_284px] lg:gap-[24px]">
        <div className="flex min-w-0 flex-col gap-[24px]">
          <section
            className="rounded-[12px] border border-[#231f20] bg-[#ffffff] p-[24px] shadow-[var(--shadow-drop-shadow)]"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            <h1
              className="text-[22px] font-bold leading-[28.049999237060547px] text-[#000000]"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Marketing Content Calendar
            </h1>
            <p
              className="mt-[12px] text-[14px] font-normal leading-[17.850000381469727px] text-[#374151]"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Foundation setup for the marketing team calendar application. Use
              this workspace to build authenticated calendar flows in upcoming
              tickets.
            </p>
          </section>

          <section
            className="rounded-[12px] border border-[#e5e7eb] bg-[#ffffff] p-[24px] shadow-[var(--shadow-drop-shadow)]"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            <h2
              className="text-[16px] font-bold leading-[20.399999618530273px] text-[#221c1d]"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              API connectivity
            </h2>
            <p
              className="mt-[8px] text-[14px] font-normal leading-[17.850000381469727px] text-[#374957]"
              style={{ fontFamily: "'Noto Sans', sans-serif" }}
            >
              Optional smoke test against the public health endpoint.
            </p>
            <div className="mt-[16px] flex flex-wrap items-center gap-[12px]">
              <Button
                type="button"
                size="sm"
                variant="default"
                className={homeCtaClassName}
                onClick={() => void checkHealth()}
                disabled={healthState === "loading"}
                aria-busy={healthState === "loading"}
              >
                {healthState === "loading" ? "Checking…" : "Check API Health"}
              </Button>
              {healthState === "loading" ? (
                <Spinner label="Checking API health" />
              ) : null}
            </div>
            {healthState === "success" ? (
              <p
                className="mt-[12px] text-[14px] font-normal leading-[17.850000381469727px] text-[#374151]"
                role="status"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Service status: {healthMessage}
              </p>
            ) : null}
            {healthState === "error" ? (
              <p
                className="mt-[12px] text-[14px] font-normal leading-[17.850000381469727px] text-[#da002f]"
                role="alert"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                {healthMessage}
              </p>
            ) : null}
            {healthState === "idle" ? (
              <div className="mt-[16px] flex flex-col gap-[8px]" aria-hidden>
                <Skeleton className="h-[14px] w-3/4 bg-[#eaeaea]" />
                <Skeleton className="h-[14px] w-1/2 bg-[#eaeaea]" />
              </div>
            ) : null}
          </section>
        </div>

        <aside className="w-full max-w-[284px] justify-self-end lg:w-[284px]">
          <div
            className="rounded-[12px] border border-[#231f20] bg-[#fde8ed] p-[20px] shadow-[var(--shadow-drop-shadow-2)]"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            <h2
              className="text-[18px] font-semibold leading-[22.94999885559082px] text-[#221c1d]"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Environment hint
            </h2>
            <p
              className="mt-[10px] text-[13px] font-normal leading-[16.57499885559082px] text-[#65758b]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Leave blank to use the local API proxy.
            </p>
            <div className="mt-[16px] flex flex-col gap-[8px]">
              <Label
                htmlFor="home-api-hint"
                className="text-[13px] font-semibold leading-[16.57499885559082px] text-[#374151]"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                API base URL
              </Label>
              <Input
                id="home-api-hint"
                name="api-hint"
                type="text"
                autoComplete="off"
                placeholder="Optional override"
                value={apiHint}
                onChange={(event) => setApiHint(event.target.value)}
                className={homeInputClassName}
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
