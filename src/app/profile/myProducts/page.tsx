"use client";
import classNames from "classnames";
import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import { icons } from "@/constants/icons";
import React, { FC, MouseEventHandler, useEffect, useState } from "react";
import styles from "./myProducts.module.scss";
import Image from "next/image";
import { ProfileMenu } from "@/components/profileMenu/profileMenu";
import { ProductGallary } from "@/components/productGallary/ProductGallary";
import Link from "next/link";
import { routes } from "@/constants/routes";
import { Modal } from "@/components/modal/Modal";
import Autocomplete from "@/components/autoComplete/AutoComplete";
import Dropdown from "@/components/dropDown/DropDown";
import InputFileImage from "@/components/inputFileImage/InputFileImage";

const Data = [
  {
    id: 1,
    image: icons.PARFUME1_ICON,
    name: "Christian Dior Sauvage",
    price: 42,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: undefined,
    totalVolume: undefined,
    sellStatus: false,
  },
  {
    id: 2,
    image: icons.PARFUME2_ICON,
    name: "Bleu de Chanel",
    price: 50,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: 31,
    totalVolume: 250,
    remains: 20,
    sellStatus: false,
  },
  {
    id: 3,
    image: icons.PARFUME3_ICON,
    name: "Hugo Boss Selection",
    price: 29,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: 31,
    totalVolume: undefined,
    sellStatus: true,
  },
  {
    id: 4,
    image: icons.PARFUME4_ICON,
    name: "Armani CODE",
    price: 26,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: undefined,
    totalVolume: undefined,
    sellStatus: false,
  },
  {
    id: 5,
    image: icons.PARFUME5_ICON,
    name: "Versace Eros",
    price: 36,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: 25,
    totalVolume: 200,
    sellStatus: false,
  },
  {
    id: 6,
    image: icons.PARFUME2_ICON,
    name: "Bleu de Chanel",
    price: 35,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: 31,
    totalVolume: 250,
    sellStatus: false,
  },
  {
    id: 7,
    image: icons.PARFUME4_ICON,
    name: "Armani CODE",
    price: 26,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: undefined,
    totalVolume: undefined,
    sellStatus: false,
  },
  {
    id: 8,
    image: icons.PARFUME3_ICON,
    name: "Hugo Boss Selection",
    price: 35,
    rating: { stars: 5, votes: 10 },
    subTitle: "Парфумована вода",
    volume: undefined,
    totalVolume: undefined,
    sellStatus: true,
  },
];

const AddProduct: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const arr = Array.from({ length: 4 });
  const NextHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    step < 3 && setStep(step + 1);
    e.preventDefault();
  };
  const PrevHandler = () => {
    step > 0 && setStep(step - 1);
  };

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className={styles.fillterStyles}
      >
        <h2>Додати продукт</h2>
        <Image
          src={icons.ADD_ICON}
          height={18}
          width={18}
          alt="addIcon"
        ></Image>
      </div>
      <Modal
        isOpen={isOpen}
        close={() => {
          setIsOpen(false);
        }}
        position="center"
        className={styles.addProductForm}
      >
        <div className={styles.titleWrapper}>
          <div className={styles.titleText}>
            <h1>Публікація</h1>
          </div>
          <div
            onClick={() => {
              setIsOpen(false);
            }}
            className={styles.imageWrapper}
          >
            <Image
              src={icons.CROSS_ICON}
              height={18}
              width={18}
              alt="addIcon"
            ></Image>
          </div>
        </div>

        <div className={styles.stepStatus}>
          {arr.map((item, index) => (
            <div className={classNames(step === index && styles.active)} />
          ))}
        </div>
        {/* <form action="#"> */}
        {step === 0 && (
          <div className={styles.stepOne}>
            <div className={styles.autoCompleteContainer}>
              <Autocomplete />
              <Dropdown
                options={["1", "Розлив", "2", "3"]}
                label={"Тип лота"}
              />
              <Dropdown
                options={["1", "Парфумована вода", "2 ", "3"]}
                label={"Концентрація"}
              />
            </div>
          </div>
        )}
        {step === 1 && (
          <div className={styles.stepTwo}>
            <div className={styles.stepTwoContainer}>
              <input placeholder="Кількість в наявності" type="text" />
              <input placeholder="Мінімальна кількість розливу" type="text" />
              <input placeholder="Ціна за 1 мл. парфуму" type="text" />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className={styles.stepThree}>
            <div className={styles.inputFileImage}>
              <InputFileImage />
              <InputFileImage />
              <InputFileImage />
              <InputFileImage />
            </div>
            <div className={styles.infoImageLoader}>
              <p>Мінімум 2 фото</p>
            </div>
            <div className={styles.infoImageLoaderButton}>
              <button>Завантажити фото</button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className={styles.stepFour}>
            <div className={styles.additional}>
              <textarea
                placeholder="Додаткова інформація продукту"
                className={styles.textArea}
              ></textarea>
            </div>
            <div className={styles.button}>
              <button>Опублікувати</button>
            </div>
          </div>
        )}
        {/* </form> */}
        <div className={styles.controlButtons}>
          <button disabled={step === 0} onClick={PrevHandler}>
            Назад
          </button>
          <a onClick={NextHandler} href="next">
            Далі
          </a>
        </div>
      </Modal>
    </>
  );
};
export default function MyProducts() {
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
            <div className={styles.myProductsHeader}>
              <div className={styles.myProductsWrapper}>
                <h1>49 товарів</h1>
              </div>
              <AddProduct />
            </div>
            <div className={styles.productWrapper}>
              {Data &&
                Data.map((item) => (
                  <ProductGallary
                    id={item.id}
                    price={item.price}
                    name={item.name}
                    sellStatus={item.sellStatus}
                    volume={item.volume}
                    totalVolume={item.totalVolume}
                    subTitle={item.subTitle}
                    rating={item.rating}
                    image={item.image}
                    listIsFavorite={{ key1: true, key2: false }}
                    isButton={false}
                    isEdit={true}
                    deleteClickHandler={() => console.log(item.id)}
                  ></ProductGallary>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
