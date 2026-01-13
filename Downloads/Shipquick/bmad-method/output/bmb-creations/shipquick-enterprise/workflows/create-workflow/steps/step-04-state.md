---
step_id: "STEP_CREATE_WF_04"
step_number: 4
step_name: "Configure State Management"
workflow_id: "WF_CREATE_WORKFLOW_001"
dependencies: ["STEP_CREATE_WF_03"]
completion_status: "pending"
nextStepFile: "step-05-validate.md"
---

# Step 4: Configure State Management

## Objective

Add state management section to workflow.md tracking all variables across steps.

## Prerequisites

- [ ] All step files created
- [ ] State variables identified in Step 2

## Instructions

### Part A: Add State Section to workflow.md

```yaml
## Workflow State

```yaml
# State captured during workflow execution
{variable_1}: ""
{variable_2}: ""
{variable_3}: []
```
```

### Part B: Document State Updates

For each step file, add comments showing:
- Which state variables the step reads
- Which state variables the step updates

### Part C: Add Recovery Logic

Document how to resume if workflow is interrupted:
- What state is persisted
- How to detect incomplete state
- How to continue from last completed step

## Outputs

- [ ] State section added to workflow.md
- [ ] Step files annotated with state access
- [ ] Recovery logic documented

## Validation

- [ ] All state variables initialized
- [ ] Each variable has at least one writer
- [ ] No orphan variables (written but never read)

---

**Next Step Options:**

`[C]` Continue to Step 5: Validate Workflow
`[R]` Review state management
`[P]` Pause
