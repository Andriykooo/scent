"use client";

import classNames from "classnames";
import Image from "next/image";
import { FC, ReactNode, useEffect, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { icons } from "../../constants/icons";
import styles from "./carousel.module.scss";

type CarouselItemType = {
  id: number;
  render: ReactNode;
};

type CarouselProps = {
  data: CarouselItemType[];
  arrows?: boolean;
  autoplay?: boolean;
  delay?: number;
  dots?: boolean;
  infinity?: boolean;
  className?: string;
};

export const Carousel: FC<CarouselProps> = ({
  data,
  autoplay,
  delay = 10000,
  dots,
  arrows,
  infinity,
  className,
}) => {
  const { scrollRef, pages, activePageIndex, prev, next, goTo } =
    useSnapCarousel();
  const lastPageIndex = pages.length - 1;

  const [prevArrow, setPrevArrow] = useState(true);
  const [nextArrow, setNextArrow] = useState(true);

  const handleNext = () => {
    if (infinity && activePageIndex === lastPageIndex) {
      goTo(0);
    } else {
      next();
    }
  };

  const handlePrev = () => {
    if (infinity && activePageIndex === 0) {
      goTo(lastPageIndex);
    } else {
      prev();
    }
  };

  useEffect(() => {
    if (pages.length && !infinity) {
      setPrevArrow(activePageIndex > 0);
      setNextArrow(activePageIndex < lastPageIndex);
    }
  }, [activePageIndex, pages.length]);

  useEffect(() => {
    if (autoplay && lastPageIndex === data.length - 1) {
      const intervalId = setInterval(handleNext, delay);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [autoplay, lastPageIndex, handleNext]);

  return (
    <div className={styles.carousel_wrapper}>
      <ul ref={scrollRef} className={classNames(styles.carousel, className)}>
        {data.map((item) => {
          return (
            <li key={item.id} className={styles.carousel_item}>
              {item.render}
            </li>
          );
        })}
      </ul>
      {arrows && prevArrow && <Arrow type="prev" onClick={handlePrev} />}
      {arrows && nextArrow && <Arrow type="next" onClick={handleNext} />}
      {dots && (
        <Dots
          count={pages.length}
          activeDotIndex={activePageIndex}
          goTo={goTo}
        />
      )}
    </div>
  );
};

type DotsProps = {
  count?: number;
  activeDotIndex?: number;
  goTo?: (index: number) => void;
};

type ArrowProps = {
  type: "next" | "prev";
  onClick: () => void;
};

const Arrow: FC<ArrowProps> = ({ type, onClick }) => {
  return (
    <div
      className={classNames(styles.carousel_arrow, styles[type])}
      onClick={onClick}
    >
      <Image
        src={icons.ARROW}
        alt={`${type}-arrow`}
        height={50}
        width={30}
        className={styles.carousel_arrow_icon}
      />
      <div className={styles.carousel_arrow_background} />
    </div>
  );
};

const Dots: FC<DotsProps> = ({ count, activeDotIndex, goTo }) => {
  return (
    <ul className={styles.carousel_dots}>
      {count &&
        count > 0 &&
        new Array(count).fill("")?.map((_, index) => {
          return (
            <div
              key={index}
              className={classNames(styles.carousel_dot, {
                [styles.active]: activeDotIndex === index,
              })}
              onClick={() => {
                goTo?.(index);
              }}
            />
          );
        })}
    </ul>
  );
};
