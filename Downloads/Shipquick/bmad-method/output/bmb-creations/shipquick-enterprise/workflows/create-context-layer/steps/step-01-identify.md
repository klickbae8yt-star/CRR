---
step_id: "STEP_CTX_01"
step_number: 1
step_name: "Identify Layer Purpose"
workflow_id: "WF_CREATE_CONTEXT_001"
dependencies: []
completion_status: "pending"
nextStepFile: "step-02-design.md"
---

# Step 1: Identify Layer Purpose

## Objective

Determine which layer type and what data will be stored.

## Instructions

### Part A: Select Layer Type

Ask: "Which context layer are you extending?"

| Layer | Purpose | Update Frequency |
|-------|---------|------------------|
| user-profile | Who the user is | Rarely |
| goal-context | What they're achieving | Per objective |
| progress-state | What's been done | Frequently |
| session-context | Current work | Every session |
| knowledge-graph | Connected insights | As learned |
| interaction-history | Past interactions | After each |

### Part B: Define Extension

What NEW data needs to be captured that existing schema doesn't cover?

### Part C: Justify Placement

Why does this belong in {layer} vs another layer?

## Outputs

- [ ] Layer type selected
- [ ] New fields identified
- [ ] Placement justified

---

`[C]` Continue to Step 2
`[P]` Pause
