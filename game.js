const ITEMS = [
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

  { name: "Burzum", type: "death" },
  { name: "Mayhem", type: "death" },
  { name: "Darkthrone", type: "death" },
  { name: "Emperor", type: "death" },
  { name: "Gorgoroth", type: "death" },
  { name: "Immortal", type: "death" },
  { name: "Bathory", type: "death" },
  { name: "Satyricon", type: "death" },
  { name: "Marduk", type: "death" },
  { name: "Enslaved", type: "death" },
  { name: "Watain", type: "death" },
  { name: "Taake", type: "death" },
  { name: "Tsjuder", type: "death" },
  { name: "Ulver", type: "death" },
  { name: "Nargaroth", type: "death" },
  { name: "Dimmu Borgir", type: "death" },
  { name: "Cradle of Filth", type: "death" },
  { name: "Behemoth", type: "death" },
  { name: "Belphegor", type: "death" },
  { name: "Mork", type: "death" }
];

const QUESTIONS_PER_GAME = 10;

const startScreen = document.getElementById("start-screen");
const playScreen = document.getElementById("play-screen");
const endScreen = document.getElementById("end-screen");
const nameDisplay = document.getElementById("name-display");
const questionCounter = document.getElementById("question-counter");
const feedback = document.getElementById("feedback");
const finalScore = document.getElementById("final-score");

let questions = [];
let currentIndex = 0;
let score = 0;

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
  startScreen.classList.add("hidden");
  playScreen.classList.remove("hidden");
  endScreen.classList.add("hidden");
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
}

function handleGuess(guess) {
  const question = questions[currentIndex];
  const correct = guess === question.type;

  if (correct) {
    score++;
    feedback.textContent = "✓ Correct!";
    feedback.classList.add("correct");
  } else {
    feedback.textContent = `✗ Wrong! It's ${question.type === "ikea" ? "IKEA" : "Death"}`;
    feedback.classList.add("wrong");
  }

  currentIndex++;
  setTimeout(showQuestion, 1500);
}

function endGame() {
  playScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  finalScore.textContent = `You got ${score} out of ${QUESTIONS_PER_GAME} correct!`;
}

function restartGame() {
  startGame();
}

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("ikea-btn").addEventListener("click", () => handleGuess("ikea"));
document.getElementById("death-btn").addEventListener("click", () => handleGuess("death"));
document.getElementById("restart-btn").addEventListener("click", restartGame);
