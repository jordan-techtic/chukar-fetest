/**
 * Luna generated page
 * Figma frame: 5602:62165
 * Page: Week-calendar-default
 * Route: /week-calendar-default-1
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { WeekCalendarDefaultMarketingCalendarSection_n_5602_62166 } from "./WeekCalendarDefaultMarketingCalendarSection_n_5602_62166";
import { WeekCalendarDefaultSeptember2026Section_n_5602_62167 } from "./WeekCalendarDefaultSeptember2026Section_n_5602_62167";
import { WeekCalendarDefaultSection_n_5645_43147 } from "./WeekCalendarDefaultSection_n_5645_43147";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { WeekCalendarAdvanceFilterModal } from "./WeekCalendarAdvanceFilterModal";
import { AnnualCalendarDefaultModal } from "./AnnualCalendarDefaultModal";

export function WeekCalendarDefaultPage_n_5602_62165() {
  const screenData = useFigmaScreenData();
  const dialog_act_10a2fe67aa7b = useDialogState("act_10a2fe67aa7b");
  const dialog_act_9608b00adea1 = useDialogState("act_9608b00adea1");
  const dialog_act_06c37940f54d = useDialogState("act_06c37940f54d");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5602:62165" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <WeekCalendarDefaultMarketingCalendarSection_n_5602_62166 />
        <WeekCalendarDefaultSeptember2026Section_n_5602_62167 />
        <WeekCalendarDefaultSection_n_5645_43147 />
      </main>
      {dialog_act_10a2fe67aa7b.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_10a2fe67aa7b.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_10a2fe67aa7b.close(); }}
          data-figma-dialog="act_10a2fe67aa7b"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_9608b00adea1.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_9608b00adea1.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_9608b00adea1.close(); }}
          data-figma-dialog="act_9608b00adea1"
        >
          <div
            className="relative h-full max-h-full overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <WeekCalendarAdvanceFilterModal />
          </div>
        </div>
      )}

      {dialog_act_06c37940f54d.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_06c37940f54d.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_06c37940f54d.close(); }}
          data-figma-dialog="act_06c37940f54d"
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
