import Image from 'next/image';
import Link from 'next/link';
import itemsData from '@/data/items.json';
import type { Item } from '@/types';

export default function ViewPage({ params }: { params: { id: string } }) {
  const items = (itemsData.items as Item[]);
  const item = items.find((i) => i.id === params.id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p>指定された素材が見つかりません。</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* 上部ナビ */}
        <div className="flex items-center justify-between mb-4 text-sm opacity-80">
          <Link href="/free" className="hover:underline">← 無料素材一覧へ戻る</Link>
          <div className="space-x-4">
            <a href={item.fileKey} target="_blank" rel="noopener noreferrer" className="hover:underline">
              元ファイルを開く（右クリックで保存）
            </a>
          </div>
        </div>

        {/* 画像埋め込み（特大） */}
        <div className="bg-black rounded-lg flex items-center justify-center">
          <div className="relative w-full" style={{ height: 'calc(100vh - 180px)' }}>
            <Image
              src={item.fileKey}
              alt={`${item.title} プレビュー`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>

        {/* タイトル */}
        <div className="mt-4 flex items-center justify-between text-sm">
          <div className="opacity-90">
            <h1 className="text-lg font-semibold">{item.title}</h1>
            <p className="mt-1 text-gray-300">画像表示中 ／ クリックや右クリックで保存できます</p>
          </div>
        </div>
      </div>
    </div>
  );
}
