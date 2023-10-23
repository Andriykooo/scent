import Image, { ImageProps } from "next/image";
import { FC } from "react";
import styles from "./icon.module.scss";
import { useTheme } from "next-themes";
import { themes } from "@/constants/themes";
import classNames from "classnames";
import { ValueOf } from "@/utils/valueOf";

const invertSwitch = {
  [themes.LIGHT]: themes.DARK,
  [themes.DARK]: themes.LIGHT,
} as const;

type IconProps = ImageProps & {
  invert?: boolean;
};

export const Icon: FC<IconProps> = (props) => {
  const settings = useTheme();
  const theme = settings.theme || themes.LIGHT;

  const { invert, ...imageProps } = props;

  return (
    <Image
      {...imageProps}
      className={classNames(
        styles[
          invert ? invertSwitch[theme as ValueOf<typeof invertSwitch>] : theme
        ],
        props?.className
      )}
    />
  );
};
