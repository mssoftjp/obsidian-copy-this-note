# AGENTS.md

## 必読ドキュメント（Obsidian プラグイン開発）

このリポジトリで Obsidian プラグイン開発を行う場合、作業前に必ず `../obsidian-developer-docs/` 配下のドキュメントを読み、記載内容（方針・ガイドライン・チェック項目）を遵守してください。

特に重要：

- `../obsidian-developer-docs/en/Obsidian October plugin self-critique checklist.md`
- `../obsidian-developer-docs/en/Plugins/`

実装方針の検討・PR/リリース前のセルフレビューでは、上記チェックリストを必ず確認してください。

## Lint（ESLint）

Lint には Obsidian 公式の `eslint-plugin-obsidianmd` を使用します。

- 設定：`eslint.config.mjs`（ESLint v9+ の Flat Config）
- 実行：`npm run lint`
- 自動修正：`npm run lint:fix`

## 開発メモ（重要）

`../obsidian-developer-docs/` の方針とチェックリストに従い、特に以下を常に満たすこと。

- UI テキスト（コマンド名/メニュー/設定）は sentence case を優先する
- コマンド名にプラグイン名や ID を含めない（Obsidian が表示上付与する）
- コマンドにデフォルトのホットキーを設定しない
- モバイル対応のため、`fs`/`path`/`electron` 等の Node モジュールをトップレベルで import しない
- 追加したイベントは `registerEvent()` 等で確実にクリーンアップする
- 設定は `loadData()` / `saveData()` を使用する
