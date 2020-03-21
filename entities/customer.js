
class Customer {
  constructor(route, res) {
    this.x = route[0].x;
    this.y = route[0].y;
    this.dst = 1 % route.length;
    this.size = 40;
    this.res = res;
    this.route = route;
    this.speed = 80;
    this.speedToDst = this.getXySpeed();
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
      vy: this.speed * Math.sin(dir)
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
    } else {
      this.x += this.speedToDst.vx * dt;
      this.y += this.speedToDst.vy * dt;
    }
  }

  render(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#00FF00';
    ctx.arc(this.x, this.y, 18, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

export default Customer;