import keyboard from '../keyboard.js';
import resources from '../resources.js';

class Player {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.src = 'res/dude-stand.png';
    this.size = 40;
    this.speed = 120;
  }

  update(dt, validator) {
    let newPos = null;
    if (keyboard.isRecentDown('ArrowUp')) {
      newPos = { x: this.x, y: this.y - this.speed * dt, r: 0 };
    }
    if (keyboard.isRecentDown('ArrowDown')) {
      newPos = { x: this.x, y: this.y + this.speed * dt, r: 180 };
    }
    if (keyboard.isRecentDown('ArrowLeft')) {
      newPos = { x: this.x - this.speed * dt, y: this.y, r: 270 };
    }
    if (keyboard.isRecentDown('ArrowRight')) {
      newPos = { x: this.x + this.speed * dt, y: this.y, r: 90 };
    }
    if (newPos) {
      this.res = (Date.now() % 600 < 300) ? 'res/dude-walk1.png' : 'res/dude-walk2.png';
      this.rotation = newPos.r;

      let newBoundingBox = {
        x: newPos.x - this.size / 2,
        y: newPos.y - this.size / 2,
        w: this.size,
        h: this.size,
      };
      if (validator(newBoundingBox)) {
        this.x = newPos.x;
        this.y = newPos.y;
      }
    } else {
      this.res = 'res/dude-stand.png';
    }
  }

  render(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation * Math.PI / 180);
    let img = resources.get(this.res);
    context.drawImage(img, -img.width / 2, -img.height / 2);
    context.restore();
  }
}

export default Player;