"use client";

import { bannerImages } from "@/constants/images";
import Image from "next/image";
import React, { FC, Fragment } from "react";
import styles from "./tabs.module.scss";
type DataType = {
  id: number;
  userName: string;
  aboutBlog: string;
  data: string;
  image: string;
};
const Data: DataType[] = [
  {
    id: 1,
    userName: "tizary777",
    aboutBlog: "Мужній, сміливий, але водночас чуттєвий і елегантний — Sauvage",
    data: "05.11.2023",
    image: bannerImages.BLOG_IMAGE_6,
  },
  {
    id: 2,
    userName: "tizary777",
    aboutBlog: "Модний Дім Christian Dior відзначає 73-річчя ",
    data: "02.17.2023",
    image: bannerImages.BLOG_IMAGE_5,
  },
  {
    id: 3,
    userName: "tizary777",
    aboutBlog: "Відверто жіночний, чарівний Miss Dior",
    data: "25.04.2023",
    image: bannerImages.BLOG_IMAGE_4,
  },
  {
    id: 4,
    userName: "tizary777",
    aboutBlog: "Аромати свіжості та чистоти",
    data: "05.11.2023",
    image: bannerImages.BLOG_IMAGE_3,
  },
  {
    id: 5,
    userName: "tizary777",
    aboutBlog: "Армані: у чому їх особлива цінність",
    data: "02.17.2023",
    image: bannerImages.BLOG_IMAGE_2,
  },
  {
    id: 6,
    userName: "tizary777",
    aboutBlog: "Пошук парфумерії в Інтернеті",
    data: "25.04.2023",
    image: bannerImages.BLOG_IMAGE_1,
  },
];
const UserPageTab1: FC<{}> = () => {
  return (
    <Fragment>
      <div className={styles.blog}>
        <div className={styles.blogWrapper}>
          {Data.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.blogStyles}>
                <Image
                  src={item.image}
                  height={260}
                  width={440}
                  alt={"blogImages"}
                />
                <div className={styles.aboutBlog}>
                  <span>{item.aboutBlog} </span>
                </div>
              </div>
              <div className={styles.dataWrapper}>
                <span>{item.userName}</span>
                <div className={styles.data}>
                  <span>{item.data}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
export default UserPageTab1;
