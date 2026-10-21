"use client";

import { useCallback, useEffect, useState } from "react";

import { toast } from "@/components/ui/sonner";
import { deleteHoliday, importHolidays, updateHoliday } from "@/lib/api/holidays";
import { getApiErrorMessage } from "@/lib/api/get-api-error-message";
import type { HolidayStatus } from "@/lib/api/types";
import { HOLIDAY_TABLE_PAGE_SIZE } from "@/lib/constants";

import {
  getHolidayItemAtDisplayIndex,
  getHolidayListCurrentPage,
  getHolidayListPageCount,
  getHolidayListPaginationSummary,
  setListOffset,
} from "./figmaDisplay";
import {
  HOLIDAY_IMPORT_SUBMIT_NODE,
  HOLIDAY_LIST_OPERATION,
  holidayRowMutationForNode,
} from "./figmaHolidayRowContract";
export type FigmaActionBinding = {
  onClick?: (event: { preventDefault: () => void; currentTarget: EventTarget | null }) => void;
  disabled?: boolean;
};

type PendingHolidayMutation =
  | {
      kind: "delete";
      displayIndex: number;
      holidayId: string;
      holidayName: string;
    }
  | {
      kind: "status_toggle";
      displayIndex: number;
      holidayId: string;
      holidayName: string;
      nextStatus: HolidayStatus;
    };

let pendingMutation: PendingHolidayMutation | null = null;
let mutationBusy = false;
const mutationListeners = new Set<() => void>();
let reloadReads: (() => Promise<void>) | null = null;

function notifyMutationListeners(): void {
  mutationListeners.forEach((listener) => listener());
}

export function registerHolidayReload(fn: (() => Promise<void>) | null): void {
  reloadReads = fn;
}

export function useHolidayMutationConfirmState(): {
  pending: PendingHolidayMutation | null;
  busy: boolean;
  confirm: () => Promise<void>;
  cancel: () => void;
} {
  const [, tick] = useState(0);
  useEffect(() => {
    const listener = () => tick((value) => value + 1);
    mutationListeners.add(listener);
    return () => {
      mutationListeners.delete(listener);
    };
  }, []);

  const cancel = useCallback(() => {
    pendingMutation = null;
    notifyMutationListeners();
  }, []);

  const confirm = useCallback(async () => {
    if (!pendingMutation || mutationBusy) {
      return;
    }
    mutationBusy = true;
    notifyMutationListeners();
    try {
      if (pendingMutation.kind === "delete") {
        const response = await deleteHoliday(pendingMutation.holidayId);
        toast.success(response.message || "Holiday deleted successfully.");
      } else {
        const response = await updateHoliday(pendingMutation.holidayId, {
          status: pendingMutation.nextStatus,
        });
        toast.success(response.message || "Changes saved successfully.");
      }
      pendingMutation = null;
      await reloadReads?.();
    } catch (error) {
      toast.error(getApiErrorMessage(error));
    } finally {
      mutationBusy = false;
      notifyMutationListeners();
    }
  }, []);

  return { pending: pendingMutation, busy: mutationBusy, confirm, cancel };
}

function queueRowMutation(displayIndex: number, kind: "delete" | "status_toggle"): void {
  const row = getHolidayItemAtDisplayIndex(displayIndex);
  const id = typeof row?.id === "string" ? row.id : "";
  const name = typeof row?.name === "string" ? row.name : "this holiday";
  if (!id) {
    toast.error("Unable to update this row. Please refresh and try again.");
    return;
  }
  if (kind === "delete") {
    pendingMutation = { kind: "delete", displayIndex, holidayId: id, holidayName: name };
  } else {
    const current = row?.status === "inactive" ? "inactive" : "active";
    const nextStatus: HolidayStatus = current === "active" ? "inactive" : "active";
    pendingMutation = {
      kind: "status_toggle",
      displayIndex,
      holidayId: id,
      holidayName: name,
      nextStatus,
    };
  }
  notifyMutationListeners();
}

export function figmaHolidayRowActionProps(actionNodeId: string): FigmaActionBinding {
  const binding = holidayRowMutationForNode(actionNodeId);
  if (!binding) {
    return {};
  }
  return {
    disabled: mutationBusy,
    onClick: (event) => {
      event.preventDefault();
      queueRowMutation(binding.displayRowIndex, binding.kind);
    },
  };
}

let importBusy = false;

export function figmaHolidayUploadListProps(): FigmaActionBinding & {
  "data-upload-node"?: string;
} {
  return {
    disabled: importBusy || mutationBusy,
    "data-upload-node": HOLIDAY_IMPORT_SUBMIT_NODE,
    onClick: (event) => {
      event.preventDefault();
      const input = document.getElementById("holiday-import-file") as HTMLInputElement | null;
      input?.click();
    },
  };
}

export async function runHolidayImport(file: File): Promise<void> {
  if (importBusy) {
    return;
  }
  importBusy = true;
  notifyMutationListeners();
  try {
    const response = await importHolidays(file);
    toast.success(response.message || "Holiday list imported successfully.");
    await reloadReads?.();
  } catch (error) {
    toast.error(getApiErrorMessage(error));
  } finally {
    importBusy = false;
    notifyMutationListeners();
  }
}

export function figmaHolidayPaginationSummary(fallback: string): string {
  return getHolidayListPaginationSummary(fallback);
}

export function figmaHolidayPaginationActionProps(
  control: "prev" | "next" | "page",
  pageNumber?: number,
): FigmaActionBinding {
  return {
    onClick: (event) => {
      event.preventDefault();
      const pageCount = getHolidayListPageCount();
      const currentPage = getHolidayListCurrentPage();
      let targetPage = currentPage;
      if (control === "prev") {
        targetPage = Math.max(1, currentPage - 1);
      } else if (control === "next") {
        targetPage = Math.min(pageCount, currentPage + 1);
      } else if (control === "page" && typeof pageNumber === "number") {
        targetPage = Math.min(pageCount, Math.max(1, pageNumber));
      }
      if (targetPage === currentPage) {
        return;
      }
      setListOffset(HOLIDAY_LIST_OPERATION, (targetPage - 1) * HOLIDAY_TABLE_PAGE_SIZE);
    },
  };
}
