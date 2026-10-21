"use client";

import { useCallback, useState } from "react";

import { toast } from "@/components/ui/sonner";
import {
  createHoliday,
  deleteHoliday,
  fetchHolidays,
  importHolidays,
  updateHoliday,
  type HolidayListParams,
} from "@/lib/api/holidays";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import type { HolidayCreateBody, HolidayOut, HolidayUpdateBody } from "@/lib/api/types";

type UseHolidaysState = {
  items: HolidayOut[];
  loading: boolean;
  error: string | null;
};

export function useHolidays(initialParams?: HolidayListParams) {
  const [params, setParams] = useState<HolidayListParams>(initialParams ?? {});
  const [state, setState] = useState<UseHolidaysState>({
    items: [],
    loading: false,
    error: null,
  });

  const load = useCallback(async (nextParams?: HolidayListParams) => {
    const query = nextParams ?? params;
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const response = await fetchHolidays(query);
      setState({ items: response.data.items, loading: false, error: null });
    } catch (error) {
      const message = getApiErrorMessage(error);
      setState((prev) => ({ ...prev, loading: false, error: message }));
      toast.error(message);
    }
  }, [params]);

  const setQuery = useCallback(
    (patch: Partial<HolidayListParams>) => {
      setParams((prev) => {
        const next = { ...prev, ...patch };
        void load(next);
        return next;
      });
    },
    [load],
  );

  const create = useCallback(
    async (body: HolidayCreateBody) => {
      try {
        const response = await createHoliday(body);
        toast.success(response.message || "Holiday created successfully.");
        await load();
        return response.data;
      } catch (error) {
        toast.error(getApiErrorMessage(error));
        throw error;
      }
    },
    [load],
  );

  const update = useCallback(
    async (id: string, body: HolidayUpdateBody) => {
      try {
        const response = await updateHoliday(id, body);
        toast.success(response.message || "Changes saved successfully.");
        await load();
        return response.data;
      } catch (error) {
        toast.error(getApiErrorMessage(error));
        throw error;
      }
    },
    [load],
  );

  const remove = useCallback(
    async (id: string) => {
      try {
        const response = await deleteHoliday(id);
        toast.success(response.message || "Holiday deleted successfully.");
        await load();
      } catch (error) {
        toast.error(getApiErrorMessage(error));
        throw error;
      }
    },
    [load],
  );

  const importFile = useCallback(
    async (file: File) => {
      try {
        const response = await importHolidays(file);
        toast.success(response.message || "Holiday list imported successfully.");
        await load();
      } catch (error) {
        toast.error(getApiErrorMessage(error));
        throw error;
      }
    },
    [load],
  );

  return {
    ...state,
    params,
    load,
    setQuery,
    create,
    update,
    remove,
    importFile,
  };
}
