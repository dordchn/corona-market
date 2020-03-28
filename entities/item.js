import resources from '../utils/resources.js';

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
    if (!this.res) return;
    ctx.save();
    let img = resources.get(this.res);
    ctx.drawImage(img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

export default Item;