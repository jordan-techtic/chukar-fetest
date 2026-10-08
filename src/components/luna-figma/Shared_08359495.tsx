/**
 * Luna generated shared component
 * Figma componentId: 5273:20995
 * Component: Shared_08359495
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import { figmaActionProps } from "./useFigmaScreenData";
import { ChevronDown_a4db42af } from "./ChevronDown_a4db42af";
import { SizeDefaultTypeImageStatusFalse_59ef8191 } from "./SizeDefaultTypeImageStatusFalse_59ef8191";
export function Shared_08359495({ className = "", ...rest }: { className?: string; [key: string]: unknown }) {
  return (
  <div data-figma-node="5329:12028" data-figma-component="5273:20995" className={`box-border w-full min-w-0 h-full min-h-0 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] flex flex-row items-center justify-between bg-[#ffffff] ${className}`} {...rest}>
    <div data-figma-node="I5329:12028;5217:13714" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-[30px]">
      <div data-figma-node="I5329:12028;5217:13715" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-3">
        <img data-figma-node="I5329:12028;5217:13716" src="/assets/figma/I5329-12028-5217-13716.png" alt="image 2" className="box-border w-[54px] h-[50px] rounded-[10px] max-w-none object-cover object-top" />
        <div data-figma-node="I5329:12028;5217:13717" className="box-border w-max max-w-[216px] h-[43px] relative flex flex-col items-start gap-0.5">
          <p data-figma-node="I5329:12028;5217:13718" className="box-border w-max max-w-[216px] h-auto min-h-[27px] font-inter text-[22px] font-[800] leading-[27px] text-left whitespace-nowrap text-[#231f20]">Marketing Calendar </p>
          <p data-figma-node="I5329:12028;5217:13719" className="box-border w-max max-w-[171px] h-auto min-h-[14px] font-onest text-[11px] font-[600] leading-[14px] text-left whitespace-nowrap text-[#686868]">Plan · Create · Track · Grow</p>
        </div>
      </div>
    </div>
    <div data-figma-node="I5329:12028;5217:13733" className="box-border w-max max-w-[217px] h-[40px] relative flex flex-row items-center gap-4">
      <button data-figma-node="I5329:12028;5217:13746" type="button" data-figma-action="act_cd0089ad194b" {...figmaActionProps("act_cd0089ad194b")} className="box-border w-max max-w-[145px] h-[40px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-[#f2f1dd] hover:opacity-90 cursor-pointer"><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-[#231f20] whitespace-nowrap">oPEN CALANDER</span></button>
      <button data-figma-node="I5329:12028;5217:13749" type="button" data-figma-action="act_7a15e9d408cd" {...figmaActionProps("act_7a15e9d408cd")} className="box-border w-max max-w-[56px] h-[32px] relative flex flex-row items-center gap-2 cursor-pointer block">
        <SizeDefaultTypeImageStatusFalse_59ef8191 data-figma-node="I5329:12028;5217:13750" data-figma-component="5111:12456" className="relative" />
        <ChevronDown_a4db42af data-figma-node="I5329:12028;5217:13752" data-figma-component="5111:6287" className="relative" />
      </button>
    </div>
  </div>
  );
}
