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

import { useFigmaScreenData } from "./useFigmaScreenData";

export function ManageUsersContentColumnSection() {
  const { currentPage, setCurrentPage, totalPages, users, toggleUserActive } =
    useFigmaScreenData();
  const showPagination =
    totalPages !== undefined && totalPages > 1;

  const onStatusToggle = (rowIndex: number) => () => {
    const user = users[rowIndex];
    if (!user?.id) {
      return;
    }
    void toggleUserActive(user.id, !user.is_active);
  };
  return (
    <section data-figma-node="5359:17456" className="box-border overflow-hidden h-[601px] relative box-border w-full min-w-0  flex flex-col items-start z-[2]">
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
              <p data-figma-node="5359:17501" className="box-border w-max max-w-[min(72px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-primary">Super Admin</p>
            </div>
            <p data-figma-node="5359:17502" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">2 mins ago</p>
            <div data-figma-node="5354:14408" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><button type="button" aria-label="Switch" onClick={onStatusToggle(0)} className="inline-flex items-center justify-center"><div data-figma-node="5354:14409" data-figma-component="5111:12391" className="box-border w-max max-w-[min(32px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5 bg-primary">
  <div data-figma-node="I5354:14409;315:8655" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14409;315:8656" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14409;315:8657" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17511" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17512" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17513" src="/assets/figma/5359-17513.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17514" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Jane Smith</p>
            </div>
            <p data-figma-node="5359:17515" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">jane.smith@company.com</p>
            <div data-figma-node="5359:17516" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-42">
              <p data-figma-node="5359:17517" className="box-border w-max max-w-[min(38px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17518" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">1 hour ago</p>
            <div data-figma-node="5354:14435" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><button type="button" aria-label="Switch" onClick={onStatusToggle(1)} className="inline-flex items-center justify-center"><div data-figma-node="5354:14436" data-figma-component="5111:12391" className="box-border w-max max-w-[min(32px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5 bg-primary">
  <div data-figma-node="I5354:14436;315:8655" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14436;315:8656" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14436;315:8657" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17527" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17528" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17529" src="/assets/figma/5359-17529.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17530" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Alex Johnson</p>
            </div>
            <p data-figma-node="5359:17531" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">alex.j@company.com</p>
            <div data-figma-node="5359:17532" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-41">
              <p data-figma-node="5359:17533" className="box-border w-max max-w-[min(38px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17534" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">1 day ago</p>
            <div data-figma-node="5354:14441" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><button type="button" aria-label="Switch" onClick={onStatusToggle(2)} className="inline-flex items-center justify-center"><div data-figma-node="5354:14442" data-figma-component="5111:12391" className="box-border w-max max-w-[min(32px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5 bg-primary">
  <div data-figma-node="I5354:14442;315:8655" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14442;315:8656" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14442;315:8657" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17543" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17544" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17545" src="/assets/figma/5359-17545.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17546" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Emily Watson</p>
            </div>
            <p data-figma-node="5359:17547" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">emily.w@company.com</p>
            <div data-figma-node="5359:17548" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-42">
              <p data-figma-node="5359:17549" className="box-border w-max max-w-[min(38px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17550" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">3 days ago</p>
            <div data-figma-node="5354:14453" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><button type="button" aria-label="Switch" onClick={onStatusToggle(3)} className="inline-flex items-center justify-center"><div data-figma-node="5354:14454" data-figma-component="5111:12395" className="box-border w-max max-w-[min(32px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14454;315:8184" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14454;315:8185" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14454;315:8186" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17559" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-b border-[#e2d9d0]">
            <div data-figma-node="5359:17560" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17561" src="/assets/figma/5359-17561.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17562" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Michael Chang</p>
            </div>
            <p data-figma-node="5359:17563" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">michael.c@company.com</p>
            <div data-figma-node="5359:17564" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-50">
              <p data-figma-node="5359:17565" className="box-border w-max max-w-[min(38px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17566" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">5 days ago</p>
            <div data-figma-node="5354:14459" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><button type="button" aria-label="Switch" onClick={onStatusToggle(4)} className="inline-flex items-center justify-center"><div data-figma-node="5354:14460" data-figma-component="5111:12395" className="box-border w-max max-w-[min(32px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14460;315:8184" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14460;315:8185" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14460;315:8186" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17575" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[0px]">
            <div data-figma-node="5359:17576" className="box-border flex-1 min-w-0 h-auto relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17577" src="/assets/figma/5359-17577.png" alt="avatar" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17578" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left text-text-primary">Robert Taylor</p>
            </div>
            <p data-figma-node="5359:17579" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left text-text-secondary">robert.t@company.com</p>
            <div data-figma-node="5359:17580" className="box-border w-[120px] shrink-0 h-auto rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-color-41">
              <p data-figma-node="5359:17581" className="box-border w-max max-w-[min(38px,100%)] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-color-22">Admin</p>
            </div>
            <p data-figma-node="5359:17582" className="box-border w-[140px] shrink-0 h-auto min-h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-secondary">1 week ago</p>
            <div data-figma-node="5354:14465" className="box-border w-[100px] shrink-0 h-auto flex flex-row items-center"><button type="button" aria-label="Switch" onClick={onStatusToggle(5)} className="inline-flex items-center justify-center"><div data-figma-node="5354:14466" data-figma-component="5111:12391" className="box-border w-max max-w-[min(32px,100%)] h-auto rounded-[20px] relative flex flex-row items-center gap-0.5 bg-primary">
  <div data-figma-node="I5354:14466;315:8655" className="box-border w-[28px] shrink-0 h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5354:14466;315:8656" className="box-border w-[12px] shrink-0 h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14466;315:8657" className="box-border h-[12px] absolute left-[0px] rounded-[16px] right-[0px] w-auto top-[calc(50%+0px)] -translate-y-1/2 block bg-surface"></div>
    </div>
  </div>
</div></button></div>
          </div>
        </div>
        {showPagination ? (
        <div data-figma-node="5359:17591" data-figma-pagination="true" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5359:17592" className="box-border w-max max-w-[min(149px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-secondary">Showing 1-6 of 18 users</p>
          <div data-figma-node="5359:17593" data-figma-pagination="true" className="box-border w-max max-w-[min(177px,100%)] h-auto relative flex flex-row items-start gap-1.5">
            <button type="button" data-figma-node="5359:17594" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="box-border w-max max-w-[min(51px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface">
              <p data-figma-node="5359:17595" className="box-border w-max max-w-[min(31px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Prev</p>
            </button>
            {Array.from({ length: totalPages! }, (_, i) => i + 1).map(page => (
            <button
              key={page}
              type="button"
              data-figma-node={page === 1 ? "5359:17596" : "5359:17598"}
              onClick={() => setCurrentPage(page)}
              className={
                page === currentPage
                  ? "box-border w-max max-w-[min(33px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-primary"
                  : "box-border w-max max-w-[min(35px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-surface"
              }
            >
              <p
                data-figma-node={page === 1 ? "5359:17597" : "5359:17599"}
                className={
                  page === currentPage
                    ? "box-border w-max max-w-[min(9px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-surface"
                    : "box-border w-max max-w-[min(11px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary"
                }
              >
                {page}
              </p>
            </button>
            ))}
            <button type="button" data-figma-node="5359:17600" onClick={() => setCurrentPage(p => p + 1)} className="box-border w-max max-w-[min(52px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface">
              <p data-figma-node="5359:17601" className="box-border w-max max-w-[min(32px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-primary">Next</p>
            </button>
          </div>
        </div>
        ) : null}
      </div>
    </section>
  );
}
