import { createHeader } from "./src/components/Header/Header";
import { memoryGame } from "./src/pages/MemoryGame/memoryGame";
import { mainPage } from "./src/pages/MainPage/mainPage";
import { GAMES } from "./src/data/data";
import "./style.css";
import { footer } from "./src/components/Footer/Footer";
import { JumperGame } from "./src/pages/JumperGame/JumperGame";
import { HangManGame } from "./src/pages/TrivialGame/HangMan";

createHeader(GAMES);
mainPage();
footer();

const returnToMainPage = document.querySelector("#title");

returnToMainPage.addEventListener("click", () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  mainPage();
});

const memoryButton = document.querySelector("#Memory");
memoryButton.addEventListener("click", () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  memoryGame(GAMES[0].id);
});

const JumperGameButton = document.querySelector("#Jumper");
JumperGameButton.addEventListener("click", () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  JumperGame();
});

const HangManGameButton = document.querySelector("#HangMan");
HangManGameButton.addEventListener("click", () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  HangManGame();
});
