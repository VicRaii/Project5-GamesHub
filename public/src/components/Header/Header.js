import { initHangedGame } from "../../pages/HangedGame/hangedGame";
import { initMemoryGame } from "../../pages/MemoryGame/memoryGame";
import { initTivialGame } from "../../pages/TrivialGame/trivialGame";
import "./Header.css";

export const Header = (divApp) => {
  const header = document.createElement("header");
  const buttonHangedGame = document.createElement("button");
  const buttonMemoryGame = document.createElement("button");
  const buttonTrivialGame = document.createElement("button");

  buttonHangedGame.textContent = "Hanged";
  buttonMemoryGame.textContent = "Memory";
  buttonTrivialGame.textContent = "Trivial";

  buttonHangedGame.addEventListener("click", initHangedGame);
  buttonMemoryGame.addEventListener("click", initMemoryGame);
  buttonTrivialGame.addEventListener("click", initTivialGame);

  header.append(buttonHangedGame, buttonMemoryGame, buttonTrivialGame);
  divApp.append(header);
};
