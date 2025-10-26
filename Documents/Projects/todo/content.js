/**
 * LinkRight - Job Search CRM Content Script
 * Implements Simplify Copilot-style sidebar functionality
 */

class LinkRightWidget {
  constructor() {
    this.engagementMode = false;
    this.sidebarOpen = false;
    this.miniIconVisible = false; // Track if mini icon should be visible
    this.extensionActive = false; // Track if extension is active (sidebar or sticky tab visible)
    this.activeCommentBox = null;
    this.pendingRequest = null;
    this.currentView = 'main'; // 'main', 'settings', 'report'
    this.miniIconPosition = { top: 200 }; // Default position
    
    // Webhook throttling guards
    this.webhookInFlight = false;
    this.lastWebhookAt = 0;
    this.webhookCooldownMs = 10000; // 10s cooldown
    
    this.init();
  }

  /**
   * Initialize the widget
   */
  async init() {
    // Wait for page to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  /**
   * Setup the widget UI and listeners
   */
  async setup() {
    console.log('LinkRight: Setting up widget...');
    
    // Wait a bit to ensure LinkedIn is fully loaded
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Load current engagement state and position
    await this.loadState();
    
    // Create sidebar (mini icon will be created when sidebar is closed)
    this.createSidebar();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Start monitoring LinkedIn for comment/reply buttons
    if (this.engagementMode) {
      this.startMonitoring();
    }
    
    console.log('LinkRight Job Search CRM widget initialized successfully');
  }

  /**
   * Load state from storage
   */
  async loadState() {
    return new Promise((resolve) => {
      // Always start fresh on page load
      chrome.storage.local.set({
        engagementMode: false,
        extensionActive: false,
        miniIconVisible: false
      }, () => {
        this.engagementMode = false;
        this.extensionActive = false;
        this.miniIconVisible = false;
        this.miniIconPosition = { top: 200 };
        console.log('LinkRight: State reset on page load');
        resolve();
      });
    });
  }

  /**
   * Save state to storage
   */
  async saveState() {
    return new Promise((resolve) => {
      chrome.storage.local.set({
        engagementMode: this.engagementMode,
        miniIconPosition: this.miniIconPosition,
        extensionActive: this.extensionActive
      }, resolve);
    });
  }

  /**
   * Show mini icon (sticky tab)
   */
  showMiniIcon() {
    if (this.miniIconVisible) return; // Already visible
    
    console.log('LinkRight: Showing mini icon...');
    
    // Remove existing mini icon if it exists
    const existingIcon = document.getElementById('linkright-mini-icon');
    if (existingIcon) {
      existingIcon.remove();
    }
    
    const miniIcon = document.createElement('div');
    miniIcon.id = 'linkright-mini-icon';
    miniIcon.className = 'linkright-mini-icon';
    miniIcon.innerHTML = `
      <div class="linkright-mini-icon-main">
        <div class="linkright-mini-logo">😊</div>
        <button class="linkright-mini-close-btn" title="Close LinkRight">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
      <div class="linkright-drag-handle-separate">
        <div class="linkright-drag-indicator">
          <div class="linkright-drag-dot"></div>
          <div class="linkright-drag-dot"></div>
          <div class="linkright-drag-dot"></div>
          <div class="linkright-drag-dot"></div>
          <div class="linkright-drag-dot"></div>
          <div class="linkright-drag-dot"></div>
        </div>
      </div>
    `;

    // Add active class ONLY if engagement mode is on
    miniIcon.classList.remove('active');
    if (this.engagementMode) {
      miniIcon.classList.add('active');
    }
    
    // Position the mini icon
    miniIcon.style.top = `${this.miniIconPosition.top}px`;
    
    // Add click handler for X button
    const closeBtn = miniIcon.querySelector('.linkright-mini-close-btn');
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('LinkRight: Mini icon X button clicked');
      this.closeStickyTab();
    });
    
