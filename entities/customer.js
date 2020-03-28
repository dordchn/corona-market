import resources from '../utils/resources.js';

class Customer {
  constructor(route, resLeft, resRight) {
    this.x = route[0].x;
    this.y = route[0].y;
    this.dst = 1 % route.length;
    this.size = 40;
    this.resLeft = resLeft;
    this.resRight = resRight;
    this.route = route;
    this.speed = 80;
    this.speedToDst = this.getXySpeed();
    this.timeOffset = Math.floor(Math.random() * 600);
    this.rotation = this.speedToDst.dir;
  }

  getBoundingBox() {
    return {
      x: this.x - this.size / 2,
      y: this.y - this.size / 2,
      w: this.size,
      h: this.size,
    };
  }

  getXySpeed() {
    let dir = Math.atan2(this.route[this.dst].y - this.y, this.route[this.dst].x - this.x);
    return {
      vx: this.speed * Math.cos(dir),
      vy: this.speed * Math.sin(dir),
      dir: dir,
    };
  }

  update(dt) {
    // move according to route
    let distFromDst = Math.hypot(this.route[this.dst].x - this.x, this.route[this.dst].y - this.y);
    if (distFromDst <= this.speed * dt) { // Reaching destination
      this.x = this.route[this.dst].x;
      this.y = this.route[this.dst].y;
      this.dst = (this.dst + 1) % this.route.length;
      this.speedToDst = this.getXySpeed();
      this.rotation = this.speedToDst.dir;
    } else {
      this.x += this.speedToDst.vx * dt;
      this.y += this.speedToDst.vy * dt;
    }
    this.res = ((Date.now() + this.timeOffset) % 600 < 300) ? this.resLeft : this.resRight;
  }

  render(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation + Math.PI / 2);
    let img = resources.get(this.res);
    ctx.drawImage(img, -img.width / 2, -img.height / 2);
    ctx.restore();
  }
}

export default Customer;