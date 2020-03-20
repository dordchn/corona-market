
class Obstacle {
  constructor(x, y, width, height, type) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = "#FFFFFF";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

export default Obstacle;