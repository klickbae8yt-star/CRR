---
step_id: "STEP_SEC_01"
step_number: 1
step_name: "Define Scope"
workflow_id: "WF_SECURITY_REVIEW_001"
dependencies: []
completion_status: "pending"
nextStepFile: "step-02-injection.md"
---

# Step 1: Define Scope

## Objective

Establish what agents, workflows, and data flows are in scope for this security review.

## Prerequisites

- [ ] Access to module files
- [ ] Understanding of system architecture

## Instructions

### Part A: Identify Review Target

Ask user:
1. "Which module/agent are we reviewing?"
2. "Full review or specific focus area?"

### Part B: Map Attack Surface

Document:
- All user input points
- All external API calls
- All data storage/retrieval
- All agent handoffs

### Part C: Prioritize Areas

Rate each area by risk:
- User inputs → HIGH (injection risk)
- Agent handoffs → MEDIUM (context leakage)
- Stored data → MEDIUM (persistence risk)

## Outputs

- [ ] Review scope documented
- [ ] Attack surface mapped
- [ ] Priority areas identified

## Validation

- [ ] All agents in scope identified
- [ ] All data flows documented

---

`[C]` Continue to Step 2: Prompt Injection Analysis
`[R]` Review scope
`[P]` Pause
