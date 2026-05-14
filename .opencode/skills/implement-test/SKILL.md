---
name: implement-test
description: Use when implementing tests — unit tests, integration tests, or end-to-end tests.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Define the unit

State what will be tested and why. Focus on error paths first, then critical happy paths.
Confirm scope with the user before proceeding.

### Step 2 — Implement

Write one complete test unit. Not a placeholder — real assertions, real edge cases.

Priority:

1. Error paths — all anticipated failures must be covered
2. Critical happy path — the path that returns a result after surviving error paths
3. Everything else — only if explicitly agreed

### Step 3 — Verify

Create a “To-Do” list below to use the to-do tool.

- [ ] TypeScript: zero errors
- [ ] Lint: zero errors
- [ ] Tests pass
- [ ] Error paths are covered
- [ ] No redundant or trivial assertions

Fix any failures before proceeding.

### Step 4 — Show and align

Report the result. Wait for the user to understand and approve before expanding scope.

### Step 5 — Expand or stop

If the user approves, apply the same approach to the remaining scope.
If not, return to Step 2.
