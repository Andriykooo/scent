"use client";
import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import { icons } from "@/constants/icons";
import React, { useState } from "react";
import styles from "./myProducts.module.scss";
import Image from "next/image";
import { ProfileMenu } from "@/components/profileMenu/profileMenu";
import { Icon } from "@/components/icon/Icon";
import { ProductGallary } from "@/components/productGallary/ProductGallary";

const Data = [
  {
    id: 1,
    image: icons.PARFUME1_ICON,
    name: "Christian Dior Sauvage",
    price: 42,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: undefined,
    totalVolume: undefined,
    sellStatus: false,
  },
  {
    id: 2,
    image: icons.PARFUME2_ICON,
    name: "Bleu de Chanel",
    price: 50,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: 31,
    totalVolume: 250,
    remains: 20,
    sellStatus: false,
  },
  {
    id: 3,
    image: icons.PARFUME3_ICON,
    name: "Hugo Boss Selection",
    price: 29,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: 31,
    totalVolume: undefined,
    sellStatus: true,
  },
  {
    id: 4,
    image: icons.PARFUME4_ICON,
    name: "Armani CODE",
    price: 26,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: undefined,
    totalVolume: undefined,
    sellStatus: false,
  },
  {
    id: 5,
    image: icons.PARFUME5_ICON,
    name: "Versace Eros",
    price: 36,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: 25,
    totalVolume: 200,
    sellStatus: false,
  },
  {
    id: 6,
    image: icons.PARFUME2_ICON,
    name: "Bleu de Chanel",
    price: 35,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: 31,
    totalVolume: 250,
    sellStatus: false,
  },
  {
    id: 7,
    image: icons.PARFUME4_ICON,
    name: "Armani CODE",
    price: 26,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: undefined,
    totalVolume: undefined,
    sellStatus: false,
  },
  {
    id: 8,
    image: icons.PARFUME3_ICON,
    name: "Hugo Boss Selection",
    price: 35,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: undefined,
    totalVolume: undefined,
    sellStatus: true,
  },
];

export default function MyProducts() {
  return (
    <div>
      <BreadCrumbs breadCrumbsPass="PROFILE" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.bar}>
            <div className={styles.userEllipse}>
              <Image
                src={icons.USER_ELLIPSE}
                height={40}
                width={40}
                alt="profile"
              ></Image>
              <span>tizary777</span>
            </div>
            <ProfileMenu />
          </div>
          <div className={styles.content}>
            <div className={styles.myProductsHeader}>
              <div className={styles.myProductsWrapper}>
                <h1>Додати продукт</h1>
                <Icon
                  src={icons.ADD_ICON}
                  height={18}
                  width={18}
                  alt="addIcon"
                ></Icon>
              </div>

              <div className={styles.fillterStyles}>
                <h2>
                  Спочатку: <strong>Продані</strong>
                </h2>
                <Icon
                  src={icons.ARROW_DOWN_ICON}
                  height={10}
                  width={18}
                  alt="addIcon"
                ></Icon>
              </div>
            </div>
            <div className={styles.productWrapper}>
              {Data &&
                Data.map((item) => (
                  <ProductGallary
                    id={item.id}
                    price={item.price}
                    name={item.name}
                    sellStatus={item.sellStatus}
                    volume={item.volume}
                    totalVolume={item.totalVolume}
                    subTitle={item.subTitle}
                    rating={item.rating}
                    image={item.image}
                    listIsFavorite={[]}
                    isButton={false}
                    isEdit={true}
                    deleteClickHandler={() => console.log(item.id)}
                  ></ProductGallary>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
