import resources from '../utils/resources.js';

class Entity {
  constructor(x, y, width, height, res = null) {
    this.rect = {
      x: x,
      y: y,
      width: width,
      height: height,
    }
    this.res = res;
  }

  getBoundingBox() {
    return this.rect;
  }

  render(ctx) {
    if (this.res) {
      let img = resources.get(this.res);
      ctx.drawImage(img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    } else { // Default rendering (missing resource)
      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
      ctx.strokeRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
  }
}

export default Entity;