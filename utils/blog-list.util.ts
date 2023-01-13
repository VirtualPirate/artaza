import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getMarkdownFiles() {
  const files = fs.readdirSync(path.join("blogs"));

  const ready_files = files.filter((file: string) => {
    return file[0] !== "-";
  });

  const posts = ready_files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("blogs", filename),
      "utf8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return posts;
}
