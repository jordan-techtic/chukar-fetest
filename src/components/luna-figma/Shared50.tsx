/**
 * Luna generated shared component
 * Figma componentId: repeat:e5510349dc
 * Component: Shared50
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import { Calendar } from "./Calendar";
export function Shared50({ className = "", ...rest }: { className?: string; [key: string]: unknown }) {
  return (
  <div data-figma-node="5279:25669" className={`box-border w-full min-w-0 h-auto relative flex flex-row items-center gap-2 ${className}`} {...rest}>
    <Calendar data-figma-node="5279:25670" data-figma-component="5111:8245" className="box-border w-[20px] shrink-0 h-[20px] overflow-hidden" />
    <p data-figma-node="5279:25671" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[500] leading-[18px] text-left text-text-primary">September 9, 2026</p>
  </div>
  );
}
