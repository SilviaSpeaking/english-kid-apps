/**
 * Main Game Logic - Complete Implementation
 */

// Global instances
let renderer = null;
let gameLoopRunning = false;
let animationFrameId = null;

// UI Elements cache
let ui = {};

/**
 * Initialize the game
 */
function init() {
  console.log('🚀 Galactic Word Defenders v2.0 Initializing...');
  
  // Setup zoom prevention
  setupZoomPrevention();
  
  // Initialize audio
  audioSys.init();
  
  // Get UI elements
  ui = {
    titleScreen: document.getElementById('title-screen'),
    saveSelectScreen: document.getElementById('save-select-screen'),
    usernameScreen: document.getElementById('username-screen'),
    levelSelectScreen: document.getElementById('level-select-screen'),
    battleScreen: document.getElementById('battle-screen'),
    shopScreen: document.getElementById('shop-screen'),
    gameoverScreen: document.getElementById('gameover-screen'),
    questionPanel: document.getElementById('question-panel'),
    questionLetter: document.getElementById('question-letter'),
    questionText: document.getElementById('question-text'),
    answersGrid: document.getElementById('answers-grid'),
    timerFill: document.getElementById('timer-fill'),
    hintBtn: document.getElementById('hint-btn'),
    livesDisplay: document.getElementById('lives-display'),
    scoreDisplay: document.getElementById('score-display'),
    coinsDisplay: document.getElementById('coins-display'),
    stationHealthFill: document.getElementById('station-health-fill'),
    waveNotification: document.getElementById('wave-notification'),
    waveNum: document.getElementById('wave-num'),
    canvas: document.getElementById('battle-canvas')
  };
  
  // Setup canvas
  renderer = {
    canvas: ui.canvas,
    ctx: ui.canvas.getContext('2d'),
    resize: function() {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      gameState.width = this.canvas.width;
      gameState.height = this.canvas.height;
    },
    clear: function() {
      this.ctx.fillStyle = '#0a0a1a';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    render: render
  };
  
  renderer.resize();
  
  // Setup event listeners
  setupEventListeners();
  
  // Create stars
  createStars();
  
  // Check for saves
  if (saveSystem.hasSaves()) {
    document.getElementById('continue-btn').style.display = 'inline-block';
  }
  
  console.log('✅ Game initialized successfully!');
}

/**
 * Setup zoom prevention
 */
function setupZoomPrevention() {
  document.addEventListener('gesturestart', e => { e.preventDefault(); return false; }, { passive: false });
  document.addEventListener('gesturechange', e => { e.preventDefault(); return false; }, { passive: false });
  document.addEventListener('gestureend', e => { e.preventDefault(); return false; }, { passive: false });
  
  let lastTouchEnd = 0;
  document.addEventListener('touchend', e => {
    const now = Date.now();
    if (now - lastTouchEnd <= 350) { e.preventDefault(); return false; }
    lastTouchEnd = now;
  }, { passive: false });
  
  document.addEventListener('touchmove', e => {
    if (e.scale !== 1) { e.preventDefault(); return false; }
  }, { passive: false });
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  const playBtn = document.getElementById('play-btn');
  const continueBtn = document.getElementById('continue-btn');
  const aboutBtn = document.getElementById('about-btn');
  const backToTitleFromSave = document.getElementById('back-to-title-from-save');
  const backToTitleFromLevel = document.getElementById('back-to-title-from-level');
  const backBtn = document.getElementById('back-btn');
  const pauseBtn = document.getElementById('pause-btn');
  const cancelUsernameBtn = document.getElementById('cancel-username-btn');
  const confirmUsernameBtn = document.getElementById('confirm-username-btn');
  const usernameInput = document.getElementById('username-input');
  const soundBtn = document.getElementById('sound-btn');
  const startWaveBtn = document.getElementById('start-wave-btn');
  
  if (playBtn) playBtn.addEventListener('click', (e) => { e.preventDefault(); showSaveSlots(); });
  if (continueBtn) continueBtn.addEventListener('click', (e) => { e.preventDefault(); showSaveSlots(); });
  if (aboutBtn) aboutBtn.addEventListener('click', (e) => { e.preventDefault(); alert('📚 Galactic Word Defenders v2\n\nAges 4-11\n\nDefend the space station by answering questions!'); });
  if (backToTitleFromSave) backToTitleFromSave.addEventListener('click', () => switchScreen('title'));
  if (backToTitleFromLevel) backToTitleFromLevel.addEventListener('click', () => switchScreen('title'));
  if (backBtn) backBtn.addEventListener('click', showSaveSlots);
  if (pauseBtn) pauseBtn.addEventListener('click', togglePause);
  if (cancelUsernameBtn) cancelUsernameBtn.addEventListener('click', () => switchScreen('title'));
  if (confirmUsernameBtn) confirmUsernameBtn.addEventListener('click', confirmUsername);
  if (usernameInput) usernameInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') confirmUsername(); });
  if (soundBtn) soundBtn.addEventListener('click', toggleSound);
  if (startWaveBtn) startWaveBtn.addEventListener('click', closeShop);
  
  // Speed boost button
  const speedBtn = document.getElementById('speed-btn');
  if (speedBtn) {
    speedBtn.addEventListener('touchstart', (e) => { e.preventDefault(); gameState.speedBoost = true; speedBtn.style.background = 'linear-gradient(180deg, #ffcc4a 0%, #ff8800 100%)'; }, { passive: false });
    speedBtn.addEventListener('touchend', (e) => { e.preventDefault(); gameState.speedBoost = false; speedBtn.style.background = 'linear-gradient(180deg, #ffa500 0%, #ff6a00 100%)'; }, { passive: false });
    speedBtn.addEventListener('mousedown', () => { gameState.speedBoost = true; speedBtn.style.background = 'linear-gradient(180deg, #ffcc4a 0%, #ff8800 100%)'; });
    speedBtn.addEventListener('mouseup', () => { gameState.speedBoost = false; speedBtn.style.background = 'linear-gradient(180deg, #ffa500 0%, #ff6a00 100%)'; });
    speedBtn.addEventListener('mouseleave', () => { gameState.speedBoost = false; speedBtn.style.background = 'linear-gradient(180deg, #ffa500 0%, #ff6a00 100%)'; });
  }
  
  // Difficulty buttons
  document.querySelectorAll('.difficulty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.difficulty-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      gameState.difficulty = btn.dataset.difficulty;
    });
  });
  
  // Window resize
  window.addEventListener('resize', () => { if (renderer) renderer.resize(); });
}

