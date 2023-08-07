"use client";
import { FC, ReactNode } from "react";
import { SliderPoint } from "../sliderProducts/Slider";
import styles from "./rate.module.scss";
type List = {
  title: string;
  list: Rating[];
};

type Rating = {
  name: string;
  count: number;
  value: number;
};

export type RateProductsProps = {
  title: string;
  ratings: List[];
};

export const RateProducts: FC<RateProductsProps> = ({ title, ratings }) => {
  return (
    <div className={styles.rateProducts}>
      <h2>{title}</h2>

      <div className={styles.rateStyle}>
        {ratings.map(({ title, list }) => (
          <div key={title}>
            <span className={styles.fontStyles}>{title}</span>
            <SliderPoint />
            <ul>
              {list.map((item) => (
                <li className={styles.propsStyles} key={item.name}>
                  <span className={styles.grayColor}> {item.name}</span>
                  <span> {item.count}</span>
                  <span>
                    <span className={styles.progressBar}><span style={{width: item.value+'%'}}></span></span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
