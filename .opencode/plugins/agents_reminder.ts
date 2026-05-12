import type { Plugin } from '@opencode-ai/plugin';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

export const AgentsReminderPlugin: Plugin = async ({ directory }) => {
  const agentsPath = join(directory, 'AGENTS.md');
  const hasAgentsMd = existsSync(agentsPath);

  const agentsMd = hasAgentsMd ? readFileSync(agentsPath, 'utf-8').trim() : '';

  const reminders = [
    `<important>
  STOP. Before responding, output:
  **Acceptance Criteria:** [current criteria, updated if context changed]
  **Next action:** [one sentence]

  Do NOT touch any file until the user says "go ahead".
  </important>`,

    `<important>
  HALT. Has new context changed the acceptance criteria? Update it now, output it, reconfirm with the user.
  Do NOT proceed until criteria are confirmed.
  </important>`,

    `<important>
  Before acting: output current acceptance criteria and next action. If criteria shifted — say so explicitly.
  Do NOT touch any file without approval.
  </important>`,
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
