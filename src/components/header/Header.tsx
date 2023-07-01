import { FC } from "react";
import { Logo } from "../logo/Logo";
import styles from "./header.module.scss";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}></div>
      <Logo className={styles.header_logo} />
    </header>
  );
};
