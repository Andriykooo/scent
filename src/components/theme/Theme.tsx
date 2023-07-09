"use client";

import { FC } from "react";
import styles from "./theme.module.scss";
import classNames from "classnames";
import { themes } from "@/constants.ts/themes";
import { useTheme } from "next-themes";

export const Theme: FC = () => {
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
