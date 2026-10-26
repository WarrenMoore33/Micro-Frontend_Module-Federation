import { render } from "solid-js/web";

import "./index.css";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: addtocart</div>
    <div>Framework: solid-js</div>
  </div>
);

const app = document.getElementById("app");

if (app) {
  render(App, app);
}
