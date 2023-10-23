"use client";
import React, { FC, Fragment } from "react";
import { RatingStarts } from "../ratingStars/Rating";
import styles from "./tabs.module.scss";
import Image from "next/image";
import { icons } from "@/constants/icons";
import { FeedBackPagesNumber } from "../numbersPageFeedBack/NumbersPage";
type DataType = {
  id: number;
  userName: string;
  createData: string;
  content: string;
  comentsList?: {}[];
  productOrderName: string;
};

const Data: DataType[] = [
  {
    id: 1,
    userName: "tizary777",
    createData: "29 червня 2023 13:57",
    content:
      "Користуюся вже понад 5 років. Не рахувала, який тюбик. Для моєї комбінованої шкіри допомагає при гормональних прищах або висипах при зміні клімату, води, при частих поїздках або інтенсивних тренуваннях. Діє магічно, буває й за ніч прибирає прищики. Якщо ж це висип через надмірне споживання цукру (наприклад, цукерки і солодкі напої), крем ніякий, не дає жодного ефекту. Та все ж вважаю це його плюсом, а не мінусом — бо відсутність ефекту від косметичних засобів стимулює триматися здорової дієти. Рекомендую!",
    productOrderName: "Blue de Chanel",
  },
  {
    id: 2,
    userName: "Natalya_UA",
    createData: "29 червня 2023 13:57",
    content:
      "Запах приємний, свіжий, ненав'язливий. Але стійкість нульова. Раніше після використання на одязі легкий аромат залишався ще декілька днів. Цього разу зовсім по іншому. Замовляла з України.",
    productOrderName: "Christian Dior Sauvage Armani CODE  ",
  },
  {
    id: 3,
    userName: "Goss_koss",
    createData: "29 червня 2023 13:57",
    content:
      "Хороші духи,замовляла перший раз і прийшли такі як я і хотіла, дякую )",
    productOrderName: "Versace Eros",
  },
];
const UserPageTabS3: FC = () => {
  return (
    <Fragment>
      <div className={styles.userPageFeedBackComments}>
        {Data.map((item) => {
          const IsList = !item.comentsList;
          return (
            <div className={styles.userPageFeedBackStyleBox}>
              <div className={styles.userPageFeedBackStyles}>
                <div className={styles.userPageData}>
                  <div>
                    <Image
                      src={icons.USER_ELLIPSE}
                      height={50}
                      width={50}
                      alt={"UserImage"}
                    ></Image>
                    <div className={styles.userPageFeedBackData}>
                      <div className={styles.feedBackUserName}>
                        {item.userName}
                      </div>
                      <span>{item.createData}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.feedBackCommentContent}>
                  <div className={styles.comment}>
                    <div className={styles.userHolder}>
                      <RatingStarts size={10} />
                    </div>
                    <div className={styles.contentBox}>
                      <p>{item.content}</p>
                      <div className={styles.answer}>
                        <a
                          style={
                            (IsList && {
                              borderBottom: "solid 1px #979797",
                            }) ||
                            {}
                          }
                          href="#"
                        >
                          Відповісти
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.userPageProductNameWrapper}>
                  <p className={styles.userPageProductName}>
                    {item.productOrderName}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <FeedBackPagesNumber />
    </Fragment>
  );
};
export default UserPageTabS3;
