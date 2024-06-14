import { WORDS, hangmanImages } from "../../data/data";
import "./HangMan.css";

// Rutas de las imágenes para cada etapa del ahorcado

export const HangManGame = () => {
  const app = document.querySelector("#app");
  const wordDisplay = document.createElement("div");
  const hangmanDisplay = document.createElement("img"); // Usamos img en lugar de div para las imágenes
  const message = document.createElement("div");
  const alphabetContainer = document.createElement("div");
  const newGameButton = document.createElement("button");
  const guessedWordsContainer = document.createElement("div");

  wordDisplay.id = "word-display";
  hangmanDisplay.id = "hangman-display";
  hangmanDisplay.src = hangmanImages[0]; // Inicializamos con la primera imagen
  message.id = "message";
  alphabetContainer.id = "alphabet-container";
  guessedWordsContainer.id = "guessed-words-container";
  newGameButton.id = "new-game-button";
  newGameButton.textContent = "Nuevo Juego";

  app.append(
    wordDisplay,
    hangmanDisplay,
    message,
    alphabetContainer,
    newGameButton,
    guessedWordsContainer
  );

  const wordList = WORDS;
  let word = "";
  let guessedLetters = [];
  let attempts = 0;
  const maxAttempts = 6;

  let guessedWordsCount =
    parseInt(localStorage.getItem("guessedWordsCount")) || 0;

  function chooseWord() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
  }

  function displayWord() {
    const display = word
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "_"))
      .join(" ");
    wordDisplay.textContent = display;
  }

  function updateHangman() {
    if (attempts <= 6) {
      hangmanDisplay.src = hangmanImages[attempts];
    }
  }

  function guessLetter(letter) {
    if (!guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      if (!word.includes(letter)) {
        attempts++;
        updateHangman();
      }
    }
    displayWord();

    if (word.split("").every((letter) => guessedLetters.includes(letter))) {
      message.textContent = "¡Has ganado!";
      guessedWordsCount++;
      localStorage.setItem("guessedWordsCount", guessedWordsCount);
      displayGuessedWordsCount();
    }

    if (attempts >= maxAttempts) {
      message.textContent = "¡Has perdido! La palabra era: " + word;
    }
  }

  function createAlphabetButtons() {
    alphabetContainer.innerHTML = ""; // Clear existing buttons
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    alphabet.forEach((letter) => {
      const button = document.createElement("button");
      button.textContent = letter;
      button.id = `letter-${letter}`;
      button.classList.add("alphabet-button");
      button.addEventListener("click", () => {
        guessLetter(letter);
        button.disabled = true;
      });
      alphabetContainer.appendChild(button);
    });
  }

  function startNewGame() {
    guessedLetters = [];
    attempts = 0;
    message.textContent = "";
    chooseWord();
    displayWord();
    updateHangman();
    createAlphabetButtons();
  }

  function displayGuessedWordsCount() {
    guessedWordsContainer.innerHTML = `<h3>Palabras Acertadas: ${guessedWordsCount}</h3>`;
  }

  newGameButton.addEventListener("click", startNewGame);

  chooseWord();
  displayWord();
  updateHangman();
  createAlphabetButtons();
  displayGuessedWordsCount();
};
