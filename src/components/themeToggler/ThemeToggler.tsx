import { FC, useState } from "react";
import styles from "./theme-toggler.module.scss";
import classNames from "classnames";

export const ThemeToggler: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={classNames(styles.theme_toggler, {
        [styles.dark]: isDarkMode,
      })}
      onClick={handleToggle}
    />
  );
};
