'use client'

import { useCallback, useState } from 'react'
import Link from 'next/link'

const planCopy = {
  basic: {
    name: 'Basic',
    price: '¥980',
    tagline: '無料40点を一気に使える基本パック',
    note: '※ Freeと同一ラインナップの“まとめ取り”版です。',
  },
  pro: {
    name: 'Pro',
    price: '¥1,980',
    tagline: 'Basicの40点＋別種60点で合計100点の実用パック',
    note: '※ Proは独自60点を含む合計100点構成（毎月の入替対象外）。',
  },
  premium: {
    name: 'Premium',
    price: '¥2,980',
    tagline: '200点＋以降の新作優先追加の最上位パック',
    note: '※ 追加方針は予告なく見直す場合があります。',
  },
}

function gaEvent(event: string, params: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', event, params)
  }
}

function PlanCard({ planKey }: { planKey: keyof typeof planCopy }) {
  const p = planCopy[planKey]
  const [agreed, setAgreed] = useState(false)

  const onCheckout = useCallback(() => {
    if (!agreed) return alert('ご購入前に利用規約とライセンスに同意してください。')
    gaEvent('checkout_start', {
      plan_id: planKey,
      plan_name: p.name,
      value: p.price.replace(/[^0-9]/g, ''),
      currency: 'JPY',
    })
    window.location.href = `/checkout?plan=${planKey}`
  }, [agreed, planKey, p.name, p.price])

  return (
    <div className="flex flex-col rounded-2xl border p-6 shadow-sm bg-white">
      <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
      <p className="text-gray-600 mb-4">{p.tagline}</p>
      <div className="text-3xl font-bold mb-4">{p.price}</div>

      <p className="text-xs text-gray-500 mb-6">{p.note}</p>

      <div className="mt-auto space-y-3">
        <div className="flex items-center text-xs text-gray-600">
          <input
            type="checkbox"
            id={`agree-${planKey}`}
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor={`agree-${planKey}`}>
            <Link href="/terms" className="text-indigo-600 underline">利用規約</Link> と{' '}
            <Link href="/license" className="text-indigo-600 underline">ライセンス</Link> に同意します
          </label>
        </div>

        <button
          onClick={onCheckout}
          className={`w-full rounded-xl px-4 py-3 text-sm font-semibold shadow-sm transition-colors ${
            agreed
              ? 'bg-indigo-600 text-white hover:bg-indigo-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={!agreed}
        >
          今すぐはじめる
        </button>
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
          ご購入の前に、利用規約とライセンス内容をご確認のうえお進みください。
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <PlanCard planKey="basic" />
        <PlanCard planKey="pro" />
        <PlanCard planKey="premium" />
      </div>
    </section>
  )
}
