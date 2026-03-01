/**
 * Year 2 Questions (Ages -)
 * UK National Curriculum - English
 * Focus: Grammar, punctuation, vocabulary, spelling patterns
 */

const year2Questions = [
  // Punctuation (10 questions)
  { id: 'y2_punc_01', letter: '?', question: "Add punctuation: 'What is your name'", answers: ["?", ".", "!", ","], correct: 0, hint: { text: "It's a question" } },
  { id: 'y2_punc_02', letter: '.', question: "Add punctuation: 'I like cats'", answers: [".", "?", "!", ","], correct: 0, hint: { text: "Statement ends" } },
  { id: 'y2_punc_03', letter: '!', question: "Add punctuation: 'Wow'", answers: ["!", ".", "?", ","], correct: 0, hint: { text: "Surprise!" } },
  { id: 'y2_punc_04', letter: "'", question: "Where does apostrophe go: 'the cats toy'", answers: ["cat's", "cats'", "cats", "cat"], correct: 0, hint: { text: "One cat owns it" } },
  { id: 'y2_punc_05', letter: "'", question: "Where does apostrophe go: 'the dogs toys'", answers: ["dogs'", "dog's", "dogs", "dog"], correct: 0, hint: { text: "Many dogs" } },
  { id: 'y2_punc_06', letter: ',', question: "Add comma: 'I like apples ___ bananas and oranges'", answers: [",", ".", "?", "!"], correct: 0, hint: { text: "List separator" } },
  { id: 'y2_punc_07', letter: ':', question: "Add colon: 'I need three things ___ pen, paper and rubber'", answers: [":", ";", ",", "-"], correct: 0, hint: { text: "Before list" } },
  { id: 'y2_punc_08', letter: ';', question: "Add semicolon: 'I was tired ___ I went to bed'", answers: [";", ":", ",", "."], correct: 0, hint: { text: "Join clauses" } },
  { id: 'y2_punc_09', letter: '"', question: "Add speech marks: He said hello", answers: ['He said "hello"', '"He said hello"', 'He "said" hello', '"He" said hello'], correct: 0, hint: { text: "Around spoken words" } },
  { id: 'y2_punc_10', letter: '-', question: "Add hyphen: 'well ___ known actor'", answers: ["-", "", ",", "."], correct: 0, hint: { text: "Compound word" } },
  
  // Grammar (15 questions)
  { id: 'y2_gram_01', letter: 'NOUN', question: "Find the noun: 'The cat sleeps'", answers: ["cat", "the", "sleeps", "none"], correct: 0, hint: { text: "Thing/animal" } },
  { id: 'y2_gram_02', letter: 'VERB', question: "Find the verb: 'The cat sleeps'", answers: ["sleeps", "cat", "the", "none"], correct: 0, hint: { text: "Action word" } },
  { id: 'y2_gram_03', letter: 'ADJ', question: "Find the adjective: 'The red ball'", answers: ["red", "ball", "the", "none"], correct: 0, hint: { text: "Describes noun" } },
  { id: 'y2_gram_04', letter: 'ADV', question: "Find the adverb: 'He runs quickly'", answers: ["quickly", "runs", "he", "none"], correct: 0, hint: { text: "Describes verb" } },
  { id: 'y2_gram_05', letter: 'PRONOUN', question: "Find the pronoun: 'She is nice'", answers: ["she", "is", "nice", "none"], correct: 0, hint: { text: "Replaces noun" } },
  { id: 'y2_gram_06', letter: 'PREP', question: "Find the preposition: 'The cat is under the table'", answers: ["under", "cat", "table", "is"], correct: 0, hint: { text: "Shows position" } },
  { id: 'y2_gram_07', letter: 'CONJ', question: "Find the conjunction: 'I like cats and dogs'", answers: ["and", "like", "cats", "dogs"], correct: 0, hint: { text: "Joining word" } },
  { id: 'y2_gram_08', letter: 'TENSE', question: "What tense: 'I walked to school'", answers: ["past", "present", "future", "continuous"], correct: 0, hint: { text: "Already happened" } },
  { id: 'y2_gram_09', letter: 'TENSE', question: "What tense: 'I walk to school'", answers: ["present", "past", "future", "continuous"], correct: 0, hint: { text: "Happens now" } },
  { id: 'y2_gram_10', letter: 'TENSE', question: "What tense: 'I will walk to school'", answers: ["future", "past", "present", "continuous"], correct: 0, hint: { text: "Will happen" } },
  { id: 'y2_gram_11', letter: 'PLURAL', question: "Plural of 'child':", answers: ["children", "childs", "childes", "childi"], correct: 0, hint: { text: "Irregular" } },
  { id: 'y2_gram_12', letter: 'PLURAL', question: "Plural of 'mouse':", answers: ["mice", "mouses", "mousees", "mousi"], correct: 0, hint: { text: "Irregular" } },
  { id: 'y2_gram_13', letter: 'PLURAL', question: "Plural of 'sheep':", answers: ["sheep", "sheeps", "sheepes", "sheepi"], correct: 0, hint: { text: "Same as singular" } },
  { id: 'y2_gram_14', letter: 'PASSIVE', question: "Passive: 'The cat chased the mouse'", answers: ["The mouse was chased by the cat", "The mouse chased the cat", "The cat was chased", "The mouse is chased"], correct: 0, hint: { text: "Object becomes subject" } },
  { id: 'y2_gram_15', letter: 'ACTIVE', question: "Active: 'The ball was kicked by John'", answers: ["John kicked the ball", "The ball kicked John", "John was kicked", "The ball is kicked"], correct: 0, hint: { text: "Subject does action" } },
  
  // Vocabulary (15 questions)
  { id: 'y2_vocab_01', letter: 'SYNONYM', question: "Synonym of 'big':", answers: ["large", "small", "tiny", "little"], correct: 0, hint: { text: "Same meaning" } },
  { id: 'y2_vocab_02', letter: 'SYNONYM', question: "Synonym of 'happy':", answers: ["joyful", "sad", "angry", "cross"], correct: 0, hint: { text: "Same meaning" } },
  { id: 'y2_vocab_03', letter: 'ANTONYM', question: "Antonym of 'hot':", answers: ["cold", "warm", "cool", "freezing"], correct: 0, hint: { text: "Opposite" } },
  { id: 'y2_vocab_04', letter: 'ANTONYM', question: "Antonym of 'fast':", answers: ["slow", "quick", "rapid", "swift"], correct: 0, hint: { text: "Opposite" } },
  { id: 'y2_vocab_05', letter: 'PREFIX', question: "Add 'un-' to 'do':", answers: ["undo", "doer", "doing", "done"], correct: 0, hint: { text: "Reverse action" } },
  { id: 'y2_vocab_06', letter: 'PREFIX', question: "Add 'dis-' to 'like':", answers: ["dislike", "liking", "liked", "liker"], correct: 0, hint: { text: "Opposite" } },
  { id: 'y2_vocab_07', letter: 'PREFIX', question: "Add 're-' to 'write':", answers: ["rewrite", "writer", "writing", "wrote"], correct: 0, hint: { text: "Write again" } },
  { id: 'y2_vocab_08', letter: 'SUFFIX', question: "Add '-ful' to 'help':", answers: ["helpful", "help", "helping", "helper"], correct: 0, hint: { text: "Full of help" } },
  { id: 'y2_vocab_09', letter: 'SUFFIX', question: "Add '-less' to 'hope':", answers: ["hopeless", "hope", "hoping", "hoper"], correct: 0, hint: { text: "Without hope" } },
  { id: 'y2_vocab_10', letter: 'SUFFIX', question: "Add '-ly' to 'quick':", answers: ["quickly", "quick", "quicken", "quicker"], correct: 0, hint: { text: "In a quick way" } },
  { id: 'y2_vocab_11', letter: 'HOMOPHONE', question: "Choose: '___ book' (belongs to them)", answers: ["Their", "There", "They're", "Theirs"], correct: 0, hint: { text: "Possession" } },
  { id: 'y2_vocab_12', letter: 'HOMOPHONE', question: "Choose: 'Over ___'", answers: ["there", "their", "they're", "theirs"], correct: 0, hint: { text: "A place" } },
  { id: 'y2_vocab_13', letter: 'HOMOPHONE', question: "Choose: '___ playing'", answers: ["They're", "Their", "There", "Theirs"], correct: 0, hint: { text: "They are" } },
  { id: 'y2_vocab_14', letter: 'HOMOPHONE', question: "Choose: 'It will ___ you'", answers: ["affect", "effect", "affects", "effects"], correct: 0, hint: { text: "Verb - influence" } },
  { id: 'y2_vocab_15', letter: 'HOMOPHONE', question: "Choose: 'The ___ was good'", answers: ["effect", "affect", "affects", "effects"], correct: 0, hint: { text: "Noun - result" } },
  
  // Spelling (15 questions)
  { id: 'y2_spell_01', letter: 'ING', question: "Add -ing to 'jump':", answers: ["jumping", "jump", "jumped", "jumps"], correct: 0, hint: { text: "Doing now" } },
  { id: 'y2_spell_02', letter: 'ING', question: "Add -ing to 'run':", answers: ["running", "runing", "run", "ran"], correct: 0, hint: { text: "Double the n" } },
  { id: 'y2_spell_03', letter: 'ING', question: "Add -ing to 'make':", answers: ["making", "makeing", "make", "made"], correct: 0, hint: { text: "Drop the e" } },
  { id: 'y2_spell_04', letter: 'ED', question: "Add -ed to 'walk':", answers: ["walked", "walkt", "walk", "walking"], correct: 0, hint: { text: "Past tense" } },
  { id: 'y2_spell_05', letter: 'ED', question: "Add -ed to 'play':", answers: ["played", "plaied", "play", "playing"], correct: 0, hint: { text: "Past of play" } },
  { id: 'y2_spell_06', letter: 'ED', question: "Add -ed to 'stop':", answers: ["stopped", "stoped", "stop", "stopping"], correct: 0, hint: { text: "Double the p" } },
  { id: 'y2_spell_07', letter: 'ER', question: "Add -er to 'teach':", answers: ["teacher", "teachor", "teach", "teaching"], correct: 0, hint: { text: "Person who teaches" } },
  { id: 'y2_spell_08', letter: 'ER', question: "Add -er to 'run':", answers: ["runner", "runer", "run", "running"], correct: 0, hint: { text: "Person who runs" } },
  { id: 'y2_spell_09', letter: 'TION', question: "Complete: 'Educa____'", answers: ["tion", "sion", "cion", "tion"], correct: 0, hint: { text: "Learning" } },
  { id: 'y2_spell_10', letter: 'SION', question: "Complete: 'Televi____'", answers: ["sion", "tion", "cion", "tion"], correct: 0, hint: { text: "Watch programmes" } },
  { id: 'y2_spell_11', letter: 'ABLE', question: "Add -able to 'read':", answers: ["readable", "read", "reading", "reader"], correct: 0, hint: { text: "Can be read" } },
  { id: 'y2_spell_12', letter: 'IBLE', question: "Which word has 'IBLE'?", answers: ["possible", "possib", "possable", "possably"], correct: 0, hint: { text: "Can happen" } },
  { id: 'y2_spell_13', letter: 'IES', question: "Change 'baby' to plural:", answers: ["babies", "babys", "babyes", "babi"], correct: 0, hint: { text: "Change y to ies" } },
  { id: 'y2_spell_14', letter: 'VES', question: "Change 'leaf' to plural:", answers: ["leaves", "leafs", "leafes", "leavi"], correct: 0, hint: { text: "Change f to ves" } },
  { id: 'y2_spell_15', letter: 'OUGH', question: "How is 'ough' pronounced in 'through'?", answers: ["oo", "off", "oh", "ow"], correct: 0, hint: { text: "Like 'oo'" } },
  
  // Sentence structure (10 questions)
  { id: 'y2_sent_01', letter: 'SO', question: "Join: 'I was tired ___ I went to bed'", answers: ["so", "but", "and", "or"], correct: 0, hint: { text: "Result" } },
  { id: 'y2_sent_02', letter: 'BECAUSE', question: "Join: 'I smiled ___ I was happy'", answers: ["because", "but", "so", "and"], correct: 0, hint: { text: "Reason" } },
  { id: 'y2_sent_03', letter: 'WHEN', question: "Join: 'I was sleeping ___ you called'", answers: ["when", "but", "so", "or"], correct: 0, hint: { text: "Time" } },
  { id: 'y2_sent_04', letter: 'IF', question: "Join: '___ you study hard you will pass'", answers: ["If", "But", "So", "When"], correct: 0, hint: { text: "Condition" } },
  { id: 'y2_sent_05', letter: 'AND', question: "Join: 'I like cats ___ dogs'", answers: ["and", "but", "so", "or"], correct: 0, hint: { text: "Addition" } },
  { id: 'y2_sent_06', letter: 'BUT', question: "Join: 'I like cats ___ not dogs'", answers: ["but", "and", "so", "or"], correct: 0, hint: { text: "Contrast" } },
  { id: 'y2_sent_07', letter: 'OR', question: "Join: 'Do you want tea ___ coffee?'", answers: ["or", "and", "but", "so"], correct: 0, hint: { text: "Choice" } },
  { id: 'y2_sent_08', letter: 'ALTHOUGH', question: "Join: '___ it rained we played outside'", answers: ["Although", "Because", "So", "But"], correct: 0, hint: { text: "Despite" } },
  { id: 'y2_sent_09', letter: 'WHILE', question: "Join: 'I read ___ she watched TV'", answers: ["while", "because", "so", "but"], correct: 0, hint: { text: "At same time" } },
  { id: 'y2_sent_10', letter: 'UNTIL', question: "Join: 'Wait here ___ I return'", answers: ["until", "because", "so", "but"], correct: 0, hint: { text: "Up to time" } }
];

// Helper function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Randomize answer positions for each question
year2Questions.forEach(q => {
  const correctAnswer = q.answers[q.correct];
  q.answers = shuffleArray([...q.answers]);
  q.correct = q.answers.indexOf(correctAnswer);
});
