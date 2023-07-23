import { FC } from "react";
import styles from "./copyright.module.scss";

export const Copyright: FC = () => {
  const year = new Date().getFullYear();

  return (
    <span className={styles.copyright}>
      Copyright © {year} | Scent Marketplace
    </span>
  );
};
