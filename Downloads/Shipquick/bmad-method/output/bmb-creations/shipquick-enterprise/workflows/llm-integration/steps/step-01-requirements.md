---
step_id: "STEP_LLM_01"
step_number: 1
step_name: "Gather Requirements"
workflow_id: "WF_LLM_INTEGRATION_001"
dependencies: []
completion_status: "pending"
nextStepFile: "step-02-providers.md"
---

# Step 1: Gather Requirements

## Objective

Understand usage patterns, quality needs, and budget constraints.

## Instructions

### Part A: Usage Patterns

Ask:
1. "How many LLM calls per day expected?"
2. "What tasks? (reasoning, generation, classification)"
3. "Average input/output token lengths?"

### Part B: Quality Requirements

Determine:
- Accuracy requirements (1-10)
- Latency requirements (ms)
- Reliability requirements (uptime %)

### Part C: Budget

Get:
- Monthly budget ($)
- Cost-quality preference (1=cheap, 10=quality)

## Outputs

- [ ] Usage estimate: {calls}/day
- [ ] Tasks: {list}
- [ ] Budget: ${amount}/month

---

`[C]` Continue to Step 2
`[P]` Pause
