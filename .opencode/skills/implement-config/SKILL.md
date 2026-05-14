---
name: implement-config
description: Use when implementing configuration — environment variables, build settings, tooling config, or deployment settings.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Define the unit

State what configuration will be changed and why. Confirm with the user before proceeding.

**Before proceeding, confirm:**

- Does this change affect other environments? (dev, staging, production)
- Are there secrets or sensitive values involved?

### Step 2 — Implement

Apply one complete configuration change. Not a partial fix — correct values, correct scope, documented if non-obvious.

### Step 3 — Verify

Create a “To-Do” list below to use the to-do tool.

- [ ] Configuration is applied correctly in the target environment
- [ ] No sensitive values are hardcoded or committed

Fix any failures before proceeding.

### Step 4 — Show and align

Report the result. Wait for the user to understand and approve before expanding scope.

### Step 5 — Expand or stop

If the user approves, apply the same approach to the remaining scope.
If not, return to Step 2.
