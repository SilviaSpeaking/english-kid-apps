/**
 * Audio System
 * Handles music, sound effects, and text-to-speech
 */

class AudioSystem {
  constructor() {
    this.enabled = true;
    this.ctx = null;
    this.isPlaying = false;
    this.bgmInterval = null;
    this.volume = 0.3;
  }

  /**
   * Initialize audio context
   */
  init() {
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn('Audio not supported');
    }
  }

  /**
   * Play a tone
   * @param {number} freq - Frequency in Hz
   * @param {string} type - Wave type (sine, square, sawtooth, triangle)
   * @param {number} duration - Duration in seconds
   * @param {number} vol - Volume (0-1)
   */
  playTone(freq, type = 'sine', duration = 0.3, vol = this.volume) {
    if (!this.enabled || !this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.frequency.value = freq;
    osc.type = type;
    
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);
    
    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  /**
   * Play correct answer sound
   */
  playCorrect() {
    this.playTone(523.25, 'sine', 0.3);
    setTimeout(() => this.playTone(659.25, 'sine', 0.3), 100);
    setTimeout(() => this.playTone(783.99, 'sine', 0.4), 200);
  }

  /**
   * Play wrong answer sound
   */
  playWrong() {
    this.playTone(200, 'sawtooth', 0.3, 0.15);
    setTimeout(() => this.playTone(150, 'sawtooth', 0.4, 0.15), 150);
  }

  /**
   * Play tower fire sound
   */
  playFire() {
    this.playTone(400, 'square', 0.15, 0.1);
  }

  /**
   * Play explosion sound
   */
  playExplosion() {
    this.playTone(100, 'sawtooth', 0.3, 0.2);
    setTimeout(() => this.playTone(80, 'sawtooth', 0.4, 0.2), 100);
  }

  /**
   * Play hit sound
   */
  playHit() {
    this.playTone(300, 'triangle', 0.1, 0.15);
  }

  /**
   * Play wave start fanfare
   */
  playWaveStart() {
    [261.63, 329.63, 392, 523.25].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 'sine', 0.5, 0.2), i * 150);
    });
  }

  /**
   * Play game over sound
   */
  playGameOver() {
    [523.25, 466.16, 415.30, 392, 311.13, 261.63].forEach((freq, i) => {
      setTimeout(() => this.playTone(freq, 'sawtooth', 0.4, 0.15), i * 200);
    });
  }

  /**
   * Start background music
   */
  startBGM() {
    if (!this.enabled || this.isPlaying) return;
    
    this.isPlaying = true;
    const notes = [261.63, 0, 293.66, 0, 329.63, 0, 349.23, 0];
    let noteIndex = 0;
    
    const playNote = () => {
      if (!this.isPlaying) return;
      if (notes[noteIndex] > 0) {
        this.playTone(notes[noteIndex], 'sine', 0.3, 0.08);
      }
      noteIndex = (noteIndex + 1) % notes.length;
      setTimeout(playNote, 250);
    };
    
    playNote();
  }

  /**
   * Stop background music
   */
  stopBGM() {
    this.isPlaying = false;
  }

  /**
   * Toggle audio on/off
   * @returns {boolean} New enabled state
   */
  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled && this.ctx) {
      this.ctx.resume();
    }
    return this.enabled;
  }
}

// Create global instance
const audioSys = new AudioSystem();

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AudioSystem, audioSys };
}