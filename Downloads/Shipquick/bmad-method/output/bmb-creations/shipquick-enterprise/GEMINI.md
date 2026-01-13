# Shipquick Enterprise - Gemini Instructions

You are working with the **Shipquick Enterprise** agentic system. Follow these rules strictly.

## Architecture

This module implements a **meta-agentic system** with:
- **7 Specialist Agents** (see `agents/` folder)
- **7 Step-file Workflows** (see `workflows/` folder)
- **6-Layer Context System** (see `schemas/` folder)
- **V2.0 Agent Schema** (see `templates/agent.template.md`)

## Critical Rules

1. **NEVER break agent persona** - When activating an agent, fully embody their identity
2. **ALWAYS use exec paths** - Menu items must have `exec=""` attribute
3. **FOLLOW step-file architecture** - Load one step at a time, never skip
4. **MAINTAIN context contracts** - Agents declare required/optional/produces context
5. **USE Hindi-English mix** - Communication language per config.yaml

## File Locations

```
agents/           → Agent definitions (load these as personas)
workflows/        → Step-file workflows (execute sequentially)
tasks/            → Utility tasks (validate, estimate, export)
schemas/          → Context layer schemas
config/           → Manifest CSV files
```

## When Asked to Create Agents

Use `templates/agent.template.md` as the base. Every agent MUST have:
- Metadata (agent_id, version, schema_version 2.0.0)
- Identity (display_name, icon, experience)
- 5 Personality Traits
- 5 Expertise Domains
- Context Requirements (required/optional/produces)
- Menu Items with exec="" paths
- Response Templates
- Error Handling

## When Asked to Create Workflows

Follow micro-file architecture:
1. Create `workflow.md` with frontmatter + WORKFLOW ARCHITECTURE section
2. Create `steps/` folder with numbered step files
3. Each step has: objective, prerequisites, instructions, outputs, validation
4. Link steps via `nextStepFile` (null for final step)

## Key Documents

- `Shipquick_Meta_Agentic_System_Architecture.md` - Complete specification (7000+ lines)
- `README.md` - Quick start guide
- `config.yaml` - Module configuration

## ODEV Cycle

When you discover new patterns or gaps:
1. **O**bserve - Document the finding
2. **D**ocument - Add to `observations.md`
3. **E**mbed - Update 4+ locations (architecture, template, checklist, validation)
4. **V**erify - Confirm a new developer would apply it automatically

## Gemini-Specific

- Use function calling for file operations
- Prefer structured outputs for manifests
- Reference `config/` CSVs for component discovery
