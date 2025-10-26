# ⚡ LinkRight - 60 Second Setup

## Step 1: Configure (30 seconds)

Open `config.js` and replace these two lines:

```javascript
WEBHOOK_URL: 'https://your-n8n-webhook.com/generate-comment',
PRIVACY_POLICY_URL: 'https://your-website.com/privacy',
```

## Step 2: Install (20 seconds)

1. Chrome → `chrome://extensions/`
2. Enable "Developer mode" (top-right toggle)
3. Click "Load unpacked"
4. Select `linkright-job-search-crm` folder
5. Done! ✅

## Step 3: Use (10 seconds)

1. Go to [LinkedIn](https://www.linkedin.com)
2. Click target icon (top-right)
3. Click "Engagement" button
4. Try commenting on a post! 🎉

---

## Your Webhook Must Return:

```json
{
  "comment": "Your AI-generated comment here"
}
```

**That's it!** 🚀

See [INSTALLATION.md](INSTALLATION.md) or [README.md](README.md) for details.