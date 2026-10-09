/**
 * Luna generated layout
 * Figma node: 5621:28294
 * Section: Content Column
 * Route: /manage-holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { ActiveFalseSizeDefault_e6eaad3f } from "./ActiveFalseSizeDefault_e6eaad3f";
import { ActiveTrueSizeDefault_ddd4f79d } from "./ActiveTrueSizeDefault_ddd4f79d";
import { Calendar_895821db } from "./Calendar_895821db";
import { FiRrPencil_93ff9a17 } from "./FiRrPencil_93ff9a17";
import { FiRrTrash_ffb59942 } from "./FiRrTrash_ffb59942";
import { figmaItemProps, figmaTextContent } from "./figmaDisplay";
import { useFigmaPagination } from "./useFigmaScreenData";
export function ManageHolidayContentColumnSection() {
  const { setCurrentPage, goPrev, goNext, isActive } = useFigmaPagination(10);
  return (
    <section data-figma-node="5621:28294" data-figma-list-field="items" className="absolute box-border left-[0px] top-[169px] w-full min-w-0 h-[601px] [--fx:0] [--fww:1440] flex flex-col items-start z-[2]">
      <div data-figma-node="5621:28295" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5621:28296" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-background-2">
          <div data-figma-node="5621:28297" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-[#e2d9d0] border-[1px] bg-background-tinted-6">
            <p data-figma-node="5621:28298" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Holiday Name</p>
            <p data-figma-node="5621:28299" className="box-border w-[150px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">START DATE</p>
            <p data-figma-node="5621:28300" className="box-border w-[150px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">END DATE</p>
            <p data-figma-node="5621:28301" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Status</p>
            <p data-figma-node="5621:28303" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-right whitespace-nowrap text-text-body-1">Actions</p>
          </div>
          <div data-figma-node="5621:28304" {...figmaItemProps("5621:28304")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28305" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28472" className="box-border w-[32px] h-[32px] rounded-[20px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                <Calendar_895821db data-figma-node="5621:28473" data-figma-component="5111:8245" className="relative" />
              </div>
              <p data-figma-node="5621:28307" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5621:28307", "New Year's Day")}</p>
            </div>
            <p data-figma-node="5621:28308" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28308", "January 1, 2026")}</p>
            <p data-figma-node="5621:28498" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28498", "January 1, 2026")}</p>
            <div data-figma-node="5621:28311" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5621:28312" data-figma-component="5111:12391" className="relative" />
            </div>
            <div data-figma-node="5621:28314" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28315" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrPencil_93ff9a17 data-figma-node="5621:28316" data-figma-component="5121:9154" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="5621:28317" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrTrash_ffb59942 data-figma-node="5621:28318" data-figma-component="5121:9660" className="relative overflow-hidden rounded-[4px]" />
              </div>
            </div>
          </div>
          <div data-figma-node="5621:28319" {...figmaItemProps("5621:28319")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28320" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28476" className="box-border w-[32px] h-[32px] rounded-[20px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                <Calendar_895821db data-figma-node="5621:28477" data-figma-component="5111:8245" className="relative" />
              </div>
              <p data-figma-node="5621:28322" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5621:28322", "Memorial Day")}</p>
            </div>
            <p data-figma-node="5621:28500" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28500", "January 1, 2026")}</p>
            <p data-figma-node="5621:28501" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28501", "January 1, 2026")}</p>
            <div data-figma-node="5621:28326" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5621:28327" data-figma-component="5111:12391" className="relative" />
            </div>
            <div data-figma-node="5621:28329" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28330" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrPencil_93ff9a17 data-figma-node="5621:28331" data-figma-component="5121:9154" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="5621:28332" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrTrash_ffb59942 data-figma-node="5621:28333" data-figma-component="5121:9660" className="relative overflow-hidden rounded-[4px]" />
              </div>
            </div>
          </div>
          <div data-figma-node="5621:28334" {...figmaItemProps("5621:28334")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28335" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28480" className="box-border w-[32px] h-[32px] rounded-[20px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                <Calendar_895821db data-figma-node="5621:28481" data-figma-component="5111:8245" className="relative" />
              </div>
              <p data-figma-node="5621:28337" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5621:28337", "4th of July")}</p>
            </div>
            <p data-figma-node="5621:28503" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28503", "January 1, 2026")}</p>
            <p data-figma-node="5621:28504" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28504", "January 1, 2026")}</p>
            <div data-figma-node="5621:28341" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5621:28342" data-figma-component="5111:12391" className="relative" />
            </div>
            <div data-figma-node="5621:28344" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28345" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrPencil_93ff9a17 data-figma-node="5621:28346" data-figma-component="5121:9154" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="5621:28347" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrTrash_ffb59942 data-figma-node="5621:28348" data-figma-component="5121:9660" className="relative overflow-hidden rounded-[4px]" />
              </div>
            </div>
          </div>
          <div data-figma-node="5621:28349" {...figmaItemProps("5621:28349")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28350" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28484" className="box-border w-[32px] h-[32px] rounded-[20px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                <Calendar_895821db data-figma-node="5621:28485" data-figma-component="5111:8245" className="relative" />
              </div>
              <p data-figma-node="5621:28352" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5621:28352", "Labor Day")}</p>
            </div>
            <p data-figma-node="5621:28506" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28506", "January 1, 2026")}</p>
            <p data-figma-node="5621:28507" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28507", "January 1, 2026")}</p>
            <div data-figma-node="5621:28356" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveFalseSizeDefault_e6eaad3f data-figma-node="5621:28357" data-figma-component="5111:12395" className="relative" />
            </div>
            <div data-figma-node="5621:28359" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28360" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrPencil_93ff9a17 data-figma-node="5621:28361" data-figma-component="5121:9154" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="5621:28362" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <div data-figma-node="5621:28363" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative">
                  <svg data-figma-node="I5621:28363;403:1201" viewBox="0 0 13.33 16" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[13px] h-[16px] absolute left-[1px] top-[0px] pointer-events-none overflow-visible"><path d="M12.6667 2.66667L10.6 2.66667C10.4453 1.91428 10.0359 1.23823 9.44083 0.752479C8.84579 0.266727 8.10147 0.000969683 7.33333 8.88178e-16L6 0C5.23186 0.000969683 4.48755 0.266727 3.8925 0.752479C3.29745 1.23823 2.88806 1.91428 2.73333 2.66667L0.666667 2.66667C0.489856 2.66667 0.320286 2.7369 0.195262 2.86193C0.0702379 2.98695 5.92119e-16 3.15652 0 3.33333C2.96059e-16 3.51014 0.0702379 3.67971 0.195262 3.80474C0.320286 3.92976 0.489856 4 0.666667 4L1.33333 4L1.33333 12.6667C1.33439 13.5504 1.68592 14.3976 2.31081 15.0225C2.9357 15.6474 3.78294 15.9989 4.66667 16L8.66667 16C9.5504 15.9989 10.3976 15.6474 11.0225 15.0225C11.6474 14.3976 11.9989 13.5504 12 12.6667L12 4L12.6667 4C12.8435 4 13.013 3.92976 13.1381 3.80474C13.2631 3.67971 13.3333 3.51014 13.3333 3.33333C13.3333 3.15652 13.2631 2.98695 13.1381 2.86193C13.013 2.7369 12.8435 2.66667 12.6667 2.66667L12.6667 2.66667ZM6 1.33333L7.33333 1.33333C7.74685 1.33384 8.15008 1.46225 8.48774 1.70096C8.8254 1.93967 9.08094 2.27699 9.21933 2.66667L4.114 2.66667C4.25239 2.27699 4.50793 1.93967 4.84559 1.70096C5.18325 1.46225 5.58648 1.33384 6 1.33333L6 1.33333ZM10.6667 12.6667C10.6667 13.1971 10.456 13.7058 10.0809 14.0809C9.70581 14.456 9.1971 14.6667 8.66667 14.6667L4.66667 14.6667C4.13623 14.6667 3.62753 14.456 3.25245 14.0809C2.87738 13.7058 2.66667 13.1971 2.66667 12.6667L2.66667 4L10.6667 4L10.6667 12.6667Z" fill="#a21d35" /></svg>
                  <svg data-figma-node="I5621:28363;403:1202" viewBox="0 0 1.33 5.33" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[1px] h-[5px] absolute left-[0px] top-[1px] pointer-events-none overflow-visible"><path d="M0.666665 5.33332C0.843476 5.33332 1.01304 5.26309 1.13807 5.13806C1.26309 5.01304 1.33333 4.84347 1.33333 4.66666L1.33333 0.666665C1.33333 0.489855 1.26309 0.320286 1.13807 0.195262C1.01304 0.0702379 0.843476 0 0.666665 0C0.489855 0 0.320286 0.0702379 0.195262 0.195262C0.0702379 0.320286 0 0.489855 0 0.666665L0 4.66666C0 4.84347 0.0702379 5.01304 0.195262 5.13806C0.320286 5.26309 0.489855 5.33332 0.666665 5.33332Z" fill="#a21d35" /></svg>
                  <svg data-figma-node="I5621:28363;403:1203" viewBox="0 0 1.33 5.33" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[1px] h-[5px] absolute left-[9px] top-[7px] pointer-events-none overflow-visible"><path d="M0.666671 5.33332C0.843482 5.33332 1.01305 5.26309 1.13808 5.13806C1.2631 5.01304 1.33334 4.84347 1.33334 4.66666L1.33334 0.666665C1.33334 0.489855 1.2631 0.320286 1.13808 0.195262C1.01305 0.0702379 0.843482 0 0.666671 0C0.489858 0 0.320288 0.0702379 0.195263 0.195262C0.0702384 0.320286 0 0.489855 0 0.666665L0 4.66666C0 4.84347 0.0702384 5.01304 0.195263 5.13806C0.320288 5.26309 0.489858 5.33332 0.666671 5.33332Z" fill="#a21d35" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-node="5621:28364" {...figmaItemProps("5621:28364")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28365" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28488" className="box-border w-[32px] h-[32px] rounded-[20px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                <Calendar_895821db data-figma-node="5621:28489" data-figma-component="5111:8245" className="relative" />
              </div>
              <p data-figma-node="5621:28367" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5621:28367", "Christmas Day")}</p>
            </div>
            <p data-figma-node="5621:28512" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28512", "January 1, 2026")}</p>
            <p data-figma-node="5621:28513" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28513", "January 1, 2026")}</p>
            <div data-figma-node="5621:28371" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveFalseSizeDefault_e6eaad3f data-figma-node="5621:28372" data-figma-component="5111:12395" className="relative" />
            </div>
            <div data-figma-node="5621:28374" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28375" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrPencil_93ff9a17 data-figma-node="5621:28376" data-figma-component="5121:9154" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="5621:28377" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <div data-figma-node="5621:28378" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative">
                  <svg data-figma-node="I5621:28378;403:1201" viewBox="0 0 13.33 16" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[13px] h-[16px] absolute left-[1px] top-[0px] pointer-events-none overflow-visible"><path d="M12.6667 2.66667L10.6 2.66667C10.4453 1.91428 10.0359 1.23823 9.44083 0.752479C8.84579 0.266727 8.10147 0.000969683 7.33333 8.88178e-16L6 0C5.23186 0.000969683 4.48755 0.266727 3.8925 0.752479C3.29745 1.23823 2.88806 1.91428 2.73333 2.66667L0.666667 2.66667C0.489856 2.66667 0.320286 2.7369 0.195262 2.86193C0.0702379 2.98695 5.92119e-16 3.15652 0 3.33333C2.96059e-16 3.51014 0.0702379 3.67971 0.195262 3.80474C0.320286 3.92976 0.489856 4 0.666667 4L1.33333 4L1.33333 12.6667C1.33439 13.5504 1.68592 14.3976 2.31081 15.0225C2.9357 15.6474 3.78294 15.9989 4.66667 16L8.66667 16C9.5504 15.9989 10.3976 15.6474 11.0225 15.0225C11.6474 14.3976 11.9989 13.5504 12 12.6667L12 4L12.6667 4C12.8435 4 13.013 3.92976 13.1381 3.80474C13.2631 3.67971 13.3333 3.51014 13.3333 3.33333C13.3333 3.15652 13.2631 2.98695 13.1381 2.86193C13.013 2.7369 12.8435 2.66667 12.6667 2.66667L12.6667 2.66667ZM6 1.33333L7.33333 1.33333C7.74685 1.33384 8.15008 1.46225 8.48774 1.70096C8.8254 1.93967 9.08094 2.27699 9.21933 2.66667L4.114 2.66667C4.25239 2.27699 4.50793 1.93967 4.84559 1.70096C5.18325 1.46225 5.58648 1.33384 6 1.33333L6 1.33333ZM10.6667 12.6667C10.6667 13.1971 10.456 13.7058 10.0809 14.0809C9.70581 14.456 9.1971 14.6667 8.66667 14.6667L4.66667 14.6667C4.13623 14.6667 3.62753 14.456 3.25245 14.0809C2.87738 13.7058 2.66667 13.1971 2.66667 12.6667L2.66667 4L10.6667 4L10.6667 12.6667Z" fill="#a21d35" /></svg>
                  <svg data-figma-node="I5621:28378;403:1202" viewBox="0 0 1.33 5.33" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[1px] h-[5px] absolute left-[0px] top-[1px] pointer-events-none overflow-visible"><path d="M0.666665 5.33332C0.843476 5.33332 1.01304 5.26309 1.13807 5.13806C1.26309 5.01304 1.33333 4.84347 1.33333 4.66666L1.33333 0.666665C1.33333 0.489855 1.26309 0.320286 1.13807 0.195262C1.01304 0.0702379 0.843476 0 0.666665 0C0.489855 0 0.320286 0.0702379 0.195262 0.195262C0.0702379 0.320286 0 0.489855 0 0.666665L0 4.66666C0 4.84347 0.0702379 5.01304 0.195262 5.13806C0.320286 5.26309 0.489855 5.33332 0.666665 5.33332Z" fill="#a21d35" /></svg>
                  <svg data-figma-node="I5621:28378;403:1203" viewBox="0 0 1.33 5.33" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[1px] h-[5px] absolute left-[9px] top-[7px] pointer-events-none overflow-visible"><path d="M0.666671 5.33332C0.843482 5.33332 1.01305 5.26309 1.13808 5.13806C1.2631 5.01304 1.33334 4.84347 1.33334 4.66666L1.33334 0.666665C1.33334 0.489855 1.2631 0.320286 1.13808 0.195262C1.01305 0.0702379 0.843482 0 0.666671 0C0.489858 0 0.320288 0.0702379 0.195263 0.195262C0.0702384 0.320286 0 0.489855 0 0.666665L0 4.66666C0 4.84347 0.0702384 5.01304 0.195263 5.13806C0.320288 5.26309 0.489858 5.33332 0.666671 5.33332Z" fill="#a21d35" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div data-figma-node="5621:28379" {...figmaItemProps("5621:28379")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[0px]">
            <div data-figma-node="5621:28380" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28492" className="box-border w-[32px] h-[32px] rounded-[20px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                <Calendar_895821db data-figma-node="5621:28493" data-figma-component="5111:8245" className="relative" />
              </div>
              <p data-figma-node="5621:28382" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5621:28382", "Robert Taylor")}</p>
            </div>
            <p data-figma-node="5621:28515" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28515", "January 1, 2026")}</p>
            <p data-figma-node="5621:28516" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5621:28516", "January 1, 2026")}</p>
            <div data-figma-node="5621:28386" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5621:28387" data-figma-component="5111:12391" className="relative" />
            </div>
            <div data-figma-node="5621:28389" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28390" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrPencil_93ff9a17 data-figma-node="5621:28391" data-figma-component="5121:9154" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="5621:28392" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <div data-figma-node="5621:28393" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative">
                  <svg data-figma-node="I5621:28393;403:1201" viewBox="0 0 13.33 16" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[13px] h-[16px] absolute left-[1px] top-[0px] pointer-events-none overflow-visible"><path d="M12.6667 2.66667L10.6 2.66667C10.4453 1.91428 10.0359 1.23823 9.44083 0.752479C8.84579 0.266727 8.10147 0.000969683 7.33333 8.88178e-16L6 0C5.23186 0.000969683 4.48755 0.266727 3.8925 0.752479C3.29745 1.23823 2.88806 1.91428 2.73333 2.66667L0.666667 2.66667C0.489856 2.66667 0.320286 2.7369 0.195262 2.86193C0.0702379 2.98695 5.92119e-16 3.15652 0 3.33333C2.96059e-16 3.51014 0.0702379 3.67971 0.195262 3.80474C0.320286 3.92976 0.489856 4 0.666667 4L1.33333 4L1.33333 12.6667C1.33439 13.5504 1.68592 14.3976 2.31081 15.0225C2.9357 15.6474 3.78294 15.9989 4.66667 16L8.66667 16C9.5504 15.9989 10.3976 15.6474 11.0225 15.0225C11.6474 14.3976 11.9989 13.5504 12 12.6667L12 4L12.6667 4C12.8435 4 13.013 3.92976 13.1381 3.80474C13.2631 3.67971 13.3333 3.51014 13.3333 3.33333C13.3333 3.15652 13.2631 2.98695 13.1381 2.86193C13.013 2.7369 12.8435 2.66667 12.6667 2.66667L12.6667 2.66667ZM6 1.33333L7.33333 1.33333C7.74685 1.33384 8.15008 1.46225 8.48774 1.70096C8.8254 1.93967 9.08094 2.27699 9.21933 2.66667L4.114 2.66667C4.25239 2.27699 4.50793 1.93967 4.84559 1.70096C5.18325 1.46225 5.58648 1.33384 6 1.33333L6 1.33333ZM10.6667 12.6667C10.6667 13.1971 10.456 13.7058 10.0809 14.0809C9.70581 14.456 9.1971 14.6667 8.66667 14.6667L4.66667 14.6667C4.13623 14.6667 3.62753 14.456 3.25245 14.0809C2.87738 13.7058 2.66667 13.1971 2.66667 12.6667L2.66667 4L10.6667 4L10.6667 12.6667Z" fill="#a21d35" /></svg>
                  <svg data-figma-node="I5621:28393;403:1202" viewBox="0 0 1.33 5.33" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[1px] h-[5px] absolute left-[0px] top-[1px] pointer-events-none overflow-visible"><path d="M0.666665 5.33332C0.843476 5.33332 1.01304 5.26309 1.13807 5.13806C1.26309 5.01304 1.33333 4.84347 1.33333 4.66666L1.33333 0.666665C1.33333 0.489855 1.26309 0.320286 1.13807 0.195262C1.01304 0.0702379 0.843476 0 0.666665 0C0.489855 0 0.320286 0.0702379 0.195262 0.195262C0.0702379 0.320286 0 0.489855 0 0.666665L0 4.66666C0 4.84347 0.0702379 5.01304 0.195262 5.13806C0.320286 5.26309 0.489855 5.33332 0.666665 5.33332Z" fill="#a21d35" /></svg>
                  <svg data-figma-node="I5621:28393;403:1203" viewBox="0 0 1.33 5.33" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[1px] h-[5px] absolute left-[9px] top-[7px] pointer-events-none overflow-visible"><path d="M0.666671 5.33332C0.843482 5.33332 1.01305 5.26309 1.13808 5.13806C1.2631 5.01304 1.33334 4.84347 1.33334 4.66666L1.33334 0.666665C1.33334 0.489855 1.2631 0.320286 1.13808 0.195262C1.01305 0.0702379 0.843482 0 0.666671 0C0.489858 0 0.320288 0.0702379 0.195263 0.195262C0.0702384 0.320286 0 0.489855 0 0.666665L0 4.66666C0 4.84347 0.0702384 5.01304 0.195263 5.13806C0.320288 5.26309 0.489858 5.33332 0.666671 5.33332Z" fill="#a21d35" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-node="5621:28394" data-figma-pagination="true" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5621:28395" className="box-border w-max max-w-[145px] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-muted-1">Showing 1-6 of 18 users</p>
          <div data-figma-node="5621:28396" data-figma-pagination="true" className="box-border w-max max-w-[173px] h-[27px] relative flex flex-row items-start gap-1.5">
            <button data-figma-node="5621:28397" type="button" onClick={goPrev} className="box-border w-max max-w-[47px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer">
              <p data-figma-node="5621:28398" className="box-border w-max max-w-[27px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Prev</p>
            </button>
            <button data-figma-node="5621:28399" type="button" onClick={() => setCurrentPage(1)} className={isActive(1) ? "box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-brand-primary-1 cursor-pointer" : "box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer"}>
              <p data-figma-node="5621:28400" className={isActive(1) ? "box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-background-2" : "box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1"}>1</p>
            </button>
            <button data-figma-node="5621:28401" type="button" onClick={() => setCurrentPage(2)} className={isActive(2) ? "box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-brand-primary-1 cursor-pointer" : "box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer"}>
              <p data-figma-node="5621:28402" className={isActive(2) ? "box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-background-2" : "box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1"}>2</p>
            </button>
            <button data-figma-node="5621:28403" type="button" onClick={goNext} className="box-border w-max max-w-[48px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer">
              <p data-figma-node="5621:28404" className="box-border w-max max-w-[28px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Next</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
