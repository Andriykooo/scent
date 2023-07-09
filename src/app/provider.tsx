"use client";

import { FC, PropsWithChildren, useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? <ThemeProvider>{children}</ThemeProvider> : null;
};
