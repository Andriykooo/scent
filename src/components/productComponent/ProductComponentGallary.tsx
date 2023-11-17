"use client";
import { FC, ReactNode } from "react";
import styles from "./product.module.scss";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { BuyButton } from "../buyButton/Button";
import { CustomSelect } from "../selectProduct/Select";
type ProductProps = {
  BaseNotes: ReactNode;
  MiddleNote: ReactNode;
  TopNote: ReactNode;
  TypeOfAroma: ReactNode;
  Classification: ReactNode;
  Gender: ReactNode;
  MadeIn: ReactNode;
  TMcountry: ReactNode;
  ThePremiereOfTheFragrance: ReactNode;
  id: number;
  image: string[];
  name: string;
  price: number;
};

export const Product: FC<ProductProps> = (product) => {
  return (
    <div className={styles.product}>
      <div className={styles.gallery}>
        <div className={styles.galleryHolder}>
          <div className={styles.ArrowLeft}>
            <Image
              src={icons.ARROW_LEFT_ICON}
              height={40}
              width={22}
              alt={"ArrowLeft"}
            />
          </div>
          <Image
            src={icons.PARFUME1_ICON}
            height={350}
            width={350}
            alt={"Parfume1"}
          />
          <div className={styles.ArrowRight}>
            <Image
              src={icons.ARROW_RIGHT_ICON}
              height={40}
              width={22}
              alt={"ArrowLeft"}
            />
          </div>
        </div>
        <div className={styles.name}>
          <h3>
            Sauvage
            <strong className={styles.nameTextStyles}>Christian Dior</strong>
          </h3>
        </div>
      </div>

      <div className={styles.characteristic}>
        <p>
          <strong className={styles.textStyles}>Christian Dior Sauvage </strong>
          Parfume це новий аспект знаменитого аромату! За знайомими нотами
          туалетної води Sauvage приховані глибокі пряні акорди абсолютної
          ванілі. Ще більш інтенсивні, благородні, міцні та загадкові. Дикий бік
          чоловіка Sauvage прихований під непроникною завісою ночі
        </p>
        <div className={styles.productDetails}>
          <ul>
            <li>
              <strong className={styles.textStyles}>Прем’єра аромату: </strong>
              {product.ThePremiereOfTheFragrance}
            </li>
            <li>
              <strong className={styles.textStyles}>Країна ТМ:</strong>{" "}
              {product.TMcountry}
            </li>
            <li>
              <strong className={styles.textStyles}>Зроблено в:</strong>{" "}
              {product.MadeIn}
            </li>
            <li>
              <strong className={styles.textStyles}>Стать: </strong>
              {product.Gender}
            </li>
            <li>
              <strong className={styles.textStyles}>Класифікація:</strong>{" "}
              {product.Classification}
            </li>
            <li>
              <strong className={styles.textStyles}>Тип аромату:</strong>{" "}
              {product.TypeOfAroma}
            </li>
            <li>
              {" "}
              <strong className={styles.textStyles}>
                Початкова нота:
              </strong>{" "}
              {product.TopNote}
            </li>
            <li>
              <strong className={styles.textStyles}>Середня нота:</strong>{" "}
              {product.MiddleNote}
            </li>
            <li>
              <strong className={styles.textStyles}>Кінцева нота: </strong>
              {product.BaseNotes}
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.checkoutStyles}>
        <div className={styles.buttonUpperText}>
          <strong>{product.price}₴ </strong>
          <div className={styles.grayColor}>
            <strong>Безкоштовна доставка</strong>
          </div>
        </div>
        <BuyButton showButton={true} />
        <div>
          <CustomSelect />
        </div>
        <div className={styles.productCode}>
          <strong> код товару: 2560</strong>
        </div>
      </div>
    </div>
  );
};
