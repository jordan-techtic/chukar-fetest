/**
 * Luna generated page
 * Figma frame: 5359:17424
 * Page: manage-users
 * Route: /manage-users
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import "./figma-fonts.css";
import "./figma-responsive.css";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { ManageUsersTitleRowSection } from "./ManageUsersTitleRowSection";
import { ManageUsersContentColumnSection } from "./ManageUsersContentColumnSection";
import { Shared_08359495 } from "./Shared_08359495";

export function ManageUsersPage() {
  const screenData = useFigmaScreenData();
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5359:17424"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={770} nodeId="frame">
        <ManageUsersTitleRowSection />
        <ManageUsersContentColumnSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <Shared_08359495 data-figma-node="5354:14284" data-figma-component="5273:20995" className="pointer-events-auto absolute left-[0px] top-[0px]" />
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
