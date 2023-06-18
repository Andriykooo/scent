import React from "react";
import styles from "./preloader.module.scss";

const logo = "CENT";

export const Preloader: React.FC = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preloader_block}> S </div>
      <div className={styles.preloader_logo}>
        {logo.split("").map((letter, index) => {
          return (
            <div className={styles[`preloader_logo_letter_${index + 1}`]}>
              {letter}
            </div>
          );
        })}
      </div>
    </div>
  );
};
