"use client";

import { FC } from "react";
import styles from "./home.module.scss";
import { Banner } from "@/components/banner/Banner";
import { banneData } from "@/mock/banner";

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Banner data={banneData} />
    </div>
  );
};
