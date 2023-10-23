import { icons } from "@/constants/icons";
import React, { FC, Fragment, useState } from "react";
import { Icon } from "../icon/Icon";
import { ProductGallary } from "../productGallary/ProductGallary";
import styles from "./tabs.module.scss";
import Image from "next/image";
import { ShowCaseProfileMenu } from "../profileShowCaseMenu/ShowCase";
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

const UserPageTab2: FC<{}> = ({}) => {
  const [listIsFavorite, setListIsFavorite] = useState<{
    [key: string]: boolean;
  }>({
    0: true,
  });

  const favoriteClickHandler = (id: number) => {
    setListIsFavorite((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.bar}>
            <ShowCaseProfileMenu />
          </div>
          <div className={styles.content}>
            <div className={styles.myProductsHeader}>
              <div className={styles.myProductsWrapper}>
                <Icon
                  src={icons.ADD_ICON}
                  height={18}
                  width={18}
                  alt="addIcon"
                ></Icon>
              </div>
              <div className={styles.fillterStyles}>
                <h2>
                  Спочатку: <strong>Найпопулярніші</strong>
                </h2>
                <Image
                  src={icons.ARROW_DOWN_ICON}
                  height={18}
                  width={18}
                  alt="addIcon"
                ></Image>
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
                    listIsFavorite={listIsFavorite}
                    isButton={true}
                    isEdit={false}
                    favoriteClickHandler={(event) => {
                      favoriteClickHandler(item.id);
                    }}
                  ></ProductGallary>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default UserPageTab2;
