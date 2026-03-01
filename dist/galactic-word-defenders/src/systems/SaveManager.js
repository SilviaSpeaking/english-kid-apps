export class SaveManager {
  constructor() {
    this.storageKey = 'galacticWordDefenders';
    this.data = this.load();
  }

  load() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load save data:', e);
    }
    
    return this.createDefaultData();
  }

  createDefaultData() {
    return {
      profiles: [],
      appSettings: {
        parentalPIN: '1234',
        lastActiveProfile: null
      },
      version: '1.0.0'
    };
  }

  save() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
      return true;
    } catch (e) {
      console.warn('Failed to save data:', e);
      return false;
    }
  }

  createProfile(name, avatar = 'avatar_01') {
    const profile = {
      id: this.generateUUID(),
      name,
      avatar,
      createdAt: new Date().toISOString(),
      settings: {
        difficulty: 'adaptive',
        yearGroup: 'reception',
        soundEnabled: true,
        musicVolume: 0.7,
        dyslexiaMode: false,
        textToSpeech: true
      },
      progress: {
        currentGalaxy: 'reception',
        currentPlanet: 'phase2_letters',
        currentWave: 1,
        galaxies: {
          reception: {
            unlocked: true,
            stars: 0,
            maxStars: 120,
            planets: {}
          }
        }
      },
      currency: {
        starCoins: 0,
        totalEarned: 0
      },
      upgrades: {
        towers: {},
        station: {
          shieldLevel: 1,
          repairDrones: false
        },
        cosmetics: []
      },
      wordBank: [],
      analytics: {
        totalPlayTime: 0,
        totalQuestionsAnswered: 0,
        totalCorrect: 0,
        streakBest: 0,
        streakCurrent: 0,
        sessionsPlayed: 0,
        weakAreas: [],
        strongAreas: []
      }
    };

    this.data.profiles.push(profile);
    this.data.appSettings.lastActiveProfile = profile.id;
    this.save();
    
    return profile;
  }

  getActiveProfile() {
    if (!this.data.appSettings.lastActiveProfile) {
      return null;
    }
    
    return this.data.profiles.find(p => p.id === this.data.appSettings.lastActiveProfile);
  }

  saveProgress(wave, score, coins) {
    const profile = this.getActiveProfile();
    if (!profile) return;

    profile.progress.currentWave = Math.max(profile.progress.currentWave, wave);
    profile.currency.starCoins += coins;
    profile.currency.totalEarned += coins;
    profile.analytics.sessionsPlayed++;
    
    this.save();
  }

  recordQuestionAnswer(word, category, correct) {
    const profile = this.getActiveProfile();
    if (!profile) return;

    profile.analytics.totalQuestionsAnswered++;
    if (correct) {
      profile.analytics.totalCorrect++;
    }

    let wordEntry = profile.wordBank.find(w => w.word === word);
    if (!wordEntry) {
      wordEntry = {
        word,
        category,
        timesCorrect: 0,
        timesIncorrect: 0,
        lastSeen: new Date().toISOString(),
        mastered: false
      };
      profile.wordBank.push(wordEntry);
    }

    if (correct) {
      wordEntry.timesCorrect++;
    } else {
      wordEntry.timesIncorrect++;
    }

    wordEntry.mastered = wordEntry.timesCorrect >= 5 && wordEntry.timesIncorrect <= 1;
    
    if (profile.wordBank.length > 2000) {
      profile.wordBank.sort((a, b) => {
        if (a.mastered && !b.mastered) return 1;
        if (!a.mastered && b.mastered) return -1;
        return new Date(b.lastSeen) - new Date(a.lastSeen);
      });
      profile.wordBank = profile.wordBank.slice(0, 2000);
    }

    this.save();
  }

  generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
