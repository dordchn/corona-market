import resources from '../utils/resources.js';

class Obstacle {
  constructor(x, y, width, height, style = {color: '#8b5a3b', shade: true}) {
    this.box = {
      x: x,
      y: y,
      w: width,
      h: height,
    };
    this.style = style;

    this.boundingArc = {
      x: this.box.x + this.box.w / 2,
      y: this.box.y + this.box.h / 2,
      r: (this.box.w + this.box.h) / 4, // Size(average) / 2
    };
  }

  getBoundingBox() {
    return this.box;
  }

  getBoundingArc() {
    return this.boundingArc;
  }

  render(ctx) {
    // todo: draw item from linear pattern resource
    if (this.style && this.style.src) {
      let img = resources.get(this.style.src);
      ctx.drawImage(img, this.box.x, this.box.y, this.box.w, this.box.h);
    } else {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = '#000000';
      ctx.fillStyle = this.style.color;
      ctx.rect(this.box.x, this.box.y, this.box.w, this.box.h);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      if (this.style.shade) {
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fillRect(this.box.x + this.box.w - 20, this.box.y, 10, this.box.h);
      }
    }
  }
}

export default Obstacle;