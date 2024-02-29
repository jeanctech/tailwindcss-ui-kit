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
</p>
  </div>
`;

setupCounter(document.querySelector("#counter"));
