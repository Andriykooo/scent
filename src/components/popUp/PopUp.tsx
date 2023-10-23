import React, { ReactNode, MouseEvent, useState } from "react";
import { Popup } from "reactjs-popup";
import styles from "./popUp.module.scss";
import { PhotoGallery } from "../photoGallary/PhotoGallary";

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
          <div className={styles.gallaryHolder}>
            <PhotoGallery photos={imagesGallary} currentIndex={0} />
          </div>
        </div>
      </div>
    )}
  </Popup>
);
