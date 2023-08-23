"use client";
import { FC } from "react";
import styles from "./control.module.scss";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { Theme } from "../theme/Theme";
import { Icon } from "../icon/Icon";
import { routes } from "@/constants/routes";
import Link from "next/link";

export const Control: FC = () => {
  return (
    <ul className={styles.controlList}>
      <li>
        <Link href={routes.PROFILE}>
          <Icon src={icons.USER_ICON} height={24} width={24} alt="profile" />
        </Link>
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
