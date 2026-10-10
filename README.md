# task-manager

MIRAI CAMP Day1・Day2 で使う、タスク管理Webアプリの作業用リポジトリです。
講師が用意したテンプレートから、受講生一人ひとりが自分用のリポジトリを作って使います。

## プロジェクト名

task-manager（タスク管理Webアプリ）

## 目的

やることを忘れずに管理し、終わったかどうかをひと目で確認できるWebアプリを、AI（Claude Code）と一緒に作ります。
あわせて、「考える → 設計する → 作る → 確認する → 公開する」という開発の流れを一周して体験します。

## 想定利用者

- このアプリを使う人：やることを忘れずに管理したい個人
- このリポジトリを使う人：MIRAI CAMP の受講生（プログラミング初心者を想定）

## 使用技術

| 役割 | 使うもの |
|---|---|
| 画面と処理（Frontend / Backend） | Next.js |
| 保存（Database）とログイン | Supabase |
| 公開 | Vercel |
| コードの保存・管理 | GitHub |
| AIとの開発 | Claude Code（Claude Desktop のコードタブ） |

※ 具体的なバージョンや設定は、アプリを作る章で決めます。

## フォルダの中身

| 場所 | 何のためにあるか |
|---|---|
| `README.md` | このファイル。プロジェクトの概要と始め方 |
| `CLAUDE.md` | Claude に守ってほしい前提やルール |
| `.claude/skills/` | 仕事を一定の手順で進めるための型（Skill）。1つの Skill につき1つのフォルダがあり、中の `SKILL.md` に名前・使う場面・進め方が書かれている |
| `docs/` | 要件や画面設計など、決まったことをファイルとして残す場所 |
| `docs/templates/` | 設計書のひな形 |
| `docs/skill-practice/` | 6章の Skill 練習で作るファイルの置き場所 |
| `.claude/settings.json`・`.claude/hooks/` | 開発の順番を守るための仕組み（フック）。要件定義書（`docs/requirements.md`）ができるまでは、アプリのコードを作れないようにしている |

入っている Skill：

| Skill | 使う章 | やること |
|---|---|---|
| `project-summary` | 6章（練習） | README.md と CLAUDE.md を読み、決められた見出しでプロジェクト概要を `docs/skill-practice/skill-summary.md` に作る |
| `requirements-definition` | 7章 | たたき台や質問をもとに要件定義を進め、合意した内容を `docs/requirements.md` と、図入りの見る用ページ `docs/requirements.html` に保存する |

## 始め方

1. 講師から案内されたテンプレートの URL を開き、「Use this template」→「Create a new repository」を選ぶ
2. Owner は自分の GitHub アカウント、Repository name は `task-manager`、公開範囲は **Private** を選んで作成する
3. 作成されたページが、講師のテンプレートではなく**自分のアカウント**のリポジトリであることを確認する
4. Claude Desktop のコードタブで作業フォルダを `MIRAI_CAMP_WORK` にして、自分のリポジトリの HTTPS URL を伝え、`MIRAI_CAMP_WORK` の中へ `task-manager` という名前で clone してもらう
5. コードタブの作業フォルダを、外側の `MIRAI_CAMP_WORK` から内側の `task-manager` に切り替える
6. 次のように頼んで、中身の役割を説明してもらう

   ```
   このプロジェクトにあるREADME.md、CLAUDE.md、.claude/skills、docsについて、
   それぞれ何のためにあるのか初心者向けに説明してください。
   ファイルの作成や変更はしないでください。
   ```

## 開発ルール（要約）

詳しくは `CLAUDE.md` を見てください。

- 作業の前に、何をするかを説明してから進める
- 頼まれていないファイルは変更しない
- パスワードや API キーなどの秘密情報は、リポジトリに保存しない
- インストールや設定変更は、確認してから行う
- AI が作ったものは、人間が実物を開いて確認する

## 次に行うこと

1. 6章：`project-summary` Skill で、Skill の使い方と確認のしかたを練習する
2. 7章：`requirements-definition` Skill で、タスク管理アプリの要件定義を行い、`docs/requirements.md` と `docs/requirements.html` を作る
3. 8章以降：`docs/requirements.md` をもとに、画面を設計し、アプリを作る

## 注意

- このテンプレートは開講前に内容を固定しています。講師が元のテンプレートを更新しても、自分のリポジトリへ自動では取り込まれません
- 講師から案内されたもの以外の Skill や設定を、そのまま入れないでください
