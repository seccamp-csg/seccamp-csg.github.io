import { Metadata } from "next";
import "./index.css";
import ArticleList from "../components/ArticleLists";

export const metadata: Metadata = {
  title:
    "セキュリティキャンプで培った技術と仲間をつなぐ。 - セキュリティ・キャンプ コミュニティ支援グループ",
  description:
    "セキュリティ・キャンプ修了生の交流と支援を促進するワーキンググループです",
};

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>
            セキュリティキャンプで培った
            <br />
            技術と仲間をつなぐ。
          </h1>
          <p>
            セキュリティ・キャンプ修了生の交流と支援を促進するワーキンググループです
          </p>
          <div className="cta-row">
            <a className="btn" href="#about">
              詳しく見る
            </a>
            <a className="btn ghost" href="#events">
              イベントを見る
            </a>
          </div>
        </div>
      </section>
      <section className="article-list" id="news">
        <div>
          <h2>最新情報</h2>
          <ArticleList dirPath="posts" routingPath="/posts" />
        </div>
      </section>
    </main>
  );
}
