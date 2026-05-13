import type { Plugin } from '@opencode-ai/plugin';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

export const AgentsReminderPlugin: Plugin = async ({ directory }) => {
  const agentsPath = join(directory, 'AGENTS.md');
  const hasAgentsMd = existsSync(agentsPath);

  const agentsMd = hasAgentsMd ? readFileSync(agentsPath, 'utf-8').trim() : '';

  const reminders = [
    `<important>STOP. Run the \`build-awareness\` skill now before doing anything else.</important>`,
    `<important>HALT. Before anything else, run the \`build-awareness\` skill.</important>`,
    `<important>Do NOT act yet. Run the \`build-awareness\` skill first.</important>`,
  ];

  let count = 0;

  return {
    'chat.message': async (input, output) => {
      if (!hasAgentsMd) return;

      // @ts-ignore
      const firstPart = output.parts.find((p) => p.type === 'text' && !(p as unknown).synthetic);
      if (!firstPart || firstPart.type !== 'text') return;

      const isDoubleLine = firstPart.text.startsWith('\n\n');
      const isSingleLine = firstPart.text.startsWith('\n');

      if (!isSingleLine) return;

      const reminder = reminders[count % reminders.length];
      count++;

      const text = isDoubleLine
        ? `${reminder}\n\n---\n\n# AGENTS.md\n\n${agentsMd}\n\n---`
        : `${reminder}\n\n---`;

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
