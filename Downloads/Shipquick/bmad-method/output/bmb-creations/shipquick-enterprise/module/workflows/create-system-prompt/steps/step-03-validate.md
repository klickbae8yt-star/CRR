---
step_id: "STEP_SYS_03"
step_number: 3
step_name: "Validate Prompt"
workflow_id: "WF_CREATE_SYSTEM_PROMPT_001"
dependencies: ["STEP_SYS_02"]
completion_status: "pending"
nextStepFile: null
---

# Step 3: Validate Prompt

## Objective

Test the prompt and save if effective.

## Instructions

### Part A: Quick Test

Run prompt with sample input:
- Does output match expected format?
- Is tone/style correct?
- Are constraints followed?

### Part B: Edge Case Test

Test with:
- Minimal input
- Complex input
- Unexpected input

### Part C: Review Checklist

- [ ] Role clearly defined
- [ ] Context sufficient
- [ ] Instructions specific
- [ ] Examples helpful
- [ ] Constraints clear
- [ ] Token count reasonable

### Part D: Save Prompt

If validation passes:
- Save to `{module}/prompts/{name}.md`
- Add to prompt registry (if exists)

## Outputs

- [ ] Tests passed
- [ ] Prompt saved
- [ ] Documentation complete

---

## Prompt Created! 📝

**Saved:** `{module}/prompts/{prompt_name}.md`
**Tokens:** {n}

**Next Actions:**
- Use in target context
- Monitor effectiveness
- Iterate as needed
