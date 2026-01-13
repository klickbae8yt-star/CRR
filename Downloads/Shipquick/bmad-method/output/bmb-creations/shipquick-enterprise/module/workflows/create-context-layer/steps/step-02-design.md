---
step_id: "STEP_CTX_02"
step_number: 2
step_name: "Design Schema"
workflow_id: "WF_CREATE_CONTEXT_001"
dependencies: ["STEP_CTX_01"]
completion_status: "pending"
nextStepFile: "step-03-validate.md"
---

# Step 2: Design Schema

## Objective

Create the YAML schema with all fields including relationships.

## Instructions

### Part A: Define Fields

For each field, specify:
- Field name (snake_case)
- Type (string, number, boolean, array, object)
- Required (true/false)
- Description

### Part B: Add Relationships

Cross-references to other layers:
```yaml
relationships:
  - field: user_id
    references: user_profile.user_profile_id
```

### Part C: Generate Schema

```yaml
# {layer_name}.schema.yaml
$schema: "https://json-schema.org/draft/2020-12/schema"
title: "{Layer Name}"
type: object
properties:
  {field_name}:
    type: {type}
    description: "{description}"
required: [{required_fields}]
```

## Outputs

- [ ] All fields defined
- [ ] Relationships mapped
- [ ] Schema YAML generated

---

`[C]` Continue to Step 3
`[P]` Pause
