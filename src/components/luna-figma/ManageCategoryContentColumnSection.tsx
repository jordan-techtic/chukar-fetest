/**
 * Luna generated layout
 * Figma node: 5449:19142
 * Section: Content Column
 * Route: /manage-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { ActiveTrueSizeDefault_ddd4f79d } from "./ActiveTrueSizeDefault_ddd4f79d";
import { FiRrPencil_93ff9a17 } from "./FiRrPencil_93ff9a17";
import { FiRrTrash_ffb59942 } from "./FiRrTrash_ffb59942";
import { figmaItemProps, figmaTextContent } from "./figmaDisplay";
import { useFigmaPagination } from "./useFigmaScreenData";
export function ManageCategoryContentColumnSection() {
  const { setCurrentPage, goPrev, goNext, isActive } = useFigmaPagination(10);
  return (
    <section data-figma-node="5449:19142" data-figma-list-field="items" className="absolute box-border left-[0px] top-[169px] w-full min-w-0 h-[601px] [--fx:0] [--fww:1440] flex flex-col items-start z-[2]">
      <div data-figma-node="5449:19143" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5449:19144" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-background-2">
          <div data-figma-node="5449:19145" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-[#e2d9d0] border-[1px] bg-background-tinted-6">
            <p data-figma-node="5449:19146" className="box-border w-[200px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Category Name</p>
            <p data-figma-node="5449:19147" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Description</p>
            <p data-figma-node="5449:19148" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Status</p>
            <p data-figma-node="5449:19149" className="box-border w-[140px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Created Date</p>
            <p data-figma-node="5449:19150" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-right whitespace-nowrap text-text-body-1">Actions</p>
          </div>
          <div data-figma-node="5449:19151" {...figmaItemProps("5449:19151")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <p data-figma-node="5449:19152" className="box-border w-[200px] h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5449:19152", "Promotions")}</p>
            <p data-figma-node="5449:19153" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5449:19153", "Email, SMS, and other promotional sends")}</p>
            <div data-figma-node="5449:19154" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5449:19155" data-figma-component="5111:12391" className="relative" />
            </div>
            <p data-figma-node="5449:19156" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5449:19156", "Aug 12, 2026")}</p>
            <div data-figma-node="5449:19157" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5449:19158" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrPencil_93ff9a17 data-figma-node="5449:19159" data-figma-component="5121:9154" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="5449:19160" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrTrash_ffb59942 data-figma-node="5449:19161" data-figma-component="5121:9660" className="relative overflow-hidden rounded-[4px]" />
              </div>
            </div>
          </div>
          <div data-figma-node="5449:19162" {...figmaItemProps("5449:19162")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <p data-figma-node="5449:19163" className="box-border w-[200px] h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5449:19163", "Content")}</p>
            <p data-figma-node="5449:19164" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5449:19164", "Blog posts, social posts, and other content")}</p>
            <div data-figma-node="5449:19165" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5449:19166" data-figma-component="5111:12391" className="relative" />
            </div>
            <p data-figma-node="5449:19167" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5449:19167", "Aug 15, 2026")}</p>
            <div data-figma-node="5449:19168" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5449:19169" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrPencil_93ff9a17 data-figma-node="5449:19170" data-figma-component="5121:9154" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="5449:19171" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrTrash_ffb59942 data-figma-node="5449:19172" data-figma-component="5121:9660" className="relative overflow-hidden rounded-[4px]" />
              </div>
            </div>
          </div>
          <div data-figma-node="5449:19173" {...figmaItemProps("5449:19173")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <p data-figma-node="5449:19174" className="box-border w-[200px] h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5449:19174", "Focuses")}</p>
            <p data-figma-node="5449:19175" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5449:19175", "Product and seasonal campaign focuses")}</p>
            <div data-figma-node="5449:19176" className="box-border w-[100px] h-[16px] relative flex flex-row items-center">
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="5449:19177" data-figma-component="5111:12391" className="relative" />
            </div>
            <p data-figma-node="5449:19178" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-1">{figmaTextContent("5449:19178", "Aug 20, 2026")}</p>
            <div data-figma-node="5449:19179" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5449:19180" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrPencil_93ff9a17 data-figma-node="5449:19181" data-figma-component="5121:9154" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="5449:19182" className="box-border w-[28px] h-[28px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] bg-background-tinted-6">
                <FiRrTrash_ffb59942 data-figma-node="5449:19183" data-figma-component="5121:9660" className="relative overflow-hidden rounded-[4px]" />
              </div>
            </div>
          </div>
        </div>
        <div data-figma-node="5449:19184" data-figma-pagination="true" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5449:19185" className="box-border w-max max-w-[175px] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-muted-1">Showing 1-5 of 12 categories</p>
          <div data-figma-node="5449:19186" data-figma-pagination="true" className="box-border w-max max-w-[173px] h-[27px] relative flex flex-row items-start gap-1.5">
            <button data-figma-node="5449:19187" type="button" onClick={goPrev} className="box-border w-max max-w-[47px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer">
              <p data-figma-node="5449:19188" className="box-border w-max max-w-[27px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Prev</p>
            </button>
            <button data-figma-node="5449:19189" type="button" onClick={() => setCurrentPage(1)} className={isActive(1) ? "box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-brand-primary-1 cursor-pointer" : "box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer"}>
              <p data-figma-node="5449:19190" className={isActive(1) ? "box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-background-2" : "box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1"}>1</p>
            </button>
            <button data-figma-node="5449:19191" type="button" onClick={() => setCurrentPage(2)} className={isActive(2) ? "box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-brand-primary-1 cursor-pointer" : "box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer"}>
              <p data-figma-node="5449:19192" className={isActive(2) ? "box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-background-2" : "box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1"}>2</p>
            </button>
            <button data-figma-node="5449:19193" type="button" onClick={goNext} className="box-border w-max max-w-[48px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer">
              <p data-figma-node="5449:19194" className="box-border w-max max-w-[28px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Next</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
