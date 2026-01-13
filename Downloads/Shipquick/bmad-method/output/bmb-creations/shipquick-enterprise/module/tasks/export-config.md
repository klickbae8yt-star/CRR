---
task_id: "TSK_EXPORT_CONFIG_001"
task_name: "Export Config"
version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T21:28:00.000Z"

metadata:
  description: "Export module configuration for deployment or sharing"
  difficulty: "beginner"
  used_by: ["shipquick-master"]
---

# Export Config Task

## Purpose

Export the module configuration including agents, workflows, tasks, and schemas for deployment or sharing with other teams.

## Inputs

- Export format (yaml | json | markdown)
- Export scope (full | agents-only | workflows-only)

## Instructions

### Step 1: Determine Export Scope

Ask user:
```
What do you want to export?
1. [F] Full module configuration
2. [A] Agents only
3. [W] Workflows only
4. [S] Schemas only
```

### Step 2: Determine Format

Ask user:
```
Export format?
1. [Y] YAML (machine readable)
2. [J] JSON (API compatible)
3. [M] Markdown (human readable)
```

### Step 3: Gather Data

Based on scope, read from:
- `config/agent-manifest.csv`
- `config/workflow-manifest.csv`
- `config/task-manifest.csv`
- `config/schema-manifest.csv`

### Step 4: Generate Export

#### For YAML/JSON:
```yaml
module:
  name: shipquick-enterprise
  version: "1.0.0"
  exported: "{timestamp}"
  
agents:
  - id: AGT_SHIPQUICK_MASTER_001
    name: Shipquick Master
    path: agents/shipquick-master.md
    # ... from manifest

workflows:
  - id: WF_CREATE_AGENT_001
    name: Create Agent
    # ... from manifest
```

#### For Markdown:
```markdown
# Module Export: shipquick-enterprise

**Exported:** {timestamp}

## Agents (7)
| Name | Type | Path |
|------|------|------|
| ... |

## Workflows (7)
| Name | Steps | Agent |
|------|-------|-------|
| ... |
```

### Step 5: Save Export

Save to:
- YAML: `{output_folder}/exports/module-export-{date}.yaml`
- JSON: `{output_folder}/exports/module-export-{date}.json`
- MD: `{output_folder}/exports/module-export-{date}.md`

## Output

Export file saved with module configuration.

## Validation

- [ ] All items from scope included
- [ ] Format is valid
- [ ] File saved successfully

---

## Quick Reference

### Export Contents by Scope

| Scope | Includes |
|-------|----------|
| Full | Agents, Workflows, Tasks, Schemas, Observations |
| Agents | Agent files and manifest |
| Workflows | Workflow files, steps, and manifest |
| Schemas | Schema files and manifest |
