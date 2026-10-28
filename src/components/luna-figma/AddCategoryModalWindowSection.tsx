/**
 * Luna generated layout
 * Figma node: 5449:19239
 * Section: Modal Window
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { Loader2 } from "lucide-react";
import { figmaFieldProps, useFigmaScreenData } from "./useFigmaScreenData";
import { Button } from "@/components/ui/button";
import { FiRrCrossSmall2 } from "./FiRrCrossSmall2";
import { Input } from "@/components/ui/input";

const CATEGORY_MODAL_FRAME_ID = "5359:17278";

export function AddCategoryModalWindowSection() {
  const { submit, submitting, fieldErrors, submitError, closeCategoryDialog } =
    useFigmaScreenData();

  return (
    <section data-figma-node="5449:19239" className="relative box-border w-full min-w-0 min-h-[509px] pt-[24px] pr-[24px] pb-[24px] pl-[24px] rounded-[12px] flex flex-col items-start gap-6 bg-surface shadow-[0px_10px_20px_0px_rgba(0,0,0,0.141)]">
      <form
        className="box-border self-stretch min-w-0 flex flex-col items-start gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          void submit(CATEGORY_MODAL_FRAME_ID);
        }}
      >
      <div data-figma-node="5449:19240" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between">
        <div data-figma-node="5449:19241" className="box-border w-max max-w-[min(181px,100%)] h-auto relative flex flex-row items-center gap-2">
          <div data-figma-node="5449:19242" data-figma-component="5111:7679" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden relative block">
            <svg data-figma-node="I5449:19242;5111:7680" viewBox="0 0 18.78 18.27" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[12.5%] w-[79.167%] top-[12.5%] h-[75%] pointer-events-none overflow-visible"><path d="M5 7.27106C5.55228 7.27106 6 6.82334 6 6.27106C6 5.71877 5.55228 5.27106 5 5.27106L5 6.27106L5 7.27106ZM18.987 9.27106C18.987 8.71877 18.5393 8.27106 17.987 8.27106C17.4347 8.27106 16.987 8.71877 16.987 9.27106L17.987 9.27106L18.987 9.27106ZM1.09202 18.0531L1.54601 17.1621L1.54601 17.1621L1.09202 18.0531ZM0.217987 17.179L1.10899 16.725L1.10899 16.725L0.217987 17.179ZM16.895 18.0531L17.3489 18.9441L17.3489 18.9441L16.895 18.0531ZM17.769 17.179L16.878 16.725L16.878 16.725L17.769 17.179ZM0.217987 7.36307L-0.67302 6.90908L-0.67302 6.90908L0.217987 7.36307ZM1.09202 6.48904L0.638029 5.59804L0.638028 5.59804L1.09202 6.48904ZM3 11.2711C2.44772 11.2711 2 11.7188 2 12.2711C2 12.8233 2.44772 13.2711 3 13.2711L3 12.2711L3 11.2711ZM3.01 13.2711C3.56228 13.2711 4.01 12.8233 4.01 12.2711C4.01 11.7188 3.56228 11.2711 3.01 11.2711L3.01 12.2711L3.01 13.2711ZM8.51893 10.1656L7.54547 9.93671C7.46768 10.2676 7.56328 10.6153 7.79928 10.8599C8.03528 11.1045 8.37936 11.2125 8.7128 11.1466L8.51893 10.1656ZM10.5416 5.75188L9.83453 5.04477L9.83453 5.04477L10.5416 5.75188ZM9.6294 6.74221L10.4438 7.32247L9.6294 6.74221ZM8.83697 8.81271L7.86351 8.58386L7.86351 8.58386L8.83697 8.81271ZM9.1986 7.51572L10.1207 7.90261L10.1207 7.90261L9.1986 7.51572ZM13.1184 8.15265L12.4113 7.44554L13.1184 8.15265ZM12.06 9.12262L11.4885 8.30201L12.06 9.12262ZM9.83371 9.90574L10.0276 10.8868L10.0276 10.8868L9.83371 9.90574ZM11.2287 9.56629L11.5923 10.4978L11.2287 9.56629ZM18.2668 3.00421L18.974 3.71132L18.2668 3.00421ZM15.7781 0.515442L16.4852 1.22255L16.4852 1.22255L15.7781 0.515442ZM7 11.271C6.44772 11.271 6 11.7187 6 12.271C6 12.8233 6.44772 13.271 7 13.271L7 12.271L7 11.271ZM7.01 13.271C7.56228 13.271 8.01 12.8233 8.01 12.271C8.01 11.7187 7.56228 11.271 7.01 11.271L7.01 12.271L7.01 13.271ZM14.787 18.2711L14.787 17.2711L3.2 17.2711L3.2 18.2711L3.2 19.2711L14.787 19.2711L14.787 18.2711ZM0 15.0711L1 15.0711L1 9.47106L0 9.47106L-1 9.47106L-1 15.0711L0 15.0711ZM3.2 6.27106L3.2 7.27106L5 7.27106L5 6.27106L5 5.27106L3.2 5.27106L3.2 6.27106ZM17.987 9.27106L16.987 9.27106L16.987 15.0711L17.987 15.0711L18.987 15.0711L18.987 9.27106L17.987 9.27106ZM3.2 18.2711L3.2 17.2711C2.62344 17.2711 2.25117 17.2703 1.96784 17.2471C1.69617 17.2249 1.59545 17.1873 1.54601 17.1621L1.09202 18.0531L0.638028 18.9441C1.01641 19.1369 1.40963 19.2082 1.80497 19.2405C2.18864 19.2718 2.65645 19.2711 3.2 19.2711L3.2 18.2711ZM0 15.0711L-1 15.0711C-1 15.6146 -1.00078 16.0824 -0.969431 16.4661C-0.93713 16.8614 -0.865814 17.2546 -0.673019 17.633L0.217987 17.179L1.10899 16.725C1.0838 16.6756 1.04612 16.5749 1.02393 16.3032C1.00078 16.0199 1 15.6476 1 15.0711L0 15.0711ZM1.09202 18.0531L1.54601 17.1621C1.35785 17.0662 1.20487 16.9132 1.10899 16.725L0.217987 17.179L-0.67302 17.633C-0.385399 18.1975 0.0735437 18.6565 0.638028 18.9441L1.09202 18.0531ZM14.787 18.2711L14.787 19.2711C15.3305 19.2711 15.7983 19.2718 16.182 19.2405C16.5773 19.2082 16.9706 19.1369 17.3489 18.9441L16.895 18.0531L16.441 17.1621C16.3915 17.1873 16.2908 17.2249 16.0191 17.2471C15.7358 17.2703 15.3635 17.2711 14.787 17.2711L14.787 18.2711ZM17.987 15.0711L16.987 15.0711C16.987 15.6476 16.9862 16.0199 16.963 16.3032C16.9409 16.5749 16.9032 16.6756 16.878 16.725L17.769 17.179L18.66 17.633C18.8528 17.2546 18.9241 16.8614 18.9564 16.4661C18.9878 16.0824 18.987 15.6146 18.987 15.0711L17.987 15.0711ZM16.895 18.0531L17.3489 18.9441C17.9134 18.6565 18.3724 18.1975 18.66 17.633L17.769 17.179L16.878 16.725C16.7821 16.9132 16.6291 17.0662 16.441 17.1621L16.895 18.0531ZM0 9.47106L1 9.47106C1 8.8945 1.00078 8.52223 1.02393 8.23889C1.04612 7.96723 1.0838 7.86651 1.10899 7.81707L0.217987 7.36307L-0.67302 6.90908C-0.865814 7.28746 -0.93713 7.68068 -0.969431 8.07603C-1.00078 8.4597 -1 8.9275 -1 9.47106L0 9.47106ZM3.2 6.27106L3.2 5.27106C2.65645 5.27106 2.18864 5.27028 1.80497 5.30163C1.40963 5.33393 1.01641 5.40524 0.638029 5.59804L1.09202 6.48904L1.54601 7.38005C1.59545 7.35486 1.69617 7.31718 1.96784 7.29498C2.25117 7.27183 2.62345 7.27106 3.2 7.27106L3.2 6.27106ZM0.217987 7.36307L1.10899 7.81707C1.20487 7.6289 1.35785 7.47592 1.54601 7.38005L1.09202 6.48904L0.638028 5.59804C0.0735422 5.88566 -0.385399 6.3446 -0.67302 6.90908L0.217987 7.36307ZM3 12.2711L3 13.2711L3.01 13.2711L3.01 12.2711L3.01 11.2711L3 11.2711L3 12.2711ZM18.2668 3.00421L17.5597 2.2971L12.4113 7.44554L13.1184 8.15265L13.8255 8.85975L18.974 3.71132L18.2668 3.00421ZM10.5416 5.75188L11.2487 6.45898L16.4852 1.22255L15.7781 0.515442L15.071 -0.191665L9.83453 5.04477L10.5416 5.75188ZM9.83371 9.90574L9.63984 8.92471L8.32506 9.18454L8.51893 10.1656L8.7128 11.1466L10.0276 10.8868L9.83371 9.90574ZM8.51893 10.1656L9.49239 10.3944L9.81043 9.04156L8.83697 8.81271L7.86351 8.58386L7.54547 9.93671L8.51893 10.1656ZM10.5416 5.75188L9.83453 5.04477C9.37821 5.50109 9.06794 5.80688 8.81496 6.16195L9.6294 6.74221L10.4438 7.32247C10.5778 7.13437 10.7467 6.96099 11.2487 6.45898L10.5416 5.75188ZM8.83697 8.81271L9.81043 9.04156C9.9729 8.35046 10.0314 8.11558 10.1207 7.90261L9.1986 7.51572L8.27647 7.12884C8.1078 7.53087 8.0112 7.95565 7.86351 8.58386L8.83697 8.81271ZM9.6294 6.74221L8.81496 6.16195C8.60024 6.46333 8.41964 6.78761 8.27647 7.12884L9.1986 7.51572L10.1207 7.90261C10.2066 7.69787 10.315 7.5033 10.4438 7.32247L9.6294 6.74221ZM13.1184 8.15265L12.4113 7.44554C11.8755 7.98134 11.6903 8.16148 11.4885 8.30201L12.06 9.12262L12.6314 9.94324C13.0125 9.6779 13.3386 9.34667 13.8255 8.85975L13.1184 8.15265ZM9.83371 9.90574L10.0276 10.8868C10.7031 10.7533 11.1598 10.6667 11.5923 10.4978L11.2287 9.56629L10.865 8.63476C10.6359 8.72419 10.3832 8.7778 9.63983 8.92471L9.83371 9.90574ZM12.06 9.12262L11.4885 8.30201C11.2945 8.4371 11.0852 8.5488 10.865 8.63476L11.2287 9.56629L11.5923 10.4978C11.9593 10.3545 12.3081 10.1684 12.6314 9.94324L12.06 9.12262ZM18.2668 0.515441L17.5597 1.22255C17.8565 1.51928 17.8565 2.00037 17.5597 2.2971L18.2668 3.00421L18.974 3.71132C20.0517 2.63354 20.0517 0.886113 18.974 -0.191666L18.2668 0.515441ZM18.2668 0.515441L18.974 -0.191666C17.8962 -1.26945 16.1487 -1.26944 15.071 -0.191665L15.7781 0.515442L16.4852 1.22255C16.7819 0.925817 17.263 0.925818 17.5597 1.22255L18.2668 0.515441ZM7 12.271L7 13.271L7.01 13.271L7.01 12.271L7.01 11.271L7 11.271L7 12.271Z" fill="#a21d35" /></svg>
          </div>
          <h1 data-figma-node="5449:19243" className="box-border w-max max-w-[min(149px,100%)] h-auto min-h-[23px] font-onest text-[18px] font-[700] leading-[23px] text-left whitespace-nowrap text-text-primary">Create Category</h1>
        </div>
        <div data-figma-node="5449:19244" className="box-border w-max max-w-[min(36px,100%)] h-auto relative flex flex-row items-center gap-3">
          <Button data-figma-node="5449:19245" type="button" data-figma-action="act_9cb2d6ba2b8b" onClick={(e) => { e.preventDefault(); closeCategoryDialog(); }} className="p-0 box-border w-max max-w-[min(36px,100%)] h-auto rounded-[6px] relative flex flex-row items-start pt-[4px] pr-[4px] pb-[4px] pl-[4px] bg-background cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 justify-start hover:bg-background shadow-none" aria-label="Close create category dialog">
            <FiRrCrossSmall2 data-figma-node="5449:19246" data-figma-component="5121:8491" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden" />
          </Button>
        </div>
      </div>
      <div data-figma-node="5449:19247" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
        <div data-figma-node="5449:19248" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
          <label htmlFor="category-title-input" data-figma-node="5449:19249" className="box-border w-max max-w-[min(39px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Title</label>
          <Input
            id="category-title-input"
            data-figma-node="5449:19250"
            name="category-title"
            data-figma-field="category-title"
            data-figma-field-origin="design_text"
            {...figmaFieldProps("category-title")}
            type="text"
            placeholder="e.g., Q4 Product Launch Campaign"
            maxLength={100}
            aria-label="Title"
            aria-invalid={Boolean(fieldErrors["category-title"])}
            aria-describedby={fieldErrors["category-title"] ? "category-title-error" : undefined}
            className="p-0 box-border self-stretch min-w-0 h-[44px] shrink-0 rounded-[8px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[12px] pb-[10px] pl-[12px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary bg-surface font-onest text-[14px] font-[400] leading-[18px] text-left text-text-primary placeholder:text-color-27"
          />
        </div>
        <div data-figma-node="5908:36968" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
          <label htmlFor="category-icon-select" data-figma-node="5908:36969" className="box-border w-max max-w-[min(37px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Icon</label>
          <div className="box-border self-stretch min-w-0 shrink-0 rounded-[8px] relative border-[#e2d9d0] border-[1px] bg-surface h-[44px]">
            <select
              id="category-icon-select"
              data-figma-node="5908:36970"
              name="icon"
              data-figma-field="icon"
              data-figma-field-origin="design_text"
              {...figmaFieldProps("icon")}
              aria-label="Selected icon:"
              aria-invalid={Boolean(fieldErrors.icon)}
              aria-describedby={fieldErrors.icon ? "category-icon-error" : undefined}
              className="absolute inset-0 h-full w-full appearance-none bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer text-text-primary font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap pt-[10px] pr-[12px] pb-[10px] pl-[12px]"
            >
              <option value="">Selected icon:</option>
              <option value="FaCalendar">FaCalendar</option>
              <option value="FaEnvelope">FaEnvelope</option>
              <option value="FaMegaphone">FaMegaphone</option>
            </select>
          </div>
        </div>
        <div data-figma-node="5449:19253" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
          <label htmlFor="category-description-input" data-figma-node="5449:19254" className="box-border w-max max-w-[min(91px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] tracking-[0.48px] uppercase text-left whitespace-nowrap text-color-11">Description</label>
          <div data-figma-node="5449:19255" className="box-border self-stretch min-w-0 h-[136px] shrink-0 rounded-[8px] relative flex flex-col items-start gap-1 pr-[12px] pb-[12px] border-[#e2d9d0] border-[1px] bg-surface">
            <textarea
              id="category-description-input"
              name="category-description"
              data-figma-field="category-description"
              data-figma-field-origin="design_text"
              {...figmaFieldProps("category-description")}
              placeholder="Describe key objectives, milestones and channels..."
              aria-label="Description"
              aria-invalid={Boolean(fieldErrors["category-description"])}
              aria-describedby={fieldErrors["category-description"] ? "category-description-error" : undefined}
              className="box-border self-stretch min-w-0 min-h-[112px] shrink-0 border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary font-onest text-[14px] font-[400] leading-[18px] text-left text-text-primary placeholder:text-color-27 resize-none pt-[10px] pr-[8px] pb-[0px] pl-[20px]"
            />
          </div>
        </div>
      </div>
      <div className="sr-only" aria-live="polite">
        {fieldErrors["category-title"] ? <span id="category-title-error">{fieldErrors["category-title"]}</span> : null}
        {fieldErrors.icon ? <span id="category-icon-error">{fieldErrors.icon}</span> : null}
        {fieldErrors["category-description"] ? (
          <span id="category-description-error">{fieldErrors["category-description"]}</span>
        ) : null}
        {submitError ? submitError : null}
      </div>
      <div data-figma-node="5449:19298" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-border" />
      <div data-figma-node="5449:19299" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
        <Button data-figma-node="5449:19300" type="button" onClick={(e) => { e.preventDefault(); closeCategoryDialog(); }} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[78px] border-[#e2d9d0] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] inline-flex items-center justify-start whitespace-nowrap bg-transparent hover:bg-[#ffffff] hover:text-text-primary cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-color-11">Cancel</span></Button>
        <Button data-figma-node="5449:19302" type="submit" disabled={submitting} aria-busy={submitting} className="p-0 box-border w-max h-auto rounded-[6px] min-w-[153px] pt-[10px] pr-[20px] pb-[10px] pl-[20px] inline-flex items-center justify-start whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-2 hover:bg-primary shadow-none">
          {submitting ? (
            <Loader2 className="h-4 w-4 shrink-0 animate-spin text-surface motion-reduce:animate-none" aria-hidden />
          ) : null}
          <span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-surface">Create Category</span>
        </Button>
      </div>
      </form>
    </section>
  );
}
