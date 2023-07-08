import { FC } from "react";
import styles from "./logo.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { routes } from "@/constants.ts/routes";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <h1 className={classNames(styles.logo, className)}>
      <Link href={routes.HOME}>Scent</Link>
    </h1>
  );
};
