// Percy Jackson lore quiz
var QUESTIONS = [
  {
    q: "Who is Percy Jackson's godly parent?",
    o: ["Zeus", "Poseidon", "Hades", "Athena"],
    a: 1,
    e: "Poseidon, god of the sea. That is why Percy can control water, talk to horses, and breathe underwater."
  },
  {
    q: "What is the name of Percy's sword?",
    o: ["Anaklusmos", "Riptide", "Backbiter", "Sumarbrander"],
    a: 1,
    e: "Riptide — Greek for Anaklusmos. It is a pen that turns into a celestial bronze sword, and it always returns to his pocket."
  },
  {
    q: "What is Grover Underwood's godly parent?",
    o: ["Pan", "Dionysus", "Hermes", "Apollo"],
    a: 0,
    e: "Pan, the god of the wild. Grover is a satyr, which means goat legs and horns — hence all the cap-wearing."
  },
  {
    q: "Annabeth's godly parent is the goddess of wisdom and warfare. Who is she?",
    o: ["Aphrodite", "Athena", "Hera", "Demeter"],
    a: 1,
    e: "Athena. Annabeth gets the brains, the strategy and the enchanted shield Aegis."
  },
  {
    q: "Who are the members of the Prophecy of Seven besides Percy, Annabeth, Grover and Nico?",
    o: ["Reyna, Leo, Hazel, Frank", "Apollo, Meg, Clarisse, Zoe", "Luke, Thalia, Jason, Tyson", "Carter, Sadie, Magnus, Walt"],
    a: 0,
    e: "Reyna Ramírez-Arellano, Leo Valdez, Hazel Levesque and Frank Zhang — the four kids from Camp Jupiter."
  },
  {
    q: "What is Camp Jupiter?",
    o: ["A Roman camp for demigods of the gods' Roman names", "A camp for Camp Half-Blood's enemies", "A training camp for monsters", "Camp Half-Blood's second beach house"],
    a: 0,
    e: "The Roman counterpart to Camp Half-Blood, hidden in San Francisco. Greek and Roman demigods are cousins — they just did not know it."
  },
  {
    q: "What is the name of the camp's wise centaur mentor?",
    o: ["Fury", "Chiron", "Hippocrates", "Chiron's brother Felix"],
    a: 1,
    e: "Chiron. He has been teaching demigods for a thousand years — including Achilles. He is also Kronos's son, which is awkward for everybody."
  },
  {
    q: "Which of these is a gift from a child of Poseidon?",
    o: ["Talaria (winged sandals)", "Aegis (a shield)", "Diablo (a flaming sword)", "Kopis (curved swords)"],
    a: 0,
    e: "Talaria, the winged sandals, let you fly. Riptide is also Poseidon's — but it is handed down, not given."
  },
  {
    q: "Who is the god of medicine and healing, and the father of Will Solace?",
    o: ["Hermes", "Apollo", "Asclepius", "Dionysus"],
    a: 1,
    e: "Apollo. Will Solace is the camp healer, and Nico di Angelo's boyfriend."
  },
  {
    q: "In The Trials of Apollo, who gets stripped of his godhood and dumped in a Manhattan dumpster?",
    o: ["Apollo", "Zeus", "Hermes", "Poseidon"],
    a: 0,
    e: "Apollo, who becomes Lester Papadopoulos, a sixteen-year-old mortal with a death wish and a very fast car."
  },
  {
    q: "Who is the Oracle of Delphi — the mortal girl who sees through the Mist?",
    o: ["Meg McCaffrey", "Rachel Elizabeth Dare", "Zoë Nightshade", "Hemithea"],
    a: 1,
    e: "Rachel Dare. She delivers prophecies in rhyme, which makes them extremely hard to act on."
  },
  {
    q: "What is the name of the Titan king who wants to conquer the world in the first series?",
    o: ["Kronos", "Hyperion", "Atlas", "Coeus"],
    a: 0,
    e: "Kronos, who chopped his own children into pieces and threw them into Tartarus. Chiron is his son."
  },
  {
    q: "Which two series are set in the same universe but feature Egyptian and Norse gods?",
    o: ["Trials of Apollo and Heroes of Olympus", "The Kane Chronicles and Magnus Chase", "Camp Half-Blood and Percy Jackson & the Olympians", "Nico di Angelo Adventures and Demigod Files"],
    a: 1,
    e: "The Kane Chronicles (Egyptian) and Magnus Chase and the Gods of Asgard (Norse). Magnus is Annabeth's cousin."
  },
  {
    q: "What is Percy's biggest fear throughout the first series?",
    o: ["Spiders", "The ocean", "Heights", "Being forgotten"],
    a: 1,
    e: "It is the ocean. He finds out later that the sea is actually his father's domain — the fear runs in the family."
  },
  {
    q: "The newest series, The Wild Zone (2026), is set between which two books?",
    o: ["The Lightning Thief and The Sea of Monsters", "The Sea of Monsters and The Titan's Curse", "The Battle of the Labyrinth and The Last Olympian", "The Chalice of the Gods and The Dark Prophecy"],
    a: 0,
    e: "It is set in the autumn between the first two books, before Percy, Annabeth and Grover arrived at camp. Told from Katie Kim's point of view."
  }
];

