---
task_id: "TSK_VALIDATE_AGENT_001"
task_name: "Validate Agent"
task_type: "validation"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-12T09:50:00.000Z"
---

# Validate Agent Task

## Purpose

Validates an agent definition file for compliance with Shipquick agent schema and best practices.

## Input

```yaml
input:
  agent_file_path: "path/to/agent.md"
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
| `frontmatter_exists` | YAML frontmatter present | ERROR |
| `agent_id_format` | ID follows AGT_{NAME}_{SEQ} pattern | ERROR |
| `agent_name_present` | Agent name is defined | ERROR |
| `agent_type_valid` | Type is orchestrator/specialist/utility | ERROR |
| `version_format` | Version follows semantic versioning | ERROR |
| `role_description` | Role description is present | ERROR |

### Strict Validation (Recommended)

| Check | Description | Severity |
|-------|-------------|----------|
| `traits_count` | 3-5 personality traits defined | WARNING |
| `domains_count` | 3-5 expertise domains defined | WARNING |
| `context_required` | At least one required context | WARNING |
| `context_produces` | At least one produced context | WARNING |
| `activation_defined` | At least one trigger or command | WARNING |
| `menu_items_exist` | At least 3 menu items | WARNING |

### Comprehensive Validation (Optional)

| Check | Description | Severity |
|-------|-------------|----------|
| `name_uniqueness` | No other agent with same name | ERROR |
| `command_conflicts` | Commands don't conflict with others | ERROR |
| `context_availability` | Required context layers exist | WARNING |
| `workflow_references` | Referenced workflows exist | WARNING |
| `persona_coherence` | Traits align with role | INFO |

---

## Usage

### Command Line

```bash
*validate_agent path/to/agent.md
*validate_agent path/to/agent.md --level=strict
*validate_agent agents/ --all
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

> 1

Enter agent file path:
> agents/my-agent.md

Validating...
```

---

## Validation Report Format

```markdown
# Agent Validation Report

**File:** {agent_file_path}
**Validated:** {timestamp}
**Level:** {validation_level}

## Status: {PASS|FAIL|WARNINGS}

### Errors (must fix)
- ❌ {error_description}

### Warnings (should fix)
- ⚠️ {warning_description}

### Info (consider)
- ℹ️ {info_description}

### Passed Checks
- ✅ {check_name}
```

---

## Error Messages

| Error Code | Message | Resolution |
|------------|---------|------------|
| `E001` | Missing frontmatter | Add YAML frontmatter block |
| `E002` | Invalid agent_id format | Use AGT_{NAME}_{SEQ} pattern |
| `E003` | Missing agent_name | Add agent_name field |
| `E004` | Invalid agent_type | Use orchestrator/specialist/utility |
| `E005` | Invalid version format | Use semantic versioning (x.y.z) |
| `E006` | Missing role description | Add role description under Identity |

| Warning Code | Message | Resolution |
|--------------|---------|------------|
| `W001` | Few personality traits | Add 3-5 specific traits |
| `W002` | Few expertise domains | Add 3-5 domain areas |
| `W003` | No context requirements | Define what context agent needs |
| `W004` | No activation defined | Add triggers or commands |
| `W005` | Few menu items | Add at least 3 menu items |
