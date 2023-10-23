"use client";
import React, { useState } from "react";
import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import { icons } from "@/constants/icons";
import styles from "./myOrders.module.scss";
import Image from "next/image";
import { Icon } from "@/components/icon/Icon";
import { ProfileMenu } from "@/components/profileMenu/profileMenu";
import { routes } from "@/constants/routes";
import Link from "next/link";

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
  productVolume: number;
  productPrice?: number;
  productTotalPrice: number;
};

type DataType = {
  id: number;
  userName: string;
  createData: string;
  productOrderNumber: string;
  orderProducts: Order[];
  productStatus: string;
  productStatusIcon: statusIcon;
};

const Data: DataType[] = [
  {
    id: 1,
    userName: "tizary777",
    createData: "29.06.2023 13:57",
    productOrderNumber: "4353458098563",
    orderProducts: [
      {
        productName: "Christian Dior Sauvage",
        productPrice: 36,
        productVolume: 22,
        productTotalPrice: 792,
      },
      {
        productName: "Armani CODE",
        productVolume: 250,
        productPrice: undefined,
        productTotalPrice: 1650,
      },
      {
        productName: "Versace Eros",
        productVolume: 200,
        productTotalPrice: 1490,
      },
    ],
    productStatus: "",
    productStatusIcon: statusIcon.wait,
  },
  {
    id: 2,
    userName: "tizary777",
    createData: "29.06.2023 13:57",
    productOrderNumber: "3459834579354",
    orderProducts: [
      {
        productName: "Christian Dior Sauvage",
        productVolume: 22,
        productPrice: 36,
        productTotalPrice: 792,
      },
    ],
    productStatus: "",
    productStatusIcon: statusIcon.success,
  },
  {
    id: 3,
    userName: "Natalya_UA",
    createData: "29.06.2023 13:57",
    productOrderNumber: "2350987650981",
    orderProducts: [
      {
        productName: "Versace Eros",
        productVolume: 200,
        productTotalPrice: 1490,
      },
    ],
    productStatus: "",
    productStatusIcon: statusIcon.cancel,
  },
  {
    id: 4,
    userName: "Goss_koss",
    createData: "29.06.2023 13:57",
    productOrderNumber: "4564589087223",
    orderProducts: [
      {
        productName: "Armani CODE",
        productVolume: 250,
        productTotalPrice: 1650,
      },
    ],
    productStatus: "",
    productStatusIcon: statusIcon.success,
  },
  {
    id: 5,
    userName: "Goss_koss",
    createData: "29.06.2023 13:57",
    productOrderNumber: "8163387927284",
    orderProducts: [
      {
        productName: "Armani CODE",
        productVolume: 250,
        productTotalPrice: 1650,
      },
    ],
    productStatus: "",
    productStatusIcon: statusIcon.success,
  },
  {
    id: 6,
    userName: "tizary777",
    createData: "29.06.2023 13:57",
    productOrderNumber: "2389546327651",
    orderProducts: [
      {
        productName: "Christian Dior Sauvage",
        productVolume: 22,
        productPrice: 36,
        productTotalPrice: 792,
      },
    ],
    productStatus: "",
    productStatusIcon: statusIcon.wait,
  },
  {
    id: 7,
    userName: "Natalya_UA",
    createData: "29.06.2023 13:57",
    productOrderNumber: "8324623812615",
    orderProducts: [
      {
        productName: "Versace Eros",
        productVolume: 200,
        productTotalPrice: 1490,
      },
    ],
    productStatus: "",
    productStatusIcon: statusIcon.cancel,
  },
];

export default function MyOrders() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const toggleList = (listIndex: number) => {
    setActiveIndices((prevActiveIndices) => {
      if (prevActiveIndices.includes(listIndex)) {
        return prevActiveIndices.filter((index) => index !== listIndex);
      } else {
        return [...prevActiveIndices, listIndex];
      }
    });
  };

  return (
    <div>
      <BreadCrumbs breadCrumbsPass="PROFILE" />
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.bar}>
            <Link href={routes.PROFILE_USER_PAGE}>
              <div className={styles.userEllipse}>
                <Image
                  src={icons.USER_ELLIPSE}
                  height={40}
                  width={40}
                  alt="profile"
                />
                <span>tizary777</span>
                <Image
                  src={icons.VERIFICATION}
                  height={17}
                  width={50}
                  alt="profile"
                />
              </div>
            </Link>
            <ProfileMenu />
          </div>
          <div className={styles.content}>
            <div className={styles.productWrapper}>
              <ul className={styles.orderList}>
                <li className={`${styles.header} ${styles.orderItem}`}>
                  <div className={styles.UserTextStyles}>Користувач</div>
                  <div className={styles.createData}>Дата</div>
                  <div className={styles.productOrderNumber}>
                    Номер замовлення
                  </div>
                  <ul className={styles.productList}>
                    <li className={styles.productItem}>
                      <div className={styles.ProductNameTextStyles}>
                        Продукт
                      </div>
                      <div className={styles.volume}>Кількість</div>
                      <div className={styles.price}>
                        <strong>Ціна</strong>
                      </div>
                    </li>
                  </ul>
                  <div className={styles.textStyles}>
                    <div>Статус</div>
                  </div>
                </li>
                {Data.map((order, listIndex) => (
                  <li key={order.id} className={styles.orderItem}>
                    <div className={styles.UserTextStyles}>
                      {order.userName}
                    </div>
                    <div className={styles.createData}>{order.createData}</div>
                    <div className={styles.productOrderNumber}>
                      {order.productOrderNumber}
                    </div>
                    <ul className={styles.productList}>
                      {order.orderProducts.map((product, index) => {
                        const isMultipleProducts =
                          order.orderProducts.length > 1;
                        return (
                          (activeIndices.includes(listIndex) ||
                            index === 0) && (
                            <li key={index} className={styles.productItem}>
                              <div className={styles.ProductNameTextStyles}>
                                {product.productName}
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
                          )
                        );
                      })}
                    </ul>
                    <div>
                      <div className={styles.textStyles}>
                        <div>{order.productStatus}</div>
                        <div>{renderStatusIcon(order.productStatusIcon)}</div>
                      </div>
                    </div>
                    <div className={styles.colabs}>
                      {order.orderProducts.length > 1 && (
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            toggleList(listIndex);
                          }}
                          href=""
                        >
                          {activeIndices.includes(listIndex) ? (
                            <div className={styles.orderListIcon}>
                              <Image
                                src={icons.ARROW_UP_ICON}
                                height={15}
                                width={15}
                                alt="arrowUp"
                              ></Image>
                            </div>
                          ) : (
                            <div className={styles.orderListIcon}>
                              <Image
                                src={icons.ARROW_DOWN_ICON}
                                height={15}
                                width={15}
                                alt="arrowUp"
                              ></Image>
                            </div>
                          )}
                        </a>
                      )}
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
