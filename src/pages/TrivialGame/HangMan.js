import { WORDS, hangmanImages } from "../../data/data";
import "./HangMan.css";

export const HangManGame = () => {
  const app = document.querySelector("#app");
  const mainContainer = document.createElement("div");
  const wordDisplay = document.createElement("div");
  const hangmanDisplay = document.createElement("img");
  const message = document.createElement("div");
  const downSideContainer = document.createElement("div");
  const alphabetContainer = document.createElement("div");
  const buttonAndWordsContainer = document.createElement("div");
  const newGameButton = document.createElement("button");
  const guessedWordsContainer = document.createElement("div");

  mainContainer.id = "main-container";
  wordDisplay.id = "word-display";
  hangmanDisplay.id = "hangman-display";
  hangmanDisplay.src = hangmanImages[0];
  message.id = "message";
  downSideContainer.id = "down-side-container";
  buttonAndWordsContainer.id = "button-and-words";
  alphabetContainer.id = "alphabet-container";
  guessedWordsContainer.id = "guessed-words-container";
  newGameButton.id = "new-game-button";
  newGameButton.textContent = "Nuevo Juego";

  mainContainer.append(hangmanDisplay, wordDisplay, message, downSideContainer);
  downSideContainer.append(alphabetContainer, buttonAndWordsContainer);
  buttonAndWordsContainer.append(guessedWordsContainer, newGameButton);
  app.appendChild(mainContainer);

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
      message.textContent = "La palabra era: " + word;
    }
  }

  function createAlphabetButtons() {
    alphabetContainer.innerHTML = "";
    const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
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
