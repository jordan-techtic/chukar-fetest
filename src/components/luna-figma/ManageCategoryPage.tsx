/**
 * Luna generated page
 * Figma frame: 5449:19126
 * Page: manage-category
 * Route: /manage-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { ManageCategoryMarketingCalendarSection } from "./ManageCategoryMarketingCalendarSection";
import { ManageCategoryTitleRowSection } from "./ManageCategoryTitleRowSection";
import { ManageCategoryContentColumnSection } from "./ManageCategoryContentColumnSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { AddCategoryModal } from "./AddCategoryModal";

export function ManageCategoryPage() {
  const screenData = useFigmaScreenData();
  const { mutationError } = screenData;
  const dialog_act_302ca0c59c1b = useDialogState("act_302ca0c59c1b");
  const dialog_act_9c6be34838f4 = useDialogState("act_9c6be34838f4");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5449:19126" className="relative flex min-h-screen w-full min-w-0 flex-col overflow-x-clip bg-background">
      <div className="sr-only" aria-live="polite">
        {mutationError ? mutationError : null}
      </div>
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <ManageCategoryMarketingCalendarSection />
        <ManageCategoryTitleRowSection />
        <ManageCategoryContentColumnSection />
      </main>
      {dialog_act_302ca0c59c1b.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_302ca0c59c1b.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_302ca0c59c1b.close(); }}
          data-figma-dialog="act_302ca0c59c1b"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_9c6be34838f4.isOpen && (
        <div
          data-figma-node="5449:19238"
          className="fixed inset-0 z-[9999] box-border flex items-center justify-center bg-[rgba(26,32,44,0.584)] pt-[130px] pr-[460px] pb-[130px] pl-[460px]"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_9c6be34838f4.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_9c6be34838f4.close(); }}
          data-figma-dialog="act_9c6be34838f4"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AddCategoryModal />
          </div>
        </div>
      )}
    </div>
  );
}
