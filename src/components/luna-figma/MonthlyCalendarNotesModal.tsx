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
      <div
        data-figma-node="5549:55513"
        className="box-border absolute left-[0px] top-[0px] w-full h-[80px] overflow-hidden bg-[#ffffff] pt-[15px] pb-[15px] pl-[20px] pr-[20px]"
      >
        <a
          data-figma-node="I5549:55513;5217:13742"
          data-figma-action="act_499abfb5824f"
          href="/marketing-calendar/week"
          className="pointer-events-none absolute h-px w-px overflow-hidden opacity-0"
        >
          Historical View
        </a>
      </div>
      <div
        data-figma-node="5549:55514"
        className="box-border absolute left-[0px] top-[80px] w-full h-[59px] overflow-hidden bg-[#faf3e8] pt-[15px] pb-[15px] pl-[20px] pr-[20px]"
      />
      <div className="box-border absolute left-[0px] top-[139px] w-full">
        <MonthlyCalendarNotesModalWindowSection />
      </div>
      {dialog_act_0cb0a53c99a1.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => {
            el?.focus();
          }}
          onClick={dialog_act_0cb0a53c99a1.close}
          onKeyDown={(e) => {
            if (e.key === "Escape") dialog_act_0cb0a53c99a1.close();
          }}
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
