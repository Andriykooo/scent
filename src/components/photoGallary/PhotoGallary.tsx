import { icons } from "@/constants/icons";
import Image from "next/image";
import React, { useEffect, useState, FC } from "react";
import styles from "./photoGallary.module.scss";

export const PhotoGallery: FC<{ photos: string[]; currentIndex: number }> = ({
  photos = [],
  currentIndex = 0,
}) => {
  const [preLoadedPhotos, setPreLoadedPhotos] = useState(photos || []);
  const [current, setCurrent] = useState(currentIndex);
  const [navs, setNav] = useState<React.JSX.Element[]>([]);
  const toggle = (input: number) => {
    setCurrent(input);
  };

  const swipe = (input: number) => {
    let counter;
    if (current >= 0 && current <= preLoadedPhotos.length) {
      counter = current;
      if (input === 0 && counter > 0) counter--;
      if (input === 1 && counter < preLoadedPhotos.length - 1) counter++;
      setCurrent(counter);
    }
  };

  useEffect(() => {
    let nav = [];
    for (let i = 0; i < preLoadedPhotos.length; i++) {
      nav.push(
        current == i ? (
          <div key={i} className={styles.rectangle} onClick={() => toggle(i)} />
        ) : (
          <div
            key={i}
            className={styles.rectangleActive}
            onClick={() => toggle(i)}
          />
        )
      );
    }
    setNav(nav);
  }, [current]);

  return (
    <div className={styles.containerImage}>
      <div className={styles.swipeLeft} onClick={() => swipe(0)}>
        {current === 0 ? (
          <Image
            src={icons.ARROW_LEFT_ICON}
            height={32}
            width={40}
            alt={"Arrow"}
          />
        ) : (
          <Image
            src={icons.ARROW_LEFT_BLACK_ICON}
            height={32}
            width={40}
            alt={"Arrow"}
          />
        )}
      </div>
      {preLoadedPhotos.map(
        (photo, index) =>
          current == index && (
            <Image
              key={index}
              src={photo}
              height={425}
              width={425}
              alt={"image"}
            />
          )
      )}

      <div className={styles.nav}>{navs}</div>
      <div className={styles.swipeRight} onClick={() => swipe(1)}>
        {current === preLoadedPhotos.length - 1 ? (
          <Image
            src={icons.ARROW_RIGHT_GRAY_ICON}
            height={32}
            width={40}
            alt={"Arrow"}
          />
        ) : (
          <Image
            src={icons.ARROW_RIGHT_ICON}
            height={32}
            width={40}
            alt={"Arrow"}
          />
        )}
      </div>
    </div>
  );
};
