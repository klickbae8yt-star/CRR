---
step_id: "STEP_SYS_02"
step_number: 2
step_name: "Build Structure"
workflow_id: "WF_CREATE_SYSTEM_PROMPT_001"
dependencies: ["STEP_SYS_01"]
completion_status: "pending"
nextStepFile: "step-03-validate.md"
---

# Step 2: Build Structure

## Objective

Create the system prompt following proven patterns.

## Instructions

### Part A: Role Definition

```
You are a {role} specializing in {domain}.
Your expertise includes {capabilities}.
```

### Part B: Context Section

```
## Context
- The user is {who}
- They are trying to {goal}
- They expect {output format}
```

### Part C: Instructions

```
## Instructions
1. {First instruction}
2. {Second instruction}
3. {Third instruction}

## Examples
INPUT: {example input}
OUTPUT: {example output}
```

### Part D: Constraints

```
## Constraints
- DO: {positive constraint}
- DON'T: {negative constraint}
- ALWAYS: {critical behavior}
```

### Part E: Assemble Prompt

Combine all sections into complete prompt.

## Outputs

- [ ] Prompt assembled
- [ ] Token count: {n}
- [ ] All sections included

---

`[C]` Continue to Step 3
`[P]` Pause