/**
 * Create stars
 */
function createStars() {
  document.querySelectorAll('.stars').forEach(container => {
    if (container.children.length === 0) {
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(star);
      }
    }
  });
}

/**
 * Switch screen
 */
function switchScreen(name) {
  console.log('Switching to screen:', name);
  const screenMap = {
    'title': 'title-screen',
    'saveSelect': 'save-select-screen',
    'username': 'username-screen',
    'levelSelect': 'level-select-screen',
    'battle': 'battle-screen',
    'shop': 'shop-screen',
    'gameover': 'gameover-screen'
  };
  
  Object.values(screenMap).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.classList.add('hidden');
      el.classList.remove('active');
    }
  });
  
  const targetId = screenMap[name];
  const target = document.getElementById(targetId);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('active');
    console.log('Screen switched to:', name, '(', targetId, ')');
  } else {
    console.error('Target screen not found:', targetId);
  }
}

/**
 * Show save slots
 */
function showSaveSlots() {
  console.log('Showing save slots...');
  const container = document.getElementById('save-slots');
  if (!container) {
    console.error('save-slots container not found!');
    alert('Error: Save container not found. Check HTML.');
    return;
  }
  
  container.innerHTML = '';
  const saves = saveSystem.getAll();
  console.log('Saves:', saves);
  
  saves.forEach((save, index) => {
    const slotEl = document.createElement('div');
    slotEl.className = 'save-slot' + (save ? '' : ' empty');
    
    if (save) {
      slotEl.innerHTML = `<div class="save-slot-icon">👤</div><div class="save-slot-info"><div class="save-slot-name">${escapeHtml(save.username)}</div><div class="save-slot-details">${save.level} | Wave ${save.wave} | Score: ${save.score}</div><div class="save-slot-details">🪙 ${save.coins} coins</div></div><button class="save-slot-delete" data-slot="${index}">🗑</button>`;
      slotEl.addEventListener('click', (e) => { if (!e.target.classList.contains('save-slot-delete')) loadGame(index); });
    } else {
      slotEl.innerHTML = `<div class="save-slot-icon">➕</div><div class="save-slot-info"><div class="save-slot-name">Empty Slot ${index + 1}</div><div class="save-slot-details">Click to create new game</div></div>`;
      slotEl.addEventListener('click', () => selectSaveSlot(index));
    }
    container.appendChild(slotEl);
  });
  
  document.querySelectorAll('.save-slot-delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const slot = parseInt(btn.dataset.slot);
      if (confirm(`Delete save slot ${slot + 1}?`)) { saveSystem.delete(slot); showSaveSlots(); }
    });
  });
  
  console.log('Switching to save select screen');
  switchScreen('saveSelect');
}

/**
 * Select save slot
 */
function selectSaveSlot(slotIndex) {
  gameState.currentSaveSlot = slotIndex;
  document.getElementById('save-slot-num').textContent = slotIndex + 1;
  document.getElementById('username-input').value = '';
  switchScreen('username');
  setTimeout(() => document.getElementById('username-input').focus(), 100);
}

