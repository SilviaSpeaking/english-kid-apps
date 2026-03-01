/**
 * Tower System
 * Handles tower creation, targeting, and firing
 */

/**
 * Setup initial towers
 */
function setupTowers() {
  const w = gameState.width;
  const h = gameState.height;
  
  gameState.towers = [
    { 
      x: w * 0.2, 
      y: h * 0.4, 
      range: 200, 
      fireRate: 500, 
      lastFired: 0,
      type: 'phonics'
    },
    { 
      x: w * 0.5, 
      y: h * 0.4, 
      range: 200, 
      fireRate: 500, 
      lastFired: 0,
      type: 'spelling'
    },
    { 
      x: w * 0.75, 
      y: h * 0.6, 
      range: 200, 
      fireRate: 500, 
      lastFired: 0,
      type: 'grammar'
    }
  ];
}

/**
 * Find closest alien for a tower
 * @param {object} tower - Tower object
 * @param {number} towerIndex - Tower index
 * @returns {object|null} Closest alien or null
 */
function findClosestAlien(tower, towerIndex) {
  let closest = null;
  let minDist = tower.range + (gameState.upgrades.towerRange || 0) * 50;
  
  gameState.aliens.forEach(alien => {
    // Skip if targeted by another tower
    if (alien === gameState.towerTargets[(towerIndex + 1) % 3] || 
        alien === gameState.towerTargets[(towerIndex + 2) % 3]) {
      return;
    }
    
    const dist = Math.hypot(tower.x - alien.x, tower.y - alien.y);
    if (dist < minDist) {
      minDist = dist;
      closest = alien;
    }
  });
  
  // If no valid target, get any in range
  if (!closest) {
    gameState.aliens.forEach(alien => {
      const dist = Math.hypot(tower.x - alien.x, tower.y - alien.y);
      if (dist < minDist) {
        minDist = dist;
        closest = alien;
      }
    });
  }
  
  return closest;
}

/**
 * Fire tower at target
 * @param {object} tower - Tower object
 * @param {object} target - Target alien
 * @param {number} towerIndex - Tower index
 */
function fireTower(tower, target, towerIndex) {
  const question = questionManager.getRandomQuestion(gameState.currentLevel);
  gameState.currentQuestion = question;
  gameState.isAnswering = true;
  gameState.questionAnswered = false;
  gameState.firingTowerIndex = towerIndex;
  
  showQuestionPanel();
}

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { setupTowers, findClosestAlien, fireTower };
}