import "./mainPage.css";

let sound;

export const mainPage = () => {
  const mainPageContainer = document.createElement("div");
  const mainPageTitle = document.createElement("div");
  const app = document.querySelector("#app");

  mainPageContainer.className = "mainPageContainer";
  mainPageTitle.id = "mainPageTitle";
  mainPageTitle.innerHTML = `
  <h1>Welcome to my GamesHub</h1>
  <h2>Play Some Music</h2>
  `;

  if (!sound) {
    sound = new Audio("./gaming-lofi-mix-comprimido.mp3");
  }

  const audioDiv = document.createElement("div");
  const playButton = document.createElement("button");
  const pauseButton = document.createElement("button");

  audioDiv.classList.add("buttonContainer");
  playButton.id = "playBtn";
  pauseButton.id = "pauseBtn";
  playButton.textContent = "Play";
  pauseButton.textContent = "Pause";

  playButton.addEventListener("click", () => {
    sound.play();
  });

  pauseButton.addEventListener("click", () => {
    sound.pause();
  });

  audioDiv.append(playButton, pauseButton);

  mainPageContainer.append(mainPageTitle, audioDiv);
  app.appendChild(mainPageContainer);
};
