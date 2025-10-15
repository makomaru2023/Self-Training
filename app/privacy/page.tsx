import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー | SmartReha',
  description: 'SmartReha（スマートリハ）のプライバシーポリシーです。',
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-sm leading-7">
      <h1 className="mb-6 text-2xl font-bold">プライバシーポリシー</h1>
      <p className="mb-4">
        SmartReha（以下「当サイト」）は、ユーザーの個人情報を適切に取り扱うため、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
      </p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">1. 取得する情報</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>お問い合わせ時にご提供いただくメールアドレス等の情報</li>
        <li>購入手続時に決済代行（Stripe）が取得する決済関連情報</li>
        <li>アクセス解析（Google Analytics 4）により取得するCookie等の利用状況情報</li>
      </ul>

      <h2 className="mt-8 mb-2 text-lg font-semibold">2. 利用目的</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>商品提供、ユーザーサポート、本人確認</li>
        <li>不正利用防止、セキュリティ確保</li>
        <li>サービス品質の改善、コンテンツの最適化（アクセス解析）</li>
        <li>法令遵守および紛争対応</li>
      </ul>

      <h2 className="mt-8 mb-2 text-lg font-semibold">3. 第三者提供・共同利用</h2>
      <p className="mb-2">当サイトは、以下の事業者を利用します。各社の規約・ポリシーに基づきデータが処理される場合があります。</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Stripe, Inc.（決済処理）</li>
        <li>Google LLC（Google Analytics 4）</li>
        <li>ホスティング／CDN等のクラウド事業者</li>
      </ul>

      <h2 className="mt-8 mb-2 text-lg font-semibold">4. Cookie等の利用</h2>
      <p>当サイトは、GA4等によりCookieを使用します。Cookieはブラウザ設定で無効化できますが、サービスの一部機能が利用できない場合があります。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">5. 個人情報の管理</h2>
      <p>取得情報は、利用目的の達成に必要な範囲で適切に管理し、不要となった情報は遅滞なく消去します。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">6. 法令等の遵守</h2>
      <p>当サイトは、個人情報保護法その他関連法令・ガイドラインを遵守します。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">7. 開示・訂正・利用停止等の請求</h2>
      <p>ご本人からの開示・訂正・削除・利用停止等のご請求には、合理的な範囲で速やかに対応します。以下の連絡先にご連絡ください。</p>
      <p className="mt-2">連絡先：<a href="mailto:smart.rehabili@gmail.com" className="text-indigo-600 underline">smart.rehabili@gmail.com</a></p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">8. 第三国移転</h2>
      <p>利用サービスの提供事業者のサーバーが海外に設置される場合があり、その際は各社のポリシーに従い適切に取り扱われます。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">9. 免責</h2>
      <p>外部リンク先での個人情報の取り扱いについて、当サイトは責任を負いません。リンク先の規約・ポリシーをご確認ください。</p>

      <h2 className="mt-8 mb-2 text-lg font-semibold">10. 改定</h2>
      <p>本ポリシーの内容は、必要に応じて改定されることがあります。重要な変更は当サイト上で告知します。</p>

      <p className="mt-10 text-xs text-gray-500">施行日：{new Date().toISOString().slice(0, 10)}</p>
    </main>
  )
}
