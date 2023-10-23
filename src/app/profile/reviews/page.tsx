"use client";
import React from "react";
import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import { icons } from "@/constants/icons";
import styles from "./myReviews.module.scss";
import Image from "next/image";
import { Icon } from "@/components/icon/Icon";
import { ProfileMenu } from "@/components/profileMenu/profileMenu";
import { RatingStarts } from "@/components/ratingStars/Rating";
import { FeedBackPagesNumber } from "@/components/numbersPageFeedBack/NumbersPage";
import { routes } from "@/constants/routes";
import Link from "next/link";

type DataType = {
  id: number;
  userName: string;
  createData: string;
  productOrderNumber: string;
  content: string;
};

const Data: DataType[] = [
  {
    id: 1,
    userName: "tizary777",
    createData: "29 червня 2023 13:57",
    productOrderNumber: "65554",
    content:
      "Користуюся вже понад 5 років. Не рахувала, який тюбик. Для моєї комбінованої шкіри допомагає при гормональних прищах або висипах при зміні клімату, води, при частих поїздках або інтенсивних тренуваннях. Діє магічно, буває й за ніч прибирає прищики. Якщо ж це висип через надмірне споживання цукру (наприклад, цукерки і солодкі напої), крем ніякий, не дає жодного ефекту. Та все ж вважаю це його плюсом, а не мінусом — бо відсутність ефекту від косметичних засобів стимулює триматися здорової дієти. Рекомендую!",
  },
  {
    id: 2,
    userName: "Natalya_UA",
    createData: "29 червня 2023 13:57",
    productOrderNumber: "65254",
    content:
      "Запах приємний, свіжий, ненав'язливий. Але стійкість нульова. Раніше після використання на одязі легкий аромат залишався ще декілька днів. Цього разу зовсім по іншому. Замовляла з України.",
  },
  {
    id: 3,
    userName: "Goss_koss",
    createData: "29 червня 2023 13:57",
    productOrderNumber: "65854",
    content:
      "Хороші духи,замовляла перший раз і прийшли такі як я і хотіла, дякую )",
  },
];

export default function myReviews() {
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
            <div className={styles.myReviewsHeader}>
              <div className={styles.fillterStyles}>
                <h2>
                  Спочатку: <strong>По рейтингу</strong>
                </h2>
                <Image
                  src={icons.ARROW_DOWN_ICON}
                  height={18}
                  width={18}
                  alt="addIcon"
                ></Image>
              </div>
            </div>
            <div className={styles.reviewsWrapper}>
              {Data.map((item) => (
                <li key={item.id} className={styles.orderItem}>
                  <div className={styles.userNameData}>
                    <div className={styles.userName}>{item.userName}</div>
                    <span>{item.createData}</span>
                  </div>
                  <div className={styles.reviewsCommentContent}>
                    <div className={styles.wrapperHolder}>
                      <div className={styles.reviewsRating}>
                        <RatingStarts size={10} />
                      </div>
                      <div className={styles.contentBox}>{item.content}</div>
                    </div>
                    <div className={styles.linkHolder}>
                      <a href="#">Відповісти</a>
                    </div>
                  </div>
                  <div className={styles.reviewsOrderNumber}>
                    <span>Замовлення: </span>
                    {item.productOrderNumber}
                  </div>
                </li>
              ))}
            </div>
            <FeedBackPagesNumber />
          </div>
        </div>
      </div>
    </div>
  );
}
