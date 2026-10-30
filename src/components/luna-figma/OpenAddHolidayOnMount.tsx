"use client";

import { useEffect, useRef } from "react";

import { openFigmaDialog, useFigmaScreenData } from "./useFigmaScreenData";

export function OpenAddHolidayOnMount() {
  const { resetModalForm } = useFigmaScreenData();
  const opened = useRef(false);

  useEffect(() => {
    if (opened.current) {
      return;
    }
    opened.current = true;
    resetModalForm();
    openFigmaDialog("act_8e0ab36f39bd");
  }, [resetModalForm]);

  return null;
}