    // Add click handler for main icon area
    miniIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      console.log('LinkRight: Mini icon clicked');
      this.openSidebarFromMiniIcon();
    });
    
    // Add drag functionality
    this.addDragFunctionality(miniIcon);
    
    document.body.appendChild(miniIcon);
    this.miniIcon = miniIcon;
    this.miniIconVisible = true;
    
    console.log('LinkRight: Mini icon shown successfully');
  }

  /**
   * Hide mini icon
   */
  hideMiniIcon() {
    if (!this.miniIconVisible) return; // Already hidden
    
    console.log('LinkRight: Hiding mini icon...');
    
    const miniIcon = document.getElementById('linkright-mini-icon');
    if (miniIcon) {
      miniIcon.remove();
    }
    
    this.miniIcon = null;
    this.miniIconVisible = false;
    
    console.log('LinkRight: Mini icon hidden successfully');
  }

  /**
   * Close sticky tab completely (X button clicked)
   */
  closeStickyTab() {
    console.log('LinkRight: Closing sticky tab completely');
    this.hideMiniIcon();
    
    // Close sidebar if it's open
    const sidebar = document.getElementById('linkright-sidebar');
    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
      sidebar.style.right = '-352px';
    }
    
    // Reset ALL state to pristine
    this.extensionActive = false;
    this.miniIconVisible = false;
    this.sidebarOpen = false;
    this.currentView = 'main';
    
    // Force save clean state
    chrome.storage.local.set({
      extensionActive: false,
      miniIconVisible: false,
      engagementMode: this.engagementMode,
      miniIconPosition: this.miniIconPosition
    }, () => {
      console.log('LinkRight: All state reset and saved');
      // Send message to background to update icon to gray
      chrome.runtime.sendMessage({
        type: 'UPDATE_ICON_STATE',
        active: false
      }).catch(() => {
        console.log('Background not available yet');
      });
    });
  }

  /**
   * Add drag functionality to mini icon
   */
  addDragFunctionality(element) {
    let isDragging = false;
    let startY = 0;
    let startTop = 0;
    let startX = 0;

    element.addEventListener('mousedown', (e) => {
      // Don't start drag if clicking close button
      if (e.target.closest('.linkright-mini-close-btn')) {
        return;
      }
      
      // Allow dragging from anywhere on the sticky tab or drag handle
      isDragging = true;
      startY = e.clientY;
      startX = e.clientX;
      startTop = parseInt(element.style.top) || 0;
      element.style.cursor = 'grabbing';
      element.classList.add('dragging'); // Keep drag handle expanded
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      const deltaY = e.clientY - startY;
      const deltaX = Math.abs(e.clientX - startX);
      
      // Only respond to vertical dragging (if vertical movement > 5px, start dragging)
      if (Math.abs(deltaY) > 5) {
        let newTop = startTop + deltaY;
        
        // Constrain to viewport
        const maxTop = window.innerHeight - element.offsetHeight;
        newTop = Math.max(0, Math.min(newTop, maxTop));
        
        element.style.top = `${newTop}px`;
        this.miniIconPosition.top = newTop;
      }
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        element.style.cursor = 'grab';
        element.classList.remove('dragging'); // Remove dragging class
        this.saveState();
      }
    });
  }

  /**
   * Create the main sidebar
   */
  createSidebar() {
    console.log('LinkRight: Creating sidebar...');
    
    // Remove existing sidebar if it exists
    const existingSidebar = document.getElementById('linkright-sidebar');
    if (existingSidebar) {
      existingSidebar.remove();
    }
    
    const sidebar = document.createElement('div');
    sidebar.id = 'linkright-sidebar';
    sidebar.className = 'linkright-sidebar';
    
    this.updateSidebarContent(sidebar);
    
    document.body.appendChild(sidebar);
    this.sidebar = sidebar;
    
    console.log('LinkRight: Sidebar created successfully');
  }

  /**
   * Update sidebar content based on current view
   */
  updateSidebarContent(sidebar) {
    const headerContent = this.getHeaderContent();
    const mainContent = this.getMainContent();
    
    sidebar.innerHTML = `
      <div class="linkright-sidebar-header">
        ${headerContent}
      </div>
      <div class="linkright-sidebar-content">
        ${mainContent}
      </div>
    `;
    
    // Re-add event listeners after content update
    this.addSidebarEventListeners(sidebar);
  }

  /**
   * Get header content
   */
  getHeaderContent() {
    const showHomeButton = this.currentView !== 'main';
    return `
      <div class="linkright-header-left">
        <div class="linkright-logo">😊</div>
        <div class="linkright-title">LinkRight</div>
      </div>
      <div class="linkright-header-right">
        ${showHomeButton ? `
          <button class="linkright-header-btn" data-action="home" title="Back to Home">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
          </button>
        ` : ''}
        <button class="linkright-header-btn" data-action="report" title="Report an issue">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M232,56V176a8,8,0,0,1-2.76,6c-15.28,13.23-29.89,18-43.82,18-18.91,0-36.57-8.74-53-16.85C105.87,170,82.79,158.61,56,179.77V224a8,8,0,0,1-16,0V56a8,8,0,0,1,2.77-6h0c36-31.18,68.31-15.21,96.79-1.12C167,62.46,190.79,74.2,218.76,50A8,8,0,0,1,232,56Z"></path>
          </svg>
        </button>
        <button class="linkright-header-btn" data-action="settings" title="Settings">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.82,11.69,4.82,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
          </svg>
        </button>
        <button class="linkright-header-btn" data-action="close" title="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
      </div>
    `;
  }

  /**
   * Get main content based on current view
   */
  getMainContent() {
    switch (this.currentView) {
      case 'settings':
        return this.getSettingsContent();
      case 'report':
        return this.getReportContent();
      default:
        return this.getMainContentDefault();
    }
  }

  /**
   * Get default main content
   */
  getMainContentDefault() {
    return `
      <!-- Tabs component - commented out for future use -->
      <!--
      <div class="linkright-tabs">
        <button class="linkright-tab active" data-tab="engagement">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="linkright-tab-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path>
          </svg>
          Engagement
        </button>
        <button class="linkright-tab" data-tab="jobs">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="linkright-tab-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
          </svg>
          Keywords Score
        </button>
        <button class="linkright-tab" data-tab="profile">
          <svg class="linkright-tab-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.50017 1.66683C6.56734 1.66666 5.65078 1.91115 4.84198 2.37591C4.03318 2.84067 3.36041 3.50944 2.89085 4.31546C2.42128 5.12149 2.17133 6.03657 2.16595 6.96939C2.16057 7.9022 2.39994 8.82011 2.86017 9.6315C3.17124 9.22721 3.57112 8.89989 4.02889 8.67482C4.48666 8.44974 4.99006 8.33296 5.50017 8.3335H9.50017C10.0103 8.33296 10.5137 8.44974 10.9714 8.67482C11.4292 8.89989 11.8291 9.22721 12.1402 9.6315C12.6004 8.82011 12.8398 7.9022 12.8344 6.96939C12.829 6.03657 12.5791 5.12149 12.1095 4.31546C11.6399 3.50944 10.9672 2.84067 10.1584 2.37591C9.34956 1.91115 8.433 1.66666 7.50017 1.66683ZM12.7955 11.0508C13.6869 9.88881 14.169 8.46468 14.1668 7.00016C14.1668 3.31816 11.1822 0.333496 7.50017 0.333496C3.81817 0.333496 0.833504 3.31816 0.833504 7.00016C0.831303 8.46468 1.31344 9.88883 2.20484 11.0508L2.2015 11.0628L2.43817 11.3382C3.06343 12.0692 3.83976 12.6559 4.71366 13.0579C5.58756 13.4599 6.53824 13.6677 7.50017 13.6668C8.85172 13.6693 10.1718 13.2588 11.2835 12.4902C11.7575 12.1627 12.1872 11.7755 12.5622 11.3382L12.7988 11.0628L12.7955 11.0508ZM7.50017 3.00016C6.96974 3.00016 6.46103 3.21088 6.08596 3.58595C5.71088 3.96102 5.50017 4.46973 5.50017 5.00016C5.50017 5.5306 5.71088 6.0393 6.08596 6.41438C6.46103 6.78945 6.96974 7.00016 7.50017 7.00016C8.0306 7.00016 8.53931 6.78945 8.91438 6.41438C9.28946 6.0393 9.50017 5.5306 9.50017 5.00016C9.50017 4.46973 9.28946 3.96102 8.91438 3.58595C8.53931 3.21088 8.0306 3.00016 7.50017 3.00016Z" fill="currentColor"></path>
          </svg>
          Profile
        </button>
      </div>
      -->
      
      <div class="linkright-content-area">
        <div class="linkright-features">
          <div class="linkright-status-message ${this.engagementMode ? 'show' : ''}">
        ${this.engagementMode ? 'Engagement mode is On' : 'Engagement mode is Off'}
      </div>
      
          <button class="linkright-feature-btn linkright-feature-btn-primary" data-feature="engagement">
            <div class="linkright-feature-icon" style="color: #0EA5E9;">💬</div>
            <div class="linkright-feature-text">
              <div class="linkright-feature-title">Smart Engagement</div>
              <div class="linkright-feature-desc">AI-powered comments</div>
            </div>
            <svg class="linkright-feature-arrow" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7.5 15l5-5-5-5" stroke="currentColor" stroke-width="2" fill="none"/>
            </svg>
        </button>
        
          <button class="linkright-feature-btn linkright-feature-btn-disabled" data-feature="job-automation" disabled>
            <div class="linkright-feature-icon" style="background: #F3F4F6; color: #9CA3AF;">🤖</div>
            <div class="linkright-feature-text">
              <div class="linkright-feature-title" style="color: #9CA3AF;">Job Automation</div>
              <div class="linkright-feature-desc" style="color: #D1D5DB;">Auto-apply to jobs</div>
            </div>
        </button>
        
          <button class="linkright-feature-btn linkright-feature-btn-disabled" data-feature="networking" disabled>
            <div class="linkright-feature-icon" style="background: #F3F4F6; color: #9CA3AF;">🤝</div>
            <div class="linkright-feature-text">
              <div class="linkright-feature-title" style="color: #9CA3AF;">Network Discovery</div>
              <div class="linkright-feature-desc" style="color: #D1D5DB;">Smart connections</div>
            </div>
        </button>
        
          <button class="linkright-feature-btn linkright-feature-btn-disabled" data-feature="cold-email" disabled>
            <div class="linkright-feature-icon" style="background: #F3F4F6; color: #9CA3AF;">✉️</div>
            <div class="linkright-feature-text">
              <div class="linkright-feature-title" style="color: #9CA3AF;">Cold Outreach</div>
              <div class="linkright-feature-desc" style="color: #D1D5DB;">Automated DMs</div>
            </div>
        </button>
      </div>
      
        <div class="linkright-footer">
          <a href="#" class="linkright-privacy-link" id="linkright-privacy-link">
          Privacy Policy
        </a>
        </div>
      </div>
    `;
  }

  /**
   * Get settings content
   */
  getSettingsContent() {
    return `
      <div class="linkright-settings">
        <h3>Settings</h3>
        
        <div class="linkright-setting-group">
          <label class="linkright-setting-label">
            <input type="checkbox" ${this.engagementMode ? 'checked' : ''} data-setting="engagement">
            Enable Engagement Mode
          </label>
        </div>
        
        <div class="linkright-setting-group">
          <label class="linkright-setting-label">Webhook URL</label>
          <input type="text" class="linkright-setting-input" placeholder="Enter your webhook URL" value="${window.LINKRIGHT_CONFIG?.WEBHOOK_URL || ''}">
        </div>
        
        <div class="linkright-setting-group">
          <label class="linkright-setting-label">Privacy Policy URL</label>
          <input type="text" class="linkright-setting-input" placeholder="Enter privacy policy URL" value="${window.LINKRIGHT_CONFIG?.PRIVACY_POLICY_URL || ''}">
        </div>
        
        <div class="linkright-setting-actions">
          <button class="linkright-btn linkright-btn-primary">Save Settings</button>
          <button class="linkright-btn linkright-btn-secondary">Reset to Default</button>
        </div>
      </div>
    `;
  }

  /**
   * Get report content
   */
  getReportContent() {
    // COMMENTED OUT FOR LATER USE
    /*
    return `
      <div class="linkright-report-container">
        <div class="linkright-report-field">
          <label>Category</label>
          <select class="linkright-report-select">
            <option value="">Select</option>
            <option value="autofill">Autofill not supported</option>
            <option value="bug">Bug report</option>
            <option value="feature">Feature request</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div class="linkright-report-field">
          <label>Description</label>
          <textarea class="linkright-report-textarea" rows="4" placeholder="Describe the issue..."></textarea>
        </div>
        
        <div class="linkright-report-field">
          <label>Current Page</label>
          <input type="text" class="linkright-report-input" value="${window.location.href}" readonly>
        </div>
        
        <button class="linkright-report-submit">Request autofill support for this page</button>
        
        <div class="linkright-report-footer">
          <div style="font-size: 12px; color: #6B7280; text-align: center;">Version 1.0.0 • SUID LinkRight</div>
        </div>
      </div>
    `;
    */
    
    // Temporary placeholder to keep view functional
    return `
      <div style="padding: 20px; color: #6B7280; font-size: 14px;">
        Report form is temporarily disabled. Coming soon.
      </div>
    `;
  }

  /**
   * Add event listeners to sidebar
   */
  addSidebarEventListeners(sidebar) {
    console.log('LinkRight: Adding sidebar event listeners');
    
    // Header buttons
    const headerButtons = sidebar.querySelectorAll('[data-action]');
    console.log('LinkRight: Found', headerButtons.length, 'header buttons');
    
    headerButtons.forEach(btn => {
      const action = btn.dataset.action;
      console.log('LinkRight: Adding event listener for action:', action);
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const action = e.currentTarget.dataset.action;
        console.log('LinkRight: Header button clicked:', action);
        this.handleHeaderAction(action);
      });
    });
    
    // Tab buttons
    sidebar.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.dataset.tab;
        this.handleTabClick(tab);
      });
    });
    
    // Feature buttons
    sidebar.querySelectorAll('[data-feature]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const feature = e.currentTarget.dataset.feature;
        this.handleFeatureClick(feature);
      });
    });
    
    // Privacy policy link
    const privacyLink = sidebar.querySelector('#linkright-privacy-link');
    if (privacyLink) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
        const url = window.LINKRIGHT_CONFIG?.PRIVACY_POLICY_URL;
        if (url && url !== '[PRIVACY_POLICY_URL]') {
          window.open(url, '_blank');
        }
      });
    }
    
    // Settings save button
    const saveSettingsBtn = sidebar.querySelector('.linkright-btn-primary');
    if (saveSettingsBtn && this.currentView === 'settings') {
      saveSettingsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.saveSettingsHandler(sidebar);
      });
    }
  }

  /**
   * Handle header action clicks
   */
  handleHeaderAction(action) {
    console.log('LinkRight: Header action clicked:', action);
    switch (action) {
      case 'close':
        console.log('LinkRight: Close button clicked - closing sidebar');
        this.closeSidebar();
        break;
      case 'home':
        console.log('LinkRight: Home button clicked');
        this.currentView = 'main';
        this.updateSidebarContent(this.sidebar);
        break;
      case 'settings':
        console.log('LinkRight: Settings button clicked');
        this.currentView = 'settings';
        this.updateSidebarContent(this.sidebar);
        break;
      case 'report':
        console.log('LinkRight: Report button clicked');
        this.currentView = 'report';
        this.updateSidebarContent(this.sidebar);
        break;
    }
  }

  /**
   * Handle tab clicks
   */
  handleTabClick(tab) {
    // Update active tab
    this.sidebar.querySelectorAll('.linkright-tab').forEach(t => t.classList.remove('active'));
    this.sidebar.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    
    // Handle tab-specific logic
    switch (tab) {
      case 'engagement':
        // Already showing engagement content
        break;
      case 'jobs':
        // Show job search content
        break;
      case 'profile':
        // Show profile content
        break;
    }
  }

  /**
   * Handle feature clicks
   */
  handleFeatureClick(feature) {
    switch (feature) {
      case 'engagement':
        this.toggleEngagementMode();
        break;
      default:
        console.log(`Feature ${feature} clicked (coming soon)`);
    }
  }


  /**
   * Toggle sidebar open/closed
   */
  toggleSidebar() {
    if (this.sidebarOpen) {
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
  }

  /**
   * Open sidebar
   */
  openSidebar() {
    console.log('LinkRight: Opening sidebar');
    
    this.currentView = 'main';
    this.extensionActive = true;
    this.miniIconVisible = false;
    this.sidebarOpen = true;
    
    this.sidebar.classList.add('open');
    this.sidebar.style.right = '0';
    
    this.hideMiniIcon();
    this.saveState();
    
    // Notify background to update icon to active/teal
    chrome.runtime.sendMessage({
      type: 'UPDATE_ICON_STATE',
      active: true
    }).catch(() => {
      console.log('Background not available');
    });
    
    console.log('LinkRight: Sidebar opened successfully');
  }

  /**
   * Open sidebar from mini icon click
   */
  openSidebarFromMiniIcon() {
    console.log('LinkRight: Opening sidebar from mini icon');
    this.currentView = 'main'; // Reset to main view
    this.openSidebar();
  }

  /**
   * Close sidebar
   */
  closeSidebar() {
    console.log('LinkRight: Closing sidebar...');
    
    this.sidebar.classList.remove('open');
    this.sidebarOpen = false;
    this.currentView = 'main'; // Reset to main view
    
    // Ensure sidebar is properly hidden
    this.sidebar.style.right = '-352px'; // Use actual pixel value instead of CSS variable
    this.sidebar.style.top = '0px';
    this.sidebar.style.transform = 'translateY(0)';
    
    console.log('LinkRight: Sidebar closed, showing mini icon...');
    
    // Create mini icon when sidebar is closed
    this.showMiniIcon();
    this.extensionActive = true; // Extension is still active (sticky tab visible)
    this.saveState();
    
    console.log('LinkRight: Sidebar close complete');
  }

  /**
   * Toggle Engagement Mode
   */
  async toggleEngagementMode() {
    this.engagementMode = !this.engagementMode;
    
    // Save state
    await this.saveState();
    
    // Update sticky tab active state if mini icon is visible
    if (this.miniIconVisible) {
      const miniIcon = document.getElementById('linkright-mini-icon');
      if (miniIcon) {
        miniIcon.classList.toggle('active', this.engagementMode);
      }
    }
    
    // Update extension icon
    chrome.runtime.sendMessage({
      type: 'UPDATE_ICON_STATE',
      active: this.engagementMode
    }).catch(() => {
      console.log('Background script not available');
    });
    
    // Update UI
    this.updateUIState();
    
    // Start or stop monitoring
    if (this.engagementMode) {
      this.startMonitoring();
    } else {
      this.stopMonitoring();
    }
  }

  /**
   * Update UI to reflect current state
   */
  updateUIState() {
    console.log('LinkRight: Updating UI state, engagement mode:', this.engagementMode);
    
    // Update mini icon active state (for golden border)
    if (this.miniIcon) {
      this.miniIcon.classList.toggle('active', this.engagementMode);
      console.log('LinkRight: Mini icon active state updated:', this.engagementMode);
    }
    
    // Update sidebar content if open
    if (this.sidebarOpen) {
      this.updateSidebarContent(this.sidebar);
      
      // Update engagement status message
      const statusMsg = this.sidebar.querySelector('.linkright-status-message');
      if (statusMsg) {
        statusMsg.textContent = this.engagementMode ? 'Engagement mode is On' : 'Engagement mode is Off';
        statusMsg.classList.toggle('show', this.engagementMode);
        console.log('LinkRight: Status message updated');
      }
      
      // Toggle golden border on Smart Engagement button when active
    const engagementBtn = this.sidebar.querySelector('[data-feature="engagement"]');
    if (engagementBtn) {
        engagementBtn.classList.toggle('active', this.engagementMode);
      }
    }
  }

  /**
   * Setup event listeners
   */
  setupEventListeners() {
    // Global hotkey: Cmd+Shift+L (mac) / Ctrl+Shift+L (win)
    const hotkeyHandler = (e) => {
      // Only when engagement mode is ON and editor is focused
      if (!this.engagementMode) return;
      const ae = document.activeElement;
      if (!this.isEditorElement(ae)) return;
      
      const isL = (e.key === 'l' || e.key === 'L' || e.code === 'KeyL' || e.keyCode === 76);
      const hasCmdOrCtrl = (e.metaKey || e.ctrlKey);
      const isCombo = hasCmdOrCtrl && isL && e.shiftKey; // require Shift
      if (!isCombo) return;
      
      e.preventDefault();
      e.stopPropagation();
      if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
      this.handleCommentClick(ae);
    };
    
    // Use capture to preempt site handlers
    window.addEventListener('keydown', hotkeyHandler, true);

    // Listen for messages from background script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.type === 'ENGAGEMENT_MODE_CHANGED') {
        this.engagementMode = message.enabled;
        this.updateUIState();
        
        if (message.enabled) {
          this.startMonitoring();
      } else {
          this.stopMonitoring();
        }
      } else if (message.type === 'OPEN_SIDEBAR_FROM_EXTENSION') {
        console.log('LinkRight: Extension icon clicked');
        
        // CRITICAL: Always proceed if nothing is open OR if only sticky tab is open
        const sidebarElement = document.getElementById('linkright-sidebar');
        const miniIconElement = document.getElementById('linkright-mini-icon');
        
        // If neither element exists, recreate them
        if (!sidebarElement && !miniIconElement) {
          console.log('LinkRight: DOM elements missing, creating new ones');
          this.setup(); // Reinitialize from scratch
          this.openSidebar();
        }
        // If only sticky tab is visible, open sidebar
        else if (miniIconElement && !sidebarElement) {
          console.log('LinkRight: Only sticky tab visible, opening sidebar');
          this.currentView = 'main';
          this.openSidebar();
        }
        // If sidebar exists and is open, do nothing
        else if (sidebarElement && sidebarElement.classList.contains('open')) {
          console.log('LinkRight: Sidebar already open');
        }
        // Otherwise open sidebar
        else {
          console.log('LinkRight: Opening sidebar from extension click');
          this.currentView = 'main';
          this.openSidebar();
        }
      }
    });
  }

  /**
   * Start monitoring LinkedIn for comment/reply interactions
   */
  startMonitoring() {
    console.log('Starting LinkedIn monitoring...');
    
    // Use MutationObserver to detect when comment boxes appear
    this.observer = new MutationObserver((mutations) => {
      this.checkForCommentBoxes();
    });
    
    this.observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    // Initial check
    this.checkForCommentBoxes();
  }

  /**
   * Stop monitoring
   */
  stopMonitoring() {
    console.log('Stopping LinkedIn monitoring...');
    
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    
    // Remove all listeners from comment boxes
    this.removeAllCommentListeners();
  }

  /**
   * Check for comment/reply boxes and attach listeners
   */
  checkForCommentBoxes() {
    // We no longer auto-trigger on button click; only prepare elements if needed
    const commentButtons = document.querySelectorAll(`
      button[aria-label*="comment" i]:not([data-linkright-processed]),
      button[aria-label*="reply" i]:not([data-linkright-processed])
    `);
    
    commentButtons.forEach(button => {
      button.setAttribute('data-linkright-processed', 'true');
      // Do NOT attach click handler; webhook only via hotkey
    });
  }

  /**
   * Remove all comment listeners (when disabling mode)
   */
  removeAllCommentListeners() {
    const processedElements = document.querySelectorAll('[data-linkright-processed]');
    processedElements.forEach(el => {
      el.removeAttribute('data-linkright-processed');
    });
  }

  /**
   * Handle when user clicks comment/reply button
   */
  async handleCommentClick(clickedElement) {
    if (!this.engagementMode) return;
    
    // Cooldown / in-flight guards
    if (this.webhookInFlight) {
      console.log('LinkRight: Skip webhook - request already in flight');
      return;
    }
    if (Date.now() - this.lastWebhookAt < this.webhookCooldownMs) {
      console.log('LinkRight: Skip webhook - cooldown active');
      return;
    }
    this.webhookInFlight = true;
    
    console.log('Comment/reply clicked');
    
    // Find the active comment/reply editor that just appeared
    const editor = this.findActiveEditor();
    if (!editor) {
      console.log('Could not find active editor');
      this.webhookInFlight = false;
      return;
    }
    
    this.activeCommentBox = editor;
    
    // Find the post or comment being replied to
    const postData = this.extractPostData(editor);
    if (!postData) {
      console.log('Could not extract post data');
      this.webhookInFlight = false;
      return;
    }
    
    // Show loader
    this.showLoader(editor);
    
    // Send to webhook
    try {
      const response = await this.sendToWebhook(postData);
      
      if (response && response.comment) {
        // Auto-paste the comment
        await this.pasteComment(editor, response.comment);
      } else {
        throw new Error('Invalid response from webhook');
      }
    } catch (error) {
      console.error('Error generating comment:', error);
      this.showError(editor, 'Failed to generate comment. Try again.');
    } finally {
      this.hideLoader(editor);
      this.lastWebhookAt = Date.now();
      this.webhookInFlight = false;
    }
  }

  /**
   * Find the currently active comment/reply editor
   */
  findActiveEditor() {
    // Try different selectors for LinkedIn's comment editors
    const selectors = [
      '.comments-comment-box__form .ql-editor',
      '.comments-comment-texteditor .ql-editor',
      '.comments-comment-box-comment__text-editor .ql-editor',
      '[contenteditable="true"][role="textbox"]',
      '.ql-editor[contenteditable="true"]'
    ];
    
    for (const selector of selectors) {
      const editors = document.querySelectorAll(selector);
      // Get the last one (most recently opened)
      if (editors.length > 0) {
        return editors[editors.length - 1];
      }
    }
    
    return null;
  }

  /**
   * Extract post data from the DOM
   */
  extractPostData(editorElement) {
    // Find the parent post or comment container
    const postContainer = editorElement.closest('.feed-shared-update-v2') || 
                         editorElement.closest('.comments-comment-item') ||
                         editorElement.closest('[data-id]');
    
    if (!postContainer) {
      console.log('Could not find post container');
      return null;
    }
    
    // Determine if this is a comment or reply
    const isReply = editorElement.closest('.comments-comment-item') !== null;
    const actionType = isReply ? 'reply' : 'comment';
    
    // Extract post text - handle truncation
    let postText = '';
    
    // Try to find and click "see more" button to expand truncated content
    const seeMoreButton = postContainer.querySelector(
      '.feed-shared-inline-show-more-text__see-more-less-toggle, ' +
      '.feed-shared-text__see-more, ' +
      '.comments-comment-item__see-more-less-toggle'
    );
    
    if (seeMoreButton && !seeMoreButton.getAttribute('data-linkright-expanded')) {
      seeMoreButton.click();
      seeMoreButton.setAttribute('data-linkright-expanded', 'true');
    }
    
    // Now extract the full text
    const textContainers = postContainer.querySelectorAll(
      '.feed-shared-update-v2__description, ' +
      '.feed-shared-text, ' +
      '.comments-comment-item__main-content, ' +
      '.break-words span[dir="ltr"]'
    );
    
    textContainers.forEach(container => {
      const text = container.innerText || container.textContent;
      if (text && text.trim() && text.length > postText.length) {
        postText = text.trim();
      }
    });
    
    // Fallback: get all text from container if still empty
    if (!postText) {
      postText = postContainer.innerText || postContainer.textContent;
      postText = postText.trim();
    }
    
    console.log('Extracted post text:', postText.substring(0, 100) + '...');
    
    return {
      post_text: postText,
      action_type: actionType
    };
  }

  /**
   * Send post data to webhook
   */
  async sendToWebhook(data) {
    const webhookUrl = window.LINKRIGHT_CONFIG.WEBHOOK_URL;
    
    if (webhookUrl === '[WEBHOOK_URL]') {
      throw new Error('Webhook URL not configured. Please set WEBHOOK_URL in config.js');
    }
    
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), window.LINKRIGHT_CONFIG.WEBHOOK_TIMEOUT);
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`Webhook returned ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  /**
   * Auto-copy to clipboard and paste comment into editor
   */
  async pasteComment(editor, comment) {
    // Format the comment - handle line breaks
    const formattedComment = comment
      .replace(/\\n/g, '\n')
      .replace(/\\r\\n/g, '\n')
      .replace(/\\r/g, '\n');
    
    // Copy to clipboard
    try {
      await navigator.clipboard.writeText(formattedComment);
      console.log('Comment copied to clipboard');
    } catch (error) {
      console.warn('Could not copy to clipboard:', error);
    }
    
    // Paste into editor
    if (editor.hasAttribute('contenteditable')) {
      // Clear existing content
      editor.innerHTML = '';
      
      // Insert formatted text with line breaks
      const lines = formattedComment.split('\n');
      lines.forEach((line, index) => {
        const textNode = document.createTextNode(line);
        editor.appendChild(textNode);
        
        if (index < lines.length - 1) {
          editor.appendChild(document.createElement('br'));
        }
      });
      
      // Trigger input event to notify LinkedIn's editor
      editor.dispatchEvent(new Event('input', { bubbles: true }));
      editor.dispatchEvent(new Event('change', { bubbles: true }));
      
      // Focus the editor
      editor.focus();
      
      // Move cursor to end
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(editor);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    
    console.log('Comment pasted successfully');
  }

  /**
   * Show loader animation in comment box
   */
  showLoader(editor) {
    const loader = document.createElement('div');
    loader.className = 'linkright-loader';
    loader.style.cssText = `
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 3px solid var(--muted);
      border-top-color: var(--primary);
      border-radius: 50%;
      animation: linkright-spin 0.8s linear infinite;
      margin: 8px;
    `;
    
    // Add animation if not already added
    if (!document.getElementById('linkright-loader-styles')) {
      const style = document.createElement('style');
      style.id = 'linkright-loader-styles';
      style.textContent = `
        @keyframes linkright-spin {
          to { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
    
    loader.setAttribute('data-linkright-loader', 'true');
    editor.parentElement.insertBefore(loader, editor);
  }

  /**
   * Hide loader animation
   */
  hideLoader(editor) {
    const loader = editor.parentElement.querySelector('[data-linkright-loader]');
    if (loader) {
      loader.remove();
    }
  }

  /**
   * Show error message
   */
  showError(editor, message) {
    const error = document.createElement('div');
    error.className = 'linkright-error';
    error.textContent = message;
    error.style.cssText = `
      color: var(--destructive);
      font-size: 12px;
      padding: 8px;
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid var(--destructive);
      border-radius: 6px;
      margin: 8px 0;
    `;
    
    error.setAttribute('data-linkright-error', 'true');
    editor.parentElement.insertBefore(error, editor);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      error.remove();
    }, 5000);
  }

  /**
   * Show a toast message
   */
  showToast(message, type = 'info') {
    const toastContainer = document.getElementById('linkright-toast-container');
    if (!toastContainer) {
      const container = document.createElement('div');
      container.id = 'linkright-toast-container';
      container.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        display: flex;
        flex-direction: column;
        gap: 10px;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `linkright-toast ${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      padding: 12px 20px;
      border-radius: 8px;
      color: white;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      background-color: var(--${type});
      display: flex;
      align-items: center;
      gap: 10px;
      opacity: 0.9;
      transition: opacity 0.3s ease-in-out;
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /**
   * Save settings handler
   */
  async saveSettingsHandler(sidebar) {
    const engagementCheckbox = sidebar.querySelector('[data-setting="engagement"]');
    const webhookInput = sidebar.querySelector('.linkright-setting-input[placeholder="Enter your webhook URL"]');
    const privacyPolicyInput = sidebar.querySelector('.linkright-setting-input[placeholder="Enter privacy policy URL"]');

    const engagementEnabled = engagementCheckbox.checked;
    const webhookUrl = webhookInput.value.trim();
    const privacyPolicyUrl = privacyPolicyInput.value.trim();

    if (!webhookUrl) {
      this.showToast('Webhook URL cannot be empty.', 'error');
      return;
    }

    if (!privacyPolicyUrl) {
      this.showToast('Privacy Policy URL cannot be empty.', 'error');
      return;
    }

    try {
      await this.saveSettingsToConfig(webhookUrl, privacyPolicyUrl);
      this.showToast('Settings saved successfully!', 'success');
      this.updateUIState(); // Update UI to reflect saved settings
    } catch (error) {
      console.error('Error saving settings:', error);
      this.showToast('Failed to save settings. Please try again.', 'error');
    }
  }

  /**
   * Save settings to window.LINKRIGHT_CONFIG
   */
  async saveSettingsToConfig(webhookUrl, privacyPolicyUrl) {
    return new Promise((resolve) => {
      chrome.storage.local.set({
        WEBHOOK_URL: webhookUrl,
        PRIVACY_POLICY_URL: privacyPolicyUrl
      }, () => {
        window.LINKRIGHT_CONFIG.WEBHOOK_URL = webhookUrl;
        window.LINKRIGHT_CONFIG.PRIVACY_POLICY_URL = privacyPolicyUrl;
        resolve();
      });
    });
  }

  /**
   * Utility: determine if element is an editor we can paste into
   */
  isEditorElement(el) {
    if (!el) return false;
    if (el.tagName === 'TEXTAREA') return true;
    if (el.getAttribute && el.getAttribute('contenteditable') === 'true') return true;
    if (el.classList && el.classList.contains('ql-editor')) return true;
    if (el.getAttribute && el.getAttribute('role') === 'textbox') return true;
    return false;
  }
}

// Initialize the widget when script loads
const linkRightWidget = new LinkRightWidget();