/**
 * Confirm username
 */
function confirmUsername() {
  const username = document.getElementById('username-input').value.trim();
  if (!username) { alert('Please enter your name!'); return; }
  gameState.playerUsername = username;
  switchScreen('levelSelect');
  setupLevelSelect();
}

/**
 * Setup level select
 */
function setupLevelSelect() {
  const grid = document.getElementById('level-grid');
  grid.innerHTML = '';
  LEVELS.forEach(level => {
    const card = document.createElement('div');
    card.className = 'level-card';
    card.innerHTML = `<div class="level-icon">${level.icon}</div><div class="level-name">${level.name}</div><div class="level-desc">${level.desc}</div>`;
    card.style.borderColor = level.color;
    card.addEventListener('click', () => startLevel(level.id));
    grid.appendChild(card);
  });
}

/**
 * Start level
 */
function startLevel(levelId) {
  try {
    console.log('Starting level:', levelId);
    gameState.currentLevel = levelId;
    const level = LEVELS.find(l => l.id === levelId);
    const diff = DIFFICULTY_SETTINGS[gameState.difficulty];
    
    if (!level) {
      console.error('Level not found:', levelId);
      alert('Error: Level not found!');
      return;
    }
    
    document.getElementById('level-indicator').innerHTML = `${level.icon} ${level.name} - Wave <span id="wave-num">1</span> <span id="difficulty-badge" style="background:${diff.color}">${diff.label}</span>`;
    
    switchScreen('battle');
    
    if (audioSys) {
      audioSys.init();
      setTimeout(() => audioSys.startBGM(), 1000);
    }
    
    if (renderer) {
      renderer.resize();
    }
    
    resetGameState();
    setupTowers();
    generateMap();
    startWave();  // This is a standalone function, not gameState.startWave
    gameState.lastTime = performance.now();
    
    gameLoopRunning = true;
    gameLoop();
    
    setTimeout(() => saveGame(), 5000);
    
    console.log('Level started successfully!');
  } catch (error) {
    console.error('Error starting level:', error);
    alert('Error starting game: ' + error.message + '\n\nCheck console for details.');
  }
}

/**
 * Generate map path
 */
function generateMap() {
  if (!gameState.width || !gameState.height) {
    gameState.width = window.innerWidth;
    gameState.height = window.innerHeight;
  }
  const w = gameState.width;
  const h = gameState.height;
  const mapType = gameState.wave % 5;
  
  console.log('Generating map, size:', w, 'x', h, 'type:', mapType);
  
  switch(mapType) {
    case 0: gameState.pathPoints = [{x:0,y:h*0.5},{x:w*0.2,y:h*0.5},{x:w*0.2,y:h*0.35},{x:w*0.4,y:h*0.35},{x:w*0.4,y:h*0.65},{x:w*0.6,y:h*0.65},{x:w*0.6,y:h*0.4},{x:w*0.8,y:h*0.4},{x:w*0.8,y:h*0.5},{x:w*0.95,y:h*0.5}]; break;
    case 1: gameState.pathPoints = [{x:0,y:h*0.3},{x:w*0.15,y:h*0.3},{x:w*0.15,y:h*0.7},{x:w*0.35,y:h*0.7},{x:w*0.35,y:h*0.3},{x:w*0.55,y:h*0.3},{x:w*0.55,y:h*0.7},{x:w*0.75,y:h*0.7},{x:w*0.75,y:h*0.5},{x:w*0.95,y:h*0.5}]; break;
    case 2: gameState.pathPoints = [{x:0,y:h*0.5},{x:w*0.25,y:h*0.5},{x:w*0.25,y:h*0.2},{x:w*0.5,y:h*0.2},{x:w*0.5,y:h*0.8},{x:w*0.75,y:h*0.8},{x:w*0.75,y:h*0.5},{x:w*0.9,y:h*0.5},{x:w*0.9,y:h*0.35},{x:w*0.95,y:h*0.5}]; break;
    case 3: gameState.pathPoints = [{x:0,y:h*0.5},{x:w*0.12,y:h*0.35},{x:w*0.25,y:h*0.65},{x:w*0.37,y:h*0.35},{x:w*0.5,y:h*0.65},{x:w*0.62,y:h*0.35},{x:w*0.75,y:h*0.65},{x:w*0.87,y:h*0.45},{x:w*0.92,y:h*0.55},{x:w*0.95,y:h*0.5}]; break;
    case 4: gameState.pathPoints = [{x:0,y:h*0.7},{x:w*0.3,y:h*0.7},{x:w*0.3,y:h*0.3},{x:w*0.5,y:h*0.3},{x:w*0.5,y:h*0.7},{x:w*0.7,y:h*0.7},{x:w*0.7,y:h*0.4},{x:w*0.85,y:h*0.4},{x:w*0.85,y:h*0.5},{x:w*0.95,y:h*0.5}]; break;
  }
  
  console.log('Path points generated:', gameState.pathPoints.length);
}

