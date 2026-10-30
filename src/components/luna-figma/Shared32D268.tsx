/**
 * Luna generated shared component
 * Figma componentId: repeat:32d268db19
 * Component: Shared32D268
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
import { Default4 } from "./Default4";
export function Shared32D268({ className = "", text = "20", ...rest }: { className?: string; text?: string; [key: string]: unknown }) {
  return (
  <div data-figma-node="I5602:67892;5725:79515" className={`box-border w-max max-w-[min(90px,100%)] h-auto relative flex flex-row items-center gap-2.5 ${className}`} {...rest}>
    <p data-figma-node="I5602:67892;5602:61812" className="box-border w-max h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-color-23">{text}</p>
    <Default4 data-figma-node="I5602:67892;5725:71418" data-figma-component="5725:71390" className="box-border w-max max-w-[min(64px,100%)] h-[20px] max-[1439px]:h-auto max-[1439px]:min-h-[20px] rounded-[4px] pr-[6px] pl-[6px] bg-color-60" />
  </div>
  );
}
