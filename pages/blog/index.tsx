import Nav from "../../components/nav/nav.component";
import BlogList from "../../components/blog-list/blog-list.component";
import { getMarkdownFiles } from "../../utils/blog-list.util";

export type FrontmatterType = {
  title: string;
  date: string;
  description: string;
  tags: Array<string>;
  cover_image: string;
};

export type BlogPostType = {
  slug: string;
  frontmatter: FrontmatterType;
};

export type BlogPageProps = {
  posts: Array<BlogPostType>;
};

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <>
      <Nav />
      <BlogList posts={posts}></BlogList>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getMarkdownFiles(),
    },
  };
}
