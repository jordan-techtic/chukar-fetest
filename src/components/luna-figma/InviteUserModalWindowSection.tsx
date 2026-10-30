/**
 * Luna generated layout
 * Figma node: 5449:19595
 * Section: Modal Window
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import { figmaFieldProps, closeFigmaDialog } from "./useFigmaScreenData";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "./ChevronDown";
import { FiRrCrossSmall } from "./FiRrCrossSmall";
import { Input } from "@/components/ui/input";
import { PenField } from "./PenField";
export function InviteUserModalWindowSection() {
  return (
    <section data-figma-node="5449:19595" id="contact" className="relative box-border w-full min-w-0 min-h-[564px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] rounded-[12px] flex flex-col items-start gap-6 bg-surface shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)]">
      <div data-figma-node="5449:19596" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
        <div data-figma-node="5449:19597" className="box-border w-max max-w-[min(130px,100%)] h-auto relative flex flex-row items-center gap-2">
          <PenField data-figma-node="5449:19598" data-figma-component="5111:7679" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden" />
          <h1 data-figma-node="5449:19599" className="box-border w-max max-w-[min(98px,100%)] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-text-primary">Invite User</h1>
        </div>
        <div data-figma-node="5449:19600" className="box-border w-max max-w-[min(36px,100%)] h-auto relative flex flex-row items-center gap-3">
          <Button data-figma-node="5449:19601" type="button" onClick={(e) => { e.preventDefault(); closeFigmaDialog(); }} className="p-0 box-border w-max max-w-[min(36px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-background cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 justify-start hover:bg-background shadow-none">
            <FiRrCrossSmall data-figma-node="5449:19602" data-figma-component="5121:8491" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden" />
          </Button>
        </div>
      </div>
      <div data-figma-node="5449:19603" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
        <div data-figma-node="5449:19724" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
          <div data-figma-node="5449:19725" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-4">
            <Input data-figma-node="5449:19726" name="first-name" data-figma-field="first-name" data-figma-field-origin="design_text" {...figmaFieldProps("first-name")} type="text" placeholder="First name" autoComplete="given-name" aria-label="First name" className="box-border flex-1 min-w-0 h-auto shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-0 bg-transparent text-color-11 placeholder:text-[#4a5568] hover:bg-transparent rounded-none" />
            <Input data-figma-node="5449:19730" name="last-name" data-figma-field="last-name" data-figma-field-origin="design_text" {...figmaFieldProps("last-name")} type="text" placeholder="Last name" autoComplete="family-name" aria-label="Last name" className="box-border flex-1 min-w-0 h-auto shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-0 bg-transparent text-color-11 placeholder:text-[#4a5568] hover:bg-transparent rounded-none" />
          </div>
          <div data-figma-node="5449:19734" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-4">
            <Input data-figma-node="5449:19735" name="email-address" data-figma-field="email-address" data-figma-field-origin="design_text" {...figmaFieldProps("email-address")} type="email" placeholder="Email Address" inputMode="email" autoComplete="email" aria-label="Email Address" className="box-border flex-1 min-w-0 h-auto shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-0 bg-transparent text-color-11 placeholder:text-[#4a5568] hover:bg-transparent rounded-none" />
            <Input data-figma-node="5449:19739" name="phone-number" data-figma-field="phone-number" data-figma-field-origin="design_text" {...figmaFieldProps("phone-number")} type="tel" placeholder="Phone number" inputMode="tel" autoComplete="tel" aria-label="Phone number" className="box-border flex-1 min-w-0 h-auto shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-0 bg-transparent text-color-11 placeholder:text-[#4a5568] hover:bg-transparent rounded-none" />
          </div>
          <div data-figma-node="5449:19743" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5449:19744" className="box-border w-max max-w-[min(34px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[700] leading-[14px] uppercase text-left whitespace-nowrap text-color-11">Role</p>
            <div className="box-border self-stretch min-w-0 shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface h-[42px]"><select data-figma-node="5449:19745" name="role" data-figma-field="role" data-figma-field-origin="design_text" {...figmaFieldProps("role")} aria-label="Please select" className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-color-10 font-onest text-[14px] font-[500] leading-[18px] text-left pt-[12px] pr-[14px] pb-[12px] pl-[14px]"><option value="">Please select</option>{/* LUNA-UNRESOLVED: no list endpoint matched for this select's options; wire one in useFigmaScreenData.ts or add static <option>s. */}</select><div className="pointer-events-none absolute inset-0"><ChevronDown data-figma-node="5449:19752" data-figma-component="5111:6287" className="box-border w-[16px] h-[16px] absolute left-[442px] top-[12px] overflow-hidden" /></div></div>
          </div>
          <div data-figma-node="5449:19747" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5449:19748" className="box-border w-max max-w-[min(24px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[700] leading-[14px] uppercase text-left whitespace-nowrap text-color-11">Bio</p>
            <div data-figma-node="5449:19749" className="box-border self-stretch min-w-0 h-[120px] shrink-0 rounded-[8px] relative flex flex-col items-start border-[#e2d9d0] border-[1px] pt-[13px] pr-[13px] pb-[13px] pl-[13px] bg-surface"></div>
          </div>
        </div>
      </div>
      <div data-figma-node="5449:19627" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-border" />
      <div data-figma-node="5449:19628" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
        <Button data-figma-node="5449:19629" type="button" onClick={(e) => { e.preventDefault(); closeFigmaDialog(); }} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[78px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-[#0b0b0b] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-color-11">Cancel</span></Button>
        <Button data-figma-node="5449:19631" type="button" onClick={(e) => { e.preventDefault(); closeFigmaDialog(); }} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[117px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] inline-flex items-center justify-start whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 hover:bg-primary shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-surface">Send Invite</span></Button>
      </div>
    </section>
  );
}
