import "./Header.css";

export const createHeader = (data) => {
  const app = document.querySelector("#app");
  const header = document.createElement("header");
  const title = document.createElement("h1");
  const gamesNav = document.createElement("nav");

  header.id = "header";
  title.textContent = "GamesHub";
  title.id = "title";
  gamesNav.className = "nav";

  data.forEach((game) => {
    const anchor = document.createElement("a");
    const gameButton = document.createElement("button");

    anchor.className = "anchor";
    anchor.href = game.id;
    gameButton.className = "game-btn";
    gameButton.id = game.name;
    gameButton.textContent = game.name;

    anchor.append(gameButton);
    gamesNav.append(anchor);
  });

  header.append(title, gamesNav);

  document.body.insertBefore(header, app);
};
