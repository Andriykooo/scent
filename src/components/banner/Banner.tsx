"use client";

import { FC, PropsWithChildren, ReactNode, useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./banner.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BnnerType } from "@/app/types/bannerType";
import Image from "next/image";
import classNames from "classnames";
import { icons } from "@/constants/icons";

type BannerProps = {
  data: BnnerType[];
};

type CustomDotProps = {
  active: boolean;
};

const CustomPrevArrow: FC = (props) => {
  return (
    <div {...props} style={{ zIndex: 1 }}>
      <div className={classNames(styles.banner_arrow, styles.prev)}>
        <Image
          src={icons.ARROW}
          alt="previous-arrow"
          height={50}
          width={30}
          className={styles.banner_arrow_icon}
        />
        <div className={styles.banner_arrow_background} />
      </div>
    </div>
  );
};

const CustomNextArrow: FC = (props) => {
  return (
    <div {...props} style={{ zIndex: 1 }}>
      <div className={classNames(styles.banner_arrow, styles.next)}>
        <Image
          src={icons.ARROW}
          alt="next-arrow"
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
    autoplay: true,
    arrows: true,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 10000,
    className: styles.banner,
    afterChange: setCurrentSlide,
    appendDots: (dots: ReactNode) => {
      return <CustomDots>{dots}</CustomDots>;
    },
    customPaging: (slideNumber: number) => {
      return <CustomDot active={slideNumber === currentSlide} />;
    },
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <Slider {...settings}>
      {data?.map((image) => {
        return (
          <div key={image.id} className={styles.banner_item}>
            <Image
              src={image.link}
              alt="carousel-item"
              className={styles.banner_image}
              fill
            />
          </div>
        );
      })}
    </Slider>
  );
};
