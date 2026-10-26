/**
 * Luna generated shared component
 * Figma componentId: repeat:9fff9b7529
 * Component: Shared42
 * Ownership: Figma-owned layout
 * luna-spec-codegen: owned-layout
 */
export function Shared42({ className = "", text = "4", ...rest }: { className?: string; text?: string; [key: string]: unknown }) {
  return (
  <div data-figma-node="I5596:52902;5725:103118" className={`box-border w-full min-w-0 h-[20px] relative flex flex-row items-center justify-between gap-5 ${className}`} {...rest}>
    <div data-figma-node="I5596:52902;5725:103119" className="box-border w-max max-w-[min(20px,100%)] h-auto relative flex flex-row items-center gap-1.5">
      <p data-figma-node="I5596:52902;5725:103120" className="box-border w-[16px] shrink-0 h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-color-23">{text}</p>
    </div>
    <div data-figma-node="I5596:52902;5725:103122" className="box-border w-[42px] shrink-0 h-auto relative flex flex-row items-center justify-end gap-1.5"></div>
  </div>
  );
}
