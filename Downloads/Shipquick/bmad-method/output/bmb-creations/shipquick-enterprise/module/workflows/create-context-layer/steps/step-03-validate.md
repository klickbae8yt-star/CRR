---
step_id: "STEP_CTX_03"
step_number: 3
step_name: "Validate Schema"
workflow_id: "WF_CREATE_CONTEXT_001"
dependencies: ["STEP_CTX_02"]
completion_status: "pending"
nextStepFile: null
---

# Step 3: Validate Schema

## Objective

Validate schema syntax and add to manifest.

## Instructions

### Part A: Run Validation

Execute validate-context task:
```
exec: {module}/tasks/validate-context.md
```

### Part B: Update Manifest

Add to schema-manifest.csv:
```csv
{schema_id},{name},{layer},{path},active,{description}
```

### Part C: Update Agent Context

If agents need this schema, update their context requirements:
```yaml
required:
  - {layer_name}: "What they need from it"
```

## Outputs

- [ ] Validation passed
- [ ] Manifest updated
- [ ] Agent requirements updated (if needed)

---

## Schema Complete! 🧠

**Created:** `{module}/schemas/{layer_name}.schema.yaml`

**Next Actions:**
- Test with sample data
- Document usage patterns
