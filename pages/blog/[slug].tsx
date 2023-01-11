import Prism from "prismjs";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

import { Roboto } from "@next/font/google";

import styles from "./blog.module.css";
import "prismjs/themes/prism-okaidia.min.css";

import type { FrontmatterType } from ".";
import { useEffect } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type PostPageProps = {
  frontmatter: FrontmatterType;
  content: string;
  slug: string;
};

export default function PostPage({
  frontmatter: { title, date, description, tags, cover_image },
  content,
  slug,
}: PostPageProps) {
  require("prismjs/components/prism-c");
  require("prismjs/components/prism-cpp");
  require("prismjs/components/prism-cmake");

  useEffect(() => {
    Prism.plugins;
    Prism.highlightAll();
  }, []);
  return (
    <>
      <main className={roboto.className}>
        <div className={styles.blog_page_wrapper}>
          <div className={styles.blog_page}>
            <div className={styles.post_info}>
              <img
                src={cover_image}
                alt="blog page cover"
                className={styles.cover_image}
              />
              <h1 className={styles.title}>{title}</h1>
              <div className={styles.date}>{date}</div>
              <div className={styles.tags}>
                {tags.map((tag, index) => (
                  <span key={index}> {tag} </span>
                ))}
              </div>
            </div>

            <div
              className={styles.post_content}
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("blogs", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}