/**
 * Setup towers
 */
function setupTowers() {
  if (!gameState.width || !gameState.height) {
    gameState.width = window.innerWidth;
    gameState.height = window.innerHeight;
  }
  const w = gameState.width;
  const h = gameState.height;
  gameState.towers = [
    { x: w * 0.2, y: h * 0.4, range: 200, fireRate: 500, lastFired: 0, type: 'phonics' },
    { x: w * 0.5, y: h * 0.4, range: 200, fireRate: 500, lastFired: 0, type: 'spelling' },
    { x: w * 0.75, y: h * 0.6, range: 200, fireRate: 500, lastFired: 0, type: 'grammar' }
  ];
  console.log('Towers setup:', gameState.towers.length);
}

/**
 * Main game loop
 */
function gameLoop() {
  if (!gameLoopRunning || gameState.inShop) return;
  
  const currentTime = performance.now();
  const delta = currentTime - gameState.lastTime;
  gameState.lastTime = currentTime;
  
  update(delta, currentTime);
  renderer.render();
  
  animationFrameId = requestAnimationFrame(gameLoop);
}

/**
 * Update game state
 */
function update(delta, time) {
  if (!gameState.waveInProgress) return;
  
  // Combo timer
  if (gameState.combo > 0) {
    gameState.comboTimer -= delta;
    if (gameState.comboTimer <= 0) { gameState.combo = 0; updateComboUI(); }
  }
  
  // Spawn aliens
  gameState.spawnTimer += delta;
  if (gameState.spawnTimer >= gameState.spawnInterval && gameState.aliensRemaining > 0) {
    spawnAlien();
    gameState.spawnTimer = 0;
    gameState.aliensRemaining--;
  }
  
  // Towers fire
  gameState.towers.forEach((tower, index) => {
    if (time >= tower.lastFired + tower.fireRate && !gameState.isAnswering) {
      const target = findClosestAlien(tower, index);
      if (target) {
        gameState.towerTargets[index] = target;
        fireTower(tower, target, index);
        tower.lastFired = time;
      }
    }
  });
  
  // Update aliens
  gameState.aliens.forEach((alien, index) => {
    updateAlien(alien, delta);
    alien.wobble += 0.1;
    if (alien.pathIndex >= gameState.pathPoints.length - 1) {
      gameState.aliens.splice(index, 1);
      damageStation(10);
    }
  });
  
  // Update projectiles
  updateProjectiles(delta);
  
  // Update particles
  updateParticles(delta);
  
  // Wave complete
  if (gameState.aliens.length === 0 && gameState.aliensRemaining === 0) {
    completeWave();
  }
}

/**
 * Render game
 */
function render() {
  const ctx = renderer.ctx;
  const w = gameState.width;
  const h = gameState.height;
  
  renderer.clear();
  
  // Screen shake
  if (gameState.screenShake > 0) {
    const shakeX = (Math.random() - 0.5) * gameState.screenShake;
    const shakeY = (Math.random() - 0.5) * gameState.screenShake;
    ctx.save();
    ctx.translate(shakeX, shakeY);
    gameState.screenShake *= 0.9;
    if (gameState.screenShake < 0.5) gameState.screenShake = 0;
  }
  
  // Draw path
  if (gameState.pathPoints && gameState.pathPoints.length > 0) {
    ctx.strokeStyle = 'rgba(74, 74, 106, 0.5)';
    ctx.lineWidth = 40;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(gameState.pathPoints[0].x, gameState.pathPoints[0].y);
    gameState.pathPoints.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.stroke();
    ctx.strokeStyle = 'rgba(74, 74, 106, 0.8)';
    ctx.lineWidth = 30;
    ctx.stroke();
  }
  
  // Draw station
  drawStation(w * 0.93, h * 0.5);
  
  // Draw towers
  gameState.towers.forEach(tower => drawTower(tower));
  
  // Draw aliens
  gameState.aliens.forEach(alien => drawAlien(alien));
  
  // Draw projectiles
  gameState.projectiles.forEach(proj => drawProjectile(proj));
  
  // Draw particles
  drawParticles();
  
  if (gameState.screenShake > 0) ctx.restore();
}

/**
 * Find closest alien
 */
function findClosestAlien(tower, towerIndex) {
  let closest = null;
  let minDist = tower.range + (gameState.upgrades.towerRange || 0) * 50;
  
  gameState.aliens.forEach(alien => {
    if (alien === gameState.towerTargets[(towerIndex + 1) % 3] || alien === gameState.towerTargets[(towerIndex + 2) % 3]) return;
    const dist = Math.hypot(tower.x - alien.x, tower.y - alien.y);
    if (dist < minDist) { minDist = dist; closest = alien; }
  });
  
  if (!closest) {
    gameState.aliens.forEach(alien => {
      const dist = Math.hypot(tower.x - alien.x, tower.y - alien.y);
      if (dist < minDist) { minDist = dist; closest = alien; }
    });
  }
  
  return closest;
}

