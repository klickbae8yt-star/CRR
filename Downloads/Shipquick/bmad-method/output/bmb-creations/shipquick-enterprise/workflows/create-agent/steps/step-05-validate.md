---
step_id: "step-05-validate"
step_number: 5
step_name: "Validate & Generate Agent File"
workflow_id: "create-agent"
dependencies: ["step-04-menu"]
completion_status: "not_started"
nextStepFile: null
---

# Step 5: Validate & Generate Agent File

## Objective

Review all captured information, validate completeness, and generate the final agent definition file.

## Prerequisites

- Steps 1-4 completed (all agent components defined)

---

## Instructions

### Part A: Review Summary

Here's everything captured for your new agent:

```yaml
# Agent Definition Summary
agent_name: "{agent_name}"
agent_id: "{agent_id}"
agent_type: "{agent_type}"

identity:
  role: "{role_description}"
  
persona:
  personality_traits: 
    {traits_list}
  communication_style: "{style}"
  expertise_domains:
    {domains_list}

context:
  required: {required_list}
  optional: {optional_list}
  produces: {produces_list}

activation:
  triggers: {triggers_list}
  commands: {commands_list}

menu:
  {menu_items_list}
```

**Review the summary above. Is everything correct?**

---

### Part B: Validation Checklist

Before generating, verify:

**Identity**
- [ ] Agent name is clear and descriptive (2-3 words)
- [ ] Agent type is appropriate
- [ ] Role description explains purpose

**Persona**
- [ ] 3-5 specific personality traits defined
- [ ] Communication style is clear
- [ ] 3-5 expertise domains with descriptions

**Context**
- [ ] Required context is truly necessary
- [ ] Produces valid context layers
- [ ] No circular dependencies

**Activation**
- [ ] Triggers make sense for agent type
- [ ] Commands don't conflict with others
- [ ] Menu items cover responsibilities

**Overall**
- [ ] Agent fills a unique role (no overlap)
- [ ] Agent's scope is appropriate (not too broad)

---

### Part C: Generate File

If validation passes, the agent file will be generated at:

```
{module_path}/agents/{agent_name_kebab}.md
```

**Options:**

`[G]` Generate agent file now
`[E]` Edit - I need to change something
`[P]` Preview - Show me the full file first

---

## Outputs

By completing this step, you will have:

- [ ] Reviewed all agent components
- [ ] Passed validation checklist
- [ ] Generated agent definition file

## Post-Generation

After the agent file is created:

1. Run `*validate_agent` to verify syntax
2. Register agent in module config
3. Test activation triggers
4. Test menu items

---

## Workflow Complete! 🎉

**Next Steps:**
- Create workflows for this agent? `*create_workflow`
- Create another agent? `*create_agent`
- Return to main menu? `0`
