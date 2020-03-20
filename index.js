import resources from './resources.js';
import Player from './entities/player.js';
import Obstacle from './entities/obstacle.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let prevLoopTime;
let floorPattern;
let game = {
  player: new Player(/*x=*/ 100, /*y=*/ 200, /*rotation=*/ 0),
  obstacles: [
    new Obstacle(22,22,980, 40), // top shelf

    new Obstacle(22,82,40, 450), // left shelf
    
    // Inner shelves
    new Obstacle(182,142,40, 390),
    new Obstacle(302,142,40, 390),
    new Obstacle(422,142,40, 390),
    new Obstacle(542,142,40, 390),
    new Obstacle(662,142,40, 390),

    new Obstacle(782,142,140, 390), // Freezer

    new Obstacle(782,142,140, 390), // Door
  ],
};

resources.loadMultiple([
  'res/floor.png',
  'res/dude-stand.png',
  'res/dude-walk1.png',
  'res/dude-walk2.png',
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
  game.player.update(dt);
}

function render() {
  ctx.fillStyle = floorPattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw entities
  game.player.render(ctx);
  for (let obstacle of game.obstacles) {
    obstacle.render(ctx);
  }
}
