/**
 * LinkRight - Job Search CRM Background Service Worker
 * Handles keyboard shortcuts and state management for job search automation
 */

// Initialize extension on install
chrome.runtime.onInstalled.addListener(() => {
  console.log('LinkRight Job Search CRM extension installed');
  
  // Set initial state - all modes disabled by default
  chrome.storage.local.set({
    engagementMode: false,
    jobAutomationMode: false,
    networkingMode: false,
    coldEmailMode: false,
    extensionActive: false
  });
});

// Handle keyboard shortcut for toggling Engagement Mode
chrome.commands.onCommand.addListener((command) => {
  if (command === 'toggle-engagement') {
    toggleEngagementMode();
  }
});

/**
 * Toggle Engagement Mode on/off
 */
async function toggleEngagementMode() {
  try {
    const result = await chrome.storage.local.get(['engagementMode']);
    const newState = !result.engagementMode;
    
    await chrome.storage.local.set({ engagementMode: newState });
    
    // Notify all LinkedIn tabs about the state change
    const tabs = await chrome.tabs.query({ url: 'https://www.linkedin.com/*' });
    
    for (const tab of tabs) {
      try {
        await chrome.tabs.sendMessage(tab.id, {
          type: 'ENGAGEMENT_MODE_CHANGED',
          enabled: newState
        });
      } catch (error) {
        // Tab might not be ready or content script not loaded
        console.log('Could not notify tab:', tab.id);
      }
    }
  } catch (error) {
    console.error('Error toggling engagement mode:', error);
  }
}

// Handle extension icon click
chrome.action.onClicked.addListener(async (tab) => {
  // Only work on LinkedIn pages
  if (tab.url && tab.url.includes('linkedin.com')) {
    try {
      // Always send message to content script to toggle/open sidebar
      await chrome.tabs.sendMessage(tab.id, {
        type: 'OPEN_SIDEBAR_FROM_EXTENSION'
      });
    } catch (error) {
      console.log('Could not send message to tab:', tab.id, error);
    }
  }
});

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'GET_ENGAGEMENT_STATE') {
    chrome.storage.local.get(['engagementMode'], (result) => {
      sendResponse({ engagementMode: result.engagementMode || false });
    });
    return true;
  } else if (message.type === 'UPDATE_ICON_STATE') {
    updateExtensionIcon(message.active);
    sendResponse({ success: true });
    return true;
  }
});

// Update extension icon on state change
async function updateExtensionIcon(active) {
  try {
    // Use the same icon for both states since we only have one set of icons
    chrome.action.setIcon({
      path: {
        16: "icons/icon16.png",
        48: "icons/icon48.png",
        128: "icons/icon128.png"
      }
    });
  } catch (error) {
    console.log('Could not update icon:', error);
  }
}
