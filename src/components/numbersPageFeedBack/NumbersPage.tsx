import styles from "./numbersPage.module.scss";
import { FC } from "react";

export const FeedBackPagesNumber: FC = ({}) => {
  return (
    <div className={styles.pageNumberWrapper}>
      <div className={styles.numbersStyle}>
        <span>
          «
          <strong className={styles.textColorStyles}>
            <span>1 </span>
            <span>2 </span>
            <span>3 </span>
            <span>4 </span>
            <span>5 </span> ...
          </strong>
          »
        </span>
      </div>
    </div>
  );
};
