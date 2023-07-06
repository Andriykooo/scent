"use client";

import { FC, useEffect, useState } from "react";
import { Logo } from "../logo/Logo";
import styles from "./preloader.module.scss";

export const Preloader: FC = () => {
  const [animationSinished, setAnimationSinished] = useState(true);

  const finishAnimation = () => {
    setAnimationSinished(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(finishAnimation, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    animationSinished && (
      <div className={styles.preloader}>
        <Logo className={styles.preloader_logo} />
      </div>
    )
  );
};
