import "../styles/style.css";
import javascript from "../public/assets/javascript.svg";
import tailwind from "../public/assets/tailwind.svg";
import vite from "../public/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<div id="app">
<div id="app-title">
  <h1 id="app-title">Tailwind</h1>
</div>
<div id="app-container">
  <a href="https://vitejs.dev" target="_blank">
    <img src="${vite}" id="img" alt="logo-vite" width={75} />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    <img src="${javascript}" id="img" alt="logo-javascript" width={75} />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  <img src="${tailwind}" id="img" alt="logo-tailwind" width="75" />
</a>
</div>
<div id="app-card">
<div class="card">
  <button id="counter" type="button"></button>
</div>
  <p>
    Edit <code>./scripts/main.js</code> and save to test Hmr
  </p>
</div>
<p id="read">
  Click on the Vite.js and Javascript logos to learn more
</p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
