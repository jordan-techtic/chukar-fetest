/**
 * Luna generated page
 * Figma frame: 5602:71490
 * Page: Week-calendar-default
 * Route: /marketing-calendar/week
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { useEffect, useRef, useState } from "react";

import "./figma-theme.css";
import "./figma-responsive.css";
import { useFigmaScreenData, useDialogState } from "./useFigmaScreenData";
import { WeekCalendarDefaultContentSection } from "./WeekCalendarDefaultContentSection";
import { figmaUnresolvedActionProps, openFigmaDialog } from "./useFigmaScreenData";
import { Button } from "@/components/ui/button";
import { FiRrAngleSmallLeft } from "./FiRrAngleSmallLeft";
import { FiRrAngleSmallRight } from "./FiRrAngleSmallRight";
import { FiRrCrossSmall } from "./FiRrCrossSmall";
import { FiRrDocument } from "./FiRrDocument";
import { FiRrFilter } from "./FiRrFilter";
import { FiRrMegaphone } from "./FiRrMegaphone";
import { FiRrTarget } from "./FiRrTarget";
import { MonthlyCalendarProfileMenuModal } from "./MonthlyCalendarProfileMenuModal";
import { WeekCalendarAdvanceFilterModal } from "./WeekCalendarAdvanceFilterModal";
import { AnnualCalendarDefaultModal } from "./AnnualCalendarDefaultModal";
import { MonthlyCalendarNotesModal } from "./MonthlyCalendarNotesModal";

const FIGMA_ARTBOARD_WIDTH = 1440;

export function WeekCalendarDefaultPage() {
  const screenData = useFigmaScreenData();
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) {
      return;
    }
    const update = () => {
      const nextScale = outer.clientWidth / FIGMA_ARTBOARD_WIDTH;
      setScale(nextScale);
      setScaledHeight(inner.offsetHeight * nextScale);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, []);

  const dialog_act_1b4093185628 = useDialogState("act_1b4093185628");
  const dialog_act_0dd4ae302327 = useDialogState("act_0dd4ae302327");
  const dialog_act_c77f170c369e = useDialogState("act_c77f170c369e");
  const dialog_act_9e536ea73c9b = useDialogState("act_9e536ea73c9b");
  return (
    <div
      ref={outerRef}
      data-figma-bound={screenData.bound}
      data-figma-frame="5602:71490"
      className="relative w-full min-w-0 overflow-hidden bg-background-tinted-fff9f3"
      style={scaledHeight !== undefined ? { height: scaledHeight } : undefined}
    >
      <div
        ref={innerRef}
        className="relative flex min-h-screen w-[1440px] flex-col origin-top-left bg-background-tinted-fff9f3"
        style={{ transform: `scale(${scale})` }}
      >
      <main id="main-content" className="relative flex min-h-[896px] w-full min-w-0 flex-1 flex-col">
        <WeekCalendarDefaultContentSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <div data-figma-node="5602:71491" data-figma-component="5273:20995" className="pointer-events-auto box-border w-full min-w-0 h-[80px] absolute left-[0px] top-[0px] z-[0] [--fx:0] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] flex flex-row items-center justify-between pt-[15px] pb-[15px] pl-[20px] pr-[20px] border-b border-[#e2d9d0] bg-background-ffffff overflow-hidden w-[1440px]">
            <div data-figma-node="I5602:71491;5217:13714" className="box-border w-max max-w-[min(282px,100%)] h-auto relative flex flex-row items-center gap-[30px]">
              <div data-figma-node="I5602:71491;5217:13715" className="box-border w-max max-w-[min(282px,100%)] h-auto relative flex flex-row items-center gap-3">
                <img data-figma-node="I5602:71491;5217:13716" src="/assets/figma/I5602-71491-5217-13716.png" alt="" aria-hidden="true" width={54} height={50} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[54px] shrink-0 h-[50px] rounded-[10px] max-w-none object-cover object-top" />
                <div data-figma-node="I5602:71491;5217:13717" className="box-border w-max max-w-[min(216px,100%)] h-auto relative flex flex-col items-start gap-0.5">
                  <h2 data-figma-node="I5602:71491;5217:13718" className="box-border w-max max-w-[min(216px,100%)] h-auto min-h-[27px] shrink-0 font-inter text-[22px] font-[800] leading-[27px] text-left lg:whitespace-nowrap text-text-body-231f20">Marketing Calendar </h2>
                  <p data-figma-node="I5602:71491;5217:13719" className="box-border w-max max-w-[min(171px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[600] leading-[14px] uppercase text-left lg:whitespace-nowrap text-text-muted-686868">Plan · Create · Track · Grow</p>
                </div>
              </div>
            </div>
            <div data-figma-node="I5602:71491;5217:13733" className="box-border w-max max-w-[min(434px,100%)] h-auto relative flex flex-row items-center gap-4">
              <a data-figma-node="I5602:71491;5217:13742" href="/week-calendar-historical-view" className="box-border w-max h-[40px] rounded-[6px] min-w-[208px] border-[#e2d9d0] border-[1px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-background-tinted-faf3e8 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current gap-2"><div data-figma-node="I5602:71491;5217:13743" data-figma-component="5111:8203" className="box-border w-[16px] h-[16px] overflow-hidden relative">
  <svg data-figma-node="I5602:71491;5217:13743;5111:8204" viewBox="0 0 10.67 10.67" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute [--fx:3] [--fww:11] left-[18.75%] w-[68.75%] top-[18.75%] h-[68.75%] pointer-events-none overflow-visible"><path d="M0.75 5.33333C0.75 4.91912 0.414214 4.58333 0 4.58333C-0.414214 4.58333 -0.75 4.91912 -0.75 5.33333L0 5.33333L0.75 5.33333ZM1.33333 1.80557L1.89564 2.30187L1.89564 2.30187L1.33333 1.80557ZM0.584567 1.5309C0.325488 1.85409 0.377461 2.32611 0.70065 2.58519C1.02384 2.84426 1.49586 2.79229 1.75494 2.4691L1.16975 2L0.584567 1.5309ZM5.33333 5.33333L4.58333 5.33333C4.58333 5.53225 4.66235 5.72301 4.803 5.86366L5.33333 5.33333ZM6.08333 2.66667C6.08333 2.25245 5.74755 1.91667 5.33333 1.91667C4.91912 1.91667 4.58333 2.25245 4.58333 2.66667L5.33333 2.66667L6.08333 2.66667ZM6.46967 7.53033C6.76256 7.82322 7.23744 7.82322 7.53033 7.53033C7.82322 7.23744 7.82322 6.76256 7.53033 6.46967L7 7L6.46967 7.53033ZM1.16927 2.0026L0.419271 2.0026C0.419271 2.41682 0.755057 2.7526 1.16927 2.7526L1.16927 2.0026ZM1.91927 0.00260417C1.91927 -0.411609 1.58348 -0.747396 1.16927 -0.747396C0.755057 -0.747396 0.419271 -0.411609 0.419271 0.00260417L1.16927 0.00260417L1.91927 0.00260417ZM3.16927 2.7526C3.58348 2.7526 3.91927 2.41682 3.91927 2.0026C3.91927 1.58839 3.58348 1.2526 3.16927 1.2526L3.16927 2.0026L3.16927 2.7526ZM10.6667 5.33333L9.91667 5.33333C9.91667 7.86464 7.86464 9.91667 5.33333 9.91667L5.33333 10.6667L5.33333 11.4167C8.69307 11.4167 11.4167 8.69307 11.4167 5.33333L10.6667 5.33333ZM5.33333 10.6667L5.33333 9.91667C2.80203 9.91667 0.75 7.86464 0.75 5.33333L0 5.33333L-0.75 5.33333C-0.75 8.69307 1.9736 11.4167 5.33333 11.4167L5.33333 10.6667ZM5.33333 0L5.33333 0.75C7.86464 0.75 9.91667 2.80203 9.91667 5.33333L10.6667 5.33333L11.4167 5.33333C11.4167 1.9736 8.69307 -0.75 5.33333 -0.75L5.33333 0ZM1.33333 1.80557L1.89564 2.30187C2.73657 1.3491 3.96452 0.75 5.33333 0.75L5.33333 0L5.33333 -0.75C3.5163 -0.75 1.88462 0.0475794 0.771029 1.30927L1.33333 1.80557ZM1.16975 2L1.75494 2.4691C1.80052 2.41224 1.84744 2.35648 1.89564 2.30187L1.33333 1.80557L0.771029 1.30927C0.707162 1.38163 0.644987 1.45553 0.584567 1.5309L1.16975 2ZM5.33333 5.33333L6.08333 5.33333L6.08333 2.66667L5.33333 2.66667L4.58333 2.66667L4.58333 5.33333L5.33333 5.33333ZM5.33333 5.33333L4.803 5.86366L6.46967 7.53033L7 7L7.53033 6.46967L5.86366 4.803L5.33333 5.33333ZM1.16927 2.0026L1.91927 2.0026L1.91927 0.00260417L1.16927 0.00260417L0.419271 0.00260417L0.419271 2.0026L1.16927 2.0026ZM1.16927 2.0026L1.16927 2.7526L3.16927 2.7526L3.16927 2.0026L3.16927 1.2526L1.16927 1.2526L1.16927 2.0026Z" fill="#a21d35" /></svg>
</div><span className="font-onest text-[13px] font-[700] leading-[17px] uppercase text-left whitespace-nowrap text-brand-primary-a21d35">Historical View</span></a>
              {/* LUNA-UNRESOLVED-ACTION: no prototype reaction or submit binding found for this control (node I5602:71491;5217:13746) — wire manually */}
