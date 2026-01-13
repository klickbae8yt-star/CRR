---
step_id: "STEP_CREATE_WF_02"
step_number: 2
step_name: "Design Workflow Structure"
workflow_id: "WF_CREATE_WORKFLOW_001"
dependencies: ["STEP_CREATE_WF_01"]
completion_status: "pending"
nextStepFile: "step-03-steps.md"
---

# Step 2: Design Workflow Structure

## Objective

Design the overall structure of the workflow including steps, state variables, and outputs.

## Prerequisites

- [ ] Step 1 completed with workflow name and purpose

## Instructions

### Part A: Identify Major Steps

Ask the user to break down the process:

1. "What are the major phases of this process?"
2. "What must be completed before moving to each phase?"
3. "What outputs does each phase produce?"

Aim for 4-7 steps total. More than 7 suggests the workflow should be split.

### Part B: Define State Variables

For each piece of information that:
- Is gathered in one step but used in another
- Needs to persist across the workflow

Create a state variable:

```yaml
# Example state variables
user_input: ""
validation_result: ""
final_output_path: ""
```

### Part C: Define Workflow Output

Specify what the workflow produces:
- Output type (file, folder, data)
- Output location
- Output format

## Outputs

- [ ] Step list defined: {step_count} steps
- [ ] State variables identified
- [ ] Output specification complete

## Validation

- [ ] Each step has clear input → output
- [ ] No circular dependencies
- [ ] State variables cover all cross-step data

---

**Next Step Options:**

`[C]` Continue to Step 3: Create Step Files
`[R]` Review workflow structure
`[P]` Pause and save progress
