import resources from './utils/resources.js';
import sounds from './utils/sounds.js';
import { boxCollides, boxContains } from './utils/collision.js';

class Game extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
    this.shadowDOM.innerHTML = `
      <style>
        .container {
          display: inline-block;
          width: 1024px;
        }
        canvas {
          border: 1px solid black;
        }
        .signs-container {
          visibility: hidden;
          margin-top: 4px;
          font-size: 22px;
        }
        .entrance {
          float: left;
          margin-left: 94px;
        }
        .exit {
          float: right;
          margin-right: 102px;
        }
      </style>
      <div class="container">
        <canvas width="1024" height="576"></canvas>
        <div class="signs-container">
          <span class="entrance">Entrance</span>
          <span class="exit">Exit</span>
        </div>
      </div>
    `
      ;

    this.canvas = this.shadowDOM.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ready = false;
    this.active = false;
    this.level = null;
    this.floorPattern = null;
    this.prevLoopTime = null;

    this.requestId = null;
    this.signs = this.shadowDOM.querySelector('.signs-container');
  }

  async init() {
    await resources.loadImages([
      'res/imgs/floor.png',
      'res/imgs/freezer.svg',
      'res/imgs/vegetables.png',
      'res/imgs/virus.svg',

      // Player
      'res/imgs/player.svg',
      'res/imgs/player-left.svg',
      'res/imgs/player-right.svg',

      // Seller
      'res/imgs/seller.svg',
      'res/imgs/seller-forget.png',

      // Buyers
      'res/imgs/buyer1-left.svg', 'res/imgs/buyer1-right.svg',
      'res/imgs/buyer2-left.svg', 'res/imgs/buyer2-right.svg',
      'res/imgs/buyer3-left.svg', 'res/imgs/buyer3-right.svg',
      'res/imgs/buyer4-left.svg', 'res/imgs/buyer4-right.svg',

      // Items
      'res/imgs/items/avocado.svg',
      'res/imgs/items/bread.svg',
      'res/imgs/items/broccoli.svg',
      'res/imgs/items/cabbage.svg',
      'res/imgs/items/carrot.svg',
      'res/imgs/items/cereal.svg',
      'res/imgs/items/honey.svg',
      'res/imgs/items/juice.svg',
      'res/imgs/items/milk.svg',
      'res/imgs/items/paper.svg',
      'res/imgs/items/tomato.svg',
    ]);

    this.floorPattern = this.ctx.createPattern(resources.get('res/imgs/floor.png'), 'repeat');

    document.addEventListener('keydown', evt => {
      if (!this.level) return;
      let playerBB = this.level.player.getBoundingBox();
      if (evt.key == ' ' && !evt.repeat) {
        let itemsBefore = this.level.items.length;
        this.level.items = this.level.items.filter(item => {
          return !boxCollides(playerBB, item.getBoundingBox());
        });
        if (this.level.items.length < itemsBefore) {
          this.dispatchEvent(new CustomEvent('point'));
        } else {
          sounds.play('res/sounds/illegal.mp3', 0.7);
        }
      }
    });

    this.reset();

    this.ready = true;
  }

  reset() {
    this.active = false;
    this.ctx.fillStyle = this.floorPattern;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.signs.style.visibility = 'hidden';
  }

  loadLevel(levelBuilder) {
    this.level = levelBuilder();
    this.active = true;
    this.signs.style.visibility = 'visible';

    this.prevLoopTime = Date.now();
    this.mainLoop();
  }

  // The main this.level loop
  mainLoop() {
    if (!this.active) {
      return;
    }
    let now = Date.now();
    let dt = (now - this.prevLoopTime) / 1000.0;
    this.update(dt);
    this.render();

    this.prevLoopTime = now;
    this.requestId = window.requestAnimationFrame(() => this.mainLoop());
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

    // Test loss
    for (let customer of this.level.customers) {
      if (Math.hypot(this.level.player.x - customer.x, this.level.player.y - customer.y) <= customer.infectingRadius + this.level.player.size / 2) {
        this.stop();
        this.dispatchEvent(new CustomEvent('loss'));
        break;
      }
    }

    // Test win
    if (boxCollides(this.level.player.getBoundingBox(), this.level.exit.getBoundingBox())) {
      if (this.level.items.length == 0) {
        this.stop();
        this.dispatchEvent(new CustomEvent('win'));
      } else if (!this.level.exit.touching) {
        sounds.play('res/sounds/illegal.mp3');
        this.level.seller.showPopup('res/imgs/seller-forget.png', 30);
        this.level.exit.touching = true;
      }
    } else if (this.level.exit.touching) {
      this.level.exit.touching = null;
      this.level.seller.hidePopup();
    }
  }

  render() {
    this.ctx.fillStyle = this.floorPattern;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw entities
    for (let customer of this.level.customers) {
      customer.render(this.ctx);
    }

    this.level.player.render(this.ctx);

    for (let obstacle of this.level.obstacles) {
      obstacle.render(this.ctx);
    }
    this.level.exit.render(this.ctx);

    for (let item of this.level.items) {
      item.render(this.ctx);
    }

    this.level.seller.render(this.ctx);
  }

  stop() {
    this.active = false;
  }
}

customElements.define('x-game', Game);