/**
 * Fire tower
 */
function fireTower(tower, target, towerIndex) {
  const question = getRandomQuestion(gameState.currentLevel);
  gameState.currentQuestion = question;
  gameState.isAnswering = true;
  gameState.questionAnswered = false;
  gameState.firingTowerIndex = towerIndex;
  showQuestionPanel();
}

/**
 * Show question panel
 */
function showQuestionPanel() {
  const q = gameState.currentQuestion;
  if (!q) return;
  
  ui.questionLetter.textContent = q.letter;
  ui.questionText.textContent = q.question;
  ui.questionPanel.classList.remove('hidden');
  ui.timerFill.style.width = '100%';
  ui.hintBtn.classList.remove('available');
  
  ui.answersGrid.innerHTML = '';
  q.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;
    btn.addEventListener('click', () => handleAnswer(index, btn));
    ui.answersGrid.appendChild(btn);
  });
  
  const diff = DIFFICULTY_SETTINGS[gameState.difficulty];
  let timeLeft = 100;
  gameState.questionTimer = setInterval(() => {
    timeLeft -= diff.timerSpeed;
    ui.timerFill.style.width = timeLeft + '%';
    if (timeLeft <= 0) { clearInterval(gameState.questionTimer); handleAnswer(-1, null); }
  }, 150);
}

/**
 * Handle answer
 */
function handleAnswer(index, btn) {
  if (gameState.questionAnswered) return;
  gameState.questionAnswered = true;
  clearInterval(gameState.questionTimer);
  
  const q = gameState.currentQuestion;
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(b => b.disabled = true);
  
  const isCorrect = index === q.correct;
  
  if (index >= 0) speakAnswer(q.answers[index]);
  
  if (isCorrect && btn) {
    btn.classList.add('correct');
    audioSys.playCorrect();
    fireProjectileAtTarget();
  } else {
    if (btn) btn.classList.add('wrong');
    if (buttons[q.correct]) buttons[q.correct].classList.add('correct');
    document.getElementById('hint-btn').classList.add('available');
    audioSys.playWrong();
  }
  
  setTimeout(() => {
    ui.questionPanel.classList.add('hidden');
    gameState.isAnswering = false;
    gameState.towerTargets[gameState.firingTowerIndex] = null;
  }, 800);
}

/**
 * Speak answer
 */
function speakAnswer(text) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  window.speechSynthesis.speak(utterance);
}

/**
 * Fire projectile
 */
function fireProjectileAtTarget() {
  audioSys.playFire();
  const towerIndex = gameState.firingTowerIndex;
  const target = gameState.towerTargets[towerIndex];
  const tower = gameState.towers[towerIndex];
  
  if (target && gameState.aliens.includes(target)) {
    const angle = Math.atan2(target.y - tower.y, target.x - tower.x);
    const speed = 500 * (1 + (gameState.upgrades.bulletSpeed || 0) * 0.3);
    gameState.projectiles.push({
      x: tower.x, y: tower.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 2000,
      targetAlien: target
    });
  }
}

/**
 * Update projectiles
 */
function updateProjectiles(delta) {
  gameState.projectiles.forEach((proj, index) => {
    proj.x += proj.vx * delta / 1000;
    proj.y += proj.vy * delta / 1000;
    proj.life -= delta;
    
    if (proj.targetAlien && gameState.aliens.includes(proj.targetAlien)) {
      const dist = Math.hypot(proj.x - proj.targetAlien.x, proj.y - proj.targetAlien.y);
      if (dist < 30) {
        proj.targetAlien.hp--;
        audioSys.playHit();
        createParticles(proj.targetAlien.x, proj.targetAlien.y, proj.targetAlien.color, 5);
        if (proj.targetAlien.hp <= 0) destroyAlien(proj.targetAlien);
        gameState.projectiles.splice(index, 1);
        return;
      }
    }
    
    if (proj.life <= 0 || proj.x > gameState.width || proj.y > gameState.height || proj.x < 0 || proj.y < 0) {
      gameState.projectiles.splice(index, 1);
    }
  });
}

/**
 * Spawn alien
 */
