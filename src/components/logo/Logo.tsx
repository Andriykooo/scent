import { FC } from "react";
import styles from "./logo.module.scss";
import classNames from "classnames";

type LogoProps = {
  className?: string;
};

export const Logo: FC<LogoProps> = ({ className }) => {
  return <h1 className={classNames(styles.logo, className)}>Scent</h1>;
};
