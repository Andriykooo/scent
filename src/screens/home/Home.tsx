"use client";

import { FC } from "react";
import { Banner } from "../../components/banner/Banner";
import styles from "./home.module.scss";

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Banner />
    </div>
  );
};
