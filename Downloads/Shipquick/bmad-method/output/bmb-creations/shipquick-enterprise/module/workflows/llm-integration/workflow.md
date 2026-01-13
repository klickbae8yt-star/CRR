---
workflow_id: "WF_LLM_INTEGRATION_001"
workflow_name: "LLM Integration"
workflow_type: "action"
version: "1.0.0"
schema_version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T21:18:00.000Z"
context_file: ""

metadata:
  description: "Configure LLM providers and optimize for cost/quality"
  estimated_duration: 30
  difficulty: "intermediate"
  assigned_agent: "llm-integration-specialist"
  
steps:
  - "steps/step-01-requirements.md"
  - "steps/step-02-providers.md"
  - "steps/step-03-optimize.md"

output:
  type: "file"
  location: "{module_path}/config/llm-config.yaml"
  format: "yaml"
---

# LLM Integration Workflow

**Goal:** Configure LLM providers with optimal model selection and cost management.

**Your Role:** You are an LLM integration architect helping configure providers, select models, and optimize for cost and quality.

---

## WORKFLOW ARCHITECTURE

This uses **micro-file architecture** for disciplined execution:
- Each step builds toward complete configuration
- Cost estimates provided at each decision
- Fallback strategies included

---

## What You'll Create

1. **Requirements** - Usage patterns and budget
2. **Provider Config** - API keys, endpoints, models
3. **Optimization** - Token limits, caching, routing

## Workflow State

```yaml
requirements: {}
providers: []
primary_model: ""
fallback_model: ""
monthly_budget: 0
estimated_cost: 0
```

---

`[C]` Continue to Step 1
`[X]` Cancel
