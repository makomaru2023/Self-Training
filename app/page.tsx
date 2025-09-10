// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">自主トレ素材庫.jp</h1>
          <p className="mt-4 text-blue-100">
            ひと目でわかる、印刷・配付できるリハ図解。
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/free" className="bg-white text-blue-700 px-5 py-3 rounded-lg font-semibold">
              無料素材を見る
            </Link>
            <Link href="/license" className="bg-blue-500 hover:bg-blue-400 px-5 py-3 rounded-lg font-semibold">
              配布ルールを確認
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
