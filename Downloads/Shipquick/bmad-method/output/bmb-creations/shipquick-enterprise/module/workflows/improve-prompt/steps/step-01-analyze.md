---
step_id: "STEP_IMP_01"
step_number: 1
step_name: "Analyze Prompt"
workflow_id: "WF_IMPROVE_PROMPT_001"
dependencies: []
completion_status: "pending"
nextStepFile: "step-02-improve.md"
---

# Step 1: Analyze Prompt

## Objective

Identify issues and improvement opportunities in the existing prompt.

## Instructions

### Part A: Get Prompt

Ask: "Paste the prompt you want to improve, or provide the file path."

### Part B: Analyze for Issues

Check for:
- [ ] **Clarity** - Ambiguous instructions?
- [ ] **Specificity** - Vague expected outputs?
- [ ] **Structure** - Missing sections?
- [ ] **Persona** - Role clearly defined?
- [ ] **Examples** - Few-shot samples missing?
- [ ] **Constraints** - Boundaries unclear?

### Part C: Token Analysis

Count current tokens and identify:
- Redundant phrases
- Overly verbose sections
- Opportunities to compress

## Outputs

- [ ] Issues catalogued with severity
- [ ] Token count: {n}
- [ ] Improvement opportunities listed

---

`[C]` Continue to Step 2
`[P]` Pause
