---
name: apply-pattern
description: Use after the user has approved a complete unit. Applies the same approach to the remaining scope, one unit at a time, confirming with the user at each step.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Define remaining scope

List all remaining units that follow the same pattern as the approved unit.
Use the `question` tool to confirm the list with the user before proceeding.

### Step 2 — Apply

Implement the next unit using the same approach as the approved unit.

### Step 3 — Verify

Create a “To-Do” list below to use the to-do tool.  
Run the same checks as the original unit:

- [ ] TypeScript: zero errors
- [ ] Lint: zero errors
- [ ] Build: passes
- [ ] Result matches the approved pattern

Fix any failures before proceeding.

### Step 4 — Confirm

Use the `question` tool:「このユニットの結果を確認してください。次に進んでよいですか？」

- Approved → return to Step 2 for the next unit
- Changes needed → fix and return to Step 3
- Done → return to `/build-awareness`
