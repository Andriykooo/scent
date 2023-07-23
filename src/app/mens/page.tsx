"use client";

import { Banner } from "@/components/banner/Banner";
import { Blogs, TitleBlogs } from "@/components/blogs/Blogs";
import { PopularProductsTitle } from "@/components/popularProductsTitle/Popular";
import { Products, Title } from "@/components/products/Products";
import {
  RecentlyViewedTitle,
  ReviewedProducts,
} from "@/components/recentlyViewed/Recently";
import { icons } from "@/constants/icons";
export default function Mens() {
  const Data = [
    {
      id: 1,
      image: icons.PARFUME1_ICON,
      name: "Christian Dior Sauvage",
      isFavorite: false,
      price: 35,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 45,
      totalVolume: 300,
      remains: 60,
      sellStatus: false,
    },
    {
      id: 2,
      image: icons.PARFUME2_ICON,
      name: "Bleu de Chanel",
      isFavorite: true,
      price: 50,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 30,
      totalVolume: 400,
      remains: 20,
      sellStatus: false,
    },
    {
      id: 3,
      image: icons.PARFUME3_ICON,
      name: "Versace Eros",
      isFavorite: false,
      price: 66,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 30,
      totalVolume: 250,
      remains: 50,
      sellStatus: false,
    },
    {
      id: 4,
      image: icons.PARFUME4_ICON,
      name: "Armani CODE",
      isFavorite: false,
      price: 26,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 31,
      totalVolume: 250,
      remains: 50,
      sellStatus: false,
    },
    {
      id: 5,
      image: icons.PARFUME5_ICON,
      name: "Hugo Boss Selection",
      isFavorite: true,
      price: 44,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 31,
      totalVolume: 450,
      remains: 50,
      sellStatus: true,
    },
  ];
  const Data2 = [
    {
      id: 1,
      image: icons.PARFUME4_ICON,
      name: "Armani CODE",
      isFavorite: false,
      price: 26,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 31,
      totalVolume: 250,
      remains: 50,
      sellStatus: false,
    },
    {
      id: 2,
      image: icons.PARFUME3_ICON,
      name: "Versace Eros",
      isFavorite: false,
      price: 36,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 30,
      totalVolume: 250,
      remains: 50,
      sellStatus: false,
    },
    {
      id: 3,
      image: icons.PARFUME1_ICON,
      name: "Christian Dior Sauvage",
      isFavorite: false,
      price: 30,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 40,
      totalVolume: 350,
      remains: 60,
      sellStatus: false,
    },
    {
      id: 4,
      image: icons.PARFUME2_ICON,
      name: "Bleu de Chanel",
      isFavorite: true,
      price: 42,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 30,
      totalVolume: 350,
      remains: 50,
      sellStatus: false,
    },

    {
      id: 5,
      image: icons.PARFUME5_ICON,
      name: "Hugo Boss Selection",
      isFavorite: true,
      price: 65,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 31,
      totalVolume: 250,
      remains: 50,
      sellStatus: true,
    },
  ];
  const Data3 = [
    {
      image: icons.BLOG_IMAGE1,
      title: "Аромати свіжості та чистоти",
      content:
        "У більшості жінок любов до ванілі починається в ранньому дитинстві. Це відбувається після того, як вони побачили миску, в якій мама чи бабуся місили тісто для торта або робили крем для тортів, а можливо, разом пробували біле морозиво. У всякому разі, смак і запах ванілі відомі всім нам дуже давно.Згідно зі старовинною мексиканською легендою про народ Тотонака (13 століття), походження ванілі можна простежити в місті Папантла. Саме це місто було тим ароматом",
    },
    {
      image: icons.BLOG_IMAGE2,
      title: "Армані: у чому їх особлива цінність",
      content:
        "Аромати Armani залишаються еталоном справжньої розкоші, приваблюючи жінок чистими запахами. І хоча, наприклад, Acqua di Gioia (2010) вважається старим, він добре продається вже багато років.Жінок приваблює парфумерний стиль майстрів, які створюють есенції для бренду, враховуючи не лише модні тенденції, а й жіночі звички до нейтральних кольорів. Саме тому червоний колір був переосмислений у червоному флаконі Сі-Пассіон. А нейтральний рожевий втілився у пудровій версії Сі-Фіорі.",
    },
    {
      image: icons.BLOG_IMAGE3,
      title: "Пошук парфумерії в Інтернеті",
      content:
        "Отже, ми розглянули найпоширеніші помилки, тож давайте перейдемо до вирішення цієї проблеми. Якщо аромати можна порівняти з одягом, то і вибирати парфуми онлайн слід так само. Перше, про що варто пам'ятати - це сезонність, яка є головною підказкою при пошуку парфумів онлайн. Розподіліть свої вподобання рівномірно, враховуючи пору року.Осінньо-зимовий і зимово-весняний сезони найбільш сприятливі для використання великої кількості східних і східно-квіткових ароматів.",
    },
  ];
  const Data4 = [
    {
      image: icons.PARFUME1_ICON,
      name: "Armani CODE",
      isFavorite: false,
      price: 26,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 31,
      totalVolume: 250,
      remains: 50,
      sellStatus: false,
    },
    {
      image: icons.PARFUME3_ICON,
      name: "Versace Eros",
      isFavorite: false,
      price: 42,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 1,
      totalVolume: 250,
      remains: 50,
      sellStatus: false,
    },
    {
      image: icons.PARFUME2_ICON,
      name: "Christian Dior Sauvage",
      isFavorite: false,
      price: 30,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 1,
      totalVolume: 350,
      remains: 60,
      sellStatus: false,
    },
    {
      image: icons.PARFUME4_ICON,
      name: "Bleu de Chanel",
      isFavorite: true,
      price: 36,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 1,
      totalVolume: 350,
      remains: 50,
      sellStatus: false,
    },

    {
      image: icons.PARFUME5_ICON,
      name: "Hugo Boss Selection",
      isFavorite: true,
      price: 44,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 31,
      totalVolume: 250,
      remains: 50,
      sellStatus: true,
    },
  ];
  return (
    <div>
      <Banner />
      <Title />
      <Products products={Data} />
      <PopularProductsTitle />
      <Products products={Data2} />
      <TitleBlogs />
      <Blogs posts={Data3} />
      <RecentlyViewedTitle />
      <ReviewedProducts reviewedProducts={Data4} />
    </div>
  );
}
