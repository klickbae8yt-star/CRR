---
step_id: "STEP_SEC_04"
step_number: 4
step_name: "Generate Report"
workflow_id: "WF_SECURITY_REVIEW_001"
dependencies: ["STEP_SEC_03"]
completion_status: "pending"
nextStepFile: null
---

# Step 4: Generate Report

## Objective

Compile all findings into a formal security review report.

## Prerequisites

- [ ] All analysis steps complete
- [ ] All findings documented

## Instructions

### Part A: Aggregate Findings

Count by severity:
- Critical: {n}
- High: {n}
- Medium: {n}
- Low: {n}

### Part B: Determine Overall Status

```
PASS: No Critical, ≤2 High
PASS WITH CONDITIONS: No Critical, >2 High
FAIL: Any Critical
```

### Part C: Generate Report

```markdown
# Security Review Report

**Target:** {module/agent name}
**Date:** {date}
**Reviewer:** Security Guardian (Raj)

## Summary

| Severity | Count |
|----------|-------|
| Critical | {n} |
| High | {n} |
| Medium | {n} |
| Low | {n} |

**Overall Status:** {PASS|PASS WITH CONDITIONS|FAIL}

## Findings

### Critical Findings
{list or "None"}

### High Findings
{list}

## Recommendations

1. {Priority recommendation 1}
2. {Priority recommendation 2}

## Next Steps

1. Address Critical/High findings
2. Schedule follow-up review
```

## Outputs

- [ ] Report generated
- [ ] Saved to {output_folder}/security/

## Validation

- [ ] All findings included
- [ ] Status correctly determined
- [ ] Actionable recommendations provided

---

## Review Complete! 🔒

**Next Actions:**
- Share report with stakeholders
- Track remediation of findings
- Schedule re-review after fixes
