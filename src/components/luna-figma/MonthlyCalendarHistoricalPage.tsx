/**
 * Luna generated page
 * Figma frame: 5645:33753
 * Page: Monthly-calendar-Historical view
 * Route: /monthly-calendar-historical-view
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { MonthlyCalendarHistoricaMarketingCalendarSection } from "./MonthlyCalendarHistoricaMarketingCalendarSection";
import { MonthlyCalendarHistoricaN20252026Section } from "./MonthlyCalendarHistoricaN20252026Section";
import { MonthlyCalendarHistoricaContactSection } from "./MonthlyCalendarHistoricaContactSection";
import { AnnualCalendarDefaultModal } from "./AnnualCalendarDefaultModal";

export function MonthlyCalendarHistoricalPage() {
  const screenData = useFigmaScreenData();
  const dialog_act_adaa474f5484 = useDialogState("act_adaa474f5484");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5645:33753" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <MonthlyCalendarHistoricaMarketingCalendarSection />
        <MonthlyCalendarHistoricaN20252026Section />
        <MonthlyCalendarHistoricaContactSection />
      </main>
      {dialog_act_adaa474f5484.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-stretch justify-end" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_adaa474f5484.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_adaa474f5484.close(); }}
          data-figma-dialog="act_adaa474f5484"
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
