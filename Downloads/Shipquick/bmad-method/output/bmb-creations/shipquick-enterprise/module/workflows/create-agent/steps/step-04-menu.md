---
step_id: "step-04-menu"
step_number: 4
step_name: "Design Menu & Commands"
workflow_id: "create-agent"
dependencies: ["step-03-context"]
completion_status: "not_started"
nextStepFile: "step-05-validate.md"
---

# Step 4: Design Menu & Commands

## Objective

Define the activation rules, commands, and menu items that allow users to interact with this agent.

## Prerequisites

- Steps 1-3 completed (identity, persona, context defined)

---

## Instructions

### Part A: Activation Triggers

When should this agent automatically activate?

**Common trigger types:**

| Trigger | Description | Example |
|---------|-------------|---------|
| `session_start` | At beginning of session | Orchestrators |
| `handoff_from` | When another agent passes control | Specialists |
| `context_match` | When user context matches pattern | Domain-specific |
| `explicit_only` | Only when user invokes directly | Utility agents |

**Format:**
```yaml
triggers:
  - {trigger_type}: "{condition or description}"
```

**Your input:** What triggers should activate this agent?

---

### Part B: Command Invocations

What explicit commands can invoke this agent?

**Naming conventions:**
- Use lowercase with underscores
- Start with `/` for agent-level commands
- Start with `*` for action commands

**Examples:**
- `/security` - Activates the Security Guardian
- `*run_audit` - Runs an action within the agent

**Your input:** What commands invoke this agent?

---

### Part C: Menu Items

Design the agent's capability menu.

**Menu item structure:**
```xml
<item cmd="*{command}" type="{workflow|exec|action}">{Description}</item>
```

**Types:**
- `workflow` - Executes a multi-step workflow
- `exec` - Loads and executes a specific file
- `action` - Triggers inline instruction or prompt

**Guidelines:**
- 5-10 menu items is ideal
- Most important items first
- Always include dismiss option (0)
- Use clear, action-oriented descriptions

**Your input:** List the menu items for this agent.

---

## Outputs

By completing this step, you will have defined:

- [ ] Activation triggers
- [ ] Command invocations
- [ ] Menu items with commands and types

## Validation

Before proceeding, verify:

- [ ] Triggers make sense for agent type
- [ ] Commands don't conflict with existing agents
- [ ] Menu items cover agent's responsibilities
- [ ] Descriptions are clear and actionable

---

## State Update

```yaml
# Captured from this step
activation:
  triggers:
    - type: "{trigger_type}"
      condition: "{description}"
  commands:
    - "/{command}": "{description}"
    
menu_items:
  - cmd: "*{command}"
    type: "{workflow|exec|action}"
    description: "{text}"
```

---

**Continue to Step 5?**

`[C]` Continue to Step 5: Validate & Generate
`[R]` Review what was captured
`[P]` Pause and save progress
