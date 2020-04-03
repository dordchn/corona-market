import Entity from './entity.js';

class Piece extends Entity {
  constructor(x, y, size, res) {
    super(x - size / 2, y - size / 2, size, size, res);

    this.arc = {
      x: x,
      y: y,
      r: size / 2,
    };
  }

  getBoundingArc() {
    return this.arc;
  }
}

export default Piece;