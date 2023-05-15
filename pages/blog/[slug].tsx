import Head from "next/head";
import Link from "next/link";

import Prism from "prismjs";
import fs from "fs";
import path from "path";
import { marked } from "marked";
import matter from "gray-matter";

import { Roboto } from "@next/font/google";

import styles from "./blog.module.css";
import "prismjs/themes/prism-tomorrow.min.css";

require("prismjs/plugins/normalize-whitespace/prism-normalize-whitespace");

import type { FrontmatterType } from ".";
import { useEffect } from "react";

import SEO from "../../components/seo";

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
  require("prismjs/components/prism-bash");
  require("prismjs/components/prism-jsx");

  useEffect(() => {
    Prism.plugins;
    Prism.highlightAll();
  }, []);
  return (
    <>
      <SEO
        title={title}
        description={description}
        imageSrc={cover_image}
        keywords={[]}
      />
      <Link href="/blog">
        <button className={styles.back_button}>&#10140;</button>
      </Link>
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

            <article
              className={styles.post_content}
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></article>
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
