const ITEMS = [
  // IKEA Products
  { name: "Billy", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Kallax", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Lack", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Poäng", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "MALM", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Ektorp", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Hemnes", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Ribba", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Förhöja", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Skådis", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Svalnäs", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Tjena", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Bygglek", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Stuk", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Sladdis", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Grimsbu", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Vukku", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Gruvfjäll", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Knarrevik", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Vitmåske", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Bestå", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Brimnes", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Docksta", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Frosta", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Glivarp", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Hopen", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Ivar", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Jerker", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Klippan", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Lapland", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Malkolm", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Nobilia", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Oppland", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Plura", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Rudsta", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },
  { name: "Sammanhang", type: "ikea", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop" },

  // Metal Bands
  { name: "Burzum", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Blakart", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Kvarforth", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Fylkir", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Sortsind", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Nidingr", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Thrym", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Svarttjern", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Kvöl", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Frostbite", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Svartpest", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Mörkräde", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Ritual", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Krypto", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Truppensturm", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Skaldr", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Nattramn", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Folkstorm", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Valdez", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Trollvinter", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Morbuis", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Kahlvalt", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Tornalux", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Grimfast", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Sorthvil", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Malkvort", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Nidark", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Valkara", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Skarholm", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Mörkhär", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Trollheim", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Bjarnholm", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Karrholm", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Nordmark", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
  { name: "Skarvland", type: "death", image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop" },
];

const QUESTIONS_PER_GAME = 10;

const startScreen = document.getElementById("start-screen");
const playScreen = document.getElementById("play-screen");
const endScreen = document.getElementById("end-screen");
const nameDisplay = document.getElementById("name-display");
const itemImage = document.getElementById("item-image");
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
  itemImage.src = question.image;
  itemImage.style.opacity = "0";
  
  questionCounter.textContent = `${currentIndex + 1}/${QUESTIONS_PER_GAME}`;
  feedback.textContent = "";
  feedback.classList.remove("correct", "wrong");
  
  // Add animation
  nameDisplay.classList.remove("fade-in");
  void nameDisplay.offsetWidth;
  nameDisplay.classList.add("fade-in");
  
  // Fade in image
  setTimeout(() => {
    itemImage.style.opacity = "1";
  }, 50);
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
