import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: '自主トレ素材庫.jp',
  description: 'リハ職のための見やすい自主トレ素材配布サイト',
  openGraph: {
    title: '自主トレ素材庫.jp',
    description: 'リハ職のための見やすい自主トレ素材配布サイト',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '自主トレ素材庫.jp',
    description: 'リハ職のための見やすい自主トレ素材配布サイト',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
