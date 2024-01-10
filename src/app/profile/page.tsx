"use client";

import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import { icons } from "@/constants/icons";
import React, { useState } from "react";
import styles from "./profile.module.scss";
import Image from "next/image";
import { ProfileMenu } from "@/components/profileMenu/profileMenu";
import { routes } from "@/constants/routes";
import Link from "next/link";
import { Modal } from "@/components/modal/Modal";
import InputFileImage from "@/components/inputFileImage/InputFileImage";
import classNames from "classnames";
const MockCards = [
  [1234, 5678, 9123, 9345],
  [1235, 5679, 9223, 9645],
];
export default function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [indexEditCard, setIndexEditCard] = useState<number | null>(null);
  const [ariaValue, setAriaValue] = useState(
    "Я - парфумер, майстер ароматів, який створює незабутні композиції запахів. Моя робота полягає в тому, щоб об'єднати нотки, які виражають емоції та особистість через аромат. Я творю нові парфуми, вдихаючи в них життя і характер, допомагаючи людям виразити свою унікальність і справжню сутність через запах. Моя мета - дарувати неповторні моменти емоційної зв'язку через аромат.",
  );
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
                ></Image>
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
            <div className={styles.title}>
              <div>
                <h2>Особисті дані</h2>
              </div>
              <div
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <a className={styles.editButton}>Редагувати</a>
              </div>
              <Modal
                editCard
                isOpen={isOpen}
                close={() => {
                  setIsOpen(false);
                }}
                position="center"
                className={styles.editModalProfile}
              >
                <div className={styles.frame}>
                  <div className={styles.editPopUpHeader}>
                    <h1>Редагування профілю</h1>
                  </div>
                  <div className={styles.inputFileImageEditBtn}>
                    <InputFileImage logo={true} />
                    <InputFileImage background={true} />
                  </div>
                  <div className={styles.editAboutUser}>
                    <h2>Про себе</h2>
                  </div>
                  <div className={styles.profileTextArea}>
                    <textarea
                      onChange={(event) => {
                        setAriaValue(event.target.value);
                      }}
                      value={ariaValue}
                      className={styles.textArea}
                    ></textarea>
                  </div>
                  <div className={styles.personalInfoEdit}>
                    <h3>Особисті дані</h3>
                  </div>
                  <div>
                    <div>
                      <div className={styles.editData}>
                        <div className={styles.editDataStyles}>
                          <div>
                            <label htmlFor="Lastname">Прізвище</label>
                            <input
                              id="Lastname"
                              type="text"
                              value={"Mostavchuk"}
                            />
                          </div>
                          <div>
                            <label htmlFor="Firstname">Ім'я</label>
                            <input id="Firstname" type="text" value={"Petro"} />
                          </div>
                          <div>
                            <label htmlFor="Surname">По батькові</label>
                            <input
                              id="Surname"
                              type="text"
                              value={"Не вказано"}
                            />
                          </div>
                        </div>
                        <div className={styles.editDataWrapper}>
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
                            <label htmlFor="PlaceOfResidence">
                              Місце проживання
                            </label>
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
                  <div className={styles.contactInfoEdit}>
                    <h4>Контакти</h4>
                  </div>
                  <div>
                    <div className={styles.editInfo}>
                      <div className={styles.editInfoWrapper}>
                        <div className={styles.editGmail}>
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
                    <div className={styles.editDataWrapper}>
                      <div>
                        <label htmlFor="Телеграм">Телеграм</label>
                        <input id="Телеграм" type="text" value={"petro20"} />
                      </div>
                      <div>
                        <label htmlFor="Вайбер">Вайбер</label>
                        <input id="Вайбер" type="text" value={"mostavchuk20"} />
                      </div>
                      <div>
                        <label htmlFor="Ватсап">Ватсап</label>
                        <input id="Ватсап" type="text" value={"petrom20"} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.walletEdit}>
                    <h5>Гаманець</h5>
                  </div>

                  <div className={styles.cardScroll}>
                    <Modal
                      editCard
                      isOpen={!!indexEditCard}
                      close={() => {
                        setIndexEditCard(null);
                      }}
                      position="center"
                      className={styles.cardEdit}
                    >
                      <div className={styles.editCards}>
                        <div className={styles.editCardLogo}>SCENT</div>
                        <div className={styles.editCardNumber}>
                          {indexEditCard &&
                            MockCards[indexEditCard - 1].join(" ")}
                        </div>
                        <div className={styles.editCardHolder}>
                          <div className={styles.editCardDate}>05/24</div>
                          <div className={styles.editCardLogoImage}>
                            <Image
                              src={icons.CARD_LOGO}
                              height={50}
                              width={32}
                              alt="logoCARD"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    </Modal>
                    {MockCards.map((item, index) => (
                      <div
                        onClick={() => {
                          setIndexEditCard(index + 1);
                        }}
                        className={styles.cards}
                      >
                        <div className={styles.iconEditCard}>
                          <Image
                            src={icons.CARD_ICON_EDIT}
                            height={40}
                            width={40}
                            alt="editIcon"
                          ></Image>
                        </div>
                        <div className={styles.cardLogo}>SCENT</div>
                        <div className={styles.cardNumber}>
                          {item.join(" ")}
                        </div>
                        <div className={styles.cardHolder}>
                          <div className={styles.cardDate}>05/24</div>
                          <div className={styles.cardLogoImage}>
                            <Image
                              src={icons.CARD_LOGO}
                              height={50}
                              width={32}
                              alt="logoCARD"
                            ></Image>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className={styles.addCards}>
                      <div className={styles.addIconAddCard}>
                        <Image
                          src={icons.CARD_ICON_ADD}
                          height={40}
                          width={40}
                          alt="editIcon"
                        ></Image>
                      </div>
                      <div className={styles.addCardLogo}>SCENT</div>
                      <div className={styles.addCardNumber}>
                        0000 0000 0000 0000
                      </div>
                      <div className={styles.addCardHolder}>
                        <div className={styles.addCardDate}>05/24</div>
                        <div className={styles.addCardLogoImage}>
                          <Image
                            src={icons.CARD_LOGO_VISA}
                            height={50}
                            width={32}
                            alt="logoCARD"
                          ></Image>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
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
                  <div className={styles.gmail}>
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
              <div className={styles.morePersonalDataWrapper}>
                <div>
                  <label htmlFor="Телеграм">Телеграм</label>
                  <input id="Телеграм" type="text" value={"petro20"} />
                </div>
                <div>
                  <label htmlFor="Вайбер">Вайбер</label>
                  <input id="Вайбер" type="text" value={"mostavchuk20"} />
                </div>
                <div>
                  <label htmlFor="Ватсап">Ватсап</label>
                  <input id="Ватсап" type="text" value={"petrom20"} />
                </div>
              </div>
            </div>
            <div>
              <h2>Гаманець</h2>
            </div>
            <div>
              <div className={styles.wallet}>
                <div className={styles.walletWrapper}>
                  <label htmlFor="Номер карти">Номер карти</label>
                  <input
                    id="Номер карти"
                    type="text"
                    value={"5375 4141 0000 0000"}
                  />
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
