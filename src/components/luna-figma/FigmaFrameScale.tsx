"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const FRAME_WIDTH = 1440;

export function FigmaFrameScale({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const apply = () => {
      const next = outer.clientWidth / FRAME_WIDTH;
      setScale(next);
      outer.style.height = `${inner.offsetHeight * next}px`;
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={outerRef} className="relative w-full overflow-hidden">
      <div
        ref={innerRef}
        className="w-[1440px]"
        style={{ transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {children}
      </div>
    </div>
  );
}
