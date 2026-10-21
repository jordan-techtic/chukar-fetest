"use client";

import { runHolidayImport } from "./figmaHolidayMutations";

export function ManageHolidayImportInput() {
  return (
    <input
      id="holiday-import-file"
      type="file"
      accept=".csv,.xlsx"
      className="sr-only"
      aria-hidden
      tabIndex={-1}
      onChange={(event) => {
        const file = event.target.files?.[0];
        event.target.value = "";
        if (file) {
          void runHolidayImport(file);
        }
      }}
    />
  );
}
