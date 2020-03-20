import resources from './resources.js';
import keyboard from './keyboard.js';

const PLAYER_SPEED = 60; // px / s

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let prevLoopTime;
let floorPattern;
let gameState = {
  player: { x: 100, y: 200, res: 'res/dude-stand.png' }
};

resources.loadMultiple([
  'res/floor.png',
  'res/dude-stand.png',
]).then(() => {
  init();
});

function init() {
  floorPattern = ctx.createPattern(resources.get('res/floor.png'), 'repeat');

  prevLoopTime = Date.now();
  mainLoop();
}

// The main game loop
function mainLoop() {
  let now = Date.now();
  let dt = (now - prevLoopTime) / 1000.0;
  update(dt);
  render();

  prevLoopTime = now;
  window.requestAnimationFrame(mainLoop);
};

function update(dt) {
  // Update entities
  if (keyboard.isDown('ArrowUp')) {
    gameState.player.y -= PLAYER_SPEED * dt;
  }
  if (keyboard.isDown('ArrowDown')) {
    gameState.player.y += PLAYER_SPEED * dt;
  }
  if (keyboard.isDown('ArrowLeft')) {
    gameState.player.x -= PLAYER_SPEED * dt;
  }
  if (keyboard.isDown('ArrowRight')) {
    gameState.player.x += PLAYER_SPEED * dt;
  }
}

function render() {
  ctx.fillStyle = floorPattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(resources.get(gameState.player.res), gameState.player.x, gameState.player.y);
  // Draw entities
}
