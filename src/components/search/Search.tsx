import styles from "./search.module.scss";
import { FC } from "react";
import Image from "next/image";

export const Search: FC = () => {
  return (
    <div className={styles.Search}>
      <a href="">
        <Image src="/images/search.png" height={24} width={24} alt="" />
      </a>
    </div>
  );
};
