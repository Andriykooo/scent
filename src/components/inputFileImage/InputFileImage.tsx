import React, { useState } from "react";
import styles from "./inputFileImage.module.scss";
import Image from "next/image";
import { icons } from "@/constants/icons";
import useUniqueId from "@/hooks/useUniqueId";

const InputFileImage = () => {
  const [selectedImage, setSelectedImage] = useState();
  const uniqueId = useUniqueId();
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(undefined);
  };

  return (
    <>
      <div className={styles.container}>
        <input
          id={uniqueId}
          accept="image/*"
          type="file"
          onChange={imageChange}
        />
        <label htmlFor={uniqueId}>
          {!selectedImage && (
            <div className={styles.preview}>
              <img src={icons.UP_LOAD_IMAGE_ICON} className={styles.image} />

              <button onClick={removeSelectedImage} className={styles.add}>
                <Image
                  src={icons.PLUS_ADD_IMAGE_ICON}
                  height={20}
                  width={20}
                  alt="addIcon"
                ></Image>
              </button>
            </div>
          )}
          {selectedImage && (
            <div className={styles.preview}>
              <img
                src={URL.createObjectURL(selectedImage)}
                className={styles.image}
              />

              <button onClick={removeSelectedImage} className={styles.delete}>
                <Image
                  src={icons.REMOVE_ICON}
                  height={20}
                  width={20}
                  alt="addIcon"
                ></Image>
              </button>
            </div>
          )}
        </label>
      </div>
    </>
  );
};

export default InputFileImage;
