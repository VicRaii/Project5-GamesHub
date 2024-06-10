import "./mainPage.css";

export const mainPage = () => {
  const mainPageContainer = document.createElement("div");
  const mainPageTitle = document.createElement("h2");
  const app = document.querySelector("#app");

  mainPageContainer.className = "mainPageContainer";
  mainPageTitle.id = "mainPageTitle";
  mainPageTitle.innerHTML = `
  <h2>Wellcome to my GamesHub</h2>
  <h1>Pick a Game</h1>
    <a href="#Memory"><img src="" alt="">Memory</a>
    <a href="#Hanged"><img src="" alt=""></a>
    <a href="#Trivial"><img src="" alt=""></a>
  `;

  mainPageContainer.appendChild(mainPageTitle);
  app.appendChild(mainPageContainer);
};
