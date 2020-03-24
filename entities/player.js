import keyboard from '../utils/keyboard.js';
import resources from '../utils/resources.js';

class Player {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.src = 'res/dude-stand.png';
    this.size = 40;
    this.speed = 400; // 150
  }

  getBoundingBox() {
    return {
      x: this.x - this.size / 2,
      y: this.y - this.size / 2,
      w: this.size,
      h: this.size,
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