function spawnAlien() {
  const diff = DIFFICULTY_SETTINGS[gameState.difficulty];
  const slowMultiplier = 1 - (gameState.upgrades.slowAliens || 0) * 0.2;
  const colors = ['#4aff6a', '#6aff8a', '#4affaa', '#ffa500', '#ff6a6a', '#aa6aff'];
  
  const isBoss = gameState.wave % 5 === 0 && gameState.aliensRemaining === 1 && !gameState.bossActive;
  const isMiniBoss = gameState.wave % 3 === 0 && Math.random() < 0.3;
  const isTank = Math.random() < 0.2;
  
  let alienType, hp, size, speed, color;
  
  if (isBoss) {
    alienType = 'boss'; hp = 5 + Math.floor(gameState.wave / 5); size = 120;
    speed = 30 * diff.alienSpeed * slowMultiplier; color = '#ff4a4a';
    gameState.bossActive = true;
    showBossHealth(hp, 'BOSS WAVE ' + gameState.wave);
  } else if (isMiniBoss) {
    alienType = 'miniboss'; hp = 3 + Math.floor(gameState.wave / 3); size = 80;
    speed = 40 * diff.alienSpeed * slowMultiplier; color = '#aa6aff';
  } else if (isTank) {
    alienType = 'tank'; hp = 2 + Math.floor(gameState.wave / 5); size = 60;
    speed = 35 * diff.alienSpeed * slowMultiplier; color = '#ffa500';
  } else {
    alienType = 'wobbly'; hp = 1; size = 40;
    speed = (50 + gameState.wave * 3) * diff.alienSpeed * slowMultiplier;
    color = colors[Math.floor(Math.random() * colors.length)];
  }
  
  gameState.aliens.push({
    x: 0, y: gameState.pathPoints[0].y, pathIndex: 0,
    speed: speed, hp: hp, maxHp: hp,
    color: color, size: size, wobble: Math.random() * Math.PI * 2,
    id: Math.random(), type: alienType
  });
}

/**
 * Update alien
 */
function updateAlien(alien, delta) {
  const target = gameState.pathPoints[alien.pathIndex + 1];
  if (!target) return;
  const speedMultiplier = gameState.speedBoost ? 2 : 1;
  const speed = alien.speed * speedMultiplier;
  const angle = Math.atan2(target.y - alien.y, target.x - alien.x);
  alien.x += Math.cos(angle) * speed * delta / 1000;
  alien.y += Math.sin(angle) * speed * delta / 1000;
  alien.y += Math.sin(alien.wobble) * 0.3;
  if (Math.hypot(target.x - alien.x, target.y - alien.y) < 10) alien.pathIndex++;
}

/**
 * Destroy alien
 */
function destroyAlien(alien) {
  addCombo(10);
  const index = gameState.aliens.indexOf(alien);
  if (index > -1) gameState.aliens.splice(index, 1);
  
  audioSys.playExplosion();
  createParticles(alien.x, alien.y, alien.color, 15);
  
  if (alien.type === 'boss') {
    gameState.bossActive = false;
    hideBossHealth();
    showAchievement('👑 BOSS DEFEATED! 👑');
    gameState.screenShake = 30;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createParticles(alien.x + (Math.random()-0.5)*100, alien.y + (Math.random()-0.5)*100, alien.color, 10), i * 100);
    }
  }
  
  if (gameState.combo >= 3) {
    showComboText(gameState.combo);
    if (gameState.combo % 5 === 0) {
      showAchievement('🔥 ' + gameState.combo + ' COMBO! 🔥');
      gameState.screenShake = 15;
    }
  }
  
  updateHUD();
  updateComboUI();
}

/**
 * Draw functions
 */
function drawStation(x, y) {
  const ctx = renderer.ctx;
  ctx.fillStyle = '#4a9eff';
  ctx.beginPath();
  ctx.arc(x, y, 50, Math.PI, 0);
  ctx.fill();
  ctx.fillStyle = '#2a5fbf';
  ctx.fillRect(x - 40, y, 80, 30);
  ctx.fillStyle = '#4aff6a';
  ctx.beginPath();
  ctx.arc(x - 20, y - 20, 8, 0, Math.PI * 2);
  ctx.arc(x, y - 25, 8, 0, Math.PI * 2);
  ctx.arc(x + 20, y - 20, 8, 0, Math.PI * 2);
  ctx.fill();
}

