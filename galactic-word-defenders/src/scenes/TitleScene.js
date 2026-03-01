export class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  create() {
    const { width, height } = this.scale;

    this.add.rectangle(width / 2, height / 2, width, height, 0x0a0a1a);

    const stars = this.add.graphics();
    for (let i = 0; i < 100; i++) {
      const x = Phaser.Math.Between(0, width);
      const y = Phaser.Math.Between(0, height);
      const size = Phaser.Math.Between(1, 3);
      stars.fillStyle(0xffffff, Phaser.Math.FloatBetween(0.3, 1));
      stars.fillCircle(x, y, size);
    }

    const title = this.add.text(width / 2, height / 2 - 100, 'GALACTIC WORD\nDEFENDERS', {
      font: 'bold 64px Nunito',
      color: '#4a9eff',
      align: 'center',
      stroke: '#ffffff',
      strokeThickness: 8
    }).setOrigin(0.5);

    this.tweens.add({
      targets: title,
      scaleX: 1.05,
      scaleY: 1.05,
      duration: 1500,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    const subtitle = this.add.text(width / 2, height / 2 + 20, 'An Educational Adventure', {
      font: '28px Nunito',
      color: '#aaaaff'
    }).setOrigin(0.5);

    const playButton = this.add.text(width / 2, height / 2 + 150, '🚀 PLAY GAME', {
      font: 'bold 36px Nunito',
      color: '#ffffff',
      backgroundColor: '#4a9eff',
      padding: { x: 40, y: 20 },
      borderRadius: 15
    }).setOrigin(0.5).setInteractive({ useHandCursor: true });

    playButton.on('pointerover', () => playButton.setStyle({ backgroundColor: '#5aafff' }));
    playButton.on('pointerout', () => playButton.setStyle({ backgroundColor: '#4a9eff' }));
    playButton.on('pointerdown', () => {
      this.scene.start('BattleScene');
    });

    const saveData = window.saveManager.load();
    if (saveData && saveData.profiles && saveData.profiles.length > 0) {
      const continueText = this.add.text(width / 2, height / 2 + 230, 'Progress Available!', {
        font: '20px Nunito',
        color: '#4aff6a'
      }).setOrigin(0.5);
    }
  }
}
