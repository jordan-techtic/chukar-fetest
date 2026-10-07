"use client";

import { useCallback, useEffect, useState } from "react";

import { getApiErrorMessage } from "@/lib/api";
import { getHealth } from "@/lib/api/health";
import type { HealthData } from "@/types/api";

type HealthState =
  | { status: "loading" }
  | { status: "success"; data: HealthData; message: string }
  | { status: "error"; message: string };

export function useHealthCheck() {
  const [state, setState] = useState<HealthState>({ status: "loading" });

  const fetchHealth = useCallback(async () => {
    setState({ status: "loading" });
    try {
      const response = await getHealth();
      setState({
        status: "success",
        data: response.data,
        message: response.message,
      });
    } catch (error) {
      setState({
        status: "error",
        message: getApiErrorMessage(error),
      });
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function loadHealth() {
      setState({ status: "loading" });
      try {
        const response = await getHealth();
        if (cancelled) return;
        setState({
          status: "success",
          data: response.data,
          message: response.message,
        });
      } catch (error) {
        if (cancelled) return;
        setState({
          status: "error",
          message: getApiErrorMessage(error),
        });
      }
    }

    void loadHealth();

    return () => {
      cancelled = true;
    };
  }, []);

  return { state, refetch: fetchHealth };
}
