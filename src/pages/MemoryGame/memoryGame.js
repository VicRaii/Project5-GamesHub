import { GAMES, CARDS } from "../../data/data";
import "./memoryGame.css";

export const memoryGame = (data) => {
  const cards = CARDS;
  let flipped = [];
  let score = 0;
  let counter = 0;
  let tries = 0;
  let gameInitiated = false;

  const createBoard = (array, data) => {
    const gameBoard = document.createElement("div");
    gameBoard.className = "game-container";
    gameBoard.id = data.id;

    array.forEach((card) => {
      const flipCard = document.createElement("div");
      flipCard.className = "flip-card disabled";
      flipCard.addEventListener("click", handleCardClick);

      const flipCardInner = document.createElement("div");
      flipCardInner.className = "flip-card-inner";

      const flipCardFront = document.createElement("div");
      flipCardFront.className = "flip-card-front";

      const imageCard = document.createElement("img");
      imageCard.className = "image-card";
      imageCard.src =
        "https://i.pinimg.com/236x/d1/b1/1d/d1b11d5e4dbae547ac0d651476cec488.jpg";

      const flipCardBack = document.createElement("div");
      flipCardBack.className = "flip-card-back";

      const imgBack = document.createElement("img");
      imgBack.className = "img-back";
      imgBack.src = card;

      flipCardBack.append(imgBack);
      flipCardFront.append(imageCard);
      flipCardInner.append(flipCardFront, flipCardBack);
      flipCard.append(flipCardInner);
      gameBoard.append(flipCard);
    });

    const app = document.querySelector("#app");
    divContainerGame.append(gameBoard);
    app.append(divContainerGame);
  };

  const handleCardClick = (event) => {
    const clickedCard = event.currentTarget;
    if (flipped.length === 2 || clickedCard.classList.contains("flipped")) {
      return;
    }

    clickedCard.classList.add("flipped");
    flipped.push(clickedCard);

    if (flipped.length === 2) {
      const [img1, img2] = flipped.map(
        (card) => card.querySelector(".img-back").src
      );

      if (img1 === img2) {
        flipped = [];
        score++;

        document.querySelector("#score").innerText = `Score: ${score}`;
      } else {
        setTimeout(() => {
          flipped.forEach((card) => card.classList.remove("flipped"));
          flipped = [];
        }, 700);
      }
      document.querySelector("#tries").innerText = `Tries: ${tries}`;
      tries++;
    }
  };

  const initCounter = () => {
    gameInitiated = true;

    const time = document.createElement("p");
    time.className = "time";
    time.innerText = counter;
    timeCounterStart.appendChild(time);

    const interval = setInterval(() => {
      counter++;
      time.innerText = counter + `seconds`;

      if (score === cards.length / 2) {
        clearInterval(interval);
        const winMessage = document.createElement("h3");
        winMessage.textContent = "Victory!";
        winMessage.className = "win-text";
        counterScore.append(winMessage);
      }
    }, 1000);

    const cards = document.querySelectorAll(".flip-card");
    cards.forEach((card) => card.classList.remove("disabled"));
    return interval;
  };
  const divContainerGame = document.createElement("div");
  divContainerGame.className = "container-game2";

  const divContainerApp = document.createElement("div");
  divContainerApp.className = "container-app";

  const timeCounterStart = document.createElement("button");
  timeCounterStart.className = "time-start";
  timeCounterStart.innerText = "Start";
  timeCounterStart.addEventListener("click", initCounter);

  const counterScore = document.createElement("h2");
  counterScore.className = "counter-title";
  counterScore.id = "score";
  counterScore.innerText = `Puntuación: ${score}`;

  const triesScore = document.createElement("h2");
  triesScore.className = "counter-title";
  triesScore.id = "tries";
  triesScore.innerText = `Intentos: ${tries}`;

  const reloadButton = document.createElement("button");
  reloadButton.className = "reload";
  reloadButton.innerText = "Restart";
  divContainerApp.append(
    timeCounterStart,
    counterScore,
    triesScore,
    reloadButton
  );

  const app = document.querySelector("#app");
  divContainerGame.append(divContainerApp);
  app.append(divContainerGame);

  reloadButton.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = "";
    memoryGame(GAMES[0].id);
  });

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  shuffleArray(cards);
  createBoard(cards, data);
};
