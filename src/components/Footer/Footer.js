import "./Footer.css";

export const footer = () => {
  const body = document.querySelector("body");
  const footer = document.createElement("footer");
  footer.innerHTML = `
        <h3>Designed and Developed by Víctor Ruiz</h3>
    `;

  body.appendChild(footer);
};
