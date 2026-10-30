/**
 * Luna generated page
 * Figma frame: 5359:17424
 * Page: manage-users
 * Route: /marketing-team-member-manage-users
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { ManageUsersMarketingCalendarSection } from "./ManageUsersMarketingCalendarSection";
import { ManageUsersTitleRowSection } from "./ManageUsersTitleRowSection";
import { ManageUsersContentColumnSection } from "./ManageUsersContentColumnSection";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { InviteUserModal } from "./InviteUserModal";

export function ManageUsersPage() {
  const screenData = useFigmaScreenData();
  const dialog_act_b05a5772e3b4 = useDialogState("act_b05a5772e3b4");
  const dialog_act_b53969b2b08b = useDialogState("act_b53969b2b08b");
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5359:17424" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <ManageUsersMarketingCalendarSection />
        <ManageUsersTitleRowSection />
        <ManageUsersContentColumnSection />
      </main>
      {dialog_act_b05a5772e3b4.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_b05a5772e3b4.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_b05a5772e3b4.close(); }}
          data-figma-dialog="act_b05a5772e3b4"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_b53969b2b08b.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ backgroundColor: "rgba(26, 32, 44, 0.584)" }}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_b53969b2b08b.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_b53969b2b08b.close(); }}
          data-figma-dialog="act_b53969b2b08b"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <InviteUserModal />
          </div>
        </div>
      )}
    </div>
  );
}
