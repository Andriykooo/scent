import { FC, PropsWithChildren } from "react";
import style from "./main.module.scss";

export const Main: FC<PropsWithChildren> = () => {
  return <main className={style.main}></main>;
};
