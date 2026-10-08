/**
 * Luna generated page
 * Figma frame: 5359:17278
 * Page: Add-category
 * Route: /add-category
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
import { FiRrCrossSmall_aec28f27 } from "./FiRrCrossSmall_aec28f27";
import { PenField_051ce1e3 } from "./PenField_051ce1e3";
import { Shared_08359495 } from "./Shared_08359495";
import {
  figmaActionProps,
  figmaFieldProps,
  useFigmaFieldError,
} from "./useFigmaScreenData";

export function AddCategoryPage() {
  const screenData = useFigmaScreenData();
  const titleError = useFigmaFieldError("title");
  const descriptionError = useFigmaFieldError("description");
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5359:17278"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={770} nodeId="frame">
        <TitleRowSection />
        <ContentColumnSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <Shared_08359495 data-figma-node="5354:14252" data-figma-component="5273:20995" className="pointer-events-auto absolute left-[0px] top-[0px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[3]">
          <div data-figma-node="5449:19238" className="pointer-events-auto box-border w-[1440px] h-[770px] absolute left-[0px] top-[0px] [--fx:0] [--fww:1440] flex flex-row items-center justify-center pt-[171px] pr-[460px] pb-[171px] pl-[460px]" style={{backgroundColor: "rgba(26, 32, 44, 0.584)"}}>
            <div data-figma-node="5449:19239" className="box-border w-[520px] h-[428px] rounded-[12px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)] relative flex flex-col items-center gap-[24px] gap-6 pt-[24px] pr-[24px] pb-[24px] pl-[24px] bg-[#ffffff]">
              <div data-figma-node="5449:19240" className="box-border w-[472px] h-[32px] relative">
                <div data-figma-node="5449:19241" className="box-border w-[177px] h-[24px] absolute left-[0px] top-[4px] [--fx:0] [--fww:177] flex items-center gap-[8px] gap-2">
                  <PenField_051ce1e3 data-figma-node="5449:19242" data-figma-component="5111:7679" className="relative" />
                  <p data-figma-node="5449:19243" className="box-border w-[145px] h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-[#231f20]">Create Category</p>
                </div>
                <div data-figma-node="5449:19244" className="box-border w-[32px] h-[32px] absolute left-[440px] top-[0px] [--fx:440] [--fww:32] gap-3">
                  <a data-figma-node="5449:19245" href="/manage-category" className="box-border w-[32px] h-[32px] absolute left-[0px] top-[0px] [--fx:0] [--fww:32] rounded-[6px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-[#fff9f3]">
                    <FiRrCrossSmall_aec28f27 data-figma-node="5449:19246" data-figma-component="5121:8491" className="absolute left-[4px] top-[4px]" />
                  </a>
                </div>
              </div>
              <div data-figma-node="5449:19247" className="box-border w-[472px] h-[238px] relative flex flex-col items-center gap-[16px] gap-4">
                <div data-figma-node="5449:19248" className="box-border w-[472px] h-[65px] relative flex flex-col items-start gap-[6px] gap-1.5">
                  <p data-figma-node="5449:19249" className="box-border w-[35px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] text-left whitespace-nowrap text-[#4a5568]">Title</p>
                  <input data-figma-node="5449:19250" name="title" data-figma-field="title" data-figma-field-origin="schema" {...figmaFieldProps("title")} type="text" placeholder="e.g., Q4 Product Launch Campaign" aria-label="e.g., Q4 Product Launch Campaign" className="box-border w-[472px] h-[44px] rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-[#231f20] placeholder:text-[#a0aec0] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap" />
                  {titleError ? (
                    <p id="figma-field-error-title" role="alert" className="font-onest text-[12px] font-[400] leading-[15px] text-[#da002f]">
                      {titleError}
                    </p>
                  ) : null}
                </div>
                <div data-figma-node="5449:19253" className="box-border w-[472px] h-[157px] relative flex flex-col items-start gap-[6px] gap-1.5">
                  <p data-figma-node="5449:19254" className="box-border w-[87px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] text-left whitespace-nowrap text-[#4a5568]">Description</p>
                  <div data-figma-node="5449:19255" className="box-border w-[472px] h-[136px] rounded-[8px] relative gap-1 pr-[12px] pb-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                    <textarea data-figma-node="5449:19260" name="description" data-figma-field="description" data-figma-field-origin="schema" {...figmaFieldProps("description")} placeholder="Describe key objectives, milestones and channels..." aria-label="Describe key objectives, milestones and channels..." className="box-border w-[472px] h-[136px] resize-none rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-0 bg-transparent pt-[10px] pr-[20px] pb-[10px] pl-[20px] text-[#231f20] placeholder:text-[#a0aec0] font-onest text-[14px] font-[400] leading-[18px] text-left" />
                  </div>
                  {descriptionError ? (
                    <p id="figma-field-error-description" role="alert" className="font-onest text-[12px] font-[400] leading-[15px] text-[#da002f]">
                      {descriptionError}
                    </p>
                  ) : null}
                </div>
              </div>
              <div data-figma-node="5449:19298" className="box-border w-[472px] h-[1px] bg-[#e2d9d0]" />
              <div data-figma-node="5449:19299" className="box-border w-[472px] h-[38px] relative flex items-center gap-[12px] gap-3">
                <a data-figma-node="5449:19300" href="/manage-category" className="box-border w-[78px] h-[38px] rounded-[6px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-[#0b0b0b]"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#4a5568] whitespace-nowrap">Cancel</span></a>
                <button data-figma-node="5449:19302" type="button" {...figmaActionProps("act_4acaeab4fb49")} className="box-border w-[153px] h-[38px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-[#a21d35] hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#ffffff] whitespace-nowrap">Create Category</span></button>
              </div>
            </div>
          </div>
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
