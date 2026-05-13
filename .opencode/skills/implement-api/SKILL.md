---
name: implement-api
description: Use when implementing API endpoints, server-side logic, or external service integrations.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Define the unit

State what endpoint or integration will be built, its input/output shape, and error cases. Confirm with the user before proceeding.

### Step 2 — Implement

Build one complete endpoint or integration. Not a stub — correct request handling, response shape, and error handling.

### Step 3 — Verify

- [ ] Response shape is correct
- [ ] Error cases are handled
- [ ] Edge cases handled: empty, null, unexpected input

Fix any failures before proceeding.

### Step 4 — Show and align

Report the result. Show the request/response to the user.
Wait for the user to understand and approve before expanding scope.

### Step 5 — Expand or stop

If the user approves, apply the same approach to the remaining scope.
If not, return to Step 2.
