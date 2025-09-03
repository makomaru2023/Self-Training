
import LicenseNote from '@/components/LicenseNote';
import Link from 'next/link';

export default function LicensePage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-6">ライセンス</h1>

      <section className="prose max-w-none mb-10">
        <h2>無料素材（CC BY 4.0）</h2>
        <p>
          無料素材は <a href="https://creativecommons.org/licenses/by/4.0/deed.ja" target="_blank">CC BY 4.0</a>{' '}
          で提供します。商用利用・改変・再配布が可能ですが、クレジット表記が必要です。
        </p>
        <LicenseNote />
      </section>

      <section className="prose max-w-none">
        <h2>有料素材（準備中）</h2>
        <p>有料プランは準備中です。リリース後はクレジット不要の商用ライセンスを予定しています。</p>
        <p>
          料金については <Link href="/pricing">料金プラン</Link> をご確認ください。
        </p>
      </section>
    </div>
  );
}
