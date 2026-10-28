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

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { ManageHolidayMarketingCalendarSection } from "./ManageHolidayMarketingCalendarSection";
import { ManageHolidayTitleRowSection } from "./ManageHolidayTitleRowSection";
import { ManageHolidayContentColumnSection } from "./ManageHolidayContentColumnSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { AddHolidayModal } from "./AddHolidayModal";

export function ManageHolidayPage() {
  const screenData = useFigmaScreenData();
  const dialog_act_0e7f4be472d9 = useDialogState("act_0e7f4be472d9");
  const dialog_act_8e0ab36f39bd = useDialogState("act_8e0ab36f39bd");
  return (
    <div data-figma-bound={screenData.bound}
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
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_8e0ab36f39bd.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_8e0ab36f39bd.close(); }}
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
    </div>
  );
}
