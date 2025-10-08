// Next.js 14 / App Router 用の料金表コンポーネント（Tailwind）
// - プラン名: Free / Basic / Pro / Premium（Pro/Premium型）
// - GA4: checkout_start / purchase（ダミー送信ポイント）
// - CTAは将来Stripeへ差し替え可能（現状は /checkout?plan=... に遷移）
// - デザイン: シンプル＆視認性重視。モバイル1列, md:2列, lg:4列。

'use client'

import { useCallback } from 'react'
import Link from 'next/link'

// 説明文（LPや/pricingのコピーとしても使い回せます）
export const planCopy = {
  free: {
    name: 'Free',
    price: '¥0',
    cadence: '月',
    tagline: '毎月入れ替わる厳選40点を無料で体験',
    bullets: [
      '毎月10個入替（合計40点が常時無料）',
      '透かし付きプレビュー＆配布用ファイルの見本DL',
      'クレジット表記不要（任意）',
      '商用利用ガイドは/licenseを参照',
    ],
    note: '※ 無料枠は月替わり。見逃した素材は有料プランで入手可能。',
  },
  basic: {
    name: 'Basic',
    price: '¥980',
    cadence: '月',
    tagline: '無料40点を一気に使える基本プラン',
    bullets: [
      '現在のフリー40点をすべてDL可',
      '配布用：無透かしPNG等（商用OK）',
      'ダウンロード数の制限なし',
      '今すぐ制作に使いたい方向け',
    ],
    note: '※ Freeと同一ラインナップの“まとめ取り”版です。',
  },
  pro: {
    name: 'Pro',
    price: '¥1,980',
    cadence: '月',
    tagline: '100点の常設コレクションで現場をカバー',
    bullets: [
      'すぐ使える常設100点をDL可',
      '配布用：無透かしPNG等（商用OK）',
      '利用範囲: クリニック/施設の院内資料◯',
      '更新の影響を受けない安定ストック',
    ],
    note: '※ コンテンツは100点で固定（毎月の入替対象外）。',
  },
  premium: {
    name: 'Premium',
    price: '¥2,980',
    cadence: '月',
    tagline: '200点＋毎月10点追加。素材庫が“育つ”最上位',
    bullets: [
      '200点のスタートラインナップ',
      '毎月＋10点ずつ自動追加',
      '配布用：無透かしPNG等（商用OK）',
      '最優先の新作反映＆拡張',
    ],
    note: '※ 解約まで追加分は積み上がる設計。成長を続けたい方向け。',
  },
} as const

// GA4 送信（存在しなければ安全に無視）
function gaEvent(event: string, params: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', event, params)
  }
}

// 価格表カードUI
function PlanCard({
  planKey,
  highlight = false,
}: {
  planKey: keyof typeof planCopy
  highlight?: boolean
}) {
  const p = planCopy[planKey]
  const planId = planKey

  const onCheckout = useCallback(() => {
    gaEvent('checkout_start', {
      plan_id: planId,
      plan_name: p.name,
      value: p.price.replace(/[^0-9]/g, ''),
      currency: 'JPY',
    })
  }, [planId, p.name, p.price])

  return (
    <div
      className={[
        'flex flex-col rounded-2xl border p-6 shadow-sm',
        highlight
          ? 'border-indigo-500 shadow-lg ring-1 ring-indigo-500/20'
          : 'border-gray-200',
        'bg-white',
      ].join(' ')}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold">{p.name}</h3>
        {highlight && (
          <span className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-xs font-medium text-white">
            おすすめ
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600 mb-4">{p.tagline}</p>

      <div className="mb-6 flex items-end gap-1">
        <span className="text-3xl font-bold">{p.price}</span>
        <span className="text-sm text-gray-500"> / {p.cadence}</span>
      </div>

      <ul className="mb-6 space-y-2 text-sm">
        {p.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[2px] inline-block h-4 w-4 shrink-0 rounded-full border border-gray-300"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {p.note && <p className="mb-6 text-xs text-gray-500">{p.note}</p>}

      <Link
        href={`/checkout?plan=${planId}`}
        onClick={onCheckout}
        className={[
          'inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-sm',
          highlight
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-900 text-white hover:bg-black',
        ].join(' ')}
      >
        {planKey === 'free' ? '無料で使う' : '今すぐはじめる'}
      </Link>
    </div>
  )
}

export default function PricingTable() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          プランと料金
        </h2>
        <p className="mt-3 text-gray-600">
          使い方に合わせて選べる4つのプラン。まずはFreeで試して、必要な量に合わせてアップグレード。
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <PlanCard planKey="free" />
        <PlanCard planKey="basic" />
        <PlanCard planKey="pro" />
        <PlanCard planKey="premium" highlight />
      </div>

      {/* 補助メッセージ */}
      <p className="mt-8 text-center text-xs text-gray-500">
        価格は税込み表示。利用規約・商用利用の詳細は<Link href="/license" className="text-indigo-600 underline">/license</Link>をご確認ください。
      </p>
    </section>
  )
}
