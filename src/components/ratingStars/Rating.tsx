"use client";
import { FC, useState } from "react";
import styles from "./rating.module.scss";
import { icons } from "@/constants/icons";
import Image from "next/image";
interface Array<T> {
  fill(value: T): Array<T>;
}
export const RatingStarts: FC = () => {
  const [listIsRating, setListIsRating] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const RatingAssessment = (id: number) => {
    const newListIsRating = [...listIsRating];
    for (let i = 0; i <= id; i++) {
      newListIsRating[i] = true;
    }
    for (let i = id + 1; i < 5; i++) {
      newListIsRating[i] = false;
    }
    setListIsRating(newListIsRating);
  };

  return (
    <div>
      <div className={styles.Stars}>
        {listIsRating.map((isActive, index) => (
          <span key={index}>
            <Image
              onClick={(event) => {
                event.preventDefault();
                RatingAssessment(index);
              }}
              src={isActive ? icons.STAR_ICON : icons.STAR_ICON_OUTLINE}
              height={13}
              width={13}
              alt={isActive ? "StarFill" : "StarOutline"}
            />
          </span>
        ))}
      </div>
    </div>
  );
};
