# Shipquick Enterprise Module

> Enterprise agentic system for building AI agents, workflows, and context layers.

**Version:** 1.0.0  
**Schema:** 2.0.0  
**Created:** 2026-01-13

---

## Quick Start

1. Configure `config.yaml` with your settings
2. Activate Shipquick Master: `/shipquick` or load `agents/shipquick-master.md`
3. Choose from the menu

---

## Module Contents

### Agents (7)

| Agent | Icon | Purpose |
|-------|------|---------|
| Shipquick Master | 🧙 | Orchestrator |
| Prompt Engineer | 📝 | Prompt optimization |
| Context Architect | 🧠 | 6-layer context system |
| Agent Builder | 🤖 | Agent creation |
| Workflow Designer | 🔄 | Step-file workflows |
| Security Guardian | 🔒 | Security audits |
| LLM Specialist | 🤖 | LLM integration |

### Workflows (7)

| Workflow | Steps | Agent |
|----------|-------|-------|
| create-agent | 5 | agent-builder |
| create-workflow | 5 | workflow-designer |
| create-context-layer | 3 | context-architect |
| security-review | 4 | security-guardian |
| llm-integration | 3 | llm-specialist |
| improve-prompt | 2 | prompt-engineer |
| create-system-prompt | 3 | prompt-engineer |

### Tasks (5)

| Task | Purpose |
|------|---------|
| validate-agent | Validate agent files |
| validate-workflow | Validate workflow structure |
| validate-context | Validate context schemas |
| estimate-tokens | Estimate LLM token usage |
| export-config | Export module configuration |

### Schemas (6)

| Schema | Layer |
|--------|-------|
| user-profile | 1 |
| goal-context | 2 |
| progress-state | 3 |
| session-context | 4 |
| knowledge-graph | 5 |
| interaction-history | 6 |

---

## File Structure

```
shipquick-enterprise/
├── config.yaml
├── README.md
├── observations.md
├── agents/
│   ├── shipquick-master.md
│   ├── prompt-engineer.md
│   ├── context-architect.md
│   ├── agent-builder.md
│   ├── workflow-designer.md
│   ├── security-guardian.md
│   └── llm-integration-specialist.md
├── workflows/
│   ├── create-agent/
│   ├── create-workflow/
│   ├── create-context-layer/
│   ├── security-review/
│   ├── llm-integration/
│   ├── improve-prompt/
│   └── create-system-prompt/
├── tasks/
│   ├── validate-agent.md
│   ├── validate-workflow.md
│   ├── validate-context.md
│   ├── estimate-tokens.md
│   └── export-config.md
├── schemas/
│   └── *.schema.yaml
├── templates/
│   └── agent.template.md
└── config/
    ├── agent-manifest.csv
    ├── workflow-manifest.csv
    ├── task-manifest.csv
    └── schema-manifest.csv
```

---

## Key Concepts

### V2.0 Agent Schema

All agents include:
- Metadata (ID, version, timestamps)
- Identity (name, icon, experience)
- Personality traits (5)
- Expertise domains (5)
- Context contracts
- Menu items with exec paths
- Response templates
- Error handling

### 6-Layer Context System

1. **User Profile** - Stable user info
2. **Goal Context** - Current objectives
3. **Progress State** - Dynamic tracking
4. **Session Context** - Current interaction
5. **Knowledge Graph** - Connected insights
6. **Interaction History** - Past interactions

### ODEV Improvement Cycle

All learnings follow: **O**bserve → **D**ocument → **E**mbed → **V**erify

---

## Configuration

Edit `config.yaml` to customize:
- User name and language
- Output paths
- LLM providers
- Feature flags

---

## License

Part of the Shipquick Meta-Agentic System.
