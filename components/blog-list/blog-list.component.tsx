import styles from "./blog-list.module.css";
import { useRef } from "react";

import BlogPost from "../blog-post/blog-post.component";

import type { BlogPageProps } from "../../pages/blog/";

export default function BlogList({ posts }: BlogPageProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <section className={styles.search}>
      <div className={styles.search_bar}>
        <form action="" onClick={focusInput}>
          <input ref={inputRef} type="text" placeholder="Search blog" />
        </form>
        <button>
          <img src="./graphics/search_icon.svg" alt="seach icon" />
        </button>
      </div>

      <div className={styles.blog_list}>
        {posts.map((post, index) => {
          return <BlogPost post={post} key={index} />;
        })}
      </div>
    </section>
  );
}
