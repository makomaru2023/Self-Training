'use client'

import { useCallback } from 'react'
import Link from 'next/link'

const planCopy = {
  free: {
    name: 'Free',
    price: '¥0',
    unit: '',
    tagline: '毎月入れ替わる厳選40点を無料で体験',
    bullets: [
      '毎月10個入替（合計40点が常時無料）',
      '透かし付きプレビュー＆配布用ファイルの見本DL',
      'クレジット表記不要（任意）',
      '商用利用ガイドは /license を参照',
    ],
    note: '※ 無料枠は月替わり。見逃した素材は有料プランで入手可能。',
  },
  basic: {
    name: 'Basic',
    price: '¥980',
    unit: '買い切り',
    tagline: '無料40点を一気に使える基本パック',
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
    unit: '買い切り',
    tagline: 'Basicの40点＋別種60点で合計100点の実用パック',
    bullets: [
      'Basicの40点に加え、別種の60点を追加',
      '配布用：無透かしPNG等（商用OK）',
      '院内資料・指導用プリントに◎',
      '更新の影響を受けない安定ストック',
    ],
    note: '※ Proは独自60点を含む合計100点構成（毎月の入替対象外）。',
  },
  premium: {
    name: 'Premium',
    price: '¥2,980',
    unit: '買い切り',
    tagline: '200点一括＋以降の新作優先追加の最上位パック',
    bullets: [
      'スタート200点を一括DL',
      '以降の新作も優先反映（設計上の最上位）',
      '配布用：無透かしPNG等（商用OK）',
      '長期運用・一括確保に最適',
    ],
    note: '※ 追加方針は予告なく見直す場合があります。',
  },
} as const

function gaEvent(event: string, params: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', event, params)
  }
}

function PlanCard({
  planKey,
  highlight = false,
}: {
  planKey: keyof typeof planCopy
  highlight?: boolean
}) {
  const p = planCopy[planKey]
  const isFree = planKey === 'free'
  const href = isFree ? '/free' : `/checkout?plan=${planKey}`

  const onCheckout = useCallback(() => {
    if (isFree) return
    gaEvent('checkout_start', {
      plan_id: planKey,
      plan_name: p.name,
      value: p.price.replace(/[^0-9]/g, ''),
      currency: 'JPY',
      pricing_model: 'one_time',
    })
  }, [isFree, planKey, p.name, p.price])

  return (
    <div
      className={[
        'flex h-full flex-col rounded-2xl border p-6 shadow-sm bg-white',
        highlight ? 'border-indigo-500 shadow-lg ring-1 ring-indigo-500/20' : 'border-gray-200',
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

      <div className="mb-6 flex items-end gap-2">
        <span className="text-3xl font-bold">{p.price}</span>
        {p.unit && <span className="text-xs rounded-full border px-2 py-1 text-gray-700 border-gray-300">{p.unit}</span>}
      </div>

      <ul className="space-y-2 text-sm">
        {p.bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[2px] inline-block h-4 w-4 shrink-0 rounded-full border border-gray-300" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 space-y-3">
        {p.note && <p className="text-xs text-gray-500">{p.note}</p>}

        <Link
          href={href}
          onClick={isFree ? undefined : onCheckout}
          className={[
            'inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold shadow-sm',
            highlight ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-900 text-white hover:bg-black',
          ].join(' ')}
        >
          {isFree ? '無料で使う' : '今すぐはじめる'}
        </Link>
      </div>
    </div>
  )
}

export default function PricingTable() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <header className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">プランと料金</h2>
        <p className="mt-3 text-gray-600">
          使い方に合わせて選べる4つのプラン。まずはFreeで試して、必要な量に合わせてアップグレード。
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
        <PlanCard planKey="free" />
        <PlanCard planKey="basic" />
        <PlanCard planKey="pro" />
        <PlanCard planKey="premium" highlight />
      </div>

      <p className="mt-8 text-center text-xs text-gray-500">
        価格は税込み。利用規約・商用利用の詳細は
        <Link href="/license" className="text-indigo-600 underline">
          /license
        </Link>
        をご確認ください。
      </p>
    </section>
  )
}
