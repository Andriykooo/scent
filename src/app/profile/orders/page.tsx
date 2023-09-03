"use client";
import React from "react";
import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import { icons } from "@/constants/icons";
import styles from "./myOrders.module.scss";
import Image from "next/image";
import { Icon } from "@/components/icon/Icon";
import { ProfileMenu } from "@/components/profileMenu/profileMenu";

enum statusIcon {
  wait = "WAIT",
  success = "SUCCESS",
  cancel = "CANCEL",
}
function renderStatusIcon(productStatusIcon: statusIcon): JSX.Element {
  let result;
  switch (productStatusIcon) {
    case statusIcon.cancel:
      result = (
        <Image src={icons.CANCEL_ICON} height={20} width={20} alt="CANCEL" />
      );
      break;
    case statusIcon.success:
      result = (
        <Image src={icons.SUCCESS_ICON} height={20} width={20} alt="SUCCESS" />
      );
      break;
    default:
      result = (
        <Image src={icons.WAITING_ICON} height={20} width={20} alt="WAITING" />
      );
  }
  return result;
}

type Order = {
  productName: string;
  productType: string;
  productVolume: number;
  productPrice?: number;
  productTotalPrice: number;
};

type DataType = {
  id: number;
  userName: string;
  createData: string;
  orderProducts: Order[];
  productStatus: string;
  productStatusIcon: statusIcon;
};

const Data: DataType[] = [
  {
    id: 1,
    userName: "tizary777",
    createData: "29.06.2023 13:57",
    orderProducts: [
      {
        productName: "Christian Dior Sauvage",
        productType: "Розлив",
        productPrice: 36,
        productVolume: 22,
        productTotalPrice: 792,
      },
      {
        productName: "Armani CODE",
        productType: "Флакон",
        productVolume: 250,
        productPrice: undefined,
        productTotalPrice: 1650,
      },
      {
        productName: "Versace Eros",
        productType: "Флакон",
        productVolume: 200,
        productTotalPrice: 1490,
      },
    ],
    productStatus: "В очікуванні",
    productStatusIcon: statusIcon.wait,
  },
  {
    id: 2,
    userName: "tizary777",
    createData: "29.06.2023 13:57",
    orderProducts: [
      {
        productName: "Christian Dior Sauvage",
        productType: "Флакон",
        productVolume: 22,
        productPrice: 36,
        productTotalPrice: 792,
      },
    ],
    productStatus: "В очікуванні",
    productStatusIcon: statusIcon.success,
  },
  {
    id: 3,
    userName: "Natalya_UA",
    createData: "29.06.2023 13:57",
    orderProducts: [
      {
        productName: "Versace Eros",
        productType: "Флакон",
        productVolume: 200,
        productTotalPrice: 1490,
      },
    ],
    productStatus: "Скасовано",
    productStatusIcon: statusIcon.cancel,
  },
  {
    id: 4,
    userName: "Goss_koss",
    createData: "29.06.2023 13:57",
    orderProducts: [
      {
        productName: "Armani CODE",
        productType: "Флакон",
        productVolume: 250,
        productTotalPrice: 1650,
      },
    ],
    productStatus: "Доставлено",
    productStatusIcon: statusIcon.wait,
  },
  {
    id: 5,
    userName: "Goss_koss",
    createData: "29.06.2023 13:57",
    orderProducts: [
      {
        productName: "Armani CODE",
        productType: "Розлив",
        productVolume: 250,
        productTotalPrice: 1650,
      },
    ],
    productStatus: "Доставлено",
    productStatusIcon: statusIcon.success,
  },
  {
    id: 6,
    userName: "tizary777",
    createData: "29.06.2023 13:57",
    orderProducts: [
      {
        productName: "Christian Dior Sauvage",
        productType: "Флакон",
        productVolume: 22,
        productPrice: 36,
        productTotalPrice: 792,
      },
    ],
    productStatus: "В очікуванні",
    productStatusIcon: statusIcon.cancel,
  },
  {
    id: 7,
    userName: "Natalya_UA",
    createData: "29.06.2023 13:57",
    orderProducts: [
      {
        productName: "Versace Eros",
        productType: "Розлив",
        productVolume: 200,
        productTotalPrice: 1490,
      },
    ],
    productStatus: "Скасовано",
    productStatusIcon: statusIcon.wait,
  },
];

export default function MyOrders() {
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
              />
              <span>tizary777</span>
            </div>
            <ProfileMenu />
          </div>
          <div className={styles.content}>
            <div className={styles.myProductsHeader}></div>
            <div className={styles.productWrapper}>
              <ul className={styles.orderList}>
                {Data.map((order) => (
                  <li key={order.id} className={styles.orderItem}>
                    <div className={styles.UserTextStyles}>
                      {order.userName}
                    </div>
                    <div className={styles.grayTextColor}>
                      {order.createData}
                    </div>
                    <ul className={styles.productList}>
                      {order.orderProducts.map((product, index) => (
                        <li key={index} className={styles.productItem}>
                          <div className={styles.ProductNameTextStyles}>
                            {product.productName}
                          </div>
                          <div className={styles.grayTextColor}>
                            {product.productType}
                          </div>
                          <div className={styles.volumeAndPrise}>
                            {product.productVolume} ml
                            {product.productPrice && (
                              <> | {product.productPrice} ₴ </>
                            )}
                          </div>
                          <div>
                            <strong>{product.productTotalPrice} ₴ </strong>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.textStyles}>
                      {order.productStatus}
                      {renderStatusIcon(order.productStatusIcon)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
