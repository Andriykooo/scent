import { FC, PropsWithChildren } from "react";
import styles from "./products.module.scss";
import Image from "next/image";
import { icons } from "@/constants.ts/icons";
import { Icon } from "../icon/Icon";
type Product = {
  image: string;
  name: string;
  isFavorite: boolean;
  price: number;
};

export const Title: FC = () => {
  return (
    <div>
      <h1 className={styles.Title}>NEW PRODUCTS</h1>
      <h2 className={styles.ViewAll}>View All...</h2>
    </div>
  );
};

export const UnderLine: FC = () => {
  return <h3 className={styles.UnderLine}></h3>;
};

export const Products: FC = () => {
  return (
    <ul className={styles.ProductGallery}>
      <li>
        <a href="#">
          <Image
            src={icons.PARFUME1_ICON}
            height={190}
            width={190}
            alt={"Parfums-1"}
          />
          <strong>Christian Dior Sauvage</strong>
          <span>
            <span>
              <Icon
                src={icons.HEART_OUTLINE}
                height={15}
                width={15}
                alt={"HeartOutLine"}
              />
            </span>
            <span>30 UAH</span>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <Image
            src={icons.PARFUME2_ICON}
            height={190}
            width={190}
            alt={"Parfums-2"}
          />
          <strong>Bleu de Chanel </strong>
          <span>
            <span>
              <Icon
                src={icons.HEART_FILL}
                height={15}
                width={15}
                alt={"HeartOutLine"}
              />
            </span>
            <span>1 ml for 42 UAH</span>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <Image
            src={icons.PARFUME3_ICON}
            height={190}
            width={190}
            alt={"Parfums-3"}
          />
          <strong>Versace Eros</strong>
          <span>
            <span>
              <Icon
                src={icons.HEART_OUTLINE}
                height={15}
                width={15}
                alt={"HeartOutLine"}
              />
            </span>
            <span>1 ml for 36 UAH</span>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <Image
            src={icons.PARFUME4_ICON}
            height={190}
            width={190}
            alt={"Parfums-4"}
          />
          <strong>Armani CODE</strong>
          <span>
            <span>
              <Icon
                src={icons.HEART_OUTLINE}
                height={15}
                width={15}
                alt={"HeartOutLine"}
              />
            </span>
            <span>26 UAH</span>
          </span>
        </a>
      </li>
      <li>
        <a href="#">
          <Image
            src={icons.PARFUME5_ICON}
            height={190}
            width={190}
            alt={"Parfums-5"}
          />
          <strong>Hugo Boss Selection</strong>
          <span>
            <span>
              <Icon
                src={icons.HEART_OUTLINE}
                height={15}
                width={15}
                alt={"HeartOutLine"}
              />
            </span>
            <span className={styles.redSold}>SOLD</span>
          </span>
        </a>
      </li>
    </ul>
  );
};
