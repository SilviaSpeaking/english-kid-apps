/**
 * Question Panel UI
 * Handles the question display and answer handling
 */

/**
 * Show the question panel
 */
function showQuestionPanel() {
  const q = gameState.currentQuestion;
  if (!q) return;
  
  const els = getUIElements();
  
  els.questionLetter.textContent = q.letter;
  els.questionText.textContent = q.question;
  els.questionPanel.classList.remove('hidden');
  els.timerFill.style.width = '100%';
  els.hintBtn.classList.remove('available');
  
  // Create answer buttons
  els.answersGrid.innerHTML = '';
  q.answers.forEach((answer, index) => {
    const btn = document.createElement('button');
    btn.className = 'answer-btn';
    btn.textContent = answer;
    btn.addEventListener('click', () => handleAnswer(index, btn));
    els.answersGrid.appendChild(btn);
  });
  
  // Start timer
  const diff = DIFFICULTY_SETTINGS[gameState.difficulty];
  let timeLeft = 100;
  
  gameState.questionTimer = setInterval(() => {
    timeLeft -= diff.timerSpeed;
    els.timerFill.style.width = timeLeft + '%';
    
    if (timeLeft <= 0) {
      clearInterval(gameState.questionTimer);
      handleAnswer(-1, null);
    }
  }, 150);
}

/**
 * Handle answer selection
 * @param {number} index - Selected answer index
 * @param {HTMLElement} btn - Button element
 */
function handleAnswer(index, btn) {
  if (gameState.questionAnswered) return;
  gameState.questionAnswered = true;
  clearInterval(gameState.questionTimer);
  
  const q = gameState.currentQuestion;
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach(b => b.disabled = true);
  
  const isCorrect = index === q.correct;
  
  // Speak the answer
  if (index >= 0) {
    speakAnswer(q.answers[index]);
  }
  
  if (isCorrect && btn) {
    btn.classList.add('correct');
    audioSys.playCorrect();
    fireProjectileAtTarget();
  } else {
    if (btn) btn.classList.add('wrong');
    if (buttons[q.correct]) buttons[q.correct].classList.add('correct');
    document.getElementById('hint-btn').classList.add('available');
    audioSys.playWrong();
  }
  
  // Hide panel after delay
  setTimeout(() => {
    document.getElementById('question-panel').classList.add('hidden');
    gameState.isAnswering = false;
    gameState.towerTargets[gameState.firingTowerIndex] = null;
  }, 800);
}

/**
 * Speak answer using TTS
 * @param {string} text - Text to speak
 */
function speakAnswer(text) {
  if (!window.speechSynthesis) return;
  
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  window.speechSynthesis.speak(utterance);
}

// Export for module system
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { showQuestionPanel, handleAnswer };
}