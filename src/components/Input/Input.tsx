import { ChangeEvent, FC } from "react";
import styles from "./input.module.scss";
import classNames from "classnames";

type InputProps = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
};

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  className,
}) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={classNames(styles.input, className)}
      placeholder={placeholder}
      type={type}
    />
  );
};
