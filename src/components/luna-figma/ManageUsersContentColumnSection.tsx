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

import { useState } from "react";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { Switch } from "@/components/ui/switch";

export function ManageUsersContentColumnSection() {
  useFigmaScreenData();
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = 3;
  const showPagination = true;
  return (
    <section data-figma-node="5359:17456" className="absolute inset-x-0 top-[169px] box-border w-full min-w-0 h-[601px] overflow-hidden flex flex-col items-start z-[2]">
<div data-spec-fills="true" className="flex h-[4px] w-full shrink-0"><span className="h-[4px] flex-1 bg-[#f5f3ff]" /><span className="h-[4px] flex-1 bg-[#f3f4f6]" /><span className="h-[4px] flex-1 bg-[#eef2ff]" /></div>
      <div data-figma-node="5359:17472" className="box-border self-stretch min-w-0 flex-1 min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5359:17487" className="box-border self-stretch min-w-0 h-auto shrink-0 overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-surface">
          <div data-figma-node="5359:17488" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-b border-[#e2d9d0] bg-color-9">
            <p data-figma-node="5359:17489" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">User Name</p>
            <p data-figma-node="5359:17490" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left text-text-primary">Email Address</p>
            <p data-figma-node="5359:17491" className="box-border w-[120px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Role</p>
            <p data-figma-node="5359:17492" className="box-border w-[140px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Last Active</p>
            <p data-figma-node="5359:17493" className="box-border w-[100px] shrink-0 h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-primary">Status</p>
          </div>
          <div data-figma-node="5359:17495" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17496" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17497" src="/assets/figma/5359-17497.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17498" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">John Doe</p>
            </div>
            <p data-figma-node="5359:17499" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">john.doe@company.com</p>
            <div data-figma-node="5359:17500" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-18">
              <p data-figma-node="5359:17501" className="box-border w-max max-w-[min(68px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-primary">Super Admin</p>
            </div>
            <p data-figma-node="5359:17502" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">2 mins ago</p>
            <div data-figma-node="5354:14408" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><Switch data-figma-node="5354:14409" aria-label="Status for John Doe" defaultChecked /></div>
          </div>
          <div data-figma-node="5359:17511" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17512" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17513" src="/assets/figma/5359-17513.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17514" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Jane Smith</p>
            </div>
            <p data-figma-node="5359:17515" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">jane.smith@company.com</p>
            <div data-figma-node="5359:17516" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-42">
              <p data-figma-node="5359:17517" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17518" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">1 hour ago</p>
            <div data-figma-node="5354:14435" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><Switch data-figma-node="5354:14436" aria-label="Status for Jane Smith" defaultChecked /></div>
          </div>
          <div data-figma-node="5359:17527" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17528" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17529" src="/assets/figma/5359-17529.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17530" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Alex Johnson</p>
            </div>
            <p data-figma-node="5359:17531" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">alex.j@company.com</p>
            <div data-figma-node="5359:17532" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-41">
              <p data-figma-node="5359:17533" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17534" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">1 day ago</p>
            <div data-figma-node="5354:14441" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><Switch data-figma-node="5354:14442" aria-label="Status for Alex Johnson" defaultChecked /></div>
          </div>
          <div data-figma-node="5359:17543" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17544" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17545" src="/assets/figma/5359-17545.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17546" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Emily Watson</p>
            </div>
            <p data-figma-node="5359:17547" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">emily.w@company.com</p>
            <div data-figma-node="5359:17548" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-42">
              <p data-figma-node="5359:17549" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17550" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">3 days ago</p>
            <div data-figma-node="5354:14453" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><Switch data-figma-node="5354:14454" aria-label="Status for Emily Watson" /></div>
          </div>
          <div data-figma-node="5359:17559" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17560" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17561" src="/assets/figma/5359-17561.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17562" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Michael Chang</p>
            </div>
            <p data-figma-node="5359:17563" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">michael.c@company.com</p>
            <div data-figma-node="5359:17564" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-50">
              <p data-figma-node="5359:17565" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17566" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">5 days ago</p>
            <div data-figma-node="5354:14459" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><Switch data-figma-node="5354:14460" aria-label="Status for Michael Chang" /></div>
          </div>
          <div data-figma-node="5359:17575" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[0px]">
            <div data-figma-node="5359:17576" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17577" src="/assets/figma/5359-17577.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17578" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Robert Taylor</p>
            </div>
            <p data-figma-node="5359:17579" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">robert.t@company.com</p>
            <div data-figma-node="5359:17580" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-41">
              <p data-figma-node="5359:17581" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17582" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">1 week ago</p>
            <div data-figma-node="5354:14465" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><Switch data-figma-node="5354:14466" aria-label="Status for Robert Taylor" defaultChecked /></div>
          </div>
        </div>
        {showPagination ? (
        <div data-figma-node="5359:17591" data-figma-pagination="true" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5359:17592" className="box-border w-max max-w-[min(145px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-secondary">Showing 1-6 of 18 users</p>
          <div data-figma-node="5359:17593" data-figma-pagination="true" className="box-border w-max max-w-[min(173px,100%)] h-auto relative flex flex-row items-start gap-1.5">
            <div data-figma-node="5359:17594" role="button" tabIndex={0} onClick={() => setCurrentPage((page) => Math.max(1, page - 1))} className="box-border w-max max-w-[min(47px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface">
              <p data-figma-node="5359:17595" className="box-border w-max max-w-[min(27px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Prev</p>
            </div>
            <div data-figma-node="5359:17596" role="button" tabIndex={0} onClick={() => setCurrentPage(1)} className={currentPage === 1 ? "box-border w-max max-w-[min(29px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-primary" : "box-border w-max max-w-[min(29px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-surface"}>
              <p data-figma-node="5359:17597" className={currentPage === 1 ? "box-border w-max max-w-[min(5px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-surface" : "box-border w-max max-w-[min(5px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary"}>1</p>
            </div>
            {pageCount >= 2 ? (
            <div data-figma-node="5359:17598" role="button" tabIndex={0} onClick={() => setCurrentPage(2)} className={currentPage === 2 ? "box-border w-max max-w-[min(31px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-primary" : "box-border w-max max-w-[min(31px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-surface"}>
              <p data-figma-node="5359:17599" className={currentPage === 2 ? "box-border w-max max-w-[min(7px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-surface" : "box-border w-max max-w-[min(7px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary"}>2</p>
            </div>
            ) : null}
            <div data-figma-node="5359:17600" role="button" tabIndex={0} onClick={() => setCurrentPage((page) => Math.min(pageCount, page + 1))} className="box-border w-max max-w-[min(48px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface">
              <p data-figma-node="5359:17601" className="box-border w-max max-w-[min(28px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Next</p>
            </div>
          </div>
        </div>
        ) : null}
      </div>
    </section>
  );
}
