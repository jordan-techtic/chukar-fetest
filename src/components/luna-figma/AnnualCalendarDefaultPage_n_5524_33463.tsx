/**
 * Luna generated page
 * Figma frame: 5524:33463
 * Page: annual-calendar-default
 * Route: /annual-calendar-default-1
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { AnnualCalendarDefaultMarketingCalendarSection_n_5524_33464 } from "./AnnualCalendarDefaultMarketingCalendarSection_n_5524_33464";
import { AnnualCalendarDefaultN20252026Section_n_5524_33465 } from "./AnnualCalendarDefaultN20252026Section_n_5524_33465";
import { AnnualCalendarDefaultSection_n_5645_47546 } from "./AnnualCalendarDefaultSection_n_5645_47546";
import { AnnualCalendarDefaultProfileCardSection_n_5645_60695 } from "./AnnualCalendarDefaultProfileCardSection_n_5645_60695";
import { WeekCalendarAdvanceFilterModal } from "./WeekCalendarAdvanceFilterModal";

export function AnnualCalendarDefaultPage_n_5524_33463() {
  const screenData = useFigmaScreenData();
  const dialog_act_6f091ccd1e51 = useDialogState("act_6f091ccd1e51");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5524:33463" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <AnnualCalendarDefaultMarketingCalendarSection_n_5524_33464 />
        <AnnualCalendarDefaultN20252026Section_n_5524_33465 />
        <div className="flex w-full min-w-0 flex-col items-start md:flex-row">
        <AnnualCalendarDefaultSection_n_5645_47546 />
        <AnnualCalendarDefaultProfileCardSection_n_5645_60695 />
        </div>
      </main>
      {dialog_act_6f091ccd1e51.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_6f091ccd1e51.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_6f091ccd1e51.close(); }}
          data-figma-dialog="act_6f091ccd1e51"
        >
          <div
            className="relative h-full max-h-full overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <WeekCalendarAdvanceFilterModal />
          </div>
        </div>
      )}
    </div>
  );
}
