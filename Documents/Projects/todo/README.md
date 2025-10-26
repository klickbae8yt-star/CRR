# 🎯 LinkRight - Job Search CRM

A production-grade Chrome extension (Manifest V3) that supercharges your LinkedIn job search with AI-powered engagement automation.

![Version](https://img.shields.io/badge/version-1.0.0-teal)
![License](https://img.shields.io/badge/license-MIT-gold)
![Manifest](https://img.shields.io/badge/manifest-v3-blue)

## ✨ Features

### 🎯 Current Features
- **Smart Widget UI**: Beautiful teal-and-gold sidebar interface with target icon
- **Engagement Mode**: Toggle AI-powered comment automation on/off
- **Auto-Comment Generation**: Automatically generates contextual comments via webhook
- **Full Post Extraction**: Intelligently captures complete post text, even when truncated
- **Clipboard Integration**: Auto-copies and pastes generated comments
- **Keyboard Shortcut**: Quick toggle with `Alt+L` (Windows) or `Option+L` (Mac)
- **Persistent State**: Mode settings saved across browser sessions
- **Visual Indicators**: Blinking status dot shows active mode
- **Error Handling**: Graceful fallbacks for network issues and timeouts

### 🚧 Coming Soon
- Job Application Automation
- Networking Tools
- Cold Email/DM Automation
- Application Tracking
- Interview Scheduling

## 🎨 Design

- **Primary Colors**: Deep Teal (#006666) with Gold (#FFD700) accents
- **Secondary Colors**: Medium Teal (#2699B8), Coral (#E87D63), Success Green (#22C55E)
- **Icon**: Target/bullseye symbol representing job search precision
- **UI Style**: Modern, professional, job-search focused
- **Position**: Fixed sidebar on LinkedIn's right side
- **Dark Mode**: Full support with optimized color palette

## 📋 Prerequisites

- Google Chrome or Chromium-based browser (Edge, Brave, etc.)
- Active LinkedIn account
- n8n webhook endpoint (or compatible API) for AI comment generation
- Privacy policy URL (optional)

## 🚀 Installation

### Step 1: Clone or Download

```bash
git clone <repository-url>
cd linkright-job-search-crm
```

Or download and extract the ZIP file.

### Step 2: Configure Webhook and URLs

Edit `config.js` and replace the placeholder values:

```javascript
const LINKRIGHT_CONFIG = {
  // Replace with your actual n8n webhook URL
  WEBHOOK_URL: 'https://your-n8n-instance.com/webhook/generate-comment',
  
  // Replace with your privacy policy URL
  PRIVACY_POLICY_URL: 'https://your-website.com/privacy-policy',
  
  // Webhook timeout (default: 10 seconds)
  WEBHOOK_TIMEOUT: 10000,
};
```

### Step 3: Load Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top-right corner)
3. Click **Load unpacked**
4. Select the `linkright-job-search-crm` directory
5. The extension should now appear in your extensions list

### Step 4: Verify Installation

1. Navigate to [LinkedIn](https://www.linkedin.com)
2. You should see a target icon in the top-right corner
3. Click the icon to open the sidebar
4. All buttons should be disabled by default (greyed out)

## 🎮 Usage

### Activating Engagement Mode

**Option 1: Via Sidebar**
1. Click the LinkRight target icon (top-right)
2. Click the **Engagement** button
3. Status message will show "Engagement mode is On"
4. The grey status dot will change to a blinking green dot

**Option 2: Via Keyboard**
- Press `Alt+L` (Windows/Linux) or `Option+L` (Mac)
- Mode toggles on/off instantly

### Using Auto-Comment Generation

1. **Activate Engagement Mode** (see above)
2. Browse LinkedIn as normal
3. When you want to comment on a post or reply to a comment:
   - Click the comment/reply button
   - A loader animation will appear
   - Wait 2-10 seconds for AI to generate a comment
   - The comment will automatically paste into the input box
4. **Review and edit** the generated comment if needed
5. **Click LinkedIn's Comment/Reply button** to post

### Deactivating

- Click the Engagement button again, or
- Press `Alt+L` / `Option+L` again

When deactivated:
- Blinking dot returns to static grey
- No webhooks are triggered
- LinkedIn works normally

## 🔧 Webhook API Specification

Your webhook endpoint should accept POST requests with the following format:

### Request

```json
POST https://your-webhook-url.com/endpoint
Content-Type: application/json

{
  "post_text": "Full text of the LinkedIn post or comment being replied to",
  "action_type": "comment" or "reply"
}
```

### Response

```json
{
  "comment": "AI-generated comment text\n\nCan include line breaks\n\nAnd formatting"
}
```

### Requirements

- **Endpoint**: Must accept POST requests
- **Content-Type**: `application/json`
- **Response Time**: Should respond within 10 seconds (configurable)
- **Line Breaks**: Use `\n` for line breaks in the comment text
- **Error Handling**: Return 200 OK with the expected JSON structure

### Example n8n Workflow

1. **Webhook Node**: Receive POST request
2. **Function/Code Node**: Extract `post_text` from payload
3. **HTTP Request Node**: Send to OpenAI/Claude/your AI service
4. **Response Node**: Return formatted comment

## 🛠️ Development

### File Structure

```
linkright-job-search-crm/
├── manifest.json           # Extension manifest (Manifest V3)
├── config.js              # Configuration file (webhook URL, etc.)
├── background.js          # Service worker for keyboard shortcuts
├── content.js             # Main script injected into LinkedIn
├── sidebar.css            # Styles for the sidebar UI
├── icons/                 # Extension icons
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
│   ├── icon.svg           # Source SVG
│   └── generate_icons.py  # Icon generation script
└── README.md              # This file
```

### Key Components

#### `content.js` - LinkRightWidget Class
- **UI Management**: Creates and manages mini icon and sidebar
- **State Management**: Handles engagement mode toggle
- **DOM Monitoring**: Watches for comment/reply button clicks
- **Post Extraction**: Intelligently extracts full post text (handles truncation)
- **Webhook Communication**: Sends requests and handles responses
- **Clipboard & Paste**: Auto-copies and pastes generated comments

#### `background.js` - Service Worker
- **Keyboard Shortcuts**: Listens for `Alt+L` / `Option+L`
- **State Persistence**: Manages chrome.storage for mode state
- **Cross-Tab Sync**: Notifies all LinkedIn tabs of state changes

#### `sidebar.css` - Styles
- **Animations**: Blinking status dot, smooth transitions
- **Responsive**: Adapts to different screen sizes
- **Tooltips**: Contextual help on hover
- **Dark Mode**: Full dark mode support with CSS custom properties

### Permissions

The extension requires:
- `storage` - Save engagement mode state
- `clipboardWrite` - Auto-copy comments to clipboard
- `https://www.linkedin.com/*` - Inject scripts and styles into LinkedIn

## 🧪 Testing

### Manual Testing Checklist

- [ ] Extension loads without errors
- [ ] Target icon appears on LinkedIn
- [ ] Sidebar opens/closes smoothly
- [ ] All buttons except Engagement are disabled
- [ ] "Coming soon!" tooltips appear on disabled buttons
- [ ] Engagement button toggles correctly
- [ ] Status dot changes from grey to blinking green
- [ ] Keyboard shortcut (`Alt+L`) works
- [ ] Comment button click triggers webhook
- [ ] Full post text is extracted (including truncated posts)
- [ ] Loader animation appears during request
- [ ] Comment is pasted into input box
- [ ] Line breaks are preserved
- [ ] Error handling works (timeout, network error)
- [ ] State persists after browser restart
- [ ] Mode can be toggled while sidebar is closed
- [ ] Privacy policy link opens correct URL

### Debugging

Open Chrome DevTools on LinkedIn:
1. Press `F12` or `Ctrl+Shift+I`
2. Check Console for `LinkRight` messages
3. Look for errors or warnings

View extension background logs:
1. Go to `chrome://extensions/`
2. Find LinkRight extension
3. Click "service worker" link
4. View console logs

## 🔒 Privacy & Security

- **No Data Collection**: Extension does not collect or store personal data
- **Webhook Only**: Post text is only sent to your configured webhook
- **Local Storage**: Mode state stored locally in browser
- **No Third-Party Services**: Direct communication with your webhook
- **User Control**: All automation requires explicit activation

## 🐛 Troubleshooting

### Extension doesn't appear on LinkedIn
- Verify extension is enabled in `chrome://extensions/`
- Refresh the LinkedIn page
- Check for console errors

### Webhook not responding
- Verify `WEBHOOK_URL` in `config.js` is correct
- Check webhook endpoint is accessible (test with curl/Postman)
- Review network errors in DevTools
- Ensure webhook responds within 10 seconds

### Comment not pasting correctly
- Check if LinkedIn's editor structure has changed
- Verify comment text includes proper line breaks (`\n`)
- Try manually pasting to test clipboard functionality

### Post text extraction fails
- LinkedIn may have changed their DOM structure
- Check console for extraction warnings
- Open an issue with LinkedIn URL and post type

### Keyboard shortcut not working
- Verify no other extension uses `Alt+L` / `Option+L`
- Check Chrome shortcuts in `chrome://extensions/shortcuts`
- Try clicking Engagement button instead

## 🤝 Contributing

Contributions welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly on LinkedIn
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🙏 Acknowledgments

- Icons generated with Python Pillow library
- Inspired by modern job search automation tools
- Built with modern Web Extensions API (Manifest V3)

## 📞 Support

For issues, questions, or feature requests:
- Open an issue on GitHub
- Check existing issues for solutions
- Review troubleshooting section above

## 🗺️ Roadmap

- [x] Engagement Mode with AI comments
- [ ] Job Application Automation features
- [ ] Application Tracking System
- [ ] Interview Scheduling Tools
- [ ] Cold Email/DM automation
- [ ] Custom AI model selection
- [ ] Comment templates for different job types
- [ ] Analytics dashboard
- [ ] Multi-language support

---

**Built with ❤️ and ☕ by the LinkRight team**

*Happy job hunting! 🎯*