import { FC } from "react";
import { Logo } from "../logo/Logo";
import styles from "./header.module.scss";
import { Navigation } from "../navigation/Navigation";
import { Control } from "../control/control";
import { Search } from "../search/Search";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo className={styles.header_logo} />
      <Navigation />
      <Control />
      <Search />
    </header>
  );
};
