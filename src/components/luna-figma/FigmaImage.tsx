"use client";
/**
 * Figma-owned image primitive — next/image wrapper for static /assets/figma assets.
 * luna-spec-codegen: owned-layout
 */
import Image from "next/image";
import type { ComponentPropsWithoutRef } from "react";

type FigmaImageProps = Omit<ComponentPropsWithoutRef<"img">, "src" | "width" | "height"> & {
  src: string;
};

export function FigmaImage({ src, alt = "", className = "", ...rest }: FigmaImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1}
      height={1}
      unoptimized
      className={className}
      {...rest}
    />
  );
}
