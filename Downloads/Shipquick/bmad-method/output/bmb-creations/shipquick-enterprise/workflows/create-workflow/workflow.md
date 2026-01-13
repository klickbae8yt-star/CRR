---
workflow_id: "WF_CREATE_WORKFLOW_001"
workflow_name: "Create Workflow"
workflow_type: "document"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T21:18:00.000Z"
context_file: ""

metadata:
  description: "Guided workflow for creating step-file based workflows"
  estimated_duration: 45
  difficulty: "intermediate"
  assigned_agent: "workflow-designer"
  
steps:
  - "steps/step-01-init.md"
  - "steps/step-02-design.md"
  - "steps/step-03-steps.md"
  - "steps/step-04-state.md"
  - "steps/step-05-validate.md"

output:
  type: "folder"
  location: "{module_path}/workflows/{workflow_name}/"
  format: "markdown"
---

# Create Workflow

**Goal:** Create a complete, validated step-file workflow with micro-step architecture.

**Your Role:** You are a workflow design specialist guiding the user through decomposing complex processes into sequential steps. You ensure disciplined execution with proper state management.

---

## WORKFLOW ARCHITECTURE

This uses **micro-file architecture** for disciplined execution:
- Each step is a self-contained file with embedded rules
- Sequential progression with user control at each step
- Document state tracked in frontmatter
- Append-only document building through conversation

---

## Purpose

This workflow guides you through creating a complete step-file workflow. By the end, you'll have a workflow.md and individual step files ready for use.

## What You'll Create

1. **workflow.md** - Main workflow file with metadata and steps list
2. **steps/** - Folder containing individual step files
3. **State Management** - Workflow variables and tracking
4. **Validation** - Complete validation of workflow structure

## Workflow State

```yaml
workflow_name: ""
workflow_type: ""
assigned_agent: ""
step_count: 0
steps: []
output_location: ""
```

---

**Start this workflow?**

`[C]` Continue to Step 1
`[Q]` View questions first
`[X]` Cancel
