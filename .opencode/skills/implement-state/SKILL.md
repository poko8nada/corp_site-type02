---
name: implement-state
description: Use when implementing state management — local state, global state, server state, or data fetching.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Define the unit

State what state will be managed and how it flows. Confirm scope with the user before proceeding.

### Step 2 — Implement

Build one complete state unit. Define the shape, transitions, and side effects fully.

### Step 3 — Verify

- [ ] State transitions work as intended
- [ ] Edge cases handled: empty, loading, error

Fix any failures before proceeding.

### Step 4 — Show and align

Report the result. Demonstrate the state behavior to the user.
Wait for the user to understand and approve before expanding scope.

### Step 5 — Expand or stop

If the user approves, apply the same approach to the remaining scope.
If not, return to Step 2.
