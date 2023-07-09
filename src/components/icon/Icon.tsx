import Image, { ImageProps } from "next/image";
import { FC } from "react";
import styles from "./icon.module.scss";
import { useTheme } from "next-themes";
import { themes } from "@/constants.ts/themes";

export const Icon: FC<ImageProps> = (props) => {
  const { theme } = useTheme();

  return <Image {...props} className={styles[theme || themes.LIGHT]} />;
};
