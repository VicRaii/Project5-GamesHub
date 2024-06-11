import "./JumperGame.css";

export const JumperGame = () => {
  const divApp = document.querySelector("#app");
  const gameContainer = document.createElement("div");
  const character = document.createElement("div");
  const block = document.createElement("div");
  const buttonContainer = document.createElement("div");
  const startButton = document.createElement("button");
  const jumpButton = document.createElement("button");

  gameContainer.id = "game";
  character.id = "character";
  block.id = "block";
  buttonContainer.id = "buttonContainer";
  startButton.id = "startButton";
  jumpButton.id = "jumpButton";
  jumpButton.textContent = "Jump";
  startButton.textContent = "Start";

  startButton.addEventListener("click", () => {
    const app = document.querySelector("#app");
    app.innerHTML = "";
    JumperGame();
  });

  function jump() {
    if (!character.classList.contains("animate")) {
      character.classList.add("animate");
    }

    setTimeout(function () {
      character.classList.remove("animate");
    }, 500);
  }

  // Aquí corregimos el listener
  jumpButton.addEventListener("click", jump);

  // let checkDead = setInterval(function () {
  //   let characterTop = parseInt(
  //     window.getComputedStyle(character).getPropertyValue("top")
  //   );
  //   let blockLeft = parseInt(
  //     window.getComputedStyle(block).getPropertyValue("left")
  //   );
  //   if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
  //     block.style.animation = "none";
  //     setTimeout(() => {
  //       block.style.display = "";
  //     }, 10);
  //     alert("Defeated!");
  //   }
  // }, 10);

  gameContainer.append(character, block, buttonContainer);
  buttonContainer.append(startButton, jumpButton);
  divApp.append(gameContainer);
};
