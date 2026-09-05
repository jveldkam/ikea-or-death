const ITEMS = [
  // IKEA Products
  { name: "Billy", type: "ikea" },
  { name: "Kallax", type: "ikea" },
  { name: "Lack", type: "ikea" },
  { name: "Poäng", type: "ikea" },
  { name: "MALM", type: "ikea" },
  { name: "Ektorp", type: "ikea" },
  { name: "Hemnes", type: "ikea" },
  { name: "Ribba", type: "ikea" },
  { name: "Förhöja", type: "ikea" },
  { name: "Skådis", type: "ikea" },
  { name: "Svalnäs", type: "ikea" },
  { name: "Tjena", type: "ikea" },
  { name: "Bygglek", type: "ikea" },
  { name: "Stuk", type: "ikea" },
  { name: "Sladdis", type: "ikea" },
  { name: "Grimsbu", type: "ikea" },
  { name: "Vukku", type: "ikea" },
  { name: "Gruvfjäll", type: "ikea" },
  { name: "Knarrevik", type: "ikea" },
  { name: "Vitmåske", type: "ikea" },
  { name: "Bestå", type: "ikea" },
  { name: "Brimnes", type: "ikea" },
  { name: "Docksta", type: "ikea" },
  { name: "Frosta", type: "ikea" },
  { name: "Glivarp", type: "ikea" },
  { name: "Hopen", type: "ikea" },
  { name: "Ivar", type: "ikea" },
  { name: "Jerker", type: "ikea" },
  { name: "Klippan", type: "ikea" },
  { name: "Lapland", type: "ikea" },
  { name: "Malkolm", type: "ikea" },
  { name: "Nobilia", type: "ikea" },
  { name: "Oppland", type: "ikea" },
  { name: "Plura", type: "ikea" },
  { name: "Rudsta", type: "ikea" },
  { name: "Sammanhang", type: "ikea" },
  { name: "Tjusig", type: "ikea" },
  { name: "Uppfyllelse", type: "ikea" },
  { name: "Vasagle", type: "ikea" },
  { name: "Wedge", type: "ikea" },
  { name: "Äpplaryd", type: "ikea" },
  { name: "Äpplaryd", type: "ikea" },
  { name: "Bergby", type: "ikea" },
  { name: "Byholma", type: "ikea" },
  { name: "Chilmark", type: "ikea" },
  { name: "Dalshult", type: "ikea" },
  { name: "Edland", type: "ikea" },
  { name: "Forsmark", type: "ikea" },
  { name: "Gärnås", type: "ikea" },
  { name: "Högsbo", type: "ikea" },
  { name: "Idanäs", type: "ikea" },
  { name: "Järvfält", type: "ikea" },
  { name: "Kärlstad", type: "ikea" },
  { name: "Lixhult", type: "ikea" },
  { name: "Mörbylånga", type: "ikea" },
  { name: "Niftvik", type: "ikea" },
  { name: "Ösmo", type: "ikea" },
  { name: "Pinnig", type: "ikea" },
  { name: "Quartel", type: "ikea" },
  { name: "Rönnskär", type: "ikea" },
  { name: "Säbylund", type: "ikea" },
  { name: "Tärnby", type: "ikea" },
  { name: "Ulfsberg", type: "ikea" },
  { name: "Vårsta", type: "ikea" },
  { name: "Wästland", type: "ikea" },
  { name: "Öppen", type: "ikea" },

  // Metal Bands (similar sounding to IKEA)
  { name: "Burzum", type: "death" },
  { name: "Blakart", type: "death" },
  { name: "Kvarforth", type: "death" },
  { name: "Fylkir", type: "death" },
  { name: "Sortsind", type: "death" },
  { name: "Nidingr", type: "death" },
  { name: "Thrym", type: "death" },
  { name: "Svarttjern", type: "death" },
  { name: "Kvöl", type: "death" },
  { name: "Frostbite", type: "death" },
  { name: "Svartpest", type: "death" },
  { name: "Mörkräde", type: "death" },
  { name: "Ritual", type: "death" },
  { name: "Krypto", type: "death" },
  { name: "Truppensturm", type: "death" },
  { name: "Skaldr", type: "death" },
  { name: "Nattramn", type: "death" },
  { name: "Folkstorm", type: "death" },
  { name: "Valdez", type: "death" },
  { name: "Trollvinter", type: "death" },
  { name: "Morbuis", type: "death" },
  { name: "Kahlvalt", type: "death" },
  { name: "Tornalux", type: "death" },
  { name: "Grimfast", type: "death" },
  { name: "Sorthvil", type: "death" },
  { name: "Malkvort", type: "death" },
  { name: "Nidark", type: "death" },
  { name: "Valkara", type: "death" },
  { name: "Skarholm", type: "death" },
  { name: "Mörkhär", type: "death" },
  { name: "Trollheim", type: "death" },
  { name: "Bjarnholm", type: "death" },
  { name: "Karrholm", type: "death" },
  { name: "Nordmark", type: "death" },
  { name: "Skarvland", type: "death" },
  { name: "Valkyrion", type: "death" },
  { name: "Forsholm", type: "death" },
  { name: "Grimstad", type: "death" },
  { name: "Morkstad", type: "death" },
  { name: "Trollstad", type: "death" },
  { name: "Härnstad", type: "death" },
  { name: "Kalpak", type: "death" },
  { name: "Lokstad", type: "death" },
  { name: "Moldvart", type: "death" },
  { name: "Nidsvål", type: "death" },
  { name: "Örnstad", type: "death" },
  { name: "Pestalund", type: "death" },
  { name: "Ravnheim", type: "death" },
  { name: "Skelmark", type: "death" },
  { name: "Trollmark", type: "death" },
  { name: "Valdheim", type: "death" },
  { name: "Wraithvang", type: "death" },
  { name: "Xulmour", type: "death" },
  { name: "Yamnir", type: "death" },
  { name: "Zephirok", type: "death" },
  { name: "Astraal", type: "death" },
  { name: "Blordvang", type: "death" },
  { name: "Crownhelm", type: "death" },
  { name: "Deathmoor", type: "death" },
  { name: "Eldvang", type: "death" },
  { name: "Frostheim", type: "death" },
  { name: "Gravetal", type: "death" },
  { name: "Hellmark", type: "death" },
  { name: "Ironmoor", type: "death" },
  { name: "Jörmland", type: "death" },
  { name: "Karthvang", type: "death" },
  { name: "Lyrheim", type: "death" },
  { name: "Mournstad", type: "death" },
  { name: "Nachtheim", type: "death" },
  { name: "Obsidvang", type: "death" },
  { name: "Pestholm", type: "death" },
  { name: "Quorthvul", type: "death" },
  { name: "Ravenmoor", type: "death" },
  { name: "Scourmoor", type: "death" },
  { name: "Thorvstad", type: "death" },
  { name: "Umbralis", type: "death" },
  { name: "Vortheim", type: "death" },
  { name: "Wrathmark", type: "death" },
];

