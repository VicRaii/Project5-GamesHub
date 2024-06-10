import "./Footer.css";

export const footer = () => {
  const body = document.querySelector("body");
  const footer = document.createElement("footer");
  footer.innerHTML = `
        <audio
        autoplay
        src="/assets/gaming lofi mix.mp3"
        type="audio/mp3">
        </audio>
        <h3>Designed by Víctor</h3>
    `;

  body.appendChild(footer);
};
