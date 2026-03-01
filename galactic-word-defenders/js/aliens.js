/**
 * Alien System
 * Handles alien spawning, movement, and behavior
 */

const ALIEN_COLORS = ['#4aff6a', '#6aff8a', '#4affaa', '#ffa500', '#ff6a6a', '#aa6aff'];

/**
 * Spawn a new alien
 */
function spawnAlien() {
  const diff = DIFFICULTY_SETTINGS[gameState.difficulty];
  const slowMultiplier = 1 - (gameState.upgrades.slowAliens || 0) * 0.2;
  
  // Determine alien type
  const isBoss = gameState.wave % 5 === 0 && gameState.aliensRemaining === 1 && !gameState.bossActive;
  const isMiniBoss = gameState.wave % 3 === 0 && Math.random() < 0.3;
  const isTank = Math.random() < 0.2;
  
  let alienType, hp, size, speed, color;
  
  if (isBoss) {
    alienType = 'boss';
    hp = 5 + Math.floor(gameState.wave / 5);
    size = 120;
    speed = 30 * diff.alienSpeed * slowMultiplier;
    color = '#ff4a4a';
    gameState.bossActive = true;
    showBossHealth(hp, 'BOSS WAVE ' + gameState.wave);
  } else if (isMiniBoss) {
    alienType = 'miniboss';
    hp = 3 + Math.floor(gameState.wave / 3);
    size = 80;
    speed = 40 * diff.alienSpeed * slowMultiplier;
    color = '#aa6aff';
  } else if (isTank) {
    alienType = 'tank';
    hp = 2 + Math.floor(gameState.wave / 5);
    size = 60;
    speed = 35 * diff.alienSpeed * slowMultiplier;
    color = '#ffa500';
  } else {
    alienType = 'wobbly';
    hp = 1;
    size = 40;
    speed = (50 + gameState.wave * 3) * diff.alienSpeed * slowMultiplier;
    color = ALIEN_COLORS[Math.floor(Math.random() * ALIEN_COLORS.length)];
  }
  
  gameState.aliens.push({
    x: 0,
    y: gameState.pathPoints[0].y,
    pathIndex: 0,
    speed: speed,
    hp: hp,
    maxHp: hp,
    color: color,
    size: size,
    wobble: Math.random() * Math.PI * 2,
    id: Math.random(),
    type: alienType
  });
}

/**
 * Update alien position
 * @param {object} alien - Alien object
 * @param {number} delta - Time delta (ms)
 */
function updateAlien(alien, delta) {
  const target = gameState.pathPoints[alien.pathIndex + 1];
  if (!target) return;
  
  // Apply speed boost if active
  const speedMultiplier = gameState.speedBoost ? 2 : 1;
  const speed = alien.speed * speedMultiplier;
  
  const angle = Math.atan2(target.y - alien.y, target.x - alien.x);
  alien.x += Math.cos(angle) * speed * delta / 1000;
  alien.y += Math.sin(angle) * speed * delta / 1000;
  alien.y += Math.sin(alien.wobble) * 0.3;
  
  if (Math.hypot(target.x - alien.x, target.y - alien.y) < 10) {
    alien.pathIndex++;
  }
}

/**
 * Destroy an alien
 * @param {object} alien - Alien object
 */
function destroyAlien(alien) {
  gameState.addCombo(10);
  
  const index = gameState.aliens.indexOf(alien);
  if (index > -1) gameState.aliens.splice(index, 1);
  
  audioSys.playExplosion();
  createParticles(alien.x, alien.y, alien.color, 15);
  
  // Special effects for bosses
  if (alien.type === 'boss') {
    gameState.bossActive = false;
    hideBossHealth();
    showAchievement('👑 BOSS DEFEATED! 👑');
    gameState.screenShake = 30;
    
    // Extra particles
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        createParticles(
          alien.x + (Math.random() - 0.5) * 100,
          alien.y + (Math.random() - 0.5) * 100,
          alien.color,
          10
        );
      }, i * 100);
    }
  }
  
  // Show combo text
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

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { spawnAlien, updateAlien, destroyAlien };
}