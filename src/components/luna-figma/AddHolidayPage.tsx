/**
 * Luna generated page
 * Figma frame: 5621:28800
 * Page: Add Holiday
 * Route: /add-holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-fonts.css";
import "./figma-responsive.css";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { TitleRowSection } from "./TitleRowSection";
import { ContentColumnSection } from "./ContentColumnSection";
import { figmaFieldProps } from "./useFigmaScreenData";
import { FiRrCalendar_8ca23c72 } from "./FiRrCalendar_8ca23c72";
import { FiRrCrossSmall_aec28f27 } from "./FiRrCrossSmall_aec28f27";
import Link from "next/link";
import { Shared_08359495 } from "./Shared_08359495";

export function AddHolidayPage() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5621:28800"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={770} nodeId="frame">
        <TitleRowSection />
        <ContentColumnSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <Shared_08359495 data-figma-node="5621:28801" data-figma-component="5273:20995" className="pointer-events-auto absolute left-[0px] top-[0px] box-border h-[80px] overflow-hidden" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[3]">
          <div data-figma-node="5621:29002" className="pointer-events-auto box-border w-[1440px] h-[770px] absolute left-[0px] top-[0px] [--fx:0] [--fww:1440] flex flex-row items-center justify-center pt-[218px] pr-[460px] pb-[218px] pl-[460px]" style={{backgroundColor: "rgba(26, 32, 44, 0.584)"}}>
            <div data-figma-node="5621:29003" className="box-border w-[520px] h-[334px] rounded-[12px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)] relative flex flex-col items-center gap-[24px] gap-6 pt-[24px] pr-[24px] pb-[24px] pl-[24px] bg-[#ffffff]">
              <div data-figma-node="5621:29004" className="box-border w-[472px] h-[32px] relative">
                <div data-figma-node="5621:29005" className="box-border w-[206px] h-[24px] absolute left-[0px] top-[4px] [--fx:0] [--fww:206] flex items-center gap-[8px] gap-2">
                  <div data-figma-node="5621:29006" data-figma-component="5111:8263" className="box-border w-[24px] h-[24px] overflow-hidden relative">
                    <svg data-figma-node="I5621:29006;5111:8264" viewBox="0 0 18 18" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[18px] h-[18px] absolute left-[3px] top-[3px] [--fx:3] [--fww:18] pointer-events-none overflow-visible"><path d="M0 5C-0.552285 5 -1 5.44772 -1 6C-1 6.55228 -0.552285 7 0 7L0 6L0 5ZM18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5L18 6L18 7ZM1.09202 17.782L1.54601 16.891L1.09202 17.782ZM0.217987 16.908L1.10899 16.454L0.217987 16.908ZM17.782 16.908L16.891 16.454L17.782 16.908ZM16.908 17.782L16.454 16.891L16.908 17.782ZM16.908 2.21799L16.454 3.10899L16.908 2.21799ZM17.782 3.09202L16.891 3.54601L17.782 3.09202ZM1.09202 2.21799L1.54601 3.10899L1.09202 2.21799ZM0.217987 3.09202L1.10899 3.54601L0.217987 3.09202ZM5 0C5 -0.552285 4.55228 -1 4 -1C3.44772 -1 3 -0.552285 3 0L4 0L5 0ZM3 2C3 2.55228 3.44772 3 4 3C4.55228 3 5 2.55228 5 2L4 2L3 2ZM15 0C15 -0.552285 14.5523 -1 14 -1C13.4477 -1 13 -0.552285 13 0L14 0L15 0ZM13 2C13 2.55228 13.4477 3 14 3C14.5523 3 15 2.55228 15 2L14 2L13 2ZM3 8C2.44772 8 2 8.44771 2 9C2 9.55229 2.44772 10 3 10L3 9L3 8ZM5 10C5.55228 10 6 9.55229 6 9C6 8.44771 5.55228 8 5 8L5 9L5 10ZM8 8C7.44772 8 7 8.44771 7 9C7 9.55229 7.44772 10 8 10L8 9L8 8ZM10 10C10.5523 10 11 9.55229 11 9C11 8.44771 10.5523 8 10 8L10 9L10 10ZM13 8C12.4477 8 12 8.44771 12 9C12 9.55229 12.4477 10 13 10L13 9L13 8ZM15 10C15.5523 10 16 9.55229 16 9C16 8.44771 15.5523 8 15 8L15 9L15 10ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13L3 12L3 11ZM5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11L5 12L5 13ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13L8 12L8 11ZM10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11L10 12L10 13ZM13 11C12.4477 11 12 11.4477 12 12C12 12.5523 12.4477 13 13 13L13 12L13 11ZM15 13C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11L15 12L15 13ZM3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16L3 15L3 14ZM5 16C5.55228 16 6 15.5523 6 15C6 14.4477 5.55228 14 5 14L5 15L5 16ZM8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16L8 15L8 14ZM10 16C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14L10 15L10 16ZM13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16L13 15L13 14ZM15 16C15.5523 16 16 15.5523 16 15C16 14.4477 15.5523 14 15 14L15 15L15 16ZM0 6L0 7L18 7L18 6L18 5L0 5L0 6ZM3.2 2L3.2 3L14.8 3L14.8 2L14.8 1L3.2 1L3.2 2ZM18 5.2L17 5.2L17 14.8L18 14.8L19 14.8L19 5.2L18 5.2ZM14.8 18L14.8 17L3.2 17L3.2 18L3.2 19L14.8 19L14.8 18ZM0 14.8L1 14.8L1 5.2L0 5.2L-1 5.2L-1 14.8L0 14.8ZM3.2 18L3.2 17C2.62345 17 2.25117 16.9992 1.96784 16.9761C1.69617 16.9539 1.59545 16.9162 1.54601 16.891L1.09202 17.782L0.638028 18.673C1.01641 18.8658 1.40963 18.9371 1.80497 18.9694C2.18864 19.0008 2.65645 19 3.2 19L3.2 18ZM0 14.8L-1 14.8C-1 15.3436 -1.00078 15.8114 -0.969431 16.195C-0.93713 16.5904 -0.865814 16.9836 -0.67302 17.362L0.217987 16.908L1.10899 16.454C1.0838 16.4045 1.04612 16.3038 1.02393 16.0322C1.00078 15.7488 1 15.3766 1 14.8L0 14.8ZM1.09202 17.782L1.54601 16.891C1.35785 16.7951 1.20487 16.6422 1.10899 16.454L0.217987 16.908L-0.67302 17.362C-0.385399 17.9265 0.0735432 18.3854 0.638028 18.673L1.09202 17.782ZM18 14.8L17 14.8C17 15.3766 16.9992 15.7488 16.9761 16.0322C16.9539 16.3038 16.9162 16.4045 16.891 16.454L17.782 16.908L18.673 17.362C18.8658 16.9836 18.9371 16.5904 18.9694 16.195C19.0008 15.8114 19 15.3436 19 14.8L18 14.8ZM14.8 18L14.8 19C15.3436 19 15.8114 19.0008 16.195 18.9694C16.5904 18.9371 16.9836 18.8658 17.362 18.673L16.908 17.782L16.454 16.891C16.4045 16.9162 16.3038 16.9539 16.0322 16.9761C15.7488 16.9992 15.3766 17 14.8 17L14.8 18ZM17.782 16.908L16.891 16.454C16.7951 16.6422 16.6422 16.7951 16.454 16.891L16.908 17.782L17.362 18.673C17.9265 18.3854 18.3854 17.9265 18.673 17.362L17.782 16.908ZM14.8 2L14.8 3C15.3766 3 15.7488 3.00078 16.0322 3.02393C16.3038 3.04612 16.4045 3.0838 16.454 3.10899L16.908 2.21799L17.362 1.32698C16.9836 1.13419 16.5904 1.06287 16.195 1.03057C15.8114 0.999222 15.3436 1 14.8 1L14.8 2ZM18 5.2L19 5.2C19 4.65645 19.0008 4.18864 18.9694 3.80497C18.9371 3.40963 18.8658 3.01641 18.673 2.63803L17.782 3.09202L16.891 3.54601C16.9162 3.59545 16.9539 3.69617 16.9761 3.96784C16.9992 4.25117 17 4.62345 17 5.2L18 5.2ZM16.908 2.21799L16.454 3.10899C16.6422 3.20487 16.7951 3.35785 16.891 3.54601L17.782 3.09202L18.673 2.63803C18.3854 2.07354 17.9265 1.6146 17.362 1.32698L16.908 2.21799ZM3.2 2L3.2 1C2.65645 1 2.18864 0.999222 1.80497 1.03057C1.40963 1.06287 1.01641 1.13419 0.638028 1.32698L1.09202 2.21799L1.54601 3.10899C1.59545 3.0838 1.69617 3.04612 1.96784 3.02393C2.25117 3.00078 2.62345 3 3.2 3L3.2 2ZM0 5.2L1 5.2C1 4.62345 1.00078 4.25117 1.02393 3.96784C1.04612 3.69617 1.0838 3.59545 1.10899 3.54601L0.217987 3.09202L-0.67302 2.63803C-0.865814 3.01641 -0.93713 3.40963 -0.969431 3.80497C-1.00078 4.18864 -1 4.65645 -1 5.2L0 5.2ZM1.09202 2.21799L0.638028 1.32698C0.0735422 1.6146 -0.385399 2.07354 -0.67302 2.63803L0.217987 3.09202L1.10899 3.54601C1.20487 3.35785 1.35785 3.20487 1.54601 3.10899L1.09202 2.21799ZM4 0L3 0L3 2L4 2L5 2L5 0L4 0ZM14 0L13 0L13 2L14 2L15 2L15 0L14 0ZM3 9L3 10L5 10L5 9L5 8L3 8L3 9ZM8 9L8 10L10 10L10 9L10 8L8 8L8 9ZM13 9L13 10L15 10L15 9L15 8L13 8L13 9ZM3 12L3 13L5 13L5 12L5 11L3 11L3 12ZM8 12L8 13L10 13L10 12L10 11L8 11L8 12ZM13 12L13 13L15 13L15 12L15 11L13 11L13 12ZM3 15L3 16L5 16L5 15L5 14L3 14L3 15ZM8 15L8 16L10 16L10 15L10 14L8 14L8 15ZM13 15L13 16L15 16L15 15L15 14L13 14L13 15Z" fill="#a21d35" /></svg>
                  </div>
                  <p data-figma-node="5621:29007" className="box-border w-[174px] h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-[#231f20]">Create New Holiday</p>
                </div>
                <div data-figma-node="5621:29008" className="box-border w-[32px] h-[32px] absolute left-[440px] top-[0px] [--fx:440] [--fww:32] gap-3">
                  <Link data-figma-node="5621:29009" href="/manage-users" className="box-border w-[32px] h-[32px] absolute left-[0px] top-[0px] [--fx:0] [--fww:32] overflow-hidden rounded-[6px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-[#fff9f3]">
                    <FiRrCrossSmall_aec28f27 data-figma-node="5621:29010" data-figma-component="5121:8491" className="absolute left-[4px] top-[4px]" />
                  </Link>
                </div>
              </div>
              <div data-figma-node="5621:29011" className="box-border w-[472px] h-[144px] relative gap-4">
                <div data-figma-node="5621:29022" className="box-border w-[472px] h-[144px] absolute left-[0px] top-[0px] [--fx:0] [--fww:472] flex flex-col items-center gap-[16px] gap-4">
                  <div data-figma-node="5621:29023" className="box-border w-[472px] h-[63px] relative gap-4">
                    <div data-figma-node="5621:29024" className="box-border w-[472px] h-[63px] absolute left-[0px] top-[0px] [--fx:0] [--fww:472] flex flex-col items-start gap-[6px] gap-1.5">
                      <p data-figma-node="5621:29025" className="box-border w-[93px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#4a5568]">Holiday Name</p>
                      <input data-figma-node="5621:29026" name="holiday-name" data-figma-field="holiday-name" data-figma-field-origin="design_text" {...figmaFieldProps("holiday-name")} type="text" placeholder="e.g. Thanksgiving Day" aria-label="e.g. Thanksgiving Day" className="box-border w-[472px] h-[42px] rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                    </div>
                  </div>
                  <div data-figma-node="5621:29028" className="box-border w-[472px] h-[65px] relative flex items-center gap-[16px] gap-4">
                    <div data-figma-node="5621:29029" className="box-border w-[228px] h-[65px] relative flex flex-col items-start gap-[6px] gap-1.5">
                      <p data-figma-node="5621:29030" className="box-border w-[77px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] text-left whitespace-nowrap text-[#4a5568]">START DATE</p>
                      <div className="box-border w-[228px] h-[44px] rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-[#ffffff]"><select data-figma-node="5621:29031" name="start-date" data-figma-field="start-date" data-figma-field-origin="design_text" {...figmaFieldProps("start-date")} aria-label="Sept 25, 2026" className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none cursor-pointer text-[#231f20] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap pt-[10px] pr-[12px] pb-[10px] pl-[12px]"><option value="">Sept 25, 2026</option></select><div className="pointer-events-none absolute inset-0"><div data-figma-node="5621:29033" className="box-border w-[24px] h-[24px] absolute left-[192px] top-[10px] [--fx:192] [--fww:24] overflow-hidden rounded-[8px] gap-2.5">
  <FiRrCalendar_8ca23c72 data-figma-node="5621:29034" data-figma-component="5121:5917" className="absolute left-[4px] top-[4px]" />
</div></div></div>
                    </div>
                    <div data-figma-node="5621:29035" className="box-border w-[228px] h-[65px] relative flex flex-col items-start gap-[6px] gap-1.5">
                      <p data-figma-node="5621:29036" className="box-border w-[64px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] text-left whitespace-nowrap text-[#4a5568]">END DATE</p>
                      <div className="box-border w-[228px] h-[44px] rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-[#ffffff]"><select data-figma-node="5621:29037" name="end-date" data-figma-field="end-date" data-figma-field-origin="design_text" {...figmaFieldProps("end-date")} aria-label="Sept 27, 2026" className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none cursor-pointer text-[#231f20] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap pt-[10px] pr-[12px] pb-[10px] pl-[12px]"><option value="">Sept 27, 2026</option></select><div className="pointer-events-none absolute inset-0"><div data-figma-node="5621:29039" className="box-border w-[24px] h-[24px] absolute left-[192px] top-[10px] [--fx:192] [--fww:24] overflow-hidden rounded-[8px] gap-2.5">
  <FiRrCalendar_8ca23c72 data-figma-node="5621:29040" data-figma-component="5121:5917" className="absolute left-[4px] top-[4px]" />
</div></div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-figma-node="5621:29041" className="box-border w-[472px] h-[1px] bg-[#e2d9d0]" />
              <div data-figma-node="5621:29042" className="box-border w-[472px] h-[38px] relative flex items-center gap-[12px] gap-3">
                <Link data-figma-node="5621:29043" href="/manage-holiday" className="box-border w-[78px] h-[38px] rounded-[6px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-[#231f20]"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#4a5568] whitespace-nowrap">Cancel</span></Link>
                <Link data-figma-node="5621:29045" href="/manage-holiday" className="box-border w-[129px] h-[38px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-[#a21d35] hover:opacity-90"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#ffffff] whitespace-nowrap">Save Holiday</span></Link>
              </div>
            </div>
          </div>
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
