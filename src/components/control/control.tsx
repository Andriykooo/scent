"use client";
import { FC } from "react";
import styles from "./control.module.scss";
import Image from "next/image";
import { icons } from "@/constants.ts/icons";
import { Theme } from "../theme/Theme";

export const Control: FC = () => {
  return (
    <ul className={styles.controlList}>
      <li>
        <Image src={icons.USER_ICON} height={24} width={24} alt="" />
      </li>
      <li>
        <Image src={icons.SHOPPING_CART} height={24} width={24} alt="" />
      </li>
      <li>
        <Theme />
      </li>
    </ul>
  );
};
