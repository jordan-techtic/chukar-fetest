/**
 * Luna generated page
 * Figma frame: 5645:33753
 * Page: Monthly-calendar-Historical view
 * Route: /monthly-calendar-historical-view
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import "./figma-theme.css";
import "./figma-responsive.css";
import Link from "next/link";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { MonthlyCalendarHistoricaContactSection } from "./MonthlyCalendarHistoricaContactSection";
import { figmaExportBlobProps } from "./useFigmaScreenData";
import { FiRrAngleSmallDown_4ecbc612 } from "./FiRrAngleSmallDown_4ecbc612";
import { FiRrCrossSmall_aec28f27 } from "./FiRrCrossSmall_aec28f27";
import { FiRrFilter_17dad1cf } from "./FiRrFilter_17dad1cf";
import { FiRrMegaphone_89c2c562 } from "./FiRrMegaphone_89c2c562";
import { FiRrTarget_6d6fca9a } from "./FiRrTarget_6d6fca9a";
import { ChevronDown_a4db42af } from "./ChevronDown_a4db42af";
import { FiRrDownload_e2f06a4e } from "./FiRrDownload_e2f06a4e";
import { MemoPencil_3c0293af } from "./MemoPencil_3c0293af";
import { RefreshCcwClock_22f0146d } from "./RefreshCcwClock_22f0146d";

export function MonthlyCalendarHistoricalPage() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5645:33753"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={954} nodeId="frame">
        <MonthlyCalendarHistoricaContactSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <div data-figma-node="5645:33754" data-figma-component="5273:20995" className="pointer-events-auto box-border w-full min-w-0 h-[80px] absolute left-[0px] top-[0px] z-[0] [--fx:0] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] flex flex-row items-center justify-between bg-[#ffffff]">
            <div data-figma-node="I5645:33754;5217:13714" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-[30px]">
              <div data-figma-node="I5645:33754;5217:13715" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-3">
                <img data-figma-node="I5645:33754;5217:13716" src="/assets/figma/I5645-33754-5217-13716.png" alt="image 2" width={54} height={50} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[54px] h-[50px] rounded-[10px] max-w-none object-cover object-top" />
                <div data-figma-node="I5645:33754;5217:13717" className="box-border w-max max-w-[216px] h-[43px] relative flex flex-col items-start gap-0.5">
                  <p data-figma-node="I5645:33754;5217:13718" className="box-border w-max max-w-[216px] h-auto min-h-[27px] font-inter text-[22px] font-[800] leading-[27px] text-left whitespace-nowrap text-[#231f20]">Marketing Calendar </p>
                  <p data-figma-node="I5645:33754;5217:13719" className="box-border w-max max-w-[171px] h-auto min-h-[14px] font-onest text-[11px] font-[600] leading-[14px] text-left whitespace-nowrap text-[#686868]">Plan · Create · Track · Grow</p>
                </div>
              </div>
            </div>
            <div data-figma-node="I5645:33754;5217:13733" className="box-border w-max max-w-[434px] h-[40px] relative flex flex-row items-center gap-4">
              <Link data-figma-node="I5645:33754;5217:13742" href="/monthly-calendar-historical-view" data-figma-action="act_860bce35c6ee" className="box-border relative w-max max-w-[208px] h-[40px] rounded-[6px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-[#faf3e8] hover:opacity-90 cursor-pointer gap-2"><RefreshCcwClock_22f0146d data-figma-node="I5645:33754;5217:13743" data-figma-component="5111:8203" className="box-border w-[16px] h-[16px] overflow-hidden relative" /><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-[#a21d35] whitespace-nowrap">Historical View</span><button type="button" role="switch" aria-checked="true" aria-label="Historical View toggle" data-figma-node="I5645:33754;5217:13745" className="absolute left-[164px] top-[13px] inline-flex items-center justify-center"><div className="box-border w-[28px] h-[14px] rounded-[20px] relative flex flex-row items-center justify-end gap-0.5 pt-[1px] pr-[1px] pb-[1px] pl-[1px] bg-brand-primary-a21d35"><div className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block bg-background-ffffff"></div></div></button></Link>
              <button data-figma-node="I5645:33754;5217:13746" type="button" {...figmaExportBlobProps("monthly-historical-export", {
    method: "POST",
    path: "/api/v1/marketing-team-member/export-calendar",
    body: { year: new Date().getFullYear(), view: "historical" },
    filename: `monthly-calendar-historical-${new Date().getFullYear()}.pdf`,
    mime: "application/pdf",
  })} className="box-border w-max max-w-[138px] h-[40px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-[#f2f1dd] hover:opacity-90 cursor-pointer gap-2"><FiRrDownload_e2f06a4e data-figma-node="I5645:33754;5217:13747" data-figma-component="5121:8564" className="box-border w-[16px] h-[16px] overflow-hidden relative flex flex-col items-center" /><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-[#231f20] whitespace-nowrap">Export PDF</span></button>
              <div data-figma-node="I5645:33754;5217:13749" className="box-border w-max max-w-[56px] h-[32px] flex flex-row items-center gap-2"><button type="button" aria-label="Avatar" className="inline-flex items-center justify-center"><div data-figma-node="I5645:33754;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-[32px] rounded-[32px] relative flex flex-row items-start gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <img data-figma-node="I5645:33754;5217:13750;1002:172586" src="/assets/figma/I5645-33754-5217-13750-1002-172586.png" alt="Image" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[32px] max-w-none object-cover object-top" />
</div></button><button type="button" aria-label="Expand Historical View" className="inline-flex items-center justify-center"><ChevronDown_a4db42af data-figma-node="I5645:33754;5217:13752" data-figma-component="5111:6287" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div data-figma-node="5645:33755" data-figma-component="5273:21161" className="pointer-events-auto box-border w-full min-w-0 h-[59px] absolute left-[0px] top-[80px] z-[1] [--fx:0] flex flex-row items-center justify-between bg-[#faf3e8]">
            <div data-figma-node="I5645:33755;5273:21162" className="box-border w-[1400px] h-[29px] relative flex flex-row items-center justify-between gap-3">
              <div data-figma-node="I5645:33755;5273:21163" className="box-border w-[804px] h-[28px] overflow-hidden relative flex flex-row items-center gap-3">
                <p data-figma-node="I5645:33755;5273:21164" className="box-border w-max max-w-[116px] h-auto min-h-[28px] font-onest text-[22px] font-[700] leading-[28px] text-left whitespace-nowrap text-[#231f20]">2025-2026</p>
                <FiRrAngleSmallDown_4ecbc612 data-figma-node="I5645:33755;5273:21195" data-figma-component="5121:8078" className="relative overflow-hidden" />
              </div>
              <div data-figma-node="I5645:33755;5528:40185" className="box-border w-max max-w-[575px] h-[29px] relative flex flex-row items-center gap-5">
                <div data-figma-node="I5645:33755;5503:25941" className="box-border w-max max-w-[526px] h-[29px] relative flex flex-row items-center gap-2.5">
                  <div data-figma-node="I5645:33755;5273:21172" className="box-border w-max max-w-[114px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                    <FiRrMegaphone_89c2c562 data-figma-node="I5645:33755;5273:21173" data-figma-component="5121:9035" className="relative overflow-hidden" />
                    <p data-figma-node="I5645:33755;5273:21174" className="box-border w-max max-w-[70px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#231f20]">Promotions</p>
                  </div>
                  <div data-figma-node="I5645:33755;5273:21175" className="box-border w-max max-w-[95px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                    <div data-figma-node="I5645:33755;5273:21176" data-figma-component="5121:8558" className="box-border w-[14px] h-[14px] overflow-hidden relative">
                      <svg data-figma-node="I5645:33755;5273:21176;403:404" viewBox="0 0 11.67 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[14px] absolute left-[1px] top-[0px] [--fx:1] [--fww:12] pointer-events-none overflow-visible"><path d="M8.75 8.16668C8.75 8.32139 8.68854 8.46976 8.57915 8.57916C8.46975 8.68855 8.32138 8.75001 8.16667 8.75001L3.5 8.75001C3.34529 8.75001 3.19692 8.68855 3.08752 8.57916C2.97812 8.46976 2.91667 8.32139 2.91667 8.16668C2.91667 8.01197 2.97812 7.8636 3.08752 7.7542C3.19692 7.6448 3.34529 7.58335 3.5 7.58335L8.16667 7.58335C8.32138 7.58335 8.46975 7.6448 8.57915 7.7542C8.68854 7.8636 8.75 8.01197 8.75 8.16668ZM6.41667 9.91668L3.5 9.91668C3.34529 9.91668 3.19692 9.97814 3.08752 10.0875C2.97812 10.1969 2.91667 10.3453 2.91667 10.5C2.91667 10.6547 2.97812 10.8031 3.08752 10.9125C3.19692 11.0219 3.34529 11.0833 3.5 11.0833L6.41667 11.0833C6.57138 11.0833 6.71975 11.0219 6.82915 10.9125C6.93854 10.8031 7 10.6547 7 10.5C7 10.3453 6.93854 10.1969 6.82915 10.0875C6.71975 9.97814 6.57138 9.91668 6.41667 9.91668ZM11.6667 6.11626L11.6667 11.0833C11.6657 11.8566 11.3582 12.5979 10.8114 13.1447C10.2646 13.6915 9.52326 13.9991 8.75 14L2.91667 14C2.1434 13.9991 1.40208 13.6915 0.855295 13.1447C0.308514 12.5979 0.00092625 11.8566 0 11.0833L0 2.91668C0.00092625 2.14342 0.308514 1.40209 0.855295 0.855308C1.40208 0.308528 2.1434 0.000939695 2.91667 1.34451e-05L5.55042 1.34451e-05C6.08686 -0.00136726 6.61826 0.103606 7.11388 0.308865C7.6095 0.514123 8.05952 0.815594 8.43792 1.19585L10.4702 3.22935C10.8507 3.60749 11.1524 4.05736 11.3577 4.55292C11.5631 5.04847 11.6681 5.57984 11.6667 6.11626L11.6667 6.11626ZM7.61308 2.02068C7.4295 1.84286 7.22338 1.68989 7 1.56568L7 4.08335C7 4.23806 7.06146 4.38643 7.17085 4.49583C7.28025 4.60522 7.42862 4.66668 7.58333 4.66668L10.101 4.66668C9.97672 4.44337 9.82354 4.23743 9.64542 4.05418L7.61308 2.02068ZM10.5 6.11626C10.5 6.02001 10.4813 5.92785 10.4726 5.83335L7.58333 5.83335C7.1192 5.83335 6.67408 5.64897 6.3459 5.32078C6.01771 4.99259 5.83333 4.54748 5.83333 4.08335L5.83333 1.1941C5.73883 1.18535 5.64608 1.16668 5.55042 1.16668L2.91667 1.16668C2.45254 1.16668 2.00742 1.35105 1.67923 1.67924C1.35104 2.00743 1.16667 2.45255 1.16667 2.91668L1.16667 11.0833C1.16667 11.5475 1.35104 11.9926 1.67923 12.3208C2.00742 12.649 2.45254 12.8333 2.91667 12.8333L8.75 12.8333C9.21413 12.8333 9.65925 12.649 9.98744 12.3208C10.3156 11.9926 10.5 11.5475 10.5 11.0833L10.5 6.11626Z" fill="#374957" /></svg>
                    </div>
                    <p data-figma-node="I5645:33755;5273:21177" className="box-border w-max max-w-[51px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#231f20]">Content</p>
                  </div>
                  <div data-figma-node="I5645:33755;5273:21178" className="box-border w-max max-w-[95px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-[#ffffff]">
                    <FiRrTarget_6d6fca9a data-figma-node="I5645:33755;5273:21179" data-figma-component="5121:9541" className="relative overflow-hidden" />
                    <p data-figma-node="I5645:33755;5273:21180" className="box-border w-max max-w-[51px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#a21d35]">Focuses</p>
                  </div>
                  <div data-figma-node="I5645:33755;5273:21181" className="box-border w-[1px] h-[20px] relative block bg-[#e2d9d0]"></div>
                  <div data-figma-node="I5645:33755;5621:25566" className="box-border w-max max-w-[93px] h-[27px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-[#d5ba8c]">
                    <FiRrFilter_17dad1cf data-figma-node="I5645:33755;5621:25623" data-figma-component="5121:8683" className="relative overflow-hidden" />
                    <p data-figma-node="I5645:33755;5621:25568" className="box-border w-max max-w-[49px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#000000]">Filters</p>
                  </div>
                  <div data-figma-node="I5645:33755;5273:21182" className="box-border w-max max-w-[78px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1 pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-[#e2d9d0]">
                    <FiRrCrossSmall_aec28f27 data-figma-node="I5645:33755;5503:25867" data-figma-component="5121:8491" className="relative overflow-hidden" />
                    <p data-figma-node="I5645:33755;5273:21184" className="box-border w-max max-w-[40px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Clear</p>
                  </div>
                </div>
                <div data-figma-node="I5645:33755;5528:39891" className="box-border w-[29px] h-[29px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><MemoPencil_3c0293af data-figma-node="I5645:33755;5528:39892" data-figma-component="5111:10773" className="box-border w-[20px] h-[20px] overflow-hidden relative" /></button></div>
              </div>
            </div>
          </div>
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
