import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 | SmartReha',
  description: 'SmartReha（スマートリハ）の特定商取引法に基づく表記です。',
}

export default function TokushohoPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-sm leading-7">
      <h1 className="mb-6 text-2xl font-bold">特定商取引法に基づく表記</h1>

      <section className="space-y-2">
        <p><span className="font-medium">販売事業者名</span>：請求時に開示</p>
        <p><span className="font-medium">運営責任者</span>：請求時に開示</p>
        <p><span className="font-medium">所在地</span>：請求時に開示</p>
        <p>
          <span className="font-medium">連絡先</span>：
          <a href="mailto:smart.rehabili@gmail.com" className="text-indigo-600 underline">smart.rehabili@gmail.com</a>
          （氏名・住所・電話番号はご請求いただければ遅滞なく開示します）
        </p>
      </section>

      <hr className="my-6" />

      <section className="space-y-2">
        <p><span className="font-medium">屋号</span>：SmartReha（スマートリハ）</p>
        <p><span className="font-medium">URL</span>：self-training.pro-kinkin-sss.com</p>
        <p><span className="font-medium">販売価格</span>：各商品ページに税込表示</p>
        <p><span className="font-medium">商品代金以外の必要料金</span>：通信費等はお客様負担</p>
        <p><span className="font-medium">お支払い方法</span>：クレジットカード（Stripe）</p>
        <p><span className="font-medium">引渡し時期</span>：決済完了後、即時ダウンロード可</p>
        <p><span className="font-medium">返品・キャンセル</span>：デジタル商品の性質上、購入後の返品・キャンセルはできません</p>
        <p><span className="font-medium">動作環境</span>：PC／スマートフォンの最新ブラウザを推奨</p>
        <p><span className="font-medium">表現および商品に関する注意書き</span>：効果・成果を保証するものではありません</p>
      </section>
    </main>
  )
}
