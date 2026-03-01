/**
 * Renderer
 * Handles all canvas drawing and visual effects
 */

class Renderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resize();
    
    // Sprite cache
    this.sprites = {};
  }

  /**
   * Resize canvas to fit window
   */
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    gameState.width = this.canvas.width;
    gameState.height = this.canvas.height;
  }

  /**
   * Load a sprite
   * @param {string} name - Sprite name
   * @param {string} src - Image source
   */
  loadSprite(name, src) {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      this.sprites[name] = img;
    };
  }

  /**
   * Clear the canvas
   */
  clear() {
    this.ctx.fillStyle = '#0a0a1a';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * Apply screen shake effect
   */
  applyScreenShake() {
    if (gameState.screenShake > 0) {
      const shakeX = (Math.random() - 0.5) * gameState.screenShake;
      const shakeY = (Math.random() - 0.5) * gameState.screenShake;
      this.ctx.save();
      this.ctx.translate(shakeX, shakeY);
      gameState.screenShake *= 0.9;
      if (gameState.screenShake < 0.5) gameState.screenShake = 0;
    }
  }

  /**
   * Restore from screen shake
   */
  restoreScreenShake() {
    if (gameState.screenShake > 0 || gameState.screenShake === 0) {
      this.ctx.restore();
    }
  }

  /**
   * Draw the path
   */
  drawPath() {
    if (!gameState.pathPoints || gameState.pathPoints.length === 0) return;

    const ctx = this.ctx;
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

  /**
   * Draw the station
   * @param {number} x - X position
   * @param {number} y - Y position
   */
  drawStation(x, y) {
    const ctx = this.ctx;
    const sprite = this.sprites['station'];
    
    if (sprite) {
      ctx.drawImage(sprite, x - 32, y - 32, 64, 64);
    } else {
      // Fallback pixel art station
      ctx.fillStyle = '#c0c0d0';
      ctx.fillRect(x - 20, y - 20, 40, 40);
      ctx.fillStyle = '#4a9eff';
      ctx.fillRect(x - 8, y - 16, 16, 8);
      ctx.fillStyle = '#4aff6a';
      ctx.fillRect(x - 12, y, 8, 8);
      ctx.fillRect(x + 4, y, 8, 8);
    }
  }

  /**
   * Draw a tower
   * @param {object} tower - Tower object
   */
  drawTower(tower) {
    const ctx = this.ctx;
    const spriteName = `tower-${tower.type || 'phonics'}`;
    const sprite = this.sprites[spriteName];
    
    if (sprite) {
      ctx.drawImage(sprite, tower.x - 16, tower.y - 16, 32, 32);
    } else {
      // Fallback pixel art tower
      ctx.fillStyle = '#4a9eff';
      ctx.fillRect(tower.x - 12, tower.y - 12, 24, 24);
      ctx.fillStyle = '#606080';
      ctx.fillRect(tower.x - 4, tower.y - 20, 8, 12);
      ctx.fillStyle = '#4aff6a';
      ctx.fillRect(tower.x - 3, tower.y - 3, 6, 6);
    }
  }

  /**
   * Draw an alien
   * @param {object} alien - Alien object
   */
  drawAlien(alien) {
    const ctx = this.ctx;
    const spriteName = `alien-${alien.type || 'wobbly'}`;
    const sprite = this.sprites[spriteName];
    
    if (sprite) {
      const size = alien.type === 'boss' ? 64 : 32;
      ctx.drawImage(sprite, alien.x - size/2, alien.y - size/2, size, size);
    } else {
      // Fallback pixel art alien
      ctx.fillStyle = alien.color || '#4aff6a';
      ctx.fillRect(alien.x - 12, alien.y - 10, 24, 20);
      ctx.fillStyle = '#fff';
      ctx.fillRect(alien.x - 8, alien.y - 6, 6, 6);
      ctx.fillRect(alien.x + 2, alien.y - 6, 6, 6);
      ctx.fillStyle = '#202030';
      ctx.fillRect(alien.x - 6, alien.y - 4, 3, 3);
      ctx.fillRect(alien.x + 4, alien.y - 4, 3, 3);
    }
    
    // Draw HP bar for tanks/bosses
    if (alien.maxHp > 1) {
      const hpBarWidth = alien.type === 'boss' ? 48 : 24;
      const hpPercent = alien.hp / alien.maxHp;
      ctx.fillStyle = '#333';
      ctx.fillRect(alien.x - hpBarWidth/2, alien.y - alien.size/2 - 12, hpBarWidth, 6);
      ctx.fillStyle = hpPercent > 0.5 ? '#4aff6a' : hpPercent > 0.25 ? '#ffa500' : '#ff4a4a';
      ctx.fillRect(alien.x - hpBarWidth/2, alien.y - alien.size/2 - 12, hpBarWidth * hpPercent, 6);
    }
  }

  /**
   * Draw a projectile
   * @param {object} proj - Projectile object
   */
  drawProjectile(proj) {
    const ctx = this.ctx;
    const sprite = this.sprites['projectile-energy'];
    
    if (sprite) {
      ctx.drawImage(sprite, proj.x - 8, proj.y - 8, 16, 16);
    } else {
      // Fallback pixel art projectile
      ctx.fillStyle = '#ffa500';
      ctx.fillRect(proj.x - 4, proj.y - 6, 8, 12);
      ctx.fillStyle = '#ffcc4a';
      ctx.fillRect(proj.x - 2, proj.y - 4, 4, 8);
    }
  }

  /**
   * Draw all particles
   */
  drawParticles() {
    const ctx = this.ctx;
    gameState.particles.forEach(p => {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - p.size/2, p.y - p.size/2, p.size, p.size);
      ctx.restore();
    });
  }

  /**
   * Main render function - called every frame
   */
  render() {
    this.clear();
    this.applyScreenShake();
    
    this.drawPath();
    this.drawStation(this.canvas.width * 0.93, this.canvas.height * 0.5);
    
    gameState.towers.forEach(tower => this.drawTower(tower));
    gameState.aliens.forEach(alien => this.drawAlien(alien));
    gameState.projectiles.forEach(proj => this.drawProjectile(proj));
    this.drawParticles();
    
    this.restoreScreenShake();
  }
}

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Renderer;
}