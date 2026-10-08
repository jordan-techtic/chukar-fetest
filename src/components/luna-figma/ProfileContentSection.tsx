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

import { updateMarketingTeamMemberProfile } from "@/lib/api/marketing-team-member-profile";
import { useFigmaTextContent } from "./figmaDisplay";
import { useFigmaActionProps, useFigmaFieldProps, useFigmaScreenData } from "./useFigmaScreenData";

/** CF-23 PUT route binding from profile form section. */
export const profileSectionPutApi = updateMarketingTeamMemberProfile;

export function ProfileContentSection() {
  const roleLabel = useFigmaTextContent("5335:4278", "Senior Campaign Lead");
  const { profileLoadError, retryProfileLoad } = useFigmaScreenData();

  return (
    <section
      data-figma-node="5329:12075"
      className="absolute box-border left-[0px] top-[169px] flex w-[1440px] flex-row items-start gap-6 pr-[40px] pb-[52px] pl-[40px] [--fx:0] [--fww:1440] z-[1]"
    >
      {profileLoadError ? (
        <div
          role="alert"
          className="absolute left-[40px] top-[-52px] z-[2] box-border flex w-[calc(100%-80px)] items-center justify-between gap-4 rounded-[8px] border border-[#da002f] bg-[#ffffff] px-4 py-3"
        >
          <p className="font-onest text-[14px] font-[500] leading-[18px] text-[#da002f]">
            {profileLoadError}
          </p>
          <button
            type="button"
            onClick={() => {
              void retryProfileLoad();
            }}
            className="box-border inline-flex h-[36px] items-center justify-center rounded-[8px] border border-[#da002f] bg-[#ffffff] px-4 font-onest text-[14px] font-[700] text-[#da002f]"
          >
            Retry
          </button>
        </div>
      ) : null}
      <div
        data-figma-node="5329:12076"
        className="box-border h-[418px] w-[400px] rounded-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[32px] pr-[32px] pb-[32px] pl-[32px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)] [--fx:40] [--fww:400]"
      >
        <div data-figma-node="5329:12077" className="box-border flex w-full flex-col items-center gap-4">
          <div
            data-figma-node="5329:12078"
            className="box-border h-[100px] w-[100px] overflow-hidden rounded-[50px] bg-[#e5e7eb]"
          />
          <div data-figma-node="5329:12079" className="box-border flex w-full flex-col items-center gap-1">
            <p
              data-figma-node="5329:12080"
              className="box-border w-full text-center font-onest text-[22px] font-[700] leading-[28px] text-[#a21d35]"
            >
              Amy Morse
            </p>
            <p
              data-figma-node="5329:12081"
              className="box-border w-full text-center font-onest text-[14px] font-[600] leading-[18px] text-[#686868]"
            >
              Senior Campaign Lead
            </p>
          </div>
        </div>
        <div data-figma-node="5329:12082" className="box-border my-6 h-[1px] w-full bg-[#e5e7eb]" />
        <div data-figma-node="5329:12083" className="box-border flex w-full flex-col gap-4">
          <div data-figma-node="5329:12084" className="box-border flex w-full flex-col gap-1">
            <p data-figma-node="5329:12085" className="font-onest text-[11px] font-[700] leading-[14px] text-[#9ca3af]">
              Email Address
            </p>
            <p data-figma-node="5329:12086" className="font-onest text-[14px] font-[500] leading-[18px] text-[#231f20]">
              amy.morse@calendarflow.io
            </p>
          </div>
          <div data-figma-node="5337:4315" className="box-border flex w-full flex-col gap-1">
            <p data-figma-node="5337:4316" className="font-onest text-[11px] font-[700] leading-[14px] text-[#9ca3af]">
              Phone number
            </p>
            <p data-figma-node="5337:4317" className="font-onest text-[14px] font-[500] leading-[18px] text-[#231f20]">
              +01 54545 45454
            </p>
          </div>
          <div data-figma-node="5329:12090" className="box-border flex w-full flex-col gap-1">
            <p data-figma-node="5329:12091" className="font-onest text-[11px] font-[700] leading-[14px] text-[#9ca3af]">
              Organization Access
            </p>
            <div data-figma-node="5329:12092" className="box-border flex items-center gap-1.5">
              <div data-figma-node="5329:12093" className="box-border h-[6px] w-[6px] rounded-[3px] bg-[#2a9d8f]" />
              <p data-figma-node="5329:12094" className="font-onest text-[14px] font-[600] leading-[18px] text-[#2a9d8f]">
                Enterprise Partner
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-figma-node="5329:12099" className="box-border flex w-[936px] flex-col gap-6 [--fx:464] [--fww:936]">
        <div
          data-figma-node="5335:4259"
          className="box-border w-full rounded-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[32px] pr-[32px] pb-[32px] pl-[32px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)]"
        >
          <div data-figma-node="5335:4260" className="box-border flex items-center gap-2.5">
            <div data-figma-node="5337:4319" data-figma-component="5121:9728" className="box-border h-[24px] w-[24px]" />
            <p data-figma-node="5335:4264" className="font-onest text-[18px] font-[600] leading-[23px] text-[#231f20]">
              Edit Profile
            </p>
          </div>
          <div data-figma-node="5335:4265" className="box-border my-5 h-[1px] w-full bg-[#e5e7eb]" />
          <div data-figma-node="5335:4266" className="box-border flex w-full flex-col gap-4">
            <div data-figma-node="5337:4268" className="box-border flex w-full gap-4">
              <div data-figma-node="5335:4267" className="box-border flex w-[428px] flex-col gap-1.5">
                <p data-figma-node="5335:4268" className="font-onest text-[12px] font-[700] leading-[15px] text-[#9ca3af]">
                  First name
                </p>
                <div
                  data-figma-node="5335:4269"
                  className="box-border h-[42px] w-full rounded-[8px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px]"
                >
                  <input
                    data-figma-node="5335:4270"
                    name="first-name"
                    data-figma-field="first-name"
                    data-figma-field-origin="design_text"
                    {...useFigmaFieldProps("first-name")}
                    type="text"
                    aria-label="First name"
                    className="box-border h-full w-full bg-transparent font-onest text-[14px] font-[500] leading-[18px] text-[#231f20] shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
              <div data-figma-node="5337:4263" className="box-border flex w-[428px] flex-col gap-1.5">
                <p data-figma-node="5337:4264" className="font-onest text-[12px] font-[700] leading-[15px] text-[#9ca3af]">
                  Last name
                </p>
                <div
                  data-figma-node="5337:4265"
                  className="box-border h-[42px] w-full rounded-[8px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px]"
                >
                  <input
                    data-figma-node="5337:4266"
                    name="last-name"
                    data-figma-field="last-name"
                    data-figma-field-origin="design_text"
                    {...useFigmaFieldProps("last-name")}
                    type="text"
                    aria-label="Last name"
                    className="box-border h-full w-full bg-transparent font-onest text-[14px] font-[500] leading-[18px] text-[#231f20] shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
            </div>
            <div data-figma-node="5337:4274" className="box-border flex w-full gap-4">
              <div data-figma-node="5335:4271" className="box-border flex w-[428px] flex-col gap-1.5">
                <p data-figma-node="5335:4272" className="font-onest text-[12px] font-[700] leading-[15px] text-[#9ca3af]">
                  Email Address
                </p>
                <div
                  data-figma-node="5335:4273"
                  className="box-border h-[42px] w-full rounded-[8px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px]"
                >
                  <input
                    data-figma-node="5335:4274"
                    name="email"
                    data-figma-field="email"
                    data-figma-field-origin="design_text"
                    {...useFigmaFieldProps("email")}
                    type="email"
                    aria-label="Email Address"
                    className="box-border h-full w-full bg-transparent font-onest text-[14px] font-[500] leading-[18px] text-[#231f20] shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
              <div data-figma-node="5337:4269" className="box-border flex w-[428px] flex-col gap-1.5">
                <p data-figma-node="5337:4270" className="font-onest text-[12px] font-[700] leading-[15px] text-[#9ca3af]">
                  Phone number
                </p>
                <div
                  data-figma-node="5337:4271"
                  className="box-border h-[42px] w-full rounded-[8px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px]"
                >
                  <p
                    data-figma-node="5337:4272"
                    className="font-onest text-[14px] font-[500] leading-[18px] text-[#231f20]"
                  >
                    +01 54545 45454
                  </p>
                </div>
              </div>
            </div>
            <div data-figma-node="5335:4275" className="box-border flex w-full flex-col gap-1.5">
              <p data-figma-node="5335:4276" className="font-onest text-[12px] font-[700] leading-[15px] text-[#9ca3af]">
                Role
              </p>
              <div
                data-figma-node="5335:4277"
                className="box-border h-[42px] w-full rounded-[8px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px]"
              >
                <p
                  data-figma-node="5335:4278"
                  className="font-onest text-[14px] font-[500] leading-[18px] text-[#231f20]"
                >
                  {roleLabel}
                </p>
              </div>
            </div>
            <div data-figma-node="5335:4283" className="box-border flex w-full flex-col gap-1.5">
              <p data-figma-node="5335:4284" className="font-onest text-[12px] font-[700] leading-[15px] text-[#9ca3af]">
                Bio
              </p>
              <div
                data-figma-node="5335:4285"
                className="box-border h-[120px] w-full rounded-[8px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[14px] pr-[14px] pb-[14px] pl-[14px]"
              >
                <textarea
                  data-figma-node="5335:4286"
                  name="bio"
                  data-figma-field="bio"
                  data-figma-field-origin="design_text"
                  {...useFigmaFieldProps("bio")}
                  placeholder="Tell us about yourself..."
                  aria-label="Bio"
                  className="box-border h-full w-full resize-none bg-transparent font-onest text-[14px] font-[500] leading-[18px] text-[#231f20] placeholder:text-[#9ca3af] shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0"
                />
              </div>
            </div>
          </div>
          <div data-figma-node="5335:4287" className="box-border my-5 h-[1px] w-full bg-[#e5e7eb] opacity-50" />
          <div data-figma-node="5335:4288" className="box-border flex w-full justify-end gap-3">
            <button
              data-figma-node="5335:4291"
              type="button"
              data-figma-action="act_4d5182b12c73"
              {...useFigmaActionProps("act_4d5182b12c73")}
              className="box-border inline-flex h-[42px] w-[112px] cursor-pointer items-center justify-center whitespace-nowrap rounded-[8px] bg-[#a21d35] pt-[12px] pr-[16px] pb-[12px] pl-[16px] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span data-figma-node="5335:4292" className="font-onest text-[14px] font-[700] leading-[18px] whitespace-nowrap text-[#ffffff]">
                Save
              </span>
            </button>
          </div>
        </div>

        <div
          data-figma-node="5337:4275"
          className="box-border w-full rounded-[12px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[32px] pr-[32px] pb-[32px] pl-[32px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.039)]"
        >
          <div data-figma-node="5337:4314" className="box-border flex w-full items-center justify-between gap-5">
            <div data-figma-node="5337:4276" className="box-border flex items-center gap-2.5">
              <div data-figma-node="5339:8819" data-figma-component="5121:8905" className="box-border h-[24px] w-[24px]" />
              <p data-figma-node="5337:4280" className="font-onest text-[18px] font-[600] leading-[23px] text-[#231f20]">
                Change Password
              </p>
            </div>
            <p data-figma-node="5329:12173" className="font-onest text-[12px] font-[400] leading-[15px] text-[#686868]">
              Last updated 4 months ago.
            </p>
          </div>
          <div data-figma-node="5337:4281" className="box-border my-5 h-[1px] w-full bg-[#e5e7eb]" />
          <div data-figma-node="5337:4282" className="box-border flex w-full flex-col gap-4">
            <div data-figma-node="5337:4283" className="box-border flex w-full gap-4">
              <div data-figma-node="5337:4284" className="box-border flex w-[428px] flex-col gap-1.5">
                <p data-figma-node="5337:4285" className="font-onest text-[12px] font-[700] leading-[15px] text-[#9ca3af]">
                  Current Password
                </p>
                <div
                  data-figma-node="5337:4286"
                  className="box-border h-[42px] w-full rounded-[8px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px]"
                >
                  <input
                    data-figma-node="5337:4287"
                    name="change-password"
                    data-figma-field="change-password"
                    data-figma-field-origin="design_text"
                    {...useFigmaFieldProps("change-password")}
                    type="password"
                    aria-label="Current Password"
                    className="box-border h-full w-full bg-transparent font-onest text-[14px] font-[500] leading-[18px] text-[#231f20] shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
              <div data-figma-node="5337:4288" className="box-border flex w-[428px] flex-col gap-1.5">
                <p data-figma-node="5337:4289" className="font-onest text-[12px] font-[700] leading-[15px] text-[#9ca3af]">
                  New Password
                </p>
                <div
                  data-figma-node="5337:4290"
                  className="box-border h-[42px] w-full rounded-[8px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px]"
                >
                  <input
                    data-figma-node="5337:4291"
                    name="new-password"
                    data-figma-field="new-password"
                    data-figma-field-origin="design_text"
                    {...useFigmaFieldProps("new-password")}
                    type="password"
                    placeholder="New Password"
                    aria-label="New Password"
                    className="box-border h-full w-full bg-transparent font-onest text-[14px] font-[400] leading-[18px] text-[#231f20] placeholder:text-[#9ca3af] shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
            </div>
            <div data-figma-node="5337:4292" className="box-border flex w-full items-end justify-between gap-4">
              <div data-figma-node="5337:4293" className="box-border flex w-[428px] flex-col gap-1.5">
                <p data-figma-node="5337:4294" className="font-onest text-[12px] font-[700] leading-[15px] text-[#9ca3af]">
                  Confirm Password
                </p>
                <div
                  data-figma-node="5337:4295"
                  className="box-border h-[42px] w-full rounded-[8px] border-[#e2d9d0] border-[1px] bg-[#ffffff] pt-[12px] pr-[14px] pb-[12px] pl-[14px]"
                >
                  <input
                    data-figma-node="5337:4296"
                    name="confirm-password"
                    data-figma-field="confirm-password"
                    data-figma-field-origin="design_text"
                    {...useFigmaFieldProps("confirm-password")}
                    type="password"
                    placeholder="Confirm Password"
                    aria-label="Confirm Password"
                    className="box-border h-full w-full bg-transparent font-onest text-[14px] font-[400] leading-[18px] text-[#231f20] placeholder:text-[#9ca3af] shadow-none ring-0 focus-visible:outline-none focus-visible:ring-0"
                  />
                </div>
              </div>
              <button
                data-figma-node="5339:8839"
                type="button"
                className="box-border inline-flex h-[36px] w-[179px] items-center justify-center whitespace-nowrap rounded-[6px] border border-[#a21d35] bg-transparent pt-[8px] pr-[12px] pb-[8px] pl-[12px]"
              >
                <span
                  data-figma-node="5339:8840"
                  className="font-onest text-[14px] font-[700] leading-[18px] whitespace-nowrap text-[#a21d35]"
                >
                  Change Password
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
