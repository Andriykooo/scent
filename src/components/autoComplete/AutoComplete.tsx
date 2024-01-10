import React, { useState } from "react";
import styles from "./autoComplete.module.scss";
const Autocomplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const parfumse = [
    "Christian Dior Sauvage",
    "Dior Poison Girl",
    "Dior Addict",
    "Dior Jadore",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredParfumse = parfumse.filter((parfume) =>
      parfume.toLowerCase().includes(value.toLowerCase()),
    );

    setSuggestions(filteredParfumse || []);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div className={styles.autoCompleteWrapper}>
      <input
        placeholder="Назва продукту"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul className={styles.suggestion}>
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
