import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ご購入ありがとうございました | SmartReha',
  description: 'SmartReha（スマートリハ）の購入完了ページです。',
}

export default function ThankYouPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center text-sm leading-7">
      <h1 className="text-2xl font-bold mb-6">ご購入ありがとうございました！</h1>
      <p className="mb-6 text-gray-700">
        ご登録のメールアドレスに、購入完了通知とダウンロードリンクをお送りしました。<br />
        メールが届かない場合は、迷惑メールフォルダもご確認ください。
      </p>

      <div className="bg-gray-50 border rounded-xl p-6 mb-8 text-left">
        <h2 className="text-lg font-semibold mb-3">ご確認ください</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            ご利用にあたっては、
            <Link href="/terms" className="text-indigo-600 underline">利用規約</Link> および{' '}
            <Link href="/license" className="text-indigo-600 underline">ライセンス</Link> の内容に従ってください。
          </li>
          <li>
            ご購入に関するお問い合わせは、
            <a href="mailto:smart.rehabili@gmail.com" className="text-indigo-600 underline">
              smart.rehabili@gmail.com
            </a>{' '}
            までお願いいたします。
          </li>
          <li>
            返金ポリシー（重複決済・データ破損などの例外対応）は{' '}
            <Link href="/tokushoho" className="text-indigo-600 underline">特定商取引法ページ</Link> をご確認ください。
          </li>
        </ul>
      </div>

      <Link
        href="/free"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors"
      >
        無料素材を見に行く
      </Link>
    </main>
  )
}
