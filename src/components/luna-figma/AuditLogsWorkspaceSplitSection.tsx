/**
 * Luna generated layout
 * Figma node: 5329:12225
 * Section: WorkspaceSplit
 * Route: /audit-logs
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import {
  AUDIT_CANONICAL_OP,
  figmaAuditFilterProps,
  figmaAuditResetProps,
  figmaPaginationProps,
} from "./useFigmaScreenData";
import { figmaItemProps, figmaSelectOptions, figmaTextContent } from "./figmaDisplay";
import { ChevronDown_a4db42af } from "./ChevronDown_a4db42af";
import * as Select from "@radix-ui/react-select";
export function AuditLogsWorkspaceSplitSection() {
  const dateRangeFilter = figmaAuditFilterProps("date-range");
  const userFilter = figmaAuditFilterProps("user");
  const actionTypeFilter = figmaAuditFilterProps("action-type");

  /** Radix Select items cannot carry an empty value; this sentinel maps back to the "no filter" state. */
  const ALL_FILTER_VALUE = "__all__";

  const pagination = figmaPaginationProps("5354:14485", {
    serverTotalKey: AUDIT_CANONICAL_OP,
    serverPageSize: 6,
    serverFrameId: "5329:12177",
  });
  return (
    <section data-figma-node="5329:12225" className="absolute box-border left-[0px] top-[169px] w-full min-w-0 h-[601px] [--fx:0] [--fww:1440] flex flex-row items-start z-[2]">
      <div data-figma-node="5329:12247" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5329:12256" className="box-border w-full min-w-0 h-[88px] rounded-[10px] relative flex flex-row items-start gap-4 pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
          <div data-figma-node="5329:12257" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5329:12258" className="box-border w-max max-w-[71px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-neutral-mid-9ca3af">Date Range</p>
            <div className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] relative border-[#e2d9d0] border-[1px]"><Select.Root value={dateRangeFilter.value === "" ? undefined : dateRangeFilter.value} onValueChange={(value) => dateRangeFilter.onChange?.({ target: { value } })}>
              <Select.Trigger data-figma-node="5329:12259" data-figma-field="date-range" data-figma-field-origin="design_text" aria-label="Sep 1, 2026 - Sep 18, 2026" className="absolute inset-0 h-full w-full bg-transparent text-left font-onest text-[13px] font-[400] leading-[17px] whitespace-nowrap pt-[8px] pr-[12px] pb-[8px] pl-[12px] cursor-pointer text-text-body-231f20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center justify-between"><Select.Value placeholder="Sep 1, 2026 - Sep 18, 2026" /></Select.Trigger>
              <Select.Portal>
                <Select.Content position="popper" sideOffset={4} className="z-50 max-h-[240px] min-w-[var(--radix-select-trigger-width)] overflow-hidden overflow-y-auto rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]">
                  <Select.Viewport className="p-[4px]">
                    <Select.Item value="Sep 1, 2026 - Sep 18, 2026" className="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-[4px] py-[6px] pr-[10px] pl-[10px] font-onest text-[13px] font-[400] leading-[17px] whitespace-nowrap text-[#231f20] outline-none data-[highlighted]:bg-[#f9fafb] data-[state=checked]:bg-[#f9fafb] data-[disabled]:pointer-events-none data-[disabled]:opacity-50"><Select.ItemText>Sep 1, 2026 - Sep 18, 2026</Select.ItemText></Select.Item>
                    {/* LUNA-UNRESOLVED: no list endpoint matched for this select's options; wire one in useFigmaScreenData.ts or add static <Select.Item>s. */}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root><div className="pointer-events-none absolute inset-0"><div data-figma-node="5339:8827" data-figma-component="5121:5917" className="box-border w-[14px] h-[14px] absolute left-[361px] top-[10px] overflow-hidden">
  <svg data-figma-node="I5339:8827;403:184" viewBox="0 0 14 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[14px] h-[14px] absolute left-[0px] top-[0px] pointer-events-none overflow-visible"><path d="M11.0833 1.16667L10.5 1.16667L10.5 0.583333C10.5 0.428624 10.4385 0.280251 10.3291 0.170854C10.2197 0.0614582 10.0714 9.71445e-17 9.91667 0C9.76196 1.13335e-16 9.61358 0.0614582 9.50419 0.170854C9.39479 0.280251 9.33333 0.428624 9.33333 0.583333L9.33333 1.16667L4.66667 1.16667L4.66667 0.583333C4.66667 0.428624 4.60521 0.280251 4.49581 0.170854C4.38642 0.0614582 4.23804 9.71445e-17 4.08333 0C3.92862 1.13335e-16 3.78025 0.0614582 3.67085 0.170854C3.56146 0.280251 3.5 0.428624 3.5 0.583333L3.5 1.16667L2.91667 1.16667C2.1434 1.16759 1.40208 1.47518 0.855295 2.02196C0.308514 2.56874 0.00092625 3.31007 9.06682e-16 4.08333L0 11.0833C0.00092625 11.8566 0.308514 12.5979 0.855295 13.1447C1.40208 13.6915 2.1434 13.9991 2.91667 14L11.0833 14C11.8566 13.9991 12.5979 13.6915 13.1447 13.1447C13.6915 12.5979 13.9991 11.8566 14 11.0833L14 4.08333C13.9991 3.31007 13.6915 2.56874 13.1447 2.02196C12.5979 1.47518 11.8566 1.16759 11.0833 1.16667L11.0833 1.16667ZM1.16667 4.08333C1.16667 3.6192 1.35104 3.17409 1.67923 2.8459C2.00742 2.51771 2.45254 2.33333 2.91667 2.33333L11.0833 2.33333C11.5475 2.33333 11.9926 2.51771 12.3208 2.8459C12.649 3.17409 12.8333 3.6192 12.8333 4.08333L12.8333 4.66667L1.16667 4.66667L1.16667 4.08333ZM11.0833 12.8333L2.91667 12.8333C2.45254 12.8333 2.00742 12.649 1.67923 12.3208C1.35104 11.9926 1.16667 11.5475 1.16667 11.0833L1.16667 5.83333L12.8333 5.83333L12.8333 11.0833C12.8333 11.5475 12.649 11.9926 12.3208 12.3208C11.9926 12.649 11.5475 12.8333 11.0833 12.8333Z" fill="#686868" /></svg>
  <svg data-figma-node="I5339:8827;403:185" viewBox="0 0 1.75 1.75" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[2px] h-[2px] absolute left-[6px] top-[8px] pointer-events-none overflow-visible"><path d="M0.875 1.75C1.35825 1.75 1.75 1.35825 1.75 0.875C1.75 0.391751 1.35825 0 0.875 0C0.391751 0 0 0.391751 0 0.875C0 1.35825 0.391751 1.75 0.875 1.75Z" fill="#686868" /></svg>
  <svg data-figma-node="I5339:8827;403:186" viewBox="0 0 1.75 1.75" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[2px] h-[2px] absolute left-[3px] top-[8px] pointer-events-none overflow-visible"><path d="M0.875 1.75C1.35825 1.75 1.75 1.35825 1.75 0.875C1.75 0.391751 1.35825 0 0.875 0C0.391751 0 0 0.391751 0 0.875C0 1.35825 0.391751 1.75 0.875 1.75Z" fill="#686868" /></svg>
  <svg data-figma-node="I5339:8827;403:187" viewBox="0 0 1.75 1.75" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[2px] h-[2px] absolute left-[9px] top-[8px] pointer-events-none overflow-visible"><path d="M0.875 1.75C1.35825 1.75 1.75 1.35825 1.75 0.875C1.75 0.391751 1.35825 0 0.875 0C0.391751 0 0 0.391751 0 0.875C0 1.35825 0.391751 1.75 0.875 1.75Z" fill="#686868" /></svg>
</div></div></div>
          </div>
          <div data-figma-node="5329:12263" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5329:12264" className="box-border w-max max-w-[30px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-neutral-mid-9ca3af">User</p>
            <div className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] relative border-[#e2d9d0] border-[1px]"><Select.Root value={userFilter.value === "" ? ALL_FILTER_VALUE : userFilter.value} onValueChange={(value) => userFilter.onChange?.({ target: { value: value === ALL_FILTER_VALUE ? "" : value } })}>
              <Select.Trigger data-figma-node="5329:12265" data-figma-field="user" data-figma-field-origin="design_text" aria-label="All Users" className="absolute inset-0 h-full w-full bg-transparent text-left font-onest text-[13px] font-[400] leading-[17px] whitespace-nowrap pt-[8px] pr-[12px] pb-[8px] pl-[12px] cursor-pointer text-text-body-231f20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center justify-between"><Select.Value placeholder="All Users" /></Select.Trigger>
              <Select.Portal>
                <Select.Content position="popper" sideOffset={4} className="z-50 max-h-[240px] min-w-[var(--radix-select-trigger-width)] overflow-hidden overflow-y-auto rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]">
                  <Select.Viewport className="p-[4px]">
                    <Select.Item value="__all__" className="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-[4px] py-[6px] pr-[10px] pl-[10px] font-onest text-[13px] font-[400] leading-[17px] whitespace-nowrap text-[#231f20] outline-none data-[highlighted]:bg-[#f9fafb] data-[state=checked]:bg-[#f9fafb] data-[disabled]:pointer-events-none data-[disabled]:opacity-50"><Select.ItemText>All Users</Select.ItemText></Select.Item>
                    {figmaSelectOptions("5329:12265").map((option) => (
                      <Select.Item key={option.value} value={option.value} className="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-[4px] py-[6px] pr-[10px] pl-[10px] font-onest text-[13px] font-[400] leading-[17px] whitespace-nowrap text-[#231f20] outline-none data-[highlighted]:bg-[#f9fafb] data-[state=checked]:bg-[#f9fafb] data-[disabled]:pointer-events-none data-[disabled]:opacity-50"><Select.ItemText>{option.label}</Select.ItemText></Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root><div className="pointer-events-none absolute inset-0"><ChevronDown_a4db42af data-figma-node="5339:8833" data-figma-component="5111:6287" className="absolute left-[359px] top-[8px] overflow-hidden" /></div></div>
          </div>
          <div data-figma-node="5329:12269" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5329:12270" className="box-border w-max max-w-[74px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-neutral-mid-9ca3af">Action Type</p>
            <div className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] relative border-[#e2d9d0] border-[1px]"><Select.Root value={actionTypeFilter.value === "" ? ALL_FILTER_VALUE : actionTypeFilter.value} onValueChange={(value) => actionTypeFilter.onChange?.({ target: { value: value === ALL_FILTER_VALUE ? "" : value } })}>
              <Select.Trigger data-figma-node="5329:12271" data-figma-field="action-type" data-figma-field-origin="design_text" aria-label="All Actions" className="absolute inset-0 h-full w-full bg-transparent text-left font-onest text-[13px] font-[400] leading-[17px] whitespace-nowrap pt-[8px] pr-[12px] pb-[8px] pl-[12px] cursor-pointer text-text-body-231f20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center justify-between"><Select.Value placeholder="All Actions" /></Select.Trigger>
              <Select.Portal>
                <Select.Content position="popper" sideOffset={4} className="z-50 max-h-[240px] min-w-[var(--radix-select-trigger-width)] overflow-hidden overflow-y-auto rounded-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)]">
                  <Select.Viewport className="p-[4px]">
                    <Select.Item value="__all__" className="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-[4px] py-[6px] pr-[10px] pl-[10px] font-onest text-[13px] font-[400] leading-[17px] whitespace-nowrap text-[#231f20] outline-none data-[highlighted]:bg-[#f9fafb] data-[state=checked]:bg-[#f9fafb] data-[disabled]:pointer-events-none data-[disabled]:opacity-50"><Select.ItemText>All Actions</Select.ItemText></Select.Item>
                    {["create", "update", "delete", "reschedule", "export", "login", "logout"].map((action) => (
                      <Select.Item key={action} value={action} className="relative flex w-full min-w-0 cursor-pointer select-none items-center rounded-[4px] py-[6px] pr-[10px] pl-[10px] font-onest text-[13px] font-[400] leading-[17px] whitespace-nowrap text-[#231f20] outline-none data-[highlighted]:bg-[#f9fafb] data-[state=checked]:bg-[#f9fafb] data-[disabled]:pointer-events-none data-[disabled]:opacity-50"><Select.ItemText>{action}</Select.ItemText></Select.Item>
                    ))}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root><div className="pointer-events-none absolute inset-0"><ChevronDown_a4db42af data-figma-node="5339:8836" data-figma-component="5111:6287" className="absolute left-[359px] top-[8px] overflow-hidden" /></div></div>
          </div>
          <div data-figma-node="5329:12275" className="box-border w-[120px] h-[56px] relative flex flex-col items-start gap-1.5">
            <button data-figma-node="5329:12277" type="button" {...figmaAuditResetProps()} className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] border-[#a21d35] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-[#231f20] cursor-pointer"><span className="font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-brand-primary-a21d35 whitespace-nowrap">RESET</span></button>
          </div>
        </div>
        <div data-figma-node="5329:12279" className="box-border w-full min-w-0 h-[383px] overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-background-ffffff">
          <div data-figma-node="5329:12280" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e2d9d0] border-[1px] bg-background-tinted-f9fafb">
            <p data-figma-node="5329:12281" className="box-border w-[180px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-muted-686868">Timestamp</p>
            <p data-figma-node="5329:12282" className="box-border w-[180px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-muted-686868">User</p>
            <p data-figma-node="5329:12283" className="box-border w-[180px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-muted-686868">Action</p>
            <p data-figma-node="5329:12284" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-muted-686868">Resource</p>
            <p data-figma-node="5329:12285" className="box-border w-[120px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-muted-686868">Status</p>
          </div>
          <div data-figma-node="5329:12286" {...figmaItemProps("5329:12286")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px]">
            <p data-figma-node="5329:12287" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[500] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12287", "Sep 18, 03:54 PM")}</p>
            <div data-figma-node="5329:12288" className="box-border w-[180px] h-[24px] relative flex flex-row items-center gap-2">
              <img data-figma-node="5329:12289" src="/assets/figma/5329-12289.png" alt="Ellipse" width={24} height={24} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[24px] h-[24px] rounded-full max-w-none object-cover object-top" />
              <p data-figma-node="5329:12290" className="box-border w-max max-w-[70px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12290", "Amy Morse")}</p>
            </div>
            <p data-figma-node="5329:12291" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-brand-primary-a21d35">{figmaTextContent("5329:12291", "Created campaign")}</p>
            <p data-figma-node="5329:12292" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12292", "Great Prosser Balloon Rally Boost")}</p>
            <div data-figma-node="5329:12293" className="box-border w-[120px] h-[22px] relative flex flex-row items-start">
              <div data-figma-node="5329:12294" className="box-border w-max max-w-[73px] h-[22px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-ecfffd">
                <p data-figma-node="5329:12295" className="box-border w-max max-w-[53px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-accent-teal-2a9d8f">SUCCESS</p>
              </div>
            </div>
          </div>
          <div data-figma-node="5329:12296" {...figmaItemProps("5329:12296")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px]">
            <p data-figma-node="5329:12297" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[500] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12297", "Sep 18, 01:12 PM")}</p>
            <div data-figma-node="5329:12298" className="box-border w-[180px] h-[24px] relative flex flex-row items-center gap-2">
              <img data-figma-node="5329:12299" src="/assets/figma/5329-12299.png" alt="Ellipse" width={24} height={24} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[24px] h-[24px] rounded-full max-w-none object-cover object-top" />
              <p data-figma-node="5329:12300" className="box-border w-max max-w-[70px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12300", "Amy Morse")}</p>
            </div>
            <p data-figma-node="5329:12301" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-brand-primary-a21d35">{figmaTextContent("5329:12301", "Updated event")}</p>
            <p data-figma-node="5329:12302" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12302", "C5-M9-Y26 Balloon Launch")}</p>
            <div data-figma-node="5329:12303" className="box-border w-[120px] h-[22px] relative flex flex-row items-start">
              <div data-figma-node="5329:12304" className="box-border w-max max-w-[73px] h-[22px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-ecfffd">
                <p data-figma-node="5329:12305" className="box-border w-max max-w-[53px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-accent-teal-2a9d8f">SUCCESS</p>
              </div>
            </div>
          </div>
          <div data-figma-node="5329:12306" {...figmaItemProps("5329:12306")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px]">
            <p data-figma-node="5329:12307" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[500] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12307", "Sep 17, 11:45 AM")}</p>
            <div data-figma-node="5329:12308" className="box-border w-[180px] h-[24px] relative flex flex-row items-center gap-2">
              <img data-figma-node="5329:12309" src="/assets/figma/5329-12309.png" alt="Ellipse" width={24} height={24} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[24px] h-[24px] rounded-full max-w-none object-cover object-top" />
              <p data-figma-node="5329:12310" className="box-border w-max max-w-[71px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12310", "Devon Clay")}</p>
            </div>
            <p data-figma-node="5329:12311" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-brand-primary-a21d35">{figmaTextContent("5329:12311", "Deleted draft")}</p>
            <p data-figma-node="5329:12312" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12312", "Old Winter Promo Schedule")}</p>
            <div data-figma-node="5329:12313" className="box-border w-[120px] h-[22px] relative flex flex-row items-start">
              <div data-figma-node="5329:12314" className="box-border w-max max-w-[73px] h-[22px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-ecfffd">
                <p data-figma-node="5329:12315" className="box-border w-max max-w-[53px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-accent-teal-2a9d8f">SUCCESS</p>
              </div>
            </div>
          </div>
          <div data-figma-node="5329:12316" {...figmaItemProps("5329:12316")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px]">
            <p data-figma-node="5329:12317" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[500] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12317", "Sep 16, 09:30 AM")}</p>
            <div data-figma-node="5329:12318" className="box-border w-[180px] h-[24px] relative flex flex-row items-center gap-2">
              <img data-figma-node="5329:12319" src="/assets/figma/5329-12319.png" alt="Ellipse" width={24} height={24} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[24px] h-[24px] rounded-full max-w-none object-cover object-top" />
              <p data-figma-node="5329:12320" className="box-border w-max max-w-[70px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12320", "Amy Morse")}</p>
            </div>
            <p data-figma-node="5329:12321" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-brand-primary-a21d35">{figmaTextContent("5329:12321", "Exported report")}</p>
            <p data-figma-node="5329:12322" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12322", "Q3_Performance_Review.pdf")}</p>
            <div data-figma-node="5329:12323" className="box-border w-[120px] h-[22px] relative flex flex-row items-start">
              <div data-figma-node="5329:12324" className="box-border w-max max-w-[73px] h-[22px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-ecfffd">
                <p data-figma-node="5329:12325" className="box-border w-max max-w-[53px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-accent-teal-2a9d8f">SUCCESS</p>
              </div>
            </div>
          </div>
          <div data-figma-node="5329:12326" {...figmaItemProps("5329:12326")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px]">
            <p data-figma-node="5329:12327" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[500] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12327", "Sep 15, 05:22 PM")}</p>
            <div data-figma-node="5329:12328" className="box-border w-[180px] h-[24px] relative flex flex-row items-center gap-2">
              <img data-figma-node="5329:12329" src="/assets/figma/5329-12329.png" alt="Ellipse" width={24} height={24} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[24px] h-[24px] rounded-full max-w-none object-cover object-top" />
              <p data-figma-node="5329:12330" className="box-border w-max max-w-[47px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12330", "System")}</p>
            </div>
            <p data-figma-node="5329:12331" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-brand-primary-a21d35">{figmaTextContent("5329:12331", "Backup executed")}</p>
            <p data-figma-node="5329:12332" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12332", "Main Database Snap")}</p>
            <div data-figma-node="5329:12333" className="box-border w-[120px] h-[22px] relative flex flex-row items-start">
              <div data-figma-node="5329:12334" className="box-border w-max max-w-[73px] h-[22px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-ecfffd">
                <p data-figma-node="5329:12335" className="box-border w-max max-w-[53px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-accent-teal-2a9d8f">SUCCESS</p>
              </div>
            </div>
          </div>
          <div data-figma-node="5329:12336" {...figmaItemProps("5329:12336")} className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px]">
            <p data-figma-node="5329:12337" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[500] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12337", "Sep 15, 02:10 PM")}</p>
            <div data-figma-node="5329:12338" className="box-border w-[180px] h-[24px] relative flex flex-row items-center gap-2">
              <img data-figma-node="5329:12339" src="/assets/figma/5329-12339.png" alt="Ellipse" width={24} height={24} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[24px] h-[24px] rounded-full max-w-none object-cover object-top" />
              <p data-figma-node="5329:12340" className="box-border w-max max-w-[70px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12340", "Amy Morse")}</p>
            </div>
            <p data-figma-node="5329:12341" className="box-border w-[180px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-brand-primary-a21d35">{figmaTextContent("5329:12341", "Failed Login")}</p>
            <p data-figma-node="5329:12342" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5329:12342", "Unknown IP Alert")}</p>
            <div data-figma-node="5329:12343" className="box-border w-[120px] h-[22px] relative flex flex-row items-start">
              <div data-figma-node="5329:12344" className="box-border w-max max-w-[59px] h-[22px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-fcf3f4">
                <p data-figma-node="5329:12345" className="box-border w-max max-w-[39px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-brand-primary-a21d35">FAILED</p>
              </div>
            </div>
          </div>
        </div>
        <div data-figma-node="5354:14483" data-figma-pagination="true" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5354:14484" className="box-border w-max max-w-[157px] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-muted-686868">Showing 1-6 of 34 entries</p>
          <div data-figma-node="5354:14485" data-figma-pagination="true" className="box-border w-max max-w-[173px] h-[27px] relative flex flex-row items-start gap-1.5">
            <div data-figma-node="5354:14486" onClick={pagination.goPrev} role="button" aria-label="Previous page" aria-disabled={!pagination.canPrev} className="box-border w-max max-w-[47px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
              <p data-figma-node="5354:14487" className="box-border w-max max-w-[27px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Prev</p>
            </div>
            <div data-figma-node="5354:14488" onClick={() => pagination.goTo(1)} role="button" aria-label="Page 1" aria-current={pagination.currentPage === 1 ? "page" : undefined} className={`box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${pagination.chipClass(1)}`}>
              <p data-figma-node="5354:14489" className={`box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap ${pagination.chipTextClass(1)}`}>1</p>
            </div>
            <div data-figma-node="5354:14490" onClick={() => pagination.goTo(2)} role="button" aria-label="Page 2" aria-current={pagination.currentPage === 2 ? "page" : undefined} className={`box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${pagination.chipClass(2)}`}>
              <p data-figma-node="5354:14491" className={`box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap ${pagination.chipTextClass(2)}`}>2</p>
            </div>
            <div data-figma-node="5354:14492" onClick={pagination.goNext} role="button" aria-label="Next page" aria-disabled={!pagination.canNext} className="box-border w-max max-w-[48px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
              <p data-figma-node="5354:14493" className="box-border w-max max-w-[28px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Next</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
