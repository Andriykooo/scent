"use client";

import { icons } from "@/constants/icons";
import { BnnerType } from "@/types/bannerType";
import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import styles from "./banner.module.scss";

type BannerProps = {
  data: BnnerType[];
};



// export const Banner: FC<BannerProps> = ({ data }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     dots: true,
//     infinite: true,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 10000,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     className: styles.banner,
//     afterChange: setCurrentSlide,
//     appendDots: (dots: ReactNode) => {
//       return <Dots>{dots}</Dots>;
//     },
//     customPaging: (slideNumber: number) => {
//       return <Dot active={slideNumber === currentSlide} />;
//     },
//     nextArrow: <Arrow type="next" />,
//     prevArrow: <Arrow type="prev" />,
//   };

//   return (
//     <Slider {...settings}>
//       {data?.map((image) => {
//         return (
//           <div key={image.id} className={styles.banner_item_wrapper}>
//             <div className={styles.banner_item}>
//               <Image
//                 src={image.link}
//                 alt="carousel-item"
//                 className={styles.banner_image}
//                 fill
//               />
//               <h2 className={styles.banner_title}>{image.title}</h2>
//             </div>
//           </div>
//         );
//       })}
//     </Slider>
//   );
// };
