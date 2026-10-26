/**
 * Luna generated layout
 * Figma node: 5449:18601
 * Section: Modal Window
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { figmaFieldProps, closeFigmaDialog, useFigmaScreenData } from "./useFigmaScreenData";
import { FigmaFieldError, figmaFieldA11y } from "./figmaFieldErrors";
import { figmaWriteOperationForPath, validateValues } from "./figmaFieldContract";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown2 } from "./ChevronDown2";

const MODAL_FRAME = "5449:18415";
const POST_ACTIVITY_PATH = "/api/v1/marketing-team-member/activities";
const PUT_ACTIVITY_PATH = "/api/v1/marketing-team-member/activities/{id}";

const ACTIVITY_TYPE_OPTIONS = [
  { value: "email_send", label: "Email send" },
  { value: "sms_send", label: "SMS send" },
  { value: "blog_post", label: "Blog post" },
  { value: "social_post", label: "Social post" },
  { value: "product_focus", label: "Product focus" },
  { value: "seasonal_focus", label: "Seasonal focus" },
] as const;

export function CreateActivityTypeModalWindowSection() {
  const { submit, submitting, fieldErrors, submitError, fieldValues, setFieldErrors } =
    useFigmaScreenData();
  const editing = Boolean(String(fieldValues["activity-id"] ?? "").trim());
  const activityType = String(fieldValues["activity-type"] ?? "").trim();
  const emailNotesRequired = activityType === "email_send";

  const validateFieldOnBlur = (field: string) => {
    const writePath = editing ? PUT_ACTIVITY_PATH : POST_ACTIVITY_PATH;
    const op = figmaWriteOperationForPath(MODAL_FRAME, writePath);
    if (!op) {
      return;
    }
    const errors = validateValues(op, fieldValues);
    if (field === "additional-info" && activityType === "email_send") {
      const additional = String(fieldValues["additional-info"] ?? "").trim();
      if (!additional) {
        errors["additional-info"] = "This field is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(additional)) {
        errors["additional-info"] = "Enter a valid email address.";
      }
    }
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (errors[field]) {
        next[field] = errors[field];
      } else {
        delete next[field];
      }
      return next;
    });
  };

  return (
    <section data-figma-node="5449:18601" id="content" className="relative box-border w-full min-w-0 min-h-[700px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] rounded-[12px] flex flex-col items-start gap-6 bg-surface shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)]">
      <form
        className="box-border self-stretch min-w-0 flex flex-col items-start gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          void submit(MODAL_FRAME, editing ? PUT_ACTIVITY_PATH : POST_ACTIVITY_PATH);
        }}
      >
      <div data-figma-node="5449:18602" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
        <div data-figma-node="5449:18603" className="box-border w-max max-w-[min(216px,100%)] h-auto relative flex flex-row items-center gap-2">
          <div data-figma-node="5449:18604" data-figma-component="5111:7679" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden relative block">
            <svg data-figma-node="I5449:18604;5111:7680" viewBox="0 0 18.78 18.27" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[12.5%] w-[79.167%] top-[12.5%] h-[75%] pointer-events-none overflow-visible"><path d="M5 7.27106C5.55228 7.27106 6 6.82334 6 6.27106C6 5.71877 5.55228 5.27106 5 5.27106L5 6.27106L5 7.27106ZM18.987 9.27106C18.987 8.71877 18.5393 8.27106 17.987 8.27106C17.4347 8.27106 16.987 8.71877 16.987 9.27106L17.987 9.27106L18.987 9.27106ZM1.09202 18.0531L1.54601 17.1621L1.54601 17.1621L1.09202 18.0531ZM0.217987 17.179L1.10899 16.725L1.10899 16.725L0.217987 17.179ZM16.895 18.0531L17.3489 18.9441L17.3489 18.9441L16.895 18.0531ZM17.769 17.179L16.878 16.725L16.878 16.725L17.769 17.179ZM0.217987 7.36307L-0.67302 6.90908L-0.67302 6.90908L0.217987 7.36307ZM1.09202 6.48904L0.638029 5.59804L0.638028 5.59804L1.09202 6.48904ZM3 11.2711C2.44772 11.2711 2 11.7188 2 12.2711C2 12.8233 2.44772 13.2711 3 13.2711L3 12.2711L3 11.2711ZM3.01 13.2711C3.56228 13.2711 4.01 12.8233 4.01 12.2711C4.01 11.7188 3.56228 11.2711 3.01 11.2711L3.01 12.2711L3.01 13.2711ZM8.51893 10.1656L7.54547 9.93671C7.46768 10.2676 7.56328 10.6153 7.79928 10.8599C8.03528 11.1045 8.37936 11.2125 8.7128 11.1466L8.51893 10.1656ZM10.5416 5.75188L9.83453 5.04477L9.83453 5.04477L10.5416 5.75188ZM9.6294 6.74221L10.4438 7.32247L9.6294 6.74221ZM8.83697 8.81271L7.86351 8.58386L7.86351 8.58386L8.83697 8.81271ZM9.1986 7.51572L10.1207 7.90261L10.1207 7.90261L9.1986 7.51572ZM13.1184 8.15265L12.4113 7.44554L13.1184 8.15265ZM12.06 9.12262L11.4885 8.30201L12.06 9.12262ZM9.83371 9.90574L10.0276 10.8868L10.0276 10.8868L9.83371 9.90574ZM11.2287 9.56629L11.5923 10.4978L11.2287 9.56629ZM18.2668 3.00421L18.974 3.71132L18.2668 3.00421ZM15.7781 0.515442L16.4852 1.22255L16.4852 1.22255L15.7781 0.515442ZM7 11.271C6.44772 11.271 6 11.7187 6 12.271C6 12.8233 6.44772 13.271 7 13.271L7 12.271L7 11.271ZM7.01 13.271C7.56228 13.271 8.01 12.8233 8.01 12.271C8.01 11.7187 7.56228 11.271 7.01 11.271L7.01 12.271L7.01 13.271ZM14.787 18.2711L14.787 17.2711L3.2 17.2711L3.2 18.2711L3.2 19.2711L14.787 19.2711L14.787 18.2711ZM0 15.0711L1 15.0711L1 9.47106L0 9.47106L-1 9.47106L-1 15.0711L0 15.0711ZM3.2 6.27106L3.2 7.27106L5 7.27106L5 6.27106L5 5.27106L3.2 5.27106L3.2 6.27106ZM17.987 9.27106L16.987 9.27106L16.987 15.0711L17.987 15.0711L18.987 15.0711L18.987 9.27106L17.987 9.27106ZM3.2 18.2711L3.2 17.2711C2.62344 17.2711 2.25117 17.2703 1.96784 17.2471C1.69617 17.2249 1.59545 17.1873 1.54601 17.1621L1.09202 18.0531L0.638028 18.9441C1.01641 19.1369 1.40963 19.2082 1.80497 19.2405C2.18864 19.2718 2.65645 19.2711 3.2 19.2711L3.2 18.2711ZM0 15.0711L-1 15.0711C-1 15.6146 -1.00078 16.0824 -0.969431 16.4661C-0.93713 16.8614 -0.865814 17.2546 -0.673019 17.633L0.217987 17.179L1.10899 16.725C1.0838 16.6756 1.04612 16.5749 1.02393 16.3032C1.00078 16.0199 1 15.6476 1 15.0711L0 15.0711ZM1.09202 18.0531L1.54601 17.1621C1.35785 17.0662 1.20487 16.9132 1.10899 16.725L0.217987 17.179L-0.67302 17.633C-0.385399 18.1975 0.0735437 18.6565 0.638028 18.9441L1.09202 18.0531ZM14.787 18.2711L14.787 19.2711C15.3305 19.2711 15.7983 19.2718 16.182 19.2405C16.5773 19.2082 16.9706 19.1369 17.3489 18.9441L16.895 18.0531L16.441 17.1621C16.3915 17.1873 16.2908 17.2249 16.0191 17.2471C15.7358 17.2703 15.3635 17.2711 14.787 17.2711L14.787 18.2711ZM17.987 15.0711L16.987 15.0711C16.987 15.6476 16.9862 16.0199 16.963 16.3032C16.9409 16.5749 16.9032 16.6756 16.878 16.725L17.769 17.179L18.66 17.633C18.8528 17.2546 18.9241 16.8614 18.9564 16.4661C18.9878 16.0824 18.987 15.6146 18.987 15.0711L17.987 15.0711ZM16.895 18.0531L17.3489 18.9441C17.9134 18.6565 18.3724 18.1975 18.66 17.633L17.769 17.179L16.878 16.725C16.7821 16.9132 16.6291 17.0662 16.441 17.1621L16.895 18.0531ZM0 9.47106L1 9.47106C1 8.8945 1.00078 8.52223 1.02393 8.23889C1.04612 7.96723 1.0838 7.86651 1.10899 7.81707L0.217987 7.36307L-0.67302 6.90908C-0.865814 7.28746 -0.93713 7.68068 -0.969431 8.07603C-1.00078 8.4597 -1 8.9275 -1 9.47106L0 9.47106ZM3.2 6.27106L3.2 5.27106C2.65645 5.27106 2.18864 5.27028 1.80497 5.30163C1.40963 5.33393 1.01641 5.40524 0.638029 5.59804L1.09202 6.48904L1.54601 7.38005C1.59545 7.35486 1.69617 7.31718 1.96784 7.29498C2.25117 7.27183 2.62345 7.27106 3.2 7.27106L3.2 6.27106ZM0.217987 7.36307L1.10899 7.81707C1.20487 7.6289 1.35785 7.47592 1.54601 7.38005L1.09202 6.48904L0.638028 5.59804C0.0735422 5.88566 -0.385399 6.3446 -0.67302 6.90908L0.217987 7.36307ZM3 12.2711L3 13.2711L3.01 13.2711L3.01 12.2711L3.01 11.2711L3 11.2711L3 12.2711ZM18.2668 3.00421L17.5597 2.2971L12.4113 7.44554L13.1184 8.15265L13.8255 8.85975L18.974 3.71132L18.2668 3.00421ZM10.5416 5.75188L11.2487 6.45898L16.4852 1.22255L15.7781 0.515442L15.071 -0.191665L9.83453 5.04477L10.5416 5.75188ZM9.83371 9.90574L9.63984 8.92471L8.32506 9.18454L8.51893 10.1656L8.7128 11.1466L10.0276 10.8868L9.83371 9.90574ZM8.51893 10.1656L9.49239 10.3944L9.81043 9.04156L8.83697 8.81271L7.86351 8.58386L7.54547 9.93671L8.51893 10.1656ZM10.5416 5.75188L9.83453 5.04477C9.37821 5.50109 9.06794 5.80688 8.81496 6.16195L9.6294 6.74221L10.4438 7.32247C10.5778 7.13437 10.7467 6.96099 11.2487 6.45898L10.5416 5.75188ZM8.83697 8.81271L9.81043 9.04156C9.9729 8.35046 10.0314 8.11558 10.1207 7.90261L9.1986 7.51572L8.27647 7.12884C8.1078 7.53087 8.0112 7.95565 7.86351 8.58386L8.83697 8.81271ZM9.6294 6.74221L8.81496 6.16195C8.60024 6.46333 8.41964 6.78761 8.27647 7.12884L9.1986 7.51572L10.1207 7.90261C10.2066 7.69787 10.315 7.5033 10.4438 7.32247L9.6294 6.74221ZM13.1184 8.15265L12.4113 7.44554C11.8755 7.98134 11.6903 8.16148 11.4885 8.30201L12.06 9.12262L12.6314 9.94324C13.0125 9.6779 13.3386 9.34667 13.8255 8.85975L13.1184 8.15265ZM9.83371 9.90574L10.0276 10.8868C10.7031 10.7533 11.1598 10.6667 11.5923 10.4978L11.2287 9.56629L10.865 8.63476C10.6359 8.72419 10.3832 8.7778 9.63983 8.92471L9.83371 9.90574ZM12.06 9.12262L11.4885 8.30201C11.2945 8.4371 11.0852 8.5488 10.865 8.63476L11.2287 9.56629L11.5923 10.4978C11.9593 10.3545 12.3081 10.1684 12.6314 9.94324L12.06 9.12262ZM18.2668 0.515441L17.5597 1.22255C17.8565 1.51928 17.8565 2.00037 17.5597 2.2971L18.2668 3.00421L18.974 3.71132C20.0517 2.63354 20.0517 0.886113 18.974 -0.191666L18.2668 0.515441ZM18.2668 0.515441L18.974 -0.191666C17.8962 -1.26945 16.1487 -1.26944 15.071 -0.191665L15.7781 0.515442L16.4852 1.22255C16.7819 0.925817 17.263 0.925818 17.5597 1.22255L18.2668 0.515441ZM7 12.271L7 13.271L7.01 13.271L7.01 12.271L7.01 11.271L7 11.271L7 12.271Z" fill="#a21d35" /></svg>
          </div>
          <h1 data-figma-node="5449:18605" className="box-border w-max max-w-[min(184px,100%)] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left lg:whitespace-nowrap text-text-primary">{editing ? "Edit Activity" : "Create Activity Type"}</h1>
        </div>
        <Button data-figma-node="5449:18606" type="button" data-figma-action="act_e41ad4a168bc" onClick={(e) => { e.preventDefault(); closeFigmaDialog(); }} className="p-0 box-border w-max max-w-[min(36px,100%)] h-auto relative flex flex-row items-center gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 justify-start bg-transparent hover:bg-transparent rounded-none shadow-none">
          <div data-figma-node="5449:18609" className="box-border w-max max-w-[min(36px,100%)] h-auto rounded-[6px] pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-background flex flex-row items-start"><span className="inline-flex items-center justify-center"><div data-figma-node="5449:18610" data-figma-component="5121:8491" className="box-border w-[24px] h-[24px] overflow-hidden relative block">
  <svg data-figma-node="I5449:18610;403:359" viewBox="0 0 12.59 12.59" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[25%] w-[54.167%] top-[25%] h-[54.167%] pointer-events-none overflow-visible"><path d="M12.2928 0.292787C12.1053 0.105316 11.851 0 11.5858 0C11.3206 0 11.0663 0.105316 10.8788 0.292787L6.29279 4.87879L1.70679 0.292787C1.51926 0.105316 1.26495 0 0.999786 0C0.734622 0 0.480314 0.105316 0.292787 0.292787C0.105316 0.480314 0 0.734622 0 0.999786C0 1.26495 0.105316 1.51926 0.292787 1.70679L4.87879 6.29279L0.292787 10.8788C0.105316 11.0663 8.88179e-16 11.3206 0 11.5858C8.88179e-16 11.851 0.105316 12.1053 0.292787 12.2928C0.480314 12.4803 0.734622 12.5856 0.999786 12.5856C1.26495 12.5856 1.51926 12.4803 1.70679 12.2928L6.29279 7.70679L10.8788 12.2928C11.0663 12.4803 11.3206 12.5856 11.5858 12.5856C11.851 12.5856 12.1053 12.4803 12.2928 12.2928C12.4803 12.1053 12.5856 11.851 12.5856 11.5858C12.5856 11.3206 12.4803 11.0663 12.2928 10.8788L7.70679 6.29279L12.2928 1.70679C12.4803 1.51926 12.5856 1.26495 12.5856 0.999786C12.5856 0.734622 12.4803 0.480314 12.2928 0.292787L12.2928 0.292787Z" fill="#231f20" /></svg>
</div></span></div>
        </Button>
      </div>
      <div className="sr-only" aria-live="polite">{submitError ? submitError : null}</div>
      <div data-figma-node="5449:18611" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
        <div data-figma-node="5449:18612" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
          <label htmlFor="activity-title" data-figma-node="5449:18613" className="box-border w-max max-w-[min(39px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Title</label>
          <Input data-figma-node="5449:18614" id="activity-title" name="activity-title" data-figma-field="activity-title" data-figma-field-origin="design_text" {...figmaFieldProps("activity-title")} onBlur={() => validateFieldOnBlur("activity-title")} type="text" placeholder="e.g., Q4 Product Launch Campaign" aria-label="Title" aria-required="true" {...figmaFieldA11y(fieldErrors, "activity-title")} className="box-border self-stretch min-w-0 h-[44px] shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[10px] pr-[12px] pb-[10px] pl-[12px] text-text-primary placeholder:text-color-27 hover:bg-surface" />
          <FigmaFieldError errors={fieldErrors} field="activity-title" />
        </div>
        <div className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
          <label htmlFor="activity-start-date" className="box-border w-max max-w-[min(80px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Start date</label>
          <Input id="activity-start-date" name="start-date" data-figma-field="start-date" data-figma-field-origin="design_text" {...figmaFieldProps("start-date")} onBlur={() => validateFieldOnBlur("start-date")} type="date" aria-label="Start date" aria-required="true" {...figmaFieldA11y(fieldErrors, "start-date")} className="box-border self-stretch min-w-0 h-[44px] shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[10px] pr-[12px] pb-[10px] pl-[12px] text-text-primary hover:bg-surface" />
          <FigmaFieldError errors={fieldErrors} field="start-date" />
        </div>
        <div data-figma-node="5725:105925" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-4">
          <div data-figma-node="5725:105915" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
            <p data-figma-node="5725:105916" className="box-border w-max max-w-[min(37px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Icon</p>
            <div className="box-border self-stretch min-w-0 shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface h-[44px]"><select data-figma-node="5725:105917" name="icon" data-figma-field="icon" data-figma-field-origin="design_text" {...figmaFieldProps("icon")} aria-label="Selected icon:" className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-text-primary font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap pt-[10px] pr-[12px] pb-[10px] pl-[12px]"><option value="">Selected icon:</option></select><div className="pointer-events-none absolute inset-0"><ChevronDown2 data-figma-node="5725:105921" data-figma-component="5111:6287" className="box-border w-[24px] h-[24px] absolute left-[192px] top-[10px] overflow-hidden" /></div></div>
          </div>
          <div data-figma-node="5549:56811" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
            <label htmlFor="activity-type" data-figma-node="5549:56812" className="box-border w-max max-w-[min(73px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Email send</label>
            <div className="box-border self-stretch min-w-0 shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface h-[44px]"><select data-figma-node="5549:56813" id="activity-type" name="activity-type" data-figma-field="activity-type" data-figma-field-origin="design_text" {...figmaFieldProps("activity-type")} onBlur={() => validateFieldOnBlur("activity-type")} aria-label="Email send" aria-required="true" {...figmaFieldA11y(fieldErrors, "activity-type")} className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-text-primary font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap pt-[10px] pr-[12px] pb-[10px] pl-[12px]"><option value="">Select activity type</option>{ACTIVITY_TYPE_OPTIONS.map((opt) => (<option key={opt.value} value={opt.value}>{opt.label}</option>))}</select><div className="pointer-events-none absolute inset-0"><ChevronDown2 data-figma-node="5549:56817" data-figma-component="5111:6287" className="box-border w-[24px] h-[24px] absolute left-[192px] top-[10px] overflow-hidden" /></div></div>
            <FigmaFieldError errors={fieldErrors} field="activity-type" />
          </div>
        </div>
        <div data-figma-node="5449:18646" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
          <label htmlFor="activity-description" data-figma-node="5449:18647" className="box-border w-max max-w-[min(91px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Description</label>
          <textarea data-figma-node="5449:18648" id="activity-description" name="description" data-figma-field="description" data-figma-field-origin="design_text" {...figmaFieldProps("description")} onBlur={() => validateFieldOnBlur("description")} placeholder="Describe key objectives, milestones and channels..." aria-label="Description" {...figmaFieldA11y(fieldErrors, "description")} className="box-border self-stretch min-w-0 h-[136px] shrink-0 rounded-[8px] relative flex flex-col items-start pt-[14px] pr-[14px] pb-[14px] pl-[14px] border-[#e2d9d0] border-[1px] bg-surface font-onest text-[14px] font-[400] leading-[18px] text-left text-text-primary placeholder:text-color-27 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary resize-none" />
          <FigmaFieldError errors={fieldErrors} field="description" />
        </div>
        <div data-figma-node="5449:18652" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5 pt-[10px] pr-[20px] pb-[10px] pl-[20px]">
          <label htmlFor="activity-additional-info" data-figma-node="5449:18653" className="box-border w-max max-w-[min(260px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Email subject or audience notes</label>
          <Input data-figma-node="5449:18653" id="activity-additional-info" name="additional-info" data-figma-field="additional-info" data-figma-field-origin="design_text" {...figmaFieldProps("additional-info")} onBlur={() => validateFieldOnBlur("additional-info")} type={emailNotesRequired ? "email" : "text"} inputMode={emailNotesRequired ? "email" : "text"} placeholder={emailNotesRequired ? "name@example.com" : "Audience: VIP list"} aria-label="Email subject or audience notes" aria-required={emailNotesRequired} {...figmaFieldA11y(fieldErrors, "additional-info")} className="box-border self-stretch min-w-0 h-[44px] shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[10px] pr-[12px] pb-[10px] pl-[12px] text-text-primary placeholder:text-color-27 hover:bg-surface" />
          <FigmaFieldError errors={fieldErrors} field="additional-info" />
        </div>
        <div data-figma-node="5449:18975" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
          <p data-figma-node="5449:18976" className="box-border w-max max-w-[min(89px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">COLOR CODE</p>
          <input data-figma-node="5449:19085" name="color" data-figma-field="color" data-figma-field-origin="design_text" {...figmaFieldProps("color")} type="color" defaultValue="#faf5f3" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[12px] appearance-none border-0 p-0 bg-transparent cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" />
        </div>
      </div>
      <div data-figma-node="5449:18664" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-border" />
      <div data-figma-node="5449:18665" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
        <Button data-figma-node="5449:18666" type="button" data-figma-action="act_e8c842f8c0ef" onClick={(e) => { e.preventDefault(); closeFigmaDialog(); }} disabled={submitting} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[78px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-text-primary cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-color-11">Cancel</span></Button>
        <Button data-figma-node="5449:18668" type="submit" data-figma-action="act_e298ac259136" disabled={submitting} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[180px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] inline-flex items-center justify-start whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 hover:bg-primary shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-surface">{submitting ? "Saving…" : editing ? "Save Activity" : "Create Activity Type"}</span></Button>
      </div>
      </form>
    </section>
  );
}
