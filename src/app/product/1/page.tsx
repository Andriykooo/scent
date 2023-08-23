"use client";

import { BreadCrumbs } from "@/components/breadCrumbs/breadCrumbs";
import {
  FeedBack,
  FeedBackProductsProps,
} from "@/components/feedback/Feedback";
import { FeedBackPagesNumber } from "@/components/numbersPageFeedBack/NumbersPage";
import {
  PrivateOffers,
  PrivateOffersProps,
} from "@/components/privateOffers/PrivateOffers";
import { Product } from "@/components/productComponent/ProductGallary";
import { Products, SimilarAromatsTitle } from "@/components/products/Products";
import {
  RateProducts,
  RateProductsProps,
} from "@/components/rateProducts/Rate";
import {
  RecentlyViewedTitle,
  ReviewedProducts,
} from "@/components/recentlyViewed/Recently";

import { icons } from "@/constants/icons";
export default function ProductPage() {
  const Data = {
    id: 1,
    image: [icons.PARFUME1_ICON],
    name: "Christian Dior Sauvage",
    price: 6930,
    ThePremiereOfTheFragrance: 2015,
    TMcountry: "Франція",
    MadeIn: "Франція",
    Gender: "для чоловіків",
    Classification: "елітна",
    TypeOfAroma: "ароматичні, фужерні",
    TopNote: "Калабрійський бергамот",
    MiddleNote: "Ветівер, Герань, Елемі, Лаванда",
    BaseNotes: "Амброксан, Білий кедр, Лабданум",
  };

  const DataRating: RateProductsProps = {
    title: "Дай оцінку Dior Sauvage",
    ratings: [
      {
        title: "Стійкість",
        list: [
          {
            name: "дуже слабкий",
            count: 3,
            value: 3,
          },
          {
            name: "нестійкий",
            count: 3,
            value: 5,
          },
          {
            name: "середній",
            count: 3,
            value: 10,
          },
          {
            name: "стійкий",
            count: 3,
            value: 16,
          },
          {
            name: "дуже стійкий",
            count: 3,
            value: 20,
          },
        ],
      },
      {
        title: "Шлейф",
        list: [
          {
            name: "дуже слабкий",
            count: 3,
            value: 3,
          },
          {
            name: "нестійкий",
            count: 3,
            value: 5,
          },
          {
            name: "середній",
            count: 3,
            value: 10,
          },
          {
            name: "стійкий",
            count: 3,
            value: 16,
          },
          {
            name: "дуже стійкий",
            count: 3,
            value: 13,
          },
        ],
      },
      {
        title: "Ціна/Якість",
        list: [
          {
            name: "дуже слабкий",
            count: 3,
            value: 3,
          },
          {
            name: "нестійкий",
            count: 3,
            value: 5,
          },
          {
            name: "середній",
            count: 3,
            value: 10,
          },
          {
            name: "стійкий",
            count: 3,
            value: 16,
          },
          {
            name: "дуже стійкий",
            count: 3,
            value: 13,
          },
        ],
      },
    ],
  };

  const DataPrivateOffers: PrivateOffersProps = {
    title: "Пропозиції з приватних вітрин",
    productList: [
      {
        id: 1,
        rating: { stars: 5, votes: 10 },
        userName: "tizary777",
        images: [
          icons.OFFER_IMAGE1,
          icons.OFFER_IMAGE2,
          icons.OFFER_IMAGE3,
          icons.OFFER_IMAGE4,
        ],
        imagesGallary: [
          icons.OFFER_IMAGE_BIG,
          icons.PARFUME1_ICON,
          icons.PARFUME2_ICON,
          icons.PARFUME3_ICON,
        ],
        userEllipse: icons.USER_ELLIPSE,
        price: 42,
        volume: 1,
        totalVolume: 250,
        remains: 31,
      },
      {
        id: 2,
        rating: { stars: 5, votes: 10 },
        userName: "tizary777",
        images: [
          icons.OFFER_IMAGE1,
          icons.OFFER_IMAGE2,
          icons.OFFER_IMAGE3,
          icons.OFFER_IMAGE4,
        ],
        imagesGallary: [
          icons.PARFUME5_ICON,
          icons.PARFUME1_ICON,
          icons.PARFUME2_ICON,
          icons.PARFUME3_ICON,
        ],
        userEllipse: icons.USER_ELLIPSE,
        price: 42,
        volume: 1,
        totalVolume: 250,
        remains: 31,
      },
      {
        id: 3,
        rating: { stars: 5, votes: 10 },
        userName: "tizary777",
        images: [
          icons.OFFER_IMAGE1,
          icons.OFFER_IMAGE2,
          icons.OFFER_IMAGE3,
          icons.OFFER_IMAGE4,
        ],
        imagesGallary: [
          icons.PARFUME5_ICON,
          icons.PARFUME1_ICON,
          icons.PARFUME2_ICON,
          icons.PARFUME3_ICON,
        ],
        userEllipse: icons.USER_ELLIPSE,
        price: 42,
        volume: 1,
        totalVolume: 250,
        remains: 31,
      },
      {
        id: 4,
        rating: { stars: 5, votes: 10 },
        userName: "tizary777",
        images: [
          icons.OFFER_IMAGE1,
          icons.OFFER_IMAGE2,
          icons.OFFER_IMAGE3,
          icons.OFFER_IMAGE4,
        ],
        imagesGallary: [
          icons.PARFUME5_ICON,
          icons.PARFUME1_ICON,
          icons.PARFUME2_ICON,
          icons.PARFUME3_ICON,
        ],
        userEllipse: icons.USER_ELLIPSE,
        price: 42,
        volume: 1,
        totalVolume: 250,
        remains: 31,
      },
      {
        id: 5,
        rating: { stars: 5, votes: 10 },
        userName: "tizary777",
        images: [
          icons.OFFER_IMAGE1,
          icons.OFFER_IMAGE2,
          icons.OFFER_IMAGE3,
          icons.OFFER_IMAGE4,
        ],
        imagesGallary: [
          icons.PARFUME5_ICON,
          icons.PARFUME1_ICON,
          icons.PARFUME2_ICON,
          icons.PARFUME3_ICON,
        ],
        userEllipse: icons.USER_ELLIPSE,
        price: 42,
        volume: 1,
        totalVolume: 250,
        remains: 31,
      },
    ],
  };

  const DataSimilarAromats = [
    {
      id: 1,
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
      id: 2,
      image: icons.PARFUME3_ICON,
      name: "Versace Eros",
      isFavorite: false,
      price: 42,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 40,
      totalVolume: 250,
      remains: 50,
      sellStatus: false,
    },
    {
      id: 3,
      image: icons.PARFUME2_ICON,
      name: "Christian Dior Sauvage",
      isFavorite: false,
      price: 30,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 30,
      totalVolume: 350,
      remains: 60,
      sellStatus: false,
    },
    {
      id: 4,
      image: icons.PARFUME4_ICON,
      name: "Bleu de Chanel",
      isFavorite: true,
      price: 36,
      rating: { stars: 5, votes: 10 },
      subTitle: "Парфумована вода",
      volume: 25,
      totalVolume: 350,
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
      totalVolume: 250,
      remains: 50,
      sellStatus: true,
    },
  ];

  const DataFeedBackComments: FeedBackProductsProps = {
    feedBackList: [
      {
        id: 1,
        rating: { stars: 2, votes: 1 },
        user: { name: "tizary227", icon: icons.USER_ELLIPSE, id: 1 },
        data: "29 червня 2023 13:57",
        favorite: 5,
        content:
          "Це саме той крем без якого я ніяк. Вже навіть не порахую,яка це за кількістю покупка цього крему. Дуже задоволена, мені підходить.",
        saleStatus: "Покупку підтверджено",
        comentsList: [
          {
            user: { name: "Scent Експерт", icon: icons.SCENT_ICON, id: 2 },
            content:
              "Добрий день, Ольга. Дякуємо за відгук. Радимо звернути Вашу увагу на La Roche-Posay Effaclar гель-мус для очищення жирної проблемної шкіри, який зменшує недоліки та жирний блиск, зберігаючи при цьому фізіологічний рівень pH епідермісу. Бажаємо чудового настрою!",
            favorite: 10,
          },
        ],
      },
      {
        id: 2,
        rating: { stars: 2, votes: 1 },
        user: { name: "tizary577", icon: icons.USER_ELLIPSE, id: 3 },
        data: "31 червня 2023 12:40",
        favorite: 5,
        content:
          "Користуюся вже понад 5 років. Не рахувала, який тюбик. Рекомендую! Користуюся вже понад 5 років. Не рахувала, який тюбик. Рекомендую!",
        saleStatus: "Покупку підтверджено",
      },
      {
        id: 3,
        rating: { stars: 2, votes: 1 },
        user: { name: "tizary", icon: icons.USER_ELLIPSE, id: 4 },
        data: "12 червня 2023 11:57",
        favorite: 5,
        content:
          "Це саме той крем без якого я ніяк. Вже навіть не порахую,яка це за кількістю покупка цього крему. Дуже задоволена, мені підходить.",
        saleStatus: "Покупку підтверджено",
        comentsList: [
          {
            user: { name: "Scent Експерт", icon: icons.SCENT_ICON, id: 5 },
            content:
              "Добрий день, Ольга. Дякуємо за відгук. Радимо звернути Вашу увагу на La Roche-Posay Effaclar гель-мус для очищення жирної проблемної шкіри, який зменшує недоліки та жирний блиск, зберігаючи при цьому фізіологічний рівень pH епідермісу. Бажаємо чудового настрою!",
            favorite: 2,
          },
        ],
      },
      {
        id: 4,
        rating: { stars: 2, votes: 1 },
        user: { name: "tizary99", icon: icons.USER_ELLIPSE, id: 6 },
        data: "29 червня 2023 19:57",
        favorite: 1,
        content:
          "Користуюся вже понад 5 років. Не рахувала, який тюбик. Рекомендую! Користуюся вже понад 5 років. Не рахувала, який тюбик. Рекомендую!",
        saleStatus: "Покупку підтверджено",
        comentsList: [
          {
            user: { name: "Scent Експерт", icon: icons.SCENT_ICON, id: 5 },
            content:
              "Добрий день, Ольга. Дякуємо за відгук. Радимо звернути Вашу увагу на La Roche-Posay Effaclar гель-мус для очищення жирної проблемної шкіри, який зменшує недоліки та жирний блиск, зберігаючи при цьому фізіологічний рівень pH епідермісу. Бажаємо чудового настрою!",
            favorite: 2,
          },
        ],
      },
      {
        id: 5,
        rating: { stars: 2, votes: 1 },
        user: { name: "tizary999", icon: icons.USER_ELLIPSE, id: 7 },
        data: "15 червня 2023 16:57",
        favorite: 4,
        content:
          "Користуюся вже понад 5 років. Не рахувала, який тюбик. Рекомендую! Користуюся вже понад 5 років. Не рахувала, який тюбик. Рекомендую!",
        saleStatus: "Покупку підтверджено",
      },
    ],
  };
  const DataRecentlyViewed = [
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
      <BreadCrumbs breadCrumbsPass="MEN'S FRAGRANCES/CHRISTIAN DIOR/SAUVAGE" />
      <Product {...Data} />
      <RateProducts {...DataRating} />
      <PrivateOffers {...DataPrivateOffers} />
      <SimilarAromatsTitle />
      <Products products={DataSimilarAromats} isButton={false}></Products>
      <FeedBack {...DataFeedBackComments} />
      <FeedBackPagesNumber />
      <RecentlyViewedTitle />
      <ReviewedProducts reviewedProducts={DataRecentlyViewed} />
    </div>
  );
}
