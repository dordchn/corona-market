import keyboard from '../keyboard.js';
import resources from '../resources.js';

class Player {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.src = 'res/dude-stand.png';
    this.speed = 100;
  }

  update(dt) {
    let moving = false;
    if (keyboard.isRecentDown('ArrowUp')) {
      this.y -= this.speed * dt;
      this.rotation = 0;
      moving = true;
    }
    if (keyboard.isRecentDown('ArrowDown')) {
      this.y += this.speed * dt;
      this.rotation = 180;
      moving = true;
    }
    if (keyboard.isRecentDown('ArrowLeft')) {
      this.x -= this.speed * dt;
      this.rotation = 270;
      moving = true;
    }
    if (keyboard.isRecentDown('ArrowRight')) {
      this.x += this.speed * dt;
      this.rotation = 90;
      moving = true;
    }
    if (moving) {
      this.res = (Date.now() % 600 < 300) ? 'res/dude-walk1.png' : 'res/dude-walk2.png';
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