---
step_id: "step-03-context"
step_number: 3
step_name: "Define Context Requirements"
workflow_id: "create-agent"
dependencies: ["step-02-persona"]
completion_status: "not_started"
nextStepFile: "step-04-menu.md"
---

# Step 3: Define Context Requirements

## Objective

Specify what context layers the agent requires to function and what context it produces or updates.

## Prerequisites

- Steps 1-2 completed (identity and persona defined)

---

## Instructions

### Part A: Required Context

What context MUST this agent have access to in order to function?

**Available Context Layers:**

| Layer | Contains |
|-------|----------|
| `user_profile` | Identity, background, preferences, skills |
| `goal_context` | Objectives, success criteria, constraints, strategy |
| `progress_state` | Deliverables, in-progress work, skill progression |
| `session_context` | Active agents, workflows, observations |
| `knowledge_graph` | Nodes, edges, concept relationships |
| `interaction_history` | Past conversations, summaries, insights |

**Format:**
```yaml
required:
  - {layer}: "{what specific info from this layer}"
```

**Example:**
```yaml
required:
  - user_profile: "Skill levels and learning preferences"
  - session_context: "Current active workflows"
```

**Your input:** What context is required?

---

### Part B: Optional Context

What context would ENHANCE this agent's function but isn't strictly necessary?

**Your input:** What optional context would help?

---

### Part C: Produced Context

What context does this agent CREATE or UPDATE?

This is critical for understanding how this agent contributes to the system's intelligence.

**Example:**
```yaml
produces:
  - progress_state: "Creates deliverable records for new agents"
  - interaction_history: "Logs design decisions and rationale"
```

**Your input:** What context does this agent produce?

---

## Outputs

By completing this step, you will have defined:

- [ ] Required context layers and what info is needed
- [ ] Optional context layers that enhance function
- [ ] Context produced/updated by this agent

## Validation

Before proceeding, verify:

- [ ] Required context is actually necessary (not nice-to-have)
- [ ] Produced context aligns with agent's responsibilities
- [ ] No circular dependencies (agent requires what only it produces)

---

## State Update

```yaml
# Captured from this step
context_requirements:
  required:
    - layer: "{layer_name}"
      info_needed: "{description}"
  optional:
    - layer: "{layer_name}"
      info_needed: "{description}"
  produces:
    - layer: "{layer_name}"
      info_produced: "{description}"
```

---

**Continue to Step 4?**

`[C]` Continue to Step 4: Design Menu & Commands
`[R]` Review what was captured
`[P]` Pause and save progress
