import { QuestionEngine } from '../systems/QuestionEngine.js';

export class BattleScene extends Phaser.Scene {
  constructor() {
    super('BattleScene');
  }

  create() {
    this.questionEngine = new QuestionEngine('reception', 'phase2_letters');
    this.currentQuestion = null;
    this.isAnswering = false;
    
    this.lives = 3;
    this.score = 0;
    this.coins = 0;
    this.wave = 1;
    this.aliensRemaining = 0;
    this.waveInProgress = false;

    this.setupBackground();
    this.setupStation();
    this.setupPath();
    this.setupTowers();
    this.setupUI();
    this.setupGroups();
    
    this.startWave();
  }

  setupBackground() {
    const bg = this.add.tileSprite(640, 360, 1280, 720, 'background_space');
    this.tweens.add({
      targets: bg,
      tilePositionX: 1280,
      duration: 60000,
      repeat: -1,
      ease: 'Linear'
    });
  }

  setupStation() {
    this.station = this.add.sprite(1150, 360, 'station');
    this.station.setDisplaySize(150, 150);
    
    this.stationHealth = 100;
    this.maxStationHealth = 100;
    
    const healthBar = this.add.rectangle(1080, 280, 140, 10, 0x333333);
    this.stationHealthBar = this.add.rectangle(1080, 280, 140, 10, 0x4aff6a);
  }

  setupPath() {
    this.path = this.add.graphics();
    this.path.lineStyle(8, 0x4a4a6a, 0.5);
    this.path.beginPath();
    this.path.moveTo(0, 360);
    this.path.lineTo(200, 360);
    this.path.lineTo(200, 200);
    this.path.lineTo(400, 200);
    this.path.lineTo(400, 500);
    this.path.lineTo(700, 500);
    this.path.lineTo(700, 300);
    this.path.lineTo(950, 300);
    this.path.lineTo(950, 360);
    this.path.lineTo(1100, 360);
    this.path.strokePath();

    this.pathPoints = [
      { x: 0, y: 360 },
      { x: 200, y: 360 },
      { x: 200, y: 200 },
      { x: 400, y: 200 },
      { x: 400, y: 500 },
      { x: 700, y: 500 },
      { x: 700, y: 300 },
      { x: 950, y: 300 },
      { x: 950, y: 360 },
      { x: 1100, y: 360 }
    ];
  }

  setupTowers() {
    this.towers = [];
    const towerPositions = [
      { x: 200, y: 280 },
      { x: 400, y: 280 },
      { x: 700, y: 380 }
    ];

    towerPositions.forEach((pos, index) => {
      const tower = this.add.sprite(pos.x, pos.y, 'tower_phonics');
      tower.setDisplaySize(80, 80);
      tower.id = index;
      tower.range = 200;
      tower.fireRate = 1000;
      tower.lastFired = 0;
      this.towers.push(tower);

      const rangeCircle = this.add.circle(pos.x, pos.y, tower.range, 0x4a9eff, 0.1);
      tower.rangeCircle = rangeCircle;
    });
  }

  setupUI() {
    const uiOverlay = document.getElementById('ui-overlay');
    uiOverlay.classList.remove('hidden');
    
    document.getElementById('pause-btn').classList.remove('hidden');
    document.getElementById('hud').classList.remove('hidden');
    
    this.updateHUD();

    document.getElementById('pause-btn').onclick = () => {
      this.scene.pause();
      alert('Game Paused - Click OK to resume');
      this.scene.resume();
    };
  }

  setupGroups() {
    this.aliens = this.physics.add.group();
    this.projectiles = this.physics.add.group();
  }

  startWave() {
    this.waveInProgress = true;
    this.aliensRemaining = 5 + this.wave * 2;
    this.spawnTimer = 0;
    this.spawnInterval = 2000;
    
    this.showWaveNotification();
  }

  showWaveNotification() {
    const notification = this.add.text(640, 200, `WAVE ${this.wave}`, {
      font: 'bold 72px Nunito',
      color: '#4a9eff',
      stroke: '#ffffff',
      strokeThickness: 6
    }).setOrigin(0.5);

    this.tweens.add({
      targets: notification,
      alpha: 0,
      y: 150,
      duration: 2000,
      delay: 1000,
      onComplete: () => notification.destroy()
    });
  }

