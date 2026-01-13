---
task_id: "TSK_ESTIMATE_TOKENS_001"
task_name: "Estimate Tokens"
version: "1.0.0"
module: "shipquick-enterprise"
created_timestamp: "2026-01-13T21:27:00.000Z"

metadata:
  description: "Estimate token usage for prompts and agent interactions"
  difficulty: "beginner"
  used_by: ["llm-integration-specialist", "prompt-engineer"]
---

# Estimate Tokens Task

## Purpose

Analyze text content and estimate token usage across different LLM providers to help with cost planning and optimization.

## Inputs

- Text content (prompt, agent file, or workflow)
- OR file path to analyze

## Instructions

### Step 1: Get Content

Ask user:
```
Provide the text to analyze, or give a file path.
```

### Step 2: Estimate Tokens

Use approximate tokenization:
- **Words × 1.3** = rough token estimate
- Or use tiktoken-equivalent logic

### Step 3: Calculate for Each Provider

| Provider | Model | Input $/1M | Output $/1M |
|----------|-------|------------|-------------|
| OpenAI | gpt-4o | $2.50 | $10.00 |
| OpenAI | gpt-4o-mini | $0.15 | $0.60 |
| Anthropic | claude-sonnet | $3.00 | $15.00 |
| Anthropic | claude-haiku | $0.25 | $1.25 |
| Google | gemini-pro | $1.25 | $5.00 |
| Google | gemini-flash | $0.075 | $0.30 |

### Step 4: Generate Report

```
🤖 **Token Estimate Report**

**Content:** {description}
**Token Count:** {n} tokens

**Cost per 1000 calls:**

| Provider | Model | Cost |
|----------|-------|------|
| OpenAI | gpt-4o | ${amount} |
| OpenAI | gpt-4o-mini | ${amount} |
| Anthropic | claude-sonnet | ${amount} |
| Anthropic | claude-haiku | ${amount} |
| Google | gemini-pro | ${amount} |
| Google | gemini-flash | ${amount} |

**Recommendation:** {model} for best {cost|quality|balance}
```

## Output

Token estimate report with cost breakdown per provider.

## Validation

- [ ] Token count is reasonable
- [ ] All providers calculated
- [ ] Recommendation provided

---

## Quick Reference

### Token Estimation Rules

| Content Type | Multiplier |
|--------------|------------|
| English text | words × 1.3 |
| Code | characters ÷ 4 |
| JSON | characters ÷ 3 |
| Mixed | words × 1.5 |

### Common Token Counts

| Item | Typical Tokens |
|------|----------------|
| Simple prompt | 100-300 |
| Agent file | 500-2000 |
| Workflow step | 200-500 |
| Full conversation | 2000-8000 |
