/**
 * Luna generated shared component
 * Figma componentId: 5602:68955
 * Component: Variant45
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import { figmaUnresolvedActionProps } from "./useFigmaScreenData";
import { useFigmaVariantProps } from "./FigmaVariantSwitch";
import { Button } from "@/components/ui/button";
import { FiRrEnvelope } from "./FiRrEnvelope";
export function Variant45({ className = "", ...rest }: { className?: string; [key: string]: unknown }) {
  return (
  <div data-figma-node="I5645:45615;5602:68182;5602:69270" data-figma-component="5602:68955" className={`box-border w-full min-w-0 h-auto rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1 ${className}`} {...rest}>
    <div data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68956" role="button" tabIndex={0} onKeyDown={(e) => { if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); e.currentTarget.click(); } }} data-figma-action="act_e6a676c62e03" data-figma-unresolved-action="true" {...figmaUnresolvedActionProps("act_e6a676c62e03")} className="box-border flex-1 min-w-0 h-auto rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[8px] pr-[8px] pb-[8px] pl-[8px] border-[#a21d35] border-[1px] bg-color-28 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
      <div data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68957" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1">
        <div data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68958" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-1.5">
          <div data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68959" className="box-border w-[14px] shrink-0 h-[14px] relative flex flex-row items-center gap-1">
            <FiRrEnvelope data-figma-node="I5645:45615;5602:68182;5602:69270;5725:47375" data-figma-component="5121:8609" className="box-border w-[14px] shrink-0 h-[14px] overflow-hidden" />
          </div>
          <p data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68966" className="box-border flex-1 min-w-0 h-auto min-h-[15px] font-onest text-[12px] font-[600] leading-[15px] text-left truncate text-text-primary">Great Prosser Balloon Rally</p>
          <Button data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68962" type="button" {...useFigmaVariantProps("5602:68973")} className="p-0 box-border w-[14px] shrink-0 h-[14px] rotate-[90deg] origin-center relative flex flex-row items-center justify-center gap-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 bg-transparent hover:bg-transparent rounded-none shadow-none">
            <svg data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68963" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border flex-1 min-w-0 h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
            <svg data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68964" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border flex-1 min-w-0 h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
            <svg data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68965" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border flex-1 min-w-0 h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
          </Button>
        </div>
        <div data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68967" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center gap-1">
          <div data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68969" className="box-border flex-1 min-w-0 h-auto rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[6px] pb-[2px] pl-[6px] bg-surface">
            <p data-figma-node="I5645:45615;5602:68182;5602:69270;5602:68970" className="box-border w-max max-w-[min(60px,100%)] h-auto min-h-[13px] font-onest text-[10px] font-[500] leading-[13px] text-left truncate min-w-0 text-color-14">C3-M9-Y26</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
