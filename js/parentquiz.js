// "Which god is your parent?" personality quiz
var PARENTS = {
  poseidon: {
    name: "Poseidon",
    emoji: "🌊",
    cabin: "Cabin 13 — Poseidon",
    title: "Son of the Sea",
    desc: "You are the calm in the storm, the one who stays level when everybody else panics. You are loyal to a fault, protective of your people, and slightly suspicious of dry land. You feel things deeply and you hide it well.",
    powers: ["Controlling water, horses and ships", "Breathing underwater", "Summoning small hurricanes"]
  },
  athena: {
    name: "Athena",
    emoji: "🦉",
    cabin: "Cabin 6 — Athena",
    title: "Child of Wisdom",
    desc: "You plan before you act, and you act anyway when it matters. You like being right — but you like being useful more. You are the one in the group who reads the map before anyone else moves.",
    powers: ["Strategic thinking and war plans", "Seeing through the Mist", "Enchanted shields and armour"]
  },
  ares: {
    name: "Ares",
    emoji: "⚔️",
    cabin: "Cabin 5 — Ares",
    title: "Child of War",
    desc: "You are brave in the way that makes your friends nervous. You run toward the fight, not away. Anger is your fuel, and you have to be careful it does not become your master. You respect courage above everything.",
    powers: ["Invulnerability to war", "Berserk battle strength", "Summoning war-fever"]
  },
  apollo: {
    name: "Apollo",
    emoji: "☀️",
    cabin: "Cabin 8 — Apollo",
    title: "Child of the Sun",
    desc: "You are confident, funny, and the life of every room — right up until you get hit with something real. Then you pull out the jokes and the music, because that is how you cope. People gravitate towards you.",
    powers: ["Archery", "Healing with music and medicine", "Prophecy"]
  },
  hermes: {
    name: "Hermes",
    emoji: "🏃",
    cabin: "Cabin 10 — Hermes",
    title: "Child of the Trickster",
    desc: "Fast on your feet and faster with your mouth. You are the one who knows everybody's secret and nobody's password. You would rather sneak in through the window than knock — but you would never leave your friends behind.",
    powers: ["Super speed", "Flying with winged sandals", "Opening locks and stealing"]
  },
  aphasrodite: {
    name: "Aphrodite",
    emoji: "💗",
    cabin: "Cabin 2 — Aphrodite",
    title: "Child of Love",
    desc: "You understand people. You read a room in three seconds and know exactly who needs what. You are warmer than you let on, and far tougher than people assume — you just prefer winning with kindness.",
    powers: ["Charms", "Reading and influencing emotions", "Making people fall in love"]
  },
  hephaestus: {
    name: "Hephaestus",
    emoji: "🔨",
    cabin: "Cabin 6b — Hephaestus",
    title: "Child of the Forge",
    desc: "You would rather build the thing than talk about the thing. While everybody else is swinging swords, you are inventing a better sword. You are loyal, dependable, and secretly the most powerful person at camp.",
    powers: ["Controlling fire", "Building machines and weapons", "Metalworking"]
  },
  artemis: {
    name: "Artemis",
    emoji: "🏹",
    cabin: "Cabin 4 — Artemis",
    title: "Child of the Hunt",
    desc: "Independent to a fault, and better for it. You like the wild, you like your space, and you are not interested in being told what to do. When you do commit to something, it is completely.",
    powers: ["Hunting and tracking", "Controlling wolves", "Surviving in the wild"]
  },
  demeter: {
    name: "Demeter",
    emoji: "🌾",
    cabin: "Cabin 11 — Demeter",
    title: "Child of the Harvest",
    desc: "You feel other people's feelings so strongly it can be a problem. You are kind, generous, and occasionally overwhelmed by everything. You are the one who notices when somebody is not okay.",
    powers: ["Growing plants and controlling food", "Healing through nature", "Surviving any environment"]
  },
  hades: {
    name: "Hades",
    emoji: "🔱",
    cabin: "Cabin 13 — Hades (the cabin that doesn't exist)",
    title: "Child of the Underworld",
    desc: "You are comfortable with the things other people run from. You do not flinch at death, and people find that either unnerving or magnetic. You are loyal, a little bit lonely, and much braver than people expect.",
    powers: ["Summoning and speaking with the dead", "Travelling through shadows", "Controlling precious metals"]
  },
  dionysus: {
    name: "Dionysus",
    emoji: "🍇",
    cabin: "Cabin 7 — Dionysus",
    title: "Child of the Vine",
    desc: "You make any room better just by being in it. You are fun, chaotic and warm, and you do not take yourself too seriously. Life is short and you intend to enjoy every single quest.",
    powers: ["Making wine and transforming things", "Inspiring madness and joy", "The Camp Half-Blood party cabin"]
  },
  aeolus: {
    name: "Aeolus",
    emoji: "💨",
    cabin: "Cabin 2b — Aeolus",
    title: "Child of the Wind",
    desc: "You are restless, quick and hard to pin down. You like change, you like freedom, and you get grumpy when somebody tries to cage you in. You are also the one who keeps the whole camp breathing easy.",
    powers: ["Controlling wind and storms", "Traveling on the wind", "Weather mastery"]
  }
};

