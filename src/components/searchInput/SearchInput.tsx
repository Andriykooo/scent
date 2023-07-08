"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import { SearchIcon } from "../icons";
import styles from "./search-input.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import { Input } from "../Input/Input";

export const SearchInput: FC = ({}) => {
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
    <div ref={inputRef}>
      <Input value={input} onChange={handleChange} />
      <SearchIcon />
    </div>
  );
};
