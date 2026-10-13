/**
 * Luna generated layout
 * Figma node: 5621:28294
 * Section: Content Column
 * Route: /manage-holiday
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import { figmaItemProps, figmaTextContent } from "./figmaDisplay";
import {
  FIGMA_HOLIDAYS_OPERATION,
  figmaHolidayDeleteProps,
  figmaHolidayToggleProps,
  figmaPaginationProps,
  figmaStatusSwitchChecked,
} from "./useFigmaScreenData";
import { FiRrTrash_ffb59942 } from "./FiRrTrash_ffb59942";
import { FiRrPencil_93ff9a17 } from "./FiRrPencil_93ff9a17";
import { Calendar_895821db } from "./Calendar_895821db";
export function ManageHolidayContentColumnSection() {
  const pagination = figmaPaginationProps("5621:28396", {
    listOperation: FIGMA_HOLIDAYS_OPERATION,
    pageSize: 6,
  });
  const switchChecked: Record<
    "5621:28304" | "5621:28319" | "5621:28334" | "5621:28349" | "5621:28364" | "5621:28379",
    boolean
  > = {
    "5621:28304": figmaStatusSwitchChecked("5621:28304", FIGMA_HOLIDAYS_OPERATION, "active"),
    "5621:28319": figmaStatusSwitchChecked("5621:28319", FIGMA_HOLIDAYS_OPERATION, "active"),
    "5621:28334": figmaStatusSwitchChecked("5621:28334", FIGMA_HOLIDAYS_OPERATION, "active"),
    "5621:28349": figmaStatusSwitchChecked("5621:28349", FIGMA_HOLIDAYS_OPERATION, "active"),
    "5621:28364": figmaStatusSwitchChecked("5621:28364", FIGMA_HOLIDAYS_OPERATION, "active"),
    "5621:28379": figmaStatusSwitchChecked("5621:28379", FIGMA_HOLIDAYS_OPERATION, "active"),
  };
  return (
    <section data-figma-node="5621:28294" className="absolute box-border left-[0px] top-[169px] w-full min-w-0 h-[601px] [--fx:0] [--fww:1440] flex flex-col items-start z-[2]">
      <div data-figma-node="5621:28295" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5621:28296" className="box-border w-full min-w-0 h-[379px] overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-background-ffffff">
          <div data-figma-node="5621:28297" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-[#e2d9d0] border-[1px] bg-background-tinted-faf3e8">
            <p data-figma-node="5621:28298" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Holiday Name</p>
            <p data-figma-node="5621:28299" className="box-border w-[150px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">START DATE</p>
            <p data-figma-node="5621:28300" className="box-border w-[150px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">END DATE</p>
            <p data-figma-node="5621:28301" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Status</p>
            <p data-figma-node="5621:28303" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-right whitespace-nowrap text-text-body-231f20">Actions</p>
          </div>
          <div data-figma-node="5621:28304" {...figmaItemProps("5621:28304")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28305" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28472" className="box-border w-[32px] h-[32px] rounded-[20px] flex flex-row items-center justify-center"><button type="button" aria-label="calendar" className="inline-flex items-center justify-center"><Calendar_895821db data-figma-node="5621:28473" data-figma-component="5111:8245" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <p data-figma-node="5621:28307" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5621:28307", "New Year's Day")}</p>
            </div>
            <p data-figma-node="5621:28308" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <p data-figma-node="5621:28498" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <div data-figma-node="5621:28311" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button data-figma-node="5621:28312" data-figma-component="5111:12391" type="button" role="switch" aria-checked={switchChecked["5621:28304"]} aria-label="Switch"{...figmaHolidayToggleProps("5621:28304")} className="box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative inline-flex flex-row items-center gap-0.5 bg-brand-primary-a21d35">
  <div data-figma-node="I5621:28312;315:8655" className="box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5621:28312;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5621:28312;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</button></div>
            <div data-figma-node="5621:28314" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28315" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><FiRrPencil_93ff9a17 data-figma-node="5621:28316" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <div data-figma-node="5621:28317" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Delete"{...figmaHolidayDeleteProps("5621:28304")} className="inline-flex items-center justify-center"><FiRrTrash_ffb59942 data-figma-node="5621:28318" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
          <div data-figma-node="5621:28319" {...figmaItemProps("5621:28319")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28320" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28476" className="box-border w-[32px] h-[32px] rounded-[20px] flex flex-row items-center justify-center"><button type="button" aria-label="calendar" className="inline-flex items-center justify-center"><Calendar_895821db data-figma-node="5621:28477" data-figma-component="5111:8245" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <p data-figma-node="5621:28322" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5621:28322", "Memorial Day")}</p>
            </div>
            <p data-figma-node="5621:28500" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <p data-figma-node="5621:28501" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <div data-figma-node="5621:28326" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button data-figma-node="5621:28327" data-figma-component="5111:12391" type="button" role="switch" aria-checked={switchChecked["5621:28319"]} aria-label="Switch"{...figmaHolidayToggleProps("5621:28319")} className="box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative inline-flex flex-row items-center gap-0.5 bg-brand-primary-a21d35">
  <div data-figma-node="I5621:28327;315:8655" className="box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5621:28327;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5621:28327;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</button></div>
            <div data-figma-node="5621:28329" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28330" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><FiRrPencil_93ff9a17 data-figma-node="5621:28331" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <div data-figma-node="5621:28332" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Delete"{...figmaHolidayDeleteProps("5621:28319")} className="inline-flex items-center justify-center"><FiRrTrash_ffb59942 data-figma-node="5621:28333" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
          <div data-figma-node="5621:28334" {...figmaItemProps("5621:28334")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28335" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28480" className="box-border w-[32px] h-[32px] rounded-[20px] flex flex-row items-center justify-center"><button type="button" aria-label="calendar" className="inline-flex items-center justify-center"><Calendar_895821db data-figma-node="5621:28481" data-figma-component="5111:8245" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <p data-figma-node="5621:28337" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5621:28337", "4th of July")}</p>
            </div>
            <p data-figma-node="5621:28503" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <p data-figma-node="5621:28504" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <div data-figma-node="5621:28341" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button data-figma-node="5621:28342" data-figma-component="5111:12391" type="button" role="switch" aria-checked={switchChecked["5621:28334"]} aria-label="Switch"{...figmaHolidayToggleProps("5621:28334")} className="box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative inline-flex flex-row items-center gap-0.5 bg-brand-primary-a21d35">
  <div data-figma-node="I5621:28342;315:8655" className="box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5621:28342;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5621:28342;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</button></div>
            <div data-figma-node="5621:28344" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28345" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><FiRrPencil_93ff9a17 data-figma-node="5621:28346" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <div data-figma-node="5621:28347" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Delete"{...figmaHolidayDeleteProps("5621:28334")} className="inline-flex items-center justify-center"><FiRrTrash_ffb59942 data-figma-node="5621:28348" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
          <div data-figma-node="5621:28349" {...figmaItemProps("5621:28349")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28350" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28484" className="box-border w-[32px] h-[32px] rounded-[20px] flex flex-row items-center justify-center"><button type="button" aria-label="calendar" className="inline-flex items-center justify-center"><Calendar_895821db data-figma-node="5621:28485" data-figma-component="5111:8245" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <p data-figma-node="5621:28352" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5621:28352", "Labor Day")}</p>
            </div>
            <p data-figma-node="5621:28506" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <p data-figma-node="5621:28507" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <div data-figma-node="5621:28356" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button data-figma-node="5621:28357" data-figma-component="5111:12395" type="button" role="switch" aria-checked={switchChecked["5621:28349"]} aria-label="Switch"{...figmaHolidayToggleProps("5621:28349")} className="box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative inline-flex flex-row items-center gap-0.5">
  <div data-figma-node="I5621:28357;315:8184" className="box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5621:28357;315:8185" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5621:28357;315:8186" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</button></div>
            <div data-figma-node="5621:28359" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28360" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><FiRrPencil_93ff9a17 data-figma-node="5621:28361" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <div data-figma-node="5621:28362" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Delete"{...figmaHolidayDeleteProps("5621:28349")} className="inline-flex items-center justify-center"><FiRrTrash_ffb59942 data-figma-node="5621:28363" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
          <div data-figma-node="5621:28364" {...figmaItemProps("5621:28364")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5621:28365" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28488" className="box-border w-[32px] h-[32px] rounded-[20px] flex flex-row items-center justify-center"><button type="button" aria-label="calendar" className="inline-flex items-center justify-center"><Calendar_895821db data-figma-node="5621:28489" data-figma-component="5111:8245" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <p data-figma-node="5621:28367" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5621:28367", "Christmas Day")}</p>
            </div>
            <p data-figma-node="5621:28512" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <p data-figma-node="5621:28513" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <div data-figma-node="5621:28371" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button data-figma-node="5621:28372" data-figma-component="5111:12395" type="button" role="switch" aria-checked={switchChecked["5621:28364"]} aria-label="Switch"{...figmaHolidayToggleProps("5621:28364")} className="box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative inline-flex flex-row items-center gap-0.5">
  <div data-figma-node="I5621:28372;315:8184" className="box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5621:28372;315:8185" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5621:28372;315:8186" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</button></div>
            <div data-figma-node="5621:28374" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28375" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><FiRrPencil_93ff9a17 data-figma-node="5621:28376" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <div data-figma-node="5621:28377" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Delete"{...figmaHolidayDeleteProps("5621:28364")} className="inline-flex items-center justify-center"><FiRrTrash_ffb59942 data-figma-node="5621:28378" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
          <div data-figma-node="5621:28379" {...figmaItemProps("5621:28379")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[0px]">
            <div data-figma-node="5621:28380" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <div data-figma-node="5621:28492" className="box-border w-[32px] h-[32px] rounded-[20px] flex flex-row items-center justify-center"><button type="button" aria-label="calendar" className="inline-flex items-center justify-center"><Calendar_895821db data-figma-node="5621:28493" data-figma-component="5111:8245" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <p data-figma-node="5621:28382" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5621:28382", "Robert Taylor")}</p>
            </div>
            <p data-figma-node="5621:28515" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <p data-figma-node="5621:28516" className="box-border w-[150px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">January 1, 2026</p>
            <div data-figma-node="5621:28386" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button data-figma-node="5621:28387" data-figma-component="5111:12391" type="button" role="switch" aria-checked={switchChecked["5621:28379"]} aria-label="Switch"{...figmaHolidayToggleProps("5621:28379")} className="box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative inline-flex flex-row items-center gap-0.5 bg-brand-primary-a21d35">
  <div data-figma-node="I5621:28387;315:8655" className="box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center justify-end gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
    <div data-figma-node="I5621:28387;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5621:28387;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</button></div>
            <div data-figma-node="5621:28389" className="box-border w-[100px] h-[28px] relative flex flex-row items-start justify-end gap-1.5">
              <div data-figma-node="5621:28390" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><FiRrPencil_93ff9a17 data-figma-node="5621:28391" data-figma-component="5121:9154" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
              <div data-figma-node="5621:28392" className="box-border w-[28px] h-[28px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Delete"{...figmaHolidayDeleteProps("5621:28379")} className="inline-flex items-center justify-center"><FiRrTrash_ffb59942 data-figma-node="5621:28393" data-figma-component="5121:9660" className="box-border w-[16px] h-[16px] overflow-hidden relative" /></button></div>
            </div>
          </div>
        </div>
        <div data-figma-node="5621:28394" data-figma-pagination="true" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5621:28395" className="box-border w-max max-w-[145px] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-muted-686868">Showing 1-6 of 18 users</p>
          <div data-figma-node="5621:28396" data-figma-pagination="true" className="box-border w-max max-w-[173px] h-[27px] relative flex flex-row items-start gap-1.5">
            <div data-figma-node="5621:28397" onClick={pagination.goPrev} role="button" aria-label="Previous page" aria-disabled={!pagination.canPrev} className="box-border w-max max-w-[47px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
              <p data-figma-node="5621:28398" className="box-border w-max max-w-[27px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Prev</p>
            </div>
            <div data-figma-node="5621:28399" onClick={() => pagination.goTo(1)} role="button" aria-label="Page 1" aria-current={pagination.currentPage === 1 ? "page" : undefined} className={`box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${pagination.chipClass(1)}`}>
              <p data-figma-node="5621:28400" className={`box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap ${pagination.chipTextClass(1)}`}>1</p>
            </div>
            <div data-figma-node="5621:28401" onClick={() => pagination.goTo(2)} role="button" aria-label="Page 2" aria-current={pagination.currentPage === 2 ? "page" : undefined} className={`box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${pagination.chipClass(2)}`}>
              <p data-figma-node="5621:28402" className={`box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap ${pagination.chipTextClass(2)}`}>2</p>
            </div>
            <div data-figma-node="5621:28403" onClick={pagination.goNext} role="button" aria-label="Next page" aria-disabled={!pagination.canNext} className="box-border w-max max-w-[48px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
              <p data-figma-node="5621:28404" className="box-border w-max max-w-[28px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Next</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
