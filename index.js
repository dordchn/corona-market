const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let prevLoopTime;
let floorPattern;

const floorImage = new Image();
floorImage.onload = function () {
  init();
};
floorImage.src = 'res/floor.png';

function init() {
  floorPattern = ctx.createPattern(floorImage, 'repeat');

  prevLoopTime = Date.now();
  mainLoop();
}

// The main game loop
function mainLoop() {
  let now = Date.now();
  let dt = now - prevLoopTime; //  / 1000.0;
  update(dt);
  render();

  lastTime = now;
  window.requestAnimationFrame(mainLoop);
};

function update(dt) {
  // Update entities
}

function render() {
  ctx.fillStyle = floorPattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw entities
}
