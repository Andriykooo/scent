"use client";
import styles from "./userPage.module.scss";
import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import { icons } from "@/constants/icons";
import { bannerImages } from "@/constants/images";
import Image from "next/image";
import { RatingStarts } from "@/components/ratingStars/Rating";
import Tabs from "@/components/tabs/TabS";
import { useState } from "react";
import UserPageTabS1 from "@/components/tabs/UserPageTabS1";
import UserPageTabS2 from "@/components/tabs/UserPageTabS2";
import UserPageTabS3 from "@/components/tabs/UserPageTabS3";

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];
const tabs: TabsType = [
  {
    label: "Блоги",
    index: 1,
    Component: UserPageTabS1,
  },
  {
    label: "Вітрина",
    index: 2,
    Component: UserPageTabS2,
  },
  {
    label: "Відгуки",
    index: 3,
    Component: UserPageTabS3,
  },
];
type DataType = {
  id: number;
  userName: string;
  products: number;
  reviews: number;
  abotUser: string;
  readers: number;
};
const Data: DataType[] = [
  {
    id: 1,
    userName: "tizary777",
    products: 49,
    reviews: 50,
    abotUser:
      "Я - парфумер, майстер ароматів, який створює незабутні композиції запахів. Моя робота полягає в тому, щоб об'єднати нотки, які виражають емоції та особистість через аромат. Я творю нові парфуми, вдихаючи в них життя і характер, допомагаючи людям виразити свою унікальність і справжню сутність через запах. Моя мета - дарувати неповторні моменти емоційної зв'язку через аромат.",
    readers: 12,
  },
];

export default function userPage() {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  return (
    <div>
      <BreadCrumbs breadCrumbsPass="PROFILE" />
      <div className={styles.header}>
        <Image
          src={bannerImages.IMAGE_5}
          height={200}
          width={1470}
          alt="profileHeader"
        ></Image>
      </div>
      <div className={styles.bar}>
        {Data.map((item) => (
          <>
            <div className={styles.userEllipse}>
              <Image
                src={icons.USER_ELLIPSE}
                height={150}
                width={150}
                alt="userEllipse"
              />

              <div className={styles.userInfoStyle}>
                <div className={styles.userBox}>
                  <span className={styles.userName}>{item.userName}</span>
                  <span className={styles.ratting}>4.6</span>
                  <RatingStarts size={15} />
                </div>
                <div className={styles.rattingWrapper}>
                  <div className={styles.reviews}>
                    <span>{item.reviews} відгуків</span>
                  </div>
                  <div className={styles.products}>
                    <span>{item.products} товарів</span>
                  </div>
                  <div className={styles.readers}>
                    <span>{item.readers} читачів</span>
                  </div>
                </div>
              </div>
              <div className={styles.abotUser}>{item.abotUser}</div>
              <div className={styles.buttonStyle}>
                <button className={styles.ButtonWrapper}>Стежити</button>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className={styles.tabs}>
        <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      </div>
    </div>
  );
}
