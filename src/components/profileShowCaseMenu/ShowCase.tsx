import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/routes";
import styles from "./showCase.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { icons } from "@/constants/icons";
const ShowCaseProfileMenuList = [
  {
    id: 1,
    name: "Новинки",
    path: routes.SHOW_CASE_NOVETLY,
  },
  {
    id: 2,
    name: "Товари зі знижкою",
    path: routes.SHOW_CASE_DISCOUNT,
  },
];
const FilterProductList = [
  {
    id: 1,
    name: "Ірис",
  },
  {
    id: 2,
    name: "Амбра",
  },
  {
    id: 3,
    name: "Ананас",
  },
  {
    id: 4,
    name: "Бергамот",
  },
  {
    id: 5,
    name: "Грейпфрут",
  },
  {
    id: 6,
    name: "Ірис",
  },
  {
    id: 7,
    name: "Амбра",
  },
  {
    id: 8,
    name: "Ананас",
  },
  {
    id: 9,
    name: "Бергамот",
  },
  {
    id: 10,
    name: "Грейпфрут",
  },
];
export const ShowCaseProfileMenu: FC = () => {
  const [collapse, setCollapse] = useState(true);
  const pathname = usePathname();
  const filterHandler = () => setCollapse(!collapse);
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationWrapper}>
        <ul>
          {ShowCaseProfileMenuList.map((menuItem) => {
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
      </div>

      <div className={styles.filter}>
        <strong onClick={filterHandler}>
          Ноти
          {collapse ? (
            <Image
              src={icons.ARROW_DOWN_ICON}
              height={18}
              width={18}
              alt="addIcon"
            ></Image>
          ) : (
            <Image
              src={icons.ARROW_UP_ICON}
              height={18}
              width={18}
              alt="addIcon"
            ></Image>
          )}
        </strong>
        <div className={styles.holder}>
          <ul>
            {(collapse ? FilterProductList.slice(0, 5) : FilterProductList).map(
              (menuItem) => {
                return (
                  <li key={menuItem.id}>
                    <a href="#">{menuItem.name}</a>
                  </li>
                );
              },
            )}
          </ul>
          <p onClick={filterHandler}>
            Переглянути всі ({FilterProductList.length})
          </p>
        </div>
      </div>
    </div>
  );
};
