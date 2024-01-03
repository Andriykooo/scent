"use client";

import { FC, useEffect, useState } from "react";
import styles from "./search.module.scss";
import { icons } from "@/constants/icons";
import { Icon } from "../icon/Icon";
import { Input } from "../Input/Input";
import { SearchResult } from "./searchResult/SearchResult";
import { search } from "@/mock/search";
import { useSearchStore } from "@/store/useSearch";
import { SearchResultType } from "@/types/searchResultType";
import { Modal } from "../modal/Modal";
import { capitalize } from "../utils/capitalize";
import { useDebounce } from "@/hooks/useDebounce";

export const Search: FC = ({}) => {
  const recentSearch = useSearchStore((state) => state.history);
  const addToRecentSearch = useSearchStore((state) => state.addToHistory);

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLodaing, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<{
    [key: string]: SearchResultType[];
  }>({});

  const debounceInput = useDebounce<string>(input, 500);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    if (isOpen) {
      close();
    } else {
      open();
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
  };

  const handleClick = (search: SearchResultType) => {
    addToRecentSearch(search);
  };

  const fetchSearchData = () => {
    return search.reduce((accum, value) => {
      if (
        !value.name.toLowerCase().includes(input.toLowerCase()) ||
        accum[value.type]?.length > 5
      ) {
        return accum;
      }

      if (accum[value.type]) {
        return {
          ...accum,
          [value.type]: [...accum[value.type], value],
        };
      }

      return {
        [value.type]: [value],
      };
    }, {} as { [key: string]: SearchResultType[] });
  };

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setSearchResult(fetchSearchData());

      setIsLoading(false);
    }, 500);
  }, [debounceInput]);

  return (
    <>
      <Icon
        src={icons.SEARCH_ICON}
        alt="search"
        height={24}
        width={24}
        onClick={toggle}
        className={styles.search_icon}
      />
      <Modal isOpen={isOpen} close={close}>
        <div className={styles.search}>
          <Input
            placeholder="Search..."
            value={input}
            onChange={handleChange}
            clear
            onCleaer={close}
            loading={isLodaing}
          />
          {Object.entries(searchResult).map(([type, result]) => {
            return (
              <SearchResult
                key={type}
                title={capitalize(type)}
                data={result}
                onClick={handleClick}
              />
            );
          })}
          {recentSearch?.length > 0 && (
            <SearchResult
              title="Recent Search"
              data={recentSearch}
              onClick={handleClick}
            />
          )}
        </div>
      </Modal>
    </>
  );
};
