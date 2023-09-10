"use client";

import { FC } from "react";
import { Logo } from "../../logo/Logo";
import styles from "./preloader.module.scss";

export const Preloader: FC = () => {
  return (
    <div className={styles.preloader}>
      <Logo className={styles.preloader_logo} />
    </div>
  );
};
