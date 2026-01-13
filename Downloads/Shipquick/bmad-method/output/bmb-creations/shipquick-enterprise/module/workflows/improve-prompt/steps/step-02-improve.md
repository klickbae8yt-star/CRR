---
step_id: "STEP_IMP_02"
step_number: 2
step_name: "Apply Improvements"
workflow_id: "WF_IMPROVE_PROMPT_001"
dependencies: ["STEP_IMP_01"]
completion_status: "pending"
nextStepFile: null
---

# Step 2: Apply Improvements

## Objective

Apply targeted improvements and present before/after comparison.

## Instructions

### Part A: Apply Patterns

Based on issues found, apply:
- **Clarity fixes** - Rewrite ambiguous sections
- **Structure** - Add missing persona/examples/constraints
- **Compression** - Remove redundancy
- **Specificity** - Add concrete examples

### Part B: Show Diff

Present side-by-side:
```
BEFORE: {original section}
AFTER:  {improved section}
REASON: {why this improves it}
```

### Part C: Token Comparison

```
Original tokens: {n}
Improved tokens: {n}
Change: {+/-n} ({percent}%)
```

### Part D: User Approval

Ask: "Apply these changes? [Y/N]"

If Y: Update the prompt file

## Outputs

- [ ] Improved prompt generated
- [ ] Changes explained
- [ ] File updated (if approved)

---

## Improvement Complete! 📝

**Improvements Applied:** {count}
**Token Change:** {+/-n}

**Next Actions:**
- Test improved prompt
- Gather quality feedback
