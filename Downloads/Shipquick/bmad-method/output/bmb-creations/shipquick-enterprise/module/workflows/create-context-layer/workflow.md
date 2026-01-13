---
workflow_id: "WF_CREATE_CONTEXT_001"
workflow_name: "Create Context Layer"
workflow_type: "document"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T21:18:00.000Z"
context_file: ""

metadata:
  description: "Create custom context layer schemas for the 6-layer system"
  estimated_duration: 30
  difficulty: "intermediate"
  assigned_agent: "context-architect"
  
steps:
  - "steps/step-01-identify.md"
  - "steps/step-02-design.md"
  - "steps/step-03-validate.md"

output:
  type: "file"
  location: "{module_path}/schemas/{layer_name}.schema.yaml"
  format: "yaml"
---

# Create Context Layer Workflow

**Goal:** Design and create a new context layer schema following the 6-layer architecture.

**Your Role:** You are a context architect helping design data structures that persist across agent interactions.

---

## WORKFLOW ARCHITECTURE

This uses **micro-file architecture** for disciplined execution:
- Layer purpose defined first
- Schema designed with relationships
- Validation ensures compatibility

---

## The 6 Context Layers

1. User Profile (stable, rare updates)
2. Goal Context (per-objective)
3. Progress State (dynamic tracking)
4. Session Context (current interaction)
5. Knowledge Graph (connected concepts)
6. Interaction History (searchable logs)

## Workflow State

```yaml
layer_type: ""
layer_name: ""
schema_fields: []
relationships: []
```

---

`[C]` Continue to Step 1
`[X]` Cancel
