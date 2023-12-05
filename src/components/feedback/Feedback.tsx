import { icons } from "@/constants/icons";
import { FC, MouseEvent, MouseEventHandler, ReactNode, useState } from "react";
import { RatingStarts } from "../ratingStars/Rating";
import styles from "./feedback.module.scss";
import Image from "next/image";
import TabOne from "../../components/tabs/TabOne";
import TabTwo from "../../components/tabs/TabTwo";
import Tabs from "../tabs/TabS";
import { Modal } from "../modal/Modal";

type FeedBackProducts = {
  id: number;
  rating: { stars: number; votes: number };
  user: { name: string; icon: string; id: number };
  data: string;
  favorite: number;
  content: string;
  saleStatus: string;
  comentsList?: {
    user: { name: string; icon: string; id: number };
    content: string;
    favorite: number;
  }[];
};

type TabsType = {
  label: string;
  index: number;
  Component: React.FC<{}>;
}[];

const tabs: TabsType = [
  {
    label: "Відгуки",
    index: 1,
    Component: TabOne,
  },
  {
    label: "Запитання",
    index: 2,
    Component: TabTwo,
  },
];
export type FeedBackProductsProps = {
  feedBackList: FeedBackProducts[];
};

export const FeedBack: FC<FeedBackProductsProps> = (feedBack) => {
  const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
  const [isOpen, setIsOpen] = useState(false);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.feedBack}>
      <h1 className={styles.titleName}>Відгуки / запитання про Dior Sauvage</h1>
      <button className={styles.button} onClick={open}>
        Залишити відгук
      </button>
      <Modal isOpen={isOpen} close={close} position="center">
        <div className={styles.content}>
          <h2 className={styles.textStyles}>
            <strong>Sauvage</strong> Christian Dior
          </h2>
          <form action="#">
            <span>Ваша оцінка</span>
            <div className={styles.ratingStars}>
              <RatingStarts size={10} />
            </div>
            <textarea className={styles.textArea} name="feedback"></textarea>
            <div className={styles.styleInsideButton}>
              <button className={styles.insideButton}>Залишити відгук</button>
            </div>
          </form>
          <Image
            onClick={close}
            className={styles.buttonClose}
            src={icons.CROSS_ICON}
            height={15}
            width={15}
            alt={"CROSS"}
          ></Image>
        </div>
      </Modal>
      <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs} />
      <div className={styles.feedBackComments}>
        {feedBack.feedBackList.map((item, index) => {
          const IsList = !item.comentsList;
          return (
            <div className={styles.feedBackStyleBox} key={index}>
              <div className={styles.feedBackStyles}>
                <div className={styles.userData}>
                  <div>
                    <Image
                      src={icons.USER_ELLIPSE}
                      height={50}
                      width={50}
                      alt={"UserImage"}
                    ></Image>

                    <div className={styles.data}>
                      <div className={styles.userName}>{item.user.name}</div>
                      <span>{item.data}</span>
                      <span>
                        <Image
                          src={icons.CHECK_ICON}
                          height={10}
                          width={10}
                          alt={"CheckIcon"}
                        ></Image>
                        {item.saleStatus}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.feedBackCommentContent}>
                  <div className={styles.comment}>
                    <div className={styles.userHolder}>
                      <RatingStarts size={10} />
                    </div>
                    <div className={styles.contentBox}>
                      <p>{item.content}</p>
                      <div
                        className={styles.answer}
                        style={
                          item.comentsList && {
                            borderBottom: "solid 1px #979797",
                          }
                        }
                      >
                        <a
                          style={
                            (IsList && {
                              borderBottom: "solid 1px #979797",
                            }) ||
                            {}
                          }
                          href="#"
                        >
                          Відповісти
                        </a>
                      </div>
                    </div>
                    <div className={styles.favoriteStyles}>
                      <Image
                        src={icons.HEART_FILL}
                        height={20}
                        width={20}
                        alt={"heart"}
                      ></Image>
                      {item.favorite}
                    </div>
                  </div>
                  <div>
                    {item.comentsList &&
                      item.comentsList.map((comment, index) => (
                        <div className={styles.expertStyles} key={index}>
                          <div className={styles.userHolder}>
                            <em>
                              <Image
                                src={comment.user.icon}
                                height={50}
                                width={50}
                                alt={"UserImage"}
                              ></Image>
                              {comment.user.name}
                            </em>
                          </div>
                          <div className={styles.contentBox}>
                            <p>{comment.content}</p>
                            <div className={styles.answer}>
                              <a href="#">Відповісти</a>
                            </div>
                          </div>

                          <div className={styles.favoriteStyles}>
                            <Image
                              src={icons.HEART_OUTLINE}
                              height={20}
                              width={20}
                              alt={"heart"}
                            ></Image>
                            {comment.favorite}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
