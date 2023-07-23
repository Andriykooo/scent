import { icons } from "@/constants/icons";
import Image from "next/image";
import { FC } from "react";
import styles from "./blogs.module.scss";

type BlogType = {
  image: string;
  title: string;
  content: string;
};

type BlogsProps = {
  posts: BlogType[];
};

export const TitleBlogs: FC = () => {
  return (
    <div className={styles.Title}>
      <h1 className={styles.Name}>БЛОГИ ПРО ПАРФУМИ</h1>
      <h2 className={styles.ViewAll}>Переглянути все...</h2>
    </div>
  );
};

export const Blogs: FC<BlogsProps> = ({ posts }) => {
  return (
    <div className={styles.PostHolder}>
      {posts.map((post) => (
        <div key={post.title}>
          <Image
            src={post.image}
            height={580}
            width={840}
            alt={"BlogsImages"}
          />
          <h3 className={styles.CardTitle}>{post.title}</h3>
          <p className={styles.ContentStyle}>{post.content}</p>
          <a href="#">
            <span className={styles.ReadAll}>Читати повністю...</span>
          </a>
        </div>
      ))}
    </div>
  );
};
