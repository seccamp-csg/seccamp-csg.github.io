import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ArticleList from "@/src/components/ArticleLists";
import "../common/css/listpage.css";

export const metadata: Metadata = {
  title: "記事一覧 - セキュリティ・キャンプ コミュニティ支援グループ",
  description:
    "セキュリティ・キャンプ修了生の交流と支援を促進するワーキンググループです",
};

export default async function PostsPage() {
  return (
    <main>
      <section className="top-section article-list">
        <div>
          <h2>記事一覧</h2>
          <p>
            セキュリティ・キャンプコミュニティ支援グループが発信する最新情報や
            イベントレポートをお届けします。
          </p>
          <ArticleList dirPath="posts" routingPath="/posts" />
        </div>
      </section>
    </main>
  );
}
