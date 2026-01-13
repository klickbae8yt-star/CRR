---
step_id: "STEP_CREATE_WF_01"
step_number: 1
step_name: "Initialize Workflow"
workflow_id: "WF_CREATE_WORKFLOW_001"
dependencies: []
completion_status: "pending"
nextStepFile: "step-02-design.md"
---

# Step 1: Initialize Workflow

## Objective

Gather basic information about the new workflow including name, purpose, and assigned agent.

## Prerequisites

- [ ] Clear understanding of what process the workflow will guide
- [ ] Decision on which agent will execute this workflow

## Instructions

### Part A: Basic Information

Ask the user for:

1. **Workflow Name:** (kebab-case, e.g., "create-security-audit")
2. **Workflow Purpose:** (1-2 sentences describing the goal)
3. **Workflow Type:** (document | interactive | action)
4. **Assigned Agent:** (which agent runs this workflow)

### Part B: Initial Validation

Verify:
- Name follows kebab-case convention
- Purpose is clear and specific
- Agent exists in agent-manifest.csv

### Part C: Create Output Structure

```
{module}/workflows/{workflow_name}/
├── workflow.md
└── steps/
    └── (step files will go here)
```

## Outputs

- [ ] Workflow name captured: `{workflow_name}`
- [ ] Purpose documented
- [ ] Type selected
- [ ] Agent assigned

## Validation

- [ ] Name is unique (not in workflow-manifest.csv)
- [ ] Purpose is specific (not generic)
- [ ] Agent has capacity for this workflow

---

**Next Step Options:**

`[C]` Continue to Step 2: Design Workflow Structure
`[R]` Review this step's outputs
`[P]` Pause and save progress
