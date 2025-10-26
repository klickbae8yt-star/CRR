# LinkedIn Automation Runner — One‑Page Runbook (Operator)

Goal: Start/stop the automation that finds high‑engagement posts on LinkedIn and posts AI‑generated comments based on thresholds you set.

—

## One‑time setup

1. Install the LinkedIn Assistant browser extension (latest build).
2. Install and run the LinkedIn Automation Runner app on your machine. When it opens, it shows:
   - “Runner listening on http://127.0.0.1:5000”
   - “Your connection token: sk‑XXXXXX”
3. Open the extension → Options → paste the Runner token under “Runner token.” Leave address as 127.0.0.1:5000 unless told otherwise.

—

## Daily workflow

1. Open a browser, log in to LinkedIn, and go to the feed you want to use.
2. Open the extension popup and set thresholds:
   - Minimum Reactions (e.g., 50)
   - Minimum Comments (e.g., 10)
   - Minimum Reposts (e.g., 1)
   - Maximum Actions (how many posts to comment this session, e.g., 20)
   - Mode: start with Semi‑auto (safer)
3. Ensure the Runner app shows “listening.”
4. Start the run:
   - Click Start in the extension, or
   - Press the hotkey: macOS `⌘ + Shift + Alt + X` · Windows/Linux `Ctrl + Shift + Alt + X`
5. Monitor progress in the extension (status, actions done). The Runner stops automatically at the Max Actions.
6. Stop anytime by pressing the hotkey again or clicking Stop.
7. After the run, click “Download logs” to save a JSON record of actions.

—

## What the automation does

• Scans posts in your current LinkedIn feed view
• Reads metrics (reactions, comments, reposts) per post
• If metrics meet your thresholds, requests an AI comment from your webhook
• Pastes the comment and (Semi‑auto) waits for confirmation, or (Full‑auto) submits automatically
• Waits randomized delays between actions to reduce patterns

—

## Troubleshooting

• Runner not found/token missing: Start the Runner app, copy the token, paste into extension options.
• Login required: If the run stops with “login_required,” sign in to LinkedIn and start again.
• Selector error (can’t read counts): Stop the run, refresh the feed, try again. If persistent, share logs with the team.
• Webhook slow/failing: The runner retries a few times; otherwise it skips the post and continues.
• Emergency stop: Use Stop in the extension or close the Runner app window.

—

## Safety, rate limits, and ToS

• Start with Semi‑auto mode; confirm each submit until you’re comfortable.
• Keep Max Actions modest (e.g., 10–20) and vary session timing. Take breaks between runs.
• Use a staging or test account first.
• Follow LinkedIn’s Terms of Service and policies. Operate responsibly and avoid spammy behavior.

—

## Privacy & logs

• Logs are stored locally on your machine (default: ~/.linkedin‑runner/logs/). They include timestamps, post IDs, metric counts, and a short comment snippet.
• Logs do not contain your runner token or webhook secrets.

—

## Quick checklist before pressing Start

☐ Runner shows “listening” and you pasted the token in extension options
☐ You are logged in to LinkedIn, feed is visible
☐ Thresholds and Max Actions set (Semi‑auto recommended)
☐ Hotkey known (⌘/Ctrl + Shift + Alt + X)
