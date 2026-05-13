---
name: debug
description: Use when something is broken, behaving unexpectedly, or the cause is unknown. Prevents blind fixes by enforcing hypothesis-driven debugging.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Describe the problem

State in one sentence what is broken and what was expected.
Do not attempt a fix yet.

### Step 2 — Form a hypothesis

State the most likely cause in one sentence.
Confirm the hypothesis with the user before proceeding.

### Step 3 — Verify the hypothesis

Take the single smallest action to confirm or deny the hypothesis:

- Read a file
- Check a log
- Search the web
- Ask the user

Do not fix anything yet. Do not combine multiple actions.

### Step 4 — Evaluate

Did the hypothesis hold?

- Yes → proceed to Step 5
- No → return to Step 2 with updated hypothesis

### Step 5 — Fix

Apply the minimal fix that resolves the confirmed cause. Nothing more.

### Step 6 — Verify

- [ ] TypeScript: zero errors
- [ ] Lint: zero errors
- [ ] Build: passes
- [ ] The original problem is resolved
- [ ] No new issues introduced

### Step 7 — Show and align

Report the result. Wait for the user to confirm the fix before closing.
