
# 自主トレ素材庫（最小セット）

Next.js 14 + Tailwind CSS + TypeScript で作った無料配布サイトのスターターです。  
**zip を解凍して `npm i && npm run dev` で表示**できます。

## 動作要件
- Node.js 18.17+ か 20+
- npm 9+ 推奨

## セットアップ
```bash
npm i
npm run dev
# http://localhost:3000 にアクセス
```

### よくある詰まり
- 画面が真っ白 → ターミナルにエラーが出ていないか確認 / Node のバージョンが古い
- 画像が出ない → `public/previews` と `public/files` に画像が無い
  （本スターターにはプレースホルダーを同梱済み）
- ページが404 → `npm run dev` を **プロジェクト直下** で実行しているか
- ポートが使用中 → `npm run dev -- -p 3001` などでポート変更

## ページ
- `/` トップ
- `/free` 無料素材一覧（カテゴリフィルタ・カードUI・ダミーダウンロード）
- `/pricing` 料金プラン（準備中）
- `/license` ライセンス

## 次のステップ（任意）
- GA4 設定（計測IDを `<head>` へ）
- 決済機能（Stripe）と自動メール（Resend）を追加
- 透かし自動処理スクリプト（sharp）を追加
