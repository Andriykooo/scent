"use client";
import { FC } from "react";
import styles from "./control.module.scss";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/constants.ts/routes";
import { icons } from "@/constants.ts/icons";

export const Control: FC = () => {
  return (
    <ul className={styles.controlList}>
      <li>
        <Link href={routes.MENS}>
          <Image src={icons.USER_ICON} height={24} width={24} alt="" />
        </Link>
      </li>
      <li>
        <Link href={routes.MENS}>
          <Image src={icons.SHOPPING_CART} height={24} width={24} alt="" />
        </Link>
      </li>
      <li>
        <Link href={routes.MENS}>
          <Image src={icons.PIE_CAHRT} height={24} width={24} alt="" />
        </Link>
      </li>
    </ul>
  );
};
