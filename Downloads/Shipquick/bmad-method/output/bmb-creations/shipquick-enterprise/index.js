/**
 * Shipquick Enterprise Module
 * 
 * Enterprise agentic system for building AI agents, workflows, and context layers.
 * 
 * Usage:
 *   npx shipquick-init  - Initialize in current directory
 * 
 * @module shipquick-enterprise
 * @version 1.0.0
 */

const path = require('path');

module.exports = {
    name: 'shipquick-enterprise',
    version: '1.0.0',

    // Module paths
    paths: {
        module: path.join(__dirname, 'module'),
        agents: path.join(__dirname, 'module', 'agents'),
        workflows: path.join(__dirname, 'module', 'workflows'),
        tasks: path.join(__dirname, 'module', 'tasks'),
        schemas: path.join(__dirname, 'module', 'schemas'),
        architecture: path.join(__dirname, 'Shipquick_Meta_Agentic_System_Architecture.md')
    },

    // Agent list
    agents: [
        'shipquick-master',
        'prompt-engineer',
        'context-architect',
        'agent-builder',
        'workflow-designer',
        'security-guardian',
        'llm-integration-specialist'
    ],

    // Workflow list
    workflows: [
        'create-agent',
        'create-workflow',
        'create-context-layer',
        'security-review',
        'llm-integration',
        'improve-prompt',
        'create-system-prompt'
    ]
};
