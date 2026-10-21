/**
 * Luna generated page
 * Figma frame: 5621:28800
 * Page: Add Holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { AddHolidayModalWindowSection } from "./AddHolidayModalWindowSection";
import { InviteUserModal } from "./InviteUserModal";

export function AddHolidayModal() {
  const screenData = useFigmaScreenData();
  const dialog_act_9000c49ea1a5 = useDialogState("act_9000c49ea1a5");
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5621:28800"
      className="relative max-w-full"
      style={{ width: 520, height: 334 }}
    >
        <AddHolidayModalWindowSection />
      {dialog_act_9000c49ea1a5.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_9000c49ea1a5.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_9000c49ea1a5.close(); }}
          data-figma-dialog="act_9000c49ea1a5"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <InviteUserModal />
          </div>
        </div>
      )}
    </div>
  );
}