const QUESTIONS_PER_GAME = 10;

const startScreen = document.getElementById("start-screen");
const playScreen = document.getElementById("play-screen");
const endScreen = document.getElementById("end-screen");
const nameDisplay = document.getElementById("name-display");
const questionCounter = document.getElementById("question-counter");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");
const scoreBar = document.getElementById("score-bar");
const streakCounter = document.getElementById("streak-counter");

let questions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startGame() {
  questions = shuffle(ITEMS).slice(0, QUESTIONS_PER_GAME);
  currentIndex = 0;
  score = 0;
  streak = 0;
  startScreen.classList.remove("active");
  playScreen.classList.add("active");
  endScreen.classList.remove("active");
  updateScoreBar();
  showQuestion();
}

function showQuestion() {
  if (currentIndex >= questions.length) {
    endGame();
    return;
  }

  const question = questions[currentIndex];
  nameDisplay.textContent = question.name;
  questionCounter.textContent = `${currentIndex + 1}/${QUESTIONS_PER_GAME}`;
  feedback.textContent = "";
  feedback.classList.remove("correct", "wrong");
  
  // Add animation
  nameDisplay.classList.remove("fade-in");
  void nameDisplay.offsetWidth; // Trigger reflow
  nameDisplay.classList.add("fade-in");
}

function updateScoreBar() {
  const percentage = (score / QUESTIONS_PER_GAME) * 100;
  scoreBar.style.width = percentage + "%";
  streakCounter.textContent = score + "/" + QUESTIONS_PER_GAME;
}

function handleGuess(guess) {
  const question = questions[currentIndex];
  const correct = guess === question.type;

  if (correct) {
    score++;
    streak++;
    feedback.textContent = "✓";
    feedback.classList.add("correct");
  } else {
    streak = 0;
    feedback.textContent = `✗`;
    feedback.classList.add("wrong");
  }

  updateScoreBar();
  currentIndex++;
  setTimeout(showQuestion, 1200);
}

function endGame() {
  playScreen.classList.remove("active");
  endScreen.classList.add("active");
  const percentage = Math.round((score / QUESTIONS_PER_GAME) * 100);
  finalScore.textContent = `${score}/${QUESTIONS_PER_GAME} • ${percentage}%`;
}

function restartGame() {
  startGame();
}

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("ikea-btn").addEventListener("click", () => handleGuess("ikea"));
document.getElementById("death-btn").addEventListener("click", () => handleGuess("death"));
document.getElementById("restart-btn").addEventListener("click", restartGame);
