"use client";
import { FC, PropsWithChildren, useState } from "react";
import styles from "./products.module.scss";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { RatingStarts } from "../ratingStars/Rating";
import { BuyButton } from "../buyButton/Button";
import Link from "next/link";
import { routes } from "@/constants/routes";
type Product = {
  id: number;
  image: string;
  name: string;
  isFavorite: boolean;
  price: number;
  rating: { stars: number; votes: number };
  subTitle: string;
  volume?: number;
  totalVolume?: number;
  remains: number;
  sellStatus: boolean;
};

type ProductsProps = {
  products: Array<Product>;
  isButton?: boolean;
};

export const Title: FC = () => {
  return (
    <div className={styles.Title}>
      <h1 className={styles.Name}>НОВI ПРОДУКТИ</h1>
      <h2 className={styles.ViewAll}>Переглянути все...</h2>
    </div>
  );
};

export const SimilarAromatsTitle: FC = () => {
  return (
    <div className={styles.Title}>
      <h1 className={styles.Name}>ПОХОЖІ ЗА АРОМАТОМ</h1>
      <h2 className={styles.ViewAll}>Переглянути все...</h2>
    </div>
  );
};

export const Products: FC<ProductsProps> = ({ products, isButton = true }) => {
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
    <div className={styles.WrapperGallary}>
      <div className={styles.ArrowLeft}>
        <Image
          src={icons.ARROW_LEFT_ICON}
          height={40}
          width={22}
          alt={"ArrowLeft"}
        />
      </div>
      <ul className={styles.ProductGallery}>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={routes.PRODUCT}>
              <span>
                {listIsFavorite[item.id] ? (
                  <Image
                    onClick={(event) => {
                      event.preventDefault();
                      favoriteClickHandler(item.id);
                    }}
                    src={icons.HEART_FILL}
                    height={15}
                    width={15}
                    alt={"HeartFill"}
                  />
                ) : (
                  <Image
                    onClick={(event) => {
                      event.preventDefault();
                      favoriteClickHandler(item.id);
                    }}
                    src={icons.HEART_OUTLINE}
                    height={15}
                    width={15}
                    alt={"HeartOutLine"}
                  />
                )}
              </span>
              <Image
                src={item.image}
                height={250}
                width={250}
                alt={"Parfums-1"}
              />
              <strong>{item.name}</strong>
              <span className={styles.BottomTitleName}> {item.subTitle}</span>
              <div className={styles.Holder}>
                <div>
                  <RatingStarts />
                  <span className={styles.CostStyle}>
                    {item.sellStatus ? (
                      <span className={styles.grayColor}>Продано</span>
                    ) : (
                      <span> {item.price} ₴ </span>
                    )}
                  </span>
                </div>
                <div className={styles.InfoStyle}>
                  {item.volume && item.totalVolume && (
                    <>
                      <span className={styles.grayColor}>Залишилось:</span>
                      <span>
                        {item.volume} | {item.totalVolume} ml
                      </span>
                    </>
                  )}
                </div>
              </div>

              {isButton && <BuyButton />}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.ArrowRight}>
        <Image
          src={icons.ARROW_RIGHT_ICON}
          height={40}
          width={22}
          alt={"ArrowLeft"}
        />
      </div>
    </div>
  );
};