<Button data-figma-node="I5602:71491;5217:13746" type="button" data-figma-unresolved-action="true" {...figmaUnresolvedActionProps("I5602:71491;5217:13746")} className="box-border w-max h-[40px] rounded-[6px] min-w-[138px] pt-[8px] pr-[16px] pb-[8px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-surface-light-f2f1dd hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 hover:bg-surface-light-f2f1dd shadow-none gap-2"><div data-figma-node="I5602:71491;5217:13747" data-figma-component="5121:8564" className="box-border w-[16px] h-[16px] overflow-hidden relative flex flex-col items-center">
  <svg data-figma-node="I5602:71491;5217:13747;403:408" viewBox="0 0 7.48 12.67" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[7px] h-[13px] pointer-events-none overflow-visible"><path d="M2.33614 12.0813C2.52187 12.2672 2.7424 12.4146 2.98514 12.5152C3.22787 12.6158 3.48805 12.6676 3.7508 12.6676C4.01355 12.6676 4.27373 12.6158 4.51646 12.5152C4.7592 12.4146 4.97973 12.2672 5.16547 12.0813L7.30613 9.94067C7.42091 9.81373 7.48247 9.64752 7.47808 9.47644C7.47369 9.30536 7.40367 9.14253 7.28254 9.02165C7.1614 8.90077 6.99842 8.8311 6.82733 8.82707C6.65625 8.82304 6.49016 8.88496 6.36347 9L4.4128 10.9513L4.41747 0.666667C4.41747 0.489856 4.34723 0.320286 4.22221 0.195262C4.09718 0.0702379 3.92761 1.11022e-16 3.7508 0L3.7508 1.85037e-17C3.57399 1.29526e-16 3.40442 0.0702379 3.2794 0.195262C3.15437 0.320286 3.08413 0.489856 3.08413 0.666667L3.07814 10.9387L1.13814 9C1.01304 8.875 0.843413 8.8048 0.666566 8.80487C0.489719 8.80493 0.320141 8.87524 0.195135 9.00033C0.0701298 9.12543 -6.24704e-05 9.29506 4.17184e-08 9.4719C6.25538e-05 9.64875 0.0703745 9.81833 0.195468 9.94333L2.33614 12.0813Z" fill="#374957" /></svg>
  <svg data-figma-node="I5602:71491;5217:13747;403:409" viewBox="0 0 16 5.33" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[16px] h-[5px] pointer-events-none overflow-visible"><path d="M15.3333 0C15.1565 0 14.987 0.0702372 14.8619 0.195261C14.7369 0.320285 14.6667 0.489855 14.6667 0.666665L14.6667 3.33333C14.6667 3.51014 14.5964 3.67971 14.4714 3.80473C14.3464 3.92975 14.1768 3.99999 14 3.99999L2 3.99999C1.82319 3.99999 1.65362 3.92975 1.5286 3.80473C1.40357 3.67971 1.33333 3.51014 1.33333 3.33333L1.33333 0.666665C1.33333 0.489855 1.2631 0.320285 1.13807 0.195261C1.01305 0.0702372 0.843478 0 0.666667 0L0.666667 0C0.489856 0 0.320286 0.0702372 0.195262 0.195261C0.0702379 0.320285 1.80411e-16 0.489855 0 0.666665L1.29526e-16 3.33333C5.73615e-16 3.86376 0.210714 4.37247 0.585786 4.74754C0.960859 5.12261 1.46957 5.33332 2 5.33332L14 5.33332C14.5304 5.33332 15.0391 5.12261 15.4142 4.74754C15.7893 4.37247 16 3.86376 16 3.33333L16 0.666665C16 0.489855 15.9298 0.320285 15.8047 0.195261C15.6797 0.0702372 15.5101 0 15.3333 0Z" fill="#374957" /></svg>
