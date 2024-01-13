import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
type BuyButtonProps = {
  showButton: boolean;
};

export const BuyButton = ({ showButton = false }: BuyButtonProps) => {
  return (
    <button
      className={classNames(
        showButton
          ? `${styles.ButtonWrapper} ${styles.show} `
          : styles.ButtonWrapper,
      )}
    >
      КУПИТИ
    </button>
  );
};
