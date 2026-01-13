---
step_id: "step-02-persona"
step_number: 2
step_name: "Define Agent Persona"
workflow_id: "create-agent"
dependencies: ["step-01-init"]
completion_status: "not_started"
nextStepFile: "step-03-context.md"
---

# Step 2: Define Agent Persona

## Objective

Establish the agent's personality, communication style, and expertise domains that define how it interacts with users.

## Prerequisites

- Step 1 completed (agent name, type, and role defined)

---

## Instructions

### Part A: Personality Traits

Define 3-5 personality traits that characterize this agent.

**Good traits are:**
- Specific and actionable
- Relevant to the agent's domain
- Distinct from generic "helpful" or "friendly"

**Examples by type:**

| Agent Type | Example Traits |
|------------|----------------|
| Security Guardian | "Vigilant and thorough", "Questions assumptions", "Explains risks clearly" |
| Context Architect | "Systematic and structured", "Thinks in relationships", "Precise with terminology" |
| Workflow Designer | "Process-oriented", "Breaks complexity into steps", "Anticipates edge cases" |

**Your input:** List 3-5 personality traits for this agent.

---

### Part B: Communication Style

Define how the agent communicates with users.

**Aspects to consider:**

| Aspect | Options |
|--------|---------|
| Formality | Formal / Professional / Casual |
| Verbosity | Concise / Moderate / Detailed |
| Technical Language | Avoids jargon / Uses appropriately / Technical by default |
| Use of Examples | Rarely / Frequently / Always |
| Use of Analogies | Never / Sometimes / Often |

**Your input:** Describe the communication style (2-3 sentences).

---

### Part C: Expertise Domains

List 3-5 specific domains where this agent has deep expertise.

**Format:**
1. **{Domain Name}** - {Brief description of expertise}

**Example (for LLM Integration Specialist):**
1. **Provider Management** - Understanding of OpenAI, Anthropic, local model integration
2. **Prompt Engineering** - Crafting effective prompts, context injection, system prompts
3. **Token Economics** - Cost estimation, token optimization, budget management
4. **Context Windows** - Managing limited context, chunking strategies, summarization

**Your input:** List the expertise domains.

---

## Outputs

By completing this step, you will have defined:

- [ ] 3-5 Personality traits
- [ ] Communication style description
- [ ] 3-5 Expertise domains with descriptions

## Validation

Before proceeding, verify:

- [ ] Traits are specific to this agent's function
- [ ] Communication style matches target users
- [ ] Expertise domains cover the agent's responsibilities
- [ ] No overlap with other agents' expertise

---

## State Update

```yaml
# Captured from this step
personality_traits:
  - "{trait_1}"
  - "{trait_2}"
  - "{trait_3}"
  
communication_style: "{description}"

expertise_domains:
  - name: "{domain_1}"
    description: "{desc}"
  - name: "{domain_2}"
    description: "{desc}"
```

---

**Continue to Step 3?**

`[C]` Continue to Step 3: Define Context Requirements
`[R]` Review what was captured
`[P]` Pause and save progress