  spawnAlien() {
    const alien = this.physics.add.sprite(50, 360, 'alien_wobbly');
    alien.setDisplaySize(60, 60);
    alien.hp = 1;
    alien.pathIndex = 0;
    alien.speed = 80 + (this.wave * 10);
    alien.setTint(Phaser.Math.Between(0, 0xffffff));
    
    this.aliens.add(alien);
  }

  update(time, delta) {
    if (!this.waveInProgress) return;

    this.spawnTimer += delta;
    if (this.spawnTimer >= this.spawnInterval && this.aliensRemaining > 0) {
      this.spawnAlien();
      this.spawnTimer = 0;
      this.aliensRemaining--;
    }

    this.towers.forEach(tower => {
      if (time >= tower.lastFired + tower.fireRate) {
        const target = this.findClosestAlien(tower);
        if (target) {
          this.fireTower(tower, target);
          tower.lastFired = time;
        }
      }
    });

    this.aliens.getChildren().forEach(alien => {
      this.moveAlien(alien, delta);
      
      if (alien.x >= 1100) {
        alien.destroy();
        this.damageStation(10);
      }
    });

    this.projectiles.getChildren().forEach(proj => {
      if (proj.x > 1280 || proj.y > 720 || proj.x < 0 || proj.y < 0) {
        proj.destroy();
      }
    });

    if (this.aliens.countActive() === 0 && this.aliensRemaining === 0) {
      this.completeWave();
    }
  }

  findClosestAlien(tower) {
    let closest = null;
    let minDist = tower.range;

    this.aliens.getChildren().forEach(alien => {
      const dist = Phaser.Math.Distance.Between(tower.x, tower.y, alien.x, alien.y);
      if (dist < minDist) {
        minDist = dist;
        closest = alien;
      }
    });

    return closest;
  }

  fireTower(tower, target) {
    this.currentQuestion = this.questionEngine.getRandomQuestion();
    this.isAnswering = true;
    
    this.showQuestionPanel(this.currentQuestion, () => {
      const correct = this.lastAnswerCorrect;
      if (correct) {
        this.score += 10;
        this.coins += 1;
        
        const projectile = this.projectiles.create(tower.x, tower.y, 'projectile_letter');
        projectile.setDisplaySize(30, 30);
        this.physics.moveTo(projectile, target.x, target.y, 500);
        
        this.time.delayedCall(200, () => {
          target.hp--;
          if (target.hp <= 0) {
            this.destroyAlien(target);
          }
        });
        
        this.playSound('correct');
      } else {
        this.playSound('wrong');
      }
      
      this.isAnswering = false;
      this.updateHUD();
    });
  }

  showQuestionPanel(question, callback) {
    const panel = document.getElementById('question-panel');
    const textEl = document.getElementById('question-text');
    const imageEl = document.getElementById('question-image');
    const answersEl = document.getElementById('answers-grid');
    const timerFill = document.getElementById('timer-fill');
    const hintBtn = document.getElementById('hint-btn');

    panel.classList.remove('hidden');
    textEl.textContent = question.question.text;
    imageEl.innerHTML = question.question.image ? `<img src="${question.question.image}" alt="">` : '';
    
    answersEl.innerHTML = '';
    question.answers.forEach((answer, index) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.textContent = answer.text;
      btn.onclick = () => {
        this.handleAnswer(answer, btn, callback);
      };
      answersEl.appendChild(btn);
    });

    hintBtn.classList.remove('available');
    hintBtn.onclick = () => {
      if (hintBtn.classList.contains('available')) {
        alert('Hint: ' + question.hint.text);
      }
    };

    let timeLeft = 100;
    const timerInterval = setInterval(() => {
      timeLeft -= 2;
      timerFill.style.width = timeLeft + '%';
      
      if (timeLeft <= 30 && !this.isAnswering) {
        clearInterval(timerInterval);
        this.lastAnswerCorrect = false;
        panel.classList.add('hidden');
        callback();
      }
    }, 20);

