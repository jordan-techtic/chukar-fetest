/**
 * Luna generated page
 * Figma frame: 5584:26945
 * Page: Week-calendar-Historical view
 * Route: /week-calendar-historical-view
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { useCallback } from "react";

import { toast } from "@/components/ui/toast";

import "./figma-responsive.css";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { useFigmaFieldProps, useFigmaActionProps } from "./useFigmaScreenData";
import { ChevronDown_a4db42af } from "./ChevronDown_a4db42af";
import { Default_7363b927 } from "./Default_7363b927";
import { Disabled_781e0828 } from "./Disabled_781e0828";
import { FiRrAngleSmallDown_4ecbc612 } from "./FiRrAngleSmallDown_4ecbc612";
import { FiRrCopyAlt_5c291fa0 } from "./FiRrCopyAlt_5c291fa0";
import { FiRrDocument_718ff216 } from "./FiRrDocument_718ff216";
import { FiRrELearning_336860e7 } from "./FiRrELearning_336860e7";
import { FiRrEnvelope_edd5c8e7 } from "./FiRrEnvelope_edd5c8e7";
import { FiRrFilter_17dad1cf } from "./FiRrFilter_17dad1cf";
import { FiRrMegaphone_89c2c562 } from "./FiRrMegaphone_89c2c562";
import { RefreshCcwClock_22f0146d } from "./RefreshCcwClock_22f0146d";
import { FiRrDownload_e2f06a4e } from "./FiRrDownload_e2f06a4e";
import { FiRrTarget_6d6fca9a } from "./FiRrTarget_6d6fca9a";
import { FiRsPlusSmall_7eb9d5ec } from "./FiRsPlusSmall_7eb9d5ec";
import { MemoPencil_3c0293af } from "./MemoPencil_3c0293af";
import { ActiveTrueSizeDefault_ddd4f79d } from "./ActiveTrueSizeDefault_ddd4f79d";
import { Today_ddd8af3c } from "./Today_ddd8af3c";
import { apiRequest, LunaApiError } from "./lunaApiClient";

export function WeekCalendarHistoricalPage() {
  const screenData = useFigmaScreenData();
  const exportCalendarPdf = useCallback(async () => {
    try {
      const body = await apiRequest("POST", "/api/v1/marketing-team-member/export-calendar", null, {
        year: String(screenData.calendarPeriod.year),
        month: String(screenData.calendarPeriod.month),
      });
      if (!(body instanceof Blob)) {
        toast.error("Export did not return a PDF.");
        return;
      }
      const url = URL.createObjectURL(body);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `calendar-${screenData.calendarPeriod.year}-${screenData.calendarPeriod.month}.pdf`;
      anchor.click();
      URL.revokeObjectURL(url);
      toast.success("Calendar exported.");
    } catch (error) {
      const message = error instanceof LunaApiError ? error.message : "Export failed.";
      toast.error(message);
    }
  }, [screenData.calendarPeriod.month, screenData.calendarPeriod.year]);
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5584:26945"
      data-figma-list-field="activities"
      data-figma-list-fields="holidays,activities,activity_types"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={937} nodeId="frame">
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <div data-figma-node="5584:26946" data-figma-component="5273:20995" className="pointer-events-auto box-border w-full min-w-0 h-[80px] absolute left-[0px] top-[0px] z-[0] [--fx:0] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] flex flex-row items-center justify-between bg-background-2">
            <div data-figma-node="I5584:26946;5217:13714" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-[30px]">
              <div data-figma-node="I5584:26946;5217:13715" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-3">
                <img data-figma-node="I5584:26946;5217:13716" src="/assets/figma/I5584-26946-5217-13716.png" alt="image 2" width={54} height={50} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[54px] h-[50px] rounded-[10px] max-w-none object-cover object-top" />
                <div data-figma-node="I5584:26946;5217:13717" className="box-border w-max max-w-[216px] h-[43px] relative flex flex-col items-start gap-0.5">
                  <p data-figma-node="I5584:26946;5217:13718" className="box-border w-max max-w-[216px] h-auto min-h-[27px] font-inter text-[22px] font-[800] leading-[27px] text-left whitespace-nowrap text-text-body-1">Marketing Calendar </p>
                  <p data-figma-node="I5584:26946;5217:13719" className="box-border w-max max-w-[171px] h-auto min-h-[14px] font-onest text-[11px] font-[600] leading-[14px] text-left whitespace-nowrap text-text-muted-1">Plan · Create · Track · Grow</p>
                </div>
              </div>
            </div>
            <div data-figma-node="I5584:26946;5217:13733" className="box-border w-max max-w-[434px] h-[40px] relative flex flex-row items-center gap-4">
              <button data-figma-node="I5584:26946;5217:13742" type="button" data-figma-action="act_d15a609f1860" {...useFigmaActionProps("act_d15a609f1860")} className="box-border w-max max-w-[208px] h-[40px] rounded-[6px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-background-tinted-6 hover:opacity-90 cursor-pointer gap-2"><div data-figma-node="I5584:26946;5217:13743" data-figma-component="5111:8203" className="box-border w-[16px] h-[16px] overflow-hidden relative rounded-[4px]"><RefreshCcwClock_22f0146d className="relative overflow-hidden" /></div><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-brand-primary-1">Historical View</span></button>
              <ActiveTrueSizeDefault_ddd4f79d data-figma-node="I5584:26946;5217:13745" data-figma-component="5111:12391" className="relative shrink-0" />
              <button data-figma-node="I5584:26946;5217:13746" type="button" data-figma-action="act_export_calendar_pdf" onClick={(event) => { event.preventDefault(); void exportCalendarPdf(); }} className="box-border w-max max-w-[138px] h-[40px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-surface-light-1 hover:opacity-90 cursor-pointer gap-2"><div data-figma-node="I5584:26946;5217:13747" data-figma-component="5121:8564" className="box-border w-[16px] h-[16px] overflow-hidden relative rounded-[4px] flex flex-col items-center"><FiRrDownload_e2f06a4e className="relative overflow-hidden" /></div><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-text-body-1">Export PDF</span></button>
              <button data-figma-node="I5584:26946;5217:13749" type="button" data-figma-action="act_548b3dfa3ae5" {...useFigmaActionProps("act_548b3dfa3ae5")} className="box-border w-max max-w-[56px] h-[32px] relative flex flex-row items-center gap-2 cursor-pointer block">
                <div data-figma-node="I5584:26946;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-[32px] rounded-[32px] relative flex flex-row items-start gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
                  <img data-figma-node="I5584:26946;5217:13750;1002:172586" src="/assets/figma/I5584-26946-5217-13750-1002-172586.png" alt="Image" width={32} height={32} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[32px] h-[32px] rounded-[32px] max-w-none object-cover object-top" />
                </div>
                <ChevronDown_a4db42af data-figma-node="I5584:26946;5217:13752" data-figma-component="5111:6287" className="relative overflow-hidden rounded-[4px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div data-figma-node="5584:26947" data-figma-component="5273:21161" data-figma-list-field="activities" className="pointer-events-auto box-border w-full min-w-0 h-[59px] absolute left-[0px] top-[80px] z-[1] [--fx:0] flex flex-row items-center justify-between bg-[#faf3e8]">
            <div data-figma-node="I5584:26947;5273:21162" className="box-border w-[1400px] h-[29px] relative flex flex-row items-center justify-between gap-3">
              <div data-figma-node="I5584:26947;5273:21163" className="box-border w-[804px] h-[28px] overflow-hidden relative flex flex-row items-center gap-3">
                <p data-figma-node="I5584:26947;5273:21164" className="box-border w-max max-w-[116px] h-auto min-h-[28px] font-onest text-[22px] font-[700] leading-[28px] text-left whitespace-nowrap text-text-body-1">2025-2026</p>
                <FiRrAngleSmallDown_4ecbc612 data-figma-node="I5584:26947;5273:21195" data-figma-component="5121:8078" className="relative overflow-hidden rounded-[4px]" />
              </div>
              <div data-figma-node="I5584:26947;5528:40185" className="box-border w-max max-w-[575px] h-[29px] relative flex flex-row items-center gap-5">
                <div data-figma-node="I5584:26947;5503:25941" className="box-border w-max max-w-[526px] h-[29px] relative flex flex-row items-center gap-2.5">
                  <div data-figma-node="I5584:26947;5273:21172" className="box-border w-max max-w-[114px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-2">
                    <FiRrMegaphone_89c2c562 data-figma-node="I5584:26947;5273:21173" data-figma-component="5121:9035" className="relative overflow-hidden rounded-[4px]" />
                    <p data-figma-node="I5584:26947;5273:21174" className="box-border w-max max-w-[70px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-1">Promotions</p>
                  </div>
                  <div data-figma-node="I5584:26947;5273:21175" className="box-border w-max max-w-[95px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-background-2">
                    <FiRrDocument_718ff216 data-figma-node="I5584:26947;5273:21176" data-figma-component="5121:8558" className="relative overflow-hidden rounded-[4px]" />
                    <p data-figma-node="I5584:26947;5273:21177" className="box-border w-max max-w-[51px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-text-body-1">Content</p>
                  </div>
                  <div data-figma-node="I5584:26947;5273:21178" className="box-border w-max max-w-[95px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-background-2">
                    <FiRrTarget_6d6fca9a data-figma-node="I5584:26947;5273:21179" data-figma-component="5121:9541" className="relative overflow-hidden rounded-[4px]" />
                    <p data-figma-node="I5584:26947;5273:21180" className="box-border w-max max-w-[51px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-brand-primary-1">Focuses</p>
                  </div>
                  <div data-figma-node="I5584:26947;5273:21181" className="box-border w-[1px] h-[20px] relative block bg-surface-light"></div>
                  <button data-figma-node="I5584:26947;5621:25566" type="button" data-figma-action="act_f5f0a47afec0" {...useFigmaActionProps("act_f5f0a47afec0")} className="box-border w-max max-w-[93px] h-[27px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-neutral-mid-5 cursor-pointer block">
                    <FiRrFilter_17dad1cf data-figma-node="I5584:26947;5621:25623" data-figma-component="5121:8683" className="relative overflow-hidden rounded-[4px]" />
                    <p data-figma-node="I5584:26947;5621:25568" className="box-border w-max max-w-[49px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-dark">Filters</p>
                  </button>
                  <div data-figma-node="I5584:26947;5273:21182" className="box-border w-max max-w-[78px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1 pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-surface-light">
                    <div data-figma-node="I5584:26947;5503:25867" data-figma-component="5121:8491" className="box-border w-[14px] h-[14px] overflow-hidden relative">
                      <svg data-figma-node="I5584:26947;5503:25867;403:359" viewBox="0 0 7.34 7.34" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[7px] h-[7px] absolute left-[3px] top-[3px] [--fx:3] [--fww:7] pointer-events-none overflow-visible"><path d="M7.17079 0.170792C7.0614 0.0614341 6.91305 0 6.75838 0C6.6037 0 6.45535 0.0614341 6.34596 0.170792L3.67079 2.84596L0.995626 0.170792C0.886234 0.0614341 0.737888 0 0.583209 0C0.42853 0 0.280183 0.0614341 0.170792 0.170792C0.0614341 0.280183 0 0.42853 0 0.583209C0 0.737888 0.0614341 0.886234 0.170792 0.995626L2.84596 3.67079L0.170792 6.34596C0.0614341 6.45535 5.18104e-16 6.6037 0 6.75838C5.18104e-16 6.91305 0.0614341 7.0614 0.170792 7.17079C0.280183 7.28015 0.42853 7.34158 0.583209 7.34158C0.737888 7.34158 0.886234 7.28015 0.995626 7.17079L3.67079 4.49563L6.34596 7.17079C6.45535 7.28015 6.6037 7.34158 6.75838 7.34158C6.91305 7.34158 7.0614 7.28015 7.17079 7.17079C7.28015 7.0614 7.34158 6.91305 7.34158 6.75838C7.34158 6.6037 7.28015 6.45535 7.17079 6.34596L4.49563 3.67079L7.17079 0.995626C7.28015 0.886234 7.34158 0.737888 7.34158 0.583209C7.34158 0.42853 7.28015 0.280183 7.17079 0.170792L7.17079 0.170792Z" fill="#000000" /></svg>
                    </div>
                    <p data-figma-node="I5584:26947;5273:21184" className="box-border w-max max-w-[40px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-text-body-1">Clear</p>
                  </div>
                </div>
                <button data-figma-node="I5584:26947;5528:39891" type="button" data-figma-action="act_8bade57cf5d5" {...useFigmaActionProps("act_8bade57cf5d5")} className="box-border w-[29px] h-[29px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] border-[#e2d9d0] border-[1px] bg-background-2 cursor-pointer block">
                  <MemoPencil_3c0293af data-figma-node="I5584:26947;5528:39892" data-figma-component="5111:10773" className="relative overflow-hidden rounded-[4px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[2]">
          <div data-figma-node="5645:47545" data-figma-list-field="activities" className="pointer-events-auto box-border w-full min-w-0 h-[798px] absolute left-[0px] top-[139px] z-[2] [--fx:0] flex flex-col items-start">
            <div data-figma-node="5584:26949" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between pt-[10px] pr-[24px] pb-[10px] pl-[24px] bg-brand-primary-1">
              <p data-figma-node="5584:26950" className="box-border w-max max-w-[914px] h-auto min-h-[18px] font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-background-2">Month-by-month comparison · Review 2026 beside 2025;  Pick a date from last year and then grab a date from this year to paste event.</p>
              <p data-figma-node="5584:26951" className="box-border w-max max-w-[38px] h-auto min-h-[18px] font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-background-2">Close</p>
            </div>
            <div data-figma-node="5584:35544" className="box-border w-full min-w-0 h-[740px] relative flex flex-row items-start gap-5 pt-[20px] pr-[20px] pb-[40px] pl-[20px] max-md:flex-col max-md:h-auto max-md:overflow-x-auto">
              <div data-figma-node="5589:52807" className="box-border absolute left-[0px] top-[20px] w-[690px] max-md:relative max-md:left-auto max-md:top-auto max-md:w-full h-[697px] max-md:h-auto flex flex-col items-start">
                <div data-figma-node="5589:52794" className="box-border w-full min-w-0 h-full min-h-0 rounded-[10px_10px_0px_0px] relative flex flex-row items-center justify-between pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px] bg-background-2">
                  <div data-figma-node="5589:52795" className="box-border w-max max-w-[263px] h-[23px] relative flex flex-row items-center gap-2.5">
                    <div data-figma-node="5589:52796" className="box-border w-max max-w-[144px] h-[23px] relative flex flex-row items-center gap-3">
                      <p data-figma-node="5589:52798" className="box-border w-max max-w-[144px] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-text-body-1">September 2025</p>
                    </div>
                    <div data-figma-node="5589:52800" className="box-border w-max max-w-[109px] h-[21px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px]">
                      <p data-figma-node="5589:52801" className="box-border w-max max-w-[89px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-neutral-3">Previous Year</p>
                    </div>
                  </div>
                  <div data-figma-node="5589:52802" className="box-border w-max max-w-[130px] h-[30px] rounded-[100px] relative flex flex-row items-center gap-1.5 pt-[4px] pr-[16px] pb-[4px] pl-[16px] border-[#d5ba8c] border-[1px] bg-surface-light-2">
                    <p data-figma-node="5589:52803" className="box-border w-max max-w-[78px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-text-dark">84 activities</p>
                    <FiRrCopyAlt_5c291fa0 data-figma-node="5589:52804" data-figma-component="5121:8464" className="relative overflow-hidden rounded-[4px]" />
                  </div>
                </div>
                <div data-figma-node="5584:41409" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start">
                  <div data-figma-node="5584:41410" className="box-border w-[16px] h-[635px] overflow-hidden rounded-[0px_0px_0px_10px] relative flex flex-col items-start">
                    <div data-figma-node="5589:52227" className="box-border w-[32px] h-[35px] relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px] border-[#e5e7eb] border-[1px] bg-background-tinted-5"></div>
                    <div data-figma-node="5589:52230" className="box-border w-max max-w-[16px] h-[600px] relative flex flex-row items-start">
                      <div data-figma-node="5584:41419" className="box-border w-max max-w-[16px] h-[600px] relative flex flex-col items-start">
                        <div data-figma-node="5584:41420" className="box-border w-[16px] h-[180px] flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-brand-primary-3">
                          <div data-figma-node="5584:41421" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                            <svg data-figma-node="5584:41422" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="5584:41423" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="5584:41424" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          </div>
                          <div data-figma-node="5584:41425" className="box-border w-max max-w-[14px] h-[132px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="5584:41426" className="box-border w-max max-w-[14px] h-auto min-h-[50px] font-onest text-[11px] font-[500] leading-[14px] text-left text-background-2">Sep 1 - 13</p>
                            <p data-figma-node="5584:41427" className="box-border w-max max-w-[14px] h-auto min-h-[75px] font-onest text-[11px] font-[700] leading-[14px] text-left text-background-2">Cherry ha...</p>
                          </div>
                        </div>
                        <div data-figma-node="5584:41428" className="box-border w-[16px] h-[420px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-neutral-mid-7">
                          <div data-figma-node="5584:41429" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                            <svg data-figma-node="5584:41430" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="5584:41431" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="5584:41432" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          </div>
                          <div data-figma-node="5584:41433" className="box-border w-max max-w-[14px] h-[324px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="5584:41434" className="box-border w-max max-w-[14px] h-auto min-h-[61px] font-onest text-[11px] font-[500] leading-[14px] text-left text-background-2">Sep 14 - 30</p>
                            <p data-figma-node="5584:41435" className="box-border w-max max-w-[14px] h-auto min-h-[68px] font-onest text-[11px] font-[700] leading-[14px] text-left text-background-2">World Cup</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-figma-node="5584:41436" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden rounded-[0px_0px_10px_0px] relative flex flex-col items-start border-[#e5e7eb] border-[1px] bg-background-2">
                    <form data-figma-node="5584:41454" data-figma-form="true" onSubmit={e => e.preventDefault()} className="box-border w-full min-w-0 h-full min-h-0 relative border-[#e5e7eb] border-[1px] bg-background-tinted-5">
                      <input data-figma-node="5584:41457" name="mon" data-figma-field="mon" data-figma-field-origin="design_text" {...useFigmaFieldProps("mon")} type="text" placeholder="Mon" aria-label="Mon" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5584:41459" name="tue" data-figma-field="tue" data-figma-field-origin="design_text" {...useFigmaFieldProps("tue")} type="text" placeholder="Tue" aria-label="Tue" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5584:41461" name="wed" data-figma-field="wed" data-figma-field-origin="design_text" {...useFigmaFieldProps("wed")} type="text" placeholder="Wed" aria-label="Wed" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5584:41463" name="thu" data-figma-field="thu" data-figma-field-origin="design_text" {...useFigmaFieldProps("thu")} type="text" placeholder="Thu" aria-label="Thu" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5584:41465" name="fri" data-figma-field="fri" data-figma-field-origin="design_text" {...useFigmaFieldProps("fri")} type="text" placeholder="Fri" aria-label="Fri" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5584:41467" name="sat" data-figma-field="sat" data-figma-field-origin="design_text" {...useFigmaFieldProps("sat")} type="text" placeholder="Sat" aria-label="Sat" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <div data-figma-node="5584:41469" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px]">
                        <p data-figma-node="5584:41470" className="box-border w-max max-w-[26px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">Sun</p>
                      </div>
                    </form>
                    <div data-figma-node="5584:41471" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start">
                      <div data-figma-node="5584:41503" className="box-border w-full min-w-0 h-full min-h-0 relative border-[#e5e7eb] border-[1px] bg-background-2">
                        <div data-figma-node="5589:50448" data-figma-component="5556:77475" className="box-border absolute left-[0px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5589:50448;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50448;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50448;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">1</p>
                            </div>
                            <img data-figma-node="I5589:50448;5725:104713" src="/assets/figma/I5589-50448-5725-104713.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5589:50506" data-figma-component="5556:77475" className="box-border absolute left-[96px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5589:50506;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50506;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50506;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">2</p>
                            </div>
                            <img data-figma-node="I5589:50506;5725:104713" src="/assets/figma/I5589-50506-5725-104713.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5589:50564" data-figma-component="5556:77475" className="box-border absolute left-[193px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5589:50564;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50564;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50564;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                            </div>
                            <img data-figma-node="I5589:50564;5725:104713" src="/assets/figma/I5589-50564-5725-104713.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5589:50622" data-figma-component="5556:77447" className="box-border absolute left-[289px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:50622;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50622;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50622;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">4</p>
                            </div>
                            <div data-figma-node="I5589:50622;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5589:50622;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5589:50622;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5589:50622;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5589:50622;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5589:50622;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5589:50622;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5589:50622;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:50622;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50622;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50622;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50622;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50622;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50622;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50622;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50622;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50622;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50622;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50622;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50622;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50622;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50622;5556:77452;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50622;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50622;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50622;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50622;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50622;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50622;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50622;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50622;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50622;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50622;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50622;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50622;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50622;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50622;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50622;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50622;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50622;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50622;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50622;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50622;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50622;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50622;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50622;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50622;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50622;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50622;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50622;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50622;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:50680" data-figma-component="5556:77447" className="box-border absolute left-[386px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:50680;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50680;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50680;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">5</p>
                            </div>
                            <div data-figma-node="I5589:50680;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5589:50680;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5589:50680;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5589:50680;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5589:50680;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5589:50680;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5589:50680;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5589:50680;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:50680;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50680;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50680;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50680;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50680;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50680;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50680;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50680;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50680;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50680;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50680;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50680;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50680;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50680;5556:77452;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50680;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50680;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50680;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50680;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50680;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50680;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50680;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50680;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50680;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50680;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50680;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50680;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50680;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50680;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50680;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50680;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50680;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50680;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50680;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50680;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50680;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50680;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50680;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50680;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50680;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50680;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50680;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50680;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:50738" data-figma-component="5556:77447" className="box-border absolute left-[482px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:50738;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50738;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50738;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">6</p>
                            </div>
                            <div data-figma-node="I5589:50738;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5589:50738;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5589:50738;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5589:50738;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5589:50738;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5589:50738;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5589:50738;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5589:50738;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:50738;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50738;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50738;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50738;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50738;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50738;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50738;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50738;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50738;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50738;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50738;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50738;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50738;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50738;5556:77452;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50738;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50738;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50738;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50738;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50738;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50738;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50738;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50738;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50738;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50738;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50738;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50738;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50738;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50738;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50738;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50738;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50738;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50738;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50738;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50738;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50738;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50738;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50738;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50738;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50738;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50738;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50738;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50738;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:50796" data-figma-component="5556:77447" className="box-border absolute left-[578px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:50796;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50796;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50796;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">7</p>
                              <Default_7363b927 data-figma-node="I5589:50796;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5589:50796;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5589:50796;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5589:50796;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5589:50796;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5589:50796;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5589:50796;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5589:50796;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5589:50796;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:50796;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50796;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50796;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50796;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50796;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50796;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50796;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50796;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50796;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50796;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50796;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50796;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50796;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50796;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50796;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50796;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50796;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50796;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50796;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50796;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50796;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50796;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50796;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50796;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50796;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50796;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50796;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50796;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50796;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50796;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50796;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50796;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50796;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50796;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50796;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50796;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50796;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50796;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50796;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50796;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50796;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50796;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5584:41516" className="box-border w-[408px] h-[73px] absolute left-[121px] top-[40px] [--fx:121] [--fww:408] rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] flex flex-row items-start gap-1"></div>
                      </div>
                      <div data-figma-node="5584:41532" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-background-2">
                        <div data-figma-node="5589:50854" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:50854;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50854;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50854;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">8</p>
                            </div>
                            <img data-figma-node="I5589:50854;5725:99922" src="/assets/figma/I5589-50854-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:50854;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:50854;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50854;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50854;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50854;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50854;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50854;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50854;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50854;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50854;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50854;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50854;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50854;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50854;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50854;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50854;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50854;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50854;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50854;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50854;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50854;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50854;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50854;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50854;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50854;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50854;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50854;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50854;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50854;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50854;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50854;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50854;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50854;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50854;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50854;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50854;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50854;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50854;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50854;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50854;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50854;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50854;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50854;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:50912" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:50912;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50912;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50912;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">9</p>
                            </div>
                            <img data-figma-node="I5589:50912;5725:99922" src="/assets/figma/I5589-50912-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:50912;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:50912;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50912;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50912;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50912;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50912;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50912;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50912;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50912;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50912;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50912;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50912;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50912;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50912;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50912;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50912;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50912;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50912;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50912;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50912;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50912;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50912;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50912;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50912;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50912;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50912;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50912;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50912;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50912;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50912;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50912;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50912;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50912;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50912;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50912;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50912;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50912;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50912;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50912;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50912;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50912;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50912;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50912;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:50970" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:50970;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:50970;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:50970;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">10</p>
                            </div>
                            <img data-figma-node="I5589:50970;5725:99922" src="/assets/figma/I5589-50970-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:50970;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:50970;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50970;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50970;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50970;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50970;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50970;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50970;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50970;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50970;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50970;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50970;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50970;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50970;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50970;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50970;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50970;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50970;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50970;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50970;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50970;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50970;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50970;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50970;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50970;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50970;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50970;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50970;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50970;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:50970;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:50970;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:50970;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:50970;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:50970;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:50970;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:50970;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:50970;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:50970;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50970;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:50970;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:50970;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:50970;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:50970;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51028" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51028;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51028;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51028;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">11</p>
                              <Default_7363b927 data-figma-node="I5589:51028;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5589:51028;5725:99922" src="/assets/figma/I5589-51028-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51028;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51028;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51028;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51028;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51028;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51028;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51028;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51028;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51028;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51028;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51028;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51028;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51028;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51028;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51028;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51028;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51028;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51028;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51028;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51028;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51028;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51028;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51028;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51028;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51028;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51028;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51028;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51028;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51028;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51028;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51028;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51028;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51028;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51028;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51028;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51028;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51028;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51028;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51028;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51028;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51028;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51028;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51028;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51086" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51086;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51086;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51086;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">12</p>
                            </div>
                            <img data-figma-node="I5589:51086;5725:99922" src="/assets/figma/I5589-51086-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51086;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51086;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51086;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51086;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51086;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51086;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51086;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51086;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51086;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51086;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51086;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51086;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51086;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51086;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51086;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51086;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51086;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51086;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51086;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51086;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51086;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51086;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51086;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51086;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51086;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51086;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51086;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51086;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51086;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51086;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51086;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51086;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51086;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51086;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51086;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51086;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51086;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51086;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51086;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51086;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51086;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51086;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51086;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51144" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51144;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51144;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51144;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">13</p>
                              <Default_7363b927 data-figma-node="I5589:51144;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5589:51144;5725:99922" src="/assets/figma/I5589-51144-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51144;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51144;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51144;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51144;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51144;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51144;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51144;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51144;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51144;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51144;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51144;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51144;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51144;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51144;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51144;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51144;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51144;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51144;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51144;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51144;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51144;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51144;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51144;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51144;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51144;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51144;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51144;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51144;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51144;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51144;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51144;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51144;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51144;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51144;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51144;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51144;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51144;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51144;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51144;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51144;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51144;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51144;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51144;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51202" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51202;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51202;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51202;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">14</p>
                            </div>
                            <img data-figma-node="I5589:51202;5725:99922" src="/assets/figma/I5589-51202-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51202;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51202;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51202;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51202;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51202;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51202;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51202;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51202;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51202;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51202;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51202;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51202;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51202;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51202;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51202;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51202;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51202;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51202;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51202;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51202;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51202;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51202;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51202;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51202;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51202;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51202;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51202;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51202;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51202;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51202;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51202;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51202;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51202;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51202;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51202;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51202;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51202;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51202;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51202;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51202;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51202;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51202;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51202;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="5589:51318" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-background-2">
                        <div data-figma-node="5589:51322" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51322;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51322;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51322;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">15</p>
                            </div>
                            <img data-figma-node="I5589:51322;5725:99922" src="/assets/figma/I5589-51322-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51322;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51322;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51322;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51322;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51322;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51322;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51322;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51322;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51322;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51322;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51322;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51322;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51322;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51322;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51322;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51322;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51322;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51322;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51322;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51322;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51322;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51322;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51322;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51322;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51322;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51322;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51322;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51322;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51322;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51322;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51322;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51322;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51322;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51322;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51322;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51322;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51322;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51322;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51322;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51322;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51322;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51322;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51322;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51323" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51323;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51323;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51323;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">16</p>
                            </div>
                            <img data-figma-node="I5589:51323;5725:99922" src="/assets/figma/I5589-51323-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51323;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51323;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51323;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51323;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51323;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51323;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51323;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51323;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51323;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51323;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51323;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51323;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51323;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51323;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51323;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51323;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51323;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51323;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51323;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51323;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51323;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51323;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51323;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51323;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51323;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51323;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51323;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51323;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51323;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51323;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51323;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51323;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51323;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51323;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51323;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51323;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51323;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51323;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51323;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51323;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51323;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51323;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51323;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51324" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51324;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51324;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51324;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">17</p>
                              <Default_7363b927 data-figma-node="I5589:51324;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5589:51324;5725:99922" src="/assets/figma/I5589-51324-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51324;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51324;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51324;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51324;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51324;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51324;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51324;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51324;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51324;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51324;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51324;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51324;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51324;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51324;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51324;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51324;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51324;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51324;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51324;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51324;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51324;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51324;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51324;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51324;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51324;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51324;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51324;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51324;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51324;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51324;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51324;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51324;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51324;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51324;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51324;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51324;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51324;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51324;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51324;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51324;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51324;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51324;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51324;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51325" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51325;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51325;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51325;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">18</p>
                            </div>
                            <img data-figma-node="I5589:51325;5725:99922" src="/assets/figma/I5589-51325-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51325;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51325;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51325;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51325;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51325;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51325;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51325;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51325;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51325;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51325;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51325;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51325;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51325;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51325;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51325;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51325;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51325;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51325;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51325;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51325;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51325;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51325;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51325;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51325;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51325;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51325;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51325;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51325;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51325;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51325;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51325;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51325;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51325;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51325;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51325;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51325;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51325;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51325;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51325;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51325;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51325;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51325;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51325;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51326" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51326;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51326;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51326;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">19</p>
                            </div>
                            <img data-figma-node="I5589:51326;5725:99922" src="/assets/figma/I5589-51326-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51326;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51326;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51326;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51326;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51326;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51326;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51326;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51326;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51326;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51326;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51326;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51326;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51326;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51326;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51326;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51326;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51326;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51326;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51326;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51326;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51326;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51326;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51326;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51326;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51326;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51326;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51326;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51326;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51326;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51326;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51326;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51326;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51326;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51326;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51326;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51326;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51326;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51326;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51326;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51326;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51326;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51326;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51326;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51327" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51327;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51327;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51327;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">20</p>
                              <Default_7363b927 data-figma-node="I5589:51327;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5589:51327;5725:99922" src="/assets/figma/I5589-51327-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51327;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51327;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51327;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51327;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51327;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51327;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51327;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51327;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51327;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51327;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51327;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51327;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51327;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51327;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51327;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51327;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51327;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51327;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51327;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51327;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51327;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51327;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51327;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51327;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51327;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51327;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51327;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51327;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51327;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51327;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51327;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51327;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51327;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51327;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51327;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51327;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51327;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51327;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51327;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51327;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51327;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51327;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51327;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51328" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51328;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51328;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51328;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">21</p>
                            </div>
                            <img data-figma-node="I5589:51328;5725:99922" src="/assets/figma/I5589-51328-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51328;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51328;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51328;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51328;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51328;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51328;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51328;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51328;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51328;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51328;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51328;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51328;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51328;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51328;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51328;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51328;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51328;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51328;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51328;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51328;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51328;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51328;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51328;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51328;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51328;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51328;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51328;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51328;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51328;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51328;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51328;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51328;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51328;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51328;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51328;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51328;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51328;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51328;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51328;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51328;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51328;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51328;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51328;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="5589:51725" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-background-2">
                        <div data-figma-node="5589:51729" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51729;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51729;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51729;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">22</p>
                            </div>
                            <img data-figma-node="I5589:51729;5725:99922" src="/assets/figma/I5589-51729-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51729;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51729;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51729;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51729;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51729;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51729;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51729;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51729;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51729;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51729;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51729;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51729;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51729;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51729;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51729;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51729;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51729;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51729;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51729;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51729;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51729;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51729;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51729;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51729;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51729;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51729;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51729;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51729;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51729;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51729;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51729;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51729;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51729;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51729;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51729;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51729;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51729;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51729;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51729;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51729;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51729;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51729;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51729;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51730" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51730;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51730;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51730;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">23</p>
                            </div>
                            <img data-figma-node="I5589:51730;5725:99922" src="/assets/figma/I5589-51730-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51730;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51730;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51730;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51730;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51730;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51730;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51730;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51730;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51730;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51730;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51730;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51730;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51730;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51730;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51730;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51730;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51730;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51730;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51730;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51730;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51730;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51730;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51730;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51730;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51730;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51730;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51730;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51730;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51730;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51730;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51730;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51730;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51730;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51730;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51730;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51730;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51730;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51730;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51730;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51730;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51730;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51730;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51730;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51731" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:51731;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51731;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51731;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">24</p>
                            </div>
                            <img data-figma-node="I5589:51731;5725:99922" src="/assets/figma/I5589-51731-5725-99922.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5589:51731;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:51731;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51731;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51731;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51731;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51731;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51731;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51731;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51731;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51731;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51731;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51731;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51731;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51731;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51731;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51731;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51731;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51731;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51731;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51731;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51731;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51731;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51731;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51731;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51731;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51731;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51731;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51731;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51731;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:51731;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:51731;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:51731;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:51731;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:51731;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:51731;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:51731;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:51731;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:51731;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51731;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:51731;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:51731;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:51731;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:51731;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:51732" data-figma-component="5556:77475" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5589:51732;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51732;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51732;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">25</p>
                            </div>
                            <img data-figma-node="I5589:51732;5725:104713" src="/assets/figma/I5589-51732-5725-104713.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5589:51733" data-figma-component="5556:77475" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5589:51733;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51733;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51733;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">26</p>
                            </div>
                            <img data-figma-node="I5589:51733;5725:104713" src="/assets/figma/I5589-51733-5725-104713.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5589:51734" data-figma-component="5556:77475" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5589:51734;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51734;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51734;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">27</p>
                            </div>
                            <img data-figma-node="I5589:51734;5725:104713" src="/assets/figma/I5589-51734-5725-104713.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5589:51735" data-figma-component="5556:77475" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5589:51735;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:51735;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:51735;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">28</p>
                            </div>
                            <img data-figma-node="I5589:51735;5725:104713" src="/assets/figma/I5589-51735-5725-104713.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="5584:41565" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-2.5 pt-[10px] pb-[10px] pl-[24px] bg-surface-light-1">
                        <p data-figma-node="5584:41566" className="box-border w-max max-w-[118px] h-auto min-h-[23px] font-onest text-[18px] font-[500] leading-[23px] text-left whitespace-nowrap text-brand-primary-1">October 2025</p>
                        <div data-figma-node="5584:41567" className="box-border w-full min-w-0 h-full min-h-0 relative block bg-surface-light"></div>
                      </div>
                      <div data-figma-node="5589:52234" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-background-2">
                        <div data-figma-node="5589:52241" data-figma-component="5556:77518" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-1">
                          <div data-figma-node="I5589:52241;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:52241;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:52241;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5589:52241;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5589:52241;5725:102098" src="/assets/figma/I5589-52241-5725-102098.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5589:52242" data-figma-component="5556:77518" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-1">
                          <div data-figma-node="I5589:52242;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:52242;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:52242;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5589:52242;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5589:52242;5725:102098" src="/assets/figma/I5589-52242-5725-102098.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5589:52243" data-figma-component="5556:77518" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-1">
                          <div data-figma-node="I5589:52243;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:52243;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:52243;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5589:52243;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5589:52243;5725:102098" src="/assets/figma/I5589-52243-5725-102098.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5589:52238" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:52238;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:52238;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:52238;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5589:52238;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5589:52238;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5589:52238;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5589:52238;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5589:52238;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5589:52238;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5589:52238;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5589:52238;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5589:52238;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:52238;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52238;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52238;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52238;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52238;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52238;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52238;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52238;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52238;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52238;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52238;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52238;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52238;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52238;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:52238;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52238;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52238;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52238;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52238;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52238;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52238;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52238;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52238;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52238;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52238;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52238;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52238;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52238;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:52238;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52238;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52238;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52238;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52238;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52238;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52238;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52238;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52238;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52238;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52238;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52238;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52238;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52238;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:52710" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:52710;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:52710;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:52710;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5589:52710;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5589:52710;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5589:52710;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5589:52710;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5589:52710;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5589:52710;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5589:52710;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5589:52710;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5589:52710;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:52710;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52710;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52710;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52710;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52710;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52710;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52710;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52710;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52710;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52710;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52710;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52710;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52710;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52710;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:52710;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52710;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52710;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52710;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52710;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52710;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52710;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52710;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52710;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52710;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52710;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52710;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52710;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52710;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:52710;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52710;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52710;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52710;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52710;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52710;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52710;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52710;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52710;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52710;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52710;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52710;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52710;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52710;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:52239" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:52239;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:52239;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:52239;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5589:52239;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5589:52239;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5589:52239;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5589:52239;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5589:52239;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5589:52239;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5589:52239;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5589:52239;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5589:52239;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:52239;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52239;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52239;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52239;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52239;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52239;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52239;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52239;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52239;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52239;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52239;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52239;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52239;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52239;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:52239;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52239;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52239;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52239;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52239;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52239;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52239;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52239;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52239;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52239;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52239;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52239;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52239;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52239;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:52239;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52239;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52239;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52239;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52239;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52239;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52239;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52239;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52239;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52239;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52239;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52239;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52239;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52239;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5589:52240" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5589:52240;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5589:52240;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5589:52240;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5589:52240;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5589:52240;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5589:52240;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5589:52240;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5589:52240;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5589:52240;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5589:52240;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5589:52240;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5589:52240;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5589:52240;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52240;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52240;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52240;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52240;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52240;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52240;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52240;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52240;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52240;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52240;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52240;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52240;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52240;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:52240;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52240;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52240;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52240;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52240;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52240;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52240;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52240;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52240;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52240;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52240;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52240;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52240;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52240;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5589:52240;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5589:52240;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5589:52240;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5589:52240;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5589:52240;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5589:52240;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5589:52240;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5589:52240;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5589:52240;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52240;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5589:52240;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5589:52240;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5589:52240;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5589:52240;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-figma-node="5596:52811" data-figma-component="1000004921" className="box-border absolute left-[710px] top-[20px] w-[690px] max-md:relative max-md:left-auto max-md:top-auto max-md:w-full h-[697px] max-md:h-auto flex flex-col items-start">
                <div data-figma-node="5596:52812" className="box-border w-full min-w-0 h-full min-h-0 rounded-[10px_10px_0px_0px] relative flex flex-row items-center justify-between pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px] bg-background-2">
                  <div data-figma-node="5596:52813" className="box-border w-max max-w-[259px] h-[23px] relative flex flex-row items-center gap-2.5">
                    <div data-figma-node="5596:52814" className="box-border w-max max-w-[144px] h-[23px] relative flex flex-row items-center gap-3">
                      <p data-figma-node="5596:52816" className="box-border w-max max-w-[144px] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-text-body-1">September 2026</p>
                    </div>
                    <div data-figma-node="5596:52818" className="box-border w-max max-w-[105px] h-[21px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px]">
                      <p data-figma-node="5596:52819" className="box-border w-max max-w-[85px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-brand-primary-1">Current Year</p>
                    </div>
                  </div>
                  <div data-figma-node="5596:52820" className="box-border w-max max-w-[114px] h-[30px] rounded-[100px] relative flex flex-row items-center gap-1.5 pt-[4px] pr-[16px] pb-[4px] pl-[16px] border-[#d5ba8c] border-[1px] bg-surface-light-2">
                    <p data-figma-node="5596:52821" className="box-border w-max max-w-[82px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-text-dark">105 activities</p>
                  </div>
                </div>
                <div data-figma-node="5596:52823" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start">
                  <div data-figma-node="5596:52824" className="box-border w-max max-w-[32px] h-[635px] overflow-hidden rounded-[0px_0px_0px_10px] relative flex flex-col items-start">
                    <div data-figma-node="5596:52825" className="box-border w-[32px] h-[35px] relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px] border-[#e5e7eb] border-[1px] bg-background-tinted-5"></div>
                    <div data-figma-node="5596:52829" className="box-border w-max max-w-[32px] h-[558px] relative flex flex-row items-start">
                      <div data-figma-node="5596:52830" className="box-border w-[16px] h-[977px] rounded-[0px_0px_0px_10px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-neutral-5">
                        <div data-figma-node="5596:52831" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                          <svg data-figma-node="5596:52832" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          <svg data-figma-node="5596:52833" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          <svg data-figma-node="5596:52834" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                        </div>
                        <div data-figma-node="5596:52835" className="box-border w-max max-w-[14px] h-[649px] relative flex flex-col items-start justify-center gap-2.5">
                          <p data-figma-node="5596:52836" className="box-border w-max max-w-[14px] h-auto min-h-[54px] font-onest text-[11px] font-[500] leading-[14px] text-left text-background-2">Sep 1 - 30</p>
                          <p data-figma-node="5596:52837" className="box-border w-max max-w-[14px] h-auto min-h-[68px] font-onest text-[11px] font-[700] leading-[14px] text-left text-background-2">World Cup</p>
                        </div>
                      </div>
                      <div data-figma-node="5596:52838" className="box-border w-max max-w-[16px] h-[540px] relative flex flex-col items-start">
                        <div data-figma-node="5596:52839" className="box-border w-[16px] h-[180px] flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-brand-primary-3">
                          <div data-figma-node="5596:52840" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                            <svg data-figma-node="5596:52841" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="5596:52842" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="5596:52843" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          </div>
                          <div data-figma-node="5596:52844" className="box-border w-max max-w-[14px] h-[132px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="5596:52845" className="box-border w-max max-w-[14px] h-auto min-h-[50px] font-onest text-[11px] font-[500] leading-[14px] text-left text-background-2">Sep 1 - 13</p>
                            <p data-figma-node="5596:52846" className="box-border w-max max-w-[14px] h-auto min-h-[75px] font-onest text-[11px] font-[700] leading-[14px] text-left text-background-2">Cherry ha...</p>
                          </div>
                        </div>
                        <div data-figma-node="5596:52847" className="box-border w-[16px] h-[360px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-neutral-mid-7">
                          <div data-figma-node="5596:52848" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                            <svg data-figma-node="5596:52849" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="5596:52850" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="5596:52851" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          </div>
                          <div data-figma-node="5596:52852" className="box-border w-max max-w-[14px] h-[324px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="5596:52853" className="box-border w-max max-w-[14px] h-auto min-h-[61px] font-onest text-[11px] font-[500] leading-[14px] text-left text-background-2">Sep 14 - 30</p>
                            <p data-figma-node="5596:52854" className="box-border w-max max-w-[14px] h-auto min-h-[68px] font-onest text-[11px] font-[700] leading-[14px] text-left text-background-2">World Cup</p>
                          </div>
                        </div>
                        <div data-figma-node="5645:43115" className="box-border w-[16px] h-[360px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-background-1">
                          <div data-figma-node="5645:43120" className="box-border w-max max-w-[14px] h-[324px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="5645:43121" className="box-border w-max max-w-[14px] h-auto min-h-[61px] font-onest text-[11px] font-[500] leading-[14px] text-left text-background-2">Sep 14 - 30</p>
                            <p data-figma-node="5645:43122" className="box-border w-max max-w-[14px] h-auto min-h-[68px] font-onest text-[11px] font-[700] leading-[14px] text-left text-background-2">World Cup</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-figma-node="5596:52855" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden rounded-[0px_0px_10px_0px] relative flex flex-col items-start border-[#e5e7eb] border-[1px] bg-background-2">
                    <form data-figma-node="5596:52873" data-figma-form="true" onSubmit={e => e.preventDefault()} className="box-border w-full min-w-0 h-full min-h-0 relative border-[#e5e7eb] border-[1px] bg-background-tinted-5">
                      <input data-figma-node="5596:52876" name="field-5596-52876" data-figma-field="field-5596-52876" data-figma-field-origin="fallback" {...useFigmaFieldProps("field-5596-52876")} type="text" placeholder="Mon" aria-label="Mon" className="box-border w-[94px] h-[35px] whitespace-nowrap shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5596:52878" name="field-5596-52878" data-figma-field="field-5596-52878" data-figma-field-origin="fallback" {...useFigmaFieldProps("field-5596-52878")} type="text" placeholder="Tue" aria-label="Tue" className="box-border w-[94px] h-[35px] whitespace-nowrap shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5596:52880" name="field-5596-52880" data-figma-field="field-5596-52880" data-figma-field-origin="fallback" {...useFigmaFieldProps("field-5596-52880")} type="text" placeholder="Wed" aria-label="Wed" className="box-border w-[94px] h-[35px] whitespace-nowrap shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5596:52882" name="field-5596-52882" data-figma-field="field-5596-52882" data-figma-field-origin="fallback" {...useFigmaFieldProps("field-5596-52882")} type="text" placeholder="Thu" aria-label="Thu" className="box-border w-[94px] h-[35px] whitespace-nowrap shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5596:52884" name="field-5596-52884" data-figma-field="field-5596-52884" data-figma-field-origin="fallback" {...useFigmaFieldProps("field-5596-52884")} type="text" placeholder="Fri" aria-label="Fri" className="box-border w-[94px] h-[35px] whitespace-nowrap shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <input data-figma-node="5596:52886" name="field-5596-52886" data-figma-field="field-5596-52886" data-figma-field-origin="fallback" {...useFigmaFieldProps("field-5596-52886")} type="text" placeholder="Sat" aria-label="Sat" className="box-border w-[94px] h-[35px] whitespace-nowrap shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
                      <div data-figma-node="5596:52888" className="box-border w-[93px] h-[35px] rounded-[0px_10px_0px_0px] relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px]">
                        <p data-figma-node="5596:52889" className="box-border w-max max-w-[26px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">Sun</p>
                      </div>
                    </form>
                    <div data-figma-node="5596:52890" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start">
                      <div data-figma-node="5596:52894" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start bg-background-2">
                        <Disabled_781e0828 data-figma-node="5596:52898" data-figma-component="5556:77518" className="relative" />
                        <button data-figma-node="5596:52899" data-figma-component="5556:77475" type="button" data-figma-action="act_3a76a09f21bd" {...useFigmaActionProps("act_3a76a09f21bd")} className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] cursor-pointer block">
                          <div data-figma-node="I5596:52899;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52899;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52899;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">1</p>
                            </div>
                            <img data-figma-node="I5596:52899;5725:104713" src="/assets/figma/I5596-52899-5725-104713.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </button>
                        <button data-figma-node="5596:52900" data-figma-component="5556:77475" type="button" data-figma-action="act_3ba4c1642247" {...useFigmaActionProps("act_3ba4c1642247")} className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] cursor-pointer block">
                          <div data-figma-node="I5596:52900;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52900;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52900;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">2</p>
                            </div>
                            <img data-figma-node="I5596:52900;5725:104713" src="/assets/figma/I5596-52900-5725-104713.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </button>
                        <div data-figma-node="5596:52901" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52901;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52901;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52901;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                            </div>
                            <img data-figma-node="I5596:52901;5725:103122" src="/assets/figma/I5596-52901-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52901;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52901;5602:55917" data-figma-component="5217:13666" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52901;5602:55917;5217:13667" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#2a9d8f] border-[1px] bg-background-tinted">
                                <div data-figma-node="I5596:52901;5602:55917;5217:13668" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52901;5602:55917;5725:67326" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52901;5602:55917;5725:67327" data-figma-component="5121:8558" className="box-border w-[14px] h-[14px] overflow-hidden relative">
                                      <svg data-figma-node="I5596:52901;5602:55917;5725:67327;403:404" viewBox="0 0 11.67 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[14px] absolute left-[1px] top-[0px] [--fx:1] [--fww:12] pointer-events-none overflow-visible"><path d="M8.75 8.16668C8.75 8.32139 8.68854 8.46976 8.57915 8.57916C8.46975 8.68855 8.32138 8.75001 8.16667 8.75001L3.5 8.75001C3.34529 8.75001 3.19692 8.68855 3.08752 8.57916C2.97812 8.46976 2.91667 8.32139 2.91667 8.16668C2.91667 8.01197 2.97812 7.8636 3.08752 7.7542C3.19692 7.6448 3.34529 7.58335 3.5 7.58335L8.16667 7.58335C8.32138 7.58335 8.46975 7.6448 8.57915 7.7542C8.68854 7.8636 8.75 8.01197 8.75 8.16668ZM6.41667 9.91668L3.5 9.91668C3.34529 9.91668 3.19692 9.97814 3.08752 10.0875C2.97812 10.1969 2.91667 10.3453 2.91667 10.5C2.91667 10.6547 2.97812 10.8031 3.08752 10.9125C3.19692 11.0219 3.34529 11.0833 3.5 11.0833L6.41667 11.0833C6.57138 11.0833 6.71975 11.0219 6.82915 10.9125C6.93854 10.8031 7 10.6547 7 10.5C7 10.3453 6.93854 10.1969 6.82915 10.0875C6.71975 9.97814 6.57138 9.91668 6.41667 9.91668ZM11.6667 6.11626L11.6667 11.0833C11.6657 11.8566 11.3582 12.5979 10.8114 13.1447C10.2646 13.6915 9.52326 13.9991 8.75 14L2.91667 14C2.1434 13.9991 1.40208 13.6915 0.855295 13.1447C0.308514 12.5979 0.00092625 11.8566 0 11.0833L0 2.91668C0.00092625 2.14342 0.308514 1.40209 0.855295 0.855308C1.40208 0.308528 2.1434 0.000939695 2.91667 1.34451e-05L5.55042 1.34451e-05C6.08686 -0.00136726 6.61826 0.103606 7.11388 0.308865C7.6095 0.514123 8.05952 0.815594 8.43792 1.19585L10.4702 3.22935C10.8507 3.60749 11.1524 4.05736 11.3577 4.55292C11.5631 5.04847 11.6681 5.57984 11.6667 6.11626L11.6667 6.11626ZM7.61308 2.02068C7.4295 1.84286 7.22338 1.68989 7 1.56568L7 4.08335C7 4.23806 7.06146 4.38643 7.17085 4.49583C7.28025 4.60522 7.42862 4.66668 7.58333 4.66668L10.101 4.66668C9.97672 4.44337 9.82354 4.23743 9.64542 4.05418L7.61308 2.02068ZM10.5 6.11626C10.5 6.02001 10.4813 5.92785 10.4726 5.83335L7.58333 5.83335C7.1192 5.83335 6.67408 5.64897 6.3459 5.32078C6.01771 4.99259 5.83333 4.54748 5.83333 4.08335L5.83333 1.1941C5.73883 1.18535 5.64608 1.16668 5.55042 1.16668L2.91667 1.16668C2.45254 1.16668 2.00742 1.35105 1.67923 1.67924C1.35104 2.00743 1.16667 2.45255 1.16667 2.91668L1.16667 11.0833C1.16667 11.5475 1.35104 11.9926 1.67923 12.3208C2.00742 12.649 2.45254 12.8333 2.91667 12.8333L8.75 12.8333C9.21413 12.8333 9.65925 12.649 9.98744 12.3208C10.3156 11.9926 10.5 11.5475 10.5 11.0833L10.5 6.11626Z" fill="#2a9d8f" /></svg>
                                    </div>
                                    <p data-figma-node="I5596:52901;5602:55917;5725:67328" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52901;5602:55917;5725:67329" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52901;5602:55917;5725:67330" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52901;5602:55917;5725:67331" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52901;5602:55917;5725:67332" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52901;5602:55917;5217:13678" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52901;5602:55917;5217:13680" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52901;5602:55917;5217:13681" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52901;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52901;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52901;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52901;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52901;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52901;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52901;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52901;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52901;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52901;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52901;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52901;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52901;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52901;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52901;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52901;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52901;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52901;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52901;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52901;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52901;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52901;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52901;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52901;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52901;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52901;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52901;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52901;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52902" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52902;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52902;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52902;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">4</p>
                            </div>
                            <div data-figma-node="I5596:52902;5725:103122" className="box-border w-[42px] h-[16px] relative flex flex-row items-center justify-end gap-1.5"></div>
                          </div>
                          <div data-figma-node="I5596:52902;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52902;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52902;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52902;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52902;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52902;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52902;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52902;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52902;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52902;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52902;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52902;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52902;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52902;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52902;5602:55917;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52902;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52902;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52902;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52902;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52902;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52902;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52902;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52902;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52902;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52902;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52902;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52902;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52902;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52902;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52902;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52902;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52902;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52902;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52902;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52902;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52902;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52902;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52902;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52902;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52902;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52902;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52902;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52902;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52903" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52903;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52903;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52903;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">5</p>
                            </div>
                            <img data-figma-node="I5596:52903;5725:103122" src="/assets/figma/I5596-52903-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52903;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52903;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52903;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52903;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52903;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52903;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52903;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52903;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52903;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52903;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52903;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52903;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52903;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52903;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52903;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52903;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52903;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52903;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52903;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52903;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52903;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52903;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52903;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52903;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52903;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52903;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52903;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52903;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52903;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52903;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52903;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52903;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52903;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52903;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52903;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52903;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52903;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52903;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52903;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52903;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52903;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52903;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52903;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52904" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52904;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52904;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52904;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">6</p>
                            </div>
                            <img data-figma-node="I5596:52904;5725:103122" src="/assets/figma/I5596-52904-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52904;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52904;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52904;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52904;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52904;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52904;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52904;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52904;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52904;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52904;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52904;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52904;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52904;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52904;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52904;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52904;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52904;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52904;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52904;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52904;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52904;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52904;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52904;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52904;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52904;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52904;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52904;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52904;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52904;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52904;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52904;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52904;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52904;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52904;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52904;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52904;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52904;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52904;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52904;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52904;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52904;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52904;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52904;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52905" className="box-border w-[408px] h-[73px] absolute left-[844px] top-[40px] [--fx:844] [--fww:408] rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] flex flex-row items-start gap-1">
                          <div data-figma-node="5596:52906" className="box-border w-[543px] h-[73px] rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[8px] pr-[8px] pb-[8px] pl-[8px] border-[#2a9d8f] border-[1px] bg-background-tinted-2">
                            <div data-figma-node="5596:52907" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                              <div data-figma-node="5596:52908" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-[55px]">
                                <div data-figma-node="5596:52909" className="box-border w-max max-w-[63px] h-[13px] relative flex flex-row items-center gap-1">
                                  <div data-figma-node="5596:52910" className="box-border w-[6px] h-[6px] rounded-[3px] relative block bg-accent-teal-3"></div>
                                  <p data-figma-node="5596:52911" className="box-border w-max max-w-[53px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-accent-teal-3">Product</p>
                                </div>
                                <div data-figma-node="5596:52912" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                                  <svg data-figma-node="5596:52913" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                  <svg data-figma-node="5596:52914" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                  <svg data-figma-node="5596:52915" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                </div>
                              </div>
                              <p data-figma-node="5596:52916" className="box-border w-max max-w-[156px] h-auto min-h-[15px] font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                              <div data-figma-node="5596:52917" className="box-border w-max max-w-[142px] h-[18px] relative flex flex-row items-center gap-1">
                                <p data-figma-node="5596:52918" className="box-border w-max max-w-[64px] h-auto min-h-[14px] font-onest text-[11px] font-[500] leading-[14px] text-left whitespace-nowrap text-neutral-4">Sept 18 - 20</p>
                                <div data-figma-node="5596:52919" className="box-border w-max max-w-[74px] h-[18px] rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[6px] pb-[2px] pl-[6px] bg-background-2">
                                  <p data-figma-node="5596:52920" className="box-border w-max max-w-[62px] h-auto min-h-[14px] font-onest text-[11px] font-[500] leading-[14px] text-left whitespace-nowrap text-neutral-4">C5-M9-Y26</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5602:71439" data-figma-component="5217:13666" className="box-border w-[372px] h-[42px] absolute left-[286px] top-[36px] [--fx:286] [--fww:372] rounded-[6px_0px_0px_6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] flex flex-row items-start gap-1">
                          <div data-figma-node="I5602:71439;5217:13667" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px_0px_0px_8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#2a9d8f] border-[1px] bg-background-tinted-2">
                            <div data-figma-node="I5602:71439;5217:13668" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                              <div data-figma-node="I5602:71439;5725:67326" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                <div data-figma-node="I5602:71439;5725:67327" data-figma-component="5121:8558" className="box-border w-[14px] h-[14px] overflow-hidden relative">
                                  <svg data-figma-node="I5602:71439;5725:67327;403:404" viewBox="0 0 11.67 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[14px] absolute left-[1px] top-[0px] [--fx:1] [--fww:12] pointer-events-none overflow-visible"><path d="M8.75 8.16668C8.75 8.32139 8.68854 8.46976 8.57915 8.57916C8.46975 8.68855 8.32138 8.75001 8.16667 8.75001L3.5 8.75001C3.34529 8.75001 3.19692 8.68855 3.08752 8.57916C2.97812 8.46976 2.91667 8.32139 2.91667 8.16668C2.91667 8.01197 2.97812 7.8636 3.08752 7.7542C3.19692 7.6448 3.34529 7.58335 3.5 7.58335L8.16667 7.58335C8.32138 7.58335 8.46975 7.6448 8.57915 7.7542C8.68854 7.8636 8.75 8.01197 8.75 8.16668ZM6.41667 9.91668L3.5 9.91668C3.34529 9.91668 3.19692 9.97814 3.08752 10.0875C2.97812 10.1969 2.91667 10.3453 2.91667 10.5C2.91667 10.6547 2.97812 10.8031 3.08752 10.9125C3.19692 11.0219 3.34529 11.0833 3.5 11.0833L6.41667 11.0833C6.57138 11.0833 6.71975 11.0219 6.82915 10.9125C6.93854 10.8031 7 10.6547 7 10.5C7 10.3453 6.93854 10.1969 6.82915 10.0875C6.71975 9.97814 6.57138 9.91668 6.41667 9.91668ZM11.6667 6.11626L11.6667 11.0833C11.6657 11.8566 11.3582 12.5979 10.8114 13.1447C10.2646 13.6915 9.52326 13.9991 8.75 14L2.91667 14C2.1434 13.9991 1.40208 13.6915 0.855295 13.1447C0.308514 12.5979 0.00092625 11.8566 0 11.0833L0 2.91668C0.00092625 2.14342 0.308514 1.40209 0.855295 0.855308C1.40208 0.308528 2.1434 0.000939695 2.91667 1.34451e-05L5.55042 1.34451e-05C6.08686 -0.00136726 6.61826 0.103606 7.11388 0.308865C7.6095 0.514123 8.05952 0.815594 8.43792 1.19585L10.4702 3.22935C10.8507 3.60749 11.1524 4.05736 11.3577 4.55292C11.5631 5.04847 11.6681 5.57984 11.6667 6.11626L11.6667 6.11626ZM7.61308 2.02068C7.4295 1.84286 7.22338 1.68989 7 1.56568L7 4.08335C7 4.23806 7.06146 4.38643 7.17085 4.49583C7.28025 4.60522 7.42862 4.66668 7.58333 4.66668L10.101 4.66668C9.97672 4.44337 9.82354 4.23743 9.64542 4.05418L7.61308 2.02068ZM10.5 6.11626C10.5 6.02001 10.4813 5.92785 10.4726 5.83335L7.58333 5.83335C7.1192 5.83335 6.67408 5.64897 6.3459 5.32078C6.01771 4.99259 5.83333 4.54748 5.83333 4.08335L5.83333 1.1941C5.73883 1.18535 5.64608 1.16668 5.55042 1.16668L2.91667 1.16668C2.45254 1.16668 2.00742 1.35105 1.67923 1.67924C1.35104 2.00743 1.16667 2.45255 1.16667 2.91668L1.16667 11.0833C1.16667 11.5475 1.35104 11.9926 1.67923 12.3208C2.00742 12.649 2.45254 12.8333 2.91667 12.8333L8.75 12.8333C9.21413 12.8333 9.65925 12.649 9.98744 12.3208C10.3156 11.9926 10.5 11.5475 10.5 11.0833L10.5 6.11626Z" fill="#2a9d8f" /></svg>
                                </div>
                                <p data-figma-node="I5602:71439;5725:67328" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                <div data-figma-node="I5602:71439;5725:67329" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                  <svg data-figma-node="I5602:71439;5725:67330" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                  <svg data-figma-node="I5602:71439;5725:67331" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                  <svg data-figma-node="I5602:71439;5725:67332" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                </div>
                              </div>
                              <div data-figma-node="I5602:71439;5217:13678" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                <p data-figma-node="I5602:71439;5217:13679" className="box-border w-max max-w-[53px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">Sept 25 - 27</p>
                                <div data-figma-node="I5602:71439;5217:13680" className="box-border w-max max-w-[70px] h-[15px] rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                  <p data-figma-node="I5602:71439;5217:13681" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-text-dark">$5,802.46</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="5596:52921" className="box-border w-full min-w-0 h-full min-h-0 relative border-[#e5e7eb] border-[1px] bg-background-2">
                        <div data-figma-node="5596:52927" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52927;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52927;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52927;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">7</p>
                              <Default_7363b927 data-figma-node="I5596:52927;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52927;5725:103122" src="/assets/figma/I5596-52927-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52927;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52927;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52927;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52927;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52927;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52927;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52927;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52927;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52927;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52927;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52927;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52927;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52927;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52927;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52927;5602:55917;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52927;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52927;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52927;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52927;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52927;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52927;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52927;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52927;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52927;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52927;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52927;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52927;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52927;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52927;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52927;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52927;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52927;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52927;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52927;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52927;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52927;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52927;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52927;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52927;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52927;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52927;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52927;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52927;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52928" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52928;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52928;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52928;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">8</p>
                            </div>
                            <img data-figma-node="I5596:52928;5725:103122" src="/assets/figma/I5596-52928-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52928;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52928;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52928;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52928;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52928;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52928;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52928;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52928;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52928;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52928;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52928;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52928;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52928;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52928;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52928;5602:55917;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52928;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52928;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52928;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52928;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52928;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52928;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52928;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52928;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52928;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52928;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52928;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52928;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52928;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52928;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52928;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52928;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52928;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52928;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52928;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52928;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52928;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52928;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52928;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52928;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52928;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52928;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52928;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52928;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52929" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52929;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52929;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52929;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">9</p>
                            </div>
                            <div data-figma-node="I5596:52929;5725:103122" className="box-border w-[42px] h-[16px] relative flex flex-row items-center justify-end gap-1.5"></div>
                          </div>
                          <div data-figma-node="I5596:52929;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52929;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52929;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52929;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52929;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52929;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52929;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52929;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52929;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52929;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52929;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52929;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52929;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52929;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52929;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52929;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52929;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52929;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52929;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52929;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52929;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52929;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52929;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52929;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52929;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52929;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52929;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52929;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52929;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52929;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52929;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52929;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52929;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52929;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52929;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52929;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52929;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52929;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52929;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52929;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52929;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52929;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52929;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52930" data-figma-component="5556:77447" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52930;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52930;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52930;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">10</p>
                            </div>
                            <div data-figma-node="I5596:52930;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5596:52930;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5596:52930;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5596:52930;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5596:52930;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5596:52930;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5596:52930;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5596:52930;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52930;5556:77452" data-figma-component="5217:13650" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52930;5556:77452;5217:13651" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#0083ba] border-[1px] bg-background-tinted-3">
                                <div data-figma-node="I5596:52930;5556:77452;5217:13652" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52930;5556:77452;5725:67039" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52930;5556:77452;5725:67040" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrELearning_336860e7 data-figma-node="I5596:52930;5556:77452;5725:67043" data-figma-component="5121:8577" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52930;5556:77452;5725:67044" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52930;5556:77452;5725:67045" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52930;5556:77452;5725:67046" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52930;5556:77452;5725:67047" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52930;5556:77452;5725:67048" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52930;5556:77452;5217:13662" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52930;5556:77452;5217:13664" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52930;5556:77452;5217:13665" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52930;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52930;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52930;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52930;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52930;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52930;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52930;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52930;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52930;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52930;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52930;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52930;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52930;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52930;5589:48811;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52930;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52930;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52930;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52930;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52930;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52930;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52930;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52930;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52930;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52930;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52930;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52930;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52930;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52930;5589:48828;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Today_ddd8af3c data-figma-node="5596:52931" data-figma-component="5556:77496" data-figma-action="act_2853d927f093" {...useFigmaActionProps("act_2853d927f093")} className="relative" />
                        <div data-figma-node="5596:52932" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52932;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52932;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52932;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">12</p>
                            </div>
                            <img data-figma-node="I5596:52932;5725:103122" src="/assets/figma/I5596-52932-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52932;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52932;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52932;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52932;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52932;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52932;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52932;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52932;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52932;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52932;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52932;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52932;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52932;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52932;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52932;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52932;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52932;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52932;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52932;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52932;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52932;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52932;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52932;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52932;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52932;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52932;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52932;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52932;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52932;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52932;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52932;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52932;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52932;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52932;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52932;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52932;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52932;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52932;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52932;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52932;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52932;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52932;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52932;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52933" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52933;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52933;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52933;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">13</p>
                              <Default_7363b927 data-figma-node="I5596:52933;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52933;5725:103122" src="/assets/figma/I5596-52933-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52933;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52933;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52933;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52933;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52933;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52933;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52933;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52933;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52933;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52933;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52933;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52933;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52933;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52933;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52933;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52933;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52933;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52933;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52933;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52933;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52933;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52933;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52933;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52933;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52933;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52933;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52933;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52933;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52933;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52933;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52933;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52933;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52933;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52933;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52933;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52933;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52933;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52933;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52933;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52933;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52933;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52933;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52933;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="5596:52935" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-background-2">
                        <div data-figma-node="5596:52939" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52939;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52939;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52939;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">14</p>
                            </div>
                            <img data-figma-node="I5596:52939;5725:103122" src="/assets/figma/I5596-52939-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52939;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52939;5602:55917" data-figma-component="5217:13650" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52939;5602:55917;5217:13651" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#0083ba] border-[1px] bg-background-tinted-3">
                                <div data-figma-node="I5596:52939;5602:55917;5217:13652" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52939;5602:55917;5725:67039" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52939;5602:55917;5725:67040" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrELearning_336860e7 data-figma-node="I5596:52939;5602:55917;5725:67043" data-figma-component="5121:8577" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52939;5602:55917;5725:67044" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52939;5602:55917;5725:67045" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52939;5602:55917;5725:67046" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52939;5602:55917;5725:67047" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52939;5602:55917;5725:67048" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52939;5602:55917;5217:13662" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52939;5602:55917;5217:13664" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52939;5602:55917;5217:13665" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52939;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52939;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52939;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52939;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52939;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52939;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52939;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52939;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52939;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52939;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52939;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52939;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52939;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52939;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52939;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52939;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52939;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52939;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52939;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52939;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52939;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52939;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52939;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52939;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52939;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52939;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52939;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52939;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52940" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52940;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52940;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52940;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">15</p>
                            </div>
                            <img data-figma-node="I5596:52940;5725:103122" src="/assets/figma/I5596-52940-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52940;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52940;5602:55917" data-figma-component="5217:13650" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52940;5602:55917;5217:13651" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#0083ba] border-[1px] bg-background-tinted-3">
                                <div data-figma-node="I5596:52940;5602:55917;5217:13652" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52940;5602:55917;5725:67039" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52940;5602:55917;5725:67040" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrELearning_336860e7 data-figma-node="I5596:52940;5602:55917;5725:67043" data-figma-component="5121:8577" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52940;5602:55917;5725:67044" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52940;5602:55917;5725:67045" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52940;5602:55917;5725:67046" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52940;5602:55917;5725:67047" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52940;5602:55917;5725:67048" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52940;5602:55917;5217:13662" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52940;5602:55917;5217:13664" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52940;5602:55917;5217:13665" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52940;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52940;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52940;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52940;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52940;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52940;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52940;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52940;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52940;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52940;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52940;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52940;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52940;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52940;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52940;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52940;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52940;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52940;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52940;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52940;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52940;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52940;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52940;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52940;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52940;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52940;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52940;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52940;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52941" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52941;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52941;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52941;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">16</p>
                            </div>
                            <img data-figma-node="I5596:52941;5725:103122" src="/assets/figma/I5596-52941-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52941;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52941;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52941;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52941;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52941;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52941;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52941;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52941;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52941;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52941;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52941;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52941;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52941;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52941;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52941;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52941;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52941;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52941;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52941;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52941;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52941;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52941;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52941;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52941;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52941;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52941;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52941;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52941;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52941;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52941;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52941;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52941;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52941;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52941;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52941;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52941;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52941;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52941;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52941;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52941;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52941;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52941;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52941;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52942" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52942;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52942;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52942;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">17</p>
                              <Default_7363b927 data-figma-node="I5596:52942;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52942;5725:103122" src="/assets/figma/I5596-52942-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52942;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52942;5602:55917" data-figma-component="5217:13650" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52942;5602:55917;5217:13651" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#0083ba] border-[1px] bg-background-tinted-3">
                                <div data-figma-node="I5596:52942;5602:55917;5217:13652" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52942;5602:55917;5725:67039" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52942;5602:55917;5725:67040" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrELearning_336860e7 data-figma-node="I5596:52942;5602:55917;5725:67043" data-figma-component="5121:8577" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52942;5602:55917;5725:67044" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52942;5602:55917;5725:67045" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52942;5602:55917;5725:67046" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52942;5602:55917;5725:67047" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52942;5602:55917;5725:67048" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52942;5602:55917;5217:13662" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52942;5602:55917;5217:13664" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52942;5602:55917;5217:13665" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52942;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52942;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52942;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52942;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52942;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52942;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52942;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52942;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52942;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52942;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52942;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52942;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52942;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52942;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52942;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52942;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52942;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52942;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52942;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52942;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52942;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52942;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52942;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52942;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52942;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52942;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52942;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52942;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52943" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52943;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52943;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52943;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">18</p>
                            </div>
                            <img data-figma-node="I5596:52943;5725:103122" src="/assets/figma/I5596-52943-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52943;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52943;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52943;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52943;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52943;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52943;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52943;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52943;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52943;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52943;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52943;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52943;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52943;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52943;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52943;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52943;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52943;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52943;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52943;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52943;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52943;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52943;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52943;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52943;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52943;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52943;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52943;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52943;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52943;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52943;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52943;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52943;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52943;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52943;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52943;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52943;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52943;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52943;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52943;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52943;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52943;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52943;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52943;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52944" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52944;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52944;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52944;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">19</p>
                            </div>
                            <img data-figma-node="I5596:52944;5725:103122" src="/assets/figma/I5596-52944-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52944;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52944;5602:55917" data-figma-component="5217:13650" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52944;5602:55917;5217:13651" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#0083ba] border-[1px] bg-background-tinted-3">
                                <div data-figma-node="I5596:52944;5602:55917;5217:13652" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52944;5602:55917;5725:67039" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52944;5602:55917;5725:67040" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrELearning_336860e7 data-figma-node="I5596:52944;5602:55917;5725:67043" data-figma-component="5121:8577" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52944;5602:55917;5725:67044" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52944;5602:55917;5725:67045" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52944;5602:55917;5725:67046" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52944;5602:55917;5725:67047" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52944;5602:55917;5725:67048" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52944;5602:55917;5217:13662" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52944;5602:55917;5217:13664" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52944;5602:55917;5217:13665" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52944;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52944;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52944;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52944;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52944;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52944;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52944;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52944;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52944;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52944;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52944;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52944;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52944;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52944;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52944;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52944;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52944;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52944;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52944;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52944;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52944;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52944;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52944;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52944;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52944;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52944;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52944;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52944;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52945" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52945;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52945;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52945;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">20</p>
                              <Default_7363b927 data-figma-node="I5596:52945;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52945;5725:103122" src="/assets/figma/I5596-52945-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52945;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52945;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52945;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52945;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52945;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52945;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52945;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52945;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52945;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52945;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52945;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52945;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52945;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52945;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52945;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52945;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52945;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52945;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52945;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52945;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52945;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52945;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52945;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52945;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52945;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52945;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52945;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52945;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52945;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52945;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52945;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52945;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52945;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52945;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52945;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52945;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52945;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52945;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52945;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52945;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52945;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52945;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52945;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="5596:52946" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-background-2">
                        <div data-figma-node="5596:52950" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52950;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52950;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52950;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">21</p>
                            </div>
                            <img data-figma-node="I5596:52950;5725:103122" src="/assets/figma/I5596-52950-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52950;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52950;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52950;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52950;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52950;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52950;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52950;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52950;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52950;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52950;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52950;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52950;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52950;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52950;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52950;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52950;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52950;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52950;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52950;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52950;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52950;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52950;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52950;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52950;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52950;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52950;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52950;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52950;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52950;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52950;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52950;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52950;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52950;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52950;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52950;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52950;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52950;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52950;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52950;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52950;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52950;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52950;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52950;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52951" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52951;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52951;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52951;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">22</p>
                            </div>
                            <img data-figma-node="I5596:52951;5725:103122" src="/assets/figma/I5596-52951-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52951;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52951;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52951;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52951;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52951;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52951;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52951;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52951;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52951;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52951;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52951;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52951;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52951;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52951;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52951;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52951;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52951;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52951;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52951;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52951;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52951;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52951;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52951;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52951;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52951;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52951;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52951;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52951;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52951;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52951;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52951;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52951;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52951;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52951;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52951;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52951;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52951;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52951;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52951;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52951;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52951;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52951;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52951;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52952" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52952;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52952;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52952;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">23</p>
                              <Default_7363b927 data-figma-node="I5596:52952;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52952;5725:103122" src="/assets/figma/I5596-52952-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52952;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52952;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52952;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52952;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52952;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52952;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52952;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52952;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52952;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52952;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52952;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52952;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52952;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52952;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52952;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52952;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52952;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52952;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52952;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52952;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52952;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52952;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52952;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52952;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52952;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52952;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52952;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52952;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52952;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52952;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52952;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52952;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52952;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52952;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52952;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52952;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52952;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52952;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52952;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52952;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52952;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52952;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52952;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52953" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52953;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52953;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52953;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">24</p>
                            </div>
                            <img data-figma-node="I5596:52953;5725:103122" src="/assets/figma/I5596-52953-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52953;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52953;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52953;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52953;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52953;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52953;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52953;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52953;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52953;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52953;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52953;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52953;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52953;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52953;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52953;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52953;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52953;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52953;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52953;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52953;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52953;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52953;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52953;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52953;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52953;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52953;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52953;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52953;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52953;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52953;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52953;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52953;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52953;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52953;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52953;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52953;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52953;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52953;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52953;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52953;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52953;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52953;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52953;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52954" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52954;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52954;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52954;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">25</p>
                            </div>
                            <img data-figma-node="I5596:52954;5725:103122" src="/assets/figma/I5596-52954-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52954;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52954;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52954;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52954;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52954;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52954;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52954;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52954;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52954;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52954;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52954;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52954;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52954;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52954;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52954;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52954;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52954;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52954;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52954;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52954;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52954;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52954;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52954;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52954;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52954;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52954;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52954;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52954;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52954;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52954;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52954;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52954;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52954;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52954;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52954;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52954;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52954;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52954;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52954;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52954;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52954;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52954;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52954;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52955" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52955;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52955;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52955;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">26</p>
                            </div>
                            <img data-figma-node="I5596:52955;5725:103122" src="/assets/figma/I5596-52955-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52955;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52955;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52955;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52955;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52955;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52955;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52955;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52955;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52955;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52955;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52955;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52955;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52955;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52955;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52955;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52955;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52955;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52955;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52955;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52955;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52955;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52955;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52955;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52955;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52955;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52955;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52955;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52955;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52955;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52955;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52955;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52955;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52955;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52955;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52955;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52955;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52955;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52955;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52955;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52955;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52955;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52955;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52955;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52956" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52956;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52956;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52956;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">27</p>
                            </div>
                            <img data-figma-node="I5596:52956;5725:103122" src="/assets/figma/I5596-52956-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52956;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52956;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52956;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52956;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52956;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52956;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52956;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52956;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52956;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52956;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52956;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52956;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52956;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52956;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52956;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52956;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52956;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52956;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52956;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52956;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52956;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52956;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52956;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52956;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52956;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52956;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52956;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52956;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52956;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52956;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52956;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52956;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52956;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52956;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52956;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52956;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52956;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52956;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52956;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52956;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52956;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52956;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52956;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="5596:52957" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-background-2">
                        <div data-figma-node="5596:52961" data-figma-component="5556:77440" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52961;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52961;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52961;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52961;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52961;5725:103122" src="/assets/figma/I5596-52961-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52961;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52961;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52961;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52961;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52961;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52961;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52961;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52961;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52961;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52961;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52961;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52961;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52961;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52961;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52961;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52961;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52961;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52961;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52961;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52961;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52961;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52961;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52961;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52961;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52961;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52961;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52961;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52961;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52961;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52961;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52961;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52961;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52961;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52961;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52961;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52961;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52961;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52961;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52961;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52961;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52961;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52961;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52961;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52962" data-figma-component="5556:77440" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52962;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52962;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52962;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52962;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52962;5725:103122" src="/assets/figma/I5596-52962-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52962;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52962;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52962;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52962;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52962;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52962;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52962;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52962;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52962;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52962;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52962;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52962;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52962;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52962;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52962;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52962;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52962;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52962;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52962;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52962;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52962;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52962;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52962;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52962;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52962;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52962;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52962;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52962;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52962;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52962;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52962;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52962;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52962;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52962;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52962;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52962;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52962;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52962;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52962;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52962;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52962;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52962;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52962;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52963" data-figma-component="5556:77440" className="box-border w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52963;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52963;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52963;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52963;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52963;5725:103122" src="/assets/figma/I5596-52963-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52963;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52963;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52963;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52963;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52963;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52963;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52963;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52963;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52963;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52963;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52963;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52963;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52963;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52963;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52963;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52963;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52963;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52963;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52963;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52963;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52963;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52963;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52963;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52963;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52963;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52963;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52963;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52963;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52963;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52963;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52963;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52963;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52963;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52963;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52963;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52963;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52963;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52963;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52963;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52963;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52963;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52963;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52963;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52964" data-figma-component="5556:77440" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52964;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52964;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52964;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52964;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52964;5725:103122" src="/assets/figma/I5596-52964-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52964;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52964;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52964;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52964;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52964;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52964;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52964;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52964;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52964;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52964;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52964;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52964;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52964;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52964;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52964;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52964;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52964;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52964;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52964;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52964;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52964;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52964;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52964;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52964;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52964;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52964;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52964;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52964;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52964;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52964;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52964;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52964;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52964;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52964;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52964;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52964;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52964;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52964;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52964;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52964;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52964;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52964;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52964;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52965" data-figma-component="5556:77440" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52965;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52965;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52965;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52965;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52965;5725:103122" src="/assets/figma/I5596-52965-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52965;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52965;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52965;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52965;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52965;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52965;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52965;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52965;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52965;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52965;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52965;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52965;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52965;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52965;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52965;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52965;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52965;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52965;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52965;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52965;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52965;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52965;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52965;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52965;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52965;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52965;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52965;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52965;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52965;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52965;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52965;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52965;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52965;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52965;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52965;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52965;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52965;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52965;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52965;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52965;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52965;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52965;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52965;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52966" data-figma-component="5556:77440" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52966;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52966;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52966;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52966;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52966;5725:103122" src="/assets/figma/I5596-52966-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52966;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52966;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52966;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52966;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52966;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52966;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52966;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52966;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52966;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52966;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52966;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52966;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52966;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52966;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52966;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52966;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52966;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52966;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52966;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52966;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52966;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52966;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52966;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52966;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52966;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52966;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52966;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52966;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52966;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52966;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52966;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52966;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52966;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52966;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52966;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52966;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52966;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52966;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52966;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52966;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52966;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52966;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52966;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52967" data-figma-component="5556:77440" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52967;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52967;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52967;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52967;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52967;5725:103122" src="/assets/figma/I5596-52967-5725-103122.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5596:52967;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52967;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52967;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52967;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52967;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52967;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52967;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52967;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52967;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52967;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52967;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52967;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52967;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52967;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52967;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52967;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52967;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52967;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52967;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52967;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52967;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52967;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52967;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52967;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52967;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52967;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52967;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52967;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52967;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52967;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52967;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52967;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52967;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52967;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52967;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52967;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52967;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52967;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52967;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52967;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52967;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52967;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-background-2">
                                      <p data-figma-node="I5596:52967;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="5596:52968" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-2.5 pt-[10px] pb-[10px] pl-[24px] bg-surface-light-1">
                        <p data-figma-node="5596:52969" className="box-border w-max max-w-[118px] h-auto min-h-[23px] font-onest text-[18px] font-[500] leading-[23px] text-left whitespace-nowrap text-brand-primary-1">October 2025</p>
                        <div data-figma-node="5596:52970" className="box-border w-full min-w-0 h-full min-h-0 relative block bg-surface-light"></div>
                      </div>
                      <div data-figma-node="5596:52971" className="box-border w-full min-w-0 h-[180px] relative border-[#e2d9d0] border-[1px] bg-background-2">
                        <div data-figma-node="5596:52975" data-figma-component="5556:77518" className="box-border absolute left-[0px] top-[0px] w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-1">
                          <div data-figma-node="I5596:52975;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52975;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52975;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52975;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52975;5725:102098" src="/assets/figma/I5596-52975-5725-102098.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5596:52976" data-figma-component="5556:77518" className="box-border absolute left-[94px] top-[0px] w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-1">
                          <div data-figma-node="I5596:52976;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52976;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52976;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52976;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52976;5725:102098" src="/assets/figma/I5596-52976-5725-102098.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5596:52977" data-figma-component="5556:77518" className="box-border absolute left-[188px] top-[0px] w-[94px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-1">
                          <div data-figma-node="I5596:52977;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52977;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52977;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52977;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5596:52977;5725:102098" src="/assets/figma/I5596-52977-5725-102098.png" alt="Frame 1000007851" width={42} height={16} onError={e => { (e.currentTarget as HTMLImageElement).style.visibility='hidden' }} className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="5596:52978" data-figma-component="5556:77447" className="box-border absolute left-[282px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52978;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52978;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52978;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52978;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5596:52978;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5596:52978;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5596:52978;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5596:52978;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5596:52978;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5596:52978;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5596:52978;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5596:52978;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52978;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52978;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52978;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52978;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52978;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52978;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52978;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52978;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52978;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52978;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52978;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52978;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52978;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52978;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52978;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52978;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52978;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52978;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52978;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52978;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52978;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52978;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52978;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52978;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52978;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52978;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52978;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52978;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52978;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52978;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52978;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52978;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52978;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52978;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52978;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52978;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52978;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52978;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52978;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52978;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52978;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52978;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52979" data-figma-component="5556:77447" className="box-border absolute left-[377px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52979;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52979;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52979;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52979;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5596:52979;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5596:52979;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5596:52979;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5596:52979;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5596:52979;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5596:52979;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5596:52979;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5596:52979;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52979;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52979;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52979;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52979;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52979;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52979;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52979;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52979;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52979;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52979;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52979;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52979;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52979;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52979;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52979;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52979;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52979;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52979;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52979;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52979;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52979;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52979;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52979;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52979;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52979;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52979;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52979;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52979;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52979;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52979;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52979;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52979;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52979;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52979;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52979;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52979;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52979;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52979;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52979;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52979;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52979;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52979;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52980" data-figma-component="5556:77447" className="box-border absolute left-[471px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52980;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52980;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52980;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52980;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5596:52980;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5596:52980;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5596:52980;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5596:52980;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5596:52980;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5596:52980;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5596:52980;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5596:52980;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52980;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52980;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52980;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52980;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52980;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52980;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52980;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52980;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52980;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52980;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52980;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52980;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52980;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52980;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52980;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52980;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52980;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52980;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52980;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52980;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52980;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52980;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52980;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52980;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52980;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52980;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52980;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52980;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52980;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52980;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52980;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52980;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52980;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52980;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52980;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52980;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52980;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52980;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52980;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52980;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52980;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52980;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="5596:52981" data-figma-component="5556:77447" className="box-border absolute left-[565px] top-[0px] w-[96px] h-[180px] flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-background-tinted-11">
                          <div data-figma-node="I5596:52981;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5596:52981;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5596:52981;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-neutral">3</p>
                              <Default_7363b927 data-figma-node="I5596:52981;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5596:52981;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5596:52981;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5596:52981;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5596:52981;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5596:52981;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5596:52981;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-background-tinted-9">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5596:52981;5725:99928" data-figma-component="5121:7331" className="relative overflow-hidden rounded-[4px]" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5596:52981;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5596:52981;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52981;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52981;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52981;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52981;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52981;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52981;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52981;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52981;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52981;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52981;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52981;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52981;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52981;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52981;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52981;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52981;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52981;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52981;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52981;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52981;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52981;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52981;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52981;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52981;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52981;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52981;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52981;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5596:52981;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5596:52981;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-background-tinted-8">
                                <div data-figma-node="I5596:52981;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5596:52981;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5596:52981;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5596:52981;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative overflow-hidden rounded-[4px]" />
                                    </div>
                                    <p data-figma-node="I5596:52981;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5596:52981;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5596:52981;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52981;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5596:52981;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5596:52981;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5596:52981;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                                      <p data-figma-node="I5596:52981;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-text-dark">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-figma-node="5602:71473" data-figma-component="5217:13666" className="box-border w-[373px] h-[42px] absolute left-[742px] top-[333px] [--fx:742] [--fww:373] rounded-[0px_6px_6px_0px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] flex flex-row items-start gap-1">
                <div data-figma-node="I5602:71473;5217:13667" className="box-border w-full min-w-0 h-full min-h-0 rounded-[0px_8px_8px_0px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#2a9d8f] border-[1px] bg-background-tinted-2">
                  <div data-figma-node="I5602:71473;5217:13668" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                    <div data-figma-node="I5602:71473;5725:67326" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                      <div data-figma-node="I5602:71473;5725:67327" data-figma-component="5121:8558" className="box-border w-[14px] h-[14px] overflow-hidden relative">
                        <svg data-figma-node="I5602:71473;5725:67327;403:404" viewBox="0 0 11.67 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[14px] absolute left-[1px] top-[0px] [--fx:1] [--fww:12] pointer-events-none overflow-visible"><path d="M8.75 8.16668C8.75 8.32139 8.68854 8.46976 8.57915 8.57916C8.46975 8.68855 8.32138 8.75001 8.16667 8.75001L3.5 8.75001C3.34529 8.75001 3.19692 8.68855 3.08752 8.57916C2.97812 8.46976 2.91667 8.32139 2.91667 8.16668C2.91667 8.01197 2.97812 7.8636 3.08752 7.7542C3.19692 7.6448 3.34529 7.58335 3.5 7.58335L8.16667 7.58335C8.32138 7.58335 8.46975 7.6448 8.57915 7.7542C8.68854 7.8636 8.75 8.01197 8.75 8.16668ZM6.41667 9.91668L3.5 9.91668C3.34529 9.91668 3.19692 9.97814 3.08752 10.0875C2.97812 10.1969 2.91667 10.3453 2.91667 10.5C2.91667 10.6547 2.97812 10.8031 3.08752 10.9125C3.19692 11.0219 3.34529 11.0833 3.5 11.0833L6.41667 11.0833C6.57138 11.0833 6.71975 11.0219 6.82915 10.9125C6.93854 10.8031 7 10.6547 7 10.5C7 10.3453 6.93854 10.1969 6.82915 10.0875C6.71975 9.97814 6.57138 9.91668 6.41667 9.91668ZM11.6667 6.11626L11.6667 11.0833C11.6657 11.8566 11.3582 12.5979 10.8114 13.1447C10.2646 13.6915 9.52326 13.9991 8.75 14L2.91667 14C2.1434 13.9991 1.40208 13.6915 0.855295 13.1447C0.308514 12.5979 0.00092625 11.8566 0 11.0833L0 2.91668C0.00092625 2.14342 0.308514 1.40209 0.855295 0.855308C1.40208 0.308528 2.1434 0.000939695 2.91667 1.34451e-05L5.55042 1.34451e-05C6.08686 -0.00136726 6.61826 0.103606 7.11388 0.308865C7.6095 0.514123 8.05952 0.815594 8.43792 1.19585L10.4702 3.22935C10.8507 3.60749 11.1524 4.05736 11.3577 4.55292C11.5631 5.04847 11.6681 5.57984 11.6667 6.11626L11.6667 6.11626ZM7.61308 2.02068C7.4295 1.84286 7.22338 1.68989 7 1.56568L7 4.08335C7 4.23806 7.06146 4.38643 7.17085 4.49583C7.28025 4.60522 7.42862 4.66668 7.58333 4.66668L10.101 4.66668C9.97672 4.44337 9.82354 4.23743 9.64542 4.05418L7.61308 2.02068ZM10.5 6.11626C10.5 6.02001 10.4813 5.92785 10.4726 5.83335L7.58333 5.83335C7.1192 5.83335 6.67408 5.64897 6.3459 5.32078C6.01771 4.99259 5.83333 4.54748 5.83333 4.08335L5.83333 1.1941C5.73883 1.18535 5.64608 1.16668 5.55042 1.16668L2.91667 1.16668C2.45254 1.16668 2.00742 1.35105 1.67923 1.67924C1.35104 2.00743 1.16667 2.45255 1.16667 2.91668L1.16667 11.0833C1.16667 11.5475 1.35104 11.9926 1.67923 12.3208C2.00742 12.649 2.45254 12.8333 2.91667 12.8333L8.75 12.8333C9.21413 12.8333 9.65925 12.649 9.98744 12.3208C10.3156 11.9926 10.5 11.5475 10.5 11.0833L10.5 6.11626Z" fill="#2a9d8f" /></svg>
                      </div>
                      <p data-figma-node="I5602:71473;5725:67328" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-text-body-1">Great Prosser Balloon Rally</p>
                      <div data-figma-node="I5602:71473;5725:67329" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                        <svg data-figma-node="I5602:71473;5725:67330" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                        <svg data-figma-node="I5602:71473;5725:67331" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                        <svg data-figma-node="I5602:71473;5725:67332" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                      </div>
                    </div>
                    <div data-figma-node="I5602:71473;5217:13678" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                      <p data-figma-node="I5602:71473;5217:13679" className="box-border w-max max-w-[53px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-neutral-4">Sept 25 - 27</p>
                      <div data-figma-node="I5602:71473;5217:13680" className="box-border w-max max-w-[70px] h-[15px] rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-neutral-mid">
                        <p data-figma-node="I5602:71473;5217:13681" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-text-dark">$5,802.46</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </FigmaFrameShell>
      </main>
    </div>
  );
}
