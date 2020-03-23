import resources from '../utils/resources.js';

class Seller {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.popupImg = null;
    this.popupOffset = 0;
  }

  showPopup(res, offsetX = 0) {
    if (this.popupImg) {
      return;
    }
    this.popupImg = resources.get(res);
    this.popupOffset = offsetX;
  }

  hidePopup() {
    this.popupImg = null;
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
    if (this.popupImg) {
      ctx.drawImage(this.popupImg, this.x - this.popupImg.width + this.popupOffset, this.y - this.popupImg.height - 10);
    }
  }
}

export default Seller;