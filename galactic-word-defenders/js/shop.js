/**
 * Upgrade Shop System
 * Handles shop display and upgrade purchases
 */

/**
 * Open the upgrade shop
 */
function openShop() {
  gameState.inShop = true;
  audioSys.stopBGM();
  
  const shopScreen = document.getElementById('shop-screen');
  const battleScreen = document.getElementById('battle-screen');
  
  battleScreen.classList.add('hidden');
  battleScreen.classList.remove('active');
  shopScreen.classList.remove('hidden');
  shopScreen.classList.add('active');
  
  document.getElementById('shop-coin-display').textContent = gameState.coins;
  document.getElementById('shop-picks-remaining').textContent = '3';
  
  const grid = document.getElementById('shop-grid');
  grid.innerHTML = '';
  
  // Pick 3 random upgrades
  const picks = [];
  const available = [...UPGRADES_POOL];
  for (let i = 0; i < 3 && available.length > 0; i++) {
    const idx = Math.floor(Math.random() * available.length);
    picks.push(available[idx]);
    available.splice(idx, 1);
  }
  
  // Create shop cards
  picks.forEach(upgrade => {
    const level = gameState.upgrades[upgrade.id] || 0;
    const isMaxed = level >= upgrade.maxLevel;
    const canAfford = gameState.coins >= upgrade.cost;
    
    const card = document.createElement('div');
    card.className = 'level-card' + (isMaxed ? ' locked' : '');
    card.style.borderColor = canAfford && !isMaxed ? (upgrade.color || '#4a9eff') : '#666';
    
    card.innerHTML = `
      <div class="level-icon">${upgrade.icon}</div>
      <div class="level-name">${upgrade.name} ${isMaxed ? '✅ MAXED!' : 'Lv.' + level}</div>
      <div class="level-desc">${upgrade.desc}</div>
      <div style="color:${canAfford && !isMaxed ? '#ffa500' : '#666'}; font-weight:800; margin-top:10px;">
        ${isMaxed ? 'MAXED!' : '🪙 ' + upgrade.cost}
      </div>
    `;
    
    if (!isMaxed && canAfford) {
      card.addEventListener('click', () => buyUpgrade(upgrade, card));
    }
    
    grid.appendChild(card);
  });
  
  gameState.shopPicksRemaining = 3;
}

/**
 * Buy an upgrade
 * @param {object} upgrade - Upgrade object
 * @param {HTMLElement} cardElement - Card element
 */
function buyUpgrade(upgrade, cardElement) {
  if (gameState.shopPicksRemaining <= 0) return;
  if (gameState.coins < upgrade.cost) return;
  
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
  
  // Apply instant effects
  if (upgrade.id === 'stationHeal') {
    healStation(30);
  }
}

/**
 * Close shop and start next wave
 */
function closeShop() {
  gameState.inShop = false;
  
  const shopScreen = document.getElementById('shop-screen');
  const battleScreen = document.getElementById('battle-screen');
  
  shopScreen.classList.add('hidden');
  shopScreen.classList.remove('active');
  battleScreen.classList.remove('hidden');
  battleScreen.classList.add('active');
  
  audioSys.startBGM();
  
  // Resize and setup
  if (renderer) renderer.resize();
  if (gameState.towers.length === 0) setupTowers();
  
  startWave();
  gameState.lastTime = performance.now();
  
  if (gameLoop) gameLoop.start();
}

/**
 * Heal the station
 * @param {number} amount - Healing amount
 */
function healStation(amount) {
  gameState.stationHealth = Math.min(100, gameState.stationHealth + amount);
  const pct = gameState.stationHealth / 100;
  const fill = document.getElementById('station-health-fill');
  fill.style.width = (pct * 100) + '%';
  fill.style.background = '#4aff6a';
  createParticles(gameState.width * 0.93, gameState.height * 0.5, '#4aff6a', 20);
}

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { openShop, buyUpgrade, closeShop, healStation };
}