import { FC } from "react";
import styles from "./search-result.module.scss";
import Image from "next/image";

type SearhResultType = {
  id: number;
  name?: string;
  image?: string;
};

type SearchResultProps = {
  data: SearhResultType[];
  title?: string;
};

export const SearchResult: FC<SearchResultProps> = ({ title, data }) => {
  return (
    <div className={styles.search_result}>
      {title && <h4 className={styles.search_result_title}>{title}</h4>}
      <ul className={styles.search_result_list}>
        {data?.map((item) => {
          return (
            <li key={item.id} className={styles.search_result_item}>
              {item.image && (
                <Image src={item.image} height={24} width={24} alt="" />
              )}
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
