import { FC, useState } from "react";
import styles from "./theme-toggler.module.scss";
import classNames from "classnames";
import { themes } from "@/constants.ts/themes";
import { ValueOf } from "../utils/valueOf";

export const ThemeToggler: FC = () => {
  const [theme, setTheme] = useState<ValueOf<typeof themes>>(themes.LIGHT);

  const handleToggle = () => {
    setTheme(theme === themes.LIGHT ? themes.DARK : themes.LIGHT);
  };

  return (
    <div
      className={classNames(styles.theme_toggler, styles[theme])}
      onClick={handleToggle}
    />
  );
};
