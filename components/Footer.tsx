import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold mb-2">自主トレ素材庫.jp</h3>
          <p className="text-sm text-gray-600">リハ職の現場ですぐ使える素材を。</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">リンク</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/free" className="hover:text-primary-600">無料素材</Link></li>
            <li><Link href="/pricing" className="hover:text-primary-600">料金プラン</Link></li>
            <li><Link href="/license" className="hover:text-primary-600">ライセンス</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">法的情報</h4>
          <ul className="space-y-2 text-sm">
            <li>特定商取引法（準備中）</li>
            <li>プライバシーポリシー（準備中）</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © 2025 自主トレ素材庫.jp
      </div>
    </footer>
  );
}
