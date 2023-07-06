"use client";

import { FC } from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const menuList = [
  {
    id: 1,
    name: "Men's Fragrances",
    path: "/mens-fragrances",
  },
  {
    id: 2,
    name: "Unisex",
    path: "/unisex",
  },
  {
    id: 3,
    name: "Woman",
    path: "/woman",
  },
];

export const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {menuList.map((menuItem) => {
          return (
            <li
              key={menuItem.id}
              className={classNames(styles.navigation_list_item, {
                [styles.active]: pathname === menuItem.path,
              })}
            >
              <div className={styles.navigation_list_link}>
                <Link href={menuItem.path}>{menuItem.name}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
