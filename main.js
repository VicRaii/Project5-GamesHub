import { createHeader } from "./src/components/Header/Header";
import { memoryGame } from "./src/pages/MemoryGame/memoryGame";
import { mainPage } from "./src/pages/MainPage/mainPage";
import { GAMES, QUIZ } from "./src/data/data";
import "./style.css";
import { footer } from "./src/components/Footer/Footer";

createHeader(GAMES);
mainPage();
footer();

const returnToMainPage = document.querySelector("#title");

returnToMainPage.addEventListener("click", () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  mainPage();
});

const gameButton = document.querySelector(".game-btn");
gameButton.addEventListener("click", () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  memoryGame(GAMES[0].id);
});
