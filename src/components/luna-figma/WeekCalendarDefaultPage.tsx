/**
 * Luna generated page
 * Figma frame: 5602:62165
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
import { WeekCalendarDefaultMarketingCalendarSection } from "./WeekCalendarDefaultMarketingCalendarSection";
import { WeekCalendarDefaultSeptember2026Section } from "./WeekCalendarDefaultSeptember2026Section";
import { WeekCalendarDefaultSection_n_5645_43147 } from "./WeekCalendarDefaultSection_n_5645_43147";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";

export function WeekCalendarDefaultPage() {
  const screenData = useFigmaScreenData();
  const dialog_act_10a2fe67aa7b = useDialogState("act_10a2fe67aa7b");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5602:62165" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <WeekCalendarDefaultMarketingCalendarSection />
        <WeekCalendarDefaultSeptember2026Section />
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
    </div>
  );
}
