/**
 * Luna generated page
 * Figma frame: 5359:17106
 * Page: manage-activity
 * Route: /manage-activity
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { ManageActivityMarketingCalendarSection } from "./ManageActivityMarketingCalendarSection";
import { ManageActivityTitleRowSection } from "./ManageActivityTitleRowSection";
import { ManageActivityContentColumnSection } from "./ManageActivityContentColumnSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { CreateActivityTypeModal } from "./CreateActivityTypeModal";

export function ManageActivityPage() {
  const screenData = useFigmaScreenData();
  const dialog_act_ba35eb2255f6 = useDialogState("act_ba35eb2255f6");
  const dialog_act_3e47c2f5e482 = useDialogState("act_3e47c2f5e482");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5359:17106" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <ManageActivityMarketingCalendarSection />
        <ManageActivityTitleRowSection />
        <ManageActivityContentColumnSection />
      </main>
      {dialog_act_ba35eb2255f6.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_ba35eb2255f6.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_ba35eb2255f6.close(); }}
          data-figma-dialog="act_ba35eb2255f6"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_3e47c2f5e482.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_3e47c2f5e482.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_3e47c2f5e482.close(); }}
          data-figma-dialog="act_3e47c2f5e482"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <CreateActivityTypeModal />
          </div>
        </div>
      )}
    </div>
  );
}
