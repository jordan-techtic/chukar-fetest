/**
 * Luna generated page
 * Figma frame: 5584:26945
 * Page: Week-calendar-Historical view
 * Route: /week-calendar-historical-view
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { FigmaFrameScale } from "./FigmaFrameScale";
import { WeekCalendarHistoricalMarketingCalendarSection } from "./WeekCalendarHistoricalMarketingCalendarSection";
import { WeekCalendarHistoricalN20252026Section } from "./WeekCalendarHistoricalN20252026Section";
import { WeekCalendarHistoricalSection_n_5645_47545 } from "./WeekCalendarHistoricalSection_n_5645_47545";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { WeekCalendarAdvanceFilterModal } from "./WeekCalendarAdvanceFilterModal";
import { AnnualCalendarDefaultModal } from "./AnnualCalendarDefaultModal";

export function WeekCalendarHistoricalPage() {
  const screenData = useFigmaScreenData();
  const dialog_act_a268edc2f554 = useDialogState("act_a268edc2f554");
  const dialog_act_5d3bddc2d00c = useDialogState("act_5d3bddc2d00c");
  const dialog_act_6441534980cd = useDialogState("act_6441534980cd");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5584:26945" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <FigmaFrameScale>
      <main id="main-content" className="relative flex w-full min-w-0 flex-1 flex-col">
        <WeekCalendarHistoricalMarketingCalendarSection />
        <WeekCalendarHistoricalN20252026Section />
        <WeekCalendarHistoricalSection_n_5645_47545 />
      </main>
      </FigmaFrameScale>
      {dialog_act_a268edc2f554.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_a268edc2f554.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_a268edc2f554.close(); }}
          data-figma-dialog="act_a268edc2f554"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_5d3bddc2d00c.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_5d3bddc2d00c.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_5d3bddc2d00c.close(); }}
          data-figma-dialog="act_5d3bddc2d00c"
        >
          <div
            className="relative h-full max-h-full overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <WeekCalendarAdvanceFilterModal />
          </div>
        </div>
      )}

      {dialog_act_6441534980cd.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_6441534980cd.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_6441534980cd.close(); }}
          data-figma-dialog="act_6441534980cd"
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
