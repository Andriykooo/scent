import { FC } from "react";
import styles from "./footer.module.scss";
import { Logo } from "../logo/Logo";
import { variants } from "@/constants/variants";
import Link from "next/link";

const footerList = [
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
];

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_left}>
          <Logo variant={variants.SECOND} />
          <ul className={styles.footer_list}>
            {footerList.map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.link}> {item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.footer_content_right}>
          <Logo variant={variants.SECOND} />
        </div>
      </div>
    </footer>
  );
};
