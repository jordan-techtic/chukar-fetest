/**
 * Luna generated shared component
 * Figma componentId: repeat:a54bda182c
 * Component: SharedA54BDA
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import { FigmaVariant5602_68973_94414927 } from "./FigmaVariant5602_68973_94414927";
import { FigmaVariantSwitch } from "./FigmaVariantSwitch";
import { Variant42 } from "./Variant42";
import { Variant44 } from "./Variant44";
export function SharedA54BDA({ className = "", ...rest }: { className?: string; [key: string]: unknown }) {
  return (
  <div data-figma-node="I5602:67660;5602:61816" className={`box-border w-full min-w-0 h-[130px] max-[1439px]:h-auto max-[1439px]:min-h-[130px] overflow-y-auto overflow-x-hidden relative flex flex-col items-start gap-1 ${className}`} {...rest}>
    <FigmaVariantSwitch base="5602:68955" dismissible={["5602:68973"]} variants={{
        "5602:68973": <FigmaVariant5602_68973_94414927 />,
      }}>
    <Variant44 data-figma-node="I5602:67660;5602:69270" data-figma-component="5602:68955" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)]" />
    </FigmaVariantSwitch>
    <FigmaVariantSwitch base="5602:68955" dismissible={["5602:68973"]} variants={{
        "5602:68973": <FigmaVariant5602_68973_94414927 />,
      }}>
    <Variant42 data-figma-node="I5602:67660;5725:47922" data-figma-component="5602:68955" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)]" />
    </FigmaVariantSwitch>
    <FigmaVariantSwitch base="5602:68955" dismissible={["5602:68973"]} variants={{
        "5602:68973": <FigmaVariant5602_68973_94414927 />,
      }}>
    <Variant42 data-figma-node="I5602:67660;5725:52065" data-figma-component="5602:68955" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)]" />
    </FigmaVariantSwitch>
  </div>
  );
}
