/**
 * Luna generated page
 * Figma frame: 5327:3852
 * Page: Monthly-calendar-Profile Menu
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { MonthlyCalendarProfileMeMarketingCalendarSection } from "./MonthlyCalendarProfileMeMarketingCalendarSection";
import { MonthlyCalendarProfileMeSection_n_5327_10133 } from "./MonthlyCalendarProfileMeSection_n_5327_10133";
import { MonthlyCalendarProfileMeSeptember2026Section } from "./MonthlyCalendarProfileMeSeptember2026Section";
import { MonthlyCalendarProfileMeSection_n_5645_45615 } from "./MonthlyCalendarProfileMeSection_n_5645_45615";

export function MonthlyCalendarProfileMenuModal() {
  const screenData = useFigmaScreenData();
  return (
    <div data-figma-bound={screenData.bound}
      data-figma-frame="5327:3852" className="relative flex min-h-screen w-full min-w-0 flex-col bg-background">
      <main id="main-content" className="flex w-full min-w-0 flex-1 flex-col">
        <MonthlyCalendarProfileMeMarketingCalendarSection />
        <div className="flex w-full min-w-0 flex-col items-start md:flex-row">
        <MonthlyCalendarProfileMeSection_n_5327_10133 />
        <MonthlyCalendarProfileMeSeptember2026Section />
        <MonthlyCalendarProfileMeSection_n_5645_45615 />
        </div>
      </main>
    </div>
  );
}
