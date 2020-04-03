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
      width: this.size,
      height: this.size,
    };
  }

  render(ctx) {
    if (!this.res) return;
    let img = resources.get(this.res);
    ctx.drawImage(img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
  }
}

export default Item;