import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "セキュリティ・キャンプ コミュニティ支援グループ",
  description:
    "セキュリティ・キャンプ修了生の交流と支援を促進するワーキンググループです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="site-header">
          <div className="brand">コミュニティ支援G</div>
          <nav className="site-nav">
            <a href="index.html">ホーム</a>
            <a href="#about">私たちについて</a>
            <a href="#events">イベント</a>
            <a href="#contact">お問い合わせ</a>
          </nav>
        </header>
        {children}
        <footer>
          <p>
            &copy; 2025 セキュリティ・キャンプ協議会コミュニティ支援グループ
          </p>
        </footer>
      </body>
    </html>
  );
}
