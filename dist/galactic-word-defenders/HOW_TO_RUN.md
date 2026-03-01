# 🎮 How to Run Galactic Word Defenders

## Option 1: Quick Play (No Installation)

**Just open the standalone file:**
1. Navigate to the `galactic-word-defenders` folder
2. Double-click `game-standalone.html`
3. Play immediately in your browser!

✅ No installation needed  
✅ Works offline  
✅ Single file, everything included

---

## Option 2: Development Mode (With Hot Reload)

**For making changes to the game:**

### Step 1: Install Node.js
Download from: https://nodejs.org

### Step 2: Install Dependencies
Open Terminal/Command Prompt in the project folder:
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```
Game opens automatically at http://localhost:3000

Changes to code auto-reload in the browser!

---

## Option 3: Production Build (Standalone Folder)

**Creates a distributable build:**

```bash
npm run build
```

This creates a `dist/` folder containing:
- ✅ Fully bundled JavaScript (includes Phaser)
- ✅ All game assets copied
- ✅ Zero external dependencies
- ✅ Works completely offline

### Deploy the Build:

**Local testing:**
```bash
npm run preview
```

**Copy to USB/share:**
Just copy the entire `dist/` folder anywhere!

**Upload to web:**
- Drag `dist/` to Netlify Drop
- Upload to GitHub Pages
- Host on school server

---

## System Requirements

| Requirement | Development | Production Build |
|-------------|-------------|------------------|
| Node.js | ✅ Required | ❌ Not needed |
| Internet | ✅ For npm install | ❌ Not needed |
| Browser | Modern browser | Modern browser |
| Storage | ~100 MB | ~5 MB |

---

## Common Issues

### "npm not found"
Install Node.js from https://nodejs.org

### "Module not found"
Run `npm install` first

### Build doesn't work
1. Run `npm run clean`
2. Run `npm run build` again

### Game won't start
- Check browser console (F12)
- Try a different browser (Chrome recommended)
- Make sure you're using a web server (not file://) for the build

---

## Quick Commands

```bash
npm run dev      # Start development server
npm run build    # Create standalone build
npm run preview  # Test the build locally
npm run clean    # Delete dist folder
```

---

**Need help?** Open an issue or check the README.md for more details!
