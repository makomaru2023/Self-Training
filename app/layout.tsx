import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "自主トレ素材庫.jp",
  description: "リハ職のための自主トレ素材配布サイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
