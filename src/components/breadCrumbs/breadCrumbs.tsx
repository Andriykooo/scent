"use client";
import { FC, ReactNode } from "react";
import styles from "./breadCrumbs.module.scss";

export const BreadCrumbs: FC = () => {
  return <div className={styles.breadcrumbs}>
    
    <h2 className={styles.fontStyle}> <span>MEN'S FRAGRANCES\CHRISTIAN DIOR\ <strong className= {styles.textStyle}>SAUVAGE</strong></span></h2>
  </div>;
};
