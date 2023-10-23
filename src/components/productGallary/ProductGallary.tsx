import { icons } from "@/constants/icons";
import { FC } from "react";
import { BuyButton } from "../buyButton/Button";
import { RatingStarts } from "../ratingStars/Rating";
import styles from "./productGallary.module.scss";
import Image from "next/image";
import { EditButton } from "../editButton/EditButton";

type ProductGallaryProps = {
  favoriteClickHandler?: (id: number) => void;
  price: number;
  id: number;
  name: string;
  sellStatus: boolean;
  volume?: number;
  totalVolume?: number;
  subTitle: string;
  rating: { stars: number; votes: number };
  image: string;
  listIsFavorite: { [key: string]: boolean };
  isButton: boolean;
  isEdit: boolean;
  deleteClickHandler?: (id: number) => void;
};

export const ProductGallary: FC<ProductGallaryProps> = ({
  id,
  image,
  name,
  sellStatus,
  subTitle,
  totalVolume,
  volume,
  price,
  favoriteClickHandler,
  rating,
  listIsFavorite,
  isButton = false,
  isEdit = false,
  deleteClickHandler,
}) => {
  return (
    <div className={styles.ProductGallery}>
      <span>
        {deleteClickHandler && (
          <Image
            className={styles.removeIcon}
            onClick={(event) => {
              event.preventDefault();
              deleteClickHandler(id);
            }}
            src={icons.REMOVE_ICON}
            height={18}
            width={18}
            alt={"removeIcon"}
          />
        )}
        {favoriteClickHandler &&
          (listIsFavorite[id] ? (
            <Image
              onClick={(event) => {
                event.preventDefault();
                favoriteClickHandler(id);
              }}
              src={icons.HEART_FILL}
              height={17}
              width={17}
              alt={"HeartFill"}
            />
          ) : (
            <Image
              onClick={(event) => {
                event.preventDefault();
                favoriteClickHandler(id);
              }}
              src={icons.HEART_OUTLINE}
              height={17}
              width={17}
              alt={"HeartOutLine"}
            />
          ))}
      </span>
      <Image src={image} height={250} width={250} alt={"Parfums-1"} />
      <strong>{name}</strong>
      <span className={styles.BottomTitleName}> {subTitle}</span>
      <div className={styles.Holder}>
        <div>
          <RatingStarts size={10} />
          <span className={styles.CostStyle}>
            {sellStatus ? (
              <span className={styles.grayColor}>Продано</span>
            ) : (
              <span> {price} ₴ </span>
            )}
          </span>
        </div>
        <div className={styles.InfoStyle}>
          {volume && totalVolume && (
            <>
              <span className={styles.grayColor}>Залишилось:</span>
              <span>
                {volume} | {totalVolume} ml
              </span>
            </>
          )}
        </div>
      </div>

      {isButton && <BuyButton />}
      {isEdit && <EditButton />}
    </div>
  );
};
