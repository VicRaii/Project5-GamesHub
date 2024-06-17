import "./JumperGame.css";

export const JumperGame = () => {
  const divApp = document.querySelector("#app");
  const gameContainer = document.createElement("div");
  const assetsContainer = document.createElement("div");
  const character = document.createElement("div");
  const block = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const startButton = document.createElement("button");
  const jumpButton = document.createElement("button");
  const scoreContainer = document.createElement("div");
  const highScoreContainer = document.createElement("div");

  gameContainer.id = "game";
  assetsContainer.id = "assetsContainer";
  character.id = "character";
  block.id = "block";
  buttonContainer.id = "buttonContainer";
  startButton.id = "startButton";
  jumpButton.id = "jumpButton";
  scoreContainer.id = "scoreContainer";
  highScoreContainer.id = "highScoreContainer";
  jumpButton.textContent = "Jump";
  startButton.textContent = "Start";
  scoreContainer.textContent = "Score: 0";

  let highScore = localStorage.getItem("highScore") || 0;
  highScoreContainer.textContent = `High Score: ${highScore}`;

  let score = 0;
  let isGameRunning = false;
  let scoreInterval;

  function jump() {
    if (!character.classList.contains("animate")) {
      character.classList.add("animate");
    }

    setTimeout(function () {
      character.classList.remove("animate");
    }, 400);
  }

  function startGame() {
    const existingGameOver = document.getElementById("gameOver");
    if (existingGameOver) {
      existingGameOver.remove();
    }

    score = 0;
    scoreContainer.textContent = "Score: 0";
    isGameRunning = true;

    block.style.animation = "blockMove 1s infinite linear";
    block.style.display = "block";
    character.style.display = "block";
    assetsContainer.style.animation = "slideright 600s infinite linear";

    scoreInterval = setInterval(() => {
      if (isGameRunning) {
        score += 1;
        scoreContainer.textContent = `Score: ${score}`;
        adjustBlockSpeed();
      }
    }, 100);
  }

  function gameOver() {
    isGameRunning = false;
    clearInterval(scoreInterval);
    block.style.animation = "none";
    block.style.display = "none";
    character.style.display = "none";

    const gameOverTitle = document.createElement("h2");
    gameOverTitle.id = "gameOver";
    gameOverTitle.textContent = "Game Over";
    divApp.appendChild(gameOverTitle);

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScore", highScore);
      highScoreContainer.textContent = `High Score: ${highScore}`;
    }
  }

  function adjustBlockSpeed() {
    const speedIncreaseInterval = 100;
    const baseSpeed = 1.3;
    const maxSpeed = 0.5;
    const newSpeed = Math.max(
      baseSpeed - Math.floor(score / speedIncreaseInterval) * 0.1,
      maxSpeed
    );

    block.style.animation = `blockMove ${newSpeed}s infinite linear`;
  }

  jumpButton.addEventListener("click", jump);
  startButton.addEventListener("click", startGame);

  let checkDead = setInterval(function () {
    let characterRect = character.getBoundingClientRect();
    let blockRect = block.getBoundingClientRect();

    if (
      blockRect.left < characterRect.right &&
      blockRect.right > characterRect.left &&
      blockRect.top < characterRect.bottom &&
      blockRect.bottom > characterRect.top
    ) {
      gameOver();
    }
  }, 10);

  gameContainer.append(
    assetsContainer,
    buttonContainer,
    scoreContainer,
    highScoreContainer
  );
  assetsContainer.append(character, block);
  buttonContainer.append(startButton, jumpButton);
  divApp.append(gameContainer);
};
