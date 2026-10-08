"use client";

import * as RadixSelect from "@radix-ui/react-select";
import type { ChangeEventHandler } from "react";

export type FigmaRadixSelectOption = {
  value: string;
  label: string;
};

type FigmaRadixSelectProps = {
  "data-figma-node"?: string;
  "data-figma-field"?: string;
  "data-figma-field-origin"?: string;
  name?: string;
  "aria-label"?: string;
  className?: string;
  placeholder?: string;
  options: FigmaRadixSelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
};

export function FigmaRadixSelect({
  "data-figma-node": figmaNode,
  name,
  "aria-label": ariaLabel,
  className = "",
  placeholder = "",
  options,
  value,
  defaultValue,
  onChange,
}: FigmaRadixSelectProps) {
  const controlledValue = value ?? defaultValue ?? "";
  const emptyOption = options.find((option) => option.value === "");
  const displayValue =
    controlledValue === "" && emptyOption
      ? `__empty__:${emptyOption.label}`
      : controlledValue || undefined;

  return (
    <RadixSelect.Root
      name={name}
      value={displayValue}
      onValueChange={(next) => {
        const apiValue = next.startsWith("__empty__:") ? "" : next;
        onChange?.({
          target: { value: apiValue, name: name ?? "" },
        } as React.ChangeEvent<HTMLSelectElement>);
      }}
    >
      <RadixSelect.Trigger
        data-figma-node={figmaNode}
        aria-label={ariaLabel}
        className={className}
      >
        <RadixSelect.Value placeholder={placeholder} />
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={4}
          className="z-[100] max-h-[240px] overflow-hidden rounded-[6px] border border-[#e2d9d0] bg-[#ffffff] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)]"
        >
          <RadixSelect.Viewport className="p-1">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value || option.label}
                value={option.value === "" ? `__empty__:${option.label}` : option.value}
                className="cursor-pointer rounded-[4px] px-[12px] py-[8px] font-onest text-[13px] text-[#231f20] outline-none data-[highlighted]:bg-[#faf3e8]"
              >
                <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
