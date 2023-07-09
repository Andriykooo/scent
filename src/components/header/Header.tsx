import { FC } from "react";
import { Logo } from "../logo/Logo";
import styles from "./header.module.scss";
import { Navigation } from "../navigation/Navigation";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.header_panel}>
          <div className={styles.header_panel_left}></div>
          <Logo className={styles.header_panel_logo} />
          <div className={styles.header_panel_right}></div>
        </div>
        <div className={styles.header_navigation}>
          <Navigation />
        </div>
      </div>
    </header>
  );
};
