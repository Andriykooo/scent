"use client";

import { FC } from "react";
import styles from "./home.module.scss";
// import { Banner } from "@/components/banner/Banner";
import { banneData } from "@/mock/banner";
import { Carousel } from "../../components/carousel/Carousel";

export const Home: FC = () => {
  return (
    <div className={styles.home}>
      <Carousel
        data={banneData.map((banner) => ({
          id: banner.id,
          render: <img src={banner.image} alt="banner" />,
        }))}
        arrows
        dots
        autoplay
        infinity
      />
    </div>
  );
};
