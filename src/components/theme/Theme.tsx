"use client";

import { FC, useEffect, useState } from "react";
import styles from "./theme.module.scss";
import classNames from "classnames";
import { themes } from "@/constants.ts/themes";
import { useTheme } from "next-themes";
import { ThemeProvider } from "next-themes";

const Toggler: FC = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === themes.LIGHT ? themes.DARK : themes.LIGHT);
  };

  return (
    <div
      className={classNames(
        styles.theme_toggler,
        styles[theme || themes.LIGHT]
      )}
      onClick={handleToggle}
    />
  );
};

export const Theme = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <ThemeProvider>
      <Toggler />
    </ThemeProvider>
  ) : null;
};
