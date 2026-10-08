/**
 * Luna generated page
 * Figma frame: 5645:60757
 * Page: annual-calendar-default
 * Route: /annual-calendar-default
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
import "./figma-fonts.css";
import "./figma-responsive.css";
import { FigmaFrameShell } from "./FigmaFrameShell";
import { useFigmaScreenData } from "./useFigmaScreenData";
import { AnnualCalendarDefaultProfileCardSection } from "./AnnualCalendarDefaultProfileCardSection";
import { figmaFieldProps, figmaActionProps } from "./useFigmaScreenData";
import { ChevronDown_a4db42af } from "./ChevronDown_a4db42af";
import { Default_7363b927 } from "./Default_7363b927";
import { Disabled_781e0828 } from "./Disabled_781e0828";
import { Event_cfebdf4e } from "./Event_cfebdf4e";
import { FiRrCrossSmall_aec28f27 } from "./FiRrCrossSmall_aec28f27";
import { FiRrDocument_718ff216 } from "./FiRrDocument_718ff216";
import { FiRrELearning_336860e7 } from "./FiRrELearning_336860e7";
import { FiRrEnvelope_edd5c8e7 } from "./FiRrEnvelope_edd5c8e7";
import { FiRrFilter_17dad1cf } from "./FiRrFilter_17dad1cf";
import { FiRrMegaphone_89c2c562 } from "./FiRrMegaphone_89c2c562";
import { FiRrTarget_6d6fca9a } from "./FiRrTarget_6d6fca9a";
import { FiRsPlusSmall_7eb9d5ec } from "./FiRsPlusSmall_7eb9d5ec";
import { MemoPencil_3c0293af } from "./MemoPencil_3c0293af";
import { Variant4_736d44f6 } from "./Variant4_736d44f6";
import { Variant5_91935847 } from "./Variant5_91935847";
import { Variant7_1369850e } from "./Variant7_1369850e";
import { RefreshCcwClock_22f0146d } from "./RefreshCcwClock_22f0146d";
import { FiRrDownload_e2f06a4e } from "./FiRrDownload_e2f06a4e";
import { getAccessToken } from "@/lib/auth/token-storage";
import { downloadMarketingTeamMemberCalendarExport } from "@/lib/api/marketing-team-member-export-calendar";

export function AnnualCalendarDefaultPage() {
  const screenData = useFigmaScreenData();
  const handleExportPdf = (): void => {
    void downloadMarketingTeamMemberCalendarExport(getAccessToken()).catch(() => {
      /* status surfaced by API layer / provider */
    });
  };
  return (
    <div
      data-figma-bound={screenData.bound}
      data-figma-frame="5645:60757"
      className="relative flex w-full flex-col"
      style={{ backgroundColor: "#fff9f3" }}
    >
      <main className="relative z-10 flex w-full flex-col">
        <FigmaFrameShell frameWidth={1440} frameHeight={937} nodeId="frame">
        <AnnualCalendarDefaultProfileCardSection />
        <div className="pointer-events-none absolute inset-0 z-[0]">
          <div data-figma-node="5645:60758" data-figma-component="5273:20995" className="pointer-events-auto box-border w-full min-w-0 h-[80px] absolute left-[0px] top-[0px] [--fx:0] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.059)] flex flex-row items-center justify-between bg-[#ffffff]">
            <div data-figma-node="I5645:60758;5217:13714" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-[30px]">
              <div data-figma-node="I5645:60758;5217:13715" className="box-border w-max max-w-[282px] h-[50px] relative flex flex-row items-center gap-3">
                <img data-figma-node="I5645:60758;5217:13716" src="/assets/figma/I5645-60758-5217-13716.png" alt="image 2" className="box-border w-[54px] h-[50px] rounded-[10px] max-w-none object-cover object-top" />
                <div data-figma-node="I5645:60758;5217:13717" className="box-border w-max max-w-[216px] h-[43px] relative flex flex-col items-start gap-0.5">
                  <p data-figma-node="I5645:60758;5217:13718" className="box-border w-max max-w-[216px] h-auto min-h-[27px] font-inter text-[22px] font-[800] leading-[27px] text-left whitespace-nowrap text-[#231f20]">Marketing Calendar </p>
                  <p data-figma-node="I5645:60758;5217:13719" className="box-border w-max max-w-[171px] h-auto min-h-[14px] font-onest text-[11px] font-[600] leading-[14px] text-left whitespace-nowrap text-[#686868]">Plan · Create · Track · Grow</p>
                </div>
              </div>
            </div>
            <div data-figma-node="I5645:60758;5217:13733" className="box-border w-max max-w-[434px] h-[40px] relative flex flex-row items-center gap-4">
              <button data-figma-node="I5645:60758;5217:13742" type="button" data-figma-action="act_580733380960" {...figmaActionProps("act_580733380960")} className="box-border w-max max-w-[208px] h-[40px] rounded-[6px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-[#faf3e8] hover:opacity-90 cursor-pointer gap-2"><RefreshCcwClock_22f0146d data-figma-node="I5645:60758;5217:13743" data-figma-component="5111:8203" className="relative overflow-hidden rounded-[4px]" /><span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-[#a21d35] whitespace-nowrap">Historical View</span></button>
              <button data-figma-node="I5645:60758;5217:13746" type="button" data-figma-action="act_calendar_export_pdf" onClick={handleExportPdf} className="box-border w-max max-w-[138px] h-[40px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-[#f2f1dd] hover:opacity-90 cursor-pointer gap-2"><FiRrDownload_e2f06a4e data-figma-node="I5645:60758;5217:13747" data-figma-component="5121:8564" className="relative overflow-hidden rounded-[4px]" />
<span className="font-onest text-[13px] font-[700] leading-[17px] text-left whitespace-nowrap text-[#231f20] whitespace-nowrap">Export PDF</span></button>
              <button data-figma-node="I5645:60758;5217:13749" type="button" data-figma-action="act_1c12087c7323" {...figmaActionProps("act_1c12087c7323")} className="box-border w-max max-w-[56px] h-[32px] relative flex flex-row items-center gap-2 cursor-pointer block">
                <div data-figma-node="I5645:60758;5217:13750" data-figma-component="5111:12456" className="box-border w-[32px] h-[32px] rounded-[32px] relative flex flex-row items-start gap-2" style={{backgroundColor: "rgba(0, 0, 0, 0.25)"}}>
                  <img data-figma-node="I5645:60758;5217:13750;1002:172586" src="/assets/figma/I5645-60758-5217-13750-1002-172586.png" alt="Image" className="box-border w-[32px] h-[32px] rounded-[32px] max-w-none object-cover object-top" />
                </div>
                <ChevronDown_a4db42af data-figma-node="I5645:60758;5217:13752" data-figma-component="5111:6287" className="relative overflow-hidden rounded-[4px]" />
              </button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[4]">
          <div data-figma-node="5645:65073" className="pointer-events-auto box-border w-[1440px] h-[954px] absolute left-[0px] top-[0px] [--fx:0] [--fww:1440] flex flex-row items-center justify-center pt-[104px] pr-[460px] pb-[104px] pl-[460px]" style={{backgroundColor: "rgba(26, 32, 44, 0.584)"}}>
            <div data-figma-node="5645:65074" className="box-border w-[520px] h-[745px] rounded-[12px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)] relative flex flex-col items-start gap-6 pt-[24px] pr-[24px] pb-[24px] pl-[24px] bg-[#ffffff]">
              <div data-figma-node="5645:65075" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between">
                <div data-figma-node="5645:65076" className="box-border w-max max-w-[185px] h-[24px] relative flex flex-row items-center gap-2">
                  <div data-figma-node="5645:65077" data-figma-component="5111:7679" className="box-border w-[24px] h-[24px] overflow-hidden relative">
                    <svg data-figma-node="I5645:65077;5111:7680" viewBox="0 0 18.78 18.27" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[19px] h-[18px] absolute left-[3px] top-[3px] [--fx:3] [--fww:19] pointer-events-none overflow-visible"><path d="M5 7.27106C5.55228 7.27106 6 6.82334 6 6.27106C6 5.71877 5.55228 5.27106 5 5.27106L5 6.27106L5 7.27106ZM18.987 9.27106C18.987 8.71877 18.5393 8.27106 17.987 8.27106C17.4347 8.27106 16.987 8.71877 16.987 9.27106L17.987 9.27106L18.987 9.27106ZM1.09202 18.0531L1.54601 17.1621L1.54601 17.1621L1.09202 18.0531ZM0.217987 17.179L1.10899 16.725L1.10899 16.725L0.217987 17.179ZM16.895 18.0531L17.3489 18.9441L17.3489 18.9441L16.895 18.0531ZM17.769 17.179L16.878 16.725L16.878 16.725L17.769 17.179ZM0.217987 7.36307L-0.67302 6.90908L-0.67302 6.90908L0.217987 7.36307ZM1.09202 6.48904L0.638029 5.59804L0.638028 5.59804L1.09202 6.48904ZM3 11.2711C2.44772 11.2711 2 11.7188 2 12.2711C2 12.8233 2.44772 13.2711 3 13.2711L3 12.2711L3 11.2711ZM3.01 13.2711C3.56228 13.2711 4.01 12.8233 4.01 12.2711C4.01 11.7188 3.56228 11.2711 3.01 11.2711L3.01 12.2711L3.01 13.2711ZM8.51893 10.1656L7.54547 9.93671C7.46768 10.2676 7.56328 10.6153 7.79928 10.8599C8.03528 11.1045 8.37936 11.2125 8.7128 11.1466L8.51893 10.1656ZM10.5416 5.75188L9.83453 5.04477L9.83453 5.04477L10.5416 5.75188ZM9.6294 6.74221L10.4438 7.32247L9.6294 6.74221ZM8.83697 8.81271L7.86351 8.58386L7.86351 8.58386L8.83697 8.81271ZM9.1986 7.51572L10.1207 7.90261L10.1207 7.90261L9.1986 7.51572ZM13.1184 8.15265L12.4113 7.44554L13.1184 8.15265ZM12.06 9.12262L11.4885 8.30201L12.06 9.12262ZM9.83371 9.90574L10.0276 10.8868L10.0276 10.8868L9.83371 9.90574ZM11.2287 9.56629L11.5923 10.4978L11.2287 9.56629ZM18.2668 3.00421L18.974 3.71132L18.2668 3.00421ZM15.7781 0.515442L16.4852 1.22255L16.4852 1.22255L15.7781 0.515442ZM7 11.271C6.44772 11.271 6 11.7187 6 12.271C6 12.8233 6.44772 13.271 7 13.271L7 12.271L7 11.271ZM7.01 13.271C7.56228 13.271 8.01 12.8233 8.01 12.271C8.01 11.7187 7.56228 11.271 7.01 11.271L7.01 12.271L7.01 13.271ZM14.787 18.2711L14.787 17.2711L3.2 17.2711L3.2 18.2711L3.2 19.2711L14.787 19.2711L14.787 18.2711ZM0 15.0711L1 15.0711L1 9.47106L0 9.47106L-1 9.47106L-1 15.0711L0 15.0711ZM3.2 6.27106L3.2 7.27106L5 7.27106L5 6.27106L5 5.27106L3.2 5.27106L3.2 6.27106ZM17.987 9.27106L16.987 9.27106L16.987 15.0711L17.987 15.0711L18.987 15.0711L18.987 9.27106L17.987 9.27106ZM3.2 18.2711L3.2 17.2711C2.62344 17.2711 2.25117 17.2703 1.96784 17.2471C1.69617 17.2249 1.59545 17.1873 1.54601 17.1621L1.09202 18.0531L0.638028 18.9441C1.01641 19.1369 1.40963 19.2082 1.80497 19.2405C2.18864 19.2718 2.65645 19.2711 3.2 19.2711L3.2 18.2711ZM0 15.0711L-1 15.0711C-1 15.6146 -1.00078 16.0824 -0.969431 16.4661C-0.93713 16.8614 -0.865814 17.2546 -0.673019 17.633L0.217987 17.179L1.10899 16.725C1.0838 16.6756 1.04612 16.5749 1.02393 16.3032C1.00078 16.0199 1 15.6476 1 15.0711L0 15.0711ZM1.09202 18.0531L1.54601 17.1621C1.35785 17.0662 1.20487 16.9132 1.10899 16.725L0.217987 17.179L-0.67302 17.633C-0.385399 18.1975 0.0735437 18.6565 0.638028 18.9441L1.09202 18.0531ZM14.787 18.2711L14.787 19.2711C15.3305 19.2711 15.7983 19.2718 16.182 19.2405C16.5773 19.2082 16.9706 19.1369 17.3489 18.9441L16.895 18.0531L16.441 17.1621C16.3915 17.1873 16.2908 17.2249 16.0191 17.2471C15.7358 17.2703 15.3635 17.2711 14.787 17.2711L14.787 18.2711ZM17.987 15.0711L16.987 15.0711C16.987 15.6476 16.9862 16.0199 16.963 16.3032C16.9409 16.5749 16.9032 16.6756 16.878 16.725L17.769 17.179L18.66 17.633C18.8528 17.2546 18.9241 16.8614 18.9564 16.4661C18.9878 16.0824 18.987 15.6146 18.987 15.0711L17.987 15.0711ZM16.895 18.0531L17.3489 18.9441C17.9134 18.6565 18.3724 18.1975 18.66 17.633L17.769 17.179L16.878 16.725C16.7821 16.9132 16.6291 17.0662 16.441 17.1621L16.895 18.0531ZM0 9.47106L1 9.47106C1 8.8945 1.00078 8.52223 1.02393 8.23889C1.04612 7.96723 1.0838 7.86651 1.10899 7.81707L0.217987 7.36307L-0.67302 6.90908C-0.865814 7.28746 -0.93713 7.68068 -0.969431 8.07603C-1.00078 8.4597 -1 8.9275 -1 9.47106L0 9.47106ZM3.2 6.27106L3.2 5.27106C2.65645 5.27106 2.18864 5.27028 1.80497 5.30163C1.40963 5.33393 1.01641 5.40524 0.638029 5.59804L1.09202 6.48904L1.54601 7.38005C1.59545 7.35486 1.69617 7.31718 1.96784 7.29498C2.25117 7.27183 2.62345 7.27106 3.2 7.27106L3.2 6.27106ZM0.217987 7.36307L1.10899 7.81707C1.20487 7.6289 1.35785 7.47592 1.54601 7.38005L1.09202 6.48904L0.638028 5.59804C0.0735422 5.88566 -0.385399 6.3446 -0.67302 6.90908L0.217987 7.36307ZM3 12.2711L3 13.2711L3.01 13.2711L3.01 12.2711L3.01 11.2711L3 11.2711L3 12.2711ZM18.2668 3.00421L17.5597 2.2971L12.4113 7.44554L13.1184 8.15265L13.8255 8.85975L18.974 3.71132L18.2668 3.00421ZM10.5416 5.75188L11.2487 6.45898L16.4852 1.22255L15.7781 0.515442L15.071 -0.191665L9.83453 5.04477L10.5416 5.75188ZM9.83371 9.90574L9.63984 8.92471L8.32506 9.18454L8.51893 10.1656L8.7128 11.1466L10.0276 10.8868L9.83371 9.90574ZM8.51893 10.1656L9.49239 10.3944L9.81043 9.04156L8.83697 8.81271L7.86351 8.58386L7.54547 9.93671L8.51893 10.1656ZM10.5416 5.75188L9.83453 5.04477C9.37821 5.50109 9.06794 5.80688 8.81496 6.16195L9.6294 6.74221L10.4438 7.32247C10.5778 7.13437 10.7467 6.96099 11.2487 6.45898L10.5416 5.75188ZM8.83697 8.81271L9.81043 9.04156C9.9729 8.35046 10.0314 8.11558 10.1207 7.90261L9.1986 7.51572L8.27647 7.12884C8.1078 7.53087 8.0112 7.95565 7.86351 8.58386L8.83697 8.81271ZM9.6294 6.74221L8.81496 6.16195C8.60024 6.46333 8.41964 6.78761 8.27647 7.12884L9.1986 7.51572L10.1207 7.90261C10.2066 7.69787 10.315 7.5033 10.4438 7.32247L9.6294 6.74221ZM13.1184 8.15265L12.4113 7.44554C11.8755 7.98134 11.6903 8.16148 11.4885 8.30201L12.06 9.12262L12.6314 9.94324C13.0125 9.6779 13.3386 9.34667 13.8255 8.85975L13.1184 8.15265ZM9.83371 9.90574L10.0276 10.8868C10.7031 10.7533 11.1598 10.6667 11.5923 10.4978L11.2287 9.56629L10.865 8.63476C10.6359 8.72419 10.3832 8.7778 9.63983 8.92471L9.83371 9.90574ZM12.06 9.12262L11.4885 8.30201C11.2945 8.4371 11.0852 8.5488 10.865 8.63476L11.2287 9.56629L11.5923 10.4978C11.9593 10.3545 12.3081 10.1684 12.6314 9.94324L12.06 9.12262ZM18.2668 0.515441L17.5597 1.22255C17.8565 1.51928 17.8565 2.00037 17.5597 2.2971L18.2668 3.00421L18.974 3.71132C20.0517 2.63354 20.0517 0.886113 18.974 -0.191666L18.2668 0.515441ZM18.2668 0.515441L18.974 -0.191666C17.8962 -1.26945 16.1487 -1.26944 15.071 -0.191665L15.7781 0.515442L16.4852 1.22255C16.7819 0.925817 17.263 0.925818 17.5597 1.22255L18.2668 0.515441ZM7 12.271L7 13.271L7.01 13.271L7.01 12.271L7.01 11.271L7 11.271L7 12.271Z" fill="#a21d35" /></svg>
                  </div>
                  <p data-figma-node="5645:65078" className="box-border w-max max-w-[153px] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-[#231f20]">Schedule Activity</p>
                </div>
                <div data-figma-node="5645:65079" className="box-border w-max max-w-[32px] h-[32px] relative flex flex-row items-center gap-3">
                  <button data-figma-node="5645:65080" type="button" data-figma-action="act_32d7a8c36c56" {...figmaActionProps("act_32d7a8c36c56")} className="box-border w-max max-w-[32px] h-[32px] rounded-[6px] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-[#fff9f3] cursor-pointer block">
                    <div data-figma-node="5645:65081" data-figma-component="5121:8491" className="box-border w-[24px] h-[24px] overflow-hidden relative">
                      <svg data-figma-node="I5645:65081;403:359" viewBox="0 0 12.59 12.59" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[13px] h-[13px] absolute left-[6px] top-[6px] [--fx:6] [--fww:13] pointer-events-none overflow-visible"><path d="M12.2928 0.292787C12.1053 0.105316 11.851 0 11.5858 0C11.3206 0 11.0663 0.105316 10.8788 0.292787L6.29279 4.87879L1.70679 0.292787C1.51926 0.105316 1.26495 0 0.999786 0C0.734622 0 0.480314 0.105316 0.292787 0.292787C0.105316 0.480314 0 0.734622 0 0.999786C0 1.26495 0.105316 1.51926 0.292787 1.70679L4.87879 6.29279L0.292787 10.8788C0.105316 11.0663 8.88179e-16 11.3206 0 11.5858C8.88179e-16 11.851 0.105316 12.1053 0.292787 12.2928C0.480314 12.4803 0.734622 12.5856 0.999786 12.5856C1.26495 12.5856 1.51926 12.4803 1.70679 12.2928L6.29279 7.70679L10.8788 12.2928C11.0663 12.4803 11.3206 12.5856 11.5858 12.5856C11.851 12.5856 12.1053 12.4803 12.2928 12.2928C12.4803 12.1053 12.5856 11.851 12.5856 11.5858C12.5856 11.3206 12.4803 11.0663 12.2928 10.8788L7.70679 6.29279L12.2928 1.70679C12.4803 1.51926 12.5856 1.26495 12.5856 0.999786C12.5856 0.734622 12.4803 0.480314 12.2928 0.292787L12.2928 0.292787Z" fill="#231f20" /></svg>
                    </div>
                  </button>
                </div>
              </div>
              <p data-figma-node="5645:65082" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[400] leading-[20px] text-left whitespace-nowrap text-[#4b5563]">Choose the date for the copied activity. We suggested the same date one year later.</p>
              <div data-figma-node="5645:65083" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] relative flex flex-row items-center gap-2 pt-[12px] pr-[12px] pb-[12px] pl-[12px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                <div data-figma-node="5645:65084" className="box-border w-max max-w-[156px] h-[45px] relative flex flex-col items-start gap-0.5">
                  <div data-figma-node="5645:65085" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-[55px]">
                    <div data-figma-node="5645:65086" className="box-border w-max max-w-[44px] h-[13px] relative flex flex-row items-center gap-1">
                      <div data-figma-node="5645:65087" className="box-border w-[6px] h-[6px] rounded-[3px] relative block bg-[#a21d35]"></div>
                      <p data-figma-node="5645:65088" className="box-border w-max max-w-[34px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-[#a21d35]">Email</p>
                    </div>
                  </div>
                  <p data-figma-node="5645:65089" className="box-border w-max max-w-[156px] h-auto min-h-[15px] font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                  <p data-figma-node="5645:65090" className="box-border w-max max-w-[114px] h-auto min-h-[13px] font-onest text-[10px] font-[400] leading-[13px] text-left whitespace-nowrap text-[#686868]">Original Duration: 1 Days</p>
                </div>
              </div>
              <div data-figma-node="5645:65091" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] relative flex flex-col items-start gap-5 pt-[24px] pr-[24px] pb-[24px] pl-[24px] border-[#e5e7eb] border-[1px]">
                <div data-figma-node="5645:65092" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between">
                  <div data-figma-node="5645:65093" className="box-border w-[16px] h-[16px] overflow-hidden relative block">
                    <svg data-figma-node="5645:65094" viewBox="0 0 4 8" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[4px] h-[8px] absolute left-[6px] top-[4px] [--fx:6] [--fww:4] pointer-events-none overflow-visible"><path d="M3.29289 8.70711C3.68342 9.09763 4.31658 9.09763 4.70711 8.70711C5.09763 8.31658 5.09763 7.68342 4.70711 7.29289L4 8L3.29289 8.70711ZM0 4L-0.707107 3.29289L-1.41421 4L-0.707107 4.70711L0 4ZM4.70711 0.707107C5.09763 0.316583 5.09763 -0.316583 4.70711 -0.707107C4.31658 -1.09763 3.68342 -1.09763 3.29289 -0.707107L4 0L4.70711 0.707107ZM4 8L4.70711 7.29289L0.707107 3.29289L0 4L-0.707107 4.70711L3.29289 8.70711L4 8ZM0 4L0.707107 4.70711L4.70711 0.707107L4 0L3.29289 -0.707107L-0.707107 3.29289L0 4Z" fill="#111827" /></svg>
                  </div>
                  <p data-figma-node="5645:65095" className="box-border w-max max-w-[128px] h-auto min-h-[20px] font-onest text-[16px] font-[700] leading-[20px] text-left whitespace-nowrap text-[#111827]">September 2026</p>
                  <div data-figma-node="5645:65096" className="box-border w-[16px] h-[16px] overflow-hidden relative block">
                    <svg data-figma-node="5645:65097" viewBox="0 0 4 8" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[4px] h-[8px] absolute left-[6px] top-[4px] [--fx:6] [--fww:4] pointer-events-none overflow-visible"><path d="M-0.707107 7.29289C-1.09763 7.68342 -1.09763 8.31658 -0.707107 8.70711C-0.316583 9.09763 0.316583 9.09763 0.707107 8.70711L0 8L-0.707107 7.29289ZM4 4L4.70711 4.70711L5.41421 4L4.70711 3.29289L4 4ZM0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0 0L0.707107 -0.707107ZM0 8L0.707107 8.70711L4.70711 4.70711L4 4L3.29289 3.29289L-0.707107 7.29289L0 8ZM4 4L4.70711 3.29289L0.707107 -0.707107L0 0L-0.707107 0.707107L3.29289 4.70711L4 4Z" fill="#111827" /></svg>
                  </div>
                </div>
                <div data-figma-node="5645:65098" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-3">
                  <img data-figma-node="5645:65099" src="/assets/figma/5645-65099.png" alt="Week Header Row" className="box-border w-full min-w-0 h-full min-h-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65114" src="/assets/figma/5645-65114.png" alt="Week row 1" className="box-border w-full min-w-0 h-full min-h-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65129" src="/assets/figma/5645-65129.png" alt="Week row 2" className="box-border w-full min-w-0 h-full min-h-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65144" src="/assets/figma/5645-65144.png" alt="Week row 3" className="box-border w-full min-w-0 h-full min-h-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65159" src="/assets/figma/5645-65159.png" alt="Week row 4" className="box-border w-full min-w-0 h-full min-h-0 max-w-none object-cover object-top" />
                  <img data-figma-node="5645:65174" src="/assets/figma/5645-65174.png" alt="Week row 5" className="box-border w-full min-w-0 h-full min-h-0 max-w-none object-cover object-top" />
                </div>
              </div>
              <p data-figma-node="5645:65189" className="box-border w-full min-w-0 h-full min-h-0 font-inter text-[14px] font-[400] leading-[22px] text-left whitespace-nowrap text-[#111827]">Will be scheduled on Sunday, September 13, 2026 as a Draft.</p>
              <div data-figma-node="5645:65190" className="box-border w-full min-w-0 h-full min-h-0 bg-[#e2d9d0] h-px" />
              <div data-figma-node="5645:65191" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start justify-end gap-3">
                <button data-figma-node="5645:65192" type="button" data-figma-action="act_fc41c4406f0a" {...figmaActionProps("act_fc41c4406f0a")} className="box-border w-max max-w-[78px] h-[38px] rounded-[6px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-[#231f20] cursor-pointer"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#4a5568] whitespace-nowrap">Cancel</span></button>
                <button data-figma-node="5645:65194" type="button" data-figma-action="act_077ece4721f5" {...figmaActionProps("act_077ece4721f5")} className="box-border w-max max-w-[135px] h-[38px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap bg-[#a21d35] hover:opacity-90 cursor-pointer"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#ffffff] whitespace-nowrap">Paste Activity</span></button>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div data-figma-node="5645:60759" data-figma-component="5273:21161" className="pointer-events-auto box-border w-full min-w-0 h-[59px] absolute left-[0px] top-[80px] [--fx:0] flex flex-row items-center justify-between bg-[#faf3e8]">
            <div data-figma-node="I5645:60759;5273:21162" className="box-border w-[1400px] h-[29px] relative flex flex-row items-center justify-between gap-3">
              <div data-figma-node="I5645:60759;5273:21163" className="box-border w-[804px] h-[28px] overflow-hidden relative flex flex-row items-center gap-3">
                <p data-figma-node="I5645:60759;5273:21164" className="box-border w-max max-w-[116px] h-auto min-h-[28px] font-onest text-[22px] font-[700] leading-[28px] text-left whitespace-nowrap text-[#231f20]">2025-2026</p>
                <div data-figma-node="I5645:60759;5273:21195" data-figma-component="5121:8078" className="box-border w-[24px] h-[24px] overflow-hidden relative">
                  <svg data-figma-node="I5645:60759;5273:21195;403:52" viewBox="0 0 14 7.17" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[14px] h-[7px] absolute left-[5px] top-[8px] [--fx:5] [--fww:14] pointer-events-none overflow-visible"><path d="M13.7108 0.295798C13.6178 0.202069 13.5072 0.127675 13.3854 0.0769065C13.2635 0.026138 13.1328 0 13.0008 0C12.8688 0 12.7381 0.026138 12.6162 0.0769065C12.4944 0.127675 12.3838 0.202069 12.2908 0.295798L7.71079 4.87579C7.61783 4.96952 7.50723 5.04391 7.38537 5.09468C7.26351 5.14545 7.13281 5.17159 7.00079 5.17159C6.86878 5.17159 6.73808 5.14545 6.61622 5.09468C6.49436 5.04391 6.38376 4.96952 6.29079 4.87579L1.71079 0.295798C1.61783 0.202069 1.50723 0.127675 1.38537 0.0769065C1.26351 0.026138 1.1328 0 1.00079 0C0.868781 0 0.738075 0.026138 0.616216 0.0769065C0.494357 0.127675 0.383756 0.202069 0.290792 0.295798C0.104542 0.48316 8.88179e-16 0.736611 0 1.0008C8.88179e-16 1.26498 0.104542 1.51843 0.290792 1.70579L4.88079 6.29579C5.44329 6.85759 6.20579 7.17314 7.00079 7.17314C7.7958 7.17314 8.55829 6.85759 9.12079 6.29579L13.7108 1.70579C13.897 1.51843 14.0016 1.26498 14.0016 1.0008C14.0016 0.736611 13.897 0.48316 13.7108 0.295798L13.7108 0.295798Z" fill="#374957" /></svg>
                </div>
              </div>
              <div data-figma-node="I5645:60759;5528:40185" className="box-border w-max max-w-[575px] h-[29px] relative flex flex-row items-center gap-5">
                <div data-figma-node="I5645:60759;5503:25941" className="box-border w-max max-w-[526px] h-[29px] relative flex flex-row items-center gap-2.5">
                  <div data-figma-node="I5645:60759;5273:21172" className="box-border w-max max-w-[114px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                    <FiRrMegaphone_89c2c562 data-figma-node="I5645:60759;5273:21173" data-figma-component="5121:9035" className="relative" />
                    <p data-figma-node="I5645:60759;5273:21174" className="box-border w-max max-w-[70px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#231f20]">Promotions</p>
                  </div>
                  <div data-figma-node="I5645:60759;5273:21175" className="box-border w-max max-w-[95px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                    <FiRrDocument_718ff216 data-figma-node="I5645:60759;5273:21176" data-figma-component="5121:8558" className="relative" />
                    <p data-figma-node="I5645:60759;5273:21177" className="box-border w-max max-w-[51px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#231f20]">Content</p>
                  </div>
                  <div data-figma-node="I5645:60759;5273:21178" className="box-border w-max max-w-[95px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-[#ffffff]">
                    <FiRrTarget_6d6fca9a data-figma-node="I5645:60759;5273:21179" data-figma-component="5121:9541" className="relative" />
                    <p data-figma-node="I5645:60759;5273:21180" className="box-border w-max max-w-[51px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#a21d35]">Focuses</p>
                  </div>
                  <div data-figma-node="I5645:60759;5273:21181" className="box-border w-[1px] h-[20px] relative block bg-[#e2d9d0]"></div>
                  <div data-figma-node="I5645:60759;5621:25566" className="box-border w-max max-w-[93px] h-[27px] rounded-[6px] relative flex flex-row items-center gap-1.5 pt-[6px] pr-[12px] pb-[6px] pl-[12px] bg-[#d5ba8c]">
                    <FiRrFilter_17dad1cf data-figma-node="I5645:60759;5621:25623" data-figma-component="5121:8683" className="relative" />
                    <p data-figma-node="I5645:60759;5621:25568" className="box-border w-max max-w-[49px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#000000]">Filters</p>
                  </div>
                  <div data-figma-node="I5645:60759;5273:21182" className="box-border w-max max-w-[78px] h-[29px] rounded-[6px] relative flex flex-row items-center gap-1 pt-[6px] pr-[10px] pb-[6px] pl-[10px] border-[#e2d9d0] border-[1px] bg-[#e2d9d0]">
                    <FiRrCrossSmall_aec28f27 data-figma-node="I5645:60759;5503:25867" data-figma-component="5121:8491" className="relative" />
                    <p data-figma-node="I5645:60759;5273:21184" className="box-border w-max max-w-[40px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Clear</p>
                  </div>
                </div>
                <div data-figma-node="I5645:60759;5528:39891" className="box-border w-[29px] h-[29px] rounded-[6px] relative flex flex-row items-center justify-center pt-[6px] pr-[6px] pb-[6px] pl-[6px] border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                  <MemoPencil_3c0293af data-figma-node="I5645:60759;5528:39892" data-figma-component="5111:10773" className="relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-[2]">
          <div data-figma-node="5645:60760" data-figma-component="5645:47545" className="pointer-events-auto box-border w-full min-w-0 h-[798px] absolute left-[0px] top-[139px] [--fx:0] flex flex-col items-start">
            <div data-figma-node="I5645:60760;5584:26949" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between pt-[10px] pr-[24px] pb-[10px] pl-[24px] bg-[#a21d35]">
              <p data-figma-node="I5645:60760;5584:26950" className="box-border w-max max-w-[914px] h-auto min-h-[18px] font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#ffffff]">Month-by-month comparison · Review 2026 beside 2025;  Pick a date from last year and then grab a date from this year to paste event.</p>
              <p data-figma-node="I5645:60760;5584:26951" className="box-border w-max max-w-[38px] h-auto min-h-[18px] font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-[#ffffff]">Close</p>
            </div>
            <div data-figma-node="I5645:60760;5584:35544" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-5 pt-[20px] pb-[40px]">
              <div data-figma-node="I5645:60760;5589:52807" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start">
                <div data-figma-node="I5645:60760;5589:52794" className="box-border w-full min-w-0 h-full min-h-0 rounded-[10px_10px_0px_0px] relative flex flex-row items-center justify-between pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px] bg-[#ffffff]">
                  <div data-figma-node="I5645:60760;5589:52795" className="box-border w-max max-w-[263px] h-[23px] relative flex flex-row items-center gap-2.5">
                    <div data-figma-node="I5645:60760;5589:52796" className="box-border w-max max-w-[144px] h-[23px] relative flex flex-row items-center gap-3">
                      <p data-figma-node="I5645:60760;5589:52798" className="box-border w-max max-w-[144px] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-[#231f20]">September 2025</p>
                    </div>
                    <div data-figma-node="I5645:60760;5589:52800" className="box-border w-max max-w-[109px] h-[21px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px]">
                      <p data-figma-node="I5645:60760;5589:52801" className="box-border w-max max-w-[89px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-[#718096]">Previous Year</p>
                    </div>
                  </div>
                  <div data-figma-node="I5645:60760;5589:52802" className="box-border w-max max-w-[130px] h-[30px] rounded-[100px] relative flex flex-row items-center gap-1.5 pt-[4px] pr-[16px] pb-[4px] pl-[16px] border-[#d5ba8c] border-[1px] bg-[#fef3c7]">
                    <p data-figma-node="I5645:60760;5589:52803" className="box-border w-max max-w-[78px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-[#000000]">84 activities</p>
                    <div data-figma-node="I5645:60760;5589:52804" data-figma-component="5121:8464" className="box-border w-[14px] h-[14px] overflow-hidden relative">
                      <svg data-figma-node="I5645:60760;5589:52804;403:340" viewBox="0 0 11.67 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[14px] absolute left-[1px] top-[0px] [--fx:1] [--fww:12] pointer-events-none overflow-visible"><path d="M6.41667 11.6667C7.18993 11.6658 7.93126 11.3582 8.47804 10.8114C9.02482 10.2646 9.33241 9.52327 9.33333 8.75001L9.33333 3.64176C9.33424 3.33514 9.27428 3.03138 9.15692 2.7481C9.03957 2.46483 8.86715 2.20766 8.64967 1.99151L7.34183 0.683677C7.12568 0.466195 6.86852 0.293778 6.58524 0.176422C6.30196 0.0590653 5.99821 -0.000897138 5.69158 1.01439e-05L2.91667 1.01439e-05C2.1434 0.000936394 1.40208 0.308525 0.855295 0.855305C0.308515 1.40209 0.00092625 2.14341 0 2.91668L0 8.75001C0.00092625 9.52327 0.308515 10.2646 0.855295 10.8114C1.40208 11.3582 2.1434 11.6658 2.91667 11.6667L6.41667 11.6667ZM1.16667 8.75001L1.16667 2.91668C1.16667 2.45255 1.35104 2.00743 1.67923 1.67924C2.00742 1.35105 2.45254 1.16668 2.91667 1.16668C2.91667 1.16668 5.78608 1.17484 5.83333 1.18068L5.83333 2.33334C5.83333 2.64276 5.95625 2.93951 6.17504 3.1583C6.39384 3.37709 6.69058 3.50001 7 3.50001L8.15267 3.50001C8.1585 3.54726 8.16667 8.75001 8.16667 8.75001C8.16667 9.21414 7.98229 9.65926 7.6541 9.98745C7.32592 10.3156 6.8808 10.5 6.41667 10.5L2.91667 10.5C2.45254 10.5 2.00742 10.3156 1.67923 9.98745C1.35104 9.65926 1.16667 9.21414 1.16667 8.75001L1.16667 8.75001ZM11.6667 4.66668L11.6667 11.0833C11.6657 11.8566 11.3582 12.5979 10.8114 13.1447C10.2646 13.6915 9.52326 13.9991 8.75 14L3.5 14C3.34529 14 3.19692 13.9386 3.08752 13.8292C2.97813 13.7198 2.91667 13.5714 2.91667 13.4167C2.91667 13.262 2.97813 13.1136 3.08752 13.0042C3.19692 12.8948 3.34529 12.8333 3.5 12.8333L8.75 12.8333C9.21413 12.8333 9.65925 12.649 9.98744 12.3208C10.3156 11.9926 10.5 11.5475 10.5 11.0833L10.5 4.66668C10.5 4.51197 10.5615 4.36359 10.6709 4.2542C10.7803 4.1448 10.9286 4.08334 11.0833 4.08334C11.238 4.08334 11.3864 4.1448 11.4958 4.2542C11.6052 4.36359 11.6667 4.51197 11.6667 4.66668Z" fill="#374957" /></svg>
                    </div>
                  </div>
                </div>
                <div data-figma-node="I5645:60760;5584:41409" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start">
                  <div data-figma-node="I5645:60760;5584:41410" className="box-border w-[16px] h-[635px] overflow-hidden rounded-[0px_0px_0px_10px] relative flex flex-col items-start">
                    <div data-figma-node="I5645:60760;5589:52227" className="box-border w-[32px] h-[35px] relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px] border-[#e5e7eb] border-[1px] bg-[#f9fafb]"></div>
                    <div data-figma-node="I5645:60760;5589:52230" className="box-border w-max max-w-[16px] h-[600px] relative flex flex-row items-start">
                      <div data-figma-node="I5645:60760;5584:41419" className="box-border w-max max-w-[16px] h-[600px] relative flex flex-col items-start">
                        <div data-figma-node="I5645:60760;5584:41420" className="box-border w-[16px] h-[180px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-[#da002f]">
                          <div data-figma-node="I5645:60760;5584:41421" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                            <svg data-figma-node="I5645:60760;5584:41422" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="I5645:60760;5584:41423" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="I5645:60760;5584:41424" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          </div>
                          <div data-figma-node="I5645:60760;5584:41425" className="box-border w-max max-w-[14px] h-[132px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="I5645:60760;5584:41426" className="box-border w-max max-w-[14px] h-auto min-h-[50px] font-onest text-[11px] font-[500] leading-[14px] text-left text-[#ffffff]">Sep 1 - 13</p>
                            <p data-figma-node="I5645:60760;5584:41427" className="box-border w-max max-w-[14px] h-auto min-h-[75px] font-onest text-[11px] font-[700] leading-[14px] text-left text-[#ffffff]">Cherry ha...</p>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5584:41428" className="box-border w-[16px] h-[420px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-[#f1b743]">
                          <div data-figma-node="I5645:60760;5584:41429" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                            <svg data-figma-node="I5645:60760;5584:41430" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="I5645:60760;5584:41431" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="I5645:60760;5584:41432" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          </div>
                          <div data-figma-node="I5645:60760;5584:41433" className="box-border w-max max-w-[14px] h-[324px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="I5645:60760;5584:41434" className="box-border w-max max-w-[14px] h-auto min-h-[61px] font-onest text-[11px] font-[500] leading-[14px] text-left text-[#ffffff]">Sep 14 - 30</p>
                            <p data-figma-node="I5645:60760;5584:41435" className="box-border w-max max-w-[14px] h-auto min-h-[68px] font-onest text-[11px] font-[700] leading-[14px] text-left text-[#ffffff]">World Cup</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-figma-node="I5645:60760;5584:41436" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden rounded-[0px_0px_10px_0px] relative flex flex-col items-start border-[#e5e7eb] border-[1px] bg-[#ffffff]">
                    <div data-figma-node="I5645:60760;5584:41454" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e5e7eb] border-[1px] bg-[#f9fafb]">
                      <input data-figma-node="I5645:60760;5584:41457" name="mon" data-figma-field="mon" data-figma-field-origin="design_text" {...figmaFieldProps("mon")} type="text" placeholder="Mon" aria-label="Mon" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5584:41459" name="tue" data-figma-field="tue" data-figma-field-origin="design_text" {...figmaFieldProps("tue")} type="text" placeholder="Tue" aria-label="Tue" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5584:41461" name="wed" data-figma-field="wed" data-figma-field-origin="design_text" {...figmaFieldProps("wed")} type="text" placeholder="Wed" aria-label="Wed" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5584:41463" name="thu" data-figma-field="thu" data-figma-field-origin="design_text" {...figmaFieldProps("thu")} type="text" placeholder="Thu" aria-label="Thu" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5584:41465" name="fri" data-figma-field="fri" data-figma-field-origin="design_text" {...figmaFieldProps("fri")} type="text" placeholder="Fri" aria-label="Fri" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5584:41467" name="sat" data-figma-field="sat" data-figma-field-origin="design_text" {...figmaFieldProps("sat")} type="text" placeholder="Sat" aria-label="Sat" className="box-border w-full min-w-0 h-full min-h-0 shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <div data-figma-node="I5645:60760;5584:41469" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px]">
                        <p data-figma-node="I5645:60760;5584:41470" className="box-border w-max max-w-[26px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#9ca3af]">Sun</p>
                      </div>
                    </div>
                    <div data-figma-node="I5645:60760;5584:41471" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start">
                      <div data-figma-node="I5645:60760;5584:41503" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e5e7eb] border-[1px] bg-[#ffffff]">
                        <div data-figma-node="I5645:60760;5589:50448" data-figma-component="5556:77475" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5645:60760;5589:50448;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50448;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50448;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">1</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:50448;5725:104713" src="/assets/figma/I5645-60760-5589-50448-5725-104713.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:50506" data-figma-component="5556:77475" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5645:60760;5589:50506;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50506;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50506;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">2</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:50506;5725:104713" src="/assets/figma/I5645-60760-5589-50506-5725-104713.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:50564" data-figma-component="5556:77475" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5645:60760;5589:50564;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50564;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50564;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:50564;5725:104713" src="/assets/figma/I5645-60760-5589-50564-5725-104713.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:50622" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:50622;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50622;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50622;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">4</p>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50622;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5645:60760;5589:50622;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5645:60760;5589:50622;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5645:60760;5589:50622;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5645:60760;5589:50622;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5645:60760;5589:50622;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-[#fde8ed]">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5645:60760;5589:50622;5725:99928" data-figma-component="5121:7331" className="relative" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5645:60760;5589:50622;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <Variant4_736d44f6 data-figma-node="I5645:60760;5589:50622;5556:77452" data-figma-component="5217:10959" className="relative" />
                            <div data-figma-node="I5645:60760;5589:50622;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50622;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50622;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50622;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50622;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50622;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50622;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50622;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50622;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50622;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50622;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50622;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50622;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50622;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50622;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50622;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50622;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50622;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50622;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50622;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50622;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50622;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50622;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50622;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50622;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50622;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50622;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50622;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:50680" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:50680;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50680;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50680;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">5</p>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50680;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5645:60760;5589:50680;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5645:60760;5589:50680;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5645:60760;5589:50680;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5645:60760;5589:50680;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5645:60760;5589:50680;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-[#fde8ed]">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5645:60760;5589:50680;5725:99928" data-figma-component="5121:7331" className="relative" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5645:60760;5589:50680;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <Variant4_736d44f6 data-figma-node="I5645:60760;5589:50680;5556:77452" data-figma-component="5217:10959" className="relative" />
                            <div data-figma-node="I5645:60760;5589:50680;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50680;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50680;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50680;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50680;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50680;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50680;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50680;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50680;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50680;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50680;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50680;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50680;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50680;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50680;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50680;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50680;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50680;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50680;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50680;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50680;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50680;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50680;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50680;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50680;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50680;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50680;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50680;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:50738" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:50738;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50738;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50738;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">6</p>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50738;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5645:60760;5589:50738;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5645:60760;5589:50738;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5645:60760;5589:50738;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5645:60760;5589:50738;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5645:60760;5589:50738;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-[#fde8ed]">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5645:60760;5589:50738;5725:99928" data-figma-component="5121:7331" className="relative" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5645:60760;5589:50738;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <Variant4_736d44f6 data-figma-node="I5645:60760;5589:50738;5556:77452" data-figma-component="5217:10959" className="relative" />
                            <div data-figma-node="I5645:60760;5589:50738;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50738;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50738;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50738;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50738;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50738;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50738;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50738;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50738;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50738;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50738;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50738;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50738;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50738;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50738;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50738;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50738;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50738;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50738;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50738;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50738;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50738;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50738;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50738;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50738;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50738;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50738;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50738;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:50796" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:50796;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50796;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50796;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">7</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5589:50796;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5645:60760;5589:50796;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5645:60760;5589:50796;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5645:60760;5589:50796;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5645:60760;5589:50796;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5645:60760;5589:50796;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5645:60760;5589:50796;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-[#fde8ed]">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5645:60760;5589:50796;5725:99928" data-figma-component="5121:7331" className="relative" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5645:60760;5589:50796;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:50796;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50796;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50796;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50796;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50796;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50796;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50796;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50796;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50796;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50796;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50796;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50796;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50796;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50796;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50796;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50796;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50796;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50796;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50796;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50796;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50796;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50796;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50796;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50796;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50796;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50796;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50796;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50796;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50796;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50796;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50796;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50796;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50796;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50796;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50796;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50796;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50796;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50796;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50796;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50796;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50796;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50796;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5584:41516" className="box-border w-[408px] h-[73px] absolute left-[121px] top-[40px] [--fx:121] [--fww:408] rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] flex flex-row items-start gap-1"></div>
                      </div>
                      <div data-figma-node="I5645:60760;5584:41532" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                        <div data-figma-node="I5645:60760;5589:50854" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:50854;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50854;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50854;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">8</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:50854;5725:99922" src="/assets/figma/I5645-60760-5589-50854-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:50854;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:50854;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50854;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50854;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50854;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50854;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50854;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50854;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50854;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50854;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50854;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50854;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50854;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50854;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50854;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50854;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50854;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50854;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50854;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50854;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50854;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50854;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50854;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50854;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50854;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50854;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50854;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50854;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50854;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50854;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50854;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50854;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50854;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50854;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50854;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50854;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50854;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50854;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50854;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50854;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50854;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50854;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50854;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:50912" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:50912;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50912;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50912;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">9</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:50912;5725:99922" src="/assets/figma/I5645-60760-5589-50912-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:50912;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:50912;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50912;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50912;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50912;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50912;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50912;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50912;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50912;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50912;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50912;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50912;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50912;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50912;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50912;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50912;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50912;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50912;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50912;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50912;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50912;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50912;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50912;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50912;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50912;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50912;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50912;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50912;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50912;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50912;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50912;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50912;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50912;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50912;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50912;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50912;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50912;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50912;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50912;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50912;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50912;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50912;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50912;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:50970" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:50970;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:50970;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:50970;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">10</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:50970;5725:99922" src="/assets/figma/I5645-60760-5589-50970-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:50970;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:50970;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50970;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50970;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50970;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50970;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50970;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50970;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50970;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50970;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50970;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50970;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50970;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50970;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50970;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50970;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50970;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50970;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50970;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50970;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50970;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50970;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50970;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50970;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50970;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50970;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50970;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50970;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50970;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:50970;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:50970;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:50970;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:50970;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:50970;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:50970;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:50970;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:50970;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:50970;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50970;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:50970;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:50970;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:50970;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:50970;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51028" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51028;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51028;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51028;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">11</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5589:51028;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5589:51028;5725:99922" src="/assets/figma/I5645-60760-5589-51028-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51028;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51028;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51028;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51028;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51028;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51028;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51028;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51028;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51028;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51028;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51028;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51028;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51028;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51028;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51028;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51028;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51028;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51028;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51028;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51028;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51028;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51028;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51028;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51028;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51028;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51028;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51028;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51028;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51028;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51028;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51028;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51028;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51028;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51028;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51028;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51028;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51028;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51028;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51028;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51028;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51028;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51028;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51028;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51086" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51086;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51086;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51086;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">12</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51086;5725:99922" src="/assets/figma/I5645-60760-5589-51086-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51086;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51086;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51086;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51086;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51086;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51086;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51086;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51086;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51086;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51086;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51086;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51086;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51086;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51086;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51086;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51086;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51086;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51086;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51086;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51086;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51086;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51086;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51086;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51086;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51086;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51086;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51086;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51086;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51086;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51086;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51086;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51086;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51086;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51086;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51086;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51086;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51086;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51086;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51086;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51086;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51086;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51086;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51086;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51144" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51144;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51144;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51144;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">13</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5589:51144;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5589:51144;5725:99922" src="/assets/figma/I5645-60760-5589-51144-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51144;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51144;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51144;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51144;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51144;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51144;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51144;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51144;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51144;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51144;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51144;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51144;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51144;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51144;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51144;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51144;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51144;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51144;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51144;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51144;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51144;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51144;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51144;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51144;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51144;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51144;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51144;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51144;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51144;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51144;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51144;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51144;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51144;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51144;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51144;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51144;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51144;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51144;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51144;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51144;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51144;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51144;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51144;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51202" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51202;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51202;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51202;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">14</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51202;5725:99922" src="/assets/figma/I5645-60760-5589-51202-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51202;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51202;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51202;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51202;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51202;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51202;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51202;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51202;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51202;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51202;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51202;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51202;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51202;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51202;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51202;5556:77452;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51202;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51202;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51202;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51202;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51202;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51202;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51202;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51202;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51202;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51202;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51202;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51202;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51202;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51202;5589:48811;5217:10975" className="box-border w-max max-w-[42px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$4,983.12</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51202;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51202;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51202;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51202;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51202;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51202;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51202;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51202;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51202;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51202;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51202;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51202;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51202;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51202;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="I5645:60760;5589:51318" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                        <div data-figma-node="I5645:60760;5589:51322" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51322;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51322;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51322;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">15</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51322;5725:99922" src="/assets/figma/I5645-60760-5589-51322-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51322;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51322;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51322;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51322;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51322;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51322;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51322;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51322;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51322;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51322;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51322;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51322;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51322;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51322;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51322;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51322;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51322;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51322;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51322;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51322;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51322;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51322;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51322;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51322;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51322;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51322;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51322;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51322;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51322;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51322;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51322;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51322;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51322;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51322;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51322;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51322;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51322;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51322;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51322;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51322;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51322;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51322;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51322;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51323" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51323;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51323;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51323;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">16</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51323;5725:99922" src="/assets/figma/I5645-60760-5589-51323-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51323;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51323;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51323;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51323;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51323;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51323;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51323;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51323;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51323;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51323;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51323;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51323;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51323;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51323;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51323;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51323;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51323;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51323;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51323;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51323;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51323;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51323;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51323;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51323;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51323;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51323;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51323;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51323;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51323;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51323;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51323;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51323;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51323;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51323;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51323;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51323;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51323;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51323;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51323;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51323;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51323;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51323;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51323;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51324" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51324;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51324;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51324;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">17</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5589:51324;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5589:51324;5725:99922" src="/assets/figma/I5645-60760-5589-51324-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51324;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51324;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51324;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51324;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51324;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51324;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51324;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51324;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51324;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51324;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51324;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51324;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51324;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51324;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51324;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51324;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51324;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51324;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51324;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51324;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51324;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51324;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51324;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51324;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51324;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51324;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51324;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51324;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51324;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51324;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51324;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51324;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51324;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51324;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51324;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51324;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51324;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51324;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51324;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51324;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51324;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51324;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51324;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51325" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51325;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51325;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51325;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">18</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51325;5725:99922" src="/assets/figma/I5645-60760-5589-51325-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51325;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51325;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51325;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51325;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51325;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51325;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51325;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51325;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51325;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51325;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51325;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51325;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51325;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51325;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51325;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51325;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51325;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51325;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51325;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51325;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51325;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51325;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51325;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51325;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51325;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51325;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51325;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51325;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51325;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51325;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51325;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51325;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51325;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51325;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51325;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51325;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51325;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51325;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51325;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51325;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51325;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51325;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51325;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51326" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51326;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51326;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51326;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">19</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51326;5725:99922" src="/assets/figma/I5645-60760-5589-51326-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51326;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51326;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51326;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51326;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51326;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51326;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51326;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51326;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51326;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51326;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51326;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51326;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51326;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51326;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51326;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51326;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51326;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51326;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51326;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51326;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51326;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51326;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51326;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51326;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51326;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51326;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51326;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51326;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51326;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51326;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51326;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51326;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51326;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51326;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51326;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51326;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51326;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51326;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51326;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51326;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51326;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51326;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51326;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51327" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51327;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51327;5725:99918" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51327;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">20</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5589:51327;5725:99921" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5589:51327;5725:99922" src="/assets/figma/I5645-60760-5589-51327-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51327;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51327;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51327;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51327;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51327;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51327;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51327;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51327;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51327;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51327;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51327;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51327;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51327;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51327;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51327;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51327;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51327;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51327;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51327;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51327;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51327;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51327;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51327;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51327;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51327;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51327;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51327;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51327;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51327;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51327;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51327;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51327;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51327;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51327;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51327;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51327;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51327;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51327;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51327;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51327;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51327;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51327;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51327;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51328" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51328;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51328;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51328;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">21</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51328;5725:99922" src="/assets/figma/I5645-60760-5589-51328-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51328;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51328;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51328;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51328;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51328;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51328;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51328;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51328;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51328;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51328;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51328;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51328;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51328;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51328;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51328;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51328;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51328;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51328;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51328;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51328;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51328;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51328;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51328;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51328;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51328;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51328;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51328;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51328;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51328;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51328;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51328;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51328;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51328;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51328;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51328;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51328;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51328;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51328;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51328;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51328;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51328;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51328;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51328;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="I5645:60760;5589:51725" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                        <div data-figma-node="I5645:60760;5589:51729" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51729;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51729;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51729;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">22</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51729;5725:99922" src="/assets/figma/I5645-60760-5589-51729-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51729;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51729;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51729;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51729;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51729;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51729;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51729;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51729;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51729;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51729;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51729;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51729;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51729;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51729;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51729;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51729;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51729;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51729;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51729;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51729;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51729;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51729;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51729;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51729;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51729;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51729;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51729;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51729;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51729;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51729;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51729;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51729;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51729;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51729;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51729;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51729;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51729;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51729;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51729;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51729;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51729;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51729;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51729;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51730" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51730;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51730;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51730;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">23</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51730;5725:99922" src="/assets/figma/I5645-60760-5589-51730-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51730;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51730;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51730;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51730;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51730;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51730;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51730;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51730;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51730;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51730;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51730;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51730;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51730;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51730;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51730;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51730;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51730;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51730;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51730;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51730;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51730;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51730;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51730;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51730;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51730;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51730;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51730;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51730;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51730;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51730;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51730;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51730;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51730;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51730;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51730;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51730;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51730;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51730;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51730;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51730;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51730;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51730;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51730;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51731" data-figma-component="5556:77447" className="box-border w-[96px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5589:51731;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51731;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51731;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">24</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51731;5725:99922" src="/assets/figma/I5645-60760-5589-51731-5725-99922.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5589:51731;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5589:51731;5556:77452" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51731;5556:77452;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51731;5556:77452;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51731;5556:77452;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51731;5556:77452;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51731;5556:77452;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51731;5556:77452;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51731;5556:77452;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51731;5556:77452;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51731;5556:77452;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51731;5556:77452;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51731;5556:77452;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51731;5556:77452;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51731;5556:77452;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51731;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51731;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51731;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51731;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51731;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51731;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51731;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51731;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51731;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51731;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51731;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51731;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51731;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51731;5589:48811;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5589:51731;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5589:51731;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5589:51731;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5589:51731;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5589:51731;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5589:51731;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5589:51731;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5589:51731;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5589:51731;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51731;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5589:51731;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5589:51731;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5589:51731;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5589:51731;5589:48828;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51732" data-figma-component="5556:77475" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5645:60760;5589:51732;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51732;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51732;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">25</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51732;5725:104713" src="/assets/figma/I5645-60760-5589-51732-5725-104713.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51733" data-figma-component="5556:77475" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5645:60760;5589:51733;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51733;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51733;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">26</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51733;5725:104713" src="/assets/figma/I5645-60760-5589-51733-5725-104713.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51734" data-figma-component="5556:77475" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5645:60760;5589:51734;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51734;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51734;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">27</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51734;5725:104713" src="/assets/figma/I5645-60760-5589-51734-5725-104713.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5589:51735" data-figma-component="5556:77475" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px]">
                          <div data-figma-node="I5645:60760;5589:51735;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:51735;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:51735;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">28</p>
                            </div>
                            <img data-figma-node="I5645:60760;5589:51735;5725:104713" src="/assets/figma/I5645-60760-5589-51735-5725-104713.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="I5645:60760;5584:41565" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-2.5 pt-[10px] pb-[10px] pl-[24px] bg-[#f2f1dd]">
                        <p data-figma-node="I5645:60760;5584:41566" className="box-border w-max max-w-[118px] h-auto min-h-[23px] font-onest text-[18px] font-[500] leading-[23px] text-left whitespace-nowrap text-[#a21d35]">October 2025</p>
                        <div data-figma-node="I5645:60760;5584:41567" className="box-border w-full min-w-0 h-full min-h-0 relative block bg-[#e2d9d0]"></div>
                      </div>
                      <div data-figma-node="I5645:60760;5589:52234" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                        <div data-figma-node="I5645:60760;5589:52241" data-figma-component="5556:77518" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#f9f9f9]">
                          <div data-figma-node="I5645:60760;5589:52241;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5589:52241;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5589:52241;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5589:52241;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5589:52241;5725:102098" src="/assets/figma/I5645-60760-5589-52241-5725-102098.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <Disabled_781e0828 data-figma-node="I5645:60760;5589:52242" data-figma-component="5556:77518" className="relative" />
                        <Disabled_781e0828 data-figma-node="I5645:60760;5589:52243" data-figma-component="5556:77518" className="relative" />
                        <Variant7_1369850e data-figma-node="I5645:60760;5589:52238" data-figma-component="5556:77447" className="relative" />
                        <Variant7_1369850e data-figma-node="I5645:60760;5589:52710" data-figma-component="5556:77447" className="relative" />
                        <Variant7_1369850e data-figma-node="I5645:60760;5589:52239" data-figma-component="5556:77447" className="relative" />
                        <Variant7_1369850e data-figma-node="I5645:60760;5589:52240" data-figma-component="5556:77447" className="relative" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-figma-node="I5645:60760;5596:52811" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start">
                <div data-figma-node="I5645:60760;5596:52812" className="box-border w-full min-w-0 h-full min-h-0 rounded-[10px_10px_0px_0px] relative flex flex-row items-center justify-between pt-[16px] pr-[16px] pb-[16px] pl-[16px] border-[#e5e7eb] border-[1px] bg-[#ffffff]">
                  <div data-figma-node="I5645:60760;5596:52813" className="box-border w-max max-w-[259px] h-[23px] relative flex flex-row items-center gap-2.5">
                    <div data-figma-node="I5645:60760;5596:52814" className="box-border w-max max-w-[144px] h-[23px] relative flex flex-row items-center gap-3">
                      <p data-figma-node="I5645:60760;5596:52816" className="box-border w-max max-w-[144px] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-[#231f20]">September 2026</p>
                    </div>
                    <div data-figma-node="I5645:60760;5596:52818" className="box-border w-max max-w-[105px] h-[21px] rounded-[100px] relative flex flex-row items-start pt-[4px] pr-[10px] pb-[4px] pl-[10px]">
                      <p data-figma-node="I5645:60760;5596:52819" className="box-border w-max max-w-[85px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-[#a21d35]">Current Year</p>
                    </div>
                  </div>
                  <div data-figma-node="I5645:60760;5596:52820" className="box-border w-max max-w-[114px] h-[30px] rounded-[100px] relative flex flex-row items-center gap-1.5 pt-[4px] pr-[16px] pb-[4px] pl-[16px] border-[#d5ba8c] border-[1px] bg-[#fef3c7]">
                    <p data-figma-node="I5645:60760;5596:52821" className="box-border w-max max-w-[82px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-[#000000]">105 activities</p>
                  </div>
                </div>
                <div data-figma-node="I5645:60760;5596:52823" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start">
                  <div data-figma-node="I5645:60760;5596:52824" className="box-border w-max max-w-[32px] h-[635px] overflow-hidden rounded-[0px_0px_0px_10px] relative flex flex-col items-start">
                    <div data-figma-node="I5645:60760;5596:52825" className="box-border w-[32px] h-[35px] relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px] border-[#e5e7eb] border-[1px] bg-[#f9fafb]"></div>
                    <div data-figma-node="I5645:60760;5596:52829" className="box-border w-max max-w-[32px] h-[558px] relative flex flex-row items-start">
                      <div data-figma-node="I5645:60760;5596:52830" className="box-border w-[16px] h-[977px] rounded-[0px_0px_0px_10px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-[#76ab55]">
                        <div data-figma-node="I5645:60760;5596:52831" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                          <svg data-figma-node="I5645:60760;5596:52832" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          <svg data-figma-node="I5645:60760;5596:52833" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          <svg data-figma-node="I5645:60760;5596:52834" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52835" className="box-border w-max max-w-[14px] h-[649px] relative flex flex-col items-start justify-center gap-2.5">
                          <p data-figma-node="I5645:60760;5596:52836" className="box-border w-max max-w-[14px] h-auto min-h-[54px] font-onest text-[11px] font-[500] leading-[14px] text-left text-[#ffffff]">Sep 1 - 30</p>
                          <p data-figma-node="I5645:60760;5596:52837" className="box-border w-max max-w-[14px] h-auto min-h-[68px] font-onest text-[11px] font-[700] leading-[14px] text-left text-[#ffffff]">World Cup</p>
                        </div>
                      </div>
                      <div data-figma-node="I5645:60760;5596:52838" className="box-border w-max max-w-[16px] h-[540px] relative flex flex-col items-start">
                        <div data-figma-node="I5645:60760;5596:52839" className="box-border w-[16px] h-[180px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-[#da002f]">
                          <div data-figma-node="I5645:60760;5596:52840" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                            <svg data-figma-node="I5645:60760;5596:52841" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="I5645:60760;5596:52842" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="I5645:60760;5596:52843" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          </div>
                          <div data-figma-node="I5645:60760;5596:52844" className="box-border w-max max-w-[14px] h-[132px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="I5645:60760;5596:52845" className="box-border w-max max-w-[14px] h-auto min-h-[50px] font-onest text-[11px] font-[500] leading-[14px] text-left text-[#ffffff]">Sep 1 - 13</p>
                            <p data-figma-node="I5645:60760;5596:52846" className="box-border w-max max-w-[14px] h-auto min-h-[75px] font-onest text-[11px] font-[700] leading-[14px] text-left text-[#ffffff]">Cherry ha...</p>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52847" className="box-border w-[16px] h-[360px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-[#f1b743]">
                          <div data-figma-node="I5645:60760;5596:52848" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                            <svg data-figma-node="I5645:60760;5596:52849" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="I5645:60760;5596:52850" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                            <svg data-figma-node="I5645:60760;5596:52851" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#ffffff" /></svg>
                          </div>
                          <div data-figma-node="I5645:60760;5596:52852" className="box-border w-max max-w-[14px] h-[324px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="I5645:60760;5596:52853" className="box-border w-max max-w-[14px] h-auto min-h-[61px] font-onest text-[11px] font-[500] leading-[14px] text-left text-[#ffffff]">Sep 14 - 30</p>
                            <p data-figma-node="I5645:60760;5596:52854" className="box-border w-max max-w-[14px] h-auto min-h-[68px] font-onest text-[11px] font-[700] leading-[14px] text-left text-[#ffffff]">World Cup</p>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5645:43115" className="box-border w-[16px] h-[360px] relative flex flex-col items-center gap-2.5 pt-[10px] pb-[10px] bg-[#f9f9f9]">
                          <div data-figma-node="I5645:60760;5645:43120" className="box-border w-max max-w-[14px] h-[324px] relative flex flex-col items-start justify-center gap-2.5">
                            <p data-figma-node="I5645:60760;5645:43121" className="box-border w-max max-w-[14px] h-auto min-h-[61px] font-onest text-[11px] font-[500] leading-[14px] text-left text-[#ffffff]">Sep 14 - 30</p>
                            <p data-figma-node="I5645:60760;5645:43122" className="box-border w-max max-w-[14px] h-auto min-h-[68px] font-onest text-[11px] font-[700] leading-[14px] text-left text-[#ffffff]">World Cup</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-figma-node="I5645:60760;5596:52855" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden rounded-[0px_0px_10px_0px] relative flex flex-col items-start border-[#e5e7eb] border-[1px] bg-[#ffffff]">
                    <div data-figma-node="I5645:60760;5596:52873" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e5e7eb] border-[1px] bg-[#f9fafb]">
                      <input data-figma-node="I5645:60760;5596:52876" name="field-i5645-60760-5596-52876" data-figma-field="field-i5645-60760-5596-52876" data-figma-field-origin="fallback" {...figmaFieldProps("field-i5645-60760-5596-52876")} type="text" placeholder="Mon" aria-label="Mon" className="box-border w-[94px] h-[35px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5596:52878" name="field-i5645-60760-5596-52878" data-figma-field="field-i5645-60760-5596-52878" data-figma-field-origin="fallback" {...figmaFieldProps("field-i5645-60760-5596-52878")} type="text" placeholder="Tue" aria-label="Tue" className="box-border w-[94px] h-[35px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5596:52880" name="field-i5645-60760-5596-52880" data-figma-field="field-i5645-60760-5596-52880" data-figma-field-origin="fallback" {...figmaFieldProps("field-i5645-60760-5596-52880")} type="text" placeholder="Wed" aria-label="Wed" className="box-border w-[94px] h-[35px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5596:52882" name="field-i5645-60760-5596-52882" data-figma-field="field-i5645-60760-5596-52882" data-figma-field-origin="fallback" {...figmaFieldProps("field-i5645-60760-5596-52882")} type="text" placeholder="Thu" aria-label="Thu" className="box-border w-[94px] h-[35px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5596:52884" name="field-i5645-60760-5596-52884" data-figma-field="field-i5645-60760-5596-52884" data-figma-field-origin="fallback" {...figmaFieldProps("field-i5645-60760-5596-52884")} type="text" placeholder="Fri" aria-label="Fri" className="box-border w-[94px] h-[35px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <input data-figma-node="I5645:60760;5596:52886" name="field-i5645-60760-5596-52886" data-figma-field="field-i5645-60760-5596-52886" data-figma-field-origin="fallback" {...figmaFieldProps("field-i5645-60760-5596-52886")} type="text" placeholder="Sat" aria-label="Sat" className="box-border w-[94px] h-[35px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-transparent pt-[10px] pr-[10px] pb-[10px] pl-[10px] text-[#9ca3af] placeholder:text-[#9ca3af]" />
                      <div data-figma-node="I5645:60760;5596:52888" className="box-border w-[93px] h-[35px] rounded-[0px_10px_0px_0px] relative flex flex-row items-center justify-center pt-[10px] pr-[10px] pb-[10px] pl-[10px]">
                        <p data-figma-node="I5645:60760;5596:52889" className="box-border w-max max-w-[26px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-[#9ca3af]">Sun</p>
                      </div>
                    </div>
                    <div data-figma-node="I5645:60760;5596:52890" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start">
                      <div data-figma-node="I5645:60760;5596:52894" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start bg-[#ffffff]">
                        <input data-figma-node="I5645:60760;5596:52898" data-figma-component="5556:77518" name="historical-view" data-figma-field="historical-view" data-figma-field-origin="design_text" {...figmaFieldProps("historical-view")} type="text" placeholder="Historical View" aria-label="Historical View" className="box-border w-[94px] h-[180px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e5e7eb] border-[1px] bg-[#f9f9f9] pt-[8px] pr-[4px] pb-[8px] pl-[4px]" />
                        <button data-figma-node="I5645:60760;5596:52899" data-figma-component="5556:77475" type="button" data-figma-action="act_d408ac45232d" {...figmaActionProps("act_d408ac45232d")} className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] cursor-pointer block">
                          <div data-figma-node="I5645:60760;5596:52899;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52899;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52899;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">1</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52899;5725:104713" src="/assets/figma/I5645-60760-5596-52899-5725-104713.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </button>
                        <button data-figma-node="I5645:60760;5596:52900" data-figma-component="5556:77475" type="button" data-figma-action="act_456f572c81bf" {...figmaActionProps("act_456f572c81bf")} className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] cursor-pointer block">
                          <div data-figma-node="I5645:60760;5596:52900;5725:104709" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52900;5725:104710" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52900;5725:104711" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">2</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52900;5725:104713" src="/assets/figma/I5645-60760-5596-52900-5725-104713.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </button>
                        <div data-figma-node="I5645:60760;5596:52901" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52901;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52901;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52901;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52901;5725:103122" src="/assets/figma/I5645-60760-5596-52901-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52901;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52901;5602:55917" data-figma-component="5217:13666" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52901;5602:55917;5217:13667" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#2a9d8f] border-[1px] bg-[#ecfffd]">
                                <div data-figma-node="I5645:60760;5596:52901;5602:55917;5217:13668" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52901;5602:55917;5725:67326" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52901;5602:55917;5725:67327" data-figma-component="5121:8558" className="box-border w-[14px] h-[14px] overflow-hidden relative">
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55917;5725:67327;403:404" viewBox="0 0 11.67 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[14px] absolute left-[1px] top-[0px] [--fx:1] [--fww:12] pointer-events-none overflow-visible"><path d="M8.75 8.16668C8.75 8.32139 8.68854 8.46976 8.57915 8.57916C8.46975 8.68855 8.32138 8.75001 8.16667 8.75001L3.5 8.75001C3.34529 8.75001 3.19692 8.68855 3.08752 8.57916C2.97812 8.46976 2.91667 8.32139 2.91667 8.16668C2.91667 8.01197 2.97812 7.8636 3.08752 7.7542C3.19692 7.6448 3.34529 7.58335 3.5 7.58335L8.16667 7.58335C8.32138 7.58335 8.46975 7.6448 8.57915 7.7542C8.68854 7.8636 8.75 8.01197 8.75 8.16668ZM6.41667 9.91668L3.5 9.91668C3.34529 9.91668 3.19692 9.97814 3.08752 10.0875C2.97812 10.1969 2.91667 10.3453 2.91667 10.5C2.91667 10.6547 2.97812 10.8031 3.08752 10.9125C3.19692 11.0219 3.34529 11.0833 3.5 11.0833L6.41667 11.0833C6.57138 11.0833 6.71975 11.0219 6.82915 10.9125C6.93854 10.8031 7 10.6547 7 10.5C7 10.3453 6.93854 10.1969 6.82915 10.0875C6.71975 9.97814 6.57138 9.91668 6.41667 9.91668ZM11.6667 6.11626L11.6667 11.0833C11.6657 11.8566 11.3582 12.5979 10.8114 13.1447C10.2646 13.6915 9.52326 13.9991 8.75 14L2.91667 14C2.1434 13.9991 1.40208 13.6915 0.855295 13.1447C0.308514 12.5979 0.00092625 11.8566 0 11.0833L0 2.91668C0.00092625 2.14342 0.308514 1.40209 0.855295 0.855308C1.40208 0.308528 2.1434 0.000939695 2.91667 1.34451e-05L5.55042 1.34451e-05C6.08686 -0.00136726 6.61826 0.103606 7.11388 0.308865C7.6095 0.514123 8.05952 0.815594 8.43792 1.19585L10.4702 3.22935C10.8507 3.60749 11.1524 4.05736 11.3577 4.55292C11.5631 5.04847 11.6681 5.57984 11.6667 6.11626L11.6667 6.11626ZM7.61308 2.02068C7.4295 1.84286 7.22338 1.68989 7 1.56568L7 4.08335C7 4.23806 7.06146 4.38643 7.17085 4.49583C7.28025 4.60522 7.42862 4.66668 7.58333 4.66668L10.101 4.66668C9.97672 4.44337 9.82354 4.23743 9.64542 4.05418L7.61308 2.02068ZM10.5 6.11626C10.5 6.02001 10.4813 5.92785 10.4726 5.83335L7.58333 5.83335C7.1192 5.83335 6.67408 5.64897 6.3459 5.32078C6.01771 4.99259 5.83333 4.54748 5.83333 4.08335L5.83333 1.1941C5.73883 1.18535 5.64608 1.16668 5.55042 1.16668L2.91667 1.16668C2.45254 1.16668 2.00742 1.35105 1.67923 1.67924C1.35104 2.00743 1.16667 2.45255 1.16667 2.91668L1.16667 11.0833C1.16667 11.5475 1.35104 11.9926 1.67923 12.3208C2.00742 12.649 2.45254 12.8333 2.91667 12.8333L8.75 12.8333C9.21413 12.8333 9.65925 12.649 9.98744 12.3208C10.3156 11.9926 10.5 11.5475 10.5 11.0833L10.5 6.11626Z" fill="#2a9d8f" /></svg>
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52901;5602:55917;5725:67328" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52901;5602:55917;5725:67329" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55917;5725:67330" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55917;5725:67331" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55917;5725:67332" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52901;5602:55917;5217:13678" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52901;5602:55917;5217:13680" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52901;5602:55917;5217:13681" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52901;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52901;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52901;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52901;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52901;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52901;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52901;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52901;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52901;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52901;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52901;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52901;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52901;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52901;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52901;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52901;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52901;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52901;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52901;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52901;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52901;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52901;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52901;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52902" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52902;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52902;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52902;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">4</p>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52902;5725:103122" className="box-border w-[42px] h-[16px] relative flex flex-row items-center justify-end gap-1.5"></div>
                          </div>
                          <div data-figma-node="I5645:60760;5596:52902;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52902;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52902;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52902;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52902;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52902;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52902;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52902;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52902;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52902;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52902;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52902;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52902;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52902;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52902;5602:55917;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52902;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52902;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52902;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52902;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52902;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52902;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52902;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52902;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52902;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52902;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52902;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52902;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52902;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52902;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52902;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52902;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52902;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52902;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52902;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52902;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52902;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52902;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52902;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52902;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52902;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52902;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52902;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52902;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52903" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52903;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52903;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52903;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">5</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52903;5725:103122" src="/assets/figma/I5645-60760-5596-52903-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52903;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52903;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52903;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52903;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52903;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52903;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52903;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52903;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52903;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52903;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52903;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52903;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52903;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52903;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52903;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52903;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52903;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52903;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52903;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52903;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52903;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52903;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52903;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52903;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52903;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52903;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52903;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52903;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52903;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52903;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52903;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52903;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52903;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52903;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52903;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52903;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52903;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52903;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52903;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52903;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52903;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52903;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52903;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52904" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52904;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52904;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52904;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">6</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52904;5725:103122" src="/assets/figma/I5645-60760-5596-52904-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52904;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52904;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52904;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52904;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52904;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52904;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52904;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52904;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52904;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52904;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52904;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52904;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52904;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52904;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52904;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52904;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52904;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52904;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52904;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52904;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52904;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52904;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52904;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52904;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52904;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52904;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52904;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52904;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52904;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52904;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52904;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52904;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52904;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52904;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52904;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52904;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52904;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52904;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52904;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52904;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52904;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52904;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52904;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52905" className="box-border w-[408px] h-[73px] absolute left-[844px] top-[40px] [--fx:844] [--fww:408] rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] flex flex-row items-start gap-1">
                          <div data-figma-node="I5645:60760;5596:52906" className="box-border w-[543px] h-[73px] rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[8px] pr-[8px] pb-[8px] pl-[8px] border-[#2a9d8f] border-[1px] bg-[#eefbf9]">
                            <div data-figma-node="I5645:60760;5596:52907" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52908" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-[55px]">
                                <div data-figma-node="I5645:60760;5596:52909" className="box-border w-max max-w-[63px] h-[13px] relative flex flex-row items-center gap-1">
                                  <div data-figma-node="I5645:60760;5596:52910" className="box-border w-[6px] h-[6px] rounded-[3px] relative block bg-[#2a9d8f]"></div>
                                  <p data-figma-node="I5645:60760;5596:52911" className="box-border w-max max-w-[53px] h-auto min-h-[13px] font-onest text-[10px] font-[700] leading-[13px] tracking-[0.6px] text-left whitespace-nowrap text-[#2a9d8f]">Product</p>
                                </div>
                                <div data-figma-node="I5645:60760;5596:52912" className="box-border w-[16px] h-[16px] relative flex flex-row items-center justify-center gap-0.5">
                                  <svg data-figma-node="I5645:60760;5596:52913" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                  <svg data-figma-node="I5645:60760;5596:52914" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                  <svg data-figma-node="I5645:60760;5596:52915" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                </div>
                              </div>
                              <p data-figma-node="I5645:60760;5596:52916" className="box-border w-max max-w-[156px] h-auto min-h-[15px] font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                              <div data-figma-node="I5645:60760;5596:52917" className="box-border w-max max-w-[142px] h-[18px] relative flex flex-row items-center gap-1">
                                <p data-figma-node="I5645:60760;5596:52918" className="box-border w-max max-w-[64px] h-auto min-h-[14px] font-onest text-[11px] font-[500] leading-[14px] text-left whitespace-nowrap text-[#72516a]">Sept 18 - 20</p>
                                <div data-figma-node="I5645:60760;5596:52919" className="box-border w-max max-w-[74px] h-[18px] rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[6px] pb-[2px] pl-[6px] bg-[#ffffff]">
                                  <p data-figma-node="I5645:60760;5596:52920" className="box-border w-max max-w-[62px] h-auto min-h-[14px] font-onest text-[11px] font-[500] leading-[14px] text-left whitespace-nowrap text-[#72516a]">C5-M9-Y26</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5602:71439" data-figma-component="5217:13666" className="box-border w-[372px] h-[42px] absolute left-[286px] top-[36px] [--fx:286] [--fww:372] rounded-[6px_0px_0px_6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] flex flex-row items-start gap-1">
                          <div data-figma-node="I5645:60760;5602:71439;5217:13667" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px_0px_0px_8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#2a9d8f] border-[1px] bg-[#eefbf9]">
                            <div data-figma-node="I5645:60760;5602:71439;5217:13668" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                              <div data-figma-node="I5645:60760;5602:71439;5725:67326" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                <div data-figma-node="I5645:60760;5602:71439;5725:67327" data-figma-component="5121:8558" className="box-border w-[14px] h-[14px] overflow-hidden relative">
                                  <svg data-figma-node="I5645:60760;5602:71439;5725:67327;403:404" viewBox="0 0 11.67 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[14px] absolute left-[1px] top-[0px] [--fx:1] [--fww:12] pointer-events-none overflow-visible"><path d="M8.75 8.16668C8.75 8.32139 8.68854 8.46976 8.57915 8.57916C8.46975 8.68855 8.32138 8.75001 8.16667 8.75001L3.5 8.75001C3.34529 8.75001 3.19692 8.68855 3.08752 8.57916C2.97812 8.46976 2.91667 8.32139 2.91667 8.16668C2.91667 8.01197 2.97812 7.8636 3.08752 7.7542C3.19692 7.6448 3.34529 7.58335 3.5 7.58335L8.16667 7.58335C8.32138 7.58335 8.46975 7.6448 8.57915 7.7542C8.68854 7.8636 8.75 8.01197 8.75 8.16668ZM6.41667 9.91668L3.5 9.91668C3.34529 9.91668 3.19692 9.97814 3.08752 10.0875C2.97812 10.1969 2.91667 10.3453 2.91667 10.5C2.91667 10.6547 2.97812 10.8031 3.08752 10.9125C3.19692 11.0219 3.34529 11.0833 3.5 11.0833L6.41667 11.0833C6.57138 11.0833 6.71975 11.0219 6.82915 10.9125C6.93854 10.8031 7 10.6547 7 10.5C7 10.3453 6.93854 10.1969 6.82915 10.0875C6.71975 9.97814 6.57138 9.91668 6.41667 9.91668ZM11.6667 6.11626L11.6667 11.0833C11.6657 11.8566 11.3582 12.5979 10.8114 13.1447C10.2646 13.6915 9.52326 13.9991 8.75 14L2.91667 14C2.1434 13.9991 1.40208 13.6915 0.855295 13.1447C0.308514 12.5979 0.00092625 11.8566 0 11.0833L0 2.91668C0.00092625 2.14342 0.308514 1.40209 0.855295 0.855308C1.40208 0.308528 2.1434 0.000939695 2.91667 1.34451e-05L5.55042 1.34451e-05C6.08686 -0.00136726 6.61826 0.103606 7.11388 0.308865C7.6095 0.514123 8.05952 0.815594 8.43792 1.19585L10.4702 3.22935C10.8507 3.60749 11.1524 4.05736 11.3577 4.55292C11.5631 5.04847 11.6681 5.57984 11.6667 6.11626L11.6667 6.11626ZM7.61308 2.02068C7.4295 1.84286 7.22338 1.68989 7 1.56568L7 4.08335C7 4.23806 7.06146 4.38643 7.17085 4.49583C7.28025 4.60522 7.42862 4.66668 7.58333 4.66668L10.101 4.66668C9.97672 4.44337 9.82354 4.23743 9.64542 4.05418L7.61308 2.02068ZM10.5 6.11626C10.5 6.02001 10.4813 5.92785 10.4726 5.83335L7.58333 5.83335C7.1192 5.83335 6.67408 5.64897 6.3459 5.32078C6.01771 4.99259 5.83333 4.54748 5.83333 4.08335L5.83333 1.1941C5.73883 1.18535 5.64608 1.16668 5.55042 1.16668L2.91667 1.16668C2.45254 1.16668 2.00742 1.35105 1.67923 1.67924C1.35104 2.00743 1.16667 2.45255 1.16667 2.91668L1.16667 11.0833C1.16667 11.5475 1.35104 11.9926 1.67923 12.3208C2.00742 12.649 2.45254 12.8333 2.91667 12.8333L8.75 12.8333C9.21413 12.8333 9.65925 12.649 9.98744 12.3208C10.3156 11.9926 10.5 11.5475 10.5 11.0833L10.5 6.11626Z" fill="#2a9d8f" /></svg>
                                </div>
                                <p data-figma-node="I5645:60760;5602:71439;5725:67328" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                <div data-figma-node="I5645:60760;5602:71439;5725:67329" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                  <svg data-figma-node="I5645:60760;5602:71439;5725:67330" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                  <svg data-figma-node="I5645:60760;5602:71439;5725:67331" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                  <svg data-figma-node="I5645:60760;5602:71439;5725:67332" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                </div>
                              </div>
                              <div data-figma-node="I5645:60760;5602:71439;5217:13678" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                <p data-figma-node="I5645:60760;5602:71439;5217:13679" className="box-border w-max max-w-[53px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">Sept 25 - 27</p>
                                <div data-figma-node="I5645:60760;5602:71439;5217:13680" className="box-border w-max max-w-[70px] h-[15px] rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                  <p data-figma-node="I5645:60760;5602:71439;5217:13681" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-[#000000]">$5,802.46</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="I5645:60760;5596:52921" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e5e7eb] border-[1px] bg-[#ffffff]">
                        <div data-figma-node="I5645:60760;5596:52927" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52927;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52927;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52927;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">7</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52927;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52927;5725:103122" src="/assets/figma/I5645-60760-5596-52927-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52927;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52927;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52927;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52927;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52927;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52927;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52927;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52927;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52927;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52927;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52927;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52927;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52927;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52927;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52927;5602:55917;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52927;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52927;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52927;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52927;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52927;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52927;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52927;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52927;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52927;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52927;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52927;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52927;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52927;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52927;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52927;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52927;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52927;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52927;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52927;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52927;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52927;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52927;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52927;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52927;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52927;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52927;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52927;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52927;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52928" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52928;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52928;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52928;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">8</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52928;5725:103122" src="/assets/figma/I5645-60760-5596-52928-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52928;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52928;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52928;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52928;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52928;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52928;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52928;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52928;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52928;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52928;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52928;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52928;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52928;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52928;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52928;5602:55917;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52928;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52928;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52928;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52928;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52928;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52928;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52928;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52928;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52928;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52928;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52928;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52928;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52928;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52928;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52928;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52928;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52928;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52928;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52928;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52928;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52928;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52928;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52928;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52928;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52928;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52928;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52928;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52928;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52929" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52929;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52929;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52929;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">9</p>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52929;5725:103122" className="box-border w-[42px] h-[16px] relative flex flex-row items-center justify-end gap-1.5"></div>
                          </div>
                          <div data-figma-node="I5645:60760;5596:52929;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52929;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52929;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52929;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52929;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52929;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52929;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52929;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52929;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52929;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52929;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52929;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52929;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52929;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52929;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52929;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52929;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52929;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52929;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52929;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52929;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52929;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52929;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52929;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52929;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52929;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52929;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52929;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52929;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52929;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52929;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52929;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52929;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52929;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52929;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52929;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52929;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52929;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52929;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52929;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52929;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52929;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52929;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52930" data-figma-component="5556:77447" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52930;5725:99917" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52930;5725:99918" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52930;5725:87494" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">10</p>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52930;5725:99922" className="box-border w-[42px] h-[20px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5645:60760;5596:52930;5725:99923" className="box-border w-[16px] h-[16px] relative block">
                                <div data-figma-node="I5645:60760;5596:52930;5725:99924" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#ffdd55 0.0%, #ffdd55 10.0%, #ff543e 50.0%, #c837ab 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <div data-figma-node="I5645:60760;5596:52930;5725:99925" className="box-border w-[16px] h-[16px] absolute left-[0px] top-[0px] [--fx:0] [--fww:16] pointer-events-none" style={{backgroundImage: "radial-gradient(#3771c8 0.0%, #3771c8 12.8%, rgba(102, 0, 255, 0) 100.0%)", clipPath: "path('M12.25 0L3.75 0C1.67893 0 0 1.67893 0 3.75L0 12.25C0 14.3211 1.67893 16 3.75 16L12.25 16C14.3211 16 16 14.3211 16 12.25L16 3.75C16 1.67893 14.3211 0 12.25 0Z')"}} />
                                <svg data-figma-node="I5645:60760;5596:52930;5725:99926" viewBox="0 0 12.5 12.5" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[13px] absolute left-[2px] top-[2px] [--fx:2] [--fww:12] pointer-events-none overflow-visible"><path d="M6.25056 0C4.55319 0 4.34013 0.0074375 3.6735 0.03775C3.00813 0.06825 2.55394 0.173562 2.15656 0.328125C1.74544 0.48775 1.39675 0.701312 1.04938 1.04881C0.701688 1.39625 0.488125 1.74494 0.328 2.15587C0.173 2.55338 0.0675625 3.00775 0.037625 3.67281C0.00781246 4.3395 0 4.55263 0 6.25006C0 7.9475 0.00750001 8.15987 0.03775 8.8265C0.068375 9.49187 0.173688 9.94606 0.328125 10.3434C0.487875 10.7546 0.701438 11.1033 1.04894 11.4506C1.39625 11.7983 1.74494 12.0124 2.15575 12.172C2.55344 12.3266 3.00769 12.4319 3.67294 12.4624C4.33962 12.4927 4.5525 12.5001 6.24981 12.5001C7.94738 12.5001 8.15975 12.4927 8.82638 12.4624C9.49175 12.4319 9.94644 12.3266 10.3441 12.172C10.7551 12.0124 11.1032 11.7983 11.4505 11.4506C11.7982 11.1033 12.0117 10.7546 12.1719 10.3436C12.3255 9.94606 12.431 9.49175 12.4622 8.82662C12.4922 8.16 12.5 7.9475 12.5 6.25006C12.5 4.55263 12.4922 4.33962 12.4622 3.67294C12.431 3.00756 12.3255 2.55344 12.1719 2.15606C12.0117 1.74494 11.7982 1.39625 11.4505 1.04881C11.1029 0.701187 10.7552 0.487625 10.3438 0.328187C9.94531 0.173562 9.49087 0.0681875 8.8255 0.03775C8.15881 0.0074375 7.94656 0 6.24862 0L6.25056 0ZM5.68988 1.12631C5.85631 1.12606 6.042 1.12631 6.25056 1.12631C7.91938 1.12631 8.11712 1.13231 8.77612 1.16225C9.3855 1.19012 9.71625 1.29194 9.93656 1.3775C10.2283 1.49075 10.4362 1.62619 10.6548 1.845C10.8736 2.06375 11.0089 2.27206 11.1225 2.56375C11.2081 2.78375 11.31 3.1145 11.3378 3.72388C11.3677 4.38275 11.3742 4.58062 11.3742 6.24862C11.3742 7.91663 11.3677 8.11456 11.3378 8.77337C11.3099 9.38275 11.2081 9.7135 11.1225 9.93356C11.0093 10.2253 10.8736 10.4329 10.6548 10.6516C10.4361 10.8703 10.2284 11.0057 9.93656 11.119C9.7165 11.2049 9.3855 11.3065 8.77612 11.3344C8.11725 11.3643 7.91938 11.3708 6.25056 11.3708C4.58169 11.3708 4.38387 11.3643 3.72506 11.3344C3.11569 11.3063 2.78494 11.2044 2.56444 11.1189C2.27281 11.0056 2.06444 10.8702 1.84569 10.6514C1.62694 10.4327 1.49156 10.2249 1.378 9.93306C1.29244 9.713 1.1905 9.38225 1.16275 8.77287C1.13281 8.114 1.12681 7.91613 1.12681 6.24706C1.12681 4.578 1.13281 4.38119 1.16275 3.72231C1.19062 3.11294 1.29244 2.78219 1.378 2.56187C1.49131 2.27019 1.62694 2.06188 1.84575 1.84313C2.06456 1.62438 2.27281 1.48894 2.5645 1.37544C2.78481 1.2895 3.11569 1.18794 3.72506 1.15994C4.30162 1.13387 4.52506 1.12606 5.68988 1.12475L5.68988 1.12631ZM9.58681 2.16406C9.17275 2.16406 8.83681 2.49969 8.83681 2.91381C8.83681 3.32788 9.17275 3.66381 9.58681 3.66381C10.0009 3.66381 10.3368 3.32788 10.3368 2.91381C10.3368 2.49975 10.0009 2.16381 9.58681 2.16381L9.58681 2.16406ZM6.25056 3.04038C4.47806 3.04038 3.04094 4.4775 3.04094 6.25006C3.04094 8.02262 4.47806 9.45906 6.25056 9.45906C8.02312 9.45906 9.45975 8.02262 9.45975 6.25006C9.45975 4.47756 8.023 3.04038 6.25044 3.04038L6.25056 3.04038ZM6.25056 4.16669C7.40112 4.16669 8.33394 5.09938 8.33394 6.25006C8.33394 7.40063 7.40112 8.33344 6.25056 8.33344C5.1 8.33344 4.16725 7.40063 4.16725 6.25006C4.16725 5.09938 5.09994 4.16669 6.25056 4.16669Z" fill="#ffffff" /></svg>
                              </div>
                              <div data-figma-node="I5645:60760;5596:52930;5725:99927" className="box-border w-[20px] h-[20px] rounded-[13px] relative flex flex-row items-center justify-center bg-[#fde8ed]">
                                <FiRsPlusSmall_7eb9d5ec data-figma-node="I5645:60760;5596:52930;5725:99928" data-figma-component="5121:7331" className="relative" />
                              </div>
                            </div>
                          </div>
                          <div data-figma-node="I5645:60760;5596:52930;5559:19118" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52930;5556:77452" data-figma-component="5217:13650" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52930;5556:77452;5217:13651" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#0083ba] border-[1px] bg-[#eff7fa]">
                                <div data-figma-node="I5645:60760;5596:52930;5556:77452;5217:13652" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52930;5556:77452;5725:67039" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52930;5556:77452;5725:67040" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrELearning_336860e7 data-figma-node="I5645:60760;5596:52930;5556:77452;5725:67043" data-figma-component="5121:8577" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52930;5556:77452;5725:67044" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52930;5556:77452;5725:67045" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52930;5556:77452;5725:67046" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52930;5556:77452;5725:67047" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52930;5556:77452;5725:67048" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52930;5556:77452;5217:13662" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52930;5556:77452;5217:13664" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52930;5556:77452;5217:13665" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52930;5589:48811" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52930;5589:48811;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52930;5589:48811;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52930;5589:48811;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52930;5589:48811;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52930;5589:48811;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52930;5589:48811;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52930;5589:48811;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52930;5589:48811;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52930;5589:48811;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52930;5589:48811;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52930;5589:48811;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52930;5589:48811;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52930;5589:48811;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52930;5589:48828" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52930;5589:48828;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52930;5589:48828;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52930;5589:48828;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52930;5589:48828;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52930;5589:48828;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52930;5589:48828;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52930;5589:48828;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52930;5589:48828;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52930;5589:48828;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52930;5589:48828;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52930;5589:48828;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52930;5589:48828;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52930;5589:48828;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button data-figma-node="I5645:60760;5596:52931" data-figma-component="5556:77496" type="button" data-figma-action="act_ae4063b9ed10" {...figmaActionProps("act_ae4063b9ed10")} className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] cursor-pointer block">
                          <div data-figma-node="I5645:60760;5596:52931;5725:99142" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52931;5725:99143" className="box-border w-max max-w-[38px] h-[16px] relative flex flex-row items-center gap-1.5">
                              <div data-figma-node="I5645:60760;5596:52931;5556:77498" className="box-border w-[16px] h-[16px] rounded-[100px] relative flex flex-col items-center justify-center gap-2.5 pr-[4px] pl-[4px] bg-[#a21d35]">
                                <p data-figma-node="I5645:60760;5596:52931;5556:77499" className="box-border w-max max-w-[10px] h-auto min-h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#ffffff]">11</p>
                              </div>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52931;5725:99145" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <div data-figma-node="I5645:60760;5596:52931;5725:99146" className="box-border w-[42px] h-[16px] relative flex flex-row items-center justify-end gap-1.5"></div>
                          </div>
                        </button>
                        <div data-figma-node="I5645:60760;5596:52932" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52932;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52932;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52932;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">12</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52932;5725:103122" src="/assets/figma/I5645-60760-5596-52932-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52932;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52932;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52932;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52932;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52932;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52932;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52932;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52932;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52932;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52932;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52932;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52932;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52932;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52932;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52932;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52932;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52932;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52932;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52932;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52932;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52932;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52932;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52932;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52932;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52932;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52932;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52932;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52932;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52932;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52932;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52932;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52932;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52932;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52932;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52932;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52932;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52932;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52932;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52932;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52932;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52932;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52932;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52932;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52933" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52933;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52933;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52933;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">13</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52933;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52933;5725:103122" src="/assets/figma/I5645-60760-5596-52933-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52933;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52933;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52933;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52933;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52933;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52933;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52933;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52933;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52933;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52933;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52933;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52933;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52933;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52933;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52933;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52933;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52933;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52933;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52933;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52933;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52933;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52933;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52933;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52933;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52933;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52933;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52933;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52933;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52933;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52933;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52933;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52933;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52933;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52933;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52933;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52933;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52933;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52933;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52933;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52933;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52933;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52933;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52933;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="I5645:60760;5596:52935" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                        <div data-figma-node="I5645:60760;5596:52939" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52939;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52939;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52939;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">14</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52939;5725:103122" src="/assets/figma/I5645-60760-5596-52939-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52939;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <Variant5_91935847 data-figma-node="I5645:60760;5596:52939;5602:55917" data-figma-component="5217:13650" className="relative" />
                            <div data-figma-node="I5645:60760;5596:52939;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52939;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52939;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52939;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52939;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52939;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52939;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52939;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52939;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52939;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52939;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52939;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52939;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52939;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52939;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52939;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52939;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52939;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52939;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52939;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52939;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52939;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52939;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52939;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52939;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52939;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52939;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52939;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52940" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52940;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52940;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52940;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">15</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52940;5725:103122" src="/assets/figma/I5645-60760-5596-52940-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52940;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <Variant5_91935847 data-figma-node="I5645:60760;5596:52940;5602:55917" data-figma-component="5217:13650" className="relative" />
                            <div data-figma-node="I5645:60760;5596:52940;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52940;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52940;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52940;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52940;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52940;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52940;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52940;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52940;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52940;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52940;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52940;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52940;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52940;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52940;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52940;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52940;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52940;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52940;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52940;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52940;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52940;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52940;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52940;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52940;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52940;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52940;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52940;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52941" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52941;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52941;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52941;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">16</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52941;5725:103122" src="/assets/figma/I5645-60760-5596-52941-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52941;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52941;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52941;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52941;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52941;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52941;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52941;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52941;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52941;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52941;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52941;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52941;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52941;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52941;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52941;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52941;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52941;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52941;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52941;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52941;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52941;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52941;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52941;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52941;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52941;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52941;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52941;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52941;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52941;5602:55918;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52941;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52941;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52941;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52941;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52941;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52941;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52941;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52941;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52941;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52941;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52941;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52941;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52941;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52941;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52942" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52942;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52942;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52942;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">17</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52942;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52942;5725:103122" src="/assets/figma/I5645-60760-5596-52942-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52942;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52942;5602:55917" data-figma-component="5217:13650" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52942;5602:55917;5217:13651" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#0083ba] border-[1px] bg-[#eff7fa]">
                                <div data-figma-node="I5645:60760;5596:52942;5602:55917;5217:13652" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52942;5602:55917;5725:67039" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52942;5602:55917;5725:67040" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrELearning_336860e7 data-figma-node="I5645:60760;5596:52942;5602:55917;5725:67043" data-figma-component="5121:8577" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52942;5602:55917;5725:67044" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52942;5602:55917;5725:67045" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52942;5602:55917;5725:67046" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52942;5602:55917;5725:67047" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52942;5602:55917;5725:67048" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52942;5602:55917;5217:13662" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52942;5602:55917;5217:13664" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52942;5602:55917;5217:13665" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52942;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52942;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52942;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52942;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52942;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52942;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52942;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52942;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52942;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52942;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52942;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52942;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52942;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52942;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52942;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52942;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52942;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52942;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52942;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52942;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52942;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52942;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52942;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52942;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52942;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52942;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52942;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52942;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52943" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52943;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52943;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52943;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">18</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52943;5725:103122" src="/assets/figma/I5645-60760-5596-52943-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52943;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52943;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52943;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52943;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52943;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52943;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52943;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52943;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52943;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52943;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52943;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52943;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52943;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52943;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52943;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52943;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52943;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52943;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52943;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52943;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52943;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52943;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52943;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52943;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52943;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52943;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52943;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52943;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52943;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52943;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52943;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52943;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52943;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52943;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52943;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52943;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52943;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52943;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52943;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52943;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52943;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52943;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52943;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52944" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52944;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52944;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52944;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">19</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52944;5725:103122" src="/assets/figma/I5645-60760-5596-52944-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52944;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52944;5602:55917" data-figma-component="5217:13650" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52944;5602:55917;5217:13651" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#0083ba] border-[1px] bg-[#eff7fa]">
                                <div data-figma-node="I5645:60760;5596:52944;5602:55917;5217:13652" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52944;5602:55917;5725:67039" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52944;5602:55917;5725:67040" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrELearning_336860e7 data-figma-node="I5645:60760;5596:52944;5602:55917;5725:67043" data-figma-component="5121:8577" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52944;5602:55917;5725:67044" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52944;5602:55917;5725:67045" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52944;5602:55917;5725:67046" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52944;5602:55917;5725:67047" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52944;5602:55917;5725:67048" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52944;5602:55917;5217:13662" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52944;5602:55917;5217:13664" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52944;5602:55917;5217:13665" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52944;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52944;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52944;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52944;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52944;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52944;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52944;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52944;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52944;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52944;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52944;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52944;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52944;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52944;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52944;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52944;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52944;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52944;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52944;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52944;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52944;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52944;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52944;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52944;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52944;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52944;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52944;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52944;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52945" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52945;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52945;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52945;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">20</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52945;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52945;5725:103122" src="/assets/figma/I5645-60760-5596-52945-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52945;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52945;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52945;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52945;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52945;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52945;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52945;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52945;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52945;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52945;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52945;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52945;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52945;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52945;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52945;5602:55917;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52945;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52945;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52945;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52945;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52945;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52945;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52945;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52945;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52945;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52945;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52945;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52945;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52945;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52945;5602:55918;5217:10975" className="box-border w-max max-w-[43px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$2,882.97</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52945;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52945;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52945;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52945;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52945;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52945;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52945;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52945;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52945;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52945;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52945;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52945;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52945;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52945;5602:55919;5217:10975" className="box-border w-max max-w-[45px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">$5,802.46</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="I5645:60760;5596:52946" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                        <div data-figma-node="I5645:60760;5596:52950" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52950;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52950;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52950;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">21</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52950;5725:103122" src="/assets/figma/I5645-60760-5596-52950-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52950;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52950;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52950;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52950;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52950;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52950;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52950;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52950;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52950;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52950;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52950;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52950;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52950;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52950;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52950;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52950;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52950;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52950;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52950;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52950;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52950;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52950;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52950;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52950;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52950;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52950;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52950;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52950;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52950;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52950;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52950;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52950;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52950;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52950;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52950;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52950;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52950;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52950;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52950;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52950;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52950;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52950;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52950;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52951" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52951;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52951;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52951;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">22</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52951;5725:103122" src="/assets/figma/I5645-60760-5596-52951-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52951;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52951;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52951;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52951;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52951;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52951;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52951;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52951;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52951;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52951;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52951;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52951;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52951;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52951;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52951;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52951;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52951;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52951;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52951;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52951;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52951;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52951;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52951;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52951;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52951;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52951;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52951;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52951;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52951;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52951;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52951;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52951;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52951;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52951;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52951;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52951;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52951;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52951;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52951;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52951;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52951;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52951;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52951;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52952" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52952;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52952;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52952;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">23</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52952;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52952;5725:103122" src="/assets/figma/I5645-60760-5596-52952-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52952;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52952;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52952;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52952;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52952;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52952;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52952;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52952;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52952;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52952;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52952;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52952;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52952;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52952;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52952;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52952;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52952;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52952;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52952;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52952;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52952;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52952;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52952;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52952;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52952;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52952;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52952;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52952;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52952;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52952;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52952;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52952;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52952;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52952;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52952;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52952;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52952;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52952;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52952;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52952;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52952;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52952;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52952;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52953" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52953;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52953;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52953;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">24</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52953;5725:103122" src="/assets/figma/I5645-60760-5596-52953-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52953;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52953;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52953;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52953;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52953;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52953;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52953;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52953;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52953;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52953;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52953;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52953;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52953;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52953;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52953;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52953;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52953;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52953;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52953;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52953;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52953;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52953;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52953;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52953;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52953;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52953;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52953;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52953;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52953;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52953;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52953;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52953;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52953;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52953;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52953;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52953;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52953;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52953;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52953;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52953;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52953;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52953;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52953;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52954" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52954;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52954;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52954;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">25</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52954;5725:103122" src="/assets/figma/I5645-60760-5596-52954-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52954;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52954;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52954;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52954;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52954;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52954;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52954;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52954;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52954;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52954;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52954;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52954;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52954;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52954;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52954;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52954;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52954;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52954;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52954;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52954;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52954;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52954;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52954;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52954;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52954;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52954;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52954;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52954;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52954;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52954;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52954;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52954;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52954;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52954;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52954;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52954;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52954;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52954;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52954;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52954;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52954;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52954;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52954;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52955" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52955;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52955;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52955;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">26</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52955;5725:103122" src="/assets/figma/I5645-60760-5596-52955-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52955;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52955;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52955;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52955;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52955;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52955;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52955;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52955;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52955;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52955;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52955;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52955;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52955;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52955;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52955;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52955;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52955;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52955;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52955;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52955;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52955;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52955;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52955;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52955;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52955;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52955;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52955;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52955;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52955;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52955;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52955;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52955;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52955;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52955;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52955;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52955;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52955;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52955;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52955;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52955;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52955;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52955;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52955;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52956" data-figma-component="5556:77440" className="box-border w-[94px] h-[180px] relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52956;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52956;5725:103119" className="box-border w-max max-w-[16px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52956;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">27</p>
                            </div>
                            <img data-figma-node="I5645:60760;5596:52956;5725:103122" src="/assets/figma/I5645-60760-5596-52956-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52956;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52956;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52956;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52956;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52956;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52956;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52956;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52956;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52956;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52956;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52956;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52956;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52956;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52956;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52956;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52956;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52956;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52956;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52956;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52956;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52956;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52956;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52956;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52956;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52956;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52956;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52956;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52956;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52956;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52956;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52956;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52956;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52956;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52956;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52956;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52956;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52956;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52956;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52956;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52956;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52956;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52956;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                                      <p data-figma-node="I5645:60760;5596:52956;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#000000]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="I5645:60760;5596:52957" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                        <Event_cfebdf4e data-figma-node="I5645:60760;5596:52961" data-figma-component="5556:77440" className="relative" />
                        <Event_cfebdf4e data-figma-node="I5645:60760;5596:52962" data-figma-component="5556:77440" className="relative" />
                        <Event_cfebdf4e data-figma-node="I5645:60760;5596:52963" data-figma-component="5556:77440" className="relative" />
                        <div data-figma-node="I5645:60760;5596:52964" data-figma-component="5556:77440" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52964;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52964;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52964;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52964;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52964;5725:103122" src="/assets/figma/I5645-60760-5596-52964-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52964;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52964;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52964;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52964;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52964;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52964;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52964;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52964;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52964;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52964;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52964;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52964;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52964;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52964;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52964;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52964;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52964;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52964;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52964;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52964;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52964;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52964;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52964;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52964;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52964;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52964;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52964;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52964;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52964;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52964;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52964;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52964;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52964;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52964;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52964;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52964;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52964;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52964;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52964;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52964;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52964;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52964;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52964;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52965" data-figma-component="5556:77440" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52965;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52965;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52965;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52965;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52965;5725:103122" src="/assets/figma/I5645-60760-5596-52965-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52965;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52965;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52965;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52965;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52965;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52965;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52965;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52965;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52965;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52965;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52965;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52965;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52965;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52965;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52965;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52965;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52965;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52965;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52965;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52965;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52965;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52965;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52965;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52965;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52965;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52965;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52965;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52965;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52965;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52965;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52965;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52965;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52965;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52965;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52965;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52965;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52965;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52965;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52965;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52965;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52965;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52965;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52965;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52966" data-figma-component="5556:77440" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52966;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52966;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52966;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52966;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52966;5725:103122" src="/assets/figma/I5645-60760-5596-52966-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52966;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52966;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52966;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52966;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52966;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52966;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52966;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52966;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52966;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52966;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52966;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52966;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52966;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52966;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52966;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52966;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52966;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52966;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52966;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52966;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52966;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52966;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52966;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52966;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52966;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52966;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52966;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52966;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52966;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52966;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52966;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52966;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52966;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52966;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52966;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52966;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52966;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52966;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52966;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52966;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52966;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52966;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52966;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52967" data-figma-component="5556:77440" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#fff9f3]">
                          <div data-figma-node="I5645:60760;5596:52967;5725:103118" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52967;5725:103119" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52967;5725:103120" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52967;5725:103121" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52967;5725:103122" src="/assets/figma/I5645-60760-5596-52967-5725-103122.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                          <div data-figma-node="I5645:60760;5596:52967;5602:55916" className="box-border w-full min-w-0 h-full min-h-0 overflow-hidden relative flex flex-col items-start gap-1">
                            <div data-figma-node="I5645:60760;5596:52967;5602:55917" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52967;5602:55917;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52967;5602:55917;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52967;5602:55917;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52967;5602:55917;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52967;5602:55917;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52967;5602:55917;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52967;5602:55917;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52967;5602:55917;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52967;5602:55917;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52967;5602:55917;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52967;5602:55917;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52967;5602:55917;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52967;5602:55917;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52967;5602:55918" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52967;5602:55918;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52967;5602:55918;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52967;5602:55918;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52967;5602:55918;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52967;5602:55918;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52967;5602:55918;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52967;5602:55918;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52967;5602:55918;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52967;5602:55918;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52967;5602:55918;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52967;5602:55918;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52967;5602:55918;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52967;5602:55918;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div data-figma-node="I5645:60760;5596:52967;5602:55919" data-figma-component="5217:10959" className="box-border w-full min-w-0 h-full min-h-0 rounded-[6px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start gap-1">
                              <div data-figma-node="I5645:60760;5596:52967;5602:55919;5217:10960" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#a21d35] border-[1px] bg-[#fcf3f4]">
                                <div data-figma-node="I5645:60760;5596:52967;5602:55919;5217:10961" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                                  <div data-figma-node="I5645:60760;5596:52967;5602:55919;5725:59480" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                                    <div data-figma-node="I5645:60760;5596:52967;5602:55919;5725:59481" className="box-border w-[14px] h-[14px] relative flex flex-row items-center gap-1">
                                      <FiRrEnvelope_edd5c8e7 data-figma-node="I5645:60760;5596:52967;5602:55919;5725:59483" data-figma-component="5121:8609" className="relative" />
                                    </div>
                                    <p data-figma-node="I5645:60760;5596:52967;5602:55919;5725:59485" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                                    <div data-figma-node="I5645:60760;5596:52967;5602:55919;5725:59486" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                                      <svg data-figma-node="I5645:60760;5596:52967;5602:55919;5725:59487" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52967;5602:55919;5725:59488" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                      <svg data-figma-node="I5645:60760;5596:52967;5602:55919;5725:59489" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                                    </div>
                                  </div>
                                  <div data-figma-node="I5645:60760;5596:52967;5602:55919;5217:10972" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                                    <div data-figma-node="I5645:60760;5596:52967;5602:55919;5217:10974" className="box-border w-full min-w-0 h-full min-h-0 rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#ffffff]">
                                      <p data-figma-node="I5645:60760;5596:52967;5602:55919;5217:10975" className="box-border w-max max-w-[50px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">C3-M9-Y26</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-figma-node="I5645:60760;5596:52968" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-2.5 pt-[10px] pb-[10px] pl-[24px] bg-[#f2f1dd]">
                        <p data-figma-node="I5645:60760;5596:52969" className="box-border w-max max-w-[118px] h-auto min-h-[23px] font-onest text-[18px] font-[500] leading-[23px] text-left whitespace-nowrap text-[#a21d35]">October 2025</p>
                        <div data-figma-node="I5645:60760;5596:52970" className="box-border w-full min-w-0 h-full min-h-0 relative block bg-[#e2d9d0]"></div>
                      </div>
                      <div data-figma-node="I5645:60760;5596:52971" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start border-[#e2d9d0] border-[1px] bg-[#ffffff]">
                        <div data-figma-node="I5645:60760;5596:52975" data-figma-component="5556:77518" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#f9f9f9]">
                          <div data-figma-node="I5645:60760;5596:52975;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52975;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52975;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52975;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52975;5725:102098" src="/assets/figma/I5645-60760-5596-52975-5725-102098.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52976" data-figma-component="5556:77518" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#f9f9f9]">
                          <div data-figma-node="I5645:60760;5596:52976;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52976;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52976;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52976;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52976;5725:102098" src="/assets/figma/I5645-60760-5596-52976-5725-102098.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <div data-figma-node="I5645:60760;5596:52977" data-figma-component="5556:77518" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-2 pt-[8px] pr-[4px] pb-[8px] pl-[4px] border-[#e5e7eb] border-[1px] bg-[#f9f9f9]">
                          <div data-figma-node="I5645:60760;5596:52977;5725:102094" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
                            <div data-figma-node="I5645:60760;5596:52977;5725:102095" className="box-border w-max max-w-[38px] h-[17px] relative flex flex-row items-center gap-1.5">
                              <p data-figma-node="I5645:60760;5596:52977;5725:102096" className="box-border w-[16px] h-[17px] font-onest text-[13px] font-[600] leading-[17px] text-left whitespace-nowrap text-[#374151]">3</p>
                              <Default_7363b927 data-figma-node="I5645:60760;5596:52977;5725:102097" data-figma-component="5725:71390" className="relative" />
                            </div>
                            <img data-figma-node="I5645:60760;5596:52977;5725:102098" src="/assets/figma/I5645-60760-5596-52977-5725-102098.png" alt="Frame 1000007851" className="box-border w-[42px] h-[16px] max-w-none object-cover object-top" />
                          </div>
                        </div>
                        <Variant7_1369850e data-figma-node="I5645:60760;5596:52978" data-figma-component="5556:77447" className="relative" />
                        <Variant7_1369850e data-figma-node="I5645:60760;5596:52979" data-figma-component="5556:77447" className="relative" />
                        <Variant7_1369850e data-figma-node="I5645:60760;5596:52980" data-figma-component="5556:77447" className="relative" />
                        <Variant7_1369850e data-figma-node="I5645:60760;5596:52981" data-figma-component="5556:77447" className="relative" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-figma-node="I5645:60760;5602:71473" data-figma-component="5217:13666" className="box-border w-[373px] h-[42px] absolute left-[742px] top-[333px] [--fx:742] [--fww:373] rounded-[0px_6px_6px_0px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] flex flex-row items-start gap-1">
                <div data-figma-node="I5645:60760;5602:71473;5217:13667" className="box-border w-full min-w-0 h-full min-h-0 rounded-[0px_8px_8px_0px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.039)] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] border-[#2a9d8f] border-[1px] bg-[#eefbf9]">
                  <div data-figma-node="I5645:60760;5602:71473;5217:13668" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
                    <div data-figma-node="I5645:60760;5602:71473;5725:67326" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1.5">
                      <div data-figma-node="I5645:60760;5602:71473;5725:67327" data-figma-component="5121:8558" className="box-border w-[14px] h-[14px] overflow-hidden relative">
                        <svg data-figma-node="I5645:60760;5602:71473;5725:67327;403:404" viewBox="0 0 11.67 14" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[14px] absolute left-[1px] top-[0px] [--fx:1] [--fww:12] pointer-events-none overflow-visible"><path d="M8.75 8.16668C8.75 8.32139 8.68854 8.46976 8.57915 8.57916C8.46975 8.68855 8.32138 8.75001 8.16667 8.75001L3.5 8.75001C3.34529 8.75001 3.19692 8.68855 3.08752 8.57916C2.97812 8.46976 2.91667 8.32139 2.91667 8.16668C2.91667 8.01197 2.97812 7.8636 3.08752 7.7542C3.19692 7.6448 3.34529 7.58335 3.5 7.58335L8.16667 7.58335C8.32138 7.58335 8.46975 7.6448 8.57915 7.7542C8.68854 7.8636 8.75 8.01197 8.75 8.16668ZM6.41667 9.91668L3.5 9.91668C3.34529 9.91668 3.19692 9.97814 3.08752 10.0875C2.97812 10.1969 2.91667 10.3453 2.91667 10.5C2.91667 10.6547 2.97812 10.8031 3.08752 10.9125C3.19692 11.0219 3.34529 11.0833 3.5 11.0833L6.41667 11.0833C6.57138 11.0833 6.71975 11.0219 6.82915 10.9125C6.93854 10.8031 7 10.6547 7 10.5C7 10.3453 6.93854 10.1969 6.82915 10.0875C6.71975 9.97814 6.57138 9.91668 6.41667 9.91668ZM11.6667 6.11626L11.6667 11.0833C11.6657 11.8566 11.3582 12.5979 10.8114 13.1447C10.2646 13.6915 9.52326 13.9991 8.75 14L2.91667 14C2.1434 13.9991 1.40208 13.6915 0.855295 13.1447C0.308514 12.5979 0.00092625 11.8566 0 11.0833L0 2.91668C0.00092625 2.14342 0.308514 1.40209 0.855295 0.855308C1.40208 0.308528 2.1434 0.000939695 2.91667 1.34451e-05L5.55042 1.34451e-05C6.08686 -0.00136726 6.61826 0.103606 7.11388 0.308865C7.6095 0.514123 8.05952 0.815594 8.43792 1.19585L10.4702 3.22935C10.8507 3.60749 11.1524 4.05736 11.3577 4.55292C11.5631 5.04847 11.6681 5.57984 11.6667 6.11626L11.6667 6.11626ZM7.61308 2.02068C7.4295 1.84286 7.22338 1.68989 7 1.56568L7 4.08335C7 4.23806 7.06146 4.38643 7.17085 4.49583C7.28025 4.60522 7.42862 4.66668 7.58333 4.66668L10.101 4.66668C9.97672 4.44337 9.82354 4.23743 9.64542 4.05418L7.61308 2.02068ZM10.5 6.11626C10.5 6.02001 10.4813 5.92785 10.4726 5.83335L7.58333 5.83335C7.1192 5.83335 6.67408 5.64897 6.3459 5.32078C6.01771 4.99259 5.83333 4.54748 5.83333 4.08335L5.83333 1.1941C5.73883 1.18535 5.64608 1.16668 5.55042 1.16668L2.91667 1.16668C2.45254 1.16668 2.00742 1.35105 1.67923 1.67924C1.35104 2.00743 1.16667 2.45255 1.16667 2.91668L1.16667 11.0833C1.16667 11.5475 1.35104 11.9926 1.67923 12.3208C2.00742 12.649 2.45254 12.8333 2.91667 12.8333L8.75 12.8333C9.21413 12.8333 9.65925 12.649 9.98744 12.3208C10.3156 11.9926 10.5 11.5475 10.5 11.0833L10.5 6.11626Z" fill="#2a9d8f" /></svg>
                      </div>
                      <p data-figma-node="I5645:60760;5602:71473;5725:67328" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[12px] font-[600] leading-[15px] text-left whitespace-nowrap text-[#231f20]">Great Prosser Balloon Rally</p>
                      <div data-figma-node="I5645:60760;5602:71473;5725:67329" className="box-border w-[14px] h-[14px] relative flex flex-row items-center justify-center gap-0.5">
                        <svg data-figma-node="I5645:60760;5602:71473;5725:67330" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                        <svg data-figma-node="I5645:60760;5602:71473;5725:67331" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                        <svg data-figma-node="I5645:60760;5602:71473;5725:67332" viewBox="0 0 3 3" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[3px] h-[3px] pointer-events-none overflow-visible"><path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#231f20" /></svg>
                      </div>
                    </div>
                    <div data-figma-node="I5645:60760;5602:71473;5217:13678" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center gap-1">
                      <p data-figma-node="I5645:60760;5602:71473;5217:13679" className="box-border w-max max-w-[53px] h-auto min-h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-left whitespace-nowrap text-[#72516a]">Sept 25 - 27</p>
                      <div data-figma-node="I5645:60760;5602:71473;5217:13680" className="box-border w-max max-w-[70px] h-[15px] rounded-[100px] relative flex flex-row items-center justify-center gap-2.5 pt-[2px] pr-[4px] pb-[2px] pl-[4px] bg-[#61ff9d]">
                        <p data-figma-node="I5645:60760;5602:71473;5217:13681" className="box-border w-[62px] h-[11px] font-onest text-[9px] font-[500] leading-[11px] text-center whitespace-nowrap text-[#000000]">$5,802.46</p>
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
