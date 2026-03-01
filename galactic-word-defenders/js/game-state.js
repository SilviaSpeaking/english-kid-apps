/**
 * Game State Management
 */

// Game state object
const gameState = {
  lives: 3,
  score: 0,
  coins: 0,
  wave: 1,
  stationHealth: 100,
  aliens: [],
  towers: [],
  projectiles: [],
  particles: [],
  isAnswering: false,
  questionAnswered: false,
  waveInProgress: false,
  inShop: false,
  speedBoost: false,
  bossActive: false,
  spawnTimer: 0,
  spawnInterval: 2000,
  lastTime: 0,
  combo: 0,
  maxCombo: 0,
  comboTimer: 0,
  screenShake: 0,
  towerTargets: [null, null, null],
  currentLevel: 'reception',
  difficulty: 'normal',
  currentSaveSlot: -1,
  playerUsername: '',
  upgrades: { slowAliens: 0, powerHits: 0, bulletSpeed: 0, towerRange: 0, stationHeal: 0 },
  askedQuestions: [],
  currentQuestion: null,
  firingTowerIndex: 0,
  width: 0,
  height: 0,
  pathPoints: [],
  aliensRemaining: 0,
  shopPicksRemaining: 0,
  questionTimer: null
};

// Difficulty settings
const DIFFICULTY_SETTINGS = {
  easy: { timerSpeed: 1, alienSpeed: 0.7, spawnRate: 2500, label: '🌱 Easy', color: '#4aff6a' },
  normal: { timerSpeed: 1.5, alienSpeed: 1, spawnRate: 2000, label: '⭐ Normal', color: '#4a9eff' },
  hard: { timerSpeed: 2.5, alienSpeed: 1.4, spawnRate: 1500, label: '🔥 Hard', color: '#ff6a6a' }
};

// Upgrade definitions
const UPGRADES_POOL = [
  { id: 'slowAliens', name: '🐌 Slow Aliens', desc: 'Aliens move 20% slower', cost: 20, maxLevel: 3, icon: '🐌', color: '#4aff6a' },
  { id: 'powerHits', name: '💪 Power Hits', desc: 'Projectiles do more damage', cost: 25, maxLevel: 3, icon: '💪', color: '#ff6a6a' },
  { id: 'bulletSpeed', name: '⚡ Fast Bullets', desc: 'Projectiles travel faster', cost: 15, maxLevel: 3, icon: '⚡', color: '#ffa500' },
  { id: 'towerRange', name: '📡 Tower Range', desc: 'Towers see farther', cost: 20, maxLevel: 3, icon: '📡', color: '#4a9eff' },
  { id: 'stationHeal', name: '❤️ Repair Station', desc: 'Restore 30 HP', cost: 25, maxLevel: 99, icon: '❤️', color: '#ff4a4a' }
];

// Level definitions
const LEVELS = [
  { id: 'reception', name: 'Reception', icon: '🌟', desc: 'Ages 4-5 | Letter Sounds', color: '#4aff6a' },
  { id: 'year1', name: 'Year 1', icon: '🌙', desc: 'Ages 5-6 | Digraphs', color: '#4a9eff' },
  { id: 'year2', name: 'Year 2', icon: '☀️', desc: 'Ages 6-7 | Grammar', color: '#ffa500' },
  { id: 'year3', name: 'Year 3', icon: '🌍', desc: 'Ages 7-8 | Prefixes', color: '#aa6aff' },
  { id: 'year4', name: 'Year 4', icon: '🪐', desc: 'Ages 8-9 | Homophones', color: '#ff6a6a' },
  { id: 'year5', name: 'Year 5', icon: '⭐', desc: 'Ages 9-10 | Clauses', color: '#ffaaff' },
  { id: 'year6', name: 'Year 6', icon: '🌌', desc: 'Ages 10-11 | Advanced', color: '#aaffff' }
];

/**
 * Reset game state
 */
