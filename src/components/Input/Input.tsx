import { ChangeEvent, FC } from "react";

type InputProps = {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: FC<InputProps> = ({ value, onChange }) => {
  return <input value={value} onChange={onChange} />;
};
