'use client';

import { useEffect, useMemo, useState } from 'react';
import itemsData from '@/data/items.json';
import type { Item, CategoryLabel, PostureLabel } from '@/types';
import AssetCard from '@/components/AssetCard';

const categoryLabels: CategoryLabel = {
  upper: '上肢',
  trunk: '体幹',
  lower: '下肢',
};

const postureLabels: PostureLabel = {
  supine: '仰臥位',
  prone: '腹臥位',
  side: '側臥位',
  sitting: '座位',
  standing: '立位',
  quadruped: '四つ這い',
  kneeling: '膝立ち',
};

// 1ページの件数（必要なら変更OK）
const PAGE_SIZE = 12;

export default function FreePage() {
  const [cat, setCat] = useState<Item['category'] | 'all'>('all');
  const [pos, setPos] = useState<Item['posture'] | 'all'>('all');
  const [q, setQ] = useState('');
  const [kw, setKw] = useState('');
  const [page, setPage] = useState(1);

  // キーワード軽いデバウンス
  useEffect(() => {
    const t = setTimeout(() => setKw(q.trim()), 250);
    return () => clearTimeout(t);
  }, [q]);

  // フィルタ変更時は1ページ目へ
  useEffect(() => {
    setPage(1);
  }, [cat, pos, kw]);

  const allItems = useMemo(
    () => (itemsData.items as Item[]).filter((i) => i.free),
    []
  );

  const filtered = useMemo(() => {
    const kwLower = kw.toLowerCase();
    return allItems.filter((i) => {
      const okCat = cat === 'all' ? true : i.category === cat;
      const okPos = pos === 'all' ? true : i.posture === pos;
      const okKw = kwLower === '' ? true : i.title.toLowerCase().includes(kwLower);
      return okCat && okPos && okKw;
    });
  }, [allItems, cat, pos, kw]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="container py-12">
      <div className="flex items-end justify-between gap-4 mb-4">
        <h1 className="text-3xl font-bold">無料素材一覧</h1>
        <div className="text-sm text-gray-500">全 {total} 件</div>
      </div>

      {/* 検索 */}
      <div className="mb-6">
        <label className="block text-sm text-gray-600 mb-1">キーワード検索（タイトル）</label>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="例）肩 / 座位 / スクワット など"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
      </div>

      {/* フィルタ：部位／姿勢 */}
      <div className="mb-6 grid gap-4 md:grid-cols-2">
        {/* 部位 */}
        <div>
          <div className="text-sm text-gray-500 mb-2">部位</div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCat('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                cat === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              すべて
            </button>
            {(Object.keys(categoryLabels) as Array<keyof CategoryLabel>).map((key) => (
              <button
                key={key}
                onClick={() => setCat(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  cat === key ? 'bg-primary-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {categoryLabels[key]}
              </button>
            ))}
          </div>
        </div>

        {/* 姿勢 */}
        <div>
          <div className="text-sm text-gray-500 mb-2">姿勢</div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setPos('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                pos === 'all' ? 'bg-primary-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              すべて
            </button>
            {(Object.keys(postureLabels) as Array<keyof PostureLabel>).map((key) => (
              <button
                key={key}
                onClick={() => setPos(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  pos === key ? 'bg-primary-600 text-white' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {postureLabels[key]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* === カード一覧（2列グリッド固定） === */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pageItems.length ? (
          pageItems.map((item) => <AssetCard key={item.id} item={item} />)
        ) : (
          <div className="text-gray-600">該当する素材がありません。</div>
        )}
      </div>

      {/* ページネーション */}
      <div className="mt-8 flex items-center justify-center gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded-lg ${
            page === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          前へ
        </button>
        <span className="text-sm text-gray-600">
          {page} / {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className={`px-4 py-2 rounded-lg ${
            page === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          次へ
        </button>
      </div>
    </div>
  );
}
