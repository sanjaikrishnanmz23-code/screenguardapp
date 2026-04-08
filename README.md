# ScreenGuard — Screen Time Control App
### College Mini Project | Web Application

---

## 📁 Complete File List (put ALL of these in one folder)

```
screentime-app/
├── theme.js             ← Dark/Light mode engine (REQUIRED by all pages)
├── login.html           ← Login page
├── dashboard.html       ← Main dashboard
├── apps.html            ← App usage monitor
├── limits.html          ← Time limits (saves to localStorage)
├── stats.html           ← Statistics & graphs
├── notifications.html   ← Alerts & notification settings
├── focus.html           ← Pomodoro focus timer
├── about.html           ← About & how-to-use guide
└── README.md            ← This file
```

> ⚠️ All 9 files must be in the SAME folder. Do NOT put any file in a subfolder.

---

## 🚀 How to Run

1. Install **VS Code** from https://code.visualstudio.com
2. Install **Live Server** extension (by Ritwick Dey) — press Ctrl+Shift+X to find it
3. Click **File → Open Folder** → select your `screentime-app` folder
4. Click `login.html` in the left panel
5. Click **"Go Live"** at the bottom right of VS Code
6. Browser opens at `http://127.0.0.1:5500/login.html`

> ⚠️ Always use Go Live. Never double-click HTML files directly.

---

## 🔐 Login

| Method | Details |
|--------|---------|
| Admin  | admin@screenguard.com / admin123 |
| User   | Any email + 8+ char password |
| Google | Paste Client ID from Google Cloud Console |

---

## 📄 Pages

| Page | Description |
|------|-------------|
| login.html | Login with Admin, Google, Apple |
| dashboard.html | Live stats, charts, alerts |
| apps.html | App usage monitoring table |
| limits.html | Per-app time limits with Save/Cancel |
| stats.html | Weekly/monthly/overall graphs |
| notifications.html | Alert centre & settings |
| focus.html | Pomodoro focus timer |
| about.html | How-to guide & study tips |

---

## 💾 What persists after logout (localStorage)

- App time limits & slider values
- App enable/disable toggles
- Added and removed apps
- Dark / Light mode theme preference
- Google user name & email

To reset: open browser Console (F12) and type `localStorage.clear()`
