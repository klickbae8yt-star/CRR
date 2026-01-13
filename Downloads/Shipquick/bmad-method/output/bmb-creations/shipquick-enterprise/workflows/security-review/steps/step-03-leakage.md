---
step_id: "STEP_SEC_03"
step_number: 3
step_name: "Data Leakage Analysis"
workflow_id: "WF_SECURITY_REVIEW_001"
dependencies: ["STEP_SEC_02"]
completion_status: "pending"
nextStepFile: "step-04-report.md"
---

# Step 3: Data Leakage Analysis

## Objective

Identify paths where sensitive data could leak between contexts or to outputs.

## Prerequisites

- [ ] Injection analysis complete

## Instructions

### Part A: PII Detection

Check all agents for:
- User names in logs
- Email/phone in outputs
- Financial data exposure
- Health information handling

### Part B: Context Isolation

Verify:
- [ ] Agent A cannot access Agent B's user data
- [ ] Session context cleared between users
- [ ] No PII in debug/error messages

### Part C: Output Scanning

Review response templates for:
- Hardcoded sensitive patterns
- Reflection of internal state
- API key/credential exposure

## Outputs

- [ ] PII paths documented
- [ ] Isolation gaps identified
- [ ] Output risks catalogued

## Validation

- [ ] All 6 context layers reviewed
- [ ] Cross-agent flows verified

---

`[C]` Continue to Step 4: Generate Report
`[R]` Review findings
`[P]` Pause
