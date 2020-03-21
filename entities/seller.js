
class Seller {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  render(ctx) {
    // todo: add communication popup ("Don't you forget something?" "Pay first")
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