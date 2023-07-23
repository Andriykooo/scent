"use client";

import { FC, useRef, useState } from "react";
import styles from "./search.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import { icons } from "@/constants/icons";
import { Icon } from "../icon/Icon";
import { Input } from "../Input/Input";
import { SearchResult } from "./searchResult/SearchResult";
import { designers } from "@/mock/designers";

export const Search: FC = ({}) => {
  const inputRef = useRef(null);

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

  useClickOutside(inputRef, close);

  const filteredDesigners = designers
    .slice(0, 5)
    .filter((designer) =>
      designer.name.toLowerCase().includes(input.toLowerCase())
    );

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
            {filteredDesigners.length > 0 && (
              <SearchResult title="Designers" data={filteredDesigners} />
            )}
            <SearchResult title="Recent Search" data={[]} />
          </div>
        </div>
      )}
    </>
  );
};