    this.questionTimerInterval = timerInterval;
  }

  handleAnswer(answer, btn, callback) {
    clearInterval(this.questionTimerInterval);
    
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(b => b.disabled = true);

    if (answer.correct) {
      btn.classList.add('correct');
      this.lastAnswerCorrect = true;
    } else {
      btn.classList.add('wrong');
      this.lastAnswerCorrect = false;
      
      buttons.forEach((b, i) => {
        if (this.currentQuestion.answers[i].correct) {
          b.classList.add('correct');
        }
      });
    }

    const hintBtn = document.getElementById('hint-btn');
    hintBtn.classList.add('available');

    setTimeout(() => {
      document.getElementById('question-panel').classList.add('hidden');
      callback();
    }, 1000);
  }

  moveAlien(alien, delta) {
    const target = this.pathPoints[alien.pathIndex + 1];
    if (!target) return;

    const angle = Phaser.Math.Angle.Between(alien.x, alien.y, target.x, target.y);
    alien.x += Math.cos(angle) * alien.speed * (delta / 1000);
    alien.y += Math.sin(angle) * alien.speed * (delta / 1000);

    if (Phaser.Math.Distance.Between(alien.x, alien.y, target.x, target.y) < 10) {
      alien.pathIndex++;
    }

    alien.setAngle(Phaser.Math.RadToDeg(angle) - 90);
  }

  destroyAlien(alien) {
    const particles = this.add.particles(alien.x, alien.y, 'projectile_letter', {
      speed: 100,
      scale: { start: 0.5, end: 0 },
      blendMode: 'ADD',
      lifespan: 500,
      quantity: 10
    });

    setTimeout(() => particles.destroy(), 500);
    alien.destroy();
  }

  damageStation(amount) {
    this.stationHealth -= amount;
    const healthPercent = this.stationHealth / this.maxStationHealth;
    this.stationHealthBar.width = 140 * healthPercent;
    
    if (healthPercent < 0.3) {
      this.stationHealthBar.setFillStyle(0xff4a4a);
    } else if (healthPercent < 0.6) {
      this.stationHealthBar.setFillStyle(0xffaa4a);
    }

    this.lives--;
    this.updateHUD();

    if (this.stationHealth <= 0) {
      this.gameOver();
    }
  }

  completeWave() {
    this.waveInProgress = false;
    this.wave++;
    
    const bonus = this.lives * 5;
    this.coins += bonus;
    this.updateHUD();

    setTimeout(() => {
      this.startWave();
    }, 2000);
  }

  gameOver() {
    this.waveInProgress = false;
    
    document.getElementById('question-panel').classList.add('hidden');
    
    const gameOverText = this.add.text(640, 360, 'GAME OVER\nWave Reached: ' + this.wave, {
      font: 'bold 64px Nunito',
      color: '#ff4a4a',
      align: 'center',
      stroke: '#ffffff',
      strokeThickness: 6
    }).setOrigin(0.5);

    const restartBtn = this.add.text(640, 500, '🔄 PLAY AGAIN', {
      font: 'bold 36px Nunito',
      color: '#ffffff',
      backgroundColor: '#4a9eff',
      padding: { x: 30, y: 15 },
      borderRadius: 10
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    restartBtn.on('pointerdown', () => {
      document.getElementById('question-panel').classList.add('hidden');
      this.scene.restart();
    });

    window.saveManager.saveProgress(this.wave, this.score, this.coins);
  }

  updateHUD() {
    document.getElementById('lives-display').textContent = this.lives;
    document.getElementById('score-display').textContent = this.score;
    document.getElementById('coins-display').textContent = this.coins;
  }

  playSound(name) {
    try {
      const audio = this.sound.get(name);
      if (audio) audio.play();
    } catch (e) {}
  }

  shutdown() {
    document.getElementById('question-panel').classList.add('hidden');
    document.getElementById('pause-btn').classList.add('hidden');
    document.getElementById('hud').classList.add('hidden');
    clearInterval(this.questionTimerInterval);
  }
}
