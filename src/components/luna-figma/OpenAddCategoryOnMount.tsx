"use client";

import { useEffect, useRef } from "react";

import { openFigmaDialog, useFigmaScreenData } from "./useFigmaScreenData";

export function OpenAddCategoryOnMount() {
  const { resetModalForm } = useFigmaScreenData();
  const opened = useRef(false);

  useEffect(() => {
    if (opened.current) {
      return;
    }
    opened.current = true;
    resetModalForm();
    openFigmaDialog("act_9c6be34838f4");
  }, [resetModalForm]);

  return null;
}