</div><span className="font-onest text-[13px] font-[700] leading-[17px] uppercase text-left whitespace-nowrap text-text-body-231f20">Export PDF</span></Button>
              <div data-figma-node="I5602:71491;5217:13749" data-figma-action="act_1b4093185628" data-figma-overlay-opens="5327:3852" role="button" tabIndex={0} onKeyDown={(e) => { if (e.target === e.currentTarget && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openFigmaDialog("act_1b4093185628"); } }} onClick={(e) => { e.preventDefault(); openFigmaDialog("act_1b4093185628"); }} className="box-border w-max max-w-[min(56px,100%)] h-auto flex cursor-pointer flex-row items-center gap-2"><button type="button" aria-label="Avatar" className="inline-flex items-center justify-center"><div data-figma-node="I5602:71491;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-auto rounded-[32px] relative flex flex-row items-start gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0)"}}>
  <img data-figma-node="I5602:71491;5217:13750;1002:172586" src="/assets/figma/I5602-71491-5217-13750-1002-172586.png" alt="" aria-hidden="true" width={32} height={32} decoding="async" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E"; }} className="box-border w-[32px] shrink-0 h-[32px] rounded-[32px] max-w-none object-cover object-top" />
</div></button><button type="button" aria-label="Expand Historical View" className="inline-flex items-center justify-center"><div data-figma-node="I5602:71491;5217:13752" data-figma-component="5111:6287" className="box-border w-[16px] h-[16px] overflow-hidden relative">
  <span data-figma-node="I5602:71491;5217:13752;5111:6288" data-figma-unrendered="vector" data-figma-diagnostic="vector_geometry_unavailable" aria-hidden="true" className="box-border absolute [--fx:4] [--fww:8] left-[25%] w-[50%] top-[37.5%] h-[25%] inline-block pointer-events-none" />
