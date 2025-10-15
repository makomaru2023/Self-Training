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
        この利用規約（以下「本規約」）は、SmartReha（以下「当サイト」）が提供するデジタル素材等（以下「本コンテンツ」）の利用条件を定めるものです。購入・ダウンロード・閲覧等の時点で本規約に同意したものとみなします。
      </p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">1. ライセンス</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>購入者に対し、本コンテンツの<strong>非独占的・譲渡不可</strong>の利用権を付与します。</li>
        <li><strong>商用利用可</strong>（院内資料、患者配布物、SNS・Webサイト、動画教材、顧客向け資料等）。</li>
        <li>クレジット表記は<strong>任意</strong>です。</li>
      </ul>

      <h2 className="mt-8 mb-2 text-lg font-semibold">2. 禁止事項</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>本コンテンツの<strong>再配布・再販売・譲渡・貸与</strong>（素材そのもの、または代替取得可能な形での提供）</li>
        <li>素材を主たる価値とするテンプレート／素材パック等への組み込み・配布</li>
        <li>商標・意匠等としての単独登録、または第三者の権利を侵害する利用</li>
        <li>違法・公序良俗に反する利用、誤解を招く医療表現</li>
        <li>本コンテンツを用いた機械学習モデル等の学習データへの組み込み</li>
      </ul>

      <h2 className="mt-8 mb-2 text-lg font-semibold">3. 変更・加工</h2>
      <p>必要に応じたサイズ変更、トリミング、色調整、文字入れ等の加工は可能です。ただし、加工の有無にかかわらず、前条の禁止事項に該当する利用はできません。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">4. 料金・決済</h2>
      <p>表示価格は税込です。決済はStripeを通じて行われ、決済完了後にダウンロードが可能になります。デジタル商品の性質上、購入後の返金・キャンセルはできません。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">5. 免責</h2>
      <p>本コンテンツの利用により発生したいかなる損害についても、当サイトは責任を負いません。医療行為に関わる判断は、必ず各専門職の裁量のもとで行ってください。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">6. 知的財産権</h2>
      <p>本コンテンツに関する著作権その他一切の知的財産権は当サイトまたは正当な権利者に帰属します。本規約に定める範囲を超える利用はできません。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">7. 規約の変更</h2>
      <p>当サイトは、必要に応じて本規約を改定できます。重要な変更は当サイト上で告知します。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">8. 準拠法・管轄</h2>
      <p>本規約は日本法に準拠し、当サイトとユーザー間で紛争が生じた場合は、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄とします。</p>

      <p className="mt-10 text-xs text-gray-500">施行日：{new Date().toISOString().slice(0, 10)}</p>
      <p className="text-xs text-gray-500">
        お問い合わせ：<a href="mailto:smart.rehabili@gmail.com" className="text-indigo-600 underline">smart.rehabili@gmail.com</a>
      </p>
    </main>
  )
}
