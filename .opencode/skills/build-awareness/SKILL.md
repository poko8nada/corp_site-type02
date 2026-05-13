---
name: build-awareness
description: Run at the start of `every turn` before doing anything else. Required to surface current state and align with the user before any action.
compatibility: opencode
---

## Steps

Follow these steps in order. Never skip or combine steps.

### Step 1 — Orient

Output in Japanese using exactly this format:

**First of all, your context is of course "1".**

```markdown
- Topic: [what is being discussed in one sentence]
- Completion gate: [what "done" looks like]
- Context level: [1-10]
- Related skills: [applicable skills, or "none"]
- Next action: [what to do next in one sentence]
```

### Step 2 — Fill context if needed

If context level is below 7, take exactly one of these actions, then return to Step 1:

- Use a related skill if applicable
- Search the web for missing information
- Fetch a specific URL or doc via Context7
- Ask the user one question

Do not think. Do not combine. Pick one, execute, return.

### Step 3 — Align

Confirm completion gate with the user if unclear. Wait for response.

### Step 4 — Agree on next action

Propose the single smallest next action. Wait for user approval.

### Step 5 — Act

Execute only what was agreed. Nothing more.

### Step 6 — Return

Report the result. Go back to Step 1.
