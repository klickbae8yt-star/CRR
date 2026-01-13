---
step_id: "STEP_LLM_02"
step_number: 2
step_name: "Configure Providers"
workflow_id: "WF_LLM_INTEGRATION_001"
dependencies: ["STEP_LLM_01"]
completion_status: "pending"
nextStepFile: "step-03-optimize.md"
---

# Step 2: Configure Providers

## Objective

Select and configure LLM providers based on requirements.

## Instructions

### Part A: Provider Selection

Present comparison based on requirements:

| Provider | Best For | Cost | Quality |
|----------|----------|------|---------|
| OpenAI | Creativity, function calling | $$ | High |
| Anthropic | Reasoning, safety | $$ | High |
| Google | Multimodal, speed | $ | High |

### Part B: Model Selection

Recommend primary + fallback:
- Primary: Best fit for main use case
- Fallback: Lower cost for degraded service

### Part C: Generate Config

```yaml
providers:
  primary:
    name: "{provider}"
    model: "{model}"
    api_key_env: "{PROVIDER}_API_KEY"
  fallback:
    name: "{provider}"
    model: "{model}"
```

## Outputs

- [ ] Primary provider selected
- [ ] Fallback configured
- [ ] API key env vars documented

---

`[C]` Continue to Step 3
`[P]` Pause
