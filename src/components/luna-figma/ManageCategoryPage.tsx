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

import { useEffect, useRef } from "react";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { ManageCategoryMarketingCalendarSection } from "./ManageCategoryMarketingCalendarSection";
import { ManageCategoryTitleRowSection } from "./ManageCategoryTitleRowSection";
import { ManageCategoryContentColumnSection } from "./ManageCategoryContentColumnSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { AddCategoryModal } from "./AddCategoryModal";

function focusableElements(root: HTMLElement): HTMLElement[] {
  return [
    ...root.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
    ),
  ].filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
}

export function ManageCategoryPage() {
  const { bound, closeCategoryModal } = useFigmaScreenData();
  const dialog_act_302ca0c59c1b = useDialogState("act_302ca0c59c1b");
  const dialog_act_9c6be34838f4 = useDialogState("act_9c6be34838f4");
  const categoryDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dialog_act_9c6be34838f4.isOpen) {
      return;
    }
    const root = categoryDialogRef.current;
    if (!root) {
      return;
    }
    const nodes = focusableElements(root);
    nodes[0]?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeCategoryModal();
        return;
      }
      if (event.key !== "Tab") {
        return;
      }
      const focusables = focusableElements(root);
      if (focusables.length === 0) {
        return;
      }
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    root.addEventListener("keydown", onKeyDown);
    return () => root.removeEventListener("keydown", onKeyDown);
  }, [dialog_act_9c6be34838f4.isOpen, closeCategoryModal]);

  return (
    <div data-figma-bound={bound}
      data-figma-frame="5449:19126" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
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
          className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="category-modal-title"
          tabIndex={-1}
          ref={categoryDialogRef}
          onClick={() => closeCategoryModal()}
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
