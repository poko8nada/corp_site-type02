import type { Plugin } from '@opencode-ai/plugin';
import * as fs from 'fs';
import * as path from 'path';

const MAX_FILE_LINES = 10;
const MAX_TREE_DEPTH = 2;

const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  '.opencode',
  'dist',
  'build',
  '.next',
  'coverage',
]);

function readFileHead(filePath: string, maxLines: number): string {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.split('\n').slice(0, maxLines).join('\n');
  } catch {
    return '';
  }
}

function buildTree(dir: string, depth: number, maxDepth: number): string {
  if (depth > maxDepth) return '';
  let result = '';
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return '';
  }
  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const indent = '  '.repeat(depth);
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result += `${indent}📁 ${entry.name}/\n`;
      result += buildTree(fullPath, depth + 1, maxDepth);
    } else {
      result += `${indent}📄 ${entry.name}\n`;
      // ファイルの中身はルート直下のみに限定
      if (depth === 0) {
        const head = readFileHead(fullPath, MAX_FILE_LINES);
        if (head) {
          result +=
            head
              .split('\n')
              .map((l) => `${indent}  | ${l}`)
              .join('\n') + '\n';
        }
      }
    }
  }
  return result;
}

async function buildContext(worktree: string, $: unknown): Promise<string> {
  const sections: string[] = [];

  try {
    // @ts-ignore
    const result = await $`gh issue list --state open --json number,title,labels --limit 10`;
    const issues = JSON.parse(result.stdout);
    if (issues.length > 0) {
      const formatted = issues
        // @ts-ignore
        .map(
          // @ts-ignore
          (i) =>
            `- #${i.number} ${i.title}` +
            // @ts-ignore
            (i.labels?.length ? ` [${i.labels.map((l) => l.name).join(', ')}]` : ''),
        )
        .join('\n');
      sections.push(`## Open GitHub Issues\n\n${formatted}`);
    }
  } catch {}

  const projectMetaPath = path.join(worktree, '.opencode', 'rules', 'project-meta.mdc');
  if (fs.existsSync(projectMetaPath)) {
    const content = fs.readFileSync(projectMetaPath, 'utf-8').trim();
    if (content) sections.push(`## Project Meta\n\n${content}`);
  }

  for (const name of ['README.md', 'readme.md', 'README.mdx']) {
    const p = path.join(worktree, name);
    if (fs.existsSync(p)) {
      // README も先頭 1000 文字に絞る
      sections.push(`## README\n\n${fs.readFileSync(p, 'utf-8').slice(0, 1000)}`);
      break;
    }
  }

  const tree = buildTree(worktree, 0, MAX_TREE_DEPTH);
  if (tree) sections.push(`## Project Structure\n\n${tree}`);

  return sections.join('\n\n---\n\n');
}

export const InjectContextPlugin: Plugin = async ({ worktree, $ }) => {
  // ② Promise ごとキャッシュする（Race Condition 修正）
  const contextCache = new Map<string, Promise<string>>();

  return {
    event: async ({ event }) => {
      if (event.type === 'session.created') {
        const info = event.properties.info;

        // ① サブエージェント（parentID あり）はスキップ
        if (info.parentID) return;

        contextCache.set(info.id, buildContext(worktree, $));
      }

      if (event.type === 'session.compacted') {
        const { sessionID } = event.properties;
        contextCache.set(sessionID, buildContext(worktree, $));
      }
    },

    'experimental.chat.system.transform': async (input, output) => {
      const { sessionID } = input;
      if (!sessionID) return;

      const ctxPromise = contextCache.get(sessionID);
      if (!ctxPromise) return;

      // ② Promise を await して確実に注入
      const ctx = await ctxPromise;
      if (!ctx) return;

      output.system.push(`# Project Context\n\n${ctx}`.trim());
    },
  };
};
