import { FC } from "react";
import styles from "./logo.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { routes } from "@/constants.ts/routes";
import { Righteous } from "next/font/google";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <h1 className={classNames(styles.logo, righteous.className, className)}>
      <Link href={routes.HOME}>Scent</Link>
    </h1>
  );
};
