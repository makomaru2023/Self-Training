import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700" />
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)',
            backgroundSize: '22px 22px'
          }}
        />
        <div className="container relative py-16 text-center text-white">
          <p className="uppercase tracking-widest text-xs opacity-80 mb-2">REHABILITATION VISUAL LIBRARY</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">自主トレ素材庫.jp</h1>
          <p className="text-white/90 text-lg md:text-xl mb-8">
            “ひと目で”わかる、<br className="hidden sm:block" />
            そのまま印刷・配付できるリハ図解。
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/free" className="px-6 py-3 rounded-2xl bg-white text-primary-700 hover:bg-slate-100 transition">
              無料素材を見る
            </Link>
            <Link href="/license" className="px-6 py-3 rounded-2xl bg-primary-700/40 border border-white/30 hover:bg-primary-700/60 transition">
              配布ルールを確認
            </Link>
          </div>
        </div>
      </section>

      {/* 3つの特徴（シンプル） */}
      <section className="container py-14">
        <h2 className="text-2xl font-bold text-center mb-8">選ばれる理由</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">患者配布OK</h3>
            <p className="text-gray-600 text-sm">
              ※無料版は「自主トレ素材庫.jp」の表記が必要です（CC BY 4.0）。
            </p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">説明時間を短縮</h3>
            <p className="text-gray-600 text-sm">図解で口頭補足が最小限に。</p>
          </div>
          <div className="card p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">理解度の向上</h3>
            <p className="text-gray-600 text-sm">患者さん・ご家族にも伝わりやすいレイアウト。</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/free" className="btn-primary inline-block">無料素材一覧へ</Link>
        </div>
      </section>

      {/* 部位から探す（簡易導線） */}
      <section className="bg-gray-50">
        <div className="container py-12">
          <h2 className="text-2xl font-bold text-center mb-8">部位から探す</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['上肢', '体幹', '下肢'].map((label) => (
              <a key={label} href="/free" className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="text-xs text-slate-500 mb-1">カテゴリー</div>
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-semibold text-slate-800">{label}</h3>
                  <span className="text-slate-500">一覧へ</span>
                </div>
                <div className="mt-3 text-primary-600 text-sm">無料素材をみる →</div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
