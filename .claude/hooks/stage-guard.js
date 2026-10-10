#!/usr/bin/env node
// 開発の順番（CLAUDE.md の「開発の進め方」）を守らせるためのフック。Mac・Windows 共通（Node.js で動く）。
//
//   node stage-guard.js prompt  … 受講生がメッセージを送るたびに、今の段階を Claude に伝える（UserPromptSubmit）
//   node stage-guard.js tool    … ファイルの作成・変更やコマンドの直前に、段階に合わない作業を止める（PreToolUse）
//
// 要件定義書（docs/requirements.md）ができるまでは、docs/ 以外へのファイルの作成・変更と、
// アプリの土台づくり・パッケージのインストールを止める。

const fs = require("fs");
const path = require("path");

const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const REQ = path.join(ROOT, "docs", "requirements.md");

function readStdin() {
  try {
    return JSON.parse(fs.readFileSync(0, "utf8") || "{}");
  } catch (e) {
    return {};
  }
}

// 下書きの目印。requirements-definition Skill が、受講生の OK が出るまで要件定義書の先頭に入れておく
const DRAFT_MARK = "下書き：受講生の確認待ち";

function requirementsDraft() {
  try {
    return fs.readFileSync(REQ, "utf8").includes(DRAFT_MARK);
  } catch (e) {
    return false;
  }
}

// 要件定義書ができているか（ひな形をコピーしただけ・空のファイル・下書きのままは「まだ」とみなす）
function requirementsReady() {
  try {
    const s = fs.readFileSync(REQ, "utf8");
    if (s.includes(DRAFT_MARK)) return false;
    const m = s.match(/##\s*必須機能\s*\n([\s\S]*?)(\n##\s|$)/);
    return !!m && m[1].replace(/[（(][^）)]*[）)]/g, "").trim().length > 0;
  } catch (e) {
    return false;
  }
}

// プロジェクトからの相対パス（Windows の \ も / にそろえる）
function rel(p) {
  if (!p) return "";
  p = String(p).replace(/\\/g, "/");
  const abs = path.isAbsolute(p) || /^[A-Za-z]:\//.test(p) ? p : path.join(ROOT, p);
  return path.relative(ROOT, abs).split(path.sep).join("/").replace(/\\/g, "/");
}

const NEXT = "先に requirements-definition Skill を使って要件定義を行い、docs/requirements.md を作ってください。";
const mode = process.argv[2];
const input = readStdin();

if (mode === "prompt") {
  // 標準出力に書いた内容が、Claude への追加の情報として渡される
  if (!requirementsReady()) {
    console.log(
      "【今の段階：1. 要件定義】docs/requirements.md はまだできていません。" +
        "アプリの実装・画面づくり・機能追加を頼まれても、作り始めずに「先に要件定義をします」と伝え、" +
        "requirements-definition Skill を使ってください（6章の project-summary の練習や、Skill を使わないよう指示された作業は除く）。"
    );
  } else if (!fs.existsSync(path.join(ROOT, "docs", "screen-design.md"))) {
    console.log("【今の段階：2. 画面設計】docs/requirements.md はできています。次は画面設計です。");
  }
  process.exit(0);
}

if (mode === "tool") {
  if (requirementsReady()) process.exit(0);
  const tool = input.tool_name || "";
  const ti = input.tool_input || {};

  if (["Write", "Edit", "MultiEdit", "NotebookEdit"].includes(tool)) {
    const r = rel(ti.file_path || ti.notebook_path);
    if (r.startsWith("docs/")) process.exit(0); // 要件定義書・練習用ファイルなど docs/ の中はよい
    // 終了コード 2 で止める。標準エラーに書いた内容が Claude に伝わる
    console.error(`今は要件定義の段階なので、${r || "このファイル"} は作成・変更できません。${NEXT}`);
    process.exit(2);
  }

  if (tool === "Bash") {
    const cmd = String(ti.command || "");
    if (/create-next-app|\bnpm\s+(i|install|init|create)\b|\bnpx\s|\byarn\b|\bpnpm\b|\bbun\s+(add|create|init)\b/.test(cmd)) {
      console.error(`今は要件定義の段階なので、アプリの土台づくりやパッケージのインストールはできません。${NEXT}`);
      process.exit(2);
    }
  }
  process.exit(0);
}

process.exit(0);
