/**
 * Luna generated layout
 * Figma node: 5329:12075
 * Section: Content
 * Route: /my-profile
 * Ownership: Figma-owned layout
 * Behavior: useFigmaScreenData / figmaFieldContract
 * luna-spec-codegen: owned-layout
 */
"use client";

import { figmaTextContent } from "./figmaDisplay";
import {
  FigmaFieldInlineError,
  useFigmaActionProps,
  useFigmaFieldProps,
  useFigmaScreenData,
} from "./useFigmaScreenData";
export function MyProfileContentSection() {
  const { submit } = useFigmaScreenData();
  return (
    <section data-figma-node="5329:12075" id="contact" className="absolute box-border left-[0px] top-[169px] w-full min-w-0 h-[1010px] [--fx:0] [--fww:1440] pr-[40px] pb-[52px] pl-[40px] flex flex-row items-start gap-6 z-[2]">
      <div data-figma-node="5329:12076" className="box-border w-[400px] h-[418px] rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)] relative flex flex-col items-start gap-6 pt-[32px] pr-[32px] pb-[32px] pl-[32px] border-[#e2d9d0] border-[1px] bg-background-2">
        <div data-figma-node="5329:12077" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-center gap-4">
          <div data-figma-node="5329:12078" className="box-border w-[100px] h-[100px] overflow-hidden rounded-[50px] relative flex flex-row items-start"></div>
          <div data-figma-node="5329:12079" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-center gap-1">
            <p data-figma-node="5329:12080" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[22px] font-[700] leading-[28px] text-center whitespace-nowrap text-brand-primary-1">Amy Morse</p>
            <p data-figma-node="5329:12081" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[600] leading-[18px] text-center whitespace-nowrap text-text-muted-1">Senior Campaign Lead</p>
          </div>
        </div>
        <div data-figma-node="5329:12082" className="box-border w-full min-w-0 h-full min-h-0 bg-[#e5e7eb] h-px" />
        <div data-figma-node="5329:12083" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-4">
          <div data-figma-node="5329:12084" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
            <p data-figma-node="5329:12085" className="box-border w-max max-w-[91px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-neutral-mid-3">Email Address</p>
            <p data-figma-node="5329:12086" className="box-border w-max max-w-[187px] h-auto min-h-[18px] font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5329:12086", "amy.morse@calendarflow.io")}</p>
          </div>
          <div data-figma-node="5337:4315" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
            <p data-figma-node="5337:4316" className="box-border w-max max-w-[91px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-neutral-mid-3">Phone number</p>
            <p data-figma-node="5337:4317" className="box-border w-max max-w-[119px] h-auto min-h-[18px] font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap text-text-body-1">+01 54545 45454</p>
          </div>
          <div data-figma-node="5329:12090" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1">
            <p data-figma-node="5329:12091" className="box-border w-max max-w-[133px] h-auto min-h-[14px] font-onest text-[11px] font-[700] leading-[14px] text-left whitespace-nowrap text-neutral-mid-3">Organization Access</p>
            <div data-figma-node="5329:12092" className="box-border w-max max-w-[135px] h-[18px] relative flex flex-row items-center gap-1.5">
              <div data-figma-node="5329:12093" className="box-border w-[6px] h-[6px] rounded-[3px] relative block bg-accent-teal-3"></div>
              <p data-figma-node="5329:12094" className="box-border w-max max-w-[123px] h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-accent-teal-3">Enterprise Partner</p>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-node="5329:12099" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-6">
        <div data-figma-node="5335:4259" className="box-border w-full min-w-0 h-full min-h-0 rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)] relative flex flex-col items-start gap-5 pt-[32px] pr-[32px] pb-[32px] pl-[32px] border-[#e2d9d0] border-[1px] bg-background-2">
          <div data-figma-node="5335:4260" className="box-border w-max max-w-[128px] h-[24px] relative flex flex-row items-center gap-2.5">
            <div data-figma-node="5337:4319" data-figma-component="5121:9728" className="box-border w-[24px] h-[24px] overflow-hidden relative flex flex-col items-center gap-[2px]">
              <svg data-figma-node="I5337:4319;403:1251" viewBox="0 0 12 12" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[12px] h-[12px] pointer-events-none overflow-visible"><path d="M6 12C7.18669 12 8.34673 11.6481 9.33342 10.9888C10.3201 10.3295 11.0892 9.39246 11.5433 8.2961C11.9974 7.19975 12.1162 5.99335 11.8847 4.82946C11.6532 3.66558 11.0818 2.59648 10.2426 1.75736C9.40353 0.918247 8.33443 0.346802 7.17054 0.115291C6.00666 -0.11622 4.80026 0.00259972 3.7039 0.456726C2.60754 0.910851 1.67047 1.67989 1.01118 2.66658C0.351894 3.65328 8.88179e-16 4.81331 0 6C0.00158843 7.59081 0.63424 9.11602 1.75911 10.2409C2.88399 11.3658 4.40919 11.9984 6 12ZM6 2C6.79113 2 7.56448 2.2346 8.22228 2.67412C8.88008 3.11365 9.39277 3.73836 9.69552 4.46927C9.99827 5.20017 10.0775 6.00444 9.92314 6.78036C9.7688 7.55629 9.38784 8.26902 8.82843 8.82843C8.26902 9.38784 7.55629 9.7688 6.78036 9.92314C6.00444 10.0775 5.20017 9.99827 4.46927 9.69552C3.73836 9.39277 3.11365 8.88008 2.67412 8.22228C2.2346 7.56449 2 6.79113 2 6C2 4.93914 2.42143 3.92172 3.17157 3.17158C3.92172 2.42143 4.93913 2 6 2L6 2Z" fill="#a21d35" /></svg>
              <svg data-figma-node="I5337:4319;403:1252" viewBox="0 0 18 10" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[18px] h-[10px] pointer-events-none overflow-visible"><path d="M9 0C6.61386 0.00264685 4.32622 0.951708 2.63896 2.63896C0.951708 4.32622 0.00264685 6.61386 0 9C1.33227e-15 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10C1.26522 10 1.51957 9.89464 1.70711 9.70711C1.89464 9.51957 2 9.26522 2 9C2 7.14348 2.7375 5.36301 4.05025 4.05025C5.36301 2.7375 7.14348 2 9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 9.26522 16.1054 9.51957 16.2929 9.70711C16.4804 9.89464 16.7348 10 17 10C17.2652 10 17.5196 9.89464 17.7071 9.70711C17.8946 9.51957 18 9.26522 18 9C17.9974 6.61386 17.0483 4.32622 15.361 2.63896C13.6738 0.951708 11.3861 0.00264685 9 0L9 0Z" fill="#a21d35" /></svg>
            </div>
            <p data-figma-node="5335:4264" className="box-border w-max max-w-[94px] h-auto min-h-[23px] font-onest text-[18px] font-[600] leading-[23px] text-left whitespace-nowrap text-text-body-1">Edit Profile</p>
          </div>
          <div data-figma-node="5335:4265" className="box-border w-full min-w-0 h-full min-h-0 bg-[#e5e7eb] h-px" />
          <form
            id="profile-edit-form"
            data-figma-node="5335:4266"
            data-figma-form="true"
            onSubmit={(e) => {
              e.preventDefault();
              void submit();
            }}
            className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-4"
          >
            <div data-figma-node="5337:4268" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5335:4267" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5335:4268" className="box-border w-max max-w-[74px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">First name</p>
                <input data-figma-node="5335:4269" name="first-name" data-figma-field="first-name" data-figma-field-origin="design_text" data-figma-api-field="first_name" {...useFigmaFieldProps("first-name")} type="text" aria-label="First name" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] border-[#e2d9d0] border-[1px] bg-background-2 font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap text-text-body-1 pt-[12px] pr-[14px] pb-[12px] pl-[14px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none" />
                <FigmaFieldInlineError field="first-name" />
              </div>
              <div data-figma-node="5337:4263" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5337:4264" className="box-border w-max max-w-[70px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">Last name</p>
                <input data-figma-node="5337:4265" name="last-name" data-figma-field="last-name" data-figma-field-origin="design_text" data-figma-api-field="last_name" {...useFigmaFieldProps("last-name")} type="text" aria-label="Last name" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] border-[#e2d9d0] border-[1px] bg-background-2 font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap text-text-body-1 pt-[12px] pr-[14px] pb-[12px] pl-[14px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none" />
                <FigmaFieldInlineError field="last-name" />
              </div>
            </div>
            <div data-figma-node="5337:4274" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5335:4271" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5335:4272" className="box-border w-max max-w-[99px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">Email Address</p>
                <input data-figma-node="5335:4273" name="email" data-figma-field="email" data-figma-field-origin="design_text" data-figma-api-field="email" {...useFigmaFieldProps("email")} type="email" aria-label="Email Address" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] border-[#e2d9d0] border-[1px] bg-background-2 font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap text-text-body-1 pt-[12px] pr-[14px] pb-[12px] pl-[14px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none" />
                <FigmaFieldInlineError field="email" />
              </div>
              <div data-figma-node="5337:4269" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5337:4270" className="box-border w-max max-w-[99px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">Phone number</p>
                <button data-figma-node="5337:4271" type="button" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-background-2 hover:opacity-90 cursor-pointer"><span className="font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap text-text-body-1 whitespace-nowrap">+01 54545 45454</span></button>
              </div>
            </div>
            <div data-figma-node="5335:4275" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
              <p data-figma-node="5335:4276" className="box-border w-max max-w-[33px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">Role</p>
              <div data-figma-node="5335:4277" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] relative flex flex-row items-start pt-[12px] pr-[14px] pb-[12px] pl-[14px] border-[#e2d9d0] border-[1px] bg-background-2">
                <p data-figma-node="5335:4278" className="box-border w-full min-w-0 h-full min-h-0 font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap text-text-body-1">{figmaTextContent("5335:4278", "Senior Campaign Lead")}</p>
              </div>
            </div>
            <div data-figma-node="5335:4283" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
              <p data-figma-node="5335:4284" className="box-border w-max max-w-[21px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">Bio</p>
              <textarea data-figma-node="5335:4285" name="bio" data-figma-field="bio" data-figma-field-origin="design_text" {...useFigmaFieldProps("bio")} placeholder="Tell us about yourself..." aria-label="Tell us about yourself..." className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e2d9d0] border-[1px] bg-background-2 pt-[14px] pr-[14px] pb-[14px] pl-[14px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
            </div>
          </form>
          <div data-figma-node="5335:4287" className="box-border w-full min-w-0 h-full min-h-0 opacity-[0.5] bg-[#e5e7eb] h-px" />
          <div data-figma-node="5335:4288" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start justify-end gap-3">
            <button data-figma-node="5335:4291" type="submit" form="profile-edit-form" data-figma-action="act_4d5182b12c73" {...useFigmaActionProps("act_4d5182b12c73")} className="box-border w-[112px] h-[42px] rounded-[8px] inline-flex items-center justify-center whitespace-nowrap bg-brand-primary-1 hover:opacity-90 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-background-2 whitespace-nowrap">Save</span></button>
          </div>
        </div>
        <div data-figma-node="5337:4275" className="box-border w-full min-w-0 h-full min-h-0 rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)] relative flex flex-col items-start gap-5 pt-[32px] pr-[32px] pb-[32px] pl-[32px] border-[#e2d9d0] border-[1px] bg-background-2">
          <div data-figma-node="5337:4314" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-center justify-between gap-5">
            <div data-figma-node="5337:4276" className="box-border w-max max-w-[189px] h-[24px] relative flex flex-row items-center gap-2.5">
              <div data-figma-node="5339:8819" data-figma-component="5121:8905" className="box-border w-[24px] h-[24px] overflow-hidden relative">
                <svg data-figma-node="I5339:8819;403:655" viewBox="0 0 23.99 24" preserveAspectRatio="none" aria-hidden="true" className="box-border w-[24px] h-[24px] absolute left-[0px] top-[0px] pointer-events-none overflow-visible"><path d="M7.49521 24C5.68496 23.9989 3.93622 23.343 2.57167 22.1535C1.20712 20.9639 0.318848 19.321 0.0707749 17.5278C-0.177299 15.7346 0.231563 13.9122 1.22191 12.3969C2.21226 10.8816 3.71727 9.7756 5.45921 9.28302C6.72534 8.92045 8.06551 8.90387 9.34021 9.23502L17.2482 1.32902C17.668 0.906302 18.1676 0.571153 18.7179 0.343015C19.2683 0.114877 19.8585 -0.0017098 20.4542 1.89472e-05L20.4542 1.89472e-05C21.3918 0.000813379 22.2907 0.37361 22.9537 1.03657C23.6166 1.69952 23.9894 2.59846 23.9902 3.53602C23.9918 4.13181 23.8752 4.722 23.6473 5.27246C23.4193 5.82292 23.0845 6.32274 22.6622 6.74302L21.9902 7.41502C21.6142 7.78846 21.1062 7.99865 20.5762 8.00002L18.9902 8.00002L18.9902 9.00002C18.9902 9.53045 18.7795 10.0392 18.4044 10.4142C18.0294 10.7893 17.5206 11 16.9902 11L15.9902 11L15.9902 12.586C15.9909 12.8488 15.9395 13.109 15.8389 13.3517C15.7383 13.5945 15.5906 13.8148 15.4042 14L14.7542 14.65C15.0872 15.9241 15.0709 17.2644 14.7072 18.53C14.2979 19.972 13.4675 21.259 12.3224 22.2262C11.1772 23.1934 9.76937 23.7968 8.27921 23.959C8.01875 23.9861 7.75707 23.9998 7.49521 24L7.49521 24ZM7.49521 11C6.47136 10.999 5.46756 11.2838 4.5968 11.8224C3.72604 12.361 3.02289 13.1319 2.56651 14.0484C2.11013 14.9649 1.91864 15.9906 2.01359 17.0101C2.10853 18.0295 2.48615 19.0022 3.10393 19.8187C3.72171 20.6351 4.55513 21.2629 5.51037 21.6314C6.46561 21.9999 7.50474 22.0945 8.5108 21.9044C9.51686 21.7144 10.4499 21.2473 11.2049 20.5557C11.9599 19.8642 12.5068 18.9756 12.7842 17.99C13.0962 16.9066 13.0612 15.7526 12.6842 14.69C12.6227 14.5126 12.6124 14.3214 12.6545 14.1383C12.6966 13.9553 12.7893 13.7878 12.9222 13.655L13.9902 12.586L13.9902 11C13.9902 10.4696 14.2009 9.96088 14.576 9.58581C14.9511 9.21073 15.4598 9.00002 15.9902 9.00002L16.9902 9.00002L16.9902 8.00002C16.9902 7.46959 17.2009 6.96088 17.576 6.58581C17.9511 6.21073 18.4598 6.00002 18.9902 6.00002L20.5762 6.00002L21.2482 5.32802C21.4842 5.09317 21.6712 4.81388 21.7986 4.5063C21.926 4.19871 21.9911 3.86893 21.9902 3.53602C21.9899 3.1289 21.8282 2.73852 21.5404 2.45055C21.2526 2.16258 20.8623 2.00055 20.4552 2.00002C20.1221 1.9992 19.7921 2.06445 19.4843 2.19198C19.1765 2.31951 18.8971 2.5068 18.6622 2.74302L10.3312 11.073C10.1983 11.2059 10.0305 11.2986 9.8473 11.3405C9.66406 11.3825 9.47272 11.3719 9.29521 11.31C8.71528 11.1058 8.10504 11.001 7.49021 11L7.49521 11ZM4.99021 18C4.99021 18.1978 5.04886 18.3911 5.15874 18.5556C5.26862 18.72 5.4248 18.8482 5.60753 18.9239C5.79025 18.9996 5.99132 19.0194 6.1853 18.9808C6.37928 18.9422 6.55747 18.847 6.69732 18.7071C6.83717 18.5673 6.93241 18.3891 6.971 18.1951C7.00958 18.0011 6.98978 17.8001 6.91409 17.6173C6.8384 17.4346 6.71023 17.2784 6.54578 17.1685C6.38133 17.0587 6.18799 17 5.99021 17C5.725 17 5.47064 17.1054 5.28311 17.2929C5.09557 17.4804 4.99021 17.7348 4.99021 18Z" fill="#a21d35" /></svg>
              </div>
              <p data-figma-node="5337:4280" className="box-border w-max max-w-[155px] h-auto min-h-[23px] font-onest text-[18px] font-[600] leading-[23px] text-left whitespace-nowrap text-text-body-1">Change Password</p>
            </div>
            <p data-figma-node="5329:12173" className="box-border w-max max-w-[158px] h-auto min-h-[15px] font-onest text-[12px] font-[400] leading-[15px] text-left whitespace-nowrap text-text-muted-1">Last updated 4 months ago.</p>
          </div>
          <div data-figma-node="5337:4281" className="box-border w-full min-w-0 h-full min-h-0 bg-[#e5e7eb] h-px" />
          <div data-figma-node="5337:4282" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-4">
            <div data-figma-node="5337:4283" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5337:4284" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5337:4285" className="box-border w-max max-w-[131px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">Current Password</p>
                <button data-figma-node="5337:4286" type="button" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] border-[#e2d9d0] border-[1px] inline-flex items-center justify-center whitespace-nowrap bg-background-2 hover:opacity-90 cursor-pointer"><span className="font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap text-text-body-1 whitespace-nowrap">**********</span></button>
              </div>
              <div data-figma-node="5337:4288" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5337:4289" className="box-border w-max max-w-[101px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">New Password</p>
                <input data-figma-node="5337:4290" name="new-password" data-figma-field="new-password" data-figma-field-origin="design_text" {...useFigmaFieldProps("new-password")} type="password" placeholder="New Password" aria-label="New Password" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e2d9d0] border-[1px] bg-background-2 pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
              </div>
            </div>
            <div data-figma-node="5337:4292" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5337:4293" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-col items-start gap-1.5">
                <p data-figma-node="5337:4294" className="box-border w-max max-w-[130px] h-auto min-h-[15px] font-onest text-[12px] font-[700] leading-[15px] text-left whitespace-nowrap text-neutral-mid-3">Confirm Password</p>
                <input data-figma-node="5337:4295" name="confirm-password" data-figma-field="confirm-password" data-figma-field-origin="design_text" {...useFigmaFieldProps("confirm-password")} type="password" placeholder="Confirm Password" aria-label="Confirm Password" className="box-border w-full min-w-0 h-full min-h-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#e2d9d0] border-[1px] bg-background-2 pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-neutral-mid-3 placeholder:text-[#9ca3af]" />
              </div>
            </div>
          </div>
          <div data-figma-node="5337:4309" className="box-border w-full min-w-0 h-full min-h-0 opacity-[0.5] bg-[#e5e7eb] h-px" />
          <div data-figma-node="5337:4310" className="box-border w-full min-w-0 h-full min-h-0 relative flex flex-row items-start justify-end gap-3">
            <input data-figma-node="5339:8839" name="change-password" data-figma-field="change-password" data-figma-field-origin="design_text" {...useFigmaFieldProps("change-password")} type="password" placeholder="Change Password" aria-label="Change Password" className="box-border w-[179px] h-[36px] rounded-[6px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-none border-[#a21d35] border-[1px] bg-transparent pt-[8px] pr-[12px] pb-[8px] pl-[12px] text-brand-primary-1 placeholder:text-[#a21d35]" />
          </div>
        </div>
      </div>
    </section>
  );
}
