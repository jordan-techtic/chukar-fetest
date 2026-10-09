"use client";

import type { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const theme = {};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
