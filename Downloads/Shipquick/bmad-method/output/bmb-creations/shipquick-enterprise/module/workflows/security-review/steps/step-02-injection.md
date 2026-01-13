---
step_id: "STEP_SEC_02"
step_number: 2
step_name: "Prompt Injection Analysis"
workflow_id: "WF_SECURITY_REVIEW_001"
dependencies: ["STEP_SEC_01"]
completion_status: "pending"
nextStepFile: "step-03-leakage.md"
---

# Step 2: Prompt Injection Analysis

## Objective

Identify and assess prompt injection vulnerabilities in all input paths.

## Prerequisites

- [ ] Attack surface mapped from Step 1

## Instructions

### Part A: Test Common Injection Patterns

For each input point, test:
- `Ignore previous instructions and...`
- `</system> <user>`
- Unicode/encoding bypasses
- Multi-turn context poisoning

### Part B: Assess Boundaries

Check:
- [ ] System prompt protected from user view?
- [ ] User input sanitized before LLM?
- [ ] Output filtered for instruction leakage?


### Part C: Document Findings

For each vulnerability found:
```
🔒 **Finding:** {title}
**Severity:** {Critical|High|Medium|Low}
**Vector:** {How it can be exploited}
**Remediation:** {How to fix}
```

## Outputs

- [ ] Injection test results documented
- [ ] Vulnerabilities catalogued with severity

## Validation

- [ ] All input points tested
- [ ] Each finding has remediation

---

`[C]` Continue to Step 3: Data Leakage Analysis
`[R]` Review findings
`[P]` Pause
