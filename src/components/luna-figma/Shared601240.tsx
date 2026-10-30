/**
 * Luna generated shared component
 * Figma componentId: repeat:60124093f9
 * Component: Shared601240
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import { FigmaVariant5602_68973_94414927 } from "./FigmaVariant5602_68973_94414927";
import { FigmaVariantSwitch } from "./FigmaVariantSwitch";
import { Variant42 } from "./Variant42";
import { Variant45 } from "./Variant45";
export function Shared601240({ className = "", ...rest }: { className?: string; [key: string]: unknown }) {
  return (
  <div data-figma-node="I5645:45615;5602:68182;5602:61816" className={`box-border w-full min-w-0 h-[130px] max-[1439px]:h-auto max-[1439px]:min-h-[130px] overflow-y-auto overflow-x-hidden relative flex flex-col items-start gap-1 ${className}`} {...rest}>
    <FigmaVariantSwitch base="5602:68955" dismissible={["5602:68973"]} variants={{
        "5602:68973": <FigmaVariant5602_68973_94414927 />,
      }}>
    <Variant45 data-figma-node="I5645:45615;5602:68182;5602:69270" data-figma-component="5602:68955" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)]" />
    </FigmaVariantSwitch>
    <FigmaVariantSwitch base="5602:68955" dismissible={["5602:68973"]} variants={{
        "5602:68973": <FigmaVariant5602_68973_94414927 />,
      }}>
    <Variant42 data-figma-node="I5645:45615;5602:68182;5725:47922" data-figma-component="5602:68955" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)]" />
    </FigmaVariantSwitch>
    <FigmaVariantSwitch base="5602:68955" dismissible={["5602:68973"]} variants={{
        "5602:68973": <FigmaVariant5602_68973_94414927 />,
      }}>
    <Variant42 data-figma-node="I5645:45615;5602:68182;5725:52065" data-figma-component="5602:68955" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)]" />
    </FigmaVariantSwitch>
  </div>
  );
}
