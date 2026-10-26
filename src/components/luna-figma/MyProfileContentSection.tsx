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

import { figmaFieldProps, resolveApiBaseUrl, useFigmaScreenData } from "./useFigmaScreenData";
import { figmaTextContent } from "./figmaDisplay";
import { FigmaFieldError, figmaFieldA11y } from "./figmaFieldErrors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { figmaOperations, validateValues } from "./figmaFieldContract";

const AVATAR_FALLBACK =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23e5e7eb'/%3E%3C/svg%3E";

function resolveAvatarUrl(url: string | null | undefined): string {
  if (!url) {
    return AVATAR_FALLBACK;
  }
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  const base = resolveApiBaseUrl();
  return `${base}${url.startsWith("/") ? url : `/${url}`}`;
}

export function MyProfileContentSection() {
  const {
    fieldErrors,
    fieldValues,
    submit,
    submitting,
    usersLoading,
    usersError,
    loadReads,
    profileUser,
    setFieldErrors,
    statusMessage,
    submitError,
  } = useFigmaScreenData();

  const PROFILE_PUT_PATH = "/api/v1/marketing-team-member/profile";
  const PASSWORD_POST_PATH = "/api/v1/marketing-team-member/profile/password";
  const loadingFieldClass = usersLoading ? " animate-pulse opacity-70" : "";

  const displayName =
    profileUser != null
      ? `${profileUser.first_name ?? ""} ${profileUser.last_name ?? ""}`.trim() ||
        profileUser.email
      : "Amy Morse";
  const displayEmail = profileUser?.email ?? "amy.morse@calendarflow.io";
  const displayPhone = profileUser?.phone ?? fieldValues["phone-number"] ?? "+01 54545 45454";

  const validateFieldOnBlur = (field: string) => {
    const profileWriteOp = figmaOperations("5329:12027").find(
      (op) => op.role === "write" && op.path === PROFILE_PUT_PATH,
    );
    const passwordWriteOp = figmaOperations("5329:12027").find(
      (op) => op.path === PASSWORD_POST_PATH,
    );
    const op =
      field.startsWith("new-") || field.startsWith("current-") || field === "confirm-password"
        ? passwordWriteOp
        : profileWriteOp;
    if (!op) {
      return;
    }
    const errors = validateValues(op, fieldValues);
    if (field === "confirm-password" || field === "new-password") {
      const newPassword = String(fieldValues["new-password"] ?? "").trim();
      const confirmPassword = String(fieldValues["confirm-password"] ?? "").trim();
      if (confirmPassword && newPassword !== confirmPassword) {
        errors["confirm-password"] = "Passwords do not match.";
      }
      if (field === "new-password" && newPassword && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(newPassword)) {
        errors["new-password"] =
          "Use at least 8 characters with upper, lower, a number, and a special character.";
      }
    }
    setFieldErrors((prev) => {
      const next = { ...prev };
      if (errors[field]) {
        next[field] = errors[field];
      } else {
        delete next[field];
      }
      if (field === "new-password" && errors["confirm-password"]) {
        next["confirm-password"] = errors["confirm-password"];
      }
      return next;
    });
  };

  return (
    <section data-figma-node="5329:12075" id="contact" className="absolute top-[169px] left-0 right-0 box-border w-full min-w-0 h-[1010px] overflow-hidden pr-[40px] pb-[52px] pl-[40px] flex flex-row items-start gap-6 z-[2]">
      <div data-figma-node="5329:12076" className="box-border w-[400px] shrink-0 h-auto rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)] relative flex flex-col items-start gap-6 pt-[32px] pr-[32px] pb-[32px] pl-[32px] border-[#e2d9d0] border-[1px] bg-surface">
        <div data-figma-node="5329:12077" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-center gap-4">
          <img data-figma-node="5329:12078" src={resolveAvatarUrl(profileUser?.avatar_url)} alt="LargeAvatar" onError={e => { const img = e.currentTarget as HTMLImageElement; img.onerror = null; img.src = AVATAR_FALLBACK; }} className="box-border w-[100px] h-[100px] shrink-0 overflow-hidden rounded-[50px] object-cover" />
          <div data-figma-node="5329:12079" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-center gap-1">
            <h2 data-figma-node="5329:12080" className="box-border self-stretch min-w-0 h-auto min-h-[28px] shrink-0 font-onest text-[22px] font-[700] leading-[28px] text-center text-primary">{displayName}</h2>
            <p data-figma-node="5329:12081" className="box-border self-stretch min-w-0 h-auto min-h-[18px] shrink-0 font-onest text-[14px] font-[600] leading-[18px] uppercase text-center text-text-secondary">{figmaTextContent("5335:4278", "Senior Campaign Lead")}</p>
          </div>
        </div>
        <div data-figma-node="5329:12082" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-color-8" />
        <div data-figma-node="5329:12083" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
          <div data-figma-node="5329:12084" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1">
            <p data-figma-node="5329:12085" className="box-border w-max max-w-[min(95px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[700] leading-[14px] uppercase text-left whitespace-nowrap text-color-10">Email Address</p>
            <p data-figma-node="5329:12086" className="box-border w-max max-w-[min(191px,100%)] h-auto min-h-[18px] shrink-0 font-onest text-[14px] font-[500] leading-[18px] text-left lg:whitespace-nowrap text-text-primary">{displayEmail}</p>
          </div>
          <div data-figma-node="5337:4315" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1">
            <p data-figma-node="5337:4316" className="box-border w-max max-w-[min(95px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[700] leading-[14px] uppercase text-left whitespace-nowrap text-color-10">Phone number</p>
            <p data-figma-node="5337:4317" className="box-border w-max max-w-[min(123px,100%)] h-auto min-h-[18px] shrink-0 font-onest text-[14px] font-[500] leading-[18px] text-left whitespace-nowrap text-text-primary">{displayPhone}</p>
          </div>
          <div data-figma-node="5329:12090" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1">
            <p data-figma-node="5329:12091" className="box-border w-max max-w-[min(137px,100%)] h-auto min-h-[14px] shrink-0 font-onest text-[11px] font-[700] leading-[14px] uppercase text-left whitespace-nowrap text-color-10">Organization Access</p>
            <div data-figma-node="5329:12092" className="box-border w-max max-w-[min(139px,100%)] h-auto shrink-0 relative flex flex-row items-center gap-1.5">
              <div data-figma-node="5329:12093" className="box-border w-[6px] shrink-0 h-[6px] rounded-[3px] relative block bg-accent"></div>
              <p data-figma-node="5329:12094" className="box-border w-max max-w-[min(127px,100%)] h-auto min-h-[18px] font-onest text-[14px] font-[600] leading-[18px] text-left whitespace-nowrap text-accent">Enterprise Partner</p>
            </div>
          </div>
        </div>
      </div>
      <div data-figma-node="5329:12099" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-6">
        <div data-figma-node="5335:4259" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)] relative flex flex-col items-start gap-5 pt-[32px] pr-[32px] pb-[32px] pl-[32px] border-[#e2d9d0] border-[1px] bg-surface">
          <header data-figma-node="5335:4260" className="box-border w-max max-w-[min(132px,100%)] h-auto shrink-0 relative flex flex-row items-center gap-2.5">
            <div data-figma-node="5337:4319" data-figma-component="5121:9728" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden relative block">
              <svg data-figma-node="I5337:4319;403:1251" viewBox="0 0 12 12" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[25%] w-[50%] top-[0%] h-[50%] pointer-events-none overflow-visible"><path d="M6 12C7.18669 12 8.34673 11.6481 9.33342 10.9888C10.3201 10.3295 11.0892 9.39246 11.5433 8.2961C11.9974 7.19975 12.1162 5.99335 11.8847 4.82946C11.6532 3.66558 11.0818 2.59648 10.2426 1.75736C9.40353 0.918247 8.33443 0.346802 7.17054 0.115291C6.00666 -0.11622 4.80026 0.00259972 3.7039 0.456726C2.60754 0.910851 1.67047 1.67989 1.01118 2.66658C0.351894 3.65328 8.88179e-16 4.81331 0 6C0.00158843 7.59081 0.63424 9.11602 1.75911 10.2409C2.88399 11.3658 4.40919 11.9984 6 12ZM6 2C6.79113 2 7.56448 2.2346 8.22228 2.67412C8.88008 3.11365 9.39277 3.73836 9.69552 4.46927C9.99827 5.20017 10.0775 6.00444 9.92314 6.78036C9.7688 7.55629 9.38784 8.26902 8.82843 8.82843C8.26902 9.38784 7.55629 9.7688 6.78036 9.92314C6.00444 10.0775 5.20017 9.99827 4.46927 9.69552C3.73836 9.39277 3.11365 8.88008 2.67412 8.22228C2.2346 7.56449 2 6.79113 2 6C2 4.93914 2.42143 3.92172 3.17157 3.17158C3.92172 2.42143 4.93913 2 6 2L6 2Z" fill="#a21d35" /></svg>
              <svg data-figma-node="I5337:4319;403:1252" viewBox="0 0 18 10" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[12.5%] w-[75%] top-[58.333%] h-[41.667%] pointer-events-none overflow-visible"><path d="M9 0C6.61386 0.00264685 4.32622 0.951708 2.63896 2.63896C0.951708 4.32622 0.00264685 6.61386 0 9C1.33227e-15 9.26522 0.105357 9.51957 0.292893 9.70711C0.48043 9.89464 0.734784 10 1 10C1.26522 10 1.51957 9.89464 1.70711 9.70711C1.89464 9.51957 2 9.26522 2 9C2 7.14348 2.7375 5.36301 4.05025 4.05025C5.36301 2.7375 7.14348 2 9 2C10.8565 2 12.637 2.7375 13.9497 4.05025C15.2625 5.36301 16 7.14348 16 9C16 9.26522 16.1054 9.51957 16.2929 9.70711C16.4804 9.89464 16.7348 10 17 10C17.2652 10 17.5196 9.89464 17.7071 9.70711C17.8946 9.51957 18 9.26522 18 9C17.9974 6.61386 17.0483 4.32622 15.361 2.63896C13.6738 0.951708 11.3861 0.00264685 9 0L9 0Z" fill="#a21d35" /></svg>
            </div>
            <h3 data-figma-node="5335:4264" className="box-border w-max max-w-[min(98px,100%)] h-auto min-h-[23px] font-onest text-[18px] font-[600] leading-[23px] text-left whitespace-nowrap text-text-primary">Edit Profile</h3>
          </header>
          <div data-figma-node="5335:4265" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-color-8" />
          <div className="sr-only" aria-live="polite">
            {usersLoading ? "Loading profile." : null}
            {statusMessage ? statusMessage : null}
            {submitError ? submitError : null}
            {usersError ? (
              <>
                {usersError}
                <button type="button" onClick={() => void loadReads()}>
                  Retry
                </button>
              </>
            ) : null}
          </div>
          {submitError ? (
            <div role="alert" className="box-border self-stretch min-w-0 shrink-0 pt-[8px]">
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">{submitError}</p>
            </div>
          ) : null}
          {usersError ? (
            <div role="alert" className="box-border self-stretch min-w-0 shrink-0 flex flex-row items-center gap-3 pt-[8px]">
              <p className="font-onest text-[14px] font-[400] leading-[18px] text-text-secondary">{usersError}</p>
              <button
                type="button"
                onClick={() => void loadReads()}
                className="font-onest text-[13px] font-[700] leading-[17px] text-primary underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Retry
              </button>
            </div>
          ) : null}
          <form
            aria-busy={usersLoading}
            onSubmit={(e) => {
              e.preventDefault();
              void submit("5329:12027", PROFILE_PUT_PATH);
            }}
          >
          <div data-figma-node="5335:4266" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
            <div data-figma-node="5337:4268" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5335:4267" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <label htmlFor="profile-first-name" data-figma-node="5335:4268" className="box-border w-max max-w-[min(78px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-10">First name</label>
                <Input data-figma-node="5335:4269" id="profile-first-name" name="first-name" data-figma-field="first-name" data-figma-field-origin="design_text" {...figmaFieldProps("first-name")} onBlur={() => validateFieldOnBlur("first-name")} disabled={usersLoading} type="text" placeholder="Amy" autoComplete="given-name" aria-label="First name" aria-required="true" {...figmaFieldA11y(fieldErrors, "first-name")} className={`box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-text-primary placeholder:text-[#9ca3af] hover:bg-surface${loadingFieldClass}`} />
                <FigmaFieldError errors={fieldErrors} field="first-name" />
              </div>
              <div data-figma-node="5337:4263" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <label htmlFor="profile-last-name" data-figma-node="5337:4264" className="box-border w-max max-w-[min(74px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-10">Last name</label>
                <Input data-figma-node="5337:4265" id="profile-last-name" name="last-name" data-figma-field="last-name" data-figma-field-origin="design_text" {...figmaFieldProps("last-name")} onBlur={() => validateFieldOnBlur("last-name")} disabled={usersLoading} type="text" placeholder="Morse" autoComplete="family-name" aria-label="Last name" aria-required="true" {...figmaFieldA11y(fieldErrors, "last-name")} className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-text-primary placeholder:text-[#9ca3af] hover:bg-surface" />
                <FigmaFieldError errors={fieldErrors} field="last-name" />
              </div>
            </div>
            <div data-figma-node="5337:4274" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5335:4271" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <label htmlFor="profile-email" data-figma-node="5335:4272" className="box-border w-max max-w-[min(103px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-10">Email Address</label>
                <Input data-figma-node="5335:4273" id="profile-email" name="email-address" data-figma-field="email-address" data-figma-field-origin="design_text" {...figmaFieldProps("email-address")} onBlur={() => validateFieldOnBlur("email-address")} disabled={usersLoading} type="email" inputMode="email" placeholder="amy.morse@calendarflow.io" autoComplete="email" aria-label="Email Address" aria-required="true" {...figmaFieldA11y(fieldErrors, "email-address")} className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-text-primary placeholder:text-[#9ca3af] hover:bg-surface" />
                <FigmaFieldError errors={fieldErrors} field="email-address" />
              </div>
              <div data-figma-node="5337:4269" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <label htmlFor="profile-phone" data-figma-node="5337:4270" className="box-border w-max max-w-[min(103px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-10">Phone number</label>
                <Input data-figma-node="5337:4271" id="profile-phone" name="phone-number" data-figma-field="phone-number" data-figma-field-origin="design_text" {...figmaFieldProps("phone-number")} onBlur={() => validateFieldOnBlur("phone-number")} disabled={usersLoading} type="tel" inputMode="tel" placeholder="+01 54545 45454" autoComplete="tel" aria-label="Phone number" {...figmaFieldA11y(fieldErrors, "phone-number")} className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-text-primary placeholder:text-[#9ca3af] hover:bg-surface" />
                <FigmaFieldError errors={fieldErrors} field="phone-number" />
              </div>
            </div>
            <div data-figma-node="5335:4275" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
              <p data-figma-node="5335:4276" className="box-border w-max max-w-[min(37px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-10">Role</p>
              <div data-figma-node="5335:4277" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] relative flex flex-row items-start pt-[12px] pr-[14px] pb-[12px] pl-[14px] border-[#e2d9d0] border-[1px] bg-surface">
                <p data-figma-node="5335:4278" className="box-border flex-1 min-w-0 h-auto min-h-[18px] font-onest text-[14px] font-[500] leading-[18px] text-left text-text-primary">{figmaTextContent("5335:4278", "Senior Campaign Lead")}</p>
              </div>
            </div>
            <div data-figma-node="5335:4283" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-1.5">
              <label htmlFor="profile-bio" data-figma-node="5335:4284" className="box-border w-max max-w-[min(25px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-10">Bio</label>
              <Textarea data-figma-node="5335:4286" id="profile-bio" name="bio" data-figma-field="bio" data-figma-field-origin="design_text" {...figmaFieldProps("bio")} onBlur={() => validateFieldOnBlur("bio")} disabled={usersLoading} placeholder="Tell us about yourself..." aria-label="Bio" {...figmaFieldA11y(fieldErrors, "bio")} className="box-border self-stretch min-w-0 h-[120px] shrink-0 rounded-[8px] relative flex flex-col items-start pt-[14px] pr-[14px] pb-[14px] pl-[14px] border-[#e2d9d0] border-[1px] bg-surface font-onest text-[14px] font-[500] leading-[18px] text-left text-text-primary placeholder:text-color-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary resize-none shadow-none ring-0 focus-visible:ring-0" />
              <FigmaFieldError errors={fieldErrors} field="bio" />
            </div>
          </div>
          <div data-figma-node="5335:4287" className="box-border self-stretch min-w-0 h-[1px] shrink-0 opacity-[0.5] bg-color-8" />
          <div data-figma-node="5335:4288" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
            <Button data-figma-node="5335:4291" type="submit" data-figma-action="act_fb3c8e04cdf0" data-figma-overlay-opens="5327:3852" disabled={usersLoading || submitting} className="p-0 box-border w-[112px] shrink-0 h-auto rounded-[8px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] inline-flex items-center justify-center whitespace-nowrap bg-primary hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current disabled:cursor-not-allowed disabled:opacity-50 gap-0 hover:bg-primary shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-surface">{submitting ? "Saving…" : "Save"}</span></Button>
          </div>
          </form>
        </div>
        <div data-figma-node="5337:4275" className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[12px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)] relative flex flex-col items-start gap-5 pt-[32px] pr-[32px] pb-[32px] pl-[32px] border-[#e2d9d0] border-[1px] bg-surface">
          <div data-figma-node="5337:4314" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-center justify-between gap-5">
            <header data-figma-node="5337:4276" className="box-border w-max max-w-[min(193px,100%)] h-auto relative flex flex-row items-center gap-2.5">
              <div data-figma-node="5339:8819" data-figma-component="5121:8905" className="box-border w-[24px] shrink-0 h-[24px] overflow-hidden relative block">
                <svg data-figma-node="I5339:8819;403:655" viewBox="0 0 23.99 24" preserveAspectRatio="none" aria-hidden="true" className="box-border absolute left-[0%] w-[100%] top-[0%] h-[100%] pointer-events-none overflow-visible"><path d="M7.49521 24C5.68496 23.9989 3.93622 23.343 2.57167 22.1535C1.20712 20.9639 0.318848 19.321 0.0707749 17.5278C-0.177299 15.7346 0.231563 13.9122 1.22191 12.3969C2.21226 10.8816 3.71727 9.7756 5.45921 9.28302C6.72534 8.92045 8.06551 8.90387 9.34021 9.23502L17.2482 1.32902C17.668 0.906302 18.1676 0.571153 18.7179 0.343015C19.2683 0.114877 19.8585 -0.0017098 20.4542 1.89472e-05L20.4542 1.89472e-05C21.3918 0.000813379 22.2907 0.37361 22.9537 1.03657C23.6166 1.69952 23.9894 2.59846 23.9902 3.53602C23.9918 4.13181 23.8752 4.722 23.6473 5.27246C23.4193 5.82292 23.0845 6.32274 22.6622 6.74302L21.9902 7.41502C21.6142 7.78846 21.1062 7.99865 20.5762 8.00002L18.9902 8.00002L18.9902 9.00002C18.9902 9.53045 18.7795 10.0392 18.4044 10.4142C18.0294 10.7893 17.5206 11 16.9902 11L15.9902 11L15.9902 12.586C15.9909 12.8488 15.9395 13.109 15.8389 13.3517C15.7383 13.5945 15.5906 13.8148 15.4042 14L14.7542 14.65C15.0872 15.9241 15.0709 17.2644 14.7072 18.53C14.2979 19.972 13.4675 21.259 12.3224 22.2262C11.1772 23.1934 9.76937 23.7968 8.27921 23.959C8.01875 23.9861 7.75707 23.9998 7.49521 24L7.49521 24ZM7.49521 11C6.47136 10.999 5.46756 11.2838 4.5968 11.8224C3.72604 12.361 3.02289 13.1319 2.56651 14.0484C2.11013 14.9649 1.91864 15.9906 2.01359 17.0101C2.10853 18.0295 2.48615 19.0022 3.10393 19.8187C3.72171 20.6351 4.55513 21.2629 5.51037 21.6314C6.46561 21.9999 7.50474 22.0945 8.5108 21.9044C9.51686 21.7144 10.4499 21.2473 11.2049 20.5557C11.9599 19.8642 12.5068 18.9756 12.7842 17.99C13.0962 16.9066 13.0612 15.7526 12.6842 14.69C12.6227 14.5126 12.6124 14.3214 12.6545 14.1383C12.6966 13.9553 12.7893 13.7878 12.9222 13.655L13.9902 12.586L13.9902 11C13.9902 10.4696 14.2009 9.96088 14.576 9.58581C14.9511 9.21073 15.4598 9.00002 15.9902 9.00002L16.9902 9.00002L16.9902 8.00002C16.9902 7.46959 17.2009 6.96088 17.576 6.58581C17.9511 6.21073 18.4598 6.00002 18.9902 6.00002L20.5762 6.00002L21.2482 5.32802C21.4842 5.09317 21.6712 4.81388 21.7986 4.5063C21.926 4.19871 21.9911 3.86893 21.9902 3.53602C21.9899 3.1289 21.8282 2.73852 21.5404 2.45055C21.2526 2.16258 20.8623 2.00055 20.4552 2.00002C20.1221 1.9992 19.7921 2.06445 19.4843 2.19198C19.1765 2.31951 18.8971 2.5068 18.6622 2.74302L10.3312 11.073C10.1983 11.2059 10.0305 11.2986 9.8473 11.3405C9.66406 11.3825 9.47272 11.3719 9.29521 11.31C8.71528 11.1058 8.10504 11.001 7.49021 11L7.49521 11ZM4.99021 18C4.99021 18.1978 5.04886 18.3911 5.15874 18.5556C5.26862 18.72 5.4248 18.8482 5.60753 18.9239C5.79025 18.9996 5.99132 19.0194 6.1853 18.9808C6.37928 18.9422 6.55747 18.847 6.69732 18.7071C6.83717 18.5673 6.93241 18.3891 6.971 18.1951C7.00958 18.0011 6.98978 17.8001 6.91409 17.6173C6.8384 17.4346 6.71023 17.2784 6.54578 17.1685C6.38133 17.0587 6.18799 17 5.99021 17C5.725 17 5.47064 17.1054 5.28311 17.2929C5.09557 17.4804 4.99021 17.7348 4.99021 18Z" fill="#a21d35" /></svg>
              </div>
              <h3 data-figma-node="5337:4280" className="box-border w-max max-w-[min(159px,100%)] h-auto min-h-[23px] font-onest text-[18px] font-[600] leading-[23px] text-left whitespace-nowrap text-text-primary">Change Password</h3>
            </header>
            <p data-figma-node="5329:12173" className="box-border w-max max-w-[min(162px,100%)] h-auto min-h-[15px] font-onest text-[12px] font-[400] leading-[15px] text-left whitespace-nowrap text-text-secondary">Last updated 4 months ago.</p>
          </div>
          <div data-figma-node="5337:4281" className="box-border self-stretch min-w-0 h-[1px] shrink-0 bg-color-8" />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              void submit("5329:12027", PASSWORD_POST_PATH);
            }}
          >
          <div data-figma-node="5337:4282" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-col items-start gap-4">
            <div data-figma-node="5337:4283" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5337:4284" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <label htmlFor="profile-current-password" data-figma-node="5337:4285" className="box-border w-max max-w-[min(135px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-10">Current Password</label>
                <Input data-figma-node="5337:4286" id="profile-current-password" name="current-password" data-figma-field="current-password" data-figma-field-origin="design_text" data-figma-api-field="current_password" {...figmaFieldProps("current-password")} onBlur={() => validateFieldOnBlur("current-password")} type="password" placeholder="**********" autoComplete="current-password" aria-label="Current Password" aria-required="true" {...figmaFieldA11y(fieldErrors, "current-password")} className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-text-primary placeholder:text-[#9ca3af] hover:bg-surface" />
                <FigmaFieldError errors={fieldErrors} field="current-password" />
              </div>
              <div data-figma-node="5337:4288" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <label htmlFor="profile-new-password" data-figma-node="5337:4289" className="box-border w-max max-w-[min(105px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-10">New Password</label>
                <Input data-figma-node="5337:4290" id="profile-new-password" name="new-password" data-figma-field="new-password" data-figma-field-origin="design_text" data-figma-api-field="new_password" {...figmaFieldProps("new-password")} onBlur={() => validateFieldOnBlur("new-password")} type="password" placeholder="**********" autoComplete="new-password" aria-label="New Password" aria-required="true" {...figmaFieldA11y(fieldErrors, "new-password")} className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-color-10 placeholder:text-[#9ca3af] hover:bg-surface" />
                <FigmaFieldError errors={fieldErrors} field="new-password" />
              </div>
            </div>
            <div data-figma-node="5337:4292" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start gap-4">
              <div data-figma-node="5337:4293" className="box-border flex-1 min-w-0 h-auto relative flex flex-col items-start gap-1.5">
                <label htmlFor="profile-confirm-password" data-figma-node="5337:4294" className="box-border w-max max-w-[min(134px,100%)] h-auto min-h-[15px] shrink-0 font-onest text-[12px] font-[700] leading-[15px] uppercase text-left whitespace-nowrap text-color-10">Confirm Password</label>
                <Input data-figma-node="5337:4295" id="profile-confirm-password" name="confirm-password" data-figma-field="confirm-password" data-figma-field-origin="design_text" {...figmaFieldProps("confirm-password")} onBlur={() => validateFieldOnBlur("confirm-password")} type="password" placeholder="**********" autoComplete="new-password" aria-label="Confirm Password" {...figmaFieldA11y(fieldErrors, "confirm-password")} className="box-border self-stretch min-w-0 h-auto shrink-0 rounded-[8px] shadow-none ring-0 focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary border-[#e2d9d0] border-[1px] bg-surface pt-[12px] pr-[14px] pb-[12px] pl-[14px] text-color-10 placeholder:text-[#9ca3af] hover:bg-surface" />
                <FigmaFieldError errors={fieldErrors} field="confirm-password" />
              </div>
            </div>
          </div>
          <div data-figma-node="5337:4309" className="box-border self-stretch min-w-0 h-[1px] shrink-0 opacity-[0.5] bg-color-8" />
          <div data-figma-node="5337:4310" className="box-border self-stretch min-w-0 h-auto shrink-0 relative flex flex-row items-start justify-end gap-3">
            <Button data-figma-node="5339:8839" type="submit" disabled={submitting} className="p-0 box-border w-[179px] shrink-0 h-[36px] rounded-[6px] inline-flex items-center justify-center whitespace-nowrap border-[#a21d35] border-[1px] bg-transparent pt-[8px] pr-[12px] pb-[8px] pl-[12px] hover:opacity-90 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-50 shadow-none"><span className="font-onest text-[14px] font-[700] leading-[18px] text-left whitespace-nowrap text-primary">{submitting ? "Saving…" : "Change Password"}</span></Button>
          </div>
          </form>
          <span className="sr-only" aria-live="polite">{submitting ? "Updating password." : null}</span>
        </div>
      </div>
    </section>
  );
}
