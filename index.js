import resources from './resources.js';
import Player from './entities/player.js';
import Obstacle from './entities/obstacle.js';
import Item from './entities/item.js';
import Seller from './entities/seller.js';
import { boxCollides, boxContains } from './utils.js';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let prevLoopTime;
let floorPattern;
let game = {
  player: new Player(/*x=*/ 140, /*y=*/ 530, /*rotation=*/ 0),
  obstacles: [

    new Obstacle(80, 556, 120, 20), // Entrance
    new Obstacle(844, 556, 120, 20), // Exit

    new Obstacle(600, 50, 300, 100), // Freezer
    new Obstacle(600, 220, 300, 40), // Shelf below freezer
    new Obstacle(984, 0, 40, 370), // Right shelf
    new Obstacle(480, 0, 40, 160),

    // Bottom shelves
    new Obstacle(360, 456, 40, 120),
    new Obstacle(480, 336, 40, 240),
    new Obstacle(600, 336, 40, 240),
    new Obstacle(720, 336, 40, 240),

    new Obstacle(0, 0, 40, 576), // Left shelf
    new Obstacle(40, 0, 440, 80), // Top shelf

    new Obstacle(934, 420, 30, 120), // Desk
  ],
  items: [
    new Item(40, 200, 'red'),
    new Item(640, 480, 'yellow'),
    new Item(700, 50, 'green'),
  ],
  seller: new Seller(990, 480), // Seller
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
  document.addEventListener('keydown', evt => {
    let playerBB = game.player.getBoundingBox();
    if (evt.key == ' ' && !evt.repeat) {
      // Remove all items that overlap with player.
      let i = 0;
      while (i < game.items.length) {
        if (boxCollides(playerBB, game.items[i].getBoundingBox())) {
          game.items.splice(i, 1);
        } 
        i++;
      }
    }
  });

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
  game.player.update(dt, (boundingBox) => {
    let collides = false;
    for (let obstacle of game.obstacles) {
      if (boxCollides(boundingBox, obstacle.getBoundingBox())) {
        collides = true;
        break;
      }
    }
    let inStore = boxContains({ x: 0, y: 0, w: canvas.width, h: canvas.height }, boundingBox);
    return !collides && inStore;
  });
}

function render() {
  ctx.fillStyle = floorPattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw entities
  game.player.render(ctx);

  for (let obstacle of game.obstacles) {
    obstacle.render(ctx);
  }

  for (let item of game.items) {
    item.render(ctx);
  }

  game.seller.render(ctx);
}
