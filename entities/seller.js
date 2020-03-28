import resources from '../utils/resources.js';

class Seller {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
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
    let img = resources.get('res/imgs/seller.svg');
    ctx.drawImage(img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    if (this.popupImg) {
      ctx.drawImage(this.popupImg, this.x - this.popupImg.width + this.popupOffset, this.y - this.popupImg.height - 10);
    }
  }
}

export default Seller;