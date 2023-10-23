import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "@/constants/routes";
import styles from "./profileMenu.module.scss";
import classNames from "classnames";
const ProfileMenuList = [
  {
    id: 1,
    name: "Моя вітрина",
    path: routes.PROFILE_MY_PRODUCT,
  },
  {
    id: 2,
    name: "Замовлення",
    path: routes.PROFILE_ORDERS,
  },
  {
    id: 3,
    name: "Список побажань",
    path: routes.PROFILE_WISH_LIST,
  },
  {
    id: 5,
    name: "Чат з користувачем",
    path: routes.PROFILE_CHAT_WITH_USER,
  },
  {
    id: 6,
    name: "Мої відгуки",
    path: routes.PROFILE_MY_REVIEWS,
  },
  {
    id: 7,
    name: "Мої блоги ",
    path: routes.PROFILE_MY_BLOGS,
  },
];
export const ProfileMenu: FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navigation}>
      <ul>
        {ProfileMenuList.map((menuItem) => {
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
  );
};
