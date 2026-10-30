/**
 * Luna generated page
 * Figma frame: 5621:28270
 * Page: Manage-holiday
 * Route: /manage-holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { useEffect, useRef } from "react";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { ManageHolidayMarketingCalendarSection } from "./ManageHolidayMarketingCalendarSection";
import { ManageHolidayTitleRowSection } from "./ManageHolidayTitleRowSection";
import { ManageHolidayContentColumnSection } from "./ManageHolidayContentColumnSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { AddHolidayModal } from "./AddHolidayModal";
import { InviteUserModal } from "./InviteUserModal";

function focusableElements(root: HTMLElement): HTMLElement[] {
  return [
    ...root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
}

export function ManageHolidayPage() {
  const { bound, closeHolidayModal } = useFigmaScreenData();
  const dialog_act_0e7f4be472d9 = useDialogState("act_0e7f4be472d9");
  const dialog_act_8e0ab36f39bd = useDialogState("act_8e0ab36f39bd");
  const dialog_act_9000c49ea1a5 = useDialogState("act_9000c49ea1a5");
  const holidayDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dialog_act_8e0ab36f39bd.isOpen) {
      return;
    }
    const root = holidayDialogRef.current;
    if (!root) {
      return;
    }
    const nodes = focusableElements(root);
    nodes[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeHolidayModal();
        return;
      }
      if (event.key !== "Tab") {
        return;
      }
      const focusables = focusableElements(root);
      if (focusables.length === 0) {
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    root.addEventListener("keydown", onKeyDown);
    return () => root.removeEventListener("keydown", onKeyDown);
  }, [dialog_act_8e0ab36f39bd.isOpen, closeHolidayModal]);
  return (
    <div data-figma-bound={bound}
      data-figma-frame="5621:28270" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <ManageHolidayMarketingCalendarSection />
        <ManageHolidayTitleRowSection />
        <ManageHolidayContentColumnSection />
      </main>
      {dialog_act_0e7f4be472d9.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_0e7f4be472d9.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_0e7f4be472d9.close(); }}
          data-figma-dialog="act_0e7f4be472d9"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_8e0ab36f39bd.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="holiday-modal-title"
          tabIndex={-1}
          ref={holidayDialogRef}
          onClick={() => closeHolidayModal()}
          data-figma-dialog="act_8e0ab36f39bd"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AddHolidayModal />
          </div>
        </div>
      )}

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
