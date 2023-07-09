"use client";
import { FC } from "react";
import styles from "./control.module.scss";
import Image from "next/image";
import { icons } from "@/constants.ts/icons";
import { Theme } from "../theme/Theme";
import { Icon } from "../icon/Icon";

export const Control: FC = () => {
  return (
    <ul className={styles.controlList}>
      <li>
        <Icon src={icons.USER_ICON} height={24} width={24} alt="profile" />
      </li>
      <li>
        <Icon
          src={icons.SHOPPING_CART}
          height={24}
          width={24}
          alt="shopping-cart"
        />
      </li>
      <li>
        <Theme />
      </li>
    </ul>
  );
};
