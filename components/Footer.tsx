import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t text-sm text-gray-700">
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* 左：ブランド紹介 */}
        <div>
          <h2 className="font-semibold text-gray-900">SmartReha（スマートリハ）</h2>
          <p className="mt-1 text-gray-500">
            リハ職の現場ですぐ使える、見やすくわかりやすい自主トレ素材を。
          </p>
        </div>

        {/* 中央：サイトリンク */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-900">サイトメニュー</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/free" className="hover:underline">
                無料素材
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:underline">
                料金プラン
              </Link>
            </li>
            <li>
              <Link href="/license" className="hover:underline">
                ライセンス
              </Link>
            </li>
          </ul>
        </div>

        {/* 右：法務リンク */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-900">法的情報</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/tokushoho" className="hover:underline">
                特定商取引法に基づく表記
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                利用規約
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} SmartReha. All rights reserved.
      </div>
    </footer>
  )
}
