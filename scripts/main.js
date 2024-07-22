<<<<<<< HEAD
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
=======
import '../Styles/Style.css';
import Js from "../Public/Assets/Js.svg";
import Vite from "/Public/Vite.svg";
import { setupCounter } from "./Counter.js/index.js";

document.querySelector("#app").innerHTML = `
<div id="app" >
<div id="app-container" >
  <h1 id="app-title">Templates</h1>
  <a href="https://vitejs.dev" target="_blank" >
    <img src="${Vite}" id="img" alt="Vite-Logo" width="75" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" >
    <img src="${Js}" id"img" alt="Js-Logo" width="60" />
  </a>
</div>
<div id="app-card" >
<div class="card" >
  <button id="counter" type="button"></button>
</div>
  <p id="p" >
    Edit <code>./Scripts/Main.Js</code> and save to test Hmr
  </p>
</div>
<p id="read" >
  Click on the Vite and Js logos to learn more
>>>>>>> d841e107b1eec7a0c6506c961dded372341ffd0c
</p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