var RANKS = [
  { min: 15, title: "Son of Poseidon", desc: "Perfect score. You are basically Chiron's favourite camper. Camp Half-Blood would like you to report for duty immediately." },
  { min: 12, title: "Demigod of Olympus", desc: "Outstanding. You know your cabins, your gods and your myths. A truly dangerous amount of knowledge." },
  { min: 9, title: "Hunter of the Camp", desc: "Solid! You have clearly read the books more than once. A few quests left to complete." },
  { min: 6, title: "Spark of the Underworld", desc: "Not bad at all. A little more reading and you will pass the fire of Hephaestus." },
  { min: 0, title: "Mortal in Training", desc: "The Mist is still thick for you. Head back to camp and read some more — Chiron believes in you. Probably." }
];

var idx = 0, score = 0, locked = false;

function el(id) { return document.getElementById(id); }

function render() {
  var q = QUESTIONS[idx];
  locked = false;
  el('qBar').style.width = ((idx) / QUESTIONS.length * 100) + '%';
  el('qCount').textContent = 'Question ' + (idx + 1) + ' of ' + QUESTIONS.length;
  el('qText').textContent = q.q;
  el('qFeedback').style.display = 'none';
  el('nextWrap').style.display = 'none';

  var opts = el('qOpts');
  opts.innerHTML = '';
  q.o.forEach(function (text, i) {
    var b = document.createElement('button');
    b.className = 'q-opt';
    b.textContent = text;
    b.addEventListener('click', function () { answer(i, b); });
    opts.appendChild(b);
  });
}

function answer(i, btn) {
  if (locked) return;
  locked = true;
  var q = QUESTIONS[idx];
  var buttons = el('qOpts').querySelectorAll('.q-opt');
  buttons.forEach(function (b) { b.disabled = true; });
  btn.classList.add(i === q.a ? 'right' : 'wrong');
  if (i === q.a) {
    score++;
    buttons[q.a].classList.add('right');
  } else {
    buttons[q.a].classList.add('right');
  }
  var fb = el('qFeedback');
  fb.style.display = 'block';
  fb.innerHTML = (i === q.a ? '✅ <b>Correct!</b> ' : '❌ <b>Not quite.</b> ') + q.e;
  el('qBar').style.width = ((idx + 1) / QUESTIONS.length * 100) + '%';
  el('nextWrap').style.display = 'block';
  el('qNext').textContent = idx === QUESTIONS.length - 1 ? 'See my rank 🏆' : 'Next question →';
}

function finish() {
  var rank = RANKS.find(function (r) { return score >= r.min; });
  el('qBar').style.width = '100%';
  el('qCount').textContent = 'Quiz complete';
  el('quizArea').innerHTML =
    '<div class="q-result">' +
    '<div class="rank">' + rank.title + '</div>' +
    '<div class="score">You scored <b style="color:var(--gold)">' + score + ' / ' + QUESTIONS.length + '</b></div>' +
    '<p class="muted" style="max-width:520px;margin:0 auto 24px">' + rank.desc + '</p>' +
    '<button class="q-next" onclick="location.reload()">Play again 🔁</button>' +
    '</div>';
}

el('qNext').addEventListener('click', function () {
  idx++;
  if (idx >= QUESTIONS.length) { finish(); } else { render(); }
});

render();
