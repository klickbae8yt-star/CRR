---
task_id: "TSK_VALIDATE_CONTEXT_001"
task_name: "Validate Context Schema"
task_type: "validation"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T20:00:00.000Z"
---

# Validate Context Schema Task

## Purpose

Validates a context layer schema for compliance with Shipquick data modeling standards.

## Input

```yaml
input:
  schema_path: "path/to/schema.yaml"
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
| `yaml_valid` | Valid YAML syntax | ERROR |
| `id_field_present` | Primary ID field exists | ERROR |
| `id_format_valid` | ID follows PREFIX_[TIMESTAMP]_[UUID] | ERROR |
| `timestamps_present` | created_timestamp, last_modified_timestamp | ERROR |
| `version_present` | version and schema_version fields | ERROR |

### Strict Validation (Recommended)

| Check | Description | Severity |
|-------|-------------|----------|
| `field_types_valid` | All fields have valid types | ERROR |
| `relationships_explicit` | ID references are explicit | WARNING |
| `field_descriptions` | Fields have descriptions | WARNING |
| `snake_case_names` | Field names use snake_case | WARNING |
| `nested_ids` | Nested objects have their own IDs | WARNING |

### Comprehensive Validation (Optional)

| Check | Description | Severity |
|-------|-------------|----------|
| `referenced_schemas_exist` | Referenced layers exist | WARNING |
| `no_orphan_references` | All references point to valid IDs | INFO |
| `access_patterns_defined` | Access patterns documented | INFO |
| `retention_policy` | Retention/archival policy defined | INFO |

---

## Valid Field Types

```yaml
field_types:
  - string
  - integer
  - decimal
  - boolean
  - timestamp  # ISO 8601
  - date       # YYYY-MM-DD
  - time       # HH:MM:SS
  - array
  - object
```

---

## Usage

### Command Line

```bash
*validate_context schemas/user-profile.schema.yaml
*validate_context schemas/user-profile.schema.yaml --level=strict
*validate_context schemas/ --all
```

### From Agent

When invoked from Context Architect:

```
> *validate_schema

Enter schema file path:
> schemas/user-profile.schema.yaml

Validating...
```

---

## Validation Report Format

```markdown
# Context Schema Validation Report

**Schema:** {schema_path}
**Layer:** {layer_name}
**Validated:** {timestamp}
**Level:** {validation_level}

## Status: {PASS|FAIL|WARNINGS}

### Core Fields
| Field | Status |
|-------|--------|
| Primary ID | {✅/❌} |
| created_timestamp | {✅/❌} |
| last_modified_timestamp | {✅/❌} |
| version | {✅/❌} |
| schema_version | {✅/❌} |

### Field Analysis
- Total fields: {N}
- With descriptions: {N}
- With valid types: {N}

### Relationships
- References to: {layers}
- Referenced by: {layers}

### Errors (must fix)
- ❌ {error_description}

### Warnings (should fix)
- ⚠️ {warning_description}
```

---

## Error Messages

| Error Code | Message | Resolution |
|------------|---------|------------|
| `E201` | Invalid YAML syntax | Fix YAML syntax errors |
| `E202` | Missing primary ID | Add {layer}_id field |
| `E203` | Invalid ID format | Use PREFIX_[TIMESTAMP]_[UUID] |
| `E204` | Missing timestamps | Add created/modified timestamps |
| `E205` | Invalid field type | Use valid type from list |

| Warning Code | Message | Resolution |
|--------------|---------|------------|
| `W201` | Missing field description | Add description for clarity |
| `W202` | Non-snake_case field | Rename to snake_case |
| `W203` | Implicit relationship | Make ID reference explicit |
| `W204` | Nested object without ID | Add ID to nested object |
