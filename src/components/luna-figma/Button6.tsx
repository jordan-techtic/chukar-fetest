/**
 * Luna generated shared component
 * Figma componentId: repeat:e3f3746d76
 * Component: Button6
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import { openFigmaDialog } from "./useFigmaScreenData";
import { Button } from "@/components/ui/button";
import { FiRrFilter } from "./FiRrFilter";
export function Button6({ className = "", ...rest }: { className?: string; [key: string]: unknown }) {
  return (
  <Button data-figma-node="I5584:26947;5621:25566" type="button" data-figma-action="act_5d3bddc2d00c" data-figma-overlay-opens="5621:25767" onClick={(e) => { e.preventDefault(); openFigmaDialog("act_5d3bddc2d00c"); }} className={`p-0 box-border w-max max-w-[min(97px,100%)] h-auto rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-color-17 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 justify-start hover:bg-color-17 shadow-none ${className}`} {...rest}>
    <FiRrFilter data-figma-node="I5584:26947;5621:25623" data-figma-component="5121:8683" className="box-border w-[14px] shrink-0 h-[14px] overflow-hidden" />
    <p data-figma-node="I5584:26947;5621:25568" className="box-border w-max max-w-[min(53px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-43">Filters</p>
  </Button>
  );
}
