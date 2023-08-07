"use client";
import styles from "./privateOffers.module.scss";
import { FC, ReactNode } from "react";
import { icons } from "@/constants/icons";
import Image from "next/image";
import { RatingStarts } from "../ratingStars/Rating";
import styled from "@emotion/styled";
import { PopupExample } from "../popUp/PopUp";
type OffersProducts = {
  id: number;
  rating: { stars: number; votes: number };
  userName: string;
  images: string[];
  imagesGallary: string[];
  userEllipse: string;
  price: number;
  volume: number;
  totalVolume: number;
  remains: number;
};

export type PrivateOffersProps = {
  title: string;
  productList: OffersProducts[];
};

export const PrivateOffers: FC<PrivateOffersProps> = (offers) => {
  return (
    <div className={styles.privateOffers}>
      <h2>{offers.title}</h2>
      {offers.productList.map((item) => (
        <div className={styles.offersStyles}>
          <div className={styles.userImage}>
            <Image
              src={icons.USER_ELLIPSE}
              height={50}
              width={50}
              alt={"UserImage"}
            ></Image>
            <div className={styles.userName}>{item.userName}</div>
          </div>
          <div className={styles.starts}>
            <RatingStarts />
          </div>
          <div className={styles.Images}>
            <ul>
              {item.images.map((image, index) => (
                <li key={index}>
                  <PopupExample
                    trigerButtonContent={<img src={image} />}
                    imagesGallary={item.imagesGallary}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.offerInfo}>
            <span>
              <strong className={styles.textGrayColor}>Залишок: </strong>
              {item.remains} | {item.totalVolume} ml
            </span>
          </div>
          <div className={styles.offerPrice}>
            <span>
              {item.volume} ml | {item.price} ₴
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
