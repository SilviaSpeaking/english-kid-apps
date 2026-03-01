/**
 * Projectile System
 * Handles projectile creation, movement, and collision
 */

/**
 * Fire projectile at target
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
      x: tower.x,
      y: tower.y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 2000,
      targetAlien: target
    });
  }
}

/**
 * Update all projectiles
 * @param {number} delta - Time delta (ms)
 */
function updateProjectiles(delta) {
  gameState.projectiles.forEach((proj, index) => {
    proj.x += proj.vx * delta / 1000;
    proj.y += proj.vy * delta / 1000;
    proj.life -= delta;
    
    // Check collision with target
    if (proj.targetAlien && gameState.aliens.includes(proj.targetAlien)) {
      const dist = Math.hypot(proj.x - proj.targetAlien.x, proj.y - proj.targetAlien.y);
      if (dist < 30) {
        proj.targetAlien.hp--;
        audioSys.playHit();
        createParticles(proj.targetAlien.x, proj.targetAlien.y, proj.targetAlien.color, 5);
        
        if (proj.targetAlien.hp <= 0) {
          destroyAlien(proj.targetAlien);
        }
        
        gameState.projectiles.splice(index, 1);
        return;
      }
    }
    
    // Remove if off-screen or expired
    if (proj.life <= 0 || 
        proj.x > gameState.width || 
        proj.y > gameState.height || 
        proj.x < 0 || 
        proj.y < 0) {
      gameState.projectiles.splice(index, 1);
    }
  });
}

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { fireProjectileAtTarget, updateProjectiles };
}