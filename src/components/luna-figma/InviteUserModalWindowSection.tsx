/**
 * Luna generated layout
 * Figma node: 5449:19595
 * Section: Modal Window
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import { figmaFieldProps, figmaSubmitProps, closeFigmaDialog } from "./useFigmaScreenData";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "./ChevronDown";
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
          <div data-figma-node="5449:19601" className="box-border w-max max-w-[min(36px,100%)] h-auto rounded-[6px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-background flex flex-row items-start"><button type="button" aria-label="fi-rr-cross-small" className="inline-flex items-center justify-center"><div data-figma-node="5449:19602" data-figma-component="5121:8491" className="box-border w-[24px] h-[24px] overflow-hidden relative block">
  <svg data-figma-node="I5449:19602;403:359" viewBox="0 0 12.59 12.59" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[25%] w-[54.167%] top-[25%] h-[54.167%] pointer-events-none overflow-visible"><path d="M12.2928 0.292787C12.1053 0.105316 11.851 0 11.5858 0C11.3206 0 11.0663 0.105316 10.8788 0.292787L6.29279 4.87879L1.70679 0.292787C1.51926 0.105316 1.26495 0 0.999786 0C0.734622 0 0.480314 0.105316 0.292787 0.292787C0.105316 0.480314 0 0.734622 0 0.999786C0 1.26495 0.105316 1.51926 0.292787 1.70679L4.87879 6.29279L0.292787 10.8788C0.105316 11.0663 8.88179e-16 11.3206 0 11.5858C8.88179e-16 11.851 0.105316 12.1053 0.292787 12.2928C0.480314 12.4803 0.734622 12.5856 0.999786 12.5856C1.26495 12.5856 1.51926 12.4803 1.70679 12.2928L6.29279 7.70679L10.8788 12.2928C11.0663 12.4803 11.3206 12.5856 11.5858 12.5856C11.851 12.5856 12.1053 12.4803 12.2928 12.2928C12.4803 12.1053 12.5856 11.851 12.5856 11.5858C12.5856 11.3206 12.4803 11.0663 12.2928 10.8788L7.70679 6.29279L12.2928 1.70679C12.4803 1.51926 12.5856 1.26495 12.5856 0.999786C12.5856 0.734622 12.4803 0.480314 12.2928 0.292787L12.2928 0.292787Z" fill="#231f20" /></svg>
</div></button></div>
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
            <div className="box-border self-stretch min-w-0 shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface h-[42px]"><select data-figma-node="5449:19745" name="role" data-figma-field="role" data-figma-field-origin="design_text" {...figmaFieldProps("role")} aria-label="Please select" className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-color-10 font-onest text-[14px] font-[500] leading-[18px] text-left pt-[12px] pr-[14px] pb-[12px] pl-[14px]"><option value="">Please select</option><option value="admin">Admin</option><option value="super_admin">Super Admin</option></select><div className="pointer-events-none absolute inset-0"><ChevronDown data-figma-node="5449:19752" data-figma-component="5111:6287" className="box-border w-[16px] h-[16px] absolute left-[442px] top-[12px] overflow-hidden" /></div></div>
          </div>
          <div data-figma-node="5449:19747" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5449:19748" className="box-border w-max max-w-[min(24px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[700] leading-[14px] uppercase text-left whitespace-nowrap text-color-11">Bio</p>
            <div data-figma-node="5449:19749" className="box-border self-stretch min-w-0 h-[120px] shrink-0 rounded-[8px] relative flex flex-col items-start pt-[14px] pr-[14px] pb-[14px] pl-[14px] border-[#e2d9d0] border-[1px] bg-surface"></div>
          </div>
        </div>
      </div>
      <div data-figma-node="5449:19627" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-border" />
      <div data-figma-node="5449:19628" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
        <Button data-figma-node="5449:19629" type="button" onClick={(e) => { e.preventDefault(); closeFigmaDialog(); }} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[78px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-[#231f20] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-color-11">Cancel</span></Button>
        <Button data-figma-node="5449:19631" type="button" data-figma-action-fired="5449:19631" {...figmaSubmitProps("5449:19631")} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[117px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] inline-flex items-center justify-start whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 hover:bg-primary shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-surface">Send Invite</span></Button>
      </div>
    </section>
  );
}
