export class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(540, 340, 200, 50);

    const loadingText = this.add.text(640, 320, 'Loading...', {
      font: '28px Nunito',
      color: '#ffffff'
    }).setOrigin(0.5);

    this.load.on('progress', (value) => {
      progressBar.clear();
      progressBar.fillStyle(0x4a9eff, 1);
      progressBar.fillRect(550, 350, 180 * value, 30);
    });

    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
    });

    this.load.svg('station', 'assets/sprites/station.svg');
    this.load.svg('alien_wobbly', 'assets/sprites/alien_wobbly.svg');
    this.load.svg('tower_phonics', 'assets/sprites/tower_phonics.svg');
    this.load.svg('projectile_letter', 'assets/sprites/projectile_letter.svg');
    this.load.image('background_space', 'assets/backgrounds/space_nebula.svg');
  }

  create() {
    this.scene.start('TitleScene');
  }
}
