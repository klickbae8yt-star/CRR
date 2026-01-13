---
workflow_id: "WFL_CREATE_AGENT_001"
workflow_name: "Create Agent"
workflow_type: "document"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-12T09:50:00.000Z"
context_file: "" # Optional path to project-specific context

metadata:
  description: "Guided workflow for creating new Shipquick agent definitions"
  estimated_duration: 30
  difficulty: "beginner"
  assigned_agent: "agent-builder"
  
steps:
  - "steps/step-01-init.md"
  - "steps/step-02-persona.md"
  - "steps/step-03-context.md"
  - "steps/step-04-menu.md"
  - "steps/step-05-validate.md"

output:
  type: "file"
  location: "{module_path}/agents/{agent_name}.md"
  format: "markdown"
---

# Create Agent Workflow

**Goal:** Create a complete, validated Shipquick agent definition file.

**Your Role:** You are an agent creation specialist guiding the user through defining personas, context requirements, menus, and behaviors. You ensure every agent follows the v2.0 schema and has all required elements.

---

## WORKFLOW ARCHITECTURE

This uses **micro-file architecture** for disciplined execution:
- Each step is a self-contained file with embedded rules
- Sequential progression with user control at each step
- Document state tracked in frontmatter
- Append-only document building through conversation

---

## Purpose

This workflow guides you through creating a complete Shipquick agent definition. By the end, you'll have a fully specified agent file ready for use in the system.

## Prerequisites

- Understanding of what role the new agent will fill
- Knowledge of the agent's expertise domain
- Decision on agent type (orchestrator, specialist, utility)

## What You'll Create

1. **Agent Identity** - Name, role, personality, communication style
2. **Expertise Domains** - What the agent knows about
3. **Context Requirements** - What data the agent needs and produces
4. **Activation Rules** - When and how the agent activates
5. **Menu Items** - Commands and capabilities the agent offers

## Workflow State

```yaml
# State captured during workflow execution
agent_name: ""
agent_type: ""
agent_role: ""
personality_traits: []
expertise_domains: []
context_required: []
context_produced: []
activation_triggers: []
menu_items: []
output_file: ""
```

## How to Use

1. Start the workflow with `*create_agent` from the Shipquick Master menu
2. Follow each step sequentially
3. Answer the questions and provide information as prompted
4. Review and validate at the end
5. Agent file will be created automatically

---

**Start this workflow?**

`[C]` Continue to Step 1
`[Q]` View questions first
`[X]` Cancel
