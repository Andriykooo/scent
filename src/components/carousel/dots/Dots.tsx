import classNames from "classnames";
import { FC } from "react";
import styles from "./dots.module.scss";

type DotsProps = {
  count?: number;
  activeDotIndex?: number;
  goTo?: (index: number) => void;
};

export const Dots: FC<DotsProps> = ({ count, activeDotIndex, goTo }) => {
  return (
    <ul className={styles.dots}>
      {count &&
        count > 0 &&
        new Array(count).fill("")?.map((_, index) => {
          return (
            <div
              key={index}
              className={classNames(styles.dot, {
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
