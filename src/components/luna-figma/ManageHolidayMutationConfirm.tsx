"use client";

import { ConfirmDialog } from "@/components/shared/confirm-dialog";

import { useHolidayMutationConfirmState } from "./figmaHolidayMutations";

export function ManageHolidayMutationConfirm() {
  const { pending, busy, confirm, cancel } = useHolidayMutationConfirmState();

  if (!pending) {
    return null;
  }

  const isDelete = pending.kind === "delete";
  const title = isDelete ? "Delete holiday?" : "Change holiday status?";
  const description = isDelete
    ? `This will permanently delete ${pending.holidayName}. This action cannot be undone.`
    : `Set ${pending.holidayName} to ${pending.kind === "status_toggle" ? pending.nextStatus : "inactive"}.`;

  return (
    <ConfirmDialog
      open
      onOpenChange={(open) => {
        if (!open) {
          cancel();
        }
      }}
      title={title}
      description={description}
      confirmLabel={isDelete ? "Delete" : "Confirm"}
      cancelLabel="Cancel"
      variant={isDelete ? "destructive" : "default"}
      isLoading={busy}
      onConfirm={() => {
        void confirm();
      }}
    />
  );
}
