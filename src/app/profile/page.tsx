"use client";

import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import { icons } from "@/constants/icons";
import React from "react";
import styles from "./profile.module.scss";
import Image from "next/image";
import { ProfileMenu } from "@/components/profileMenu/profileMenu";

export default function ProfilePage() {
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
              ></Image>
              <span>tizary777</span>
            </div>
            <ProfileMenu />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <div>
                <h2>Особисті дані</h2>
              </div>
              <div>
                <a href="">Редагувати</a>
              </div>
            </div>
            <div>
              <div>
                <div className={styles.personalData}>
                  <div className={styles.personalDataStyles}>
                    <div>
                      <label htmlFor="Lastname">Прізвище</label>
                      <input id="Lastname" type="text" value={"Mostavchuk"} />
                    </div>
                    <div>
                      <label htmlFor="Firstname">Ім'я</label>
                      <input id="Firstname" type="text" value={"Petro"} />
                    </div>
                    <div>
                      <label htmlFor="Surname">По батькові</label>
                      <input id="Surname" type="text" value={"Не вказано"} />
                    </div>
                    <div>
                      <label htmlFor="RegistrationDate">Дата реєстрації</label>
                      <input
                        id="RegistrationDate"
                        type="text"
                        value={"09.10.2015"}
                      />
                    </div>
                  </div>
                  <div className={styles.personalDataWrapper}>
                    <div>
                      <label htmlFor="DateOfBirth">Дата народження</label>
                      <input
                        id="DateOfBirth"
                        type="text"
                        value={"21.05.1996"}
                      />
                    </div>
                    <div>
                      <label htmlFor="Sex">Стать</label>
                      <input id="Sex" type="text" value={"Чоловіча"} />
                    </div>
                    <div>
                      <label htmlFor="PlaceOfResidence">Місце проживання</label>
                      <input
                        id="PlaceOfResidence"
                        type="text"
                        value={" с.Хлівище"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Контакти</h2>
            </div>
            <div>
              <div className={styles.personalInfo}>
                <div className={styles.personalInfoWrapper}>
                  <div>
                    <label htmlFor="Email">Електронна пошта</label>
                    <input
                      id="Email"
                      type="text"
                      value={"mostavchuk96@gmail.com"}
                    />
                  </div>
                  <div>
                    <label htmlFor="PhoneNumber">Номер телефону</label>
                    <input
                      id="PhoneNumber"
                      type="text"
                      value={"+380985387215"}
                    />
                  </div>
                  <div>
                    <label htmlFor="Instagram">Інстаграм</label>
                    <input
                      id="Instagram"
                      type="text"
                      value={"@petro.mostavchuk"}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttons}>
              <div className={styles.buttonsHolder}>
                <div>
                  <a href="">Вийти</a>
                </div>
                <div>
                  <a href="">Змінити пароль</a>
                </div>
              </div>
              <div>
                <a href="">Видалити акаунт</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
