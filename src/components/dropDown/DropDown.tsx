import React, { useRef, useState } from "react";
import styles from "./dropDown.module.scss";
import Image from "next/image";
import { icons } from "@/constants/icons";

interface DropdownProps {
  options: string[];
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={toggleDropdown}>
        {selectedOption ? (
          <div className={styles.selectedStyle}>{selectedOption}</div>
        ) : (
          label
        )}
        <Image
          src={icons.ARROW_DOWN_ICON}
          height={11}
          width={11}
          alt="addIcon"
        ></Image>
      </button>
      {isOpen && (
        <ul className={styles.dropDownMenu}>
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
