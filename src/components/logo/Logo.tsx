import { FC } from "react";
import styles from "./logo.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { Righteous } from "next/font/google";
import { ValueOf } from "../../utils/valueOf";
import { variants } from "@/constants/variants";

const righteous = Righteous({ weight: "400", subsets: ["latin"] });

type LogoProps = {
  className?: string;
  variant?: ValueOf<typeof variants>;
};

export const Logo: FC<LogoProps> = ({ className, variant = variants.BASE }) => {
  return (
    <h1
      className={classNames(
        styles.logo,
        righteous.className,
        styles[variant],
        className
      )}
    >
      <Link href={routes.HOME}>Scent</Link>
    </h1>
  );
};
