#!/usr/bin/env node

/**
 * Shipquick Enterprise Initializer
 * 
 * This CLI tool copies the Shipquick Enterprise module files to your project.
 * Usage: npx shipquick-init [target-directory]
 */

const fs = require('fs');
const path = require('path');

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  red: '\x1b[31m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logStep(step, message) {
  console.log(`${colors.cyan}[${step}]${colors.reset} ${message}`);
}

// Get package root directory
const packageRoot = path.resolve(__dirname, '..');
const moduleSource = path.join(packageRoot, 'module');
const archDoc = path.join(packageRoot, 'Shipquick_Meta_Agentic_System_Architecture.md');

// Target directory (current working directory or specified)
const targetDir = process.argv[2] || process.cwd();
const shipquickDir = path.join(targetDir, 'shipquick-enterprise');

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    
    const files = fs.readdirSync(src);
    for (const file of files) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

function countFiles(dir) {
  let count = 0;
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      count += countFiles(fullPath);
    } else {
      count++;
    }
  }
  
  return count;
}

function main() {
  console.log('');
  log('🧙 Shipquick Enterprise Initializer', 'bright');
  log('====================================', 'cyan');
  console.log('');
  
  // Check if module source exists
  if (!fs.existsSync(moduleSource)) {
    log('❌ Error: Module source not found!', 'red');
    log('Please reinstall the package: npm install shipquick-enterprise', 'yellow');
    process.exit(1);
  }
  
  // Check if target already exists
  if (fs.existsSync(shipquickDir)) {
    log('⚠️  Warning: shipquick-enterprise folder already exists!', 'yellow');
    log('Delete it first or choose a different directory.', 'yellow');
    process.exit(1);
  }
  
  logStep('1/4', 'Creating shipquick-enterprise directory...');
  fs.mkdirSync(shipquickDir, { recursive: true });
  
  logStep('2/4', 'Copying module files...');
  copyRecursive(moduleSource, shipquickDir);
  
  logStep('3/4', 'Copying architecture document...');
  if (fs.existsSync(archDoc)) {
    fs.copyFileSync(archDoc, path.join(shipquickDir, 'Shipquick_Meta_Agentic_System_Architecture.md'));
  }
  
  logStep('4/4', 'Verifying installation...');
  const fileCount = countFiles(shipquickDir);
  
  console.log('');
  log('✅ Shipquick Enterprise initialized successfully!', 'green');
  console.log('');
  log(`📁 Location: ${shipquickDir}`, 'blue');
  log(`📄 Files copied: ${fileCount}`, 'blue');
  console.log('');
  log('Contents:', 'bright');
  log('  🧙 7 Agents (Orchestrator + 6 Specialists)', 'reset');
  log('  🔄 7 Workflows (25 step files)', 'reset');
  log('  📋 5 Tasks', 'reset');
  log('  📄 6 Context Schemas', 'reset');
  log('  📊 4 Manifest Files', 'reset');
  console.log('');
  log('Next steps:', 'bright');
  log('  1. cd shipquick-enterprise', 'cyan');
  log('  2. Edit config.yaml with your settings', 'cyan');
  log('  3. Load agents/shipquick-master.md in your LLM', 'cyan');
  console.log('');
  log('📚 Read Shipquick_Meta_Agentic_System_Architecture.md for full documentation', 'yellow');
  console.log('');
}

main();
