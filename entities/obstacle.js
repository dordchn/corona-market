import Entity from './entity.js';
import resources from '../utils/resources.js';

class Obstacle extends Entity {
  constructor(x, y, width, height, style = { color: '#8b5a3b', shade: true }) {
    super(x, y, width, height);
    this.style = style;

    this.boundingArc = {
      x: this.rect.x + this.rect.width / 2,
      y: this.rect.y + this.rect.height / 2,
      r: (this.rect.width + this.rect.height) / 4, // Size(average) / 2
    };
  }

  getBoundingArc() {
    return this.boundingArc;
  }

  render(ctx) {
    if (this.style && this.style.src) {
      let img = resources.get(this.style.src);
      ctx.drawImage(img, this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    } else {
      ctx.save();
      ctx.beginPath();
      ctx.strokeStyle = '#000000';
      ctx.fillStyle = this.style.color;
      ctx.rect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
      ctx.fill();
      ctx.stroke();
      ctx.restore();

      if (this.style.shade) {
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fillRect(this.rect.x + this.rect.width - 20, this.rect.y, 10, this.rect.height);
      }
    }
  }
}

export default Obstacle;