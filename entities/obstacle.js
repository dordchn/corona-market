
class Obstacle {
  constructor(x, y, width, height, type) {
    this.box = {
      x: x,
      y: y,
      w: width,
      h: height,
    };
    this.type = type;
  }

  getBoundingBox() {
    return this.box;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = "#FFFFFF";
    ctx.rect(this.box.x, this.box.y, this.box.w, this.box.h);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

export default Obstacle;