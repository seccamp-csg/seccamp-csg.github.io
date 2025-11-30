import { Metadata } from "next";
import "./index.css";

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
          <ul>
            <li>
              <div className="article-meta">
                <time dateTime="2024-06-15">2024年6月15日</time>
                <a href="#" className="article-title">
                  コミュニティ支援Gのウェブサイトを公開しました
                </a>
              </div>
              <a href="#" className="btn2 small">
                {" "}
                詳しく見る{" "}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
