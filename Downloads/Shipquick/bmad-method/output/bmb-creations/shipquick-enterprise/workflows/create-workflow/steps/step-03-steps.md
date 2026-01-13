---
step_id: "STEP_CREATE_WF_03"
step_number: 3
step_name: "Create Step Files"
workflow_id: "WF_CREATE_WORKFLOW_001"
dependencies: ["STEP_CREATE_WF_02"]
completion_status: "pending"
nextStepFile: "step-04-state.md"
---

# Step 3: Create Step Files

## Objective

Generate individual step files following the micro-step architecture pattern.

## Prerequisites

- [ ] Step list defined from Step 2
- [ ] State variables identified

## Instructions

### Part A: Generate Step Template

For each step, create a file with this structure:

```markdown
---
step_id: "STEP_{WF_NAME}_{NUMBER}"
step_number: {n}
step_name: "{Step Name}"
workflow_id: "{workflow_id}"
dependencies: ["{previous_step_id}"]
completion_status: "pending"
nextStepFile: "{next_step_file.md or null}"
---

# Step {n}: {Step Name}

## Objective
{What this step accomplishes}

## Prerequisites
- [ ] {What must be true before starting}

## Instructions
### Part A: {First activity}
### Part B: {Second activity}

## Outputs
- [ ] {What is produced}

## Validation
- [ ] {How to verify completion}

---
**Next Step Options:**
`[C]` Continue to Step {n+1}
`[R]` Review this step
`[P]` Pause
```

### Part B: Create All Step Files

Generate step-01 through step-{n} following naming convention:
- step-01-{name}.md
- step-02-{name}.md
- etc.

### Part C: Link Steps Together

Ensure each step's `nextStepFile` points to the correct next step.
Final step should have `nextStepFile: null`.

## Outputs

- [ ] All {step_count} step files created
- [ ] Naming convention followed
- [ ] Links verified

## Validation

- [ ] Each step file parses correctly
- [ ] nextStepFile chain is complete
- [ ] Final step has null nextStepFile

---

**Next Step Options:**

`[C]` Continue to Step 4: Configure State Management
`[R]` Review step files
`[P]` Pause
