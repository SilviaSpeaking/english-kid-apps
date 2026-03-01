import { receptionPhase2Letters } from '../data/reception/phase2_letters.js';

export class QuestionEngine {
  constructor(yearGroup, topic) {
    this.yearGroup = yearGroup;
    this.topic = topic;
    this.questions = this.loadQuestions();
    this.questionHistory = [];
    this.weightedPool = [];
    this.buildWeightedPool();
  }

  loadQuestions() {
    switch(this.topic) {
      case 'phase2_letters':
        return receptionPhase2Letters;
      default:
        return [];
    }
  }

  buildWeightedPool() {
    this.weightedPool = [];
    
    this.questions.forEach(q => {
      let weight = 1;
      
      const history = this.questionHistory.filter(h => h.id === q.id);
      if (history.length > 0) {
        const lastAttempt = history[history.length - 1];
        if (!lastAttempt.correct) {
          weight = 3;
        } else if (history.filter(h => h.correct).length >= 3) {
          weight = 0.5;
        }
      }
      
      for (let i = 0; i < weight; i++) {
        this.weightedPool.push(q);
      }
    });
  }

  getRandomQuestion() {
    if (this.weightedPool.length === 0) {
      this.buildWeightedPool();
    }
    
    const index = Phaser.Math.Between(0, this.weightedPool.length - 1);
    return this.weightedPool[index];
  }

  recordAnswer(questionId, correct) {
    this.questionHistory.push({
      id: questionId,
      correct,
      timestamp: Date.now()
    });
    
    if (this.questionHistory.length > 100) {
      this.questionHistory = this.questionHistory.slice(-100);
    }
    
    this.buildWeightedPool();
  }
}
