# 🚀 Galactic Word Defenders - Build Guide

## Development vs Production

### Development (with hot reload)
```bash
npm install
npm run dev
```

### Production Build (standalone - no external dependencies)
```bash
npm install
npm run build
```

The `dist/` folder contains a **fully self-contained build** that runs without any external dependencies:
- All JavaScript bundled into single file
- All assets copied locally
- No CDN required
- Works completely offline
- Can be deployed to any static host

## Deploying the Build

### Option 1: Local Testing
```bash
npm run preview
```

### Option 2: Copy to Web Server
Simply copy the entire `dist/` folder to your web server. Open `dist/index.html` in a browser.

### Option 3: GitHub Pages
```bash
# Install gh-pages if needed
npm install -D gh-pages

# Deploy
npm run build
npx gh-pages -d dist
```

### Option 4: Netlify/Vercel
Drag and drop the `dist/` folder to Netlify Drop or connect your repo to Vercel.

## File Structure After Build

```
galactic-word-defenders/
├── dist/                    # ← PRODUCTION BUILD (standalone)
│   ├── index.html           # Single entry point
│   ├── assets/
│   │   ├── index-[hash].js  # Bundled app code (includes Phaser)
│   │   ├── sprites/         # Game sprites
│   │   ├── backgrounds/     # Background images
│   │   └── audio/           # Sound files
│   └── [other assets]
├── src/                     # ← SOURCE CODE (development)
├── assets/                  # ← SOURCE ASSETS
├── package.json
├── vite.config.js
└── README.md
```

## Build Size Optimization

The production build includes:
- Phaser 3 (~180KB gzipped)
- Your game code
- All assets

To reduce build size:
1. Use sprite sheets instead of individual images
2. Compress audio files (use .mp3 or .ogg)
3. Remove unused question data

## Offline Support

The built version works completely offline once loaded. For full PWA support with caching, add a service worker in a future update.

---

**Quick Start for Parents/Teachers:**
1. Download the `dist/` folder
2. Open `index.html` in Chrome, Edge, or Safari
3. No installation needed - works immediately!
