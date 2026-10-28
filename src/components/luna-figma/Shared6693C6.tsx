/**
 * Luna generated shared component
 * Figma componentId: repeat:6693c6949c
 * Component: Shared6693C6
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import { FigmaVariant5602_68973_7aa11167 } from "./FigmaVariant5602_68973_7aa11167";
import { FigmaVariantSwitch } from "./FigmaVariantSwitch";
import { Variant42 } from "./Variant42";
import { Variant5 } from "./Variant5";
export function Shared6693C6({ className = "", ...rest }: { className?: string; [key: string]: unknown }) {
  return (
  <div data-figma-node="I5645:45615;5602:67312;5602:61816" className={`box-border w-full min-w-0 h-[130px] overflow-y-auto overflow-x-hidden relative flex flex-col items-start gap-1 ${className}`} {...rest}>
    <Variant5 data-figma-node="I5645:45615;5602:67312;5602:69270" data-figma-component="5602:69045" className="box-border self-stretch min-w-0 h-auto shrink-0 overflow-hidden rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)]" />
    <FigmaVariantSwitch base="5602:68955" dismissible={["5602:68973"]} variants={{
        "5602:68973": <FigmaVariant5602_68973_7aa11167 />,
      }}>
    <Variant42 data-figma-node="I5645:45615;5602:67312;5725:47922" data-figma-component="5602:68955" className="box-border self-stretch min-w-0 h-auto shrink-0 overflow-hidden rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)]" />
    </FigmaVariantSwitch>
    <FigmaVariantSwitch base="5602:68955" dismissible={["5602:68973"]} variants={{
        "5602:68973": <FigmaVariant5602_68973_7aa11167 />,
      }}>
    <Variant42 data-figma-node="I5645:45615;5602:67312;5725:52065" data-figma-component="5602:68955" className="box-border self-stretch min-w-0 h-auto shrink-0 overflow-hidden rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)]" />
    </FigmaVariantSwitch>
  </div>
  );
}
