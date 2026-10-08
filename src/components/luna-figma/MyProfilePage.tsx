/**
 * Luna generated page
 * Figma frame: 5329:12027
 * Page: my-profile
 * Route: /my-profile
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import "./figma-fonts.css";
import "./figma-responsive.css";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { MyProfileTitleRowSection } from "./MyProfileTitleRowSection";
import { MyProfileContentSection } from "./MyProfileContentSection";
import { Shared_08359495 } from "./Shared_08359495";

export function MyProfilePage() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5329:12027"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={1179} nodeId="frame">
        <MyProfileTitleRowSection />
        <MyProfileContentSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <Shared_08359495 data-figma-node="5329:12028" data-figma-component="5273:20995" className="pointer-events-auto absolute left-[0px] top-[0px]" />
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
