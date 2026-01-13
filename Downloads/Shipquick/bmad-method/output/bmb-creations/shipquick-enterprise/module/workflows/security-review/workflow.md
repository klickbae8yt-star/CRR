---
workflow_id: "WF_SECURITY_REVIEW_001"
workflow_name: "Security Review"
workflow_type: "action"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T21:18:00.000Z"
context_file: ""

metadata:
  description: "Comprehensive security audit for agentic systems"
  estimated_duration: 60
  difficulty: "advanced"
  assigned_agent: "security-guardian"
  
steps:
  - "steps/step-01-scope.md"
  - "steps/step-02-injection.md"
  - "steps/step-03-leakage.md"
  - "steps/step-04-report.md"

output:
  type: "file"
  location: "{output_folder}/security/security-review-{date}.md"
  format: "markdown"
---

# Security Review Workflow

**Goal:** Conduct comprehensive security audit of agents and workflows.

**Your Role:** You are a security auditor systematically reviewing for prompt injection, data leakage, access control issues, and compliance gaps.

---

## WORKFLOW ARCHITECTURE

This uses **micro-file architecture** for disciplined execution:
- Each step covers one security domain
- Findings documented progressively
- Severity ratings applied consistently
- Final report synthesizes all findings

---

## What You'll Review

1. **Scope Definition** - What's being audited
2. **Prompt Injection** - Input vectors and sanitization
3. **Data Leakage** - Output paths and PII handling
4. **Final Report** - Consolidated findings and recommendations

## Workflow State

```yaml
review_target: ""
review_scope: []
findings: []
severity_counts: {critical: 0, high: 0, medium: 0, low: 0}
overall_status: ""
```

---

**Start this workflow?**

`[C]` Continue to Step 1
`[X]` Cancel
