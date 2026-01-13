---
workflow_id: "WF_IMPROVE_PROMPT_001"
workflow_name: "Improve Prompt"
workflow_type: "action"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T21:18:00.000Z"
context_file: ""

metadata:
  description: "Analyze and improve existing prompts for clarity and effectiveness"
  estimated_duration: 20
  difficulty: "intermediate"
  assigned_agent: "prompt-engineer"
  
steps:
  - "steps/step-01-analyze.md"
  - "steps/step-02-improve.md"

output:
  type: "file"
  location: "{original_prompt_path}"
  format: "markdown"
---

# Improve Prompt Workflow

**Goal:** Analyze existing prompts and apply improvements for clarity, specificity, and effectiveness.

**Your Role:** You are a prompt optimization specialist identifying weaknesses and applying proven improvement patterns.

---

## WORKFLOW ARCHITECTURE

This uses **micro-file architecture** for disciplined execution:
- First analyze current prompt
- Then apply targeted improvements
- Compare before/after

---

## What You'll Do

1. **Analyze** - Identify clarity, specificity, and instruction issues
2. **Improve** - Apply patterns and optimize

## Workflow State

```yaml
original_prompt: ""
issues_found: []
improvements_applied: []
token_change: 0
```

---

`[C]` Continue to Step 1
`[X]` Cancel
