"use client";

import { FC } from "react";
import Slider from "react-slick";
import styles from "./banner.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BnnerType } from "@/app/types/bannerType";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  swipeToSlide: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 10000,
};

type BannerProps = {
  data: BnnerType[];
};

export const Banner: FC<BannerProps> = ({ data }) => {
  return (
    <Slider {...settings} className={styles.banner}>
      {data?.map((image) => {
        return (
          <div key={image.id} className={styles.banner_item}>
            <img
              src={image.link}
              alt="carousel-item"
              className={styles.banner_image}
            />
          </div>
        );
      })}
    </Slider>
  );
};