</div></button></div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div data-figma-node="5602:71492" data-figma-component="5273:20994" className="pointer-events-auto box-border w-full min-w-0 h-[59px] absolute left-[0px] top-[80px] z-[1] [--fx:0] flex flex-row items-center justify-between pt-[15px] pb-[15px] pl-[20px] pr-[20px] border-b border-[#e2d9d0] bg-background-tinted-faf3e8 overflow-hidden bg-[#faf3e8]">
            <div data-figma-node="I5602:71492;5273:20960" className="box-border w-[1400px] shrink-0 h-auto relative flex flex-row items-center justify-between gap-5">
              <div data-figma-node="I5602:71492;5273:20961" className="box-border w-[804px] shrink-0 h-auto overflow-hidden relative flex flex-row items-center gap-3">
                <FiRrAngleSmallLeft data-figma-node="I5602:71492;5273:20963" data-figma-component="5121:8081" className="relative" />
                <h2 data-figma-node="I5602:71492;5273:20962" className="box-border w-max max-w-[min(176px,100%)] h-auto min-h-[28px] font-onest text-[22px] font-[700] leading-[28px] text-left lg:whitespace-nowrap text-text-body-231f20">September 2026</h2>
                <FiRrAngleSmallRight data-figma-node="I5602:71492;5273:20964" data-figma-component="5121:8084" className="relative" />
                <div data-figma-node="I5602:71492;5273:20965" className="box-border w-max max-w-[min(77px,100%)] h-[29px] rounded-[6px] relative flex flex-row items-center gap-2 pt-[8px] pr-[16px] pb-[8px] pl-[16px] border-[#231f20] border-[1px]">
                  <p data-figma-node="I5602:71492;5273:20966" className="box-border w-max max-w-[min(45px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[700] leading-[17px] uppercase text-left whitespace-nowrap text-brand-primary-a21d35">TODAY</p>
                </div>
                <div data-figma-node="I5602:71492;5273:20967" className="box-border w-max max-w-[min(102px,100%)] h-auto rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px] border-[#d5ba8c] border-[1px] bg-surface-light-fef3c7">
                  <p data-figma-node="I5602:71492;5273:20968" className="box-border w-max max-w-[min(82px,100%)] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] uppercase text-left whitespace-nowrap text-text-dark-000000">105 activities</p>
                </div>
              </div>
              <div data-figma-node="I5602:71492;5528:39931" className="box-border w-max max-w-[min(575px,100%)] h-auto relative flex flex-row items-center gap-5">
                <div data-figma-node="I5602:71492;5503:26056" className="box-border w-max max-w-[min(526px,100%)] h-auto relative flex flex-row items-center gap-2.5">
                  <div data-figma-node="I5602:71492;5273:20970" className="box-border w-max max-w-[min(114px,100%)] h-auto rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
                    <FiRrMegaphone data-figma-node="I5602:71492;5273:20971" data-figma-component="5121:9035" className="relative" />
                    <p data-figma-node="I5602:71492;5273:20972" className="box-border w-max max-w-[min(70px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">Promotions</p>
                  </div>
                  <div data-figma-node="I5602:71492;5273:20973" className="box-border w-max max-w-[min(95px,100%)] h-auto rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-ffffff">
                    <FiRrDocument data-figma-node="I5602:71492;5273:20974" data-figma-component="5121:8558" className="relative" />
                    <p data-figma-node="I5602:71492;5273:20975" className="box-border w-max max-w-[min(51px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-231f20">Content</p>
                  </div>
                  <div data-figma-node="I5602:71492;5273:20976" className="box-border w-max max-w-[min(95px,100%)] h-auto rounded-[6px] [background-image:linear-gradient(#ffffff,#ffffff),linear-gradient(90.0deg,_#da002f_0.0%,_#f1b743_48.6%,_#87b568_100.0%)]! [background-origin:border-box]! [background-clip:padding-box,border-box]! [border-color:transparent]! border-[2px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-background-ffffff">
                    <FiRrTarget data-figma-node="I5602:71492;5273:20977" data-figma-component="5121:9541" className="relative" />
                    <p data-figma-node="I5602:71492;5273:20978" className="box-border w-max max-w-[min(51px,100%)] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-brand-primary-a21d35">Focuses</p>
                  </div>
                  <div data-figma-node="I5602:71492;5273:20979" className="box-border w-[1px] shrink-0 h-[20px] relative block bg-surface-light-e2d9d0"></div>
                  <Button data-figma-node="I5602:71492;5621:25652" type="button" data-figma-action="act_0dd4ae302327" data-figma-overlay-opens="5621:25767" onClick={(e) => { e.preventDefault(); openFigmaDialog("act_0dd4ae302327"); }} className="box-border w-max max-w-[min(93px,100%)] h-auto rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-neutral-mid-d5ba8c cursor-pointer block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 hover:bg-neutral-mid-d5ba8c shadow-none">
                    <FiRrFilter data-figma-node="I5602:71492;5621:25653" data-figma-component="5121:8683" className="relative" />
                    <p data-figma-node="I5602:71492;5621:25654" className="box-border w-max max-w-[min(49px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-dark-000000">Filters</p>
                  </Button>
                  <div data-figma-node="I5602:71492;5273:20980" className="box-border w-max max-w-[min(78px,100%)] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1 pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface-light-e2d9d0">
                    <FiRrCrossSmall data-figma-node="I5602:71492;5503:25916" data-figma-component="5121:8491" className="relative" />
                    <p data-figma-node="I5602:71492;5273:20982" className="box-border w-max max-w-[min(40px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-text-body-231f20">Clear</p>
                  </div>
                </div>
                <div data-figma-node="I5602:71492;5528:36949" className="box-border w-[29px] shrink-0 h-[29px] rounded-[6px] flex flex-row items-center justify-center"><button type="button" aria-label="Edit" className="inline-flex items-center justify-center"><div data-figma-node="I5602:71492;5528:39864" data-figma-component="5111:10773" className="box-border w-[20px] h-[20px] overflow-hidden relative">
  <svg data-figma-node="I5602:71492;5528:39864;5111:10774" viewBox="0 0 14.55 15" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute [--fx:3] [--fww:15] left-[15%] w-[75%] top-[10%] h-[75%] pointer-events-none overflow-visible"><path d="M2.66667 15.75C3.08088 15.75 3.41667 15.4142 3.41667 15C3.41667 14.5858 3.08088 14.25 2.66667 14.25L2.66667 15L2.66667 15.75ZM0.910016 14.8183L1.25051 14.1501L0.910016 14.8183ZM0.181656 14.09L0.849911 13.7495L0.181656 14.09ZM12.4233 0.181656L12.0828 0.849911L12.4233 0.181656ZM13.1517 0.910016L12.4834 1.25051L13.1517 0.910016ZM0.910016 0.181656L1.25051 0.849911L0.910016 0.181656ZM0.181656 0.910016L0.849911 1.25051L0.181656 0.910016ZM12.5833 3.33333C12.5833 3.74755 12.9191 4.08333 13.3333 4.08333C13.7475 4.08333 14.0833 3.74755 14.0833 3.33333L13.3333 3.33333L12.5833 3.33333ZM3.33333 2.58333C2.91912 2.58333 2.58333 2.91912 2.58333 3.33333C2.58333 3.74755 2.91912 4.08333 3.33333 4.08333L3.33333 3.33333L3.33333 2.58333ZM8.33333 4.08333C8.74755 4.08333 9.08333 3.74755 9.08333 3.33333C9.08333 2.91912 8.74755 2.58333 8.33333 2.58333L8.33333 3.33333L8.33333 4.08333ZM5.9962 14.9121L5.26611 14.7404C5.20777 14.9886 5.27947 15.2494 5.45647 15.4328C5.63346 15.6163 5.89153 15.6973 6.1416 15.6479L5.9962 14.9121ZM6.92159 12.0593L7.53241 12.4945L7.53241 12.4945L6.92159 12.0593ZM6.26124 13.7847L6.99133 13.9563L6.99133 13.9563L6.26124 13.7847ZM6.5626 12.7039L7.25419 12.9941L7.25419 12.9941L6.5626 12.7039ZM8.94706 14.043L8.51845 13.4275L8.94706 14.043ZM7.09185 14.6956L7.23725 15.4313L7.23725 15.4313L7.09185 14.6956ZM8.25433 14.4127L8.52707 15.1113L8.25433 14.4127ZM3.33333 9.25C2.91912 9.25 2.58333 9.58579 2.58333 10C2.58333 10.4142 2.91912 10.75 3.33333 10.75L3.33333 10L3.33333 9.25ZM4.16667 10.75C4.58088 10.75 4.91667 10.4142 4.91667 10C4.91667 9.58579 4.58088 9.25 4.16667 9.25L4.16667 10L4.16667 10.75ZM3.33333 5.91667C2.91912 5.91667 2.58333 6.25245 2.58333 6.66667C2.58333 7.08088 2.91912 7.41667 3.33333 7.41667L3.33333 6.66667L3.33333 5.91667ZM6.66667 7.41667C7.08088 7.41667 7.41667 7.08088 7.41667 6.66667C7.41667 6.25245 7.08088 5.91667 6.66667 5.91667L6.66667 6.66667L6.66667 7.41667ZM2.66667 0L2.66667 0.75L10.6667 0.75L10.6667 0L10.6667 -0.75L2.66667 -0.75L2.66667 0ZM0 12.3333L0.75 12.3333L0.75 2.66667L0 2.66667L-0.75 2.66667L-0.75 12.3333L0 12.3333ZM2.66667 15L2.66667 14.25C2.18758 14.25 1.87337 14.2494 1.63308 14.2298C1.40154 14.2109 1.30542 14.1781 1.25051 14.1501L0.910016 14.8183L0.569523 15.4866C0.871134 15.6403 1.18663 15.6983 1.51093 15.7248C1.82647 15.7506 2.21233 15.75 2.66667 15.75L2.66667 15ZM0 12.3333L-0.75 12.3333C-0.75 12.7877 -0.750583 13.1735 -0.724802 13.4891C-0.698306 13.8134 -0.640277 14.1289 -0.486599 14.4305L0.181656 14.09L0.849911 13.7495C0.821933 13.6946 0.789134 13.5985 0.770216 13.3669C0.750583 13.1266 0.75 12.8124 0.75 12.3333L0 12.3333ZM0.910016 14.8183L1.25051 14.1501C1.07803 14.0622 0.937794 13.922 0.849911 13.7495L0.181656 14.09L-0.486599 14.4305C-0.254905 14.8852 0.114799 15.2549 0.569523 15.4866L0.910016 14.8183ZM10.6667 0L10.6667 0.75C11.1458 0.75 11.46 0.750583 11.7003 0.770216C11.9318 0.789134 12.0279 0.821933 12.0828 0.849911L12.4233 0.181656L12.7638 -0.486599C12.4622 -0.640277 12.1467 -0.698306 11.8224 -0.724802C11.5069 -0.750583 11.121 -0.75 10.6667 -0.75L10.6667 0ZM13.3333 2.66667L14.0833 2.66667C14.0833 2.21233 14.0839 1.82647 14.0581 1.51093C14.0316 1.18663 13.9736 0.871134 13.8199 0.569523L13.1517 0.910016L12.4834 1.25051C12.5114 1.30542 12.5442 1.40154 12.5631 1.63308C12.5827 1.87337 12.5833 2.18758 12.5833 2.66667L13.3333 2.66667ZM12.4233 0.181656L12.0828 0.849911C12.2553 0.937795 12.3955 1.07803 12.4834 1.25051L13.1517 0.910016L13.8199 0.569523C13.5882 0.114798 13.2185 -0.254905 12.7638 -0.486599L12.4233 0.181656ZM2.66667 0L2.66667 -0.75C2.21233 -0.75 1.82647 -0.750583 1.51093 -0.724802C1.18663 -0.698306 0.871134 -0.640277 0.569523 -0.486599L0.910016 0.181656L1.25051 0.849911C1.30542 0.821933 1.40154 0.789134 1.63308 0.770216C1.87337 0.750583 2.18758 0.75 2.66667 0.75L2.66667 0ZM0 2.66667L0.75 2.66667C0.75 2.18758 0.750583 1.87337 0.770216 1.63308C0.789134 1.40154 0.821933 1.30542 0.849911 1.25051L0.181656 0.910016L-0.486599 0.569523C-0.640277 0.871134 -0.698306 1.18663 -0.724802 1.51093C-0.750583 1.82647 -0.75 2.21233 -0.75 2.66667L0 2.66667ZM0.910016 0.181656L0.569523 -0.486599C0.114798 -0.254905 -0.254905 0.114798 -0.486599 0.569523L0.181656 0.910016L0.849911 1.25051C0.937795 1.07803 1.07803 0.937795 1.25051 0.849911L0.910016 0.181656ZM13.3333 2.66667L12.5833 2.66667L12.5833 3.33333L13.3333 3.33333L14.0833 3.33333L14.0833 2.66667L13.3333 2.66667ZM3.33333 3.33333L3.33333 4.08333L8.33333 4.08333L8.33333 3.33333L8.33333 2.58333L3.33333 2.58333L3.33333 3.33333ZM14.1195 8.94429L13.5891 8.41397L9.29877 12.7043L9.8291 13.2347L10.3594 13.765L14.6498 9.47463L14.1195 8.94429ZM7.68179 11.234L8.21212 11.7643L12.5758 7.40065L12.0455 6.87032L11.5152 6.33999L7.15146 10.7037L7.68179 11.234ZM7.09185 14.6956L6.94645 13.9598L5.8508 14.1763L5.9962 14.9121L6.1416 15.6479L7.23725 15.4313L7.09185 14.6956ZM5.9962 14.9121L6.7263 15.0837L6.99133 13.9563L6.26124 13.7847L5.53114 13.6131L5.26611 14.7404L5.9962 14.9121ZM7.68179 11.234L7.15146 10.7037C6.76929 11.0859 6.51663 11.3352 6.31077 11.6241L6.92159 12.0593L7.53241 12.4945C7.64905 12.3308 7.79569 12.1808 8.21212 11.7643L7.68179 11.234ZM6.26124 13.7847L6.99133 13.9563C7.12611 13.3831 7.17643 13.1794 7.25419 12.9941L6.5626 12.7039L5.871 12.4137C5.73375 12.7409 5.65483 13.0869 5.53114 13.6131L6.26124 13.7847ZM6.92159 12.0593L6.31077 11.6241C6.13541 11.8702 5.98792 12.1351 5.871 12.4137L6.5626 12.7039L7.25419 12.9941C7.32816 12.8177 7.42147 12.6502 7.53241 12.4945L6.92159 12.0593ZM9.8291 13.2347L9.29877 12.7043C8.85431 13.1488 8.69408 13.3052 8.51845 13.4275L8.94706 14.043L9.37568 14.6584C9.68572 14.4425 9.95163 14.1728 10.3594 13.765L9.8291 13.2347ZM7.09185 14.6956L7.23725 15.4313C7.80303 15.3195 8.17513 15.2487 8.52707 15.1113L8.25433 14.4127L7.98158 13.714C7.78221 13.7919 7.56309 13.8379 6.94645 13.9598L7.09185 14.6956ZM8.94706 14.043L8.51845 13.4275C8.35141 13.5438 8.1712 13.64 7.98158 13.714L8.25433 14.4127L8.52707 15.1113C8.8268 14.9943 9.11164 14.8423 9.37568 14.6584L8.94706 14.043ZM14.1195 6.87032L13.5891 7.40065C13.869 7.68047 13.869 8.13415 13.5891 8.41397L14.1195 8.94429L14.6498 9.47463C15.5154 8.60902 15.5154 7.2056 14.6498 6.33999L14.1195 6.87032ZM14.1195 6.87032L14.6498 6.33999C13.7842 5.47438 12.3808 5.47439 11.5152 6.33999L12.0455 6.87032L12.5758 7.40065C12.8556 7.12083 13.3093 7.12083 13.5891 7.40065L14.1195 6.87032ZM3.33333 10L3.33333 10.75L4.16667 10.75L4.16667 10L4.16667 9.25L3.33333 9.25L3.33333 10ZM3.33333 6.66667L3.33333 7.41667L6.66667 7.41667L6.66667 6.66667L6.66667 5.91667L3.33333 5.91667L3.33333 6.66667Z" fill="#2f80ed" /></svg>
