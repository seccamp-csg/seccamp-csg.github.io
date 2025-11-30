import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface ArticleListProps {
  dirPath: string;
  routingPath: string;
}

export default async function ArticleList({
  dirPath,
  routingPath,
}: ArticleListProps) {
  const postDir = `src/contents/${dirPath}/`;
  const currentDir = process.cwd();
  const files = fs.readdirSync(path.join(currentDir, postDir));
  const postFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts = await Promise.all(
    postFiles.map(async (file) => {
      const filePath = path.join(currentDir, postDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title || "Untitled",
        date: data.date ? new Date(data.date) : new Date("1970-01-01"),
        tags: data.tags || [],
        summary: data.summary || "",
      };
    })
  );

  return (
    <ul>
      {posts.map((p) => (
        <li key={p.slug}>
          <div className="article-meta">
            <time dateTime={p.date.toISOString()}>
              {p.date.toLocaleDateString()}
            </time>
            <Link href={`${routingPath}/${p.slug}`} className="article-title">
              {p.title}
            </Link>
          </div>
          <Link href={`${routingPath}/${p.slug}`} className="btn2 small">
            詳しく見る
          </Link>
        </li>
      ))}
    </ul>
  );
}
