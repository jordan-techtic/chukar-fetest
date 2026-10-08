/**
 * Luna generated page
 * Figma frame: 5602:71490
 * Page: Week-calendar-default
 * Route: /calendar
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import "./figma-fonts.css";
import "./figma-responsive.css";
import Link from "next/link";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { WeekCalendarDefaultContentSection } from "./WeekCalendarDefaultContentSection";
import { figmaActionProps } from "./useFigmaScreenData";
import { ChevronDown_a4db42af } from "./ChevronDown_a4db42af";
import { FiRrCrossSmall_aec28f27 } from "./FiRrCrossSmall_aec28f27";
import { FiRrDocument_718ff216 } from "./FiRrDocument_718ff216";
import { FiRrFilter_17dad1cf } from "./FiRrFilter_17dad1cf";
import { FiRrMegaphone_89c2c562 } from "./FiRrMegaphone_89c2c562";
import { FiRrTarget_6d6fca9a } from "./FiRrTarget_6d6fca9a";
import { MemoPencil_3c0293af } from "./MemoPencil_3c0293af";
import { FiRrDownload_e2f06a4e } from "./FiRrDownload_e2f06a4e";
import { RefreshCcwClock_22f0146d } from "./RefreshCcwClock_22f0146d";
import { getAccessToken } from "@/lib/auth/token-storage";
import { downloadMarketingTeamMemberCalendarExport } from "@/lib/api/marketing-team-member-export-calendar";

export function WeekCalendarDefaultPage() {
  const screenData = useFigmaScreenData();
  const handleExportPdf = (): void => {
    void downloadMarketingTeamMemberCalendarExport(getAccessToken()).catch(() => {
      /* status surfaced by API layer / provider */
    });
  };
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5602:71490"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={884} nodeId="frame">
        <WeekCalendarDefaultContentSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <div data-figma-node="5602:71491" data-figma-component="5273:20995" className="pointer-events-auto box-border w-full min-w-0 h-[80px] absolute left-[0px] top-[0px] [--fx:0] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] flex flex-row items-center justify-between bg-[#ffffff]">
            <div data-figma-node="I5602:71491;5217:13714" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-[30px]">
              <div data-figma-node="I5602:71491;5217:13715" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-3">
                <img data-figma-node="I5602:71491;5217:13716" src="/assets/figma/I5602-71491-5217-13716.png" alt="image 2" className="box-border w-[54px] h-[50px] rounded-[10px] max-w-none object-cover object-top" />
                <div data-figma-node="I5602:71491;5217:13717" className="box-border w-max max-w-[216px] h-[43px] relative flex flex-col items-start gap-0.5">
                  <p data-figma-node="I5602:71491;5217:13718" className="box-border w-max max-w-[216px] h-auto min-h-[27px] font-inter text-[22px] font-[800] leading-[27px] text-left whitespace-nowrap text-[#231f20]">Marketing Calendar </p>
                  <p data-figma-node="I5602:71491;5217:13719" className="box-border w-max max-w-[171px] h-auto min-h-[14px] font-onest text-[11px] font-[600] leading-[14px] text-left whitespace-nowrap text-[#686868]">Plan · Create · Track · Grow</p>
                </div>
              </div>
            </div>
            <div data-figma-node="I5602:71491;5217:13733" className="box-border w-max max-w-[434px] h-[40px] relative flex flex-row items-center gap-4">
              <Link data-figma-node="I5602:71491;5217:13742" href="/calendar" data-figma-action="act_ed2875c8f17c" {...figmaActionProps("act_ed2875c8f17c")} className="box-border w-max max-w-[208px] h-[40px] rounded-[6px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-[#faf3e8] hover:opacity-90 cursor-pointer gap-2 no-underline"><RefreshCcwClock_22f0146d data-figma-node="I5602:71491;5217:13743" data-figma-component="5111:8203" className="relative overflow-hidden rounded-[4px]" /><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-[#a21d35] whitespace-nowrap">Historical View</span></Link>
              <button data-figma-node="I5602:71491;5217:13746" type="button" data-figma-action="act_calendar_export_pdf" onClick={handleExportPdf} className="box-border w-max max-w-[138px] h-[40px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-[#f2f1dd] hover:opacity-90 cursor-pointer gap-2"><FiRrDownload_e2f06a4e data-figma-node="I5602:71491;5217:13747" data-figma-component="5121:8564" className="relative overflow-hidden rounded-[4px]" /><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-[#231f20] whitespace-nowrap">Export PDF</span></button>
              <button data-figma-node="I5602:71491;5217:13749" type="button" data-figma-action="act_1c12087c7323" {...figmaActionProps("act_1c12087c7323")} className="box-border w-max max-w-[56px] h-[32px] relative flex flex-row items-center gap-2 cursor-pointer block">
                <div data-figma-node="I5602:71491;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-[32px] rounded-[32px] relative flex flex-row items-start gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
                  <img data-figma-node="I5602:71491;5217:13750;1002:172586" src="/assets/figma/I5602-71491-5217-13750-1002-172586.png" alt="Image" className="box-border w-[32px] h-[32px] rounded-[32px] max-w-none object-cover object-top" />
                </div>
                <ChevronDown_a4db42af data-figma-node="I5602:71491;5217:13752" data-figma-component="5111:6287" className="relative overflow-hidden rounded-[4px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div data-figma-node="5602:71492" data-figma-component="5273:20994" className="pointer-events-auto box-border w-full min-w-0 h-[59px] absolute left-[0px] top-[80px] [--fx:0] flex flex-row items-center justify-between bg-[#faf3e8]">
            <div data-figma-node="I5602:71492;5273:20960" className="box-border w-[1400px] h-[29px] relative flex flex-row items-center justify-between gap-5">
              <div data-figma-node="I5602:71492;5273:20961" className="box-border w-[804px] h-[29px] overflow-hidden relative flex flex-row items-center gap-3">
                <div data-figma-node="I5602:71492;5273:20963" data-figma-component="5121:8081" className="box-border w-[24px] h-[24px] overflow-hidden relative">
                  <svg data-figma-node="I5602:71492;5273:20963;403:54" viewBox="0 0 7.17 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[7px] h-[14px] absolute left-[8px] top-[5px] [--fx:8] [--fww:7] pointer-events-none overflow-visible"><path d="M2.28736 7.71079C2.19363 7.61783 2.11924 7.50723 2.06847 7.38537C2.0177 7.26351 1.99156 7.13281 1.99156 7.00079C1.99156 6.86878 2.0177 6.73808 2.06847 6.61622C2.11924 6.49436 2.19363 6.38376 2.28736 6.29079L6.87736 1.71079C6.97109 1.61783 7.04548 1.50723 7.09625 1.38537C7.14702 1.26351 7.17316 1.1328 7.17316 1.00079C7.17316 0.868781 7.14702 0.738075 7.09625 0.616216C7.04548 0.494357 6.97109 0.383756 6.87736 0.290792C6.69 0.104542 6.43655 0 6.17236 0C5.90817 8.88179e-16 5.65472 0.104542 5.46736 0.290792L0.87736 4.88079C0.315558 5.44329 0 6.20579 0 7.00079C0 7.7958 0.315558 8.55829 0.87736 9.12079L5.46736 13.7108C5.65362 13.8955 5.90502 13.9997 6.16736 14.0008C6.29897 14.0016 6.42943 13.9763 6.55127 13.9266C6.6731 13.8768 6.78392 13.8035 6.87736 13.7108C6.97109 13.6178 7.04548 13.5072 7.09625 13.3854C7.14702 13.2635 7.17316 13.1328 7.17316 13.0008C7.17316 12.8688 7.14702 12.7381 7.09625 12.6162C7.04548 12.4944 6.97109 12.3838 6.87736 12.2908L2.28736 7.71079Z" fill="#374957" /></svg>
                </div>
                <p data-figma-node="I5602:71492;5273:20962" className="box-border w-max max-w-[176px] h-auto min-h-[28px] font-onest text-[22px] font-[700] leading-[28px] text-left whitespace-nowrap text-[#231f20]">September 2026</p>
                <div data-figma-node="I5602:71492;5273:20964" data-figma-component="5121:8084" className="box-border w-[24px] h-[24px] overflow-hidden relative">
                  <svg data-figma-node="I5602:71492;5273:20964;403:56" viewBox="0 0 7.17 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[7px] h-[14px] absolute left-[9px] top-[5px] [--fx:9] [--fww:7] pointer-events-none overflow-visible"><path d="M6.2958 4.88079L1.7058 0.290792C1.51844 0.104542 1.26498 8.88179e-16 1.0008 0C0.736613 8.88179e-16 0.483161 0.104542 0.295798 0.290792C0.20207 0.383756 0.127676 0.494357 0.0769072 0.616216C0.0261385 0.738075 0 0.868781 0 1.00079C0 1.1328 0.0261385 1.26351 0.0769072 1.38537C0.127676 1.50723 0.20207 1.61783 0.295798 1.71079L4.8958 6.29079C4.98953 6.38376 5.06392 6.49436 5.11469 6.61622C5.16546 6.73808 5.1916 6.86878 5.1916 7.00079C5.1916 7.13281 5.16546 7.26351 5.11469 7.38537C5.06392 7.50723 4.98953 7.61783 4.8958 7.71079L0.295798 12.2908C0.107495 12.4778 0.00117992 12.7319 0.000242233 12.9973C-0.000695449 13.2626 0.103822 13.5175 0.290799 13.7058C0.477777 13.8941 0.731899 14.0004 0.997263 14.0014C1.26263 14.0023 1.5175 13.8978 1.7058 13.7108L6.2958 9.12079C6.8576 8.55829 7.17316 7.7958 7.17316 7.00079C7.17316 6.20579 6.8576 5.44329 6.2958 4.88079L6.2958 4.88079Z" fill="#374957" /></svg>
                </div>
                <div data-figma-node="I5602:71492;5273:20965" className="box-border w-max max-w-[77px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-2 pt-[8px] pr-[16px] pb-[8px] pl-[16px] border-[#231f20] border-[1px]">
                  <p data-figma-node="I5602:71492;5273:20966" className="box-border w-max max-w-[45px] h-auto min-h-[17px] font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-[#a21d35]">Today</p>
                </div>
                <div data-figma-node="I5602:71492;5273:20967" className="box-border w-max max-w-[102px] h-[21px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px] border-[#d5ba8c] border-[1px] bg-[#fef3c7]">
                  <p data-figma-node="I5602:71492;5273:20968" className="box-border w-max max-w-[82px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-[#000000]">105 activities</p>
                </div>
              </div>
              <div data-figma-node="I5602:71492;5528:39931" className="box-border w-max max-w-[575px] h-[29px] relative flex flex-row items-center gap-5">
                <div data-figma-node="I5602:71492;5503:26056" className="box-border w-max max-w-[526px] h-[29px] relative flex flex-row items-center gap-2.5">
                  <div data-figma-node="I5602:71492;5273:20970" className="box-border w-max max-w-[114px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                    <FiRrMegaphone_89c2c562 data-figma-node="I5602:71492;5273:20971" data-figma-component="5121:9035" className="relative overflow-hidden rounded-[6px]" />
                    <p data-figma-node="I5602:71492;5273:20972" className="box-border w-max max-w-[70px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#231f20]">Promotions</p>
                  </div>
                  <div data-figma-node="I5602:71492;5273:20973" className="box-border w-max max-w-[95px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                    <FiRrDocument_718ff216 data-figma-node="I5602:71492;5273:20974" data-figma-component="5121:8558" className="relative overflow-hidden rounded-[6px]" />
                    <p data-figma-node="I5602:71492;5273:20975" className="box-border w-max max-w-[51px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#231f20]">Content</p>
                  </div>
                  <div data-figma-node="I5602:71492;5273:20976" className="box-border w-max max-w-[95px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-[#ffffff]">
                    <FiRrTarget_6d6fca9a data-figma-node="I5602:71492;5273:20977" data-figma-component="5121:9541" className="relative overflow-hidden rounded-[6px]" />
                    <p data-figma-node="I5602:71492;5273:20978" className="box-border w-max max-w-[51px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#a21d35]">Focuses</p>
                  </div>
                  <div data-figma-node="I5602:71492;5273:20979" className="box-border w-[1px] h-[20px] relative block bg-[#e2d9d0]"></div>
                  <button data-figma-node="I5602:71492;5621:25652" type="button" data-figma-action="act_3c6e5300934f" {...figmaActionProps("act_3c6e5300934f")} className="box-border w-max max-w-[93px] h-[27px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-[#d5ba8c] cursor-pointer block">
                    <FiRrFilter_17dad1cf data-figma-node="I5602:71492;5621:25653" data-figma-component="5121:8683" className="relative overflow-hidden rounded-[6px]" />
                    <p data-figma-node="I5602:71492;5621:25654" className="box-border w-max max-w-[49px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#000000]">Filters</p>
                  </button>
                  <div data-figma-node="I5602:71492;5273:20980" className="box-border w-max max-w-[78px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1 pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-[#e2d9d0]">
                    <FiRrCrossSmall_aec28f27 data-figma-node="I5602:71492;5503:25916" data-figma-component="5121:8491" className="relative overflow-hidden rounded-[6px]" />
                    <p data-figma-node="I5602:71492;5273:20982" className="box-border w-max max-w-[40px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Clear</p>
                  </div>
                </div>
                <button data-figma-node="I5602:71492;5528:36949" type="button" data-figma-action="act_a812655c8af6" {...figmaActionProps("act_a812655c8af6")} className="box-border w-[29px] h-[29px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] cursor-pointer block">
                  <MemoPencil_3c0293af data-figma-node="I5602:71492;5528:39864" data-figma-component="5111:10773" className="relative overflow-hidden rounded-[6px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
