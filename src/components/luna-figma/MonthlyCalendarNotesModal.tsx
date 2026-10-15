/**
 * Luna generated page
 * Figma frame: 5549:55512
 * Page: Monthly-calendar-Notes
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { MonthlyCalendarNotesModalWindowSection } from "./MonthlyCalendarNotesModalWindowSection";
import { AnnualCalendarDefaultModal } from "./AnnualCalendarDefaultModal";

export function MonthlyCalendarNotesModal() {
  const screenData = useFigmaScreenData();
  const dialog_act_0cb0a53c99a1 = useDialogState("act_0cb0a53c99a1");
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5549:55512"
      className="relative max-w-full"
      style={{ width: 520, height: 497 }}
    >
      <div data-figma-node="5549:55513" className="box-border h-full w-full pt-[15px] pb-[15px] pl-[20px] pr-[20px]">
        <div data-figma-node="5549:55514" className="box-border h-full w-full pt-[15px] pb-[15px] pl-[20px] pr-[20px]">
          <MonthlyCalendarNotesModalWindowSection />
        </div>
      </div>
      {dialog_act_0cb0a53c99a1.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_0cb0a53c99a1.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_0cb0a53c99a1.close(); }}
          data-figma-dialog="act_0cb0a53c99a1"
        >
          <div
            className="relative h-full max-h-full overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AnnualCalendarDefaultModal />
          </div>
        </div>
      )}
    </div>
  );
}
