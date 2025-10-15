import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '利用規約 | SmartReha',
  description: 'SmartReha（スマートリハ）の利用規約です。',
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-sm leading-7">
      <h1 className="mb-6 text-2xl font-bold">利用規約</h1>
      <p className="mb-4">
        この利用規約（以下「本規約」）は、SmartReha（以下「当サイト」）が提供するデジタル素材等（以下「本コンテンツ」）の利用条件を定めるものです。
        利用者は、本コンテンツの購入・ダウンロード・閲覧等を行う時点で、本規約に同意したものとみなします。
      </p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">1. ライセンスおよび利用範囲</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>購入者に対し、本コンテンツの<strong>非独占的・譲渡不可</strong>の利用権を付与します。</li>
        <li>有料素材は<strong>商用利用可・クレジット不要</strong>、ただし<strong>再配布・再販売は禁止</strong>です。</li>
        <li>無料素材はCC BY 4.0ライセンスに基づき、クレジット表記を付して利用できます。</li>
      </ul>

      <h2 className="mt-8 mb-2 text-lg font-semibold">2. 禁止事項</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>本コンテンツの再配布・再販売・貸与・譲渡</li>
        <li>素材を主な価値とするテンプレート・素材パック等への組み込み</li>
        <li>違法・公序良俗に反する利用、または誤解を招く医療表現</li>
        <li>AI学習・機械学習モデルへのデータ利用</li>
        <li>当サイトまたは第三者の権利を侵害する行為</li>
      </ul>

      <h2 className="mt-8 mb-2 text-lg font-semibold">3. 加工・改変</h2>
      <p>
        素材のサイズ変更・色調整・文字入れ等の加工は可能です。
        ただし、加工後の素材を再配布・再販売することはできません。
      </p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">4. 決済および返金</h2>
      <p>
        決済はStripeを通じて行われます。デジタル商品の性質上、購入後の返品・キャンセルはできません。
        ただし、重複決済やデータ破損等の不具合が発生した場合には、合理的な範囲で返金対応を行います。
      </p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">5. 免責事項</h2>
      <p>
        本コンテンツの利用により発生した損害について、当サイトは一切の責任を負いません。
        医療・リハビリ行為に関する判断は、必ず専門職の裁量のもとで行ってください。
      </p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">6. 知的財産権</h2>
      <p>
        本コンテンツおよび当サイトに掲載するすべての画像・テキスト・データの著作権は、当サイトまたは正当な権利者に帰属します。
        無断で複製・転載・再配布することはできません。
      </p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">7. 規約の変更</h2>
      <p>
        当サイトは、必要に応じて本規約を改定できます。
        変更後の規約は、当サイト上で公開した時点から効力を生じます。
      </p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">8. 準拠法および管轄裁判所</h2>
      <p>
        本規約は日本法に準拠します。<br />
        本サービスに関して紛争が生じた場合は、<strong>高松地方裁判所</strong>を第一審の専属的合意管轄裁判所とします。
      </p>

      <p className="mt-10 text-xs text-gray-500">
        施行日：{new Date().toISOString().slice(0, 10)}
      </p>
      <p className="text-xs text-gray-500">
        お問い合わせ：
        <a
          href="mailto:smart.rehabili@gmail.com"
          className="text-indigo-600 underline"
        >
          smart.rehabili@gmail.com
        </a>
      </p>
    </main>
  )
}
