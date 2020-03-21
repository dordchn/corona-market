
class Item {
  constructor(x, y, res) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.res = res;
  }

  getBoundingBox() {
    return {
      x: this.x - this.size / 2,
      y: this.y - this.size / 2,
      w: this.size,
      h: this.size,
    };
  }

  render(ctx) {
    // todo: draw image from resource.
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = this.res;
    ctx.arc(this.x, this.y, 18, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
}

export default Item;