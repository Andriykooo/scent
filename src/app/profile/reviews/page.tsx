"use client";
import React from "react";
import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import { icons } from "@/constants/icons";
import styles from "./myReviews.module.scss";
import Image from "next/image";
import { Icon } from "@/components/icon/Icon";
import { ProfileMenu } from "@/components/profileMenu/profileMenu";
import { FeedBack } from "@/components/feedback/Feedback";

export default function myReviews() {
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
            <div className={styles.productWrapper}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
