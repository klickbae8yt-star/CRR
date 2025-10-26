/**
 * LinkRight Job Search CRM Configuration
 * 
 * IMPORTANT: Replace placeholder values with your actual URLs
 */

const LINKRIGHT_CONFIG = {
  // n8n Webhook URL for AI comment generation
  WEBHOOK_URL: 'https://n8n.linkright.in/webhook/linkedin-reply',
  
  // Privacy Policy URL
  PRIVACY_POLICY_URL: 'https://www.linkright.in/privacy',
  
  // Request timeout in milliseconds
  WEBHOOK_TIMEOUT: 10000,
  
  // Extension settings
  EXTENSION_NAME: 'LinkRight',
  EXTENSION_ID: 'linkright-job-search-crm',
  
  // Color palette configuration
  COLORS: {
    PRIMARY: '#006666',
    PRIMARY_LIGHT: '#2699B8',
    PRIMARY_DARK: '#004D4D',
    GOLD: '#FFD700',
    CORAL: '#E87D63',
    SUCCESS: '#22C55E',
    DESTRUCTIVE: '#EF4444'
  }
};

// Make config available globally
if (typeof window !== 'undefined') {
  window.LINKRIGHT_CONFIG = LINKRIGHT_CONFIG;
}
