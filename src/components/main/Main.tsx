import { FC, PropsWithChildren } from "react";
import style from "./main.module.scss";

export const Main: FC<PropsWithChildren> = ({ children }) => {
  return <main className={style.main}>{children}</main>;
};
