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
  { name: "Trollstad", type: "death" }
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
  startScreen.classList.add("hidden");
  playScreen.classList.remove("hidden");
  endScreen.classList.add("hidden");
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
  questionCounter.textContent = `Question ${currentIndex + 1} of ${QUESTIONS_PER_GAME}`;
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
  streakCounter.textContent = `🔥 Streak: ${streak}`;
}

function handleGuess(guess) {
  const question = questions[currentIndex];
  const correct = guess === question.type;

  if (correct) {
    score++;
    streak++;
    feedback.textContent = "✓ Correct!";
    feedback.classList.add("correct");
  } else {
    streak = 0;
    feedback.textContent = `✗ Wrong! It's ${question.type === "ikea" ? "IKEA" : "Death"}`;
    feedback.classList.add("wrong");
  }

  updateScoreBar();
  currentIndex++;
  setTimeout(showQuestion, 1500);
}

function endGame() {
  playScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  const percentage = Math.round((score / QUESTIONS_PER_GAME) * 100);
  finalScore.textContent = `You got ${score} out of ${QUESTIONS_PER_GAME} correct! (${percentage}%)`;
}

function restartGame() {
  startGame();
}

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("ikea-btn").addEventListener("click", () => handleGuess("ikea"));
document.getElementById("death-btn").addEventListener("click", () => handleGuess("death"));
document.getElementById("restart-btn").addEventListener("click", restartGame);
