'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary-700">
          自主トレ素材庫.jp
        </Link>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/free" className="hover:text-primary-600">無料素材</Link>
          <Link href="/pricing" className="hover:text-primary-600">料金プラン</Link>
          <Link href="/license" className="hover:text-primary-600">ライセンス</Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="メニュー">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-2">
            <Link href="/free" className="py-1 hover:text-primary-600">無料素材</Link>
            <Link href="/pricing" className="py-1 hover:text-primary-600">料金プラン</Link>
            <Link href="/license" className="py-1 hover:text-primary-600">ライセンス</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
