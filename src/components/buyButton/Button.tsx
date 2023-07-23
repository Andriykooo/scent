"use client";
import { FC, useState } from "react";
import styles from "./button.module.scss";
import { icons } from "@/constants/icons";
import Image from "next/image";

export const BuyButton: FC = ({}) => {
  return <button className={styles.ButtonWrapper}>КУПИТИ</button>;
};