// Each option scores one god
var QUESTIONS = [
  {
    q: "It is 2am and you cannot sleep. What are you doing?",
    o: [
      { t: "Racing along the beach to see who is faster", g: "poseidon" },
      { t: "Making a plan for tomorrow that nobody asked for", g: "athena" },
      { t: "Training in the arena, one more round", g: "ares" },
      { t: "Playing music until the camp complains", g: "apollo" }
    ]
  },
  {
    q: "A friend is in trouble. What do you do?",
    o: [
      { t: "Get there first, even if it takes all night", g: "hermes" },
      { t: "Comfort them and talk it through", g: "aphasrodite" },
      { t: "Build something that will fix the problem", g: "hephaestus" },
      { t: "Say nothing much, but quietly stay with them", g: "hades" }
    ]
  },
  {
    q: "Which subject sounds most like your kind of thing?",
    o: [
      { t: "Strategy and maps", g: "athena" },
      { t: "Wildlife and the outdoors", g: "artemis" },
      { t: "Cooking and food", g: "demeter" },
      { t: "Music and poetry", g: "apollo" }
    ]
  },
  {
    q: "You get the last seat in the mess tent. Who is sitting next to you?",
    o: [
      { t: "A loud, generous friend with terrible jokes", g: "dionysus" },
      { t: "Someone who never stops moving", g: "aeolus" },
      { t: "A stranger who tells you a deep secret", g: "hermes" },
      { t: "A friend who makes you feel safe without saying much", g: "hades" }
    ]
  },
  {
    q: "What is your biggest strength?",
    o: [
      { t: "Never backing down", g: "ares" },
      { t: "Never giving up on people", g: "aphasrodite" },
      { t: "Never losing my temper", g: "artemis" },
      { t: "Never wasting a good idea", g: "hephaestus" }
    ]
  },
  {
    q: "Pick a superpower. Any of them.",
    o: [
      { t: "Fly", g: "hermes" },
      { t: "Breathe underwater", g: "poseidon" },
      { t: "Heal anyone", g: "apollo" },
      { t: "See the future", g: "apollo" }
    ]
  },
  {
    q: "It is your turn to lead the quest. You…",
    o: [
      { t: "Work out the plan first, then explain it to everybody", g: "athena" },
      { t: "Charge in and sort it out", g: "ares" },
      { t: "Ask the camp for help and organise everyone", g: "demeter" },
      { t: "Find a shortcut nobody else thought of", g: "hermes" }
    ]
  },
  {
    q: "Which animal speaks to you most easily?",
    o: [
      { t: "Horses and dolphins", g: "poseidon" },
      { t: "Owls and ravens", g: "athena" },
      { t: "Wolves", g: "artemis" },
      { t: "Snakes and dolphins", g: "hades" }
    ]
  },
  {
    q: "How do you handle a rule you do not like?",
    o: [
      { t: "Follow it exactly and wait for the loophole", g: "hermes" },
      { t: "Challenge it, loudly", g: "ares" },
      { t: "Suggest a better version of it", g: "athena" },
      { t: "Smile and ignore it", g: "aeolus" }
    ]
  },
  {
    q: "Last question: what do people say about you?",
    o: [
      { t: "\"They would never leave you behind.\"", g: "poseidon" },
      { t: "\"They make everything better just by being there.\"", g: "aphasrodite" },
      { t: "\"They are the funniest person I know.\"", g: "dionysus" },
      { t: "\"They don't say much, but they notice everything.\"", g: "demeter" }
    ]
  }
];

