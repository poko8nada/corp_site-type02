//@ts-nocheck
import type { Plugin } from '@opencode-ai/plugin';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

export const AgentsReminderPlugin: Plugin = async ({ directory }) => {
  const agentsPath = join(directory, 'AGENTS.md');
  const hasAgentsMd = existsSync(agentsPath);

  const agentsMd = hasAgentsMd ? readFileSync(agentsPath, 'utf-8').trim() : '';

  const reminders = [
    `/build-awareness
<important>STOP. Run the skill now before doing anything else. When implementing, use the appropriate skill: /implement-ui, /implement-logic, /implement-state, /implement-api, /implement-db, /implement-test, /implement-config, or /debug. No exceptions.</important>`,

    `/build-awareness
<important>HALT. Before anything else, run the skill. Never implement without running the appropriate implement-* or debug skill.</important>`,

    `/build-awareness
<important>Do NOT act yet. Run the skill first. Skipping implement-* or debug skills is not allowed.</important>`,
  ];

  let count = 0;

  return {
    'chat.message': async (input, output) => {
      if (!hasAgentsMd) return;

      const firstPart = output.parts.find((p) => p.type === 'text' && !(p as unknown).synthetic);
      if (!firstPart || firstPart.type !== 'text') return;

      const isDoubleLine = firstPart.text.startsWith('\n\n');
      const isSingleLine = firstPart.text.startsWith('\n');

      if (!isSingleLine) return;

      const reminder = reminders[count % reminders.length];
      count++;

      const text = isDoubleLine
        ? `${reminder}\n\n---\n\n# AGENTS.md\n\n${agentsMd}\n\n---\n\n`
        : `${reminder}\n\n---\n\n`;

      output.parts.unshift({
        type: 'text',
        id: crypto.randomUUID(),
        sessionID: input.sessionID,
        messageID: input.messageID ?? '',
        text,
      });
    },
  };
};
