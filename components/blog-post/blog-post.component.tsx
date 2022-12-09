import styles from "./blog-post.module.css";
import type { BlogPostType } from "../../pages/blog/";

import Link from "next/link";

type BlogPostProp = {
  post: BlogPostType;
};
export default function BlogPost({ post }: BlogPostProp) {
  const { title, date, tags, description, cover_image } = post.frontmatter;

  return (
    <Link href={`blog/${post.slug}`}>
      <div className={styles.blog_post}>
        <img src={cover_image} alt="" className={styles.post_image} />
        <div className={styles.blog_info}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date}</div>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index}> {tag} </span>
            ))}
          </div>
          <div className={styles.description}>{description}</div>
        </div>
      </div>
    </Link>
  );
}
