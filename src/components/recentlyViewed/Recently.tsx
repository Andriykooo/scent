import { icons } from "@/constants.ts/icons";
import Image from "next/image";
import { FC } from "react";
import styles from "./recently.module.scss";

export const RecentlyViewedTitle: FC = () => {
  return (
    <div className={styles.Title}>
      <h1 className={styles.Name}>НЕЩОДАВНО ПЕРЕГЛЯНУТІ</h1>
    </div>
  );
};

export const ReviewedProducts: FC = ({ reviewedProducts }) => {
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
        {reviewedProducts.map((item) => (
          <li key={item.name}>
            <a href="#">
              <Image
                src={item.image}
                height={200}
                width={200}
                alt={"Parfums-1"}
              />
              <strong>{item.name}</strong>

              <span className={styles.BottomTitleName}> {item.subTitle}</span>
              <div className={styles.Holder}>
                <div>
                  <span className={styles.CostStyle}>
                    {item.sellStatus ? (
                      <span className={styles.grayColor}>Продано</span>
                    ) : (
                      <span> {item.price} ₴ </span>
                    )}
                  </span>
                </div>
                <div className={styles.InfoStyle}></div>
              </div>
            </a>
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
