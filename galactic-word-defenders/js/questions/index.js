/**
 * Question Bank Manager - Combines all question sets
 */

// Combine all question banks into one global object
const QUESTION_BANKS = {
  reception: receptionQuestions || [],
  year1: year1Questions || [],
  year2: year2Questions || [],
  year3: year3Questions || [],
  year4: year4Questions || [],
  year5: year5Questions || [],
  year6: year6Questions || []
};

// Question tracking
let askedQuestions = [];
const maxQuestionHistory = 15;
let currentQuestion = null;

/**
 * Get a random question from the specified level
 */
function getRandomQuestion(level = 'reception') {
  const questions = QUESTION_BANKS[level] || QUESTION_BANKS.reception;
  
  // Filter out recently asked questions
  const available = questions.filter(q => !askedQuestions.includes(q.id));
  
  // Reset if too few questions available
  if (available.length < 5) {
    askedQuestions = [];
  }
  
  const pool = available.length > 0 ? available : questions;
  currentQuestion = pool[Math.floor(Math.random() * pool.length)];
  
  // Track this question
  askedQuestions.push(currentQuestion.id);
  if (askedQuestions.length > maxQuestionHistory) {
    askedQuestions.shift();
  }
  
  return currentQuestion;
}

/**
 * Reset question history
 */
function resetQuestionHistory() {
  askedQuestions = [];
  currentQuestion = null;
}