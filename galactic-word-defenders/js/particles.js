/**
 * Particle System
 * Handles particle effects for explosions and hits
 */

/**
 * Create explosion particles
 * @param {number} x - X position
 * @param {number} y - Y position
 * @param {string} color - Particle color
 * @param {number} count - Number of particles
 */
function createParticles(x, y, color, count) {
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 / count) * i + Math.random() * 0.5;
    const speed = 100 + Math.random() * 150;
    
    gameState.particles.push({
      x: x,
      y: y,
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
 * Update all particles
 * @param {number} delta - Time delta (ms)
 */
function updateParticles(delta) {
  gameState.particles.forEach((p, i) => {
    p.x += p.vx * delta / 1000;
    p.y += p.vy * delta / 1000;
    p.vy += 200 * delta / 1000; // gravity
    p.life -= delta;
    p.alpha = p.life / p.maxLife;
    
    if (p.life <= 0) {
      gameState.particles.splice(i, 1);
    }
  });
}

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createParticles, updateParticles };
}