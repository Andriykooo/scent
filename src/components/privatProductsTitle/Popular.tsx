import { FC } from "react";
import styles from "./popular.module.scss";

export const PopularProductsTitle: FC = () => {
  return (
    <div className={styles.Title}>
      <h1 className={styles.Name}>З ПРИВАТНИХ ВІТРИН</h1>
      <h2 className={styles.ViewAll}>Переглянути все...</h2>
    </div>
  );
};
