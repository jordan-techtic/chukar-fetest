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

import { ActiveFalseSizeDefault_e6eaad3f } from "./ActiveFalseSizeDefault_e6eaad3f";
import { ActiveTrueSizeDefault_ddd4f79d } from "./ActiveTrueSizeDefault_ddd4f79d";
import { useFigmaPagination } from "./useFigmaScreenData";
export function ManageUsersContentColumnSection() {
  const { setCurrentPage, goPrev, goNext, isActive } = useFigmaPagination(10);
  return (
    <section data-figma-node="5359:17456" className="absolute box-border left-[0px] top-[169px] w-full min-w-0 h-[601px] [--fx:0] [--fww:1440] flex flex-col items-start z-[2]">
      <div data-figma-node="5359:17472" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5359:17487" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-background-2">
          <div data-figma-node="5359:17488" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-[#e2d9d0] border-[1px] bg-background-tinted-6">
            <p data-figma-node="5359:17489" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">User Name</p>
            <p data-figma-node="5359:17490" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Email Address</p>
            <p data-figma-node="5359:17491" className="box-border w-[120px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Role</p>
            <p data-figma-node="5359:17492" className="box-border w-[140px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Last Active</p>
            <p data-figma-node="5359:17493" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Status</p>
          </div>
          <div data-figma-node="5359:17495" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17496" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17497" src="/assets/figma/5359-17497.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17498" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">John Doe</p>
            </div>
            <p data-figma-node="5359:17499" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">john.doe@company.com</p>
            <div data-figma-node="5359:17500" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-9">
              <p data-figma-node="5359:17501" className="box-border w-max max-w-[68px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-brand-primary-1">Super Admin</p>
            </div>
            <p data-figma-node="5359:17502" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">2 mins ago</p>
            <div data-figma-node="5354:14408" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5354:14409" data-figma-component="5111:12391" className="relative" />
            </div>
          </div>
          <div data-figma-node="5359:17511" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17512" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17513" src="/assets/figma/5359-17513.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17514" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">Jane Smith</p>
            </div>
            <p data-figma-node="5359:17515" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">jane.smith@company.com</p>
            <div data-figma-node="5359:17516" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-4">
              <p data-figma-node="5359:17517" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted">Admin</p>
            </div>
            <p data-figma-node="5359:17518" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">1 hour ago</p>
            <div data-figma-node="5354:14435" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5354:14436" data-figma-component="5111:12391" className="relative" />
            </div>
          </div>
          <div data-figma-node="5359:17527" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17528" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17529" src="/assets/figma/5359-17529.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17530" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">Alex Johnson</p>
            </div>
            <p data-figma-node="5359:17531" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">alex.j@company.com</p>
            <div data-figma-node="5359:17532" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background">
              <p data-figma-node="5359:17533" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted">Admin</p>
            </div>
            <p data-figma-node="5359:17534" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">1 day ago</p>
            <div data-figma-node="5354:14441" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5354:14442" data-figma-component="5111:12391" className="relative" />
            </div>
          </div>
          <div data-figma-node="5359:17543" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17544" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17545" src="/assets/figma/5359-17545.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17546" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">Emily Watson</p>
            </div>
            <p data-figma-node="5359:17547" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">emily.w@company.com</p>
            <div data-figma-node="5359:17548" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-4">
              <p data-figma-node="5359:17549" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted">Admin</p>
            </div>
            <p data-figma-node="5359:17550" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">3 days ago</p>
            <div data-figma-node="5354:14453" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveFalseSizeDefault_e6eaad3f data-figma-node="5354:14454" data-figma-component="5111:12395" className="relative" />
            </div>
          </div>
          <div data-figma-node="5359:17559" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17560" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17561" src="/assets/figma/5359-17561.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17562" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">Michael Chang</p>
            </div>
            <p data-figma-node="5359:17563" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">michael.c@company.com</p>
            <div data-figma-node="5359:17564" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-1">
              <p data-figma-node="5359:17565" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted">Admin</p>
            </div>
            <p data-figma-node="5359:17566" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">5 days ago</p>
            <div data-figma-node="5354:14459" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveFalseSizeDefault_e6eaad3f data-figma-node="5354:14460" data-figma-component="5111:12395" className="relative" />
            </div>
          </div>
          <div data-figma-node="5359:17575" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[0px]">
            <div data-figma-node="5359:17576" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17577" src="/assets/figma/5359-17577.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17578" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">Robert Taylor</p>
            </div>
            <p data-figma-node="5359:17579" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">robert.t@company.com</p>
            <div data-figma-node="5359:17580" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background">
              <p data-figma-node="5359:17581" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted">Admin</p>
            </div>
            <p data-figma-node="5359:17582" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">1 week ago</p>
            <div data-figma-node="5354:14465" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5354:14466" data-figma-component="5111:12391" className="relative" />
            </div>
          </div>
        </div>
        <div data-figma-node="5359:17591" data-figma-pagination="true" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5359:17592" className="box-border w-max max-w-[145px] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-muted-1">Showing 1-6 of 18 users</p>
          <div data-figma-node="5359:17593" data-figma-pagination="true" className="box-border w-max max-w-[173px] h-[27px] relative flex flex-row items-start gap-1.5">
            <button data-figma-node="5359:17594" type="button" onClick={goPrev} className="box-border w-max max-w-[47px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer">
              <p data-figma-node="5359:17595" className="box-border w-max max-w-[27px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Prev</p>
            </button>
            <button data-figma-node="5359:17596" type="button" onClick={() => setCurrentPage(1)} className={isActive(1) ? "box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-brand-primary-1 cursor-pointer" : "box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer"}>
              <p data-figma-node="5359:17597" className={isActive(1) ? "box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-background-2" : "box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1"}>1</p>
            </button>
            <button data-figma-node="5359:17598" type="button" onClick={() => setCurrentPage(2)} className={isActive(2) ? "box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-brand-primary-1 cursor-pointer" : "box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer"}>
              <p data-figma-node="5359:17599" className={isActive(2) ? "box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-background-2" : "box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1"}>2</p>
            </button>
            <button data-figma-node="5359:17600" type="button" onClick={goNext} className="box-border w-max max-w-[48px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer">
              <p data-figma-node="5359:17601" className="box-border w-max max-w-[28px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Next</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
