import { FC } from "react";
import styles from "./search-result.module.scss";
import { Icon } from "@/components/icon/Icon";
import { SearhResultType } from "@/types/searchResultType";

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
                <Icon
                  src={item.image}
                  height={20}
                  width={20}
                  alt="product"
                  invert
                />
              )}
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
