/**
 * Luna generated page
 * Figma frame: 5329:12027
 * Page: my-profile
 * Route: /my-profile
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { MyProfileMarketingCalendarSection } from "./MyProfileMarketingCalendarSection";
import { MyProfileTitleRowSection } from "./MyProfileTitleRowSection";
import { MyProfileContentSection } from "./MyProfileContentSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";

export function MyProfilePage() {
  const screenData = useFigmaScreenData();
  const dialog_act_d793f4e53cd1 = useDialogState("act_d793f4e53cd1");
  const dialog_act_fb3c8e04cdf0 = useDialogState("act_fb3c8e04cdf0");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5329:12027" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <MyProfileMarketingCalendarSection />
        <MyProfileTitleRowSection />
        <MyProfileContentSection />
      </main>
      {dialog_act_fb3c8e04cdf0.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_fb3c8e04cdf0.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_fb3c8e04cdf0.close(); }}
          data-figma-dialog="act_fb3c8e04cdf0"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_d793f4e53cd1.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_d793f4e53cd1.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_d793f4e53cd1.close(); }}
          data-figma-dialog="act_d793f4e53cd1"
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
