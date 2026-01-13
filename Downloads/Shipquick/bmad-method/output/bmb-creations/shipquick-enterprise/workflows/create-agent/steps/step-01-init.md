---
step_id: "step-01-init"
step_number: 1
step_name: "Initialize Agent Definition"
workflow_id: "create-agent"
dependencies: []
completion_status: "not_started"
nextStepFile: "step-02-persona.md"
---

# Step 1: Initialize Agent Definition

## Objective

Establish the foundation for the new agent by defining its name, type, and core role in the system.

## Prerequisites

- None. This is the first step.

---

## Instructions

### Part A: Agent Name

Provide a clear, descriptive name for the agent.

**Naming Conventions:**
- Use title case (e.g., "Context Architect")
- Be descriptive of the agent's function
- Keep it to 2-3 words

**Examples:**
- "Security Guardian" ✅
- "Writing Assistant" ✅  
- "Helper" ❌ (too vague)
- "The-Agent-For-Doing-Context-Stuff" ❌ (too long)

**Your input:** What is the agent's name?

---

### Part B: Agent Type

Select the type of agent:

| Type | Description | When to Use |
|------|-------------|-------------|
| **orchestrator** | Coordinates other agents, manages routing | Main entry points, coordinators |
| **specialist** | Deep expertise in one domain | Focused skill areas |
| **utility** | Performs specific utility tasks | Validation, export, monitoring |

**Your input:** What type is this agent? (orchestrator / specialist / utility)

---

### Part C: Core Role

Describe in 2-3 sentences what this agent does and why it exists.

**Template:**
> This agent is responsible for {primary responsibility}. It helps users {user benefit}. It is essential because {why it matters}.

**Example:**
> This agent is responsible for designing and managing context layer schemas. It helps users define the data structures that enable intelligent agent behavior. It is essential because context is the foundation of system intelligence.

**Your input:** Describe the agent's core role.

---

## Outputs

By completing this step, you will have defined:

- [ ] Agent name
- [ ] Agent type (orchestrator / specialist / utility)
- [ ] Core role description

## Validation

Before proceeding, verify:

- [ ] Name follows naming conventions (2-3 words, title case)
- [ ] Type is appropriate for the agent's function
- [ ] Role description is clear and specific

---

## State Update

```yaml
# Captured from this step
agent_name: "{user_provided}"
agent_id: "AGT_{UPPER_NAME}_{SEQUENCE}"
agent_type: "{user_provided}"
role_description: "{user_provided}"
```

---

**Continue to Step 2?**

`[C]` Continue to Step 2: Define Persona
`[R]` Review what was captured
`[P]` Pause and save progress
