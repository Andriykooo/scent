import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { icons } from "../../../../constants/icons";
import styles from "./arrow.module.scss";

type ArrowProps = {
  type: "next" | "prev";
  onClick: () => void;
  className?: string;
};

export const Arrow: FC<ArrowProps> = ({ type, onClick, className }) => {
  return (
    <div
      className={classNames(styles.arrow, styles[type], className)}
      onClick={onClick}
    >
      <Image
        src={icons.ARROW}
        alt={`${type}-arrow`}
        height={50}
        width={30}
        className={styles.arrow_icon}
      />
      <div className={styles.arrow_background} />
    </div>
  );
};
