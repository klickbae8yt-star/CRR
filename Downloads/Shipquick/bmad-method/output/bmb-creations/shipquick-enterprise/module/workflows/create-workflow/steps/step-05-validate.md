---
step_id: "STEP_CREATE_WF_05"
step_number: 5
step_name: "Validate Workflow"
workflow_id: "WF_CREATE_WORKFLOW_001"
dependencies: ["STEP_CREATE_WF_04"]
completion_status: "pending"
nextStepFile: null
---

# Step 5: Validate Workflow

## Objective

Run validation checks and finalize the workflow for deployment.

## Prerequisites

- [ ] workflow.md complete
- [ ] All step files created
- [ ] State management configured

## Instructions

### Part A: Structure Validation

Run validate-workflow task:
```
exec: {module}/tasks/validate-workflow.md
```

Check:
- [ ] workflow.md has all required sections
- [ ] All steps exist in /steps/ folder
- [ ] Step numbering is sequential
- [ ] nextStepFile chain is complete

### Part B: Content Validation

For each step file verify:
- [ ] Frontmatter is complete
- [ ] Objective is clear
- [ ] Prerequisites listed
- [ ] Instructions have Parts A, B minimum
- [ ] Outputs are checkable
- [ ] Validation criteria defined

### Part C: Add to Manifest

Update workflow-manifest.csv:
```csv
{workflow_id},{workflow_name},{path},{assigned_agent},{step_count},active,{description}
```

### Part D: Update Agent Menu

Change agent's menu item from:
```xml
exec="todo:workflows/{name}/"
```
To:
```xml
exec="{module}/workflows/{name}/"
```

## Outputs

- [ ] Validation passed
- [ ] Manifest updated
- [ ] Agent menu updated

## Validation

- [ ] validate-workflow task passes
- [ ] Workflow appears in manifest
- [ ] Agent can invoke workflow

---

## Workflow Complete! 🎉

**Summary:**
- Created: `{workflow_name}` workflow
- Steps: {step_count}
- Agent: {assigned_agent}
- Location: `{module}/workflows/{workflow_name}/`

**Next Actions:**
- Test workflow end-to-end
- Document any edge cases discovered
