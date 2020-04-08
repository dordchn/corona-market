import keyboard from '../utils/keyboard.js';
import resources from '../utils/resources.js';

class Player {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.size = 38; // A bit smaller than the player's assets (40x40)
    this.speed = 150;
    this.sick = false;
  }

  getBoundingBox() {
    return {
      x: this.x - this.size / 2,
      y: this.y - this.size / 2,
      width: this.size,
      height: this.size,
    };
  }

  getBoundingArc() {
    return {
      x: this.x,
      y: this.y,
      r: this.size * 0.4,
    };
  }

  update(dt, validator) {
    let newPos = null;
    let dirKey = null;

    let recentKey = keyboard.getRecentDown();
    if (recentKey && recentKey.substr(0, 5) == "Arrow") {
      dirKey = recentKey;
    } else {
      dirKey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].find(key => keyboard.isDown(key));
    }

    if (dirKey == 'ArrowUp') {
      newPos = { x: this.x, y: this.y - this.speed * dt, r: 0 };
    } else if (dirKey == 'ArrowDown') {
      newPos = { x: this.x, y: this.y + this.speed * dt, r: 180 };
    } else if (dirKey == 'ArrowLeft') {
      newPos = { x: this.x - this.speed * dt, y: this.y, r: 270 };
    } else if (dirKey == 'ArrowRight') {
      newPos = { x: this.x + this.speed * dt, y: this.y, r: 90 };
    }

    if (newPos) {
      this.res = (Date.now() % 600 < 300) ? 'res/imgs/player-left.svg' : 'res/imgs/player-right.svg';
      this.rotation = newPos.r;

      let newBoundingBox = {
        x: newPos.x - this.size / 2,
        y: newPos.y - this.size / 2,
        width: this.size,
        height: this.size,
      };
      if (validator(newBoundingBox)) {
        this.x = newPos.x;
        this.y = newPos.y;
      }
    } else {
      this.res = 'res/imgs/player.svg';
    }
  }

  toggleSick() {
    this.sick = !this.sick;
  }

  render(context) {
    context.save();
    if (this.sick) {
      context.beginPath();
      context.fillStyle = 'rgba(0, 180, 0, 0.4)';
      context.arc(this.x, this.y, 50, 0, 2 * Math.PI);
      context.fill();
    }

    context.translate(this.x, this.y);
    context.rotate(this.rotation * Math.PI / 180);
    let img = resources.get(this.res);
    context.drawImage(img, -img.width / 2, -img.height / 2);
    context.restore();
  }
}

export default Player;