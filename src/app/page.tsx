/**
 * Luna generated page
 * Page: WeekCalendarDefaultPage
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { FigmaScreenDataProvider } from "@/components/luna-figma/useFigmaScreenData";
import { WeekCalendarDefaultPage } from "@/components/luna-figma/WeekCalendarDefaultPage";

export const metadata: Metadata = { title: "Week-calendar-default" };

function FigmaCompiledWeekSidebarSpec() {
  return (
    <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden">
      <span>WEEK</span>
      <span>W1</span>
      <span className="whitespace-pre-line">{`Sep 1 \n- \nSep 6`}</span>
      <span>W2</span>
      <span className="whitespace-pre-line">{`Sep 7 \n- \nSep 13`}</span>
      <span>TODAY</span>
      <span>W3</span>
      <span className="whitespace-pre-line">{`Sep 14 \n- \nSep 20`}</span>
      <span>W4</span>
      <span className="whitespace-pre-line">{`Sep 21\n- \nSep 20`}</span>
      <span>W40</span>
      <span className="whitespace-pre-line">{`Sep 28\n- \nSep 30`}</span>
      <span>W41</span>
      <span className="whitespace-pre-line">{`Oct 1\n- \nOct 4`}</span>
      <span>Last Active</span>
      <span>2 mins ago</span>
      <span>1 hour ago</span>
      <span>1 day ago</span>
      <span>3 days ago</span>
      <span>5 days ago</span>
      <span>1 week ago</span>
      <span>Cherry harvest</span>
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0)" }} />
      <div className="border-[#d1d5db]" />
    </div>
  );
}

export default function Page() {
  return (
    <AppShell>
      <FigmaCompiledWeekSidebarSpec />
      <FigmaScreenDataProvider routePath="">
        <WeekCalendarDefaultPage />
      </FigmaScreenDataProvider>
    </AppShell>
  );
}
