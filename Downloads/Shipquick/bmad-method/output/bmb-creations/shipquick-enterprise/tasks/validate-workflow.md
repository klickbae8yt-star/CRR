---
task_id: "TSK_VALIDATE_WORKFLOW_001"
task_name: "Validate Workflow"
task_type: "validation"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T20:00:00.000Z"
---

# Validate Workflow Task

## Purpose

Validates a workflow structure for compliance with Shipquick step-file architecture.

## Input

```yaml
input:
  workflow_path: "path/to/workflow/"
  validation_level: "basic" | "strict" | "comprehensive"
```

## Output

```yaml
output:
  status: "pass" | "fail" | "warnings"
  errors: []
  warnings: []
  report: "validation_report.md"
```

---

## Validation Rules

### Basic Validation (Required)

| Check | Description | Severity |
|-------|-------------|----------|
| `workflow_file_exists` | workflow.md present in folder | ERROR |
| `steps_folder_exists` | /steps/ folder present | ERROR |
| `frontmatter_valid` | YAML frontmatter in workflow.md | ERROR |
| `workflow_id_present` | workflow_id defined | ERROR |
| `steps_array_present` | steps array in frontmatter | ERROR |

### Strict Validation (Recommended)

| Check | Description | Severity |
|-------|-------------|----------|
| `step_files_exist` | All referenced step files exist | ERROR |
| `step_numbering` | Steps numbered sequentially (01, 02, 03...) | WARNING |
| `step_frontmatter` | Each step has valid frontmatter | ERROR |
| `step_structure` | Each step has objective, instructions, outputs, validation | WARNING |
| `next_step_reference` | Each step references nextStepFile | WARNING |
| `final_step_null` | Last step has nextStepFile: null | WARNING |

### Comprehensive Validation (Optional)

| Check | Description | Severity |
|-------|-------------|----------|
| `dependencies_valid` | All dependencies reference existing steps | ERROR |
| `no_circular_deps` | No circular dependencies | ERROR |
| `assigned_agent_exists` | Assigned agent is valid | WARNING |
| `state_variables_used` | Declared state variables are used | INFO |
| `nav_options_present` | [C]ontinue, [R]eview, [P]ause in each step | WARNING |

---

## Usage

### Command Line

```bash
*validate_workflow path/to/workflow/
*validate_workflow path/to/workflow/ --level=strict
*validate_workflow workflows/ --all
```

### From Agent

When invoked from Shipquick Master:

```
> *validate

Which component to validate?
[1] Agent file
[2] Workflow
[3] Context schema
[4] Full module

> 2

Enter workflow folder path:
> workflows/create-agent/

Validating...
```

---

## Validation Report Format

```markdown
# Workflow Validation Report

**Workflow:** {workflow_path}
**Validated:** {timestamp}
**Level:** {validation_level}

## Status: {PASS|FAIL|WARNINGS}

### Structure
- workflow.md: {✅/❌}
- /steps/ folder: {✅/❌}
- Step count: {N}

### Step Validation
| Step | File | Frontmatter | Structure | Next Ref |
|------|------|-------------|-----------|----------|
| 01 | {✅/❌} | {✅/❌} | {✅/❌} | {✅/❌} |
| 02 | {✅/❌} | {✅/❌} | {✅/❌} | {✅/❌} |

### Errors (must fix)
- ❌ {error_description}

### Warnings (should fix)
- ⚠️ {warning_description}

### Passed Checks
- ✅ {check_name}
```

---

## Error Messages

| Error Code | Message | Resolution |
|------------|---------|------------|
| `E101` | Missing workflow.md | Create workflow.md in folder |
| `E102` | Missing /steps/ folder | Create steps/ subfolder |
| `E103` | Step file not found | Create missing step file |
| `E104` | Invalid step frontmatter | Fix YAML syntax |
| `E105` | Circular dependency | Remove or fix dependency chain |

| Warning Code | Message | Resolution |
|--------------|---------|------------|
| `W101` | Step numbering gap | Renumber steps sequentially |
| `W102` | Missing nextStepFile | Add reference to next step |
| `W103` | Missing nav options | Add [C], [R], [P] options |
| `W104` | No validation section | Add validation checklist |
