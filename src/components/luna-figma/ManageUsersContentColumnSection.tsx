/**
 * Luna generated layout
 * Figma node: 5359:17456
 * Section: Content Column
 * Route: /manage-users
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import {
  figmaPaginationProps,
  figmaUserSwitchChecked,
  figmaUserSwitchProps,
} from "./useFigmaScreenData";
import { figmaTextContent } from "./figmaDisplay";

export function ManageUsersContentColumnSection() {
  const pagination = figmaPaginationProps("5359:17593", {
    listOperation: "GET /api/v1/users",
    pageSize: 6,
  });
  const switchChecked: Record<
    "5359:17495" | "5359:17511" | "5359:17527" | "5359:17543" | "5359:17559" | "5359:17575",
    boolean
  > = {
    "5359:17495": figmaUserSwitchChecked("5359:17495"),
    "5359:17511": figmaUserSwitchChecked("5359:17511"),
    "5359:17527": figmaUserSwitchChecked("5359:17527"),
    "5359:17543": figmaUserSwitchChecked("5359:17543"),
    "5359:17559": figmaUserSwitchChecked("5359:17559"),
    "5359:17575": figmaUserSwitchChecked("5359:17575"),
  };
  return (
    <section data-figma-node="5359:17456" className="absolute box-border left-[0px] top-[169px] w-full min-w-0 h-[601px] [--fx:0] [--fww:1440] flex flex-col items-start z-[2]">
      <div data-figma-node="5359:17472" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-6 pr-[40px] pb-[40px] pl-[40px]">
        <div data-figma-node="5359:17487" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.02)] relative flex flex-col items-start border-[#e2d9d0] border-[1px] bg-background-ffffff">
          <div data-figma-node="5359:17488" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-5 pt-[14px] pr-[24px] pb-[14px] pl-[24px] border-[#e2d9d0] border-[1px] bg-background-tinted-faf3e8">
            <p data-figma-node="5359:17489" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">User Name</p>
            <p data-figma-node="5359:17490" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Email Address</p>
            <p data-figma-node="5359:17491" className="box-border w-[120px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Role</p>
            <p data-figma-node="5359:17492" className="box-border w-[140px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Last Active</p>
            <p data-figma-node="5359:17493" className="box-border w-[100px] h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Status</p>
          </div>
          <div data-figma-node="5359:17495" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17496" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17497" src="/assets/figma/5359-17497.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17498" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5359:17498", "John Doe")}</p>
            </div>
            <p data-figma-node="5359:17499" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17499", "john.doe@company.com")}</p>
            <div data-figma-node="5359:17500" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-fde8ed">
              <p data-figma-node="5359:17501" className="box-border w-max max-w-[68px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-brand-primary-a21d35">{figmaTextContent("5359:17501", "Super Admin")}</p>
            </div>
            <p data-figma-node="5359:17502" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17502", "2 mins ago")}</p>
            <div data-figma-node="5354:14408" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button type="button" aria-label="Switch" {...figmaUserSwitchProps("5359:17495")} className="inline-flex items-center justify-center"><div data-figma-node="5354:14409" data-figma-component={switchChecked["5359:17495"] ? "5111:12391" : "5111:12395"} className={`box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative flex flex-row items-center gap-0.5 ${switchChecked["5359:17495"] ? "bg-brand-primary-a21d35" : ""}`} style={switchChecked["5359:17495"] ? undefined : {backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14409;315:8655" className={`box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center${switchChecked["5359:17495"] ? " justify-end" : ""} gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]`}>
    <div data-figma-node="I5354:14409;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14409;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17511" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17512" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17513" src="/assets/figma/5359-17513.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17514" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5359:17514", "Jane Smith")}</p>
            </div>
            <p data-figma-node="5359:17515" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17515", "jane.smith@company.com")}</p>
            <div data-figma-node="5359:17516" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-f5f3ff">
              <p data-figma-node="5359:17517" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted-4b5563">{figmaTextContent("5359:17517", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17518" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17518", "1 hour ago")}</p>
            <div data-figma-node="5354:14435" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button type="button" aria-label="Switch" {...figmaUserSwitchProps("5359:17511")} className="inline-flex items-center justify-center"><div data-figma-node="5354:14436" data-figma-component={switchChecked["5359:17511"] ? "5111:12391" : "5111:12395"} className={`box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative flex flex-row items-center gap-0.5 ${switchChecked["5359:17511"] ? "bg-brand-primary-a21d35" : ""}`} style={switchChecked["5359:17511"] ? undefined : {backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14436;315:8655" className={`box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center${switchChecked["5359:17511"] ? " justify-end" : ""} gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]`}>
    <div data-figma-node="I5354:14436;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14436;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17527" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17528" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17529" src="/assets/figma/5359-17529.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17530" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5359:17530", "Alex Johnson")}</p>
            </div>
            <p data-figma-node="5359:17531" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17531", "alex.j@company.com")}</p>
            <div data-figma-node="5359:17532" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-f3f4f6">
              <p data-figma-node="5359:17533" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted-4b5563">{figmaTextContent("5359:17533", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17534" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17534", "1 day ago")}</p>
            <div data-figma-node="5354:14441" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button type="button" aria-label="Switch" {...figmaUserSwitchProps("5359:17527")} className="inline-flex items-center justify-center"><div data-figma-node="5354:14442" data-figma-component={switchChecked["5359:17527"] ? "5111:12391" : "5111:12395"} className={`box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative flex flex-row items-center gap-0.5 ${switchChecked["5359:17527"] ? "bg-brand-primary-a21d35" : ""}`} style={switchChecked["5359:17527"] ? undefined : {backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14442;315:8655" className={`box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center${switchChecked["5359:17527"] ? " justify-end" : ""} gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]`}>
    <div data-figma-node="I5354:14442;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14442;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17543" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17544" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17545" src="/assets/figma/5359-17545.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17546" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5359:17546", "Emily Watson")}</p>
            </div>
            <p data-figma-node="5359:17547" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17547", "emily.w@company.com")}</p>
            <div data-figma-node="5359:17548" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-f5f3ff">
              <p data-figma-node="5359:17549" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted-4b5563">{figmaTextContent("5359:17549", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17550" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17550", "3 days ago")}</p>
            <div data-figma-node="5354:14453" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button type="button" aria-label="Switch" {...figmaUserSwitchProps("5359:17543")} className="inline-flex items-center justify-center"><div data-figma-node="5354:14454" data-figma-component={switchChecked["5359:17543"] ? "5111:12391" : "5111:12395"} className={`box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative flex flex-row items-center gap-0.5 ${switchChecked["5359:17543"] ? "bg-brand-primary-a21d35" : ""}`} style={switchChecked["5359:17543"] ? undefined : {backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14454;315:8184" className={`box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center gap-0.5 ${switchChecked["5359:17543"] ? " justify-end " : " "}pt-[2px] pr-[2px] pb-[2px] pl-[2px]`}>
    <div data-figma-node="I5354:14454;315:8185" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14454;315:8186" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17559" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[1px]">
            <div data-figma-node="5359:17560" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17561" src="/assets/figma/5359-17561.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17562" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5359:17562", "Michael Chang")}</p>
            </div>
            <p data-figma-node="5359:17563" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17563", "michael.c@company.com")}</p>
            <div data-figma-node="5359:17564" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-tinted-eef2ff">
              <p data-figma-node="5359:17565" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted-4b5563">{figmaTextContent("5359:17565", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17566" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17566", "5 days ago")}</p>
            <div data-figma-node="5354:14459" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button type="button" aria-label="Switch" {...figmaUserSwitchProps("5359:17559")} className="inline-flex items-center justify-center"><div data-figma-node="5354:14460" data-figma-component={switchChecked["5359:17559"] ? "5111:12391" : "5111:12395"} className={`box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative flex flex-row items-center gap-0.5 ${switchChecked["5359:17559"] ? "bg-brand-primary-a21d35" : ""}`} style={switchChecked["5359:17559"] ? undefined : {backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14460;315:8184" className={`box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center gap-0.5 ${switchChecked["5359:17559"] ? " justify-end " : " "}pt-[2px] pr-[2px] pb-[2px] pl-[2px]`}>
    <div data-figma-node="I5354:14460;315:8185" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14460;315:8186" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</div></button></div>
          </div>
          <div data-figma-node="5359:17575" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-5 pt-[12px] pr-[24px] pb-[12px] pl-[24px] border-[#e2d9d0] border-[0px]">
            <div data-figma-node="5359:17576" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-3">
              <img data-figma-node="5359:17577" src="/assets/figma/5359-17577.png" alt="avatar" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[16px] max-w-none object-cover object-top" />
              <p data-figma-node="5359:17578" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-text-body-231f20">{figmaTextContent("5359:17578", "Robert Taylor")}</p>
            </div>
            <p data-figma-node="5359:17579" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17579", "robert.t@company.com")}</p>
            <div data-figma-node="5359:17580" className="box-border w-[120px] h-[22px] rounded-[100px] relative flex flex-row items-start justify-center pt-[4px] pr-[10px] pb-[4px] pl-[10px] bg-background-f3f4f6">
              <p data-figma-node="5359:17581" className="box-border w-max max-w-[34px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-text-muted-4b5563">{figmaTextContent("5359:17581", "Admin")}</p>
            </div>
            <p data-figma-node="5359:17582" className="box-border w-[140px] h-[18px] font-onest text-[14px] font-[400] leading-[18px] text-left whitespace-nowrap text-text-muted-686868">{figmaTextContent("5359:17582", "1 week ago")}</p>
            <div data-figma-node="5354:14465" className="box-border w-[100px] h-[16px] flex flex-row items-center"><button type="button" aria-label="Switch" {...figmaUserSwitchProps("5359:17575")} className="inline-flex items-center justify-center"><div data-figma-node="5354:14466" data-figma-component={switchChecked["5359:17575"] ? "5111:12391" : "5111:12395"} className={`box-border w-max max-w-[28px] h-[16px] rounded-[20px] relative flex flex-row items-center gap-0.5 ${switchChecked["5359:17575"] ? "bg-brand-primary-a21d35" : ""}`} style={switchChecked["5359:17575"] ? undefined : {backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
  <div data-figma-node="I5354:14466;315:8655" className={`box-border w-[28px] h-[16px] overflow-hidden relative flex flex-row items-center${switchChecked["5359:17575"] ? " justify-end" : ""} gap-0.5 pt-[2px] pr-[2px] pb-[2px] pl-[2px]`}>
    <div data-figma-node="I5354:14466;315:8656" className="box-border w-[12px] h-[12px] rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,35,11,0.2)] relative block">
      <div data-figma-node="I5354:14466;315:8657" className="box-border w-[12px] h-[12px] absolute left-[0px] top-[0px] rounded-[16px] block bg-background-ffffff"></div>
    </div>
  </div>
</div></button></div>
          </div>
        </div>
        <div data-figma-node="5359:17591" data-figma-pagination="true" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between">
          <p data-figma-node="5359:17592" className="box-border w-max max-w-[145px] h-auto min-h-[17px] font-onest text-[13px] font-[400] leading-[17px] text-left whitespace-nowrap text-text-muted-686868">Showing 1-6 of 18 users</p>
          <div data-figma-node="5359:17593" data-figma-pagination="true" className="box-border w-max max-w-[173px] h-[27px] relative flex flex-row items-start gap-1.5">
            <div data-figma-node="5359:17594" onClick={pagination.goPrev} role="button" aria-label="Previous page" aria-disabled={!pagination.canPrev} className="box-border w-max max-w-[47px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
              <p data-figma-node="5359:17595" className="box-border w-max max-w-[27px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Prev</p>
            </div>
            <div data-figma-node="5359:17596" onClick={() => pagination.goTo(1)} role="button" aria-label="Page 1" aria-current={pagination.currentPage === 1 ? "page" : undefined} className={`box-border w-max max-w-[29px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${pagination.chipClass(1)}`}>
              <p data-figma-node="5359:17597" className={`box-border w-max max-w-[5px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap ${pagination.chipTextClass(1)}`}>1</p>
            </div>
            <div data-figma-node="5359:17598" onClick={() => pagination.goTo(2)} role="button" aria-label="Page 2" aria-current={pagination.currentPage === 2 ? "page" : undefined} className={`box-border w-max max-w-[31px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[12px] pb-[6px] pl-[12px] ${pagination.chipClass(2)}`}>
              <p data-figma-node="5359:17599" className={`box-border w-max max-w-[7px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap ${pagination.chipTextClass(2)}`}>2</p>
            </div>
            <div data-figma-node="5359:17600" onClick={pagination.goNext} role="button" aria-label="Next page" aria-disabled={!pagination.canNext} className="box-border w-max max-w-[48px] h-[27px] rounded-[6px] relative flex flex-row items-start pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
              <p data-figma-node="5359:17601" className="box-border w-max max-w-[28px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-231f20">Next</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
