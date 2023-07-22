import { ChangeEvent, FC } from "react";
import styles from "./input.module.scss";
import classNames from "classnames";
import { variants } from "@/constants/variants";
import { ValueOf } from "../utils/valueOf";
import { Montserrat } from "next/font/google";
import { icons } from "@/constants/icons";
import { Icon } from "../icon/Icon";

type InputProps = {
  value?: string;
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  variant?: ValueOf<typeof variants>;
  clear?: boolean;
  onCleaer?: Function;
};

const montserrat = Montserrat({ subsets: ["latin"] });

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type,
  className,
  variant = variants.BASE,
  clear,
  onCleaer,
}) => {
  const handleClear = () => {
    onChange?.("");
    onCleaer?.();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value, e);
  };

  return (
    <label className={styles.input_label}>
      <input
        value={value}
        onChange={handleChange}
        className={classNames(
          styles.input,
          styles[variant],
          className,
          montserrat.className,
          {
            [styles.clear]: clear,
          }
        )}
        placeholder={placeholder}
        type={type}
      />
      {clear && (
        <Icon
          src={icons.CLOSE}
          height={12}
          width={12}
          alt="clear"
          invert
          className={styles.input_clear}
          onClick={handleClear}
        />
      )}
    </label>
  );
};
