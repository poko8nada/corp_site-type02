---
name: build-awareness
description: Run at the start of `every turn` before doing anything else. Required to surface current state and align with the user before any action.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Orient

Output in Japanese using exactly this format:

```markdown
- Topic: [what is being discussed in "this session" in one sentence]
- Gate: [what "done" looks like for "this session"]
- Context level: [1-10]
- Related skills: [applicable skills, or "none"]
- Current focus: [What I'm currently facing or working on "right now"]
- Next action: [what to do next in one sentence]
```

> Note: **At the start of a session, the context is, of course, “1”.**

### Step 2 — Fill context if needed

If context level is below 7, take exactly one of these actions, then return to Step 1:

- Use a related skill if applicable
- Search the web for missing information
- Fetch a specific URL or doc via Context7
- Ask the user one question

Do not think. Do not combine. Pick one, execute, return.

### Step 3 — Align on Session Gate

If Session Gate is unclear, confirm it with the user. Wait for response.

### Step 4 — Agree on next action

Propose the single smallest next action. Wait for user approval.

**If the action involves implementation, select the appropriate skill:**

- UI/markup/behavior/design → `implement-ui`
- State management → `implement-state`
- API/server → `implement-api`
- Database → `implement-db`
- Something broken → `debug`

### Step 5 — Act

Execute only what was agreed in Step 4.
Stop immediately after the unit is complete. Do not expand scope. Return to Step 1.

### Step 6 — Return

Report the result in one sentence. Go back to Step 1.
