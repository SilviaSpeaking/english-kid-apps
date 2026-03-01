/**
 * Year 1 Questions (Ages 5-6)
 * UK National Curriculum - Phonics Phase 5 & 6
 * Focus: Digraphs, alternative spellings, common exception words
 */

const year1Questions = [
  // AY digraph (5 questions)
  { id: 'y1_ay_01', letter: 'AY', question: "What sound does 'ay' make?", answers: ["ay like play", "ee like see", "ai like rain", "ea like tea"], correct: 0, hint: { text: "Like in 'play'" } },
  { id: 'y1_ay_02', letter: 'AY', question: "Which word has 'ay'?", answers: ["play", "see", "rain", "tea"], correct: 0, hint: { text: "Have fun" } },
  { id: 'y1_ay_03', letter: 'AY', question: "Complete: Pl__", answers: ["ay", "ey", "oy", "uy"], correct: 0, hint: { text: "Have fun" } },
  { id: 'y1_ay_04', letter: 'AY', question: "Which word rhymes with 'day'?", answers: ["play", "see", "blue", "red"], correct: 0, hint: { text: "Have fun" } },
  { id: 'y1_ay_05', letter: 'AY', question: "Find the 'ay' word:", answers: ["say", "see", "so", "shy"], correct: 0, hint: { text: "Speak words" } },
  
  // OU digraph (5 questions)
  { id: 'y1_ou_01', letter: 'OU', question: "What sound does 'ou' make?", answers: ["ow like out", "oo like moon", "ow like cow", "au like sauce"], correct: 0, hint: { text: "Like in 'out'" } },
  { id: 'y1_ou_02', letter: 'OU', question: "Which word has 'ou'?", answers: ["out", "moon", "cow", "sauce"], correct: 0, hint: { text: "Opposite of in" } },
  { id: 'y1_ou_03', letter: 'OU', question: "Complete: __t", answers: ["ou", "ow", "oo", "oa"], correct: 0, hint: { text: "Opposite of in" } },
  { id: 'y1_ou_04', letter: 'OU', question: "Which word has 'ou'?", answers: ["mouth", "nose", "ear", "eye"], correct: 0, hint: { text: "You eat with this" } },
  { id: 'y1_ou_05', letter: 'OU', question: "Find the 'ou' word:", answers: ["house", "home", "flat", "room"], correct: 0, hint: { text: "You live here" } },
  
  // IE digraph (5 questions)
  { id: 'y1_ie_01', letter: 'IE', question: "What sound does 'ie' make?", answers: ["eye like pie", "ee like see", "ai like tie", "i like sit"], correct: 0, hint: { text: "Like in 'pie'" } },
  { id: 'y1_ie_02', letter: 'IE', question: "Which word has 'ie'?", answers: ["pie", "see", "tie", "sit"], correct: 0, hint: { text: "Sweet dessert" } },
  { id: 'y1_ie_03', letter: 'IE', question: "Complete: P__", answers: ["ie", "ei", "ey", "ay"], correct: 0, hint: { text: "Sweet dessert" } },
  { id: 'y1_ie_04', letter: 'IE', question: "Which word has 'ie'?", answers: ["lie", "lay", "lie", "lye"], correct: 0, hint: { text: "Not tell truth" } },
  { id: 'y1_ie_05', letter: 'IE', question: "Find the 'ie' word:", answers: ["field", "farm", "meadow", "pasture"], correct: 0, hint: { text: "Grow crops" } },
  
  // EA digraph (5 questions)
  { id: 'y1_ea_01', letter: 'EA', question: "What sound does 'ea' make?", answers: ["ee like tea", "eh like pet", "aa like cat", "ea like sea"], correct: 0, hint: { text: "Hot drink" } },
  { id: 'y1_ea_02', letter: 'EA', question: "Which word has 'ea'?", answers: ["tea", "pet", "cat", "sea"], correct: 0, hint: { text: "British drink" } },
  { id: 'y1_ea_03', letter: 'EA', question: "Complete: T__", answers: ["ea", "ee", "ei", "ay"], correct: 0, hint: { text: "Hot drink" } },
  { id: 'y1_ea_04', letter: 'EA', question: "Which word has 'ea'?", answers: ["head", "hair", "face", "neck"], correct: 0, hint: { text: "On top of body" } },
  { id: 'y1_ea_05', letter: 'EA', question: "Find the 'ea' word:", answers: ["leaf", "tree", "branch", "root"], correct: 0, hint: { text: "Green on tree" } },
  
  // OY digraph (5 questions)
  { id: 'y1_oy_01', letter: 'OY', question: "What sound does 'oy' make?", answers: ["oy like boy", "oy like toy", "oo like too", "oi like coin"], correct: 0, hint: { text: "Like in 'boy'" } },
  { id: 'y1_oy_02', letter: 'OY', question: "Which word has 'oy'?", answers: ["boy", "toy", "too", "coin"], correct: 0, hint: { text: "Male child" } },
  { id: 'y1_oy_03', letter: 'OY', question: "Complete: B__", answers: ["oy", "oy", "ay", "ey"], correct: 0, hint: { text: "Male child" } },
  { id: 'y1_oy_04', letter: 'OY', question: "Which word has 'oy'?", answers: ["joy", "happy", "sad", "angry"], correct: 0, hint: { text: "Feeling glad" } },
  { id: 'y1_oy_05', letter: 'OY', question: "Find the 'oy' word:", answers: ["toy", "doll", "ball", "kite"], correct: 0, hint: { text: "Children play" } },
  
  // IR digraph (5 questions)
  { id: 'y1_ir_01', letter: 'IR', question: "What sound does 'ir' make?", answers: ["err like girl", "ir like bird", "er like her", "or like for"], correct: 0, hint: { text: "Like in 'girl'" } },
  { id: 'y1_ir_02', letter: 'IR', question: "Which word has 'ir'?", answers: ["bird", "girl", "her", "for"], correct: 0, hint: { text: "Flies in sky" } },
  { id: 'y1_ir_03', letter: 'IR', question: "Complete: B__d", answers: ["ir", "ur", "er", "ar"], correct: 0, hint: { text: "Flies in sky" } },
  { id: 'y1_ir_04', letter: 'IR', question: "Which word has 'ir'?", answers: ["shirt", "trousers", "shoes", "socks"], correct: 0, hint: { text: "Wear on top" } },
  { id: 'y1_ir_05', letter: 'IR', question: "Find the 'ir' word:", answers: ["first", "second", "third", "fourth"], correct: 0, hint: { text: "Number one" } },
  
  // UE digraph (5 questions)
  { id: 'y1_ue_01', letter: 'UE', question: "What sound does 'ue' make?", answers: ["oo like blue", "ew like new", "ue like cue", "oo like glue"], correct: 0, hint: { text: "Like in 'blue'" } },
  { id: 'y1_ue_02', letter: 'UE', question: "Which word has 'ue'?", answers: ["blue", "new", "cue", "glue"], correct: 0, hint: { text: "Sky colour" } },
  { id: 'y1_ue_03', letter: 'UE', question: "Complete: Bl__", answers: ["ue", "ew", "ow", "oo"], correct: 0, hint: { text: "Sky colour" } },
  { id: 'y1_ue_04', letter: 'UE', question: "Which word has 'ue'?", answers: ["true", "false", "maybe", "perhaps"], correct: 0, hint: { text: "Not false" } },
  { id: 'y1_ue_05', letter: 'UE', question: "Find the 'ue' word:", answers: ["clue", "hint", "tip", "sign"], correct: 0, hint: { text: "Helps solve puzzle" } },
  
  // AW digraph (5 questions)
  { id: 'y1_aw_01', letter: 'AW', question: "What sound does 'aw' make?", answers: ["aw like saw", "aw like law", "oo like too", "ow like cow"], correct: 0, hint: { text: "Like in 'saw'" } },
  { id: 'y1_aw_02', letter: 'AW', question: "Which word has 'aw'?", answers: ["saw", "law", "too", "cow"], correct: 0, hint: { text: "Cut with this" } },
  { id: 'y1_aw_03', letter: 'AW', question: "Complete: S__", answers: ["aw", "ow", "ew", "ew"], correct: 0, hint: { text: "Cut with this" } },
  { id: 'y1_aw_04', letter: 'AW', question: "Which word has 'aw'?", answers: ["paw", "hand", "foot", "leg"], correct: 0, hint: { text: "Animal's foot" } },
  { id: 'y1_aw_05', letter: 'AW', question: "Find the 'aw' word:", answers: ["draw", "paint", "colour", "sketch"], correct: 0, hint: { text: "Make picture" } },
  
  // WH digraph (5 questions)
  { id: 'y1_wh_01', letter: 'WH', question: "What sound does 'wh' make?", answers: ["wh like what", "w like wet", "h like hat", "hw like who"], correct: 0, hint: { text: "Like in 'what'" } },
  { id: 'y1_wh_02', letter: 'WH', question: "Which word has 'wh'?", answers: ["what", "wet", "hat", "who"], correct: 0, hint: { text: "Question word" } },
  { id: 'y1_wh_03', letter: 'WH', question: "Complete: ___at", answers: ["wh", "hh", "ff", "th"], correct: 0, hint: { text: "Question word" } },
  { id: 'y1_wh_04', letter: 'WH', question: "Which word has 'wh'?", answers: ["white", "black", "red", "blue"], correct: 0, hint: { text: "Snow colour" } },
  { id: 'y1_wh_05', letter: 'WH', question: "Find the 'wh' word:", answers: ["wheel", "tyre", "axle", "pedal"], correct: 0, hint: { text: "Goes round" } },
  
  // EW digraph (5 questions)
  { id: 'y1_ew_01', letter: 'EW', question: "What sound does 'ew' make?", answers: ["yoo like new", "oo like two", "ew like few", "ew like blew"], correct: 0, hint: { text: "Like in 'new'" } },
  { id: 'y1_ew_02', letter: 'EW', question: "Which word has 'ew'?", answers: ["new", "two", "few", "blew"], correct: 0, hint: { text: "Not old" } },
  { id: 'y1_ew_03', letter: 'EW', question: "Complete: N__", answers: ["ew", "oo", "ow", "ow"], correct: 0, hint: { text: "Not old" } },
  { id: 'y1_ew_04', letter: 'EW', question: "Which word has 'ew'?", answers: ["chew", "bite", "gnaw", "nibble"], correct: 0, hint: { text: "Use teeth" } },
  { id: 'y1_ew_05', letter: 'EW', question: "Find the 'ew' word:", answers: ["dew", "rain", "mist", "fog"], correct: 0, hint: { text: "Morning water" } },
  
  // OO digraph (5 questions)
  { id: 'y1_oo_01', letter: 'OO', question: "What sound does 'oo' make?", answers: ["oo like moon", "oo like book", "ew like crew", "ue like cue"], correct: 0, hint: { text: "Like in 'moon'" } },
  { id: 'y1_oo_02', letter: 'OO', question: "Which word has 'oo'?", answers: ["moon", "book", "crew", "cue"], correct: 0, hint: { text: "Night sky" } },
  { id: 'y1_oo_03', letter: 'OO', question: "Complete: M__n", answers: ["oo", "ew", "ue", "ow"], correct: 0, hint: { text: "Night sky" } },
  { id: 'y1_oo_04', letter: 'OO', question: "Which word has 'oo'?", answers: ["food", "meal", "snack", "drink"], correct: 0, hint: { text: "You eat this" } },
  { id: 'y1_oo_05', letter: 'OO', question: "Find the 'oo' word:", answers: ["zoo", "park", "garden", "farm"], correct: 0, hint: { text: "See animals" } },
  
  // OA digraph (5 questions)
  { id: 'y1_oa_01', letter: 'OA', question: "What sound does 'oa' make?", answers: ["oh like boat", "ow like cow", "oa like coat", "o like hot"], correct: 0, hint: { text: "Like in 'boat'" } },
  { id: 'y1_oa_02', letter: 'OA', question: "Which word has 'oa'?", answers: ["boat", "cow", "coat", "hot"], correct: 0, hint: { text: "Floats on water" } },
  { id: 'y1_oa_03', letter: 'OA', question: "Complete: B__t", answers: ["oa", "ow", "aw", "o"], correct: 0, hint: { text: "Floats on water" } },
  { id: 'y1_oa_04', letter: 'OA', question: "Which word has 'oa'?", answers: ["coat", "shirt", "dress", "skirt"], correct: 0, hint: { text: "Keep warm" } },
  { id: 'y1_oa_05', letter: 'OA', question: "Find the 'oa' word:", answers: ["road", "path", "track", "trail"], correct: 0, hint: { text: "Cars drive" } },
  
  // AI digraph (5 questions)
  { id: 'y1_ai_01', letter: 'AI', question: "What sound does 'ai' make?", answers: ["ay like rain", "eh like pet", "ai like pain", "ay like say"], correct: 0, hint: { text: "Like in 'rain'" } },
  { id: 'y1_ai_02', letter: 'AI', question: "Which word has 'ai'?", answers: ["rain", "pet", "pain", "say"], correct: 0, hint: { text: "Falls from sky" } },
  { id: 'y1_ai_03', letter: 'AI', question: "Complete: R__n", answers: ["ai", "ay", "ay", "ie"], correct: 0, hint: { text: "Falls from sky" } },
  { id: 'y1_ai_04', letter: 'AI', question: "Which word has 'ai'?", answers: ["tail", "head", "leg", "arm"], correct: 0, hint: { text: "On dog" } },
  { id: 'y1_ai_05', letter: 'AI', question: "Find the 'ai' word:", answers: ["nail", "screw", "bolt", "pin"], correct: 0, hint: { text: "Hammer this" } },
  
  // EE digraph (5 questions)
  { id: 'y1_ee_01', letter: 'EE', question: "What sound does 'ee' make?", answers: ["ee like tree", "ea like tea", "e like pet", "ey like key"], correct: 0, hint: { text: "Like in 'tree'" } },
  { id: 'y1_ee_02', letter: 'EE', question: "Which word has 'ee'?", answers: ["tree", "tea", "pet", "key"], correct: 0, hint: { text: "Tall plant" } },
  { id: 'y1_ee_03', letter: 'EE', question: "Complete: Tr__", answers: ["ee", "ea", "ey", "ie"], correct: 0, hint: { text: "Tall plant" } },
  { id: 'y1_ee_04', letter: 'EE', question: "Which word has 'ee'?", answers: ["bee", "fly", "wasp", "ant"], correct: 0, hint: { text: "Makes honey" } },
  { id: 'y1_ee_05', letter: 'EE', question: "Find the 'ee' word:", answers: ["sheep", "cow", "pig", "horse"], correct: 0, hint: { text: "Gives wool" } },
  
  // OR digraph (5 questions)
  { id: 'y1_or_01', letter: 'OR', question: "What sound does 'or' make?", answers: ["or like for", "er like her", "ar like car", "ur like turn"], correct: 0, hint: { text: "Like in 'for'" } },
  { id: 'y1_or_02', letter: 'OR', question: "Which word has 'or'?", answers: ["for", "her", "car", "turn"], correct: 0, hint: { text: "Meaning 'to'" } },
  { id: 'y1_or_03', letter: 'OR', question: "Complete: F__", answers: ["or", "ar", "er", "ur"], correct: 0, hint: { text: "Meaning 'to'" } },
  { id: 'y1_or_04', letter: 'OR', question: "Which word has 'or'?", answers: ["horse", "cow", "sheep", "pig"], correct: 0, hint: { text: "You ride this" } },
  { id: 'y1_or_05', letter: 'OR', question: "Find the 'or' word:", answers: ["morning", "afternoon", "evening", "night"], correct: 0, hint: { text: "Start of day" } },
  
  // AR digraph (5 questions)
  { id: 'y1_ar_01', letter: 'AR', question: "What sound does 'ar' make?", answers: ["ar like car", "er like her", "or like for", "ur like turn"], correct: 0, hint: { text: "Like in 'car'" } },
  { id: 'y1_ar_02', letter: 'AR', question: "Which word has 'ar'?", answers: ["car", "her", "for", "turn"], correct: 0, hint: { text: "Drive this" } },
  { id: 'y1_ar_03', letter: 'AR', question: "Complete: C__", answers: ["ar", "er", "or", "ur"], correct: 0, hint: { text: "Drive this" } },
  { id: 'y1_ar_04', letter: 'AR', question: "Which word has 'ar'?", answers: ["arm", "leg", "foot", "hand"], correct: 0, hint: { text: "Body part" } },
  { id: 'y1_ar_05', letter: 'AR', question: "Find the 'ar' word:", answers: ["star", "moon", "sun", "planet"], correct: 0, hint: { text: "Twinkles" } },
  
  // UR digraph (5 questions)
  { id: 'y1_ur_01', letter: 'UR', question: "What sound does 'ur' make?", answers: ["ur like turn", "er like her", "ar like car", "or like for"], correct: 0, hint: { text: "Like in 'turn'" } },
  { id: 'y1_ur_02', letter: 'UR', question: "Which word has 'ur'?", answers: ["turn", "her", "car", "for"], correct: 0, hint: { text: "Direction" } },
  { id: 'y1_ur_03', letter: 'UR', question: "Complete: T__n", answers: ["ur", "er", "ar", "or"], correct: 0, hint: { text: "Direction" } },
  { id: 'y1_ur_04', letter: 'UR', question: "Which word has 'ur'?", answers: ["fur", "hair", "feather", "skin"], correct: 0, hint: { text: "On animal" } },
  { id: 'y1_ur_05', letter: 'UR', question: "Find the 'ur' word:", answers: ["nurse", "doctor", "teacher", "driver"], correct: 0, hint: { text: "Works in hospital" } },
  
  // ER digraph (5 questions)
  { id: 'y1_er_01', letter: 'ER', question: "What sound does 'er' make?", answers: ["er like her", "ar like car", "or like for", "ur like turn"], correct: 0, hint: { text: "Like in 'her'" } },
  { id: 'y1_er_02', letter: 'ER', question: "Which word has 'er'?", answers: ["her", "car", "for", "turn"], correct: 0, hint: { text: "Female pronoun" } },
  { id: 'y1_er_03', letter: 'ER', question: "Complete: H__", answers: ["er", "ar", "or", "ur"], correct: 0, hint: { text: "Female pronoun" } },
  { id: 'y1_er_04', letter: 'ER', question: "Which word has 'er'?", answers: ["sister", "brother", "mother", "father"], correct: 0, hint: { text: "Girl sibling" } },
  { id: 'y1_er_05', letter: 'ER', question: "Find the 'er' word:", answers: ["paper", "pen", "pencil", "rubber"], correct: 0, hint: { text: "Write on this" } },
  
  // OW digraph (5 questions)
  { id: 'y1_ow_01', letter: 'OW', question: "What sound does 'ow' make?", answers: ["ow like cow", "ow like now", "oo like snow", "aw like saw"], correct: 0, hint: { text: "Like in 'cow'" } },
  { id: 'y1_ow_02', letter: 'OW', question: "Which word has 'ow'?", answers: ["cow", "now", "snow", "saw"], correct: 0, hint: { text: "Gives milk" } },
  { id: 'y1_ow_03', letter: 'OW', question: "Complete: C__", answers: ["ow", "aw", "ew", "oo"], correct: 0, hint: { text: "Gives milk" } },
  { id: 'y1_ow_04', letter: 'OW', question: "Which word has 'ow'?", answers: ["brown", "black", "white", "grey"], correct: 0, hint: { text: "Colour" } },
  { id: 'y1_ow_05', letter: 'OW', question: "Find the 'ow' word:", answers: ["flower", "tree", "grass", "bush"], correct: 0, hint: { text: "Smells nice" } },
  
  // OI digraph (5 questions)
  { id: 'y1_oi_01', letter: 'OI', question: "What sound does 'oi' make?", answers: ["oy like coin", "oi like join", "oy like boy", "ow like cow"], correct: 0, hint: { text: "Like in 'coin'" } },
  { id: 'y1_oi_02', letter: 'OI', question: "Which word has 'oi'?", answers: ["coin", "join", "boy", "cow"], correct: 0, hint: { text: "Money" } },
  { id: 'y1_oi_03', letter: 'OI', question: "Complete: C__n", answers: ["oi", "oy", "ow", "oo"], correct: 0, hint: { text: "Money" } },
  { id: 'y1_oi_04', letter: 'OI', question: "Which word has 'oi'?", answers: ["boil", "cook", "bake", "fry"], correct: 0, hint: { text: "Hot water" } },
  { id: 'y1_oi_05', letter: 'OI', question: "Find the 'oi' word:", answers: ["soil", "sand", "mud", "clay"], correct: 0, hint: { text: "In garden" } },
  
  // IGH digraph (5 questions)
  { id: 'y1_igh_01', letter: 'IGH', question: "What sound does 'igh' make?", answers: ["eye like high", "igh like night", "ight like light", "ie like pie"], correct: 0, hint: { text: "Like in 'high'" } },
  { id: 'y1_igh_02', letter: 'IGH', question: "Which word has 'igh'?", answers: ["high", "night", "light", "pie"], correct: 0, hint: { text: "Not low" } },
  { id: 'y1_igh_03', letter: 'IGH', question: "Complete: H__", answers: ["igh", "ight", "ie", "i"], correct: 0, hint: { text: "Not low" } },
  { id: 'y1_igh_04', letter: 'IGH', question: "Which word has 'igh'?", answers: ["light", "dark", "dim", "bright"], correct: 0, hint: { text: "Not dark" } },
  { id: 'y1_igh_05', letter: 'IGH', question: "Find the 'igh' word:", answers: ["night", "day", "noon", "dawn"], correct: 0, hint: { text: "When dark" } },
  
  // EAR (5 questions)
  { id: 'y1_ear_01', letter: 'EAR', question: "What sound does 'ear' make?", answers: ["ear like hear", "er like her", "ear like pear", "air like hair"], correct: 0, hint: { text: "Like in 'hear'" } },
  { id: 'y1_ear_02', letter: 'EAR', question: "Which word has 'ear'?", answers: ["hear", "her", "pear", "hair"], correct: 0, hint: { text: "Listen with this" } },
  { id: 'y1_ear_03', letter: 'EAR', question: "Complete: H__", answers: ["ear", "eer", "air", "er"], correct: 0, hint: { text: "Listen with this" } },
  { id: 'y1_ear_04', letter: 'EAR', question: "Which word has 'ear'?", answers: ["ear", "eye", "nose", "mouth"], correct: 0, hint: { text: "Body part" } },
  { id: 'y1_ear_05', letter: 'EAR', question: "Find the 'ear' word:", answers: ["near", "far", "close", "distant"], correct: 0, hint: { text: "Not far" } },
  
  // AIR (5 questions)
  { id: 'y1_air_01', letter: 'AIR', question: "What sound does 'air' make?", answers: ["air like hair", "ear like hear", "er like her", "or like for"], correct: 0, hint: { text: "Like in 'hair'" } },
  { id: 'y1_air_02', letter: 'AIR', question: "Which word has 'air'?", answers: ["hair", "hear", "her", "for"], correct: 0, hint: { text: "On your head" } },
  { id: 'y1_air_03', letter: 'AIR', question: "Complete: H__", answers: ["air", "ear", "eer", "ir"], correct: 0, hint: { text: "On your head" } },
  { id: 'y1_air_04', letter: 'AIR', question: "Which word has 'air'?", answers: ["chair", "table", "desk", "bed"], correct: 0, hint: { text: "Sit on this" } },
  { id: 'y1_air_05', letter: 'AIR', question: "Find the 'air' word:", answers: ["fair", "unfair", "just", "right"], correct: 0, hint: { text: "Not unfair" } },
  
  // URE (5 questions)
  { id: 'y1_ure_01', letter: 'URE', question: "What sound does 'ure' make?", answers: ["ure like pure", "ure like sure", "ure like cure", "er like her"], correct: 0, hint: { text: "Like in 'pure'" } },
  { id: 'y1_ure_02', letter: 'URE', question: "Which word has 'ure'?", answers: ["pure", "sure", "cure", "her"], correct: 0, hint: { text: "Clean" } },
  { id: 'y1_ure_03', letter: 'URE', question: "Complete: P__", answers: ["ure", "ure", "er", "or"], correct: 0, hint: { text: "Clean" } },
  { id: 'y1_ure_04', letter: 'URE', question: "Which word has 'ure'?", answers: ["picture", "photo", "image", "painting"], correct: 0, hint: { text: "Take with camera" } },
  { id: 'y1_ure_05', letter: 'URE', question: "Find the 'ure' word:", answers: ["future", "past", "present", "now"], correct: 0, hint: { text: "Time to come" } },
  
  // ARE (5 questions)
  { id: 'y1_are_01', letter: 'ARE', question: "What sound does 'are' make?", answers: ["ar like care", "er like her", "or like for", "air like hair"], correct: 0, hint: { text: "Like in 'care'" } },
  { id: 'y1_are_02', letter: 'ARE', question: "Which word has 'are'?", answers: ["care", "her", "for", "hair"], correct: 0, hint: { text: "Be careful" } },
  { id: 'y1_are_03', letter: 'ARE', question: "Complete: C__", answers: ["are", "ear", "ar", "er"], correct: 0, hint: { text: "Be careful" } },
  { id: 'y1_are_04', letter: 'ARE', question: "Which word has 'are'?", answers: ["share", "give", "take", "keep"], correct: 0, hint: { text: "Divide equally" } },
  { id: 'y1_are_05', letter: 'ARE', question: "Find the 'are' word:", answers: ["bare", "covered", "hidden", "protected"], correct: 0, hint: { text: "Not covered" } },
  
  // IRE (5 questions)
  { id: 'y1_ire_01', letter: 'IRE', question: "What sound does 'ire' make?", answers: ["eye like fire", "ire like hire", "ear like hear", "er like her"], correct: 0, hint: { text: "Like in 'fire'" } },
  { id: 'y1_ire_02', letter: 'IRE', question: "Which word has 'ire'?", answers: ["fire", "hire", "hear", "her"], correct: 0, hint: { text: "Hot and bright" } },
  { id: 'y1_ire_03', letter: 'IRE', question: "Complete: F__", answers: ["ire", "air", "ear", "er"], correct: 0, hint: { text: "Hot and bright" } },
  { id: 'y1_ire_04', letter: 'IRE', question: "Which word has 'ire'?", answers: ["tire", "wheel", "axle", "pedal"], correct: 0, hint: { text: "On car" } },
  { id: 'y1_ire_05', letter: 'IRE', question: "Find the 'ire' word:", answers: ["wire", "cable", "cord", "rope"], correct: 0, hint: { text: "Carries electricity" } },
  
  // EER (5 questions)
  { id: 'y1_eer_01', letter: 'EER', question: "What sound does 'eer' make?", answers: ["ear like deer", "eer like peer", "er like her", "ear like bear"], correct: 0, hint: { text: "Like in 'deer'" } },
  { id: 'y1_eer_02', letter: 'EER', question: "Which word has 'eer'?", answers: ["deer", "hair", "her", "for"], correct: 0, hint: { text: "Forest animal" } },
  { id: 'y1_eer_03', letter: 'EER', question: "Complete: D__", answers: ["eer", "air", "er", "ar"], correct: 0, hint: { text: "Forest animal" } },
  { id: 'y1_eer_04', letter: 'EER', question: "Which word has 'eer'?", answers: ["beer", "wine", "juice", "water"], correct: 0, hint: { text: "Adult drink" } },
  { id: 'y1_eer_05', letter: 'EER', question: "Find the 'eer' word:", answers: ["cheer", "shout", "yell", "scream"], correct: 0, hint: { text: "Happy noise" } },
  
  // Split digraph A-E (5 questions)
  { id: 'y1_ae_01', letter: 'A-E', question: "What does 'A-E' make?", answers: ["ay like cake", "ae like aer", "ee like see", "a like cat"], correct: 0, hint: { text: "Like in 'cake'" } },
  { id: 'y1_ae_02', letter: 'A-E', question: "Which word has 'A-E'?", answers: ["cake", "aer", "see", "cat"], correct: 0, hint: { text: "Sweet treat" } },
  { id: 'y1_ae_03', letter: 'A-E', question: "Complete: C_ke", answers: ["a-e", "a-e", "ae", "a"], correct: 0, hint: { text: "Sweet treat" } },
  { id: 'y1_ae_04', letter: 'A-E', question: "Which word has 'A-E'?", answers: ["name", "title", "label", "tag"], correct: 0, hint: { text: "What you're called" } },
  { id: 'y1_ae_05', letter: 'A-E', question: "Find the 'A-E' word:", answers: ["game", "play", "sport", "fun"], correct: 0, hint: { text: "Children do this" } },
  
  // Split digraph I-E (5 questions)
  { id: 'y1_ie_01', letter: 'I-E', question: "What does 'I-E' make?", answers: ["eye like bike", "ie like five", "ee like see", "i like sit"], correct: 0, hint: { text: "Like in 'bike'" } },
  { id: 'y1_ie_02', letter: 'I-E', question: "Which word has 'I-E'?", answers: ["bike", "five", "see", "sit"], correct: 0, hint: { text: "Two wheels" } },
  { id: 'y1_ie_03', letter: 'I-E', question: "Complete: B_ke", answers: ["i-e", "i-e", "ie", "i"], correct: 0, hint: { text: "Two wheels" } },
  { id: 'y1_ie_04', letter: 'I-E', question: "Which word has 'I-E'?", answers: ["like", "love", "hate", "enjoy"], correct: 0, hint: { text: "Feel good about" } },
  { id: 'y1_ie_05', letter: 'I-E', question: "Find the 'I-E' word:", answers: ["time", "clock", "watch", "timer"], correct: 0, hint: { text: "What hour is it" } },
  
  // Split digraph O-E (5 questions)
  { id: 'y1_oe_01', letter: 'O-E', question: "What does 'O-E' make?", answers: ["oh like home", "oe like toe", "oo like moon", "o like hot"], correct: 0, hint: { text: "Like in 'home'" } },
  { id: 'y1_oe_02', letter: 'O-E', question: "Which word has 'O-E'?", answers: ["home", "toe", "moon", "hot"], correct: 0, hint: { text: "You live here" } },
  { id: 'y1_oe_03', letter: 'O-E', question: "Complete: H_me", answers: ["o-e", "o-e", "oe", "o"], correct: 0, hint: { text: "You live here" } },
  { id: 'y1_oe_04', letter: 'O-E', question: "Which word has 'O-E'?", answers: ["bone", "muscle", "skin", "blood"], correct: 0, hint: { text: "In body" } },
  { id: 'y1_oe_05', letter: 'O-E', question: "Find the 'O-E' word:", answers: ["phone", "mobile", "tablet", "computer"], correct: 0, hint: { text: "Call people" } },
  
  // Split digraph U-E (5 questions)
  { id: 'y1_ue_01', letter: 'U-E', question: "What does 'U-E' make?", answers: ["yoo like cube", "ue like cue", "oo like moon", "u like cut"], correct: 0, hint: { text: "Like in 'cube'" } },
  { id: 'y1_ue_02', letter: 'U-E', question: "Which word has 'U-E'?", answers: ["cube", "cue", "moon", "cut"], correct: 0, hint: { text: "3D shape" } },
  { id: 'y1_ue_03', letter: 'U-E', question: "Complete: C_be", answers: ["u-e", "u-e", "ue", "u"], correct: 0, hint: { text: "3D shape" } },
  { id: 'y1_ue_04', letter: 'U-E', question: "Which word has 'U-E'?", answers: ["tune", "song", "melody", "rhythm"], correct: 0, hint: { text: "Musical" } },
  { id: 'y1_ue_05', letter: 'U-E', question: "Find the 'U-E' word:", answers: ["rule", "law", "order", "command"], correct: 0, hint: { text: "Must follow" } },
  
  // Split digraph E-E (5 questions)
  { id: 'y1_ee_01', letter: 'E-E', question: "What does 'E-E' make?", answers: ["ee like these", "ea like tree", "ey like key", "e like pet"], correct: 0, hint: { text: "Like in 'these'" } },
  { id: 'y1_ee_02', letter: 'E-E', question: "Which word has 'E-E'?", answers: ["these", "tree", "key", "pet"], correct: 0, hint: { text: "Plural this" } },
  { id: 'y1_ee_03', letter: 'E-E', question: "Complete: Th_se", answers: ["e-e", "e-e", "ee", "e"], correct: 0, hint: { text: "Plural this" } },
  { id: 'y1_ee_04', letter: 'E-E', question: "Which word has 'E-E'?", answers: ["theme", "topic", "subject", "idea"], correct: 0, hint: { text: "Main idea" } },
  { id: 'y1_ee_05', letter: 'E-E', question: "Find the 'E-E' word:", answers: ["scene", "view", "sight", "picture"], correct: 0, hint: { text: "What you see" } },
  
  // TION ending (5 questions)
  { id: 'y1_tion_01', letter: 'TION', question: "What does 'TION' sound like?", answers: ["shun like nation", "tion like nation", "tion like action", "cian like nation"], correct: 0, hint: { text: "Like 'nation'" } },
  { id: 'y1_tion_02', letter: 'TION', question: "Which word ends with 'TION'?", answers: ["nation", "action", "motion", "cian"], correct: 0, hint: { text: "Country" } },
  { id: 'y1_tion_03', letter: 'TION', question: "Which word ends with 'TION'?", answers: ["station", "action", "motion", "cation"], correct: 0, hint: { text: "Where trains stop" } },
  { id: 'y1_tion_04', letter: 'TION', question: "Complete: Educa____", answers: ["tion", "sion", "cion", "tion"], correct: 0, hint: { text: "Learning" } },
  { id: 'y1_tion_05', letter: 'TION', question: "Complete: Informa____", answers: ["tion", "sion", "cion", "tion"], correct: 0, hint: { text: "Facts" } },
  
  // SION ending (5 questions)
  { id: 'y1_sion_01', letter: 'SION', question: "What does 'SION' sound like?", answers: ["shun like vision", "sion like vision", "tion like nation", "shion like vision"], correct: 0, hint: { text: "Like 'vision'" } },
  { id: 'y1_sion_02', letter: 'SION', question: "Which word ends with 'SION'?", answers: ["vision", "nation", "action", "cian"], correct: 0, hint: { text: "Seeing" } },
  { id: 'y1_sion_03', letter: 'SION', question: "Which word ends with 'SION'?", answers: ["television", "nation", "action", "cation"], correct: 0, hint: { text: "Watch programmes" } },
  { id: 'y1_sion_04', letter: 'SION', question: "Complete: Expre____", answers: ["ssion", "sion", "tion", "cion"], correct: 0, hint: { text: "Show feelings" } },
  { id: 'y1_sion_05', letter: 'SION', question: "Complete: Deci____", answers: ["sion", "tion", "cion", "tion"], correct: 0, hint: { text: "Make choice" } },
  
  // ING ending (5 questions)
  { id: 'y1_ing_01', letter: 'ING', question: "What does 'ING' mean?", answers: ["doing now", "did before", "will do", "has done"], correct: 0, hint: { text: "Current action" } },
  { id: 'y1_ing_02', letter: 'ING', question: "Add -ing to 'jump':", answers: ["jumping", "jumper", "jumps", "jumped"], correct: 0, hint: { text: "Doing now" } },
  { id: 'y1_ing_03', letter: 'ING', question: "Add -ing to 'run':", answers: ["running", "runing", "run", "runner"], correct: 0, hint: { text: "Double the n" } },
  { id: 'y1_ing_04', letter: 'ING', question: "Add -ing to 'make':", answers: ["making", "makeing", "make", "maker"], correct: 0, hint: { text: "Drop the e" } },
  { id: 'y1_ing_05', letter: 'ING', question: "Which is correct?", answers: ["sitting", "sit", "sitting", "siting"], correct: 0, hint: { text: "Double the t" } },
  
  // ED ending (5 questions)
  { id: 'y1_ed_01', letter: 'ED', question: "What does 'ED' mean?", answers: ["done before", "doing now", "will do", "will have done"], correct: 0, hint: { text: "Past action" } },
  { id: 'y1_ed_02', letter: 'ED', question: "Add -ed to 'walk':", answers: ["walked", "walk", "walkt", "walked"], correct: 0, hint: { text: "Past tense" } },
  { id: 'y1_ed_03', letter: 'ED', question: "Add -ed to 'play':", answers: ["played", "play", "playd", "plaied"], correct: 0, hint: { text: "Drop the e" } },
  { id: 'y1_ed_04', letter: 'ED', question: "Add -ed to 'stop':", answers: ["stopped", "stop", "stopt", "stopping"], correct: 0, hint: { text: "Double the p" } },
  { id: 'y1_ed_05', letter: 'ED', question: "Which is correct?", answers: ["jumped", "jump", "jumpt", "jumping"], correct: 0, hint: { text: "Past tense" } },
  
  // ER ending (5 questions)
  { id: 'y1_er_01', letter: 'ER', question: "What does 'ER' mean?", answers: ["person who does", "place where", "thing that", "action done"], correct: 0, hint: { text: "Person who" } },
  { id: 'y1_er_02', letter: 'ER', question: "Add -er to 'teach':", answers: ["teacher", "teach", "teaching", "taught"], correct: 0, hint: { text: "Person who teaches" } },
  { id: 'y1_er_03', letter: 'ER', question: "Add -er to 'run':", answers: ["runner", "run", "running", "ran"], correct: 0, hint: { text: "Person who runs" } },
  { id: 'y1_er_04', letter: 'ER', question: "Add -er to 'sing':", answers: ["singer", "sing", "singing", "sang"], correct: 0, hint: { text: "Person who sings" } },
  { id: 'y1_er_05', letter: 'ER', question: "Add -er to 'bake':", answers: ["baker", "bake", "baking", "baked"], correct: 0, hint: { text: "Makes bread" } },
  
  // FUL ending (5 questions)
  { id: 'y1_ful_01', letter: 'FUL', question: "What does 'FUL' mean?", answers: ["full of", "without", "like", "not"], correct: 0, hint: { text: "Full of" } },
  { id: 'y1_ful_02', letter: 'FUL', question: "Add -ful to 'help':", answers: ["helpful", "help", "helping", "helper"], correct: 0, hint: { text: "Full of help" } },
  { id: 'y1_ful_03', letter: 'FUL', question: "Add -ful to 'care':", answers: ["careful", "care", "caring", "carer"], correct: 0, hint: { text: "Be careful" } },
  { id: 'y1_ful_04', letter: 'FUL', question: "Add -ful to 'joy':", answers: ["joyful", "joy", "joying", "joyer"], correct: 0, hint: { text: "Full of joy" } },
  { id: 'y1_ful_05', letter: 'FUL', question: "Which is correct?", answers: ["beautiful", "beauty", "beautify", "beauter"], correct: 0, hint: { text: "Very pretty" } },
  
  // LESS ending (5 questions)
  { id: 'y1_less_01', letter: 'LESS', question: "What does 'LESS' mean?", answers: ["without", "with", "like", "not"], correct: 0, hint: { text: "Without" } },
  { id: 'y1_less_02', letter: 'LESS', question: "Add -less to 'hope':", answers: ["hopeless", "hope", "hoping", "hoper"], correct: 0, hint: { text: "Without hope" } },
  { id: 'y1_less_03', letter: 'LESS', question: "Add -less to 'home':", answers: ["homeless", "home", "homing", "homer"], correct: 0, hint: { text: "No home" } },
  { id: 'y1_less_04', letter: 'LESS', question: "Add -less to 'care':", answers: ["careless", "care", "caring", "carer"], correct: 0, hint: { text: "Not careful" } },
  { id: 'y1_less_05', letter: 'LESS', question: "Which is correct?", answers: ["endless", "end", "ending", "ender"], correct: 0, hint: { text: "Never ends" } },
  
  // LY ending (5 questions)
  { id: 'y1_ly_01', letter: 'LY', question: "What does 'LY' mean?", answers: ["in a way", "person who", "without", "full of"], correct: 0, hint: { text: "In a way" } },
  { id: 'y1_ly_02', letter: 'LY', question: "Add -ly to 'quick':", answers: ["quickly", "quick", "quicken", "quicker"], correct: 0, hint: { text: "In a quick way" } },
  { id: 'y1_ly_03', letter: 'LY', question: "Add -ly to 'slow':", answers: ["slowly", "slow", "slowen", "slower"], correct: 0, hint: { text: "Not fast" } },
  { id: 'y1_ly_04', letter: 'LY', question: "Add -ly to 'happy':", answers: ["happily", "happy", "happen", "happier"], correct: 0, hint: { text: "Change y to i" } },
  { id: 'y1_ly_05', letter: 'LY', question: "Which is correct?", answers: ["loudly", "loud", "louden", "louder"], correct: 0, hint: { text: "Not quiet" } }
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
year1Questions.forEach(q => {
  const correctAnswer = q.answers[q.correct];
  q.answers = shuffleArray([...q.answers]);
  q.correct = q.answers.indexOf(correctAnswer);
});
