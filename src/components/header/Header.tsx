import { FC } from "react";
import { Logo } from "../logo/Logo";
import { Navigation } from "../navigation/Navigation";
import { Search } from "../search/Search";
import styles from "./header.module.scss";
import { Control } from "../control/Control";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.header_panel}>
          <div className={styles.header_panel_left}>
            <Control />
          </div>
          <Logo className={styles.header_panel_logo} />
          <div className={styles.header_panel_right}>
            <Search />
          </div>
        </div>
        <div className={styles.header_navigation}>
          <Navigation />
        </div>
      </div>
    </header>
  );
};
