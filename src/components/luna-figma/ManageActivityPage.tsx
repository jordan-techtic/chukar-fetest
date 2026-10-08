/**
 * Luna generated page
 * Figma frame: 5359:17106
 * Page: manage-activity
 * Route: /manage-activity
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import "./figma-fonts.css";
import "./figma-responsive.css";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { TitleRowSection } from "./TitleRowSection";
import { ContentColumnSection } from "./ContentColumnSection";
import { figmaActionProps } from "./useFigmaScreenData";
import { ChevronDown_a4db42af } from "./ChevronDown_a4db42af";
import { FigmaImage } from "./FigmaImage";

export function ManageActivityPage() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5359:17106"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={770} nodeId="frame">
        <TitleRowSection />
        <ContentColumnSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <div data-figma-node="5354:14220" data-figma-component="5273:20995" className="pointer-events-auto box-border w-[1440px] h-[80px] absolute left-[0px] top-[0px] [--fx:0] [--fww:1440] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] bg-[#ffffff]">
            <div data-figma-node="I5354:14220;5217:13714" className="box-border w-[282px] h-[50px] absolute left-[20px] top-[15px] [--fx:20] [--fww:282] gap-[30px]">
              <div data-figma-node="I5354:14220;5217:13715" className="box-border w-[282px] h-[50px] absolute left-[0px] top-[0px] [--fx:0] [--fww:282] gap-3">
                <FigmaImage data-figma-node="I5354:14220;5217:13716" src="/assets/figma/I5354-14220-5217-13716.png" alt="image 2" className="box-border w-[54px] h-[50px] absolute left-[0px] top-[0px] [--fx:0] [--fww:54] rounded-[10px] max-w-none object-cover object-top" />
                <div data-figma-node="I5354:14220;5217:13717" className="box-border w-[216px] h-[43px] absolute left-[66px] top-[4px] [--fx:66] [--fww:216] flex flex-col items-start gap-[2px] gap-0.5">
                  <p data-figma-node="I5354:14220;5217:13718" className="box-border w-[216px] h-[27px] font-inter text-[22px] font-[800] leading-[27px] text-left whitespace-nowrap text-[#231f20]">Marketing Calendar </p>
                  <p data-figma-node="I5354:14220;5217:13719" className="box-border w-[171px] h-[14px] font-onest text-[11px] font-[600] leading-[14px] text-left whitespace-nowrap text-[#686868]">Plan · Create · Track · Grow</p>
                </div>
              </div>
            </div>
            <div data-figma-node="I5354:14220;5217:13733" className="box-border w-[217px] h-[40px] absolute left-[1203px] top-[20px] [--fx:1203] [--fww:217] gap-4">
              <button data-figma-node="I5354:14220;5217:13746" type="button" data-figma-action="act_c1ed8bfe7f11" {...figmaActionProps("act_c1ed8bfe7f11")} className="box-border w-[145px] h-[40px] absolute left-[0px] top-[0px] [--fx:0] [--fww:145] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-[#f2f1dd] hover:opacity-90 cursor-pointer"><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-[#231f20] whitespace-nowrap">oPEN CALANDER</span></button>
              <button data-figma-node="I5354:14220;5217:13749" type="button" data-figma-action="act_e4dc78f392da" {...figmaActionProps("act_e4dc78f392da")} className="box-border w-[56px] h-[32px] absolute left-[161px] top-[4px] [--fx:161] [--fww:56] gap-2 cursor-pointer block">
                <div data-figma-node="I5354:14220;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-[32px] absolute left-[0px] top-[0px] [--fx:0] [--fww:32] rounded-[32px] gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
                  <FigmaImage data-figma-node="I5354:14220;5217:13750;1002:172586" src="/assets/figma/I5354-14220-5217-13750-1002-172586.png" alt="Image" className="box-border w-[32px] h-[32px] absolute left-[0px] top-[0px] [--fx:0] [--fww:32] rounded-[32px] max-w-none object-cover object-top" />
                </div>
                <ChevronDown_a4db42af data-figma-node="I5354:14220;5217:13752" data-figma-component="5111:6287" className="absolute left-[40px] top-[8px]" />
              </button>
            </div>
          </div>
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
