/**
 * Luna generated shared component
 * Figma componentId: repeat:33db9b808a
 * Component: Button4
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import { FiRrDocument } from "./FiRrDocument";
export function Button4({
  className = "",
  label = "",
  ...rest
}: {
  className?: string;
  label?: string;
  [key: string]: unknown;
}) {
  return (
  <div data-figma-node="I5584:26947;5273:21175" className={`box-border w-max max-w-[min(99px,100%)] h-auto rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-surface ${className}`} {...rest}>
    <FiRrDocument data-figma-node="I5584:26947;5273:21176" data-figma-component="5121:8558" className="box-border w-[14px] shrink-0 h-[14px] overflow-hidden" />
    <p data-figma-node="I5584:26947;5273:21177" className="box-border w-max max-w-[min(55px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-primary">{label}</p>
  </div>
  );
}
