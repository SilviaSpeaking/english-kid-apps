# 🚀 Galactic Word Defenders

> **Phase 1 Complete** - Playable prototype with Reception Phase 2 phonics

## ⚡ Quick Play (Choose One)

### Option A: Instant Play (No Installation)
**Just open `game-standalone.html` in your browser!**
- Single file, everything included
- Works offline
- No installation needed

### Option B: Full Build (For Distribution)
```bash
npm install
npm run build
```
Creates `dist/` folder - **zero external dependencies**, deploy anywhere!

---

## Development

## What's Included

✅ **Phase 1 Core Engine:**
- Tower defence gameplay with 3 towers
- Alien waves with increasing difficulty
- 20 Reception Phase 2 letter sound questions
- Question panel with timer and hints
- Score, lives, coins system
- localStorage save/load
- Responsive design (desktop, tablet, mobile)
- **Standalone build** - no CDN, no internet required

🎯 **Educational Content:**
- Reception Phase 2 letters: s, a, t, p, i, n, m, d, g, o, c, k, ck, e, u, r, h, b, f, l
- Multiple choice questions with hints
- Adaptive question weighting (questions answered incorrectly appear more often)

## Game Controls

| Action | Input |
|--------|-------|
| Select answer | Click/Tap buttons |
| View hint | Click 💡 button (available after wrong answer) |
| Pause | Click ⏸ button |

## Project Structure

```
galactic-word-defenders/
├── dist/              # Production build (standalone)
├── src/
│   ├── scenes/        # Phaser scenes (Boot, Title, Battle)
│   ├── systems/       # Game systems (Questions, Save)
│   ├── data/          # Question databases
│   └── main.js        # Entry point
├── assets/            # Images, audio, fonts
├── index.html         # Development HTML
├── package.json
└── vite.config.js
```

## Technology Stack

- **Game Engine:** Phaser 3.80 (bundled in build)
- **Build Tool:** Vite 5 (fast HMR, optimized builds)
- **Storage:** localStorage (browser-native, no backend)
- **Font:** Nunito (Google Fonts - loaded via CDN in dev, system font fallback in build)

## Deployment Options

### 1. Local Use
Open `dist/index.html` directly in a browser

### 2. Web Server
Upload `dist/` folder to any web host

### 3. GitHub Pages
```bash
npm install -D gh-pages
npm run build
npx gh-pages -d dist
```

### 4. Netlify Drop
Drag `dist/` folder to netlify.com/drop

## Curriculum Alignment

**UK National Curriculum - Letters and Sounds Phase 2:**
- Single letter sounds (19 letters)
- CVC word preparation
- Tricky word introduction (coming in Phase 2)

**Target Age:** 4-5 years (Reception)

## Next Phases

| Phase | Content | Status |
|-------|---------|--------|
| Phase 1 | Core engine, Reception Phase 2 | ✅ Complete |
| Phase 2 | Full Reception (5 planets, boss battle) | Planned |
| Phase 3 | Year 1 & 2 galaxies, new towers | Planned |
| Phase 4 | Year 3 & 4, upgrade shop | Planned |
| Phase 5 | Year 5 & 6, word bank | Planned |
| Phase 6 | Polish, PWA, accessibility | Planned |

## Development

### Add New Questions
Edit `src/data/reception/phase2_letters.js`:
```javascript
{
  id: "rec_ph2_021",
  question: { text: "What sound does this letter make?" },
  answers: [
    { text: "zzz", correct: true },
    { text: "sss", correct: false }
  ],
  hint: { text: "Like a buzzing bee" }
}
```

### Modify Game Balance
Edit `src/scenes/BattleScene.js`:
- `alien.speed` - Alien movement speed
- `tower.fireRate` - Tower firing frequency (ms)
- `stationHealth` - Station HP before game over

## Troubleshooting

**Build fails:** Run `npm run clean` then `npm run build`

**Game won't load:** Check browser console (F12) for errors

**Questions not showing:** Verify question data in `src/data/`

**Assets missing:** Run `npm run build` to copy assets to dist

## License

Built for educational use. Feel free to modify for your classroom or home school!

---

**Made with ❤️ for young learners**