function drawTower(tower) {
  const ctx = renderer.ctx;
  ctx.fillStyle = '#4a9eff';
  ctx.fillRect(tower.x - 20, tower.y - 20, 40, 40);
  ctx.fillStyle = '#6ab8ff';
  ctx.beginPath();
  ctx.arc(tower.x, tower.y, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#2a5fbf';
  ctx.fillRect(tower.x - 5, tower.y - 25, 10, 20);
}

function drawAlien(alien) {
  const ctx = renderer.ctx;
  ctx.fillStyle = alien.color || '#4aff6a';
  ctx.beginPath();
  ctx.ellipse(alien.x, alien.y, alien.size/2, alien.size/3, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(alien.x - alien.size/5, alien.y - alien.size/6, alien.size/6, 0, Math.PI * 2);
  ctx.arc(alien.x + alien.size/5, alien.y - alien.size/6, alien.size/6, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#202030';
  ctx.beginPath();
  ctx.arc(alien.x - alien.size/5, alien.y - alien.size/6, alien.size/12, 0, Math.PI * 2);
  ctx.arc(alien.x + alien.size/5, alien.y - alien.size/6, alien.size/12, 0, Math.PI * 2);
  ctx.fill();
  
  if (alien.maxHp > 1) {
    const hpBarWidth = alien.type === 'boss' ? 48 : 24;
    const hpPercent = alien.hp / alien.maxHp;
    ctx.fillStyle = '#333';
    ctx.fillRect(alien.x - hpBarWidth/2, alien.y - alien.size/2 - 12, hpBarWidth, 6);
    ctx.fillStyle = hpPercent > 0.5 ? '#4aff6a' : hpPercent > 0.25 ? '#ffa500' : '#ff4a4a';
    ctx.fillRect(alien.x - hpBarWidth/2, alien.y - alien.size/2 - 12, hpBarWidth * hpPercent, 6);
  }
}

function drawProjectile(proj) {
  const ctx = renderer.ctx;
  ctx.fillStyle = '#ffa500';
  ctx.fillRect(proj.x - 4, proj.y - 6, 8, 12);
  ctx.fillStyle = '#ffcc4a';
  ctx.fillRect(proj.x - 2, proj.y - 4, 4, 8);
}

function drawParticles() {
  const ctx = renderer.ctx;
  gameState.particles.forEach(p => {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
    ctx.restore();
  });
}

/**
 * Create particles
 */
function createParticles(x, y, color, count) {
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 / count) * i + Math.random() * 0.5;
    const speed = 100 + Math.random() * 150;
    gameState.particles.push({
      x: x, y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 600 + Math.random() * 200,
      maxLife: 800,
      size: 3 + Math.random() * 4,
      color: color,
      alpha: 1
    });
  }
}

/**
 * Update particles
 */
function updateParticles(delta) {
  gameState.particles.forEach((p, i) => {
    p.x += p.vx * delta / 1000;
    p.y += p.vy * delta / 1000;
    p.vy += 200 * delta / 1000;
    p.life -= delta;
    p.alpha = p.life / p.maxLife;
    if (p.life <= 0) gameState.particles.splice(i, 1);
  });
}

/**
 * UI Functions
 */
function updateHUD() {
  ui.livesDisplay.textContent = gameState.lives;
  ui.scoreDisplay.textContent = gameState.score;
  ui.coinsDisplay.textContent = gameState.coins;
}

function updateComboUI() {
  const comboDisplay = document.getElementById('combo-display');
  const comboCount = document.getElementById('combo-count');
  if (gameState.combo >= 2) {
    comboDisplay.style.display = 'inline-block';
    comboCount.textContent = gameState.combo;
  } else {
    comboDisplay.style.display = 'none';
  }
}

function showWaveNotification() {
  ui.waveNotification.textContent = 'WAVE ' + gameState.wave;
  ui.waveNotification.style.opacity = '1';
  audioSys.playWaveStart();
  let opacity = 1;
  const fade = setInterval(() => { opacity -= 0.02; ui.waveNotification.style.opacity = opacity; if (opacity <= 0) { clearInterval(fade); ui.waveNotification.style.opacity = '0'; } }, 20);
}

function showBossHealth(hp, name) {
  const container = document.getElementById('boss-health-container');
  const fill = document.getElementById('boss-health-fill');
  const nameEl = document.getElementById('boss-name');
  container.style.display = 'block';
  nameEl.textContent = name;
  gameState.currentBossMaxHp = hp;
  updateBossHealth(hp);
}

function updateBossHealth(currentHp) {
  const fill = document.getElementById('boss-health-fill');
  fill.style.width = (currentHp / gameState.currentBossMaxHp * 100) + '%';
}

function hideBossHealth() {
  document.getElementById('boss-health-container').style.display = 'none';
}

function showComboText(combo) {
  const comboEl = document.createElement('div');
  comboEl.className = 'combo-text';
  comboEl.textContent = combo + ' COMBO!';
  document.getElementById('battle-screen').appendChild(comboEl);
  setTimeout(() => comboEl.remove(), 500);
}

function showAchievement(text) {
  const achEl = document.createElement('div');
  achEl.className = 'achievement';
  achEl.textContent = text;
  document.getElementById('battle-screen').appendChild(achEl);
  setTimeout(() => achEl.remove(), 2000);
}

function toggleSound() {
  const enabled = audioSys.toggle();
  document.getElementById('sound-btn').textContent = enabled ? '🔊' : '🔇';
}

function togglePause() {
  alert('🎮 Game ' + (gameState.inShop ? 'in Shop' : 'Running') + '\n\nAnswer questions to fire towers!');
}

function saveGame() {
  if (gameState.currentSaveSlot < 0) return;
  saveSystem.save(gameState.currentSaveSlot, getSaveData());
}

function loadGame(slotIndex) {
  const save = saveSystem.get(slotIndex);
  if (!save) { alert('No save data!'); return; }
  gameState.currentSaveSlot = slotIndex;
  loadFromSave(save);
  switchScreen('battle');
  audioSys.init();
  setTimeout(() => audioSys.startBGM(), 1000);
  renderer.resize();
  gameState.towers = [];
  setupTowers();
  generateMap();
  startWave();
  gameState.lastTime = performance.now();
  updateHUD();
  updateComboUI();
  gameLoopRunning = true;
  gameLoop();
}

function gameOver() {
  gameState.waveInProgress = false;
  gameLoopRunning = false;
  audioSys.stopBGM();
  audioSys.playGameOver();
  document.getElementById('final-username').textContent = gameState.playerUsername || 'Player';
  document.getElementById('final-wave').textContent = gameState.wave;
  document.getElementById('final-score').textContent = gameState.score;
  document.getElementById('final-coins').textContent = gameState.coins;
  document.getElementById('saved-slot-num').textContent = gameState.currentSaveSlot + 1;
  saveGame();
  setTimeout(() => switchScreen('gameover'), 500);
}

function restartGame() {
  startLevel(gameState.currentLevel);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Shop functions
 */
function openShop() {
  gameState.inShop = true;
  audioSys.stopBGM();
  switchScreen('shop');
  document.getElementById('shop-coin-display').textContent = gameState.coins;
  document.getElementById('shop-picks-remaining').textContent = '3';
  
  const grid = document.getElementById('shop-grid');
  grid.innerHTML = '';
  
  const picks = [];
  const available = [...UPGRADES_POOL];
  for (let i = 0; i < 3 && available.length > 0; i++) {
    const idx = Math.floor(Math.random() * available.length);
    picks.push(available[idx]);
    available.splice(idx, 1);
  }
  
  picks.forEach(upgrade => {
    const level = gameState.upgrades[upgrade.id] || 0;
    const isMaxed = level >= upgrade.maxLevel;
    const canAfford = gameState.coins >= upgrade.cost;
    
    const card = document.createElement('div');
    card.className = 'level-card' + (isMaxed ? ' locked' : '');
    card.style.borderColor = canAfford && !isMaxed ? (upgrade.color || '#4a9eff') : '#666';
    card.innerHTML = `<div class="level-icon">${upgrade.icon}</div><div class="level-name">${upgrade.name} ${isMaxed ? '✅ MAXED!' : 'Lv.' + level}</div><div class="level-desc">${upgrade.desc}</div><div style="color:${canAfford && !isMaxed ? '#ffa500' : '#666'}; font-weight:800; margin-top:10px;">${isMaxed ? 'MAXED!' : '🪙 ' + upgrade.cost}</div>`;
    
    if (!isMaxed && canAfford) {
      card.addEventListener('click', () => buyUpgrade(upgrade, card));
    }
    grid.appendChild(card);
  });
  
  gameState.shopPicksRemaining = 3;
}

function buyUpgrade(upgrade, cardElement) {
  if (gameState.shopPicksRemaining <= 0 || gameState.coins < upgrade.cost) return;
  const currentLevel = gameState.upgrades[upgrade.id] || 0;
  if (currentLevel >= upgrade.maxLevel) return;
  
  gameState.coins -= upgrade.cost;
  gameState.upgrades[upgrade.id] = currentLevel + 1;
  gameState.shopPicksRemaining--;
  
  document.getElementById('shop-coin-display').textContent = gameState.coins;
  document.getElementById('shop-picks-remaining').textContent = gameState.shopPicksRemaining;
  
  showAchievement('🛠️ ' + upgrade.name + ' UPGRADED!');
  audioSys.playCorrect();
  cardElement.style.borderColor = '#666';
  cardElement.style.opacity = '0.5';
  cardElement.style.pointerEvents = 'none';
  
  if (upgrade.id === 'stationHeal') healStation(30);
}

function closeShop() {
  gameState.inShop = false;
  switchScreen('battle');
  audioSys.startBGM();
  renderer.resize();
  if (gameState.towers.length === 0) setupTowers();
  startWave();
  gameState.lastTime = performance.now();
  gameLoopRunning = true;
  gameLoop();
}

function healStation(amount) {
  gameState.stationHealth = Math.min(100, gameState.stationHealth + amount);
  const pct = gameState.stationHealth / 100;
  const fill = document.getElementById('station-health-fill');
  fill.style.width = (pct * 100) + '%';
  fill.style.background = '#4aff6a';
  createParticles(gameState.width * 0.93, gameState.height * 0.5, '#4aff6a', 20);
}

// Initialize when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}