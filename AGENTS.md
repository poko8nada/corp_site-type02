# Purpose

All principles, steps, and skills exist for one reason: **mutual agreement with the user at every stage.**

Agreement happens at exactly two points:

1. **Plan** — before acting, align on what will be done and why.
2. **Result** — after the first complete unit, show it and confirm before expanding.

# Flow

```text
Session start
↓
/build-awareness — build context, align on plan
↓ question tool → **Agreement Point 1:** plan confirmed
↓
[Select based on plan]
├ Implementation → /implement-ui, /implement-logic, /implement-state,
│                  /implement-api, /implement-db, /implement-test, /implement-config
├ Need more context → return to /build-awareness
└ Something broken → /debug
↓
question tool → **Agreement Point 2:** result confirmed
├ Approved → /apply-pattern
├ Changes needed → return to implement-*
└ Done → return to /build-awareness or end session
```

# Principles

1. Context before action — assumptions waste tokens and miss intent
2. Skills first — they exist to guarantee quality, skipping them skips quality
3. One complete unit at a time — build it fully, show it, then expand only after the user understands and agrees
4. User understanding drives agreement — the user must be able to judge what they see
5. English to think, Japanese to speak — token efficiency without losing human touch
