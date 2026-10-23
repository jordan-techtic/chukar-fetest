/**
 * Luna generated layout
 * Figma node: 5359:17456
 * Section: Content Column
 * Route: /manage-users
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { useCallback, useState } from "react";
import { toast } from "sonner";

import { patchUserActive, axiosErrorResult } from "@/lib/api/users";
import {
  figmaItemProps,
  figmaManageUsersRowUser,
  figmaTextContent,
  useFigmaPayloadVersion,
} from "./figmaDisplay";
import { useFigmaScreenData } from "./useFigmaScreenData";

function userIdFromRow(rowNodeId: string): string | null {
  const user = figmaManageUsersRowUser(rowNodeId);
  if (!user) {
    return null;
  }
  const id = user.id ?? user.user_id;
  if (typeof id === "string" && id.trim()) {
    return id.trim();
  }
  if (typeof id === "number") {
    return String(id);
  }
  return null;
}

function useRowStatusToggle(rowNodeId: string) {
  const { loadReads, loadingReads } = useFigmaScreenData();
  const [saving, setSaving] = useState(false);
  const user = figmaManageUsersRowUser(rowNodeId);
  const isActive = user?.is_active !== false;
  const toggle = useCallback(async () => {
    const userId = userIdFromRow(rowNodeId);
    if (!userId || saving || loadingReads) {
      return;
    }
    const nextActive = !isActive;
    setSaving(true);
    try {
      await patchUserActive(userId, { is_active: nextActive });
      toast.success(nextActive ? "User activated." : "User deactivated.");
      await loadReads();
    } catch (error) {
      const result = axiosErrorResult(error);
      toast.error(
        result.status === 0 ? "Could not update user status." : "Failed to update user status.",
      );
    } finally {
      setSaving(false);
    }
  }, [isActive, loadReads, loadingReads, rowNodeId, saving]);

  return {
    toggle,
    disabled: saving || loadingReads || !userIdFromRow(rowNodeId),
    ariaLabel: `Toggle status for ${typeof user?.display_name === "string" ? user.display_name : "user"}`,
  };
}

function RowStatusSwitch({
  rowNodeId,
  children,
}: {
  rowNodeId: string;
  children: React.ReactNode;
}) {
  const { toggle, disabled, ariaLabel } = useRowStatusToggle(rowNodeId);
  const isActive = figmaManageUsersRowUser(rowNodeId)?.is_active !== false;
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={isActive}
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        void toggle();
      }}
      className="inline-flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50"
    >
      {children}
    </button>
  );
}

export function ManageUsersContentColumnSection() {
  useFigmaPayloadVersion();
  const { totalPages, currentPage, setCurrentPage, loadingReads } = useFigmaScreenData();
  const showPagination = totalPages !== null && totalPages > 1;
  return (
    <section data-figma-node="5359:17456" className="relative box-border w-full min-w-0 box-border h-[601px] overflow-hidden flex flex-col items-start z-[2]">
      <div data-figma-node="5359:17472" className="box-border self-stretch min-w-0 flex-1 min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5359:17487" className="box-border self-stretch min-w-0 h-auto shrink-0 overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-surface">
          <div data-figma-node="5359:17488" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-b border-[#e2d9d0] bg-color-9">
            <p data-figma-node="5359:17489" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">User Name</p>
            <p data-figma-node="5359:17490" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Email Address</p>
            <p data-figma-node="5359:17491" className="box-border w-[120px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Role</p>
            <p data-figma-node="5359:17492" className="box-border w-[140px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Last Active</p>
            <p data-figma-node="5359:17493" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Status</p>
          </div>
          <div data-figma-node="5359:17495" {...figmaItemProps("5359:17495")} className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17496" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17497" src="/assets/figma/5359-17497.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17498" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">{figmaTextContent("5359:17498", "John Doe")}</p>
            </div>
            <p data-figma-node="5359:17499" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">{figmaTextContent("5359:17499", "john.doe@company.com")}</p>
            <div data-figma-node="5359:17500" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-18">
              <p data-figma-node="5359:17501" className="box-border w-max max-w-[min(68px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-primary">{figmaTextContent("5359:17501", "Super Admin")}</p>
            </div>
            <p data-figma-node="5359:17502" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">{figmaTextContent("5359:17502", "2 mins ago")}</p>
            <div data-figma-node="5354:14408" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><RowStatusSwitch rowNodeId="5359:17495"><div data-figma-node="5354:14409" data-figma-component="5111:12391" className="box-border w-max max-w-[min(28px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5 bg-primary">
  <div data-figma-node="I5354:14409;315:8655" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14409;315:8656" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14409;315:8657" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></RowStatusSwitch></div>
          </div>
          <div data-figma-node="5359:17511" {...figmaItemProps("5359:17511")} className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17512" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17513" src="/assets/figma/5359-17513.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17514" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">{figmaTextContent("5359:17514", "Jane Smith")}</p>
            </div>
            <p data-figma-node="5359:17515" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">{figmaTextContent("5359:17515", "jane.smith@company.com")}</p>
            <div data-figma-node="5359:17516" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-42">
              <p data-figma-node="5359:17517" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">{figmaTextContent("5359:17517", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17518" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">{figmaTextContent("5359:17518", "1 hour ago")}</p>
            <div data-figma-node="5354:14435" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><RowStatusSwitch rowNodeId="5359:17511"><div data-figma-node="5354:14436" data-figma-component="5111:12391" className="box-border w-max max-w-[min(28px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5 bg-primary">
  <div data-figma-node="I5354:14436;315:8655" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14436;315:8656" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14436;315:8657" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></RowStatusSwitch></div>
          </div>
          <div data-figma-node="5359:17527" {...figmaItemProps("5359:17527")} className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17528" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17529" src="/assets/figma/5359-17529.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17530" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">{figmaTextContent("5359:17530", "Alex Johnson")}</p>
            </div>
            <p data-figma-node="5359:17531" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">{figmaTextContent("5359:17531", "alex.j@company.com")}</p>
            <div data-figma-node="5359:17532" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-41">
              <p data-figma-node="5359:17533" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">{figmaTextContent("5359:17533", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17534" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">{figmaTextContent("5359:17534", "1 day ago")}</p>
            <div data-figma-node="5354:14441" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><RowStatusSwitch rowNodeId="5359:17527"><div data-figma-node="5354:14442" data-figma-component="5111:12391" className="box-border w-max max-w-[min(28px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5 bg-primary">
  <div data-figma-node="I5354:14442;315:8655" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14442;315:8656" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14442;315:8657" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></RowStatusSwitch></div>
          </div>
          <div data-figma-node="5359:17543" {...figmaItemProps("5359:17543")} className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17544" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17545" src="/assets/figma/5359-17545.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17546" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">{figmaTextContent("5359:17546", "Emily Watson")}</p>
            </div>
            <p data-figma-node="5359:17547" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">{figmaTextContent("5359:17547", "emily.w@company.com")}</p>
            <div data-figma-node="5359:17548" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-42">
              <p data-figma-node="5359:17549" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">{figmaTextContent("5359:17549", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17550" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">{figmaTextContent("5359:17550", "3 days ago")}</p>
            <div data-figma-node="5354:14453" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><RowStatusSwitch rowNodeId="5359:17543"><div data-figma-node="5354:14454" data-figma-component="5111:12395" className="box-border w-max max-w-[min(28px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14454;315:8184" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14454;315:8185" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14454;315:8186" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></RowStatusSwitch></div>
          </div>
          <div data-figma-node="5359:17559" {...figmaItemProps("5359:17559")} className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17560" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17561" src="/assets/figma/5359-17561.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17562" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">{figmaTextContent("5359:17562", "Michael Chang")}</p>
            </div>
            <p data-figma-node="5359:17563" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">{figmaTextContent("5359:17563", "michael.c@company.com")}</p>
            <div data-figma-node="5359:17564" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-50">
              <p data-figma-node="5359:17565" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">{figmaTextContent("5359:17565", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17566" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">{figmaTextContent("5359:17566", "5 days ago")}</p>
            <div data-figma-node="5354:14459" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><RowStatusSwitch rowNodeId="5359:17559"><div data-figma-node="5354:14460" data-figma-component="5111:12395" className="box-border w-max max-w-[min(28px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14460;315:8184" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14460;315:8185" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14460;315:8186" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></RowStatusSwitch></div>
          </div>
          <div data-figma-node="5359:17575" {...figmaItemProps("5359:17575")} className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[0px]">
            <div data-figma-node="5359:17576" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17577" src="/assets/figma/5359-17577.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17578" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">{figmaTextContent("5359:17578", "Robert Taylor")}</p>
            </div>
            <p data-figma-node="5359:17579" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">{figmaTextContent("5359:17579", "robert.t@company.com")}</p>
            <div data-figma-node="5359:17580" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-41">
              <p data-figma-node="5359:17581" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">{figmaTextContent("5359:17581", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17582" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">{figmaTextContent("5359:17582", "1 week ago")}</p>
            <div data-figma-node="5354:14465" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><RowStatusSwitch rowNodeId="5359:17575"><div data-figma-node="5354:14466" data-figma-component="5111:12391" className="box-border w-max max-w-[min(28px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5 bg-primary">
  <div data-figma-node="I5354:14466;315:8655" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14466;315:8656" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14466;315:8657" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></RowStatusSwitch></div>
          </div>
        </div>
        {showPagination ? (
        <div data-figma-node="5359:17591" data-figma-pagination="true" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5359:17592" className="box-border w-max max-w-[min(145px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-secondary">Showing 1-6 of 18 users</p>
          <div data-figma-node="5359:17593" data-figma-pagination="true" className="box-border w-max max-w-[min(173px,100%)] h-auto relative flex flex-row items-start gap-1.5">
            <button type="button" data-figma-node="5359:17594" onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} className="box-border w-max max-w-[min(47px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface cursor-pointer">
              <p data-figma-node="5359:17595" className="box-border w-max max-w-[min(27px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Prev</p>
            </button>
            {Array.from({ length: totalPages ?? 0 }, (_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  type="button"
                  data-figma-node={page === 1 ? "5359:17596" : "5359:17598"}
                  onClick={() => setCurrentPage(page)}
                  className={
                    isActive
                      ? "box-border w-max max-w-[min(29px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-primary cursor-pointer"
                      : "box-border w-max max-w-[min(31px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-surface cursor-pointer"
                  }
                >
                  <p
                    data-figma-node={page === 1 ? "5359:17597" : "5359:17599"}
                    className={
                      isActive
                        ? "box-border w-max max-w-[min(5px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-surface"
                        : "box-border w-max max-w-[min(7px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary"
                    }
                  >
                    {page}
                  </p>
                </button>
              );
            })}
            <button type="button" data-figma-node="5359:17600" onClick={() => setCurrentPage((p) => p + 1)} className="box-border w-max max-w-[min(48px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface cursor-pointer">
              <p data-figma-node="5359:17601" className="box-border w-max max-w-[min(28px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Next</p>
            </button>
          </div>
        </div>
        ) : null}
      </div>
    </section>
  );
}
