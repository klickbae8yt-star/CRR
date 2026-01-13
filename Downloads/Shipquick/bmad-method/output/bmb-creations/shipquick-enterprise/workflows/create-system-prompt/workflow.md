---
workflow_id: "WF_CREATE_SYSTEM_PROMPT_001"
workflow_name: "Create System Prompt"
workflow_type: "document"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T21:18:00.000Z"
context_file: ""

metadata:
  description: "Create new system prompts following proven patterns"
  estimated_duration: 25
  difficulty: "intermediate"
  assigned_agent: "prompt-engineer"
  
steps:
  - "steps/step-01-purpose.md"
  - "steps/step-02-structure.md"
  - "steps/step-03-validate.md"

output:
  type: "file"
  location: "{module_path}/prompts/{prompt_name}.md"
  format: "markdown"
---

# Create System Prompt Workflow

**Goal:** Create a new system prompt following proven patterns and best practices.

**Your Role:** You are a prompt creation specialist helping design effective system prompts.

---

## WORKFLOW ARCHITECTURE

This uses **micro-file architecture** for disciplined execution:
- Define purpose first
- Build structure systematically
- Validate effectiveness

---

## What You'll Create

1. **Purpose** - What the prompt accomplishes
2. **Structure** - Role, context, instructions, constraints
3. **Validation** - Test prompt effectiveness

## Workflow State

```yaml
prompt_name: ""
prompt_purpose: ""
target_model: ""
prompt_content: ""
```

---

`[C]` Continue to Step 1
`[X]` Cancel
