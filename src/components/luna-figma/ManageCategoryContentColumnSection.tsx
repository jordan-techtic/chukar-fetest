/**
 * Luna generated layout
 * Figma node: 5449:19142
 * Section: Content Column
 * Route: /manage-category
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import { figmaItemProps, figmaTextContent } from "./figmaDisplay";
import {
  FIGMA_CATEGORIES_OPERATION,
  figmaCategoryDeleteProps,
  figmaCategoryToggleProps,
  figmaPaginationProps,
  figmaStatusSwitchChecked,
} from "./useFigmaScreenData";
import { FiRrTrash_ffb59942 } from "./FiRrTrash_ffb59942";
import { FiRrPencil_93ff9a17 } from "./FiRrPencil_93ff9a17";
export function ManageCategoryContentColumnSection() {
  const pagination = figmaPaginationProps("5449:19186", {
    listOperation: FIGMA_CATEGORIES_OPERATION,
    pageSize: 3,
  });
  const switchChecked: Record<"5449:19151" | "5449:19162" | "5449:19173", boolean> = {
    "5449:19151": figmaStatusSwitchChecked("5449:19151", FIGMA_CATEGORIES_OPERATION, "active"),
    "5449:19162": figmaStatusSwitchChecked("5449:19162", FIGMA_CATEGORIES_OPERATION, "active"),
    "5449:19173": figmaStatusSwitchChecked("5449:19173", FIGMA_CATEGORIES_OPERATION, "active"),
  };
  return (
    <section data-figma-node="5449:19142" className="absolute box-border left-[0px] top-[169px] w-full min-w-0 h-[601px] [--fx:0] [--fww:1440] flex flex-col items-start z-[2]">
      <div data-figma-node="5449:19143" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5449:19144" className="box-border w-full min-w-0 h-[223px] overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-background-ffffff">
          <div data-figma-node="5449:19145" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-[#e2d9d0] border-[1px] bg-background-tinted-faf3e8">
            <p data-figma-node="5449:19146" className="box-border w-[200px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Category Name</p>
            <p data-figma-node="5449:19147" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Description</p>
            <p data-figma-node="5449:19148" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Status</p>
            <p data-figma-node="5449:19149" className="box-border w-[140px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Created Date</p>
            <p data-figma-node="5449:19150" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-right whitespace-nowrap text-text-body-231f20">Actions</p>
          </div>
          <div data-figma-node="5449:19151" {...figmaItemProps("5449:19151")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <p data-figma-node="5449:19152" className="box-border w-[200px] h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">Promotions</p>
            <p data-figma-node="5449:19153" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5449:19153", "Email, SMS, and other promotional sends")}</p>
            <div data-figma-node="5449:19154" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button data-figma-node="5449:19155" data-figma-component="5111:12391" type="button" role="switch" aria-checked={switchChecked["5449:19151"]} aria-label="Switch"{...figmaCategoryToggleProps("5449:19151")} className="box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative inline-flex flex-row items-center gap-0.5 bg-brand-primary-a21d35">
  <div data-figma-node="I5449:19155;315:8655" className="box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5449:19155;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5449:19155;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</button></div>
            <p data-figma-node="5449:19156" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">Aug 12, 2026</p>
            <div data-figma-node="5449:19157" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5449:19158" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><FiRrPencil_93ff9a17 data-figma-node="5449:19159" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <div data-figma-node="5449:19160" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Delete"{...figmaCategoryDeleteProps("5449:19151")} className="inline-flex items-center justify-center"><FiRrTrash_ffb59942 data-figma-node="5449:19161" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
          <div data-figma-node="5449:19162" {...figmaItemProps("5449:19162")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <p data-figma-node="5449:19163" className="box-border w-[200px] h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">Content</p>
            <p data-figma-node="5449:19164" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5449:19164", "Blog posts, social posts, and other content")}</p>
            <div data-figma-node="5449:19165" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button data-figma-node="5449:19166" data-figma-component="5111:12391" type="button" role="switch" aria-checked={switchChecked["5449:19162"]} aria-label="Switch"{...figmaCategoryToggleProps("5449:19162")} className="box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative inline-flex flex-row items-center gap-0.5 bg-brand-primary-a21d35">
  <div data-figma-node="I5449:19166;315:8655" className="box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5449:19166;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5449:19166;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</button></div>
            <p data-figma-node="5449:19167" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">Aug 15, 2026</p>
            <div data-figma-node="5449:19168" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5449:19169" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><FiRrPencil_93ff9a17 data-figma-node="5449:19170" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <div data-figma-node="5449:19171" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Delete"{...figmaCategoryDeleteProps("5449:19162")} className="inline-flex items-center justify-center"><FiRrTrash_ffb59942 data-figma-node="5449:19172" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
          <div data-figma-node="5449:19173" {...figmaItemProps("5449:19173")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[16px] pr-[24px] pb-[16px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <p data-figma-node="5449:19174" className="box-border w-[200px] h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">Focuses</p>
            <p data-figma-node="5449:19175" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5449:19175", "Product and seasonal campaign focuses")}</p>
            <div data-figma-node="5449:19176" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button data-figma-node="5449:19177" data-figma-component="5111:12391" type="button" role="switch" aria-checked={switchChecked["5449:19173"]} aria-label="Switch"{...figmaCategoryToggleProps("5449:19173")} className="box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative inline-flex flex-row items-center gap-0.5 bg-brand-primary-a21d35">
  <div data-figma-node="I5449:19177;315:8655" className="box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5449:19177;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5449:19177;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</button></div>
            <p data-figma-node="5449:19178" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">Aug 20, 2026</p>
            <div data-figma-node="5449:19179" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5449:19180" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><FiRrPencil_93ff9a17 data-figma-node="5449:19181" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <div data-figma-node="5449:19182" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Delete"{...figmaCategoryDeleteProps("5449:19173")} className="inline-flex items-center justify-center"><FiRrTrash_ffb59942 data-figma-node="5449:19183" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
        </div>
        <div data-figma-node="5449:19184" data-figma-pagination="true" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5449:19185" className="box-border w-max max-w-[175px] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-muted-686868">Showing 1-5 of 12 categories</p>
          <div data-figma-node="5449:19186" data-figma-pagination="true" className="box-border w-max max-w-[173px] h-[27px] relative flex flex-row items-start gap-1.5">
            <div data-figma-node="5449:19187" onClick={pagination.goPrev} role="button" aria-label="Previous page" aria-disabled={!pagination.canPrev} className="box-border w-max max-w-[47px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
              <p data-figma-node="5449:19188" className="box-border w-max max-w-[27px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Prev</p>
            </div>
            <div data-figma-node="5449:19189" onClick={() => pagination.goTo(1)} role="button" aria-label="Page 1" aria-current={pagination.currentPage === 1 ? "page" : undefined} className={`box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${pagination.chipClass(1)}`}>
              <p data-figma-node="5449:19190" className={`box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap ${pagination.chipTextClass(1)}`}>1</p>
            </div>
            <div data-figma-node="5449:19191" onClick={() => pagination.goTo(2)} role="button" aria-label="Page 2" aria-current={pagination.currentPage === 2 ? "page" : undefined} className={`box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${pagination.chipClass(2)}`}>
              <p data-figma-node="5449:19192" className={`box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap ${pagination.chipTextClass(2)}`}>2</p>
            </div>
            <div data-figma-node="5449:19193" onClick={pagination.goNext} role="button" aria-label="Next page" aria-disabled={!pagination.canNext} className="box-border w-max max-w-[48px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
              <p data-figma-node="5449:19194" className="box-border w-max max-w-[28px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Next</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
