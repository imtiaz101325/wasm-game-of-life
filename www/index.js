import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("canvas");
const universe = Universe.new();

const renderLoop = () => {
  pre.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);
