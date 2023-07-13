import { ChangeEvent, FC } from "react";
import styles from "./input.module.scss";
import classNames from "classnames";
import { variants } from "@/constants/variants";
import { ValueOf } from "../utils/valueOf";

type InputProps = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  variant?: ValueOf<typeof variants>;
};

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  className,
  variant = variants.BASE,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={classNames(styles.input, styles[variant], className)}
      placeholder={placeholder}
      type={type}
    />
  );
};
