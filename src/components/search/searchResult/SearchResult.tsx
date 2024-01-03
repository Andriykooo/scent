import { FC } from "react";
import styles from "./search-result.module.scss";
import { Icon } from "@/components/icon/Icon";
import { SearchResultType } from "@/types/searchResultType";

type SearchResultProps = {
  data: SearchResultType[];
  title?: string;
  onClick: (search: SearchResultType) => void;
};

export const SearchResult: FC<SearchResultProps> = ({
  title,
  data,
  onClick,
}) => {
  return (
    <div className={styles.search_result}>
      {title && <h4 className={styles.search_result_title}>{title}</h4>}
      <ul className={styles.search_result_list}>
        {data?.map((item) => {
          return (
            <li
              key={item.id}
              className={styles.search_result_item}
              onClick={() => onClick(item)}
            >
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
