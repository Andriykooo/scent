"use client";

import { FC, useRef, useState } from "react";
import styles from "./search.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import { icons } from "@/constants/icons";
import { Icon } from "../icon/Icon";
import { Input } from "../Input/Input";
import { SearchResult } from "./searchResult/SearchResult";
import { search } from "@/mock/search";
import { useSearchStore } from "@/store/useSearch";
import { SearhResultType } from "@/types/searchResultType";
import { useRouter } from "next/navigation";

export const Search: FC = ({}) => {
  const router = useRouter();
  const inputRef = useRef(null);

  const recentSearch = useSearchStore((state) => state.history);
  const addToRecentSearch = useSearchStore((state) => state.addToHistory);

  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

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

  const handleClick = (search: SearhResultType) => {
    addToRecentSearch(search);
    // router.push(`${search.type}/${search.id}`);
  };

  useClickOutside(inputRef, close);

  const filteredDesigners = search.reduce((accum, value) => {
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
  }, {} as { [key: string]: SearhResultType[] });

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
      {isOpen && (
        <div className={styles.search_wrapper}>
          <div ref={inputRef} className={styles.search}>
            <Input
              placeholder="Search..."
              value={input}
              onChange={handleChange}
              clear
              onCleaer={close}
            />
            {Object.entries(filteredDesigners).map(([type, result]) => {
              return (
                <SearchResult
                  key={type}
                  title={type}
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
        </div>
      )}
    </>
  );
};
