"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import styles from "./search.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import Image from "next/image";
import { icons } from "@/constants.ts/icons";
import { Icon } from "../icon/Icon";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useClickOutside(inputRef, close);

  return (
    <div ref={inputRef} className={styles.Search}>
      <Icon src={icons.SEARCH_ICON} alt="search" height={24} width={24} />
    </div>
  );
};
