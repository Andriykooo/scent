"use client";
import { FC } from "react";
import styles from "./control.module.scss";
import Image from "next/image";

export const Control: FC = () => {
  return (
    <ul className={styles.controlList}>
      <li>
        <a href="">
          <Image src="/images/user-image.png" height={24} width={24} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <Image
            src="/images/shopping-cart.png"
            height={24}
            width={24}
            alt=""
          />
        </a>
      </li>
      <li>
        <a href="">
          <Image src="/images/pie-chart.png" height={24} width={24} alt="" />
        </a>
      </li>
    </ul>
  );
};
