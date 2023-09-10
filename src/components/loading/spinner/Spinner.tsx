import { FC } from "react";
import styles from "./spinner.module.scss";
import classNames from "classnames";

type SpinnerProps = {
  className?: string;
};

export const Spinner: FC<SpinnerProps> = ({ className }) => {
  return <div className={classNames(styles.spinner, className)} />;
};
