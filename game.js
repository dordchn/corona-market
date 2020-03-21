import resources from './utils/resources.js';
import { boxCollides, boxContains } from './utils/collision.js';

class Game {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ready = false;
    this.level = null;
    this.floorPattern = null;
    this.prevLoopTime = null;
  }

  async init() {
    await resources.loadImages([
      'res/floor.png',
      'res/dude-stand.png',
      'res/dude-walk1.png',
      'res/dude-walk2.png',
    ]);

    this.floorPattern = this.ctx.createPattern(resources.get('res/floor.png'), 'repeat');

    document.addEventListener('keydown', evt => {
      if (!this.level) return;
      let playerBB = this.level.player.getBoundingBox();
      if (evt.key == ' ' && !evt.repeat) {
        this.level.items = this.level.items.filter(item => {
          return !boxCollides(playerBB, item.getBoundingBox());
        });
      }
    });

    this.ctx.fillStyle = this.floorPattern;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ready = true;
  }

  loadLevel(level) {
    this.level = level;

    this.prevLoopTime = Date.now();
    this.mainLoop();
  }

  // The main this.level loop
  mainLoop() {
    let now = Date.now();
    let dt = (now - this.prevLoopTime) / 1000.0;
    this.update(dt);
    this.render();

    this.prevLoopTime = now;
    window.requestAnimationFrame(() => this.mainLoop());
  };

  update(dt) {
    // Update entities
    this.level.player.update(dt, (boundingBox) => { // validator
      let collides = false;
      for (let obstacle of this.level.obstacles) {
        if (boxCollides(boundingBox, obstacle.getBoundingBox())) {
          collides = true;
          break;
        }
      }
      let inStore = boxContains({ x: 0, y: 0, w: this.canvas.width, h: this.canvas.height }, boundingBox);
      return !collides && inStore;
    });
    for (let customer of this.level.customers) {
      customer.update(dt);
    }

    // Test interaction
    for (let customer of this.level.customers) {
      if (boxCollides(this.level.player.getBoundingBox(), customer.getBoundingBox())) {
        this.endGame();
        break;
      }
    }
  }

  render() {
    this.ctx.fillStyle = this.floorPattern;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw entities
    this.level.player.render(this.ctx);

    for (let obstacle of this.level.obstacles) {
      obstacle.render(this.ctx);
    }

    for (let customer of this.level.customers) {
      customer.render(this.ctx);
    }

    for (let item of this.level.items) {
      item.render(this.ctx);
    }

    this.level.seller.render(this.ctx);
  }

  endGame() {
    alert("Game over!");
  }
}

export default Game;