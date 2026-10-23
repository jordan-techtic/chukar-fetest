/**
 * Luna generated page
 * Figma frame: 5602:71490
 * Page: Week-calendar-default
 * Route: /week-calendar-default
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { WeekCalendarDefaultMarketingCalendarSection_n_5602_71491 } from "./WeekCalendarDefaultMarketingCalendarSection_n_5602_71491";
import { WeekCalendarDefaultSeptember2026Section_n_5602_71492 } from "./WeekCalendarDefaultSeptember2026Section_n_5602_71492";
import { WeekCalendarDefaultContentSection } from "./WeekCalendarDefaultContentSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { WeekCalendarAdvanceFilterModal } from "./WeekCalendarAdvanceFilterModal";
import { AnnualCalendarDefaultModal } from "./AnnualCalendarDefaultModal";
import { MonthlyCalendarNotesModal } from "./MonthlyCalendarNotesModal";

export function WeekCalendarDefaultPage_n_5602_71490() {
  const screenData = useFigmaScreenData();
  const dialog_act_1b4093185628 = useDialogState("act_1b4093185628");
  const dialog_act_0dd4ae302327 = useDialogState("act_0dd4ae302327");
  const dialog_act_c77f170c369e = useDialogState("act_c77f170c369e");
  const dialog_act_9e536ea73c9b = useDialogState("act_9e536ea73c9b");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5602:71490" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <WeekCalendarDefaultMarketingCalendarSection_n_5602_71491 />
        <WeekCalendarDefaultSeptember2026Section_n_5602_71492 />
        <WeekCalendarDefaultContentSection />
      </main>
      {dialog_act_1b4093185628.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_1b4093185628.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_1b4093185628.close(); }}
          data-figma-dialog="act_1b4093185628"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_0dd4ae302327.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_0dd4ae302327.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_0dd4ae302327.close(); }}
          data-figma-dialog="act_0dd4ae302327"
        >
          <div
            className="relative h-full max-h-full overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <WeekCalendarAdvanceFilterModal />
          </div>
        </div>
      )}

      {dialog_act_c77f170c369e.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_c77f170c369e.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_c77f170c369e.close(); }}
          data-figma-dialog="act_c77f170c369e"
        >
          <div
            className="relative h-full max-h-full overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AnnualCalendarDefaultModal />
          </div>
        </div>
      )}

      {dialog_act_9e536ea73c9b.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_9e536ea73c9b.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_9e536ea73c9b.close(); }}
          data-figma-dialog="act_9e536ea73c9b"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarNotesModal />
          </div>
        </div>
      )}
    </div>
  );
}
