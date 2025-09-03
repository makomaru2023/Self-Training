'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Item } from '@/types';

const postureJp: Record<Item['posture'], string> = {
  supine: '仰臥位',
  prone: '腹臥位',
  side: '側臥位',
  sitting: '座位',
  standing: '立位',
  quadruped: '四つ這い',
  kneeling: '膝立ち',
};

export default function AssetCard({ item }: { item: Item }) {
  return (
    <div className="card overflow-hidden">
      {/* サムネ：4:3で統一／切らずに表示（object-contain） */}
      <a href={item.fileKey || item.previewSrc} target="_blank" rel="noopener noreferrer">
        <div className="relative w-full aspect-[4/3] bg-white">
          <Image
            src={item.previewSrc}
            alt={`${item.title} プレビュー`}
            fill
            className="object-contain"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </div>
      </a>

      {/* タイトル＆バッジのみ（シンプル） */}
      <div className="p-4">
        <div className="mb-2 flex flex-wrap items-center gap-2 text-sm">
          <span className="px-2 py-1 rounded-full bg-primary-50 text-primary-700">
            {item.category === 'upper' ? '上肢' : item.category === 'trunk' ? '体幹' : '下肢'}
          </span>
          <span className="px-2 py-1 rounded-full bg-gray-100 text-gray-700">
            {postureJp[item.posture]}
          </span>
          <span
            className={`px-2 py-1 rounded-full ${
              item.free ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'
            }`}
          >
            {item.free ? '無料' : '有料'}
          </span>
        </div>

        <h3 className="text-xl font-semibold">{item.title}</h3>

        {/* 有料だけ購入導線（テキストリンク） */}
        {!item.free && (
          <Link href="/pricing" className="text-primary-600 hover:underline text-sm">
            購入ページへ
          </Link>
        )}
      </div>
    </div>
  );
}
