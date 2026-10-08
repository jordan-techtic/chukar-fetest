/**
 * Luna generated page
 * Figma frame: 5449:19395
 * Page: Invite-user
 * Route: /invite-user
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-fonts.css";
import "./figma-responsive.css";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { TitleRow_5449_19397 } from "./TitleRowSection";
import { figmaFieldProps } from "./useFigmaScreenData";
import { ChevronDown_a4db42af } from "./ChevronDown_a4db42af";
import { FiRrCrossSmall_aec28f27 } from "./FiRrCrossSmall_aec28f27";
import { PenField_051ce1e3 } from "./PenField_051ce1e3";
import Link from "next/link";
import { Shared_08359495 } from "./Shared_08359495";

export function InviteUserPage() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5449:19395"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={770} nodeId="frame">
        <TitleRow_5449_19397 />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <Shared_08359495 data-figma-node="5449:19396" data-figma-component="5273:20995" className="pointer-events-auto absolute left-[0px] top-[0px] box-border h-[80px] overflow-hidden" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[3]">
          <div data-figma-node="5449:19594" className="pointer-events-auto box-border w-[1440px] h-[770px] absolute left-[0px] top-[0px] [--fx:0] [--fww:1440] flex flex-row items-center justify-center pt-[103px] pr-[460px] pb-[103px] pl-[460px]" style={{backgroundColor: "rgba(26, 32, 44, 0.584)"}}>
            <div data-figma-node="5449:19595" className="box-border w-[520px] h-[564px] rounded-[12px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)] relative flex flex-col items-center gap-[24px] gap-6 pt-[24px] pr-[24px] pb-[24px] pl-[24px] bg-[#ffffff]">
              <div data-figma-node="5449:19596" className="box-border w-[472px] h-[32px] relative">
                <div data-figma-node="5449:19597" className="box-border w-[126px] h-[24px] absolute left-[0px] top-[4px] [--fx:0] [--fww:126] overflow-hidden rounded-[0px] flex items-center gap-[8px] gap-2">
                  <PenField_051ce1e3 data-figma-node="5449:19598" data-figma-component="5111:7679" className="relative" />
                  <p data-figma-node="5449:19599" className="box-border w-[94px] h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-[#231f20]">Invite User</p>
                </div>
                <div data-figma-node="5449:19600" className="box-border w-[32px] h-[32px] absolute left-[440px] top-[0px] [--fx:440] [--fww:32] gap-3">
                  <Link data-figma-node="5449:19601" href="/manage-users" className="box-border w-[32px] h-[32px] absolute left-[0px] top-[0px] [--fx:0] [--fww:32] overflow-hidden rounded-[6px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-[#fff9f3]">
                    <FiRrCrossSmall_aec28f27 data-figma-node="5449:19602" data-figma-component="5121:8491" className="absolute left-[4px] top-[4px]" />
                  </Link>
                </div>
              </div>
              <div data-figma-node="5449:19603" className="box-border w-[472px] h-[374px] relative gap-4">
                <div data-figma-node="5449:19724" className="box-border w-[472px] h-[374px] absolute left-[0px] top-[0px] [--fx:0] [--fww:472] flex flex-col items-center gap-[16px] gap-4">
                  <div data-figma-node="5449:19725" className="box-border w-[472px] h-[62px] relative flex items-center gap-[16px] gap-4">
                    <div data-figma-node="5449:19726" className="box-border w-[228px] h-[62px] relative flex flex-col items-start gap-[6px] gap-1.5">
                      <p data-figma-node="5449:19727" className="box-border w-[68px] h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-[#4a5568]">First name</p>
                      <div data-figma-node="5449:19728" className="box-border w-[228px] h-[42px] rounded-[8px] relative pt-[12px] pr-[14px] pb-[12px] pl-[14px] border-[#e2d9d0] border-[1px] bg-[#ffffff]"></div>
                    </div>
                    <div data-figma-node="5449:19730" className="box-border w-[228px] h-[62px] relative flex flex-col items-start gap-[6px] gap-1.5">
                      <p data-figma-node="5449:19731" className="box-border w-[65px] h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-[#4a5568]">Last name</p>
                      <div data-figma-node="5449:19732" className="box-border w-[228px] h-[42px] rounded-[8px] relative pt-[12px] pr-[14px] pb-[12px] pl-[14px] border-[#e2d9d0] border-[1px] bg-[#ffffff]"></div>
                    </div>
                  </div>
                  <div data-figma-node="5449:19734" className="box-border w-[472px] h-[62px] relative flex items-center gap-[16px] gap-4">
                    <div data-figma-node="5449:19735" className="box-border w-[228px] h-[62px] relative flex flex-col items-start gap-[6px] gap-1.5">
                      <p data-figma-node="5449:19736" className="box-border w-[91px] h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-[#4a5568]">Email Address</p>
                      <div data-figma-node="5449:19737" className="box-border w-[228px] h-[42px] rounded-[8px] relative pt-[12px] pr-[14px] pb-[12px] pl-[14px] border-[#e2d9d0] border-[1px] bg-[#ffffff]"></div>
                    </div>
                    <div data-figma-node="5449:19739" className="box-border w-[228px] h-[62px] relative flex flex-col items-start gap-[6px] gap-1.5">
                      <p data-figma-node="5449:19740" className="box-border w-[91px] h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-[#4a5568]">Phone number</p>
                      <div data-figma-node="5449:19741" className="box-border w-[228px] h-[42px] rounded-[8px] relative pt-[12px] pr-[14px] pb-[12px] pl-[14px] border-[#e2d9d0] border-[1px] bg-[#ffffff]"></div>
                    </div>
                  </div>
                  <div data-figma-node="5449:19743" className="box-border w-[472px] h-[62px] relative flex flex-col items-start gap-[6px] gap-1.5">
                    <p data-figma-node="5449:19744" className="box-border w-[30px] h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-[#4a5568]">Role</p>
                    <div className="box-border w-[472px] h-[42px] rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-[#ffffff]"><select data-figma-node="5449:19745" name="role" data-figma-field="role" data-figma-field-origin="design_text" {...figmaFieldProps("role")} aria-label="Please select" className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none cursor-pointer text-[#9ca3af] font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap pt-[12px] pr-[14px] pb-[12px] pl-[14px]"><option value="">Please select</option></select><div className="pointer-events-none absolute inset-0"><ChevronDown_a4db42af data-figma-node="5449:19752" data-figma-component="5111:6287" className="absolute left-[442px] top-[12px]" /></div></div>
                  </div>
                  <div data-figma-node="5449:19747" className="box-border w-[472px] h-[140px] relative flex flex-col items-start gap-[6px] gap-1.5">
                    <p data-figma-node="5449:19748" className="box-border w-[20px] h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-[#4a5568]">Bio</p>
                    <div data-figma-node="5449:19749" className="box-border w-[472px] h-[120px] rounded-[8px] relative pt-[14px] pr-[14px] pb-[14px] pl-[14px] border-[#e2d9d0] border-[1px] bg-[#ffffff]"></div>
                  </div>
                </div>
              </div>
              <div data-figma-node="5449:19627" className="box-border w-[472px] h-[1px] bg-[#e2d9d0]" />
              <div data-figma-node="5449:19628" className="box-border w-[472px] h-[38px] relative flex items-center gap-[12px] gap-3">
                <Link data-figma-node="5449:19629" href="/manage-users" className="box-border w-[78px] h-[38px] rounded-[6px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-[#231f20]"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#4a5568] whitespace-nowrap">Cancel</span></Link>
                <Link data-figma-node="5449:19631" href="/manage-users" className="box-border w-[117px] h-[38px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-[#a21d35] hover:opacity-90"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#ffffff] whitespace-nowrap">Send Invite</span></Link>
              </div>
            </div>
          </div>
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
