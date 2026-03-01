# 📚 Question Bank Summary

## Overview
All questions are aligned with the **UK National Curriculum for English** and follow **London English** standards for pronunciation, spelling, and grammar.

## Question Distribution

| Year Group | Questions | Focus Areas |
|------------|-----------|-------------|
| **Reception** | 100 | Phonics Phase 2 & 3, Letter sounds, CVC words |
| **Year 1** | 200 | Phonics Phase 5 & 6, Digraphs, Split digraphs, Common exception words |
| **Year 2** | 65 | Punctuation, Grammar, Spelling patterns, Prefixes/Suffixes |
| **Year 3** | 65 | Grammar (tenses, clauses), Vocabulary, Homophones |
| **Year 4** | 65 | Advanced punctuation, Relative clauses, Word formation |
| **Year 5** | 65 | Complex grammar, Formal/informal register, Cohesion |
| **Year 6** | 65 | SATs preparation, Advanced punctuation, Passive voice |

## Key Features

### ✅ 4 Answer Options
Every question has **4 answer choices** to:
- Reduce guessing probability (25% vs 50%)
- Provide better differentiation
- Challenge students appropriately

### ✅ Randomized Answer Positions
Answers are **shuffled automatically** each time a question is loaded:
```javascript
// Each question's answers are randomized on load
receptionQuestions.forEach(q => {
  const correctAnswer = q.answers[q.correct];
  q.answers = shuffleArray([...q.answers]);
  q.correct = q.answers.indexOf(correctAnswer);
});
```

This prevents children from memorizing answer positions (e.g., "always the first button").

### ✅ UK Curriculum Alignment

#### Reception (Ages 4-5)
- **Phonics Phase 2**: Single letter sounds (s, a, t, p, i, n, m, d, g, o, c, k, ck, e, u, r, h, b, f, l)
- **Phonics Phase 3**: Digraphs (sh, ch, th, ng, ai, ee, igh, oa, oo, ar, or, ur, er)
- **CVC Words**: Blending consonant-vowel-consonant words
- **Tricky Words**: Common exception words (the, to, go, I, said, etc.)

#### Year 1 (Ages 5-6)
- **Phonics Phase 5**: Alternative graphemes (ay, ou, ie, ea, oy, ir, ue, aw, wh, ew)
- **Split Digraphs**: a-e, i-e, o-e, u-e, e-e
- **Common Exception Words**: 50+ words for memorization
- **Suffixes**: -ing, -ed, -er, -est, -ful, -less, -ly

#### Year 2 (Ages 6-7)
- **Punctuation**: Full stops, capitals, question marks, exclamation marks, commas in lists, apostrophes
- **Grammar**: Nouns, verbs, adjectives, adverbs, past/present tense
- **Spelling**: Adding suffixes, doubling consonants, dropping 'e'

#### Year 3-6 (Ages 7-11)
- **Advanced Grammar**: Relative clauses, passive voice, subjunctive mood
- **Punctuation**: Colons, semicolons, dashes, brackets, speech marks
- **Vocabulary**: Synonyms, antonyms, homophones, prefixes, suffixes
- **SATs Preparation**: Formal/informal register, cohesive devices, word classes

## Question Structure

Each question follows this format:
```javascript
{
  id: 'unique_identifier',      // Unique ID for tracking
  letter: 'TOPIC',              // Topic/Category
  question: "Question text?",    // The question
  answers: [                    // 4 answer options
    "Correct answer",
    "Wrong answer 1",
    "Wrong answer 2",
    "Wrong answer 3"
  ],
  correct: 0,                   // Index of correct answer (0-3)
  hint: {
    text: "Hint text"           // Hint for struggling students
  }
}
```

## Sample Questions

### Reception Example
```javascript
{
  id: 'rec_m_01',
  letter: 'M',
  question: "What sound does 'M' make?",
  answers: ["mmm like mummy", "aaa like ant", "sss like snake", "ttt like tiger"],
  correct: 0,
  hint: { text: "Think of the word 'mummy'" }
}
```

### Year 1 Example
```javascript
{
  id: 'y1_ay_01',
  letter: 'AY',
  question: "What sound does 'ay' make?",
  answers: ["ay like play", "ee like see", "ai like rain", "ea like tea"],
  correct: 0,
  hint: { text: "Like in 'play'" }
}
```

### Year 4+ Example
```javascript
{
  id: 'y4_homophone_01',
  letter: 'THEIR',
  question: "Choose: '___ book' (belongs to them)",
  answers: ["Their", "There", "They're", "Theirs"],
  correct: 0,
  hint: { text: "Possession" }
}
```

## Randomization Algorithm

The shuffle function uses the **Fisher-Yates shuffle**:
```javascript
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

This ensures:
- ✅ True random distribution
- ✅ No bias towards any position
- ✅ Different order every time
- ✅ Fair assessment

## Adding More Questions

To add more questions:

1. Open the relevant file (e.g., `js/questions/year2.js`)
2. Add new question objects following the structure above
3. Ensure each has a **unique ID**
4. The shuffle function will automatically randomize answers

Example:
```javascript
{
  id: 'y2_new_01',
  letter: 'TOPIC',
  question: "Your question?",
  answers: ["Correct", "Wrong1", "Wrong2", "Wrong3"],
  correct: 0,
  hint: { text: "Your hint" }
}
```

## Curriculum References

- **Letters and Sounds** (DfES 2007) - Phonics framework
- **National Curriculum English** (DfE 2014) - KS1 & KS2 programmes of study
- **English Appendix 1** - Spelling word lists
- **English Appendix 2** - Vocabulary, grammar and punctuation

## Assessment Tracking

The game tracks:
- ✅ Questions answered correctly/incorrectly
- ✅ Response time per question
- ✅ Hint usage
- ✅ Question repetition (avoids recent questions)
- ✅ Progress by topic/category

---

**Total Questions: 660+** across all year groups! 🎉