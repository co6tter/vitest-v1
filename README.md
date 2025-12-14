# vitest-v1

## Overview

Vite + TypeScript + Vitest を使用した開発環境のサンプルプロジェクト。

## Tech Stack

- **Vite** (^7.1.7) - 高速なビルドツール
- **TypeScript** (~5.9.3) - 型安全な開発
- **Vitest** (^3.2.4) - Vite ネイティブなテストフレームワーク
- **change-case** (^5.4.4) - 文字列ケース変換ライブラリ

## Setup

```bash
# 依存関係のインストール
npm install
```

## Usage

```bash
# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# テストの実行
npm test
```

## Directory Structure

```
vitest-v1/
├── src/
│   ├── main.ts          # エントリーポイント
│   ├── counter.ts       # カウンターロジック
│   ├── style.css        # スタイルシート
│   └── typescript.svg   # TypeScript アイコン
├── public/
│   └── vite.svg         # Vite アイコン
├── index.html           # HTML テンプレート
├── package.json         # プロジェクト設定
└── tsconfig.json        # TypeScript 設定
```

## License

This repository is for personal/private use only.