function resetGameState() {
  gameState.lives = 3;
  gameState.score = 0;
  gameState.coins = 0;
  gameState.wave = 1;
  gameState.stationHealth = 100;
  gameState.aliens = [];
  gameState.projectiles = [];
  gameState.particles = [];
  gameState.isAnswering = false;
  gameState.questionAnswered = false;
  gameState.waveInProgress = false;
  gameState.inShop = false;
  gameState.speedBoost = false;
  gameState.bossActive = false;
  gameState.spawnTimer = 0;
  gameState.combo = 0;
  gameState.maxCombo = 0;
  gameState.comboTimer = 0;
  gameState.screenShake = 0;
  gameState.towerTargets = [null, null, null];
  gameState.askedQuestions = [];
  gameState.currentQuestion = null;
  resetQuestionHistory();
}

/**
 * Start a wave
 */
function startWave() {
  gameState.waveInProgress = true;
  gameState.aliensRemaining = 5 + gameState.wave * 2;
  gameState.spawnTimer = 0;
  
  const diff = DIFFICULTY_SETTINGS[gameState.difficulty];
  gameState.spawnInterval = diff.spawnRate;
  
  if (gameState.wave % 3 === 1) {
    resetQuestionHistory();
  }
  
  showWaveNotification();
  document.getElementById('wave-num').textContent = gameState.wave;
}

/**
 * Complete wave
 */
function completeWave() {
  gameState.waveInProgress = false;
  gameState.wave++;
  const bonus = gameState.lives * 5;
  gameState.coins += bonus;
  showAchievement('🎉 WAVE COMPLETE! +' + bonus + ' 🪙');
  updateHUD();
  saveGame();
  setTimeout(() => openShop(), 2000);
}

/**
 * Damage station
 */
function damageStation(amount) {
  gameState.stationHealth = Math.max(0, gameState.stationHealth - amount);
  gameState.lives--;
  gameState.combo = 0;
  gameState.screenShake = 10;
  
  const pct = gameState.stationHealth / 100;
  const fill = document.getElementById('station-health-fill');
  fill.style.width = (pct * 100) + '%';
  if (pct < 0.3) fill.style.background = '#ff4a4a';
  else if (pct < 0.6) fill.style.background = '#ffa500';
  
  updateComboUI();
  audioSys.playWrong();
  createParticles(gameState.width * 0.93, gameState.height * 0.5, '#ff4a4a', 10);
  updateHUD();
  
  if (gameState.stationHealth <= 0 || gameState.lives <= 0) {
    gameOver();
  }
}

/**
 * Add combo
 */
function addCombo(points) {
  gameState.combo++;
  if (gameState.combo > gameState.maxCombo) {
    gameState.maxCombo = gameState.combo;
  }
  gameState.comboTimer = 2000;
  gameState.score += points * Math.min(gameState.combo, 10);
}

/**
 * Check game over
 */
function isGameOver() {
  return gameState.stationHealth <= 0 || gameState.lives <= 0;
}

/**
 * Get save data
 */
function getSaveData() {
  return {
    username: gameState.playerUsername,
    level: gameState.currentLevel,
    difficulty: gameState.difficulty,
    wave: gameState.wave,
    score: gameState.score,
    coins: gameState.coins,
    lives: gameState.lives,
    stationHealth: gameState.stationHealth,
    upgrades: { ...gameState.upgrades },
    maxCombo: gameState.maxCombo,
    savedAt: new Date().toISOString()
  };
}

/**
 * Load from save
 */
function loadFromSave(data) {
  gameState.playerUsername = data.username || '';
  gameState.currentLevel = data.level || 'reception';
  gameState.difficulty = data.difficulty || 'normal';
  gameState.wave = data.wave || 1;
  gameState.score = data.score || 0;
  gameState.coins = data.coins || 0;
  gameState.lives = Math.max(1, data.lives || 3);
  gameState.stationHealth = Math.max(20, data.stationHealth || 100);
  gameState.upgrades = data.upgrades || {};
  gameState.maxCombo = data.maxCombo || 0;
}