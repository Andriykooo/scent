import React, { FC } from "react";
import Select from "react-select";
import styles from "./select.module.scss";

const options = [
  { value: "250", label: "250 ml" },
  { value: "200", label: "200 ml" },
  { value: "150", label: "150 ml" },
];

export const CustomSelect: FC = () => (
  <Select className={styles.customSelect} options={options} />
);
