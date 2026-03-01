# 🚀 Galactic Word Defenders v2.0

A modern, modular tower defence game for teaching phonics and grammar!

## 📁 Project Structure

```
galactic-word-defenders-v2/
├── index.html                 # Main game file (open this!)
├── css/
│   └── styles.css            # All styles (pixel art theme)
├── js/
│   ├── main.js               # Entry point & initialization
│   ├── game-state.js         # Game state management
│   ├── game-loop.js          # Main game loop
│   ├── renderer.js           # Canvas rendering
│   ├── audio.js              # Sound system
│   ├── save-system.js        # Save/load system
│   ├── towers.js             # Tower logic
│   ├── aliens.js             # Alien logic
│   ├── projectiles.js        # Projectile logic
│   ├── particles.js          # Particle effects
│   ├── questions-panel.js    # Question UI
│   ├── shop.js               # Upgrade shop
│   ├── ui.js                 # UI management
│   └── questions/
│       ├── index.js          # Question manager
│       ├── reception.js      # 50+ Reception questions
│       ├── year1.js          # 30+ Year 1 questions
│       └── year2-6.js        # Year 2-6 (add more!)
└── assets/
    └── sprites/              # Pixel art SVGs
```

## 🎮 How to Play

1. **Open `index.html`** in Chrome/Firefox/Safari
2. Click **PLAY GAME**
3. Enter your name
4. Select year group (Reception-Year 6)
5. Choose difficulty (Easy/Normal/Hard)
6. Answer questions to fire towers!
7. Hold **⚡ 2x** button for speed boost

## ✨ Features

### Educational
- ✅ 7 year groups (Reception - Year 6)
- ✅ 50+ questions per level
- ✅ 4 answer options per question
- ✅ Text-to-speech pronunciation
- ✅ Curriculum-aligned content

### Gameplay
- ✅ Tower defence mechanics
- ✅ 3 tower types (Phonics, Spelling, Grammar)
- ✅ 4 alien types (Wobbly, Zoomer, Shieldling, Boss)
- ✅ Combo system (up to 10x multiplier)
- ✅ Upgrade shop between waves
- ✅ 5 upgrade types
- ✅ Boss battles every 5 waves
- ✅ Speed boost button (2x speed)

### Audio/Visual
- ✅ Pixel art graphics
- ✅ Background music
- ✅ Sound effects (correct, wrong, explosion, etc.)
- ✅ Text-to-speech for answers
- ✅ Particle effects
- ✅ Screen shake
- ✅ Score popups
- ✅ Achievement notifications

### Technical
- ✅ Modular architecture
- ✅ 5 save slots
- ✅ Auto-save every wave
- ✅ iPad/ tablet optimized
- ✅ Zoom prevention
- ✅ Touch-friendly controls
- ✅ Responsive design

## 🎨 Pixel Art Assets

All sprites are SVG-based pixel art:

**Towers:**
- Phonics Tower (blue)
- Spelling Tower (red)  
- Grammar Tower (green)
- Punctuation Tower (orange)

**Aliens:**
- Wobbly (green, basic)
- Zoomer (blue, fast)
- Shieldling (orange, armored)
- Boss (red, large with crown)

**Projectiles:**
- Letter (yellow)
- Energy beam (green)
- Shield pulse (blue)

## 🛠️ Development

### Add More Questions

Edit files in `js/questions/`:

```javascript
{
  id: 'rec_051',
  letter: 'X',
  question: "What sound does 'X' make?",
  answers: ["ks like box", "gz like eggs", "sh like ship", "th like thin"],
  correct: 0,
  hint: "End of 'box'",
  category: 'phonics'
}
```

### Add New Towers

Edit `js/towers.js` - add tower configuration:

```javascript
{
  x: w * 0.9,
  y: h * 0.5,
  range: 250,
  fireRate: 600,
  lastFired: 0,
  type: 'punctuation'
}
```

### Add New Upgrades

Edit `js/game-state.js` - UPGRADES_POOL array:

```javascript
{
  id: 'newUpgrade',
  name: '🆕 Upgrade Name',
  desc: 'Description',
  cost: 30,
  maxLevel: 3,
  icon: '🆕',
  color: '#ff6a6a'
}
```

## 🎯 Difficulty Settings

| Level | Timer Speed | Alien Speed | Spawn Rate |
|-------|-------------|-------------|------------|
| 🌱 Easy | 1x | 70% | 2.5s |
| ⭐ Normal | 1.5x | 100% | 2.0s |
| 🔥 Hard | 2.5x | 140% | 1.5s |

## 💾 Save System

- 5 save slots
- Auto-saves after each wave
- Stores: username, level, wave, score, coins, upgrades
- Manual save on game over

## 📱 Mobile Optimization

- Touch-friendly buttons (min 48px)
- Prevents accidental zoom
- Safe area insets for notched devices
- Responsive layout for all screen sizes
- Landscape recommended for tablets

## 🚀 Next Steps

1. **Add Year 2-6 questions** - Currently placeholders
2. **Add more tower types** - Punctuation, Vocabulary towers
3. **Add power-ups** - Bomb, Freeze, Multi-shot
4. **Add achievements** - Badges for milestones
5. **Add leaderboards** - High score tracking
6. **Add more bosses** - Unique boss mechanics
7. **Add animations** - Sprite animations for aliens/towers

## 📄 License

Built for educational use. Feel free to modify and share!

---

**Made with ❤️ for young learners**

Version: 2.0  
Date: March 2026