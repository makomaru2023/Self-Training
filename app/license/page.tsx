import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ライセンス | SmartReha',
  description: 'SmartReha（スマートリハ）の無料・有料素材の利用ライセンスについて。',
}

export default function LicensePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-sm leading-7">
      <h1 className="mb-6 text-2xl font-bold">ライセンス</h1>

      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-2">無料素材（CC BY 4.0）</h2>
        <p>
          SmartRehaの無料素材は
          <strong>クリエイティブ・コモンズ・ライセンス（CC BY 4.0）</strong>
          のもとで提供されます。
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>商用利用・改変・再配布が可能です。</li>
          <li>クレジット表記が<strong>必須</strong>です。</li>
        </ul>
        <div className="bg-gray-50 border p-3 mt-3 rounded">
          <p className="text-sm">
            クレジット表記例：<br />
            「出典：SmartReha（
            <a
              href="https://self-training.pro-kinkin-sss.com"
              className="text-indigo-600 underline"
            >
              https://self-training.pro-kinkin-sss.com
            </a>
            ）」
          </p>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          CC BY 4.0 ライセンスの詳細：
          <a
            href="https://creativecommons.org/licenses/by/4.0/deed.ja"
            className="text-indigo-600 underline"
            target="_blank"
          >
            https://creativecommons.org/licenses/by/4.0/deed.ja
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">有料素材（SmartReha独自ライセンス）</h2>
        <p>
          有料素材はSmartReha独自の商用利用ライセンスで提供されます。
          <strong>買い切り制</strong>であり、購入後は制限なく利用できます。
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>商用利用可（院内資料・患者配布物・SNS・Web教材など）</li>
          <li>クレジット表記は<strong>不要</strong></li>
          <li>再配布・再販売・貸与は禁止</li>
          <li>購入者本人または所属組織内での利用に限る</li>
        </ul>
        <p className="mt-3">
          デジタル商品の性質上、購入後の返品・返金はできません。
          ただし、決済重複・データ破損などの不具合が確認された場合は、
          <a
            href="mailto:smart.rehabili@gmail.com"
            className="text-indigo-600 underline"
          >
            smart.rehabili@gmail.com
          </a>
          までご連絡ください。
        </p>
      </section>
    </main>
  )
}
