/**
 * Save System
 * Handles game state persistence using localStorage
 */

class SaveSystem {
  constructor() {
    this.storageKey = 'galacticWordDefenders_v2';
    this.slots = [];
    this.maxSlots = 5;
    this.load();
  }

  /**
   * Load save data from localStorage
   */
  load() {
    try {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        this.slots = JSON.parse(data);
      } else {
        this.slots = Array(this.maxSlots).fill(null);
      }
    } catch (e) {
      console.error('Failed to load save data:', e);
      this.slots = Array(this.maxSlots).fill(null);
    }
  }

  /**
   * Save game state to slot
   * @param {number} slotIndex - Slot number (0-4)
   * @param {object} data - Game state data
   */
  save(slotIndex, data) {
    if (slotIndex < 0 || slotIndex >= this.maxSlots) return;
    
    this.slots[slotIndex] = {
      ...data,
      savedAt: new Date().toISOString(),
      version: '2.0'
    };
    
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.slots));
      console.log(`Game saved to slot ${slotIndex + 1}`);
    } catch (e) {
      console.error('Failed to save game:', e);
      alert('⚠️ Save failed! Storage may be full.');
    }
  }

  /**
   * Delete save from slot
   * @param {number} slotIndex - Slot number (0-4)
   */
  delete(slotIndex) {
    if (slotIndex < 0 || slotIndex >= this.maxSlots) return;
    this.slots[slotIndex] = null;
    
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.slots));
    } catch (e) {
      console.error('Failed to delete save:', e);
    }
  }

  /**
   * Get save data from slot
   * @param {number} slotIndex - Slot number (0-4)
   * @returns {object|null} Save data or null
   */
  get(slotIndex) {
    if (slotIndex < 0 || slotIndex >= this.maxSlots) return null;
    return this.slots[slotIndex];
  }

  /**
   * Check if any saves exist
   * @returns {boolean} True if saves exist
   */
  hasSaves() {
    return this.slots.some(slot => slot !== null);
  }

  /**
   * Get all saves
   * @returns {array} Array of save data
   */
  getAll() {
    return this.slots;
  }

  /**
   * Clear all saves
   */
  clearAll() {
    this.slots = Array(this.maxSlots).fill(null);
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.slots));
    } catch (e) {
      console.error('Failed to clear saves:', e);
    }
  }
}

// Create global instance
const saveSystem = new SaveSystem();

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SaveSystem, saveSystem };
}