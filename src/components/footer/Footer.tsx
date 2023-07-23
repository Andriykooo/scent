"use client";

import { FC } from "react";
import styles from "./footer.module.scss";
import { Logo } from "../logo/Logo";
import { variants } from "@/constants/variants";
import { socialIcons } from "@/constants/icons";
import { Icon } from "../icon/Icon";
import Link from "next/link";
import { Copyright } from "../copyright/Copyright";

const columns = [
  {
    id: 1,
    items: [
      {
        id: 1,
        name: "About us",
        link: "/about-us",
      },
      {
        id: 2,
        name: "Terms of use",
        link: "/terms-of-use",
      },
      {
        id: 3,
        name: "Payment methods",
        link: "/payment-methods",
      },
    ],
  },
];

const socials = [
  {
    id: 1,
    name: "instagram",
    image: socialIcons.INSTAGRAM,
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    name: "telegram",
    image: socialIcons.TELEGRAM,
    link: "https://web.telegram.org/",
  },
  {
    id: 3,
    name: "viber",
    image: socialIcons.VIBER,
    link: "https://www.viber.com/",
  },
];

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_main}>
          <div className={styles.footer_copyright}>
            <Logo variant={variants.SECOND} className={styles.footer_logo} />
            <Copyright />
          </div>
          <div className={styles.footer_columns}>
            {columns.map((column) => {
              return (
                <ul key={column.id} className={styles.footer_column}>
                  {column.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <Link href={item.link}>{item.name}</Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
        <ul className={styles.footer_social}>
          {socials.map((social) => {
            return (
              <li key={social.id}>
                <a href={social.link} target="_blank">
                  <Icon
                    src={social.image}
                    alt={social.name}
                    height={28}
                    width={28}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};
