# 🚀 LinkRight - Installation Guide

## Prerequisites
- Chrome browser (or Chromium-based: Edge, Brave, etc.)
- LinkedIn account
- n8n webhook endpoint for AI comment generation

## Installation Steps

### 1️⃣ Configure the Extension

Open `config.js` and update these values:

```javascript
const LINKRIGHT_CONFIG = {
  // YOUR n8n WEBHOOK URL HERE
  WEBHOOK_URL: 'https://your-n8n-instance.com/webhook/generate-comment',
  
  // YOUR PRIVACY POLICY URL HERE (optional)
  PRIVACY_POLICY_URL: 'https://your-website.com/privacy',
  
  // Request timeout in milliseconds
  WEBHOOK_TIMEOUT: 10000,
};
```

### 2️⃣ Load Extension in Chrome

1. Open Chrome
2. Navigate to: `chrome://extensions/`
3. Enable **"Developer mode"** (toggle in top-right)
4. Click **"Load unpacked"**
5. Select the `linkright-job-search-crm` folder
6. Done! ✅

### 3️⃣ Verify Installation

1. Go to [LinkedIn.com](https://www.linkedin.com)
2. Look for the target icon in the top-right corner
3. Click it to open the sidebar
4. All features should be visible

## ⚙️ Setup Your Webhook

Your webhook endpoint needs to:

**Accept this format:**
```json
{
  "post_text": "LinkedIn post text here...",
  "action_type": "comment" or "reply"
}
```

**Return this format:**
```json
{
  "comment": "AI-generated comment text here..."
}
```

### Example n8n Workflow:

1. **Webhook** node (POST endpoint)
2. **Set** node (extract post_text)
3. **OpenAI/Claude** node (generate comment)
4. **Respond to Webhook** node (return formatted response)

## 🎯 First Use

1. **Activate Engagement Mode**
   - Click the mini icon
   - Click "Engagement" button
   - Or press `Alt+L` (Windows) / `Option+L` (Mac)

2. **Test It**
   - Go to any LinkedIn post
   - Click "Comment" button
   - Watch the magic happen! ✨

3. **Edit & Post**
   - Review the AI-generated comment
   - Edit if needed
   - Click LinkedIn's "Post" button

## ❓ Need Help?

See [README.md](README.md) for:
- Full documentation
- Troubleshooting guide
- API specifications
- Advanced configuration

## 🐛 Common Issues

### "Extension not appearing"
- Refresh LinkedIn page
- Check if extension is enabled in `chrome://extensions/`

### "Webhook not responding"
- Verify WEBHOOK_URL in config.js
- Test webhook with curl/Postman
- Check webhook returns correct JSON format

### "Comment not pasting"
- Check browser console for errors
- Verify webhook response includes "comment" field
- Try refreshing the page

---

**Ready to automate your LinkedIn job search! 🚀**