</div></button></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
      {dialog_act_1b4093185628.isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_1b4093185628.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_1b4093185628.close(); }}
          data-figma-dialog="act_1b4093185628"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarProfileMenuModal />
          </div>
        </div>
      )}

      {dialog_act_0dd4ae302327.isOpen && (
        <div
          data-figma-node="5621:27979"
          className="fixed left-[0px] top-[0px] z-[9999] flex h-[884px] w-[1440px] max-w-none items-stretch justify-end bg-[rgba(26,32,44,0.584)] pl-[1020px]"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_0dd4ae302327.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_0dd4ae302327.close(); }}
          data-figma-dialog="act_0dd4ae302327"
        >
          <div
            className="relative h-full max-h-full overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <WeekCalendarAdvanceFilterModal />
          </div>
        </div>
      )}

      {dialog_act_c77f170c369e.isOpen && (
        <div
          data-figma-node="5279:24938"
          className="fixed left-[0px] top-[0px] z-[9999] flex h-[940px] w-[1440px] max-w-none items-stretch justify-end bg-[rgba(26,32,44,0.584)] pl-[788px]"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_c77f170c369e.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_c77f170c369e.close(); }}
          data-figma-dialog="act_c77f170c369e"
        >
          <div
            className="relative h-full max-h-full overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <AnnualCalendarDefaultModal />
          </div>
        </div>
      )}

      {dialog_act_9e536ea73c9b.isOpen && (
        <div
          data-figma-node="5549:56106"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm pt-[194px] pr-[460px] pb-[194px] pl-[460px]"
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          ref={(el) => { el?.focus(); }}
          onClick={dialog_act_9e536ea73c9b.close}
          onKeyDown={(e) => { if (e.key === "Escape") dialog_act_9e536ea73c9b.close(); }}
          data-figma-dialog="act_9e536ea73c9b"
        >
          <div
            className="relative max-h-[90vh] overflow-auto rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MonthlyCalendarNotesModal />
          </div>
        </div>
      )}
    </div>
  );
}
