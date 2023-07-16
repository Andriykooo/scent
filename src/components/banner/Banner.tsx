"use client";

import Image from "next/image";
import { FC } from "react";
import { banneData } from "../../mock/banner";
import { Carousel } from "../carousel/Carousel";
import styles from "./banner.module.scss";

export const Banner: FC = () => {
  return (
    <Carousel
      arrows
      dots
      autoplay
      infinity
      fullWidth
      className={styles.banner_wrapper}
      data={banneData.map((banner) => {
        return {
          id: banner.id,
          render: (
            <div className={styles.banner}>
              <Image
                src={banner.image}
                alt="banner"
                fill
                className={styles.banner_image}
              />
              {banner?.title && (
                <h2 className={styles.banner_title}>{banner.title}</h2>
              )}
            </div>
          ),
        };
      })}
    ></Carousel>
  );
};
