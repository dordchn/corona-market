import Piece from './piece.js';
import resources from '../utils/resources.js';

class Seller extends Piece {
  constructor(x, y) {
    super(x, y, 40, 'res/imgs/seller.svg');
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
    super.render(ctx);
    if (this.popupImg) {
      ctx.drawImage(this.popupImg, this.x - this.popupImg.width + this.popupOffset, this.y - this.popupImg.height - 10);
    }
  }
}

export default Seller;