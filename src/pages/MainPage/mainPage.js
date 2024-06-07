import "./mainPage.css";

export const mainPage = () => {
  const mainPageContainer = document.createElement("div");
  const mainPageTitle = document.createElement("h2");
  const app = document.querySelector("#app");

  mainPageContainer.className = "mainPageContainer";
  mainPageTitle.id = "mainPageTitle";
  mainPageTitle.innerHTML = `
  <h1>Wellcome to my GamesHub</h1>
  <h2>Pick a Game</h2>
  `;

  mainPageContainer.appendChild(mainPageTitle);
  app.appendChild(mainPageContainer);
};
