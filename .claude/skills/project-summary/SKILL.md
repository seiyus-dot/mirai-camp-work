---
name: project-summary
description: README.md と CLAUDE.md を読み、決められた見出し（プロジェクト名・目的・想定利用者・使用技術・開発ルール・次に行うこと）でプロジェクト概要を docs/skill-practice/skill-summary.md に作る、練習用の Skill。プロジェクトの概要をまとめてほしいと頼まれたときに使う。
allowed-tools: Read, Write
---

# project-summary（練習用）

MIRAI CAMP 6章で、Skill の使い方と確認のしかたを練習するための Skill です。

## 目的

このプロジェクトの概要を、毎回同じ見出し・同じ形式でまとめる。

## 読むファイル

- `README.md`
- `CLAUDE.md`

この2つ以外のファイルは読まない。

## 作るファイル

- `docs/skill-practice/skill-summary.md`（1ファイルだけ）

すでにある場合は、作り直してよいか受講生に確認してから上書きする。

## 変更してはいけないもの

- 上の1ファイル以外のすべてのファイル（README.md、CLAUDE.md、docs/skill-practice/free-summary.md などを含む）
- 外部への通信や、追加のツール・パッケージのインストールは行わない

## 進め方

1. 作業の前に、読むファイル（README.md、CLAUDE.md）と作るファイル（docs/skill-practice/skill-summary.md）を受講生に説明する
2. README.md と CLAUDE.md を読む
3. 次の見出しを、この順番どおりに使って概要を書く。見出しは足さない・減らさない・名前を変えない

   ```markdown
   # プロジェクト概要

   ## プロジェクト名
   ## 目的
   ## 想定利用者
   ## 使用技術
   ## 開発ルール
   ## 次に行うこと
   ```

4. 各見出しの中身は、README.md と CLAUDE.md に書かれていることだけで書く。書かれていないことは足さない。書かれていない項目は「記載なし」と書く
5. 初心者が読んで分かる短い文にする（各見出し3〜5行程度）
6. `docs/skill-practice/skill-summary.md` に保存する
7. 作ったファイルの場所を伝え、次の4点を受講生が自分の目で確認するよう促す
   - 見出しがそろっているか
   - 必要な項目が抜けていないか
   - 元の情報（README.md・CLAUDE.md）と一致しているか
   - 指定した場所以外を変更していないか
