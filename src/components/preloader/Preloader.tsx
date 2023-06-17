import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./preloader.module.scss";

const animationDuration = 2700;

export const Preloader: React.FC = () => {
  const [isActive, setIsActive] = useState(true);

  const disablePreloader = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(disablePreloader, animationDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    isActive && (
      <div className={styles.preloader}>
        <Image
          src="/animated-logo.gif"
          className={styles.preloader_logo}
          height={100}
          width={300}
          alt="logo"
        />
      </div>
    )
  );
};
