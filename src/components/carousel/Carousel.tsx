"use client";

import classNames from "classnames";
import { FC, ReactNode, useEffect, useState } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./carousel.module.scss";
import { Arrow } from "./components/arrow/Arrow";
import { Dots } from "./components/dots/Dots";

type CatouselItemType = {
  id: number;
  render: ReactNode;
};

type CarouselProps = {
  data: CatouselItemType[];
  arrows?: boolean;
  autoplay?: boolean;
  delay?: number;
  dots?: boolean;
  infinity?: boolean;
  fullWidth?: boolean;
  className?: string;
};

export const Carousel: FC<CarouselProps> = ({
  data,
  autoplay,
  delay = 10000,
  dots,
  arrows,
  infinity,
  fullWidth,
  className,
}) => {
  const {
    scrollRef,
    pages,
    activePageIndex,
    prev,
    next,
    goTo,
    snapPointIndexes,
  } = useSnapCarousel();

  const lastPageIndex = pages.length - 1;

  const [isHover, setIsHover] = useState(false);
  const [prevArrow, setPrevArrow] = useState(true);
  const [nextArrow, setNextArrow] = useState(true);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

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
    if (autoplay && lastPageIndex && !isHover) {
      const intervalId = setInterval(handleNext, delay);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [autoplay, lastPageIndex, isHover, handleNext]);

  return (
    <div
      className={styles.carousel_wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul
        ref={scrollRef}
        className={classNames(styles.carousel, className)}
        style={{ scrollSnapType: "x mandatory" }}
      >
        {data.map((item, index) => {
          const snapStyle: {
            scrollSnapAlign?: string;
          } = {};

          if (snapPointIndexes.has(index)) {
            snapStyle.scrollSnapAlign = "start";
          }

          return (
            <li
              key={item.id}
              className={classNames(styles.carousel_item, {
                [styles.full_width]: fullWidth,
              })}
              style={snapStyle}
            >
              {item.render}
            </li>
          );
        })}
      </ul>
      {arrows && prevArrow && (
        <Arrow
          type="prev"
          onClick={handlePrev}
          className={styles.carousel_arrow}
        />
      )}
      {arrows && nextArrow && (
        <Arrow
          type="next"
          onClick={handleNext}
          className={styles.carousel_arrow}
        />
      )}
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