var idx = 0, locked = false, scores = {};

function el(id) { return document.getElementById(id); }

function render() {
  var q = QUESTIONS[idx];
  locked = false;
  el('qBar').style.width = (idx / QUESTIONS.length * 100) + '%';
  el('qCount').textContent = 'Question ' + (idx + 1) + ' of ' + QUESTIONS.length;
  el('qText').textContent = q.q;
  el('qFeedback').style.display = 'none';
  el('nextWrap').style.display = 'none';

  var opts = el('qOpts');
  opts.innerHTML = '';
  q.o.forEach(function (opt, i) {
    var b = document.createElement('button');
    b.className = 'q-opt';
    b.textContent = opt.t;
    b.addEventListener('click', function () { answer(opt, b); });
    opts.appendChild(b);
  });
}

function answer(opt, btn) {
  if (locked) return;
  locked = true;
  scores[opt.g] = (scores[opt.g] || 0) + 1;
  var buttons = el('qOpts').querySelectorAll('.q-opt');
  buttons.forEach(function (b) { b.disabled = true; });
  btn.classList.add('right');

  var fb = el('qFeedback');
  fb.style.display = 'block';
  var p = PARENTS[opt.g];
  fb.innerHTML = '🔱 That points toward <b>' + p.name + '</b> — ' + p.emoji + ' the ' + p.title + '.';

  el('qBar').style.width = ((idx + 1) / QUESTIONS.length * 100) + '%';
  el('nextWrap').style.display = 'block';
  el('qNext').textContent = idx === QUESTIONS.length - 1 ? 'Reveal my parent 🏛️' : 'Next question →';
}

function finish() {
  var best = null, bestN = -1;
  Object.keys(scores).forEach(function (k) {
    if (scores[k] > bestN) { bestN = scores[k]; best = k; }
  });
  if (!best) best = 'poseidon';
  var p = PARENTS[best];

  el('qBar').style.width = '100%';
  el('qCount').textContent = 'Quiz complete';
  el('quizArea').innerHTML =
    '<div class="q-result">' +
    '<div style="font-size:4rem">' + p.emoji + '</div>' +
    '<div class="rank">' + p.name + '</div>' +
    '<div class="score" style="margin-bottom:16px">' + p.title + ' &middot; ' + p.cabin + '</div>' +
    '<p class="muted" style="max-width:520px;margin:0 auto 20px">' + p.desc + '</p>' +
    '<div style="display:inline-block;text-align:left;background:rgba(0,0,0,.28);border:1px solid rgba(240,192,74,.25);border-radius:14px;padding:18px 22px;margin-bottom:22px">' +
    '<b style="color:var(--gold)">Your powers would be:</b><ul class="muted" style="margin:8px 0 0 20px">' +
    p.powers.map(function (x) { return '<li>' + x + '</li>'; }).join('') +
    '</ul></div><br>' +
    '<button class="q-next" onclick="location.reload()">Take it again 🔁</button>' +
    '</div>';
}

el('qNext').addEventListener('click', function () {
  idx++;
  if (idx >= QUESTIONS.length) { finish(); } else { render(); }
});

render();
