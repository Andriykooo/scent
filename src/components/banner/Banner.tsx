"use client";

import { FC, PropsWithChildren, ReactNode, useState } from "react";
import Slider from "react-slick";
import { BnnerType } from "@/types/bannerType";
import Image from "next/image";
import classNames from "classnames";
import { icons } from "@/constants/icons";
import styles from "./banner.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type BannerProps = {
  data: BnnerType[];
};

type CustomDotProps = {
  active: boolean;
};

type CustomArrowProps = {
  type: "next" | "prev";
};

const CustomArrow: FC<CustomArrowProps> = (props) => {
  return (
    <div {...props} style={{ zIndex: 1 }}>
      <div className={classNames(styles.banner_arrow, styles[props.type])}>
        <Image
          src={icons.ARROW}
          alt={`${props.type}-arrow`}
          height={50}
          width={30}
          className={styles.banner_arrow_icon}
        />
        <div className={styles.banner_arrow_background} />
      </div>
    </div>
  );
};

const CustomDots: FC<PropsWithChildren> = ({ children }) => {
  return <ul className={styles.banner_dots}>{children}</ul>;
};

const CustomDot: FC<CustomDotProps> = (props) => {
  return (
    <div
      className={classNames(styles.banner_dot, {
        [styles.active]: props.active,
      })}
      {...props}
    />
  );
};

export const Banner: FC<BannerProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: styles.banner,
    afterChange: setCurrentSlide,
    appendDots: (dots: ReactNode) => {
      return <CustomDots>{dots}</CustomDots>;
    },
    customPaging: (slideNumber: number) => {
      return <CustomDot active={slideNumber === currentSlide} />;
    },
    nextArrow: <CustomArrow type="next" />,
    prevArrow: <CustomArrow type="prev" />,
  };

  return (
    <Slider {...settings}>
      {data?.map((image) => {
        return (
          <div key={image.id} className={styles.banner_item_wrapper}>
            <div className={styles.banner_item}>
              <Image
                src={image.link}
                alt="carousel-item"
                className={styles.banner_image}
                fill
              />
              <h2 className={styles.banner_title}>{image.title}</h2>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
