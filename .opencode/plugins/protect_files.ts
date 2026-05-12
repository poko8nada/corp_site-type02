import type { Plugin } from '@opencode-ai/plugin';
import { minimatch } from 'minimatch';

const DENY_PATTERNS = [
  '.env',
  '.env.*',
  'AGENTS.md',
  '*.lock',
  'pnpm-lock*',
  '.github/**',
  'LICENSE',
  '.gitignore',
  '.gitattributes',
];

const ASK_PATTERNS = [
  'package.json',
  'tsconfig.json',
  'tsconfig.*.json',
  'opencode.json',
  'oxlint.json',
  '.oxlintrc',
  '.oxlintrc.*',
  'oxfmt.json',
  '.oxfmtrc',
  '.oxfmtrc.*',
];

function matchesAny(filePath: string, patterns: string[]): boolean {
  const normalized = filePath.replace(/^\/+/, '');
  return patterns.some((p) => minimatch(normalized, p, { matchBase: true }));
}

export const ProtectFilesPlugin: Plugin = async () => {
  return {
    'tool.execute.before': async (input, output) => {
      const tool = input.tool;

      // 対象ツールのみ
      if (!['write', 'edit', 'delete'].includes(tool)) return;

      const filePath: string = output.args?.filePath ?? output.args?.path ?? '';
      if (!filePath) return;

      if (matchesAny(filePath, DENY_PATTERNS)) {
        throw new Error(`[protect-files] "${filePath}" is protected and cannot be modified.`);
      }

      if (matchesAny(filePath, ASK_PATTERNS)) {
        // permission.askが使えないのでエラーで止めてユーザーに委ねる
        throw new Error(
          `[protect-files] "${filePath}" requires explicit user approval before modifying. Please confirm in chat.`,
        );
      }
    },
  };
};
