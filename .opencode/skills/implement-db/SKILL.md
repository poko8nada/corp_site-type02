---
name: implement-db
description: Use when implementing database changes — schema design, migrations, or query logic.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Define the unit

State what schema change or query will be implemented. Confirm with the user before proceeding.

**Before proceeding, confirm:**

- Is this a destructive change? (dropping columns, tables, or data)
- Is a migration needed?

### Step 2 — Implement

Build one complete unit. Not a stub — correct schema, constraints, and indexes.
For destructive changes, write the rollback migration first.

### Step 3 — Verify

- [ ] Migration runs without errors
- [ ] Rollback runs without errors
- [ ] Query returns expected shape
- [ ] Edge cases handled: null, empty, constraint violations

Fix any failures before proceeding.

### Step 4 — Show and align

Report the result. Show the schema change and query output to the user.
Wait for the user to understand and approve before expanding scope.

### Step 5 — Expand or stop

If the user approves, apply the same approach to the remaining scope.
If not, return to Step 2
