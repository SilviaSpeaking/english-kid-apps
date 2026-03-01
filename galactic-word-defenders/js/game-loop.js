/**
 * Game Loop
 * Main game loop and update logic
 */

class GameLoop {
  constructor(renderer) {
    this.renderer = renderer;
    this.running = false;
    this.lastTime = 0;
  }

  /**
   * Start the game loop
   */
  start() {
    this.running = true;
    this.lastTime = performance.now();
    requestAnimationFrame((time) => this.loop(time));
  }

  /**
   * Stop the game loop
   */
  stop() {
    this.running = false;
  }

  /**
   * Main game loop
   * @param {number} currentTime - Current time in ms
   */
  loop(currentTime) {
    if (!this.running || gameState.inShop) return;

    const delta = currentTime - this.lastTime;
    this.lastTime = currentTime;

    this.update(delta, currentTime);
    this.renderer.render();

    requestAnimationFrame((time) => this.loop(time));
  }

  /**
   * Update game state
   * @param {number} delta - Time since last frame (ms)
   * @param {number} time - Current time (ms)
   */
  update(delta, time) {
    if (!gameState.waveInProgress) return;

    // Update combo timer
    if (gameState.combo > 0) {
      gameState.comboTimer -= delta;
      if (gameState.comboTimer <= 0) {
        gameState.combo = 0;
        updateComboUI();
      }
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
      
      // Check if reached station
      if (alien.pathIndex >= gameState.pathPoints.length - 1) {
        gameState.aliens.splice(index, 1);
        damageStation(10);
      }
    });

    // Update projectiles
    updateProjectiles(delta);

    // Update particles
    updateParticles(delta);

    // Check wave complete
    if (gameState.aliens.length === 0 && gameState.aliensRemaining === 0) {
      completeWave();
    }
  }
}

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameLoop;
}