
class Seller {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  render(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = "#663300";
    ctx.arc(this.x, this.y, 18, 0, 2 * Math.PI);
    ctx.fill();
    // ctx.stroke();
    ctx.restore();
  }
}

export default Seller;