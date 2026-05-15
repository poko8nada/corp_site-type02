---
name: implement-logic
description: Use when implementing business logic, utility functions, pure functions, or any logic that is not UI, state, API, or DB.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Define the unit

State in one sentence what logic will be implemented, its input/output shape, and edge cases. Confirm with the user before proceeding.

### Step 2 — Implement

Build one complete unit. Not a stub — correct logic, edge cases handled, no side effects unless intentional.

### Step 3 — Verify

Create a “To-Do” list below to use the to-do tool.

- [ ] Logic produces correct output for expected inputs
- [ ] Edge cases handled: null, empty, unexpected input

Fix any failures before proceeding.

### Step 4 — Show and align

Use the `question` tool:「この結果を確認してください。次に進んでよいですか？」
**This is Agreement Point 2.**

### Step 5 — Expand or stop

- Approved → `/apply-pattern`
- Changes needed → return to Step 2
- Done → return to `/build-awareness`
