import React, { ReactNode, MouseEvent } from "react";
import { Popup } from "reactjs-popup";
import styles from "./popUp.module.scss";
import Image from "next/image";
import { icons } from "@/constants/icons";

type PopUpProps = {
  trigerButtonContent: string | ReactNode | Element;
  imagesGallary: string[];
};

export const PopupExample: React.FC<PopUpProps> = ({
  imagesGallary,
  trigerButtonContent,
}) => (
  <Popup
    trigger={<button className={styles.button}>{trigerButtonContent}</button>}
    position="right center"
  >
    {(close: () => void): ReactNode => (
      <div onClick={close} className={styles.popUp}>
        <div
          onClick={(event: MouseEvent): void => {
            event.stopPropagation();
          }}
          className={styles.content}
        >
          <Image
            src={icons.ARROW_LEFT_ICON}
            height={32}
            width={40}
            alt={"Arrow"}
          />
          <div className={styles.gallaryHolder}>
            <Image
              src={imagesGallary[0]}
              height={425}
              width={425}
              alt={"Product"}
            />
          </div>
          <Image
            src={icons.ARROW_RIGHT_ICON}
            height={32}
            width={40}
            alt={"Arrow"}
          />
        </div>
      </div>
    )}
  </Popup>
);
