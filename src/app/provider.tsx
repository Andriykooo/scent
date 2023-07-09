"use client";

import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
