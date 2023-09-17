"use client";
import { FC, ReactNode } from "react";
import styles from "./breadCrumbs.module.scss";

type BreadCrumbsProps = {
  breadCrumbsPass: string;
};

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ breadCrumbsPass }) => {
  return (
    <div className={styles.breadcrumbs}>
      <h2 className={styles.fontStyle}>
        <span>
          {breadCrumbsPass
            .split("/")
            .map((word, index, array) =>
              array.length - 1 == index ? (
                <strong className={styles.textStyle}>/{word}</strong>
              ) : index === 0 ? (
                word
              ) : (
                `/${word}`
              )
            )}
        </span>
      </h2>
    </div>
  );
};
