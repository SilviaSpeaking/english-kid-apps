/**
 * Reception Level Questions (Ages 4-5)
 * UK National Curriculum - Phonics Phase 2 & 3
 * Focus: Letter sounds, CVC words, basic phonics
 */

const receptionQuestions = [
  // Letter M (5 questions)
  { id: 'rec_m_01', letter: 'M', question: "What sound does 'M' make?", answers: ["mmm like mummy", "aaa like ant", "sss like snake", "ttt like tiger"], correct: 0, hint: { text: "Think of the word 'mummy'" } },
  { id: 'rec_m_02', letter: 'M', question: "Which word starts with 'M'?", answers: ["moon", "sun", "star", "sky"], correct: 0, hint: { text: "It shines at night" } },
  { id: 'rec_m_03', letter: 'M', question: "Find the 'M' sound:", answers: ["milk", "water", "juice", "soda"], correct: 0, hint: { text: "It's a white drink" } },
  { id: 'rec_m_04', letter: 'M', question: "Which animal says 'Moo'?", answers: ["mouse", "monkey", "mole", "magpie"], correct: 0, hint: { text: "Small grey animal" } },
  { id: 'rec_m_05', letter: 'M', question: "What starts with 'M'?", answers: ["map", "globe", "compass", "ruler"], correct: 0, hint: { text: "Shows where places are" } },
  
  // Letter A (5 questions)
  { id: 'rec_a_01', letter: 'A', question: "What sound does 'A' make?", answers: ["aaa like ant", "ooo like octopus", "eee like egg", "iii like ink"], correct: 0, hint: { text: "Open wide at the doctor" } },
  { id: 'rec_a_02', letter: 'A', question: "Which word starts with 'A'?", answers: ["apple", "ball", "cat", "dog"], correct: 0, hint: { text: "It's a red fruit" } },
  { id: 'rec_a_03', letter: 'A', question: "Find the 'A' sound:", answers: ["alligator", "crocodile", "snake", "lizard"], correct: 0, hint: { text: "Big reptile" } },
  { id: 'rec_a_04', letter: 'A', question: "What starts with 'A'?", answers: ["acorn", "leaf", "branch", "root"], correct: 0, hint: { text: "Grows into an oak tree" } },
  { id: 'rec_a_05', letter: 'A', question: "Which is an 'A' word?", answers: ["arm", "leg", "foot", "hand"], correct: 0, hint: { text: "You wave with this" } },
  
  // Letter T (5 questions)
  { id: 'rec_t_01', letter: 'T', question: "What sound does 'T' make?", answers: ["ttt like tiger", "mmm like monkey", "sss like snake", "bbb like bear"], correct: 0, hint: { text: "Striped animal" } },
  { id: 'rec_t_02', letter: 'T', question: "Which word starts with 'T'?", answers: ["train", "car", "bus", "plane"], correct: 0, hint: { text: "It runs on tracks" } },
  { id: 'rec_t_03', letter: 'T', question: "Find the 'T' sound:", answers: ["table", "chair", "sofa", "bed"], correct: 0, hint: { text: "You eat on this" } },
  { id: 'rec_t_04', letter: 'T', question: "What starts with 'T'?", answers: ["tooth", "nose", "ear", "eye"], correct: 0, hint: { text: "You brush this" } },
  { id: 'rec_t_05', letter: 'T', question: "Which is a 'T' word?", answers: ["teddy", "doll", "ball", "kite"], correct: 0, hint: { text: "Soft toy bear" } },
  
  // Letter S (5 questions)
  { id: 'rec_s_01', letter: 'S', question: "What sound does 'S' make?", answers: ["sss like snake", "zzz like buzz", "shh like shush", "chh like chat"], correct: 0, hint: { text: "Hissy sound" } },
  { id: 'rec_s_02', letter: 'S', question: "Which word starts with 'S'?", answers: ["spider", "fly", "bee", "wasp"], correct: 0, hint: { text: "It has eight legs" } },
  { id: 'rec_s_03', letter: 'S', question: "Find the 'S' sound:", answers: ["star", "moon", "sun", "cloud"], correct: 0, hint: { text: "It twinkles" } },
  { id: 'rec_s_04', letter: 'S', question: "What starts with 'S'?", answers: ["sock", "shoe", "boot", "sandal"], correct: 0, hint: { text: "You wear this on your foot" } },
  { id: 'rec_s_05', letter: 'S', question: "Which is an 'S' word?", answers: ["sand", "water", "stone", "mud"], correct: 0, hint: { text: "At the beach" } },
  
  // Letter P (5 questions)
  { id: 'rec_p_01', letter: 'P', question: "What sound does 'P' make?", answers: ["ppp like pig", "bbb like bear", "ttt like tap", "ddd like dog"], correct: 0, hint: { text: "It says oink" } },
  { id: 'rec_p_02', letter: 'P', question: "Which word starts with 'P'?", answers: ["penguin", "ostrich", "eagle", "hawk"], correct: 0, hint: { text: "It can't fly" } },
  { id: 'rec_p_03', letter: 'P', question: "Find the 'P' sound:", answers: ["pizza", "burger", "sandwich", "soup"], correct: 0, hint: { text: "Italian food" } },
  { id: 'rec_p_04', letter: 'P', question: "What starts with 'P'?", answers: ["pen", "pencil", "ruler", "rubber"], correct: 0, hint: { text: "You write with this" } },
  { id: 'rec_p_05', letter: 'P', question: "Which is a 'P' word?", answers: ["pot", "pan", "plate", "spoon"], correct: 0, hint: { text: "You cook in this" } },
  
  // Letter N (5 questions)
  { id: 'rec_n_01', letter: 'N', question: "What sound does 'N' make?", answers: ["nnn like nest", "ttt like net", "mmm like mat", "sss like sat"], correct: 0, hint: { text: "Birds live here" } },
  { id: 'rec_n_02', letter: 'N', question: "Which word starts with 'N'?", answers: ["nose", "ear", "eye", "mouth"], correct: 0, hint: { text: "You smell with this" } },
  { id: 'rec_n_03', letter: 'N', question: "Find the 'N' sound:", answers: ["nine", "eight", "seven", "six"], correct: 0, hint: { text: "Comes after eight" } },
  { id: 'rec_n_04', letter: 'N', question: "What starts with 'N'?", answers: ["net", "bat", "ball", "racket"], correct: 0, hint: { text: "Used in football" } },
  { id: 'rec_n_05', letter: 'N', question: "Which is an 'N' word?", answers: ["nurse", "doctor", "teacher", "driver"], correct: 0, hint: { text: "Works in a hospital" } },
  
  // Letter I (5 questions)
  { id: 'rec_i_01', letter: 'I', question: "What sound does 'I' make?", answers: ["iii like insect", "eee like egg", "aaa like ant", "ooo like octopus"], correct: 0, hint: { text: "Tiny bug" } },
  { id: 'rec_i_02', letter: 'I', question: "Which word starts with 'I'?", answers: ["ice", "fire", "water", "earth"], correct: 0, hint: { text: "Very cold" } },
  { id: 'rec_i_03', letter: 'I', question: "Find the 'I' sound:", answers: ["ink", "pencil", "pen", "ruler"], correct: 0, hint: { text: "Write with this" } },
  { id: 'rec_i_04', letter: 'I', question: "What starts with 'I'?", answers: ["igloo", "house", "flat", "tent"], correct: 0, hint: { text: "Made of ice" } },
  { id: 'rec_i_05', letter: 'I', question: "Which is an 'I' word?", answers: ["iron", "gold", "silver", "bronze"], correct: 0, hint: { text: "Strong metal" } },
  
  // Letter D (5 questions)
  { id: 'rec_d_01', letter: 'D', question: "What sound does 'D' make?", answers: ["ddd like duck", "bbb like bear", "ttt like cat", "ggg like goat"], correct: 0, hint: { text: "It says quack" } },
  { id: 'rec_d_02', letter: 'D', question: "Which word starts with 'D'?", answers: ["dog", "cat", "bird", "fish"], correct: 0, hint: { text: "It says woof" } },
  { id: 'rec_d_03', letter: 'D', question: "Find the 'D' sound:", answers: ["door", "window", "wall", "roof"], correct: 0, hint: { text: "Walk through this" } },
  { id: 'rec_d_04', letter: 'D', question: "What starts with 'D'?", answers: ["drum", "guitar", "piano", "violin"], correct: 0, hint: { text: "You hit this" } },
  { id: 'rec_d_05', letter: 'D', question: "Which is a 'D' word?", answers: ["doll", "teddy", "ball", "car"], correct: 0, hint: { text: "Little girl's toy" } },
  
  // Letter G (5 questions)
  { id: 'rec_g_01', letter: 'G', question: "What sound does 'G' make?", answers: ["ggg like goat", "ttt like cat", "ddd like dog", "bbb like bat"], correct: 0, hint: { text: "It says maaa" } },
  { id: 'rec_g_02', letter: 'G', question: "Which word starts with 'G'?", answers: ["grape", "lemon", "apple", "orange"], correct: 0, hint: { text: "Purple fruit" } },
  { id: 'rec_g_03', letter: 'G', question: "Find the 'G' sound:", answers: ["grass", "tree", "flower", "bush"], correct: 0, hint: { text: "Green ground cover" } },
  { id: 'rec_g_04', letter: 'G', question: "What starts with 'G'?", answers: ["garden", "park", "forest", "field"], correct: 0, hint: { text: "Has flowers at home" } },
  { id: 'rec_g_05', letter: 'G', question: "Which is a 'G' word?", answers: ["gate", "fence", "wall", "door"], correct: 0, hint: { text: "Opens to garden" } },
  
  // Letter O (5 questions)
  { id: 'rec_o_01', letter: 'O', question: "What sound does 'O' make?", answers: ["ooo like octopus", "eee like elephant", "aaa like ant", "iii like ink"], correct: 0, hint: { text: "Eight arms" } },
  { id: 'rec_o_02', letter: 'O', question: "Which word starts with 'O'?", answers: ["owl", "eagle", "hawk", "raven"], correct: 0, hint: { text: "Night bird" } },
  { id: 'rec_o_03', letter: 'O', question: "Find the 'O' sound:", answers: ["on", "off", "up", "down"], correct: 0, hint: { text: "Opposite of off" } },
  { id: 'rec_o_04', letter: 'O', question: "What starts with 'O'?", answers: ["orange", "banana", "apple", "grape"], correct: 0, hint: { text: "Orange fruit" } },
  { id: 'rec_o_05', letter: 'O', question: "Which is an 'O' word?", answers: ["oven", "fridge", "cooker", "kettle"], correct: 0, hint: { text: "Bakes cakes" } },
  
  // Letter C (5 questions)
  { id: 'rec_c_01', letter: 'C', question: "What sound does 'C' make?", answers: ["ccc like cat", "mmm like mat", "sss like sat", "ttt like tat"], correct: 0, hint: { text: "It says meow" } },
  { id: 'rec_c_02', letter: 'C', question: "Which word starts with 'C'?", answers: ["camel", "horse", "donkey", "cow"], correct: 0, hint: { text: "Desert animal" } },
  { id: 'rec_c_03', letter: 'C', question: "Find the 'C' sound:", answers: ["cup", "bowl", "plate", "spoon"], correct: 0, hint: { text: "Drink from this" } },
  { id: 'rec_c_04', letter: 'C', question: "What starts with 'C'?", answers: ["car", "bus", "train", "bike"], correct: 0, hint: { text: "Four wheels" } },
  { id: 'rec_c_05', letter: 'C', question: "Which is a 'C' word?", answers: ["coat", "shirt", "dress", "skirt"], correct: 0, hint: { text: "Keep warm in winter" } },
  
  // Letter K (5 questions)
  { id: 'rec_k_01', letter: 'K', question: "What sound does 'K' make?", answers: ["kkk like kite", "sss like snake", "ttt like tap", "ppp like pip"], correct: 0, hint: { text: "It flies high" } },
  { id: 'rec_k_02', letter: 'K', question: "Which word starts with 'K'?", answers: ["kangaroo", "koala", "monkey", "giraffe"], correct: 0, hint: { text: "Has a pouch" } },
  { id: 'rec_k_03', letter: 'K', question: "Find the 'K' sound:", answers: ["key", "lock", "door", "handle"], correct: 0, hint: { text: "Open door with this" } },
  { id: 'rec_k_04', letter: 'K', question: "What starts with 'K'?", answers: ["kitchen", "bedroom", "bathroom", "garden"], correct: 0, hint: { text: "Cook here" } },
  { id: 'rec_k_05', letter: 'K', question: "Which is a 'K' word?", answers: ["king", "queen", "prince", "princess"], correct: 0, hint: { text: "Wears a crown" } },
  
  // Letter CK (5 questions)
  { id: 'rec_ck_01', letter: 'CK', question: "What sound does 'CK' make?", answers: ["kkk like duck", "ppp like puck", "ttt like tick", "ss like sick"], correct: 0, hint: { text: "End of 'duck'" } },
  { id: 'rec_ck_02', letter: 'CK', question: "Which word has 'CK'?", answers: ["duck", "dog", "cat", "bird"], correct: 0, hint: { text: "Swims in pond" } },
  { id: 'rec_ck_03', letter: 'CK', question: "Find the 'CK' sound:", answers: ["sock", "shoe", "hat", "coat"], correct: 0, hint: { text: "On your foot" } },
  { id: 'rec_ck_04', letter: 'CK', question: "What ends with 'CK'?", answers: ["black", "white", "red", "blue"], correct: 0, hint: { text: "Dark colour" } },
  { id: 'rec_ck_05', letter: 'CK', question: "Which has 'CK'?", answers: ["clock", "watch", "timer", "alarm"], correct: 0, hint: { text: "Tells time" } },
  
  // Letter E (5 questions)
  { id: 'rec_e_01', letter: 'E', question: "What sound does 'E' make?", answers: ["eee like egg", "iii like ink", "aaa like ant", "ooo like octopus"], correct: 0, hint: { text: "Chicken lays this" } },
  { id: 'rec_e_02', letter: 'E', question: "Which word starts with 'E'?", answers: ["elephant", "giraffe", "lion", "tiger"], correct: 0, hint: { text: "Big ears" } },
  { id: 'rec_e_03', letter: 'E', question: "Find the 'E' sound:", answers: ["egg", "milk", "bread", "cheese"], correct: 0, hint: { text: "Breakfast food" } },
  { id: 'rec_e_04', letter: 'E', question: "What starts with 'E'?", answers: ["ear", "eye", "nose", "mouth"], correct: 0, hint: { text: "You hear with this" } },
  { id: 'rec_e_05', letter: 'E', question: "Which is an 'E' word?", answers: ["elbow", "knee", "ankle", "wrist"], correct: 0, hint: { text: "Arm bends here" } },
  
  // Letter U (5 questions)
  { id: 'rec_u_01', letter: 'U', question: "What sound does 'U' make?", answers: ["uuu like umbrella", "ooo like orange", "aaa like ant", "eee like egg"], correct: 0, hint: { text: "Rain protection" } },
  { id: 'rec_u_02', letter: 'U', question: "Which word starts with 'U'?", answers: ["up", "down", "left", "right"], correct: 0, hint: { text: "Opposite of down" } },
  { id: 'rec_u_03', letter: 'U', question: "Find the 'U' sound:", answers: ["under", "over", "above", "below"], correct: 0, hint: { text: "Below something" } },
  { id: 'rec_u_04', letter: 'U', question: "What starts with 'U'?", answers: ["uncle", "aunt", "cousin", "brother"], correct: 0, hint: { text: "Mum's brother" } },
  { id: 'rec_u_05', letter: 'U', question: "Which is a 'U' word?", answers: ["uniform", "costume", "dress", "suit"], correct: 0, hint: { text: "School clothes" } },
  
  // Letter R (5 questions)
  { id: 'rec_r_01', letter: 'R', question: "What sound does 'R' make?", answers: ["rrr like rabbit", "nnn like net", "mmm like mat", "hhh like hat"], correct: 0, hint: { text: "Hop hop" } },
  { id: 'rec_r_02', letter: 'R', question: "Which word starts with 'R'?", answers: ["rain", "snow", "sun", "wind"], correct: 0, hint: { text: "Falls from clouds" } },
  { id: 'rec_r_03', letter: 'R', question: "Find the 'R' sound:", answers: ["red", "blue", "green", "yellow"], correct: 0, hint: { text: "Apple colour" } },
  { id: 'rec_r_04', letter: 'R', question: "What starts with 'R'?", answers: ["rabbit", "hamster", "guinea pig", "mouse"], correct: 0, hint: { text: "Long ears" } },
  { id: 'rec_r_05', letter: 'R', question: "Which is an 'R' word?", answers: ["road", "path", "track", "trail"], correct: 0, hint: { text: "Cars drive on this" } },
  
  // Letter H (5 questions)
  { id: 'rec_h_01', letter: 'H', question: "What sound does 'H' make?", answers: ["hhh like hat", "rrr like rat", "ttt like tap", "sss like sat"], correct: 0, hint: { text: "On your head" } },
  { id: 'rec_h_02', letter: 'H', question: "Which word starts with 'H'?", answers: ["house", "flat", "apartment", "cottage"], correct: 0, hint: { text: "You live here" } },
  { id: 'rec_h_03', letter: 'H', question: "Find the 'H' sound:", answers: ["hand", "foot", "arm", "leg"], correct: 0, hint: { text: "Five fingers" } },
  { id: 'rec_h_04', letter: 'H', question: "What starts with 'H'?", answers: ["horse", "cow", "sheep", "pig"], correct: 0, hint: { text: "You can ride this" } },
  { id: 'rec_h_05', letter: 'H', question: "Which is an 'H' word?", answers: ["hen", "duck", "goose", "swan"], correct: 0, hint: { text: "Lays eggs" } },
  
  // Letter B (5 questions)
  { id: 'rec_b_01', letter: 'B', question: "What sound does 'B' make?", answers: ["bbb like ball", "ttt like tap", "ppp like pig", "ggg like goat"], correct: 0, hint: { text: "Round toy" } },
  { id: 'rec_b_02', letter: 'B', question: "Which word starts with 'B'?", answers: ["bear", "wolf", "fox", "deer"], correct: 0, hint: { text: "Big brown animal" } },
  { id: 'rec_b_03', letter: 'B', question: "Find the 'B' sound:", answers: ["book", "pen", "pencil", "rubber"], correct: 0, hint: { text: "Read this" } },
  { id: 'rec_b_04', letter: 'B', question: "What starts with 'B'?", answers: ["baby", "child", "adult", "teen"], correct: 0, hint: { text: "Very young" } },
  { id: 'rec_b_05', letter: 'B', question: "Which is a 'B' word?", answers: ["boat", "ship", "yacht", "canoe"], correct: 0, hint: { text: "Floats on water" } },
  
  // Letter F (5 questions)
  { id: 'rec_f_01', letter: 'F', question: "What sound does 'F' make?", answers: ["fff like fish", "vvv like vase", "sss like dish", "thh like thin"], correct: 0, hint: { text: "Swims in water" } },
  { id: 'rec_f_02', letter: 'F', question: "Which word starts with 'F'?", answers: ["frog", "toad", "newt", "salamander"], correct: 0, hint: { text: "Jumps in pond" } },
  { id: 'rec_f_03', letter: 'F', question: "Find the 'F' sound:", answers: ["five", "four", "three", "two"], correct: 0, hint: { text: "After four" } },
  { id: 'rec_f_04', letter: 'F', question: "What starts with 'F'?", answers: ["flower", "tree", "grass", "bush"], correct: 0, hint: { text: "Smells nice" } },
  { id: 'rec_f_05', letter: 'F', question: "Which is an 'F' word?", answers: ["fan", "heater", "radiator", "fire"], correct: 0, hint: { text: "Blows air" } },
  
  // Letter L (5 questions)
  { id: 'rec_l_01', letter: 'L', question: "What sound does 'L' make?", answers: ["lll like lion", "mmm like mat", "nnn like net", "rrr like rat"], correct: 0, hint: { text: "King of jungle" } },
  { id: 'rec_l_02', letter: 'L', question: "Which word starts with 'L'?", answers: ["lemon", "lime", "orange", "grape"], correct: 0, hint: { text: "Yellow fruit" } },
  { id: 'rec_l_03', letter: 'L', question: "Find the 'L' sound:", answers: ["leg", "arm", "hand", "foot"], correct: 0, hint: { text: "Walk with this" } },
  { id: 'rec_l_04', letter: 'L', question: "What starts with 'L'?", answers: ["leaf", "branch", "root", "trunk"], correct: 0, hint: { text: "Green on tree" } },
  { id: 'rec_l_05', letter: 'L', question: "Which is an 'L' word?", answers: ["lamp", "light", "torch", "candle"], correct: 0, hint: { text: "Gives light" } }
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
receptionQuestions.forEach(q => {
  const correctAnswer = q.answers[q.correct];
  q.answers = shuffleArray([...q.answers]);
  q.correct = q.answers.indexOf(correctAnswer);
});