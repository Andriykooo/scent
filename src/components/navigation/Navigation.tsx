"use client";

import { FC } from "react";
import styles from "./navigation.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/routes";

const menuList = [
  {
    id: 1,
    name: "БРЕНДИ",
    path: routes.MENS,
  },
  {
    id: 2,
    name: "СВІТ ПАРФУМЕРІЇ",
    path: routes.FRAGRANCE_WORLD,
  },
  {
    id: 3,
    name: "БЛОГИ",
    path: routes.WOMAN,
  },
];

export const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation_list}>
        {menuList.map((menuItem) => {
          return (
            <li key={menuItem.id} className={styles.navigation_list_item}>
              <div
                className={classNames(styles.navigation_list_link, {
                  [styles.active]: pathname === menuItem.path,
                })}
              >
                <Link href={menuItem.path}>{menuItem.